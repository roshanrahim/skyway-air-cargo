# Implementation 03 — Content Swap ⏳ PENDING

**Status:** Waiting on real business details from the owner. Site is live with clearly-marked placeholders.

## Checklist & Exactly Where Each Change Goes

### 1. Phone & WhatsApp numbers  ⚡ highest priority
**File:** `js/main.js` (lines at the very top)
```js
var SKYWAY_PHONE = "+919846000000";   // ← real phone here
var SKYWAY_WHATSAPP = "919846000000"; // ← real WhatsApp here (country code, no +)
```
One edit updates every call button, WhatsApp button, and displayed number site-wide.

### 2. Shipping rates
**File:** `js/main.js` → `RATES` object. Per zone: `first` (₹ for first 0.5 kg), `addl` (₹ per extra 0.5 kg), `days` (transit string). Replace sample values with the actual Aramex agent tariff. Also remove the "sample tariff" alert strip at the bottom of `quote.html`.

### 3. Photos
Replace `.ph-img` placeholder cards with real `<img>` photos (save to `images/`):
- `index.html` — "Our Facility & Team" section (3 cards: office, packing, team)
- `about.html` — office photo (top) and any team photos
Recommended: JPG, ~1200px wide, compressed (< 300 KB each).

### 4. License / registration numbers
Search-and-replace in **all** `*.html` files (footer) + `about.html` (license chips):
- `32XXXXXXXXXXXZX` → real GSTIN
- `KL/ERN/2021/XXXXX` → real Shop & Establishment reg. no.
- `AXXXXX` → real Aramex agent code (about.html)
- Delete the "(replace with actual registration numbers)" note in footers.

### 5. Email
Replace `info@skywaycargo.in` in all `*.html` files (footer + contact.html) with the real address.

### 6. Testimonials
`index.html` testimonial cards are representative samples — replace text/names with real Google/JustDial reviews (owner should confirm customers are okay being named).

## After Editing
```bash
git add . && git commit -m "Add real business details" && git push
```
