# Providence Care Plus — Website Spec & Homepage Mockups

This repository is a **design spec and interactive mockup set** prepared for
**Providence Care Plus**. It contains five complete, clickable homepage design
directions for the new website, deployed so they can be reviewed live in a
browser — no setup required.

## View the mockups

Open the deployed site and click through each direction from the landing page:

**https://spec.deebuilt.co/medical-provider/**

The landing page lists all five directions. Each one opens a full homepage
mockup in a distinct visual style:

| # | Direction | Feel |
|---|-----------|------|
| Site 01 | Serif editorial focus | Full-bleed parallax · centered serif wordmark |
| Site 02 | Editorial split | Oversized headline · tall portrait image · sage accent |
| Site 03 | Asymmetric editorial | Off-grid composition · navy accent · mono details |
| Site 04 | Warm neighborhood | Inviting centered hero · soft sage · Lora serif |
| Site 05 | Friendly family practice | Approachable split layout · soft teal accent |

These are early directional concepts. The goal of this review is to find the
direction (or the elements across directions) that feels right for the brand,
then iterate from there.

## What this is for

This spec is the starting point of a website engagement: design the public
site, then connect it to a medical-appointment platform so patients can book
online, and set the site up to be found on Google. Feedback on these mockups
drives the next round of design.

## Project structure

A static single-page app built with:

- **React 19** + **TanStack Router** (clean `/site1`–`/site5` URLs)
- **Vite** (static build, no server required)
- **Tailwind CSS v4** + shadcn/ui components

```
src/
  routes/        index (landing) + site1–site5 mockups + root layout
  components/ui/ shadcn/ui component library
  assets/        hero images for each mockup
  lib/           utilities (parallax hook, class helpers)
```

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
```

Build the static site:

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Deployment

Pushing to `main` triggers the
[GitHub Pages workflow](.github/workflows/deploy.yml), which builds the static
site (with base path `/medical-provider/`) and publishes it to GitHub Pages.

This project is one of several served under the shared `spec.deebuilt.co`
subdomain. The domain itself is owned by the `deebuilt-spec.github.io` root
repo (which holds the `CNAME` and a landing page); each project repo serves at
its own route — this one at `/medical-provider/`. Project repos must **not**
carry a `CNAME` file.

---

Prepared by **DeeBuilt**.
