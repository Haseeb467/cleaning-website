# Clean Slate Co.

Premium responsive cleaning service website for the Austin demo brand Clean Slate Co.

## Run locally

This project uses **npm** (lockfile is `package-lock.json`).

```bash
npm install
npm run dev
```

The app listens on port 3000 by default. Use `npm run check` for TypeScript diagnostics and `npm run build` to create the production bundle.

Environment variables are optional for local development; copy `.env.example` to
`.env` and fill in only what you need (database, Manus platform values).

### Dependency patch

`patches/wouter+3.7.1.patch` adds a `window.__WOUTER_ROUTES__` collector to
Wouter's `Switch` component. It is applied automatically by `patch-package` on
`postinstall`. Because the patch targets an exact version, `wouter` is pinned to
`3.7.1` in `package.json` — do not widen that range without regenerating the
patch.

### npm notes

- `overrides` in `package.json` forces `@builder.io/vite-plugin-jsx-loc` to use
  the project's Vite 7 (the plugin's own peer range only lists Vite 4/5, which
  otherwise triggers an ERESOLVE failure).
- `allowScripts` whitelists `@tailwindcss/oxide` and `esbuild`, whose install
  scripts npm 11+ blocks by default. Without them the native binaries are
  missing and the build fails.
- Scripts use `cross-env` so `NODE_ENV=...` works on Windows as well as
  Unix shells.

## Pages

Home, About, Services, individual service details, Pricing, Get a Quote, Gallery, Reviews, FAQ, Contact, Cleaning Tips, Privacy Policy, Terms, and a branded 404 page are routed from `client/src/App.tsx`.

## Quote form

The booking form posts to `POST /api/quote`. The endpoint safely acknowledges and logs submissions for demo use. Before launch, connect this handler to the business inbox using the preferred email provider or notification service, and set the real destination address in environment configuration.

## Deploy

### Vercel (static site + serverless API)

`vercel.json` already contains everything Vercel needs:

- `framework: null` (no framework preset, so Vercel does not look for `dist/index.js`)
- `buildCommand: npm run build:static` (Vite build → `dist/public`)
- `outputDirectory: dist/public` (so `/` serves `index.html`, not the server bundle)
- `rewrites: / (.*) → /index.html` so deep links like `/booking` load the SPA
  (the filesystem — static assets and `/api/*` functions — always takes precedence)

The `api/` folder holds the Vercel serverless functions (`/api/quote`,
`/api/health`, `/api/trpc/*`). The Manus OAuth login and the MySQL-backed
tRPC procedures need the platform environment variables, so they are stubbed
out on Vercel; the public website does not use them.

In the Vercel dashboard make sure: **Root Directory** = repository root,
**Build Command** = `npm run build:static`, **Output Directory** = `dist/public`
(`vercel.json` overrides these anyway, but keeping them in sync avoids
surprises).

Optional: set `QUOTE_WEBHOOK_URL` in the Vercel environment to forward every
quote request to a mailbox/Zapier/Make endpoint.

### Hostinger / any Node host

Build with `npm run build`, run the production server with `npm start`, and set
`PORT` to the host-provided port. The managed project is already configured with
server capability and `/api/health`.

## Customize before launch

Replace the demo name, Austin service area, phone number, email, WhatsApp number, address, and working hours in `client/src/site/data.ts`. Replace the Unsplash image URLs with brand photography, update the `logoUrl` in `app.config.ts`, connect `/api/quote` to a real mailbox, and add the final social profile URLs.
