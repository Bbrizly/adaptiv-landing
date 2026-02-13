# Adaptiv Landing

A Next.js App Router landing page for the Adaptiv product marketing site.

## Development

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and provide the required configuration.
3. Run the local dev server with `npm run dev`.

## Waitlist Setup

The waitlist signup form calls the `join_waitlist` Supabase Edge Function. Configure the client-side environment variables before running the site:

- `NEXT_PUBLIC_SUPABASE_URL` – your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` – the anonymous public API key

These values should be added to `.env.local` and must never include the service role key.

## Test the waitlist flow

1. Run the site locally with `npm run dev`.
2. Visit `http://localhost:3000` and submit the waitlist form on the homepage.
3. Verify that the request succeeds ("You're on the list" success banner).
4. Open the Supabase Table Editor for the `waitlist` table and confirm the new row exists.
5. If you hit a CORS error, update the Edge Function using the guidance below.

## Supabase Edge Function CORS

The `join_waitlist` Edge Function code is managed inside Supabase, not this repo. If you see browser CORS errors while invoking it, edit the function to:

- Reply to `OPTIONS` requests with the appropriate `Access-Control-Allow-*` headers.
- Return `Access-Control-Allow-Origin` values that cover `http://localhost:3000` for local dev plus your production domain.
- Keep the service role key in Supabase function secrets; the website only uses the public anon key.

After redeploying the function with those headers, retry the form submission.
