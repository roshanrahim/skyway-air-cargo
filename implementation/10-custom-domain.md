# Implementation 10 — Custom Domain skywayaircargo.in ✅ COMPLETE

**Date:** 30 July 2026

## Domain
- **skywayaircargo.in** purchased by owner on **GoDaddy India** (30 Jul 2026)
- Chosen because it exactly matches the business name; skywaycargo.in / skyway.in / skywaycargo.com were already taken (verified via RDAP)
- Registrant + GoDaddy account: owner's personal email (roshanrahim11@gmail.com) — advised owner
  never to use an email hosted on the domain itself, and to skip all GoDaddy add-ons
  (no Ownership Protection — .in registry hides WHOIS data by default; transfer lock is free)

## GitHub Side ✅ DONE
- `CNAME` file (containing `skywayaircargo.in`) committed to repo root (commit `ab033d4`)
- Pages custom domain set via API: `gh api repos/.../pages -X PUT -f cname=skywayaircargo.in`

## GoDaddy DNS Side ✅ DONE (owner added records 3 Aug 2026)
Records the owner must add in GoDaddy → Manage DNS (delete the "Parked" A record first):

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | roshanrahim.github.io |

A persistent monitor is polling `dig @8.8.8.8` every 60s for the A records.

## Completion (3 Aug 2026)
- Cert initially stuck in "provisioning" — fixed by removing/re-adding the Pages cname (state
  moved to authorization_pending, then approved)
- HTTPS enforced via API; verified: apex 200 over https, www 301→apex, http 301→https
- **Primary URL is now https://skywayaircargo.in** (github.io URL 301-redirects)
- Suggested follow-ups: Google Search Console; update JustDial/Google Business Profile links;
  visiting cards with the new domain
