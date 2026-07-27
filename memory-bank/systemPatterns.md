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
| `data-wa-link` | href becomes `wa.me/<SKYWAY_WHATSAPP>?text=...` |
| `data-wa-msg="..."` | custom pre-filled WhatsApp message |
| `data-track-form` | form submit opens Aramex tracking with the entered AWB |

**Rule:** never hard-code the phone/WhatsApp number in HTML — always use these attributes so one config change updates the whole site.

## CSS Conventions
- All colours/fonts/spacing tokens are CSS variables in `:root` (css/style.css top).
- Cards: `.card` (icon cards), `.dest-card` (destinations), `.testi` (testimonials), `.post-card` (blog), `.form-card` (forms), `.ph-img` (photo placeholders).
- Grids: `.grid-2/-3/-4`, `.steps` (numbered via CSS counters), `.stats-row`.
- Buttons: `.btn` + `.btn-red` / `.btn-navy` / `.btn-wa` (green) / `.btn-outline` (on dark).
- Breakpoints: 992px (tablet, nav becomes slide-in drawer) and 640px (mobile, single column).

## Forms Pattern
No backend: every form composes a structured message and opens WhatsApp (`window.open('https://wa.me/...')`). Success feedback = revealing a hidden `✓ Opening WhatsApp` paragraph.

## Rate Calculator Logic (js/main.js)
1. Chargeable weight = max(actual, L×W×H÷5000), rounded **up** to nearest 0.5 kg
2. Price = `first` (first 0.5 kg) + additional 0.5 kg units × `addl`
3. Result box shows price + chargeable weight + transit days, with a WhatsApp button that pre-fills the whole estimate for final confirmation
