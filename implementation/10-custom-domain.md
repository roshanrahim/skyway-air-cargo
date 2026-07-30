# Implementation 10 — Custom Domain skywayaircargo.in 🔄 IN PROGRESS

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

## GoDaddy DNS Side ⏳ WAITING ON OWNER
Records the owner must add in GoDaddy → Manage DNS (delete the "Parked" A record first):

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | roshanrahim.github.io |

A persistent monitor is polling `dig @8.8.8.8` every 60s for the A records.

## Remaining Steps (after DNS resolves)
1. Wait for GitHub to verify DNS + auto-provision the TLS certificate (minutes to ~1 hour)
2. Enforce HTTPS: `gh api repos/roshanrahim/skyway-air-cargo/pages -X PUT -F https_enforced=true`
3. Verify https://skywayaircargo.in and https://www.skywayaircargo.in both load with padlock
4. Update README + memory-bank live URLs; old github.io URL will 301-redirect automatically
5. Suggested follow-ups: Google Search Console for the new domain; update JustDial/Google
   Business Profile links; print domain on visiting cards
