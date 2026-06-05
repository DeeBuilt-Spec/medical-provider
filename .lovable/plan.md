# Providence Care Plus — 3 mockup routes

Build all three design directions as standalone full homepages so the client can review side-by-side. No need to pick — each lives at its own URL.

## Routes

- `/` — simple index listing the three mockups with links (no marketing content; just a chooser for the client)
- `/site1` — **Serif editorial focus** (centered serif wordmark, full-bleed parallax hero, dark CTA button)
- `/site2` — **Editorial split** (left oversized serif headline, right tall portrait parallax image, sage accent)
- `/site3` — **Asymmetric editorial** (small-caps eyebrow, large left-aligned serif tagline, offset right-side parallax image panel, navy accent)

## Shared structure per site

Each route renders the full homepage with the sections requested:
1. Hero (parallax background image — implemented with `background-attachment: fixed` or a translate-on-scroll effect; placeholder image generated per site)
2. About — warm one-paragraph intro, single column, no cards
3. Services — Primary Care and GLP-1 Virtual Appointments in a clean two-column text layout, no cards
4. How it works — three numbered steps (no icons)
5. Contact form — name, email, phone, message, submit (client-side only, no backend)
6. Minimal footer

Each site keeps its own typography pairing, palette, and CTA treatment as shown in the prototypes — no shared header/nav across the three so each feels like a distinct brand direction.

## Technical notes

- TanStack Start file-based routing: create `src/routes/site1.tsx`, `src/routes/site2.tsx`, `src/routes/site3.tsx`, and replace `src/routes/index.tsx` content with the chooser.
- Per-site fonts loaded via `<link>` tags in each route's `head()` (DM Serif Display + Inter for site1; Cormorant Garamond + Inter for site2; Playfair Display + Inter + JetBrains Mono for site3).
- Per-site color tokens scoped locally with inline CSS variables on the page root so the three palettes don't collide globally — `src/styles.css` stays untouched.
- Parallax: lightweight scroll-listener translating the hero background, plus `prefers-reduced-motion` fallback.
- Hero placeholder images generated with `imagegen` (one calm clinical interior per site, sized appropriately — 1920x1080 for site1, portrait 1080x1440 for sites 2/3) and saved under `src/assets/`.
- Contact form is presentational only: `onSubmit` prevents default and shows a thank-you state. No backend, no validation library.
- Desktop-optimized layouts (per request); basic responsive collapse to single column under `md` so it doesn't break on smaller screens.
- No cards, no pill buttons, no icon grids, no carousels — enforced across all three.

## Out of scope

- Booking flow, real form submission, auth, database
- Mobile-first polish beyond a safe collapse
- Additional pages (About, Services, Contact as separate routes)
