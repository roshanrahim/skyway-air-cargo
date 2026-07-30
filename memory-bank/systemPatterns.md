# System Patterns — Conventions Used Across the Site

## HTML Patterns
- **Shared skeleton:** every page = top bar → sticky header/nav → page content → CTA band → footer → floating buttons. Header/footer markup is identical across pages; edit all pages together.
- **Active nav state:** the current page's nav link carries class `active`.
- **Inner pages** open with a `.page-hero` (navy gradient) containing breadcrumbs + H1 + one-line description.
- **Section rhythm:** alternate white and `.section-soft` (light grey) backgrounds; each section starts with `.kicker` (red uppercase label) → `.section-title` → `.section-sub`.

## Dynamic Data Attributes (wired in js/main.js)
| Attribute | Effect |
|---|---|
| `data-phone-link` | href becomes `tel:<SKYWAY_PHONE>` |
| `data-phone-text` | text becomes formatted phone number |
| `data-phone2-link` / `data-phone2-text` | same, for second number `SKYWAY_PHONE2` |
| `data-wa-link` | href becomes `wa.me/<SKYWAY_WHATSAPP>?text=...` |
| `data-wa-msg="..."` | custom pre-filled WhatsApp message |

**Rule:** never hard-code the phone/WhatsApp number in HTML — always use these attributes so one config change updates the whole site.

## CSS Conventions
- All colours/fonts/spacing tokens are CSS variables in `:root` (css/style.css top).
- Cards: `.card` (icon cards), `.dest-card` (destinations), `.testi` (testimonials), `.post-card` (blog), `.form-card` (forms), `.ph-img` (photo placeholders).
- Grids: `.grid-2/-3/-4`, `.steps` (numbered via CSS counters), `.stats-row`.
- Buttons: `.btn` + `.btn-red` / `.btn-navy` / `.btn-wa` (green) / `.btn-outline` (on dark).
- Breakpoints: 992px (tablet, nav becomes slide-in drawer) and 640px (mobile, single column).

## Forms Pattern
No backend: every form composes a structured message and opens WhatsApp (`window.open('https://wa.me/...')`). Success feedback = revealing a hidden `✓ Opening WhatsApp` paragraph.

## Quote Form (quote.html → js/main.js)
Single "Request a Quote" form (rate calculator was removed 28 Jul 2026). Fields: name, phone/WhatsApp,
destination country, place of contact, approx. weight, what-you-are-sending select, anything-else.
Submit opens a wa.me chat with all 7 fields labelled exactly as the owner specified.

## Tracking Pattern
No on-site tracking form: all "Track" buttons are plain links to the official Aramex India site (https://www.aramex.com/in/en, clean URL, no query params) opening in a new tab.

## Payment Icons Pattern
Home page "Payments" section: `.pay-icons` row of `.pay-circle` round badges (social-media-icon style), icons only, no captions — Google Pay (white/G), PhonePe (purple/पे), UPI (white/chevrons), Bank Transfer (navy/bank glyph). Single line at all widths (flex-wrap: nowrap).
