# Stripe homepage — Next.js

A Next.js (App Router, TypeScript) rebuild of a saved copy of the stripe.com homepage,
split into reusable components and data modules. For local study and experimentation;
Stripe's name, logos, copy and imagery belong to Stripe.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (the page is statically prerendered)
npm run lint       # ESLint (next/core-web-vitals + TypeScript)
npm run typecheck  # tsc --noEmit
```

## Project structure

```
app/                 layout (metadata, header/footer), page, favicons, globals.css
components/
  layout/            SiteHeader (mobile menu), SiteFooter (+ CSS module)
  sections/<name>/   one folder per homepage section; `graphics/` holds large
                     illustration components converted from the original markup
  ui/                ButtonLink, CalloutLink, SectionTitle, SectionHeader, FeatureDetail
  icons/             small SVG icons (charm/ = gradient feature icons)
  logos/             inline brand logos + `BrandLogo` / `brandLogos` registry
data/                page content (nav, stats, customers, events, features, footer…)
hooks/               useCarouselScroll (scroll-snap carousels)
lib/                 cx() class helper, spacing helpers for HDS layout variables
styles/              Stripe's original CSS, purged of unused rules and split by area
public/images/       images grouped by section; public/fonts/ Söhne + Source Code Pro
_original/           the browser-saved snapshot this was converted from (git-ignored)
```

## Notes

- **Styling** reuses Stripe's own compiled CSS (design tokens, HDS components, section styles).
  `app/globals.css` imports it in the original order because the cascade and
  `@layer` declarations depend on it. New additions live in `styles/overrides.css`,
  `styles/components/events-stage.css` and the CSS modules next to components.
- **Links** point to the live stripe.com pages; only the homepage exists here.
- **Animations** that were WebGL/canvas on stripe.com (hero wave, event carousel, globe)
  use their static fallbacks or a CSS approximation. Nav dropdown panels and bento
  product dialogs weren't in the snapshot, so menu items are plain triggers and bento
  cards link to product pages.
