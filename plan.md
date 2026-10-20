# Clean Slate Co. Website Plan

## Implementation approach

Build the site as a React/Vite frontend inside the managed web-db-user starter, with Wouter handling page routes and a small Express POST endpoint for quote/contact submissions. The UI will use reusable site chrome and content blocks so the same header, footer, section headings, cards, forms, and CTA patterns stay consistent across all pages. Content is intentionally written as polished demo copy for Clean Slate Co. in Austin, TX, with clearly editable contact details.

The route set covers home, about, services overview, service detail pattern, pricing, booking, gallery, reviews, FAQ, contact, blog, legal pages, and fallback 404. Forms perform client-side validation, show a loading state and success state, then POST to `/api/quote`; the server acknowledges the request and logs the structured submission for safe demo use until a real email provider is connected.

## Design direction

Three possible directions were considered: **Quiet coastal hospitality** (0.06), **Editorial clean-tech studio** (0.04), and **Soft modern service atelier** (0.08). The chosen direction is **Soft modern service atelier**.

- **Design Movement:** Soft modern service atelier: premium hospitality calm translated into a high-trust local service brand.
- **Core Principles:** Calm clarity, generous breathing room, warm proof, and frictionless next steps.
- **Color Philosophy:** Deep navy creates confidence, aqua signals freshness, and coral adds human energy only where action is needed. Off-white surfaces keep the experience light without feeling clinical.
- **Layout Paradigm:** A narrative scroll with asymmetric hero composition, staggered proof cards, and alternating full-bleed tinted bands rather than a rigid dashboard grid.
- **Signature Elements:** Aqua “spark” mark, coral pill CTAs, and soft rounded image frames with tiny utility labels.
- **Interaction Philosophy:** Every interaction should reassure first and guide second: clear labels, visible states, and no surprise motion.
- **Animation:** Fade-up entrances and gentle card lifts only; all motion is disabled or minimized under `prefers-reduced-motion`.
- **Typography System:** Plus Jakarta Sans for expressive, compact headings; DM Sans for readable body copy and utility labels. H1 is 56–64px on desktop and 40px on mobile.
- **Brand Essence:** Boutique-grade cleaning for busy Austin homes and teams; thoughtful, dependable, refreshingly human. Personality: calm, capable, caring.
- **Brand Voice:** Headlines are specific and sensory; CTAs are direct but welcoming. Example lines: “A cleaner slate for the way you live.” and “Tell us what needs a reset.”
- **Wordmark & Logo:** “Clean Slate” wordmark paired with a four-ray aqua sparkle inside a rounded navy tile.
- **Signature Brand Color:** Clean Slate Aqua `#B9EFE9`.

## Project structure

- `client/src/App.tsx`: route map and global providers.
- `client/src/site/data.ts`: service, pricing, gallery, review, FAQ, and blog content.
- `client/src/site/SiteChrome.tsx`: sticky header, footer, floating actions, mobile action bar, shared page primitives, and quote form.
- `client/src/pages/Home.tsx`: home route composition.
- `client/src/pages/SitePages.tsx`: reusable implementations for all interior routes and service detail pages.
- `client/src/index.css`: design tokens, responsive layout utilities, component styling, and motion rules.
- `server/_core/index.ts`: `/api/health`, `/api/quote`, and frontend serving.
- `client/public/manus-routes.json`: complete page route manifest for Preview and published discovery.

## Frontend/backend serving

Development uses the starter's `npm run dev` command on port 3000. The Express server owns `/api/quote` and `/api/health`, then hands the remaining requests to Vite in development or static output in production. The app does not require a database for this public marketing site.
