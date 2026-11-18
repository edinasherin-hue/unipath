# UniPath — Next.js foundation

This is the first application foundation for the UniPath rebuild. It contains a responsive Next.js App Router landing page and safe placeholders for future Supabase and server-side AI configuration.

## Requirements
- Node.js 20.9 or later
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Environment variables
Copy `.env.example` to `.env.local` only when configuring integrations. Do not commit `.env.local` or API secrets.

- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL (later phase)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase publishable/anon key (later phase; protect data with RLS)
- `OPENAI_API_KEY`: server-side only; never expose with a `NEXT_PUBLIC_` prefix

## Important scope note
This foundation is not yet connected to a database, authentication provider, university catalogue, scholarship catalogue or AI model. The current page is an initial application shell. Do not describe it as a complete working platform.

## Deployment
Vercel should detect Next.js from `package.json`. Keep the existing `main` branch untouched while developing on the `development` branch.
