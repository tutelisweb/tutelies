# Tutelis Solutions — Official Brand Website

A responsive, single-page React website based on the supplied **Tutelis Brand Book** and **TUTELIS_SITE_CONTENT_ADVISOR_UPDATED** content.

## Brand rules implemented

- Tutelis Navy `#0B1A3A` as the primary background.
- Shield Violet `#3B3FD8` for panels and highlighted sections.
- Trust Teal `#2EE6B6` used sparingly for primary CTA buttons and small highlights.
- Oswald for headlines and button labels; Inter for body copy.
- Subtle navy grid motif; no neon glows or glassmorphism.
- Tagline pill and violet footer band.
- Logo extracted directly from the supplied brand-book PDF and placed on a white badge.

## Run locally

Install Node.js 18+ (Node.js 20 LTS recommended). Open the extracted folder in VS Code and run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

For a production build:

```bash
npm run build
npm run preview
```

## Project structure

- `src/App.jsx` — imports page sections and owns smooth-scroll navigation.
- `src/components/` — Header, Hero, Services, DetailedServices, Sectors, Approach, Dpdp, About, Contact and Footer.
- `src/index.css` — brand tokens, typography, layout and responsive styles.
- `public/assets/tutelis-logo.png` — logo image extracted from the supplied brand book.

## Content notes

The supplied updated landing-page copy is used as the source for page content. No client testimonials, certifications, statutory deadlines, breach statistics or other unsupported claims have been added. The contact action opens an email to `advisory@tutelis.in`; no form or backend is included in this phase.

The supplied PDF contains a raster logo asset. For production, replace it with the original high-resolution master logo file if the brand team can provide it.
