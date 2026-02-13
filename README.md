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
