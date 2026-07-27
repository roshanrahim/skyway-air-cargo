# Active Context — Current State & Immediate Next Steps

_Last updated: 27 July 2026 (night)_

## Current State
✅ Website fully built (10 pages) and **LIVE** at https://roshanrahim.github.io/skyway-air-cargo/
✅ GitHub Pages hosting, auto-deploys on push to `main`.
✅ Two rounds of owner revisions completed (implementation/05 and 06). Highlights of current state:
hero Earth + orbiting plane · 15+ countries / 2,000+ shipments stats · 16-country flag grid
(names only) · icon-only Payments circles · tracking = link to aramex.com/in/en ("tracking
number" wording) · blog has 3 posts · 5-card Shipping Made Simple · Customer Testimonials ★
anchor in More menu · fuel-surcharge note on quote page.

⚠️ Loose end: home blog preview still shows "Volumetric Weight Explained" linking to a deleted
blog post — owner notified, awaiting decision.

## Owner's Stated Plan
Owner chose to **go live first with placeholders**, then supply real content afterwards.

## Waiting On (from the owner) — blocks the placeholder swap
1. **Phone number** → set `SKYWAY_PHONE` in `js/main.js` (currently `+919846000000` placeholder)
2. **WhatsApp number** → set `SKYWAY_WHATSAPP` in `js/main.js`
3. **Actual Aramex agent tariff** → replace sample `RATES` table in `js/main.js`
4. **Photos** — office exterior/interior, packing process, team → replace `.ph-img` placeholder cards (home, about)
5. **License numbers** — GSTIN, Shop & Establishment reg. no., Aramex agent code → footer (all pages) + about.html license chips
6. **Business email** → replace `info@skywaycargo.in` placeholder (footer + contact page)

## Next Steps After Content Swap
- Buy custom domain (suggested: skywaycargo.in, ~₹500–800/yr) → add CNAME to Pages
- Create/claim Google Business Profile and link the website
- Verify Aramex franchise agreement wording rules ("Authorised Agent" vs "franchise")

## Known Placeholders Currently Visible on the Live Site
- Phone shows +91 98460 00000 everywhere
- Footer shows `GSTIN: 32XXXXXXXXXXXZX | Reg. No: KL/ERN/2021/XXXXX` with a "(replace with actual)" note
- Rate calculator has a visible note that rates are samples
- Gallery cards are styled placeholders with "replace with real photo" captions
- Testimonials are representative samples, not real customer quotes — replace with real Google/JustDial reviews

## Owner Preferences Learned (apply to future edits)
- Prefers clean URLs — no ad-tracking query strings (asked for "neat" links)
- Prefers icon-only, compact visual elements over text-heavy sections (payments row)
- Wants realistic imagery (real Earth photo) over abstract illustrations
- Conservative, honest numbers on stats (chose 100+ countries / 2,000+ shipments)
