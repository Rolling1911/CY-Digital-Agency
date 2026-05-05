# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## CYDigital Website (`artifacts/cydigital`)

- **Framework**: React + Vite + Wouter (SPA with real page routing)
- **Design**: Dark black (#0B0B0B) + gold (#D4AF37), Greek-only
- **Domain**: `https://cydigital.agency` | Phone: +357 94 344355 | Location: Λάρνακα

### Routes (10 pages, all with unique H1 + meta tags)
| URL | Page |
|-----|------|
| `/` | Home (full single-page layout) |
| `/ypiresies` | Υπηρεσίες overview |
| `/ypiresies/kataskevi-istoselidaas` | Κατασκευή Ιστοσελίδας |
| `/ypiresies/social-media` | Social Media Management |
| `/ypiresies/grafistika` | Γραφιστικά & Branding |
| `/ypiresies/dimioyrgia-periekhomenou` | Δημιουργία Περιεχομένου |
| `/paketa` | Πακέτα & Τιμές |
| `/portfolio` | Portfolio |
| `/giati-emas` | Γιατί CYDigital |
| `/epikoinonia` | Επικοινωνία |

### SEO Implementation
- `src/hooks/useSEO.ts` — sets document.title, meta description, og tags, canonical per page
- `index.html` — LocalBusiness JSON-LD schema, og meta tags, robots, canonical
- `public/sitemap.xml` — all 10 URLs
- `public/robots.txt` — allow all + sitemap pointer
- `src/components/Header.tsx` — real `<a>` nav links (wouter Link) to page paths
- `src/components/Footer.tsx` — real `<a>` nav links + service sub-page links section
- Components with `showHeading` prop: Services, Portfolio, Contact (prevents duplicate H1)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
