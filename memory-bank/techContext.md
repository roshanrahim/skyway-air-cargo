# Tech Context — Stack, Hosting, and How to Make Changes

## Stack
- **Pure static site** — plain HTML5 + CSS + vanilla JavaScript. No framework, no build step required, no backend.
- **Fonts:** Google Fonts — Archivo Black (headings/logo wordmark) + Inter (body).
- **External assets:** country flags load from flagcdn.com (free CDN); fonts from Google Fonts. Everything else is local.
- **Logo:** inline SVG in every page header/footer + standalone file at `images/skyway-logo.svg`.

## File Layout
```
SKYWAY/
├── index.html            # Home
├── about.html            # About Us (story, team, licenses, process)
├── services.html         # All 8 services
├── quote.html            # Rate calculator + quote request form
├── tracking.html         # Links to official Aramex site (aramex.com/in/en)
├── destinations.html     # "Our Most Shipped Countries" — 16 cards with flag images
├── restricted-items.html # Prohibited / restricted / safe items
├── faq.html              # 11-question accordion
├── blog.html             # 6 starter advisory posts
├── contact.html          # Address, map embed, contact form
├── css/style.css         # Single stylesheet, CSS variables at top
├── js/main.js            # All site JS + CONFIG (phone/WhatsApp) + RATES table
├── images/skyway-logo.svg
├── images/earth.jpg      # NASA Blue Marble (public domain) — hero globe
├── memory-bank/          # Project knowledge (this folder)
└── implementation/       # Phase-by-phase implementation records
```

## Hosting & Deployment
- **Host:** GitHub Pages (free, HTTPS enforced)
- **Live URL:** https://roshanrahim.github.io/skyway-air-cargo/
- **Repo:** github.com/roshanrahim/skyway-air-cargo (branch `main`, root path)
- **Deploy process:** commit → `git push` → Pages rebuilds automatically in ~1 minute. No CI config needed (legacy Pages build).

## Single Points of Configuration
- `js/main.js` top: `SKYWAY_PHONE` and `SKYWAY_WHATSAPP` — stamps every call/WhatsApp link site-wide via `data-phone-link` / `data-wa-link` attributes.
- `js/main.js` `RATES` object: per-zone tariff `{first: ₹ for first 0.5kg, addl: ₹ per extra 0.5kg, days: transit}`.
- `css/style.css` `:root` variables: brand colours, fonts, radii.

## Important Notes
- Header/nav/footer are **duplicated across all 10 pages** (originally generated from a template script). A change to nav/header/footer must be applied to every page — find-and-replace across `*.html`.
- All internal links are **relative**, so the site works at the `/skyway-air-cargo/` subpath and will work unchanged on a custom domain.
- SEO: every page has meta description, geo tags, Open Graph tags; `index.html`-shared head includes LocalBusiness JSON-LD structured data with the real address and 4.5★ aggregate rating.
