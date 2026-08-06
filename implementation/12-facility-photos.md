# Implementation 12 — Facility Photos ✅ COMPLETE (all photo placeholders now filled)

**Dates:** 3–6 August 2026
**Commits:** `bbc0808`, `d6fadf6`

## Home "Our Facility & Team" Gallery
- **Founders tile removed** (photo + caption) — founders live on the About page only
- Gallery is now a centred **2-tile grid** (`grid-2`, max-width 900px):
  1. **Our office — V R Complex, Alangad** → real photo `images/facility/office.jpg`
     (storefront with the SKYWAY / Aramex / UPS signboard, owner-supplied)
  2. **Export-grade packing in progress** → real photo `images/facility/packing.jpg`
     (Aramex-branded warehouse packing scene, owner-supplied)
- "(Replace these placeholders with real photos…)" note removed from the section sub

## About Page
- "Our Story" right-side square box → same office photo, caption
  "SKYWAY office — First Floor, V R Complex, Alangad" (placeholder note dropped)

## Technique
- `.ph-img .ph-photo` pattern: absolutely-positioned cover image inside the old placeholder
  card, caption bar overlays on top (z-index 2)
- Photos optimized with sips to ~1000px width, ~190 KB each

## Milestone
📸 **Every photo placeholder on the site is now real content.**
Remaining placeholders (site-wide): business email (info@skywaycargo.in) and the three
sample testimonials on the home page.
