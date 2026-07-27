# Product Context — Who Uses This Site and Why

## Target Customers
1. **Families in Ernakulam** sending food, gifts, and documents to relatives working abroad (mainly Gulf countries — UAE, Saudi, Qatar, Kuwait, Oman, Bahrain).
2. **Students and job-seekers** shipping certificates, attestation papers, and visa documents to UK, USA, Canada, Australia.
3. **Expats relocating** who need excess baggage / personal effects shipping.
4. **Small businesses & online sellers** with regular international commercial shipments.

## Customer Journey the Site Supports
1. Finds the business on Google / JustDial / word of mouth
2. Checks trust signals: Aramex authorisation badge, reviews, real address, photos
3. Gets an instant indicative rate from the calculator OR sends a WhatsApp enquiry
4. Books a pickup (call / WhatsApp)
5. Tracks the shipment with their AWB number on the Tracking page

## Conversion Paths (in priority order)
1. **WhatsApp floating button** — primary; cargo customers in Kerala strongly prefer WhatsApp
2. **Click-to-call** — floating red button + top bar phone link
3. **Rate calculator → "Confirm on WhatsApp"** — pre-fills the estimate into the message
4. **Quote/contact forms** — submit via WhatsApp deep-link (no backend needed)

## Key Design Decisions
- Every form submits through WhatsApp deep-links (`wa.me`) — no server, no email backend, replies land on the customer's phone.
- Tracking hands off to official Aramex tracking (aramex.com) with the AWB pre-filled — authoritative data, zero maintenance.
- Photo placeholders deliberately labelled "replace with real photo" — real facility photos build far more trust than stock images in this industry.
