import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json(
    {
      error:
        "Waitlist submissions now go directly to the Supabase join_waitlist function. Use the client form instead of this API route.",
    },
    { status: 410 },
  )
}
