# Mini — Marketing Website

Fast, SEO-first marketing site for **Mini Coworking Spaces + Mini Studio (Jaipur)**.
Astro 5 + Tailwind CSS 4, MDX blog, static output. Copy conforms to
`../projects/mini-coworking-studio/marketing/website/website-copy.md` and
`../projects/mini-coworking-studio/marketing/value-proposition.md`.

## Commands

```bash
npm install
npm run dev        # dev server (localhost:4321)
npm run build      # static build → dist/ (also regenerates the OG image)
npm run preview    # serve the production build locally
```

## Deploy

**GitHub Pages** (same pattern as geomediq-site): repo `devendraishere/minicoworks-site`,
push to `main` → `.github/workflows/deploy.yml` builds and deploys. Custom domain
`www.minicoworks.com` (CNAME in `public/`); apex redirects to www.

**Forms note:** GitHub Pages has no form backend and contact@minicoworks.com has **no MX
records yet**, so the lead + newsletter forms currently open WhatsApp with the message
prefilled. When email/hosting is sorted, swap back to Netlify Forms or Formspree — the
wiring is documented in `src/components/LeadForm.astro`.

### Environment variables
| Var | What |
| --- | --- |
| `PUBLIC_GA4_ID` | GA4 measurement ID (`G-…`). Analytics loads only after cookie consent. |
| `PUBLIC_GSC_VERIFICATION` | Google Search Console meta-tag verification value. |

Events tracked: `book_tour_click`, `whatsapp_click`, `studio_book_click`, `membership_view`, `studio_view`, `lead_submit`.

## Before launch — the [confirm] checklist

Every unconfirmed fact renders as a visible **TODO chip** (berry-colored `<mark>`). Nothing
invented, per the build brief. To go live, fill these:

1. **Address + hours** — `src/components/Footer.astro`, `src/pages/contact.astro`, and the
   commented `ADDRESS`/`GEO`/`OPENING_HOURS` block in `src/lib/schema.ts` (single place for
   all JSON-LD). Must match the Google Business Profile **exactly**.
2. **Map embeds** — replace the placeholder in `src/components/MapEmbed.astro` with the GBP iframe.
3. **Pricing** — membership tiers (`src/pages/membership.astro`, incl. the Offer schema `price`),
   space cards, studio hourly rate (`src/pages/studio.astro`, blog podcast guide).
4. **Tier names** — Social / Flex / Resident are placeholders (`src/lib/site.ts` isn't the source;
   they're inline on membership + home).
5. **Studio specs** — what's included list on `/studio`.
6. **Member quotes/photos** — `TestimonialCard` renders a labelled placeholder until you pass
   real `quote`/`name`/`role` props (home, community).
7. **Member count + locality** — home hero trust strip; "near [localities]" block on home §10.
8. **Real photography** — hero/studio image slots are labelled placeholders; add via
   `astro:assets` for AVIF/WebP.
9. **Domain** — `astro.config.mjs` `site` + `public/robots.txt` sitemap URL (assumes
   `https://minicoworks.com`). ministudio.co.in should 301 or mirror to `/studio`.
10. **Analytics** — set the two env vars above; verify GSC; submit `sitemap-index.xml`.

Quick audit of remaining placeholders: `grep -rn "TODO" src/ | grep -iv todo_confirm`

## Structure

- `src/lib/site.ts` — brand facts, nav, spaces list (single source of truth)
- `src/lib/schema.ts` — JSON-LD builders (LocalBusiness, Service, FAQ, Offer, Article, Breadcrumb)
- `src/layouts/Base.astro` — head/SEO/OG, consent-gated GA4, event tracking
- `src/pages/…` — home, spaces (+4 children), studio, community, membership, about, contact, blog, 404
- `src/content/blog/` — MDX posts (frontmatter: title, description, keyword, author, date, tags, draft)
- `scripts/og.mjs` — regenerates the 1200×630 share image
