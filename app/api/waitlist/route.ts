import { NextResponse } from "next/server"
import { z } from "zod"
import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/email-template';

const waitlistSchema = z.object({
  email: z.string().email("Please provide a valid email address."),
})

async function sendEmails(email: string) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const fromEmail = process.env.RESEND_FROM_EMAIL
  const forwardEmail = process.env.WAITLIST_FORWARD_EMAIL

  if (!process.env.RESEND_API_KEY || !fromEmail || !forwardEmail) {
    throw new Error(
      "Missing RESEND_API_KEY, RESEND_FROM_EMAIL, or WAITLIST_FORWARD_EMAIL env vars.",
    )
  }

  const from = fromEmail.includes("<") ? fromEmail : `Adaptiv Waitlist <${fromEmail}>`

  // Send notification to admin
  const adminResult = await resend.emails.send({
    from,
    to: [forwardEmail],
    subject: "New waitlist subscriber",
    text: `A new person joined the waitlist: ${email}`,
    html: `<p>A new person joined the Adaptiv waitlist:</p><p><strong>${email}</strong></p>`,
  });

  if (adminResult.error) {
    throw new Error(`Failed to send admin email: ${adminResult.error.message}`);
  }

  // Send confirmation to user
  const userResult = await resend.emails.send({
    from,
    to: [email],
    subject: "Welcome to the Adaptiv Waitlist!",
    react: EmailTemplate({ email }),
  });

  if (userResult.error) {
    throw new Error(`Failed to send user email: ${userResult.error.message}`);
  }
}

export async function POST(request: Request) {
  let json: unknown
  try {
    json = await request.json()
  } catch (error) {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 })
  }

  const result = waitlistSchema.safeParse(json)
  if (!result.success) {
    return NextResponse.json({ error: result.error.issues[0]?.message }, { status: 400 })
  }

  try {
    await sendEmails(result.data.email)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Failed to send waitlist emails", error)
    // For now, still return success to show the thank you message
    return NextResponse.json({ ok: true })
  }
}