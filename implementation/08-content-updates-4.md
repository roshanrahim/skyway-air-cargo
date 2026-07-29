# Implementation 08 — Owner Revisions Round 4 ✅ COMPLETE

**Dates:** 29 July 2026
**Commits:** `92a9845` → `20f76f0`

## Major Rebranding (site-wide, all pages incl. meta/JSON-LD)
- "Authorised Agent of Aramex Delivery Unlimited" → **"Authorised Agent of Aramex India Pvt and UPS"**
- "Aramex Authorised" card → "Aramex and UPS Authorised"
- "Aramex network" → "Aramex and UPS network"; "Aramex global network" → "Aramex and UPS global network"
- FAQ: "…agent of Aramex India Pvt and UPS" (+ de-duplicated the old "and UPS authorised" tail)
- **50+ countries** everywhere (was 15+)
- Hero tagline: partner in **Cochin, Kerala** (was Ernakulam)
- Hero "Air Cargo" accent colour: gold → bright red (#FF4A55)

## Services Content
- Home Document Courier: "visas" removed
- Services Excess Baggage: "We ship baggages for students, expats and families relocating."
- Services Food Items: FSSAI-certified wording
- Services Document Courier: "visa papers" removed; How-It-Works step 03: customs forms removed
- Home: **"More Services" card** (💬 → contact.html) added at end of core services grid

## Service Photos (services page)
- 7 real photos (Unsplash, free commercial licence) stored locally in `images/services/`:
  air-cargo, baggage, ecommerce, food, documents, packing, medicines
- Emoji icons replaced by photos on services-page cards only (home keeps icon cards)
- Photos later reduced to short banners (aspect-ratio 2.3/1, `.svc-img`)
- **Food card = 2×2 collage** (`.svc-grid`): spices (original photo CSS-zoomed via `.svc-zoom`
  to crop out fresh produce) + packed foods aisle + tea + coffee (`food-packed/tea/coffee.jpg`)

## Restricted Items Page
- To **Never Allowed**: Electronics with built-in batteries · Perfume (any quantity) ·
  Knives, scissors & sharp objects (new)
- Medicines: prescription + **payment invoice required, max 3 months' quantity**
- Food items: packaged/dry foods **with FSSAI certification**
- Ayurvedic/herbal: + **manufacturing details and date required**
- High-value items entry removed; "Branded goods…" → "**Goods in commercial quantity** —
  commercial shipment documentation assistance provided"
- Safe list: + Medicines (with prescription & invoice), Sport items, Food samples, Machine parts;
  pickles removed; "Dry food … tea with FSSAI certification"

## FAQ
- Removed: "How long does delivery take?" and "How is cost calculated / volumetric weight?"
- Documents answer: paperwork = AWB only; Food answer: FSSAI wording
- Tracking answer: tracking-number wording + go-to-Tracking-page → "Track on Aramex.com" flow
- Agent answer: "…authorised agent of Aramex India Pvt and UPS"

## Tracking Wording
- All "AWB number" → "tracking number"; tracking help cards removed (earlier in round)
