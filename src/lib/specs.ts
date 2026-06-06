/*
 * Single source of truth for every design direction in this spec.
 *
 * Both the landing page (index) and the floating SpecSwitcher read from here,
 * so the list, order, and labels stay in sync. To add a direction, add one
 * entry — it appears on the landing page and in the switcher automatically.
 *
 * This file is intentionally generic so future specs can reuse the same shell:
 * drop in a new specs.ts + the SpecSwitcher renders itself in __root.
 */

export type SpecEntry = {
  to: string; // route path, no basepath (e.g. "/site1")
  label: string; // short tag shown in the rail (e.g. "01", "Option A")
  name: string; // display name
  note: string; // one-line description
};

export type SpecGroup = {
  kicker: string;
  title: string;
  blurb: string;
  featured?: boolean;
  items: SpecEntry[];
};

export const specGroups: SpecGroup[] = [
  {
    kicker: "Start here · Interactive",
    title: "Full working sites",
    blurb: "Real navigation, services & pricing, and a working booking flow. Click through the pages and try booking a visit.",
    featured: true,
    items: [
      { to: "/site6-real", label: "Option A", name: "Clinical-chic", note: "Calm, modern, editorial. Newsreader serif · tonal teal." },
      { to: "/site5-real", label: "Option B", name: "Warm & friendly", note: "Approachable neighborhood feel. Source Serif · soft teal." },
    ],
  },
  {
    kicker: "Visual concepts",
    title: "Single-page design directions",
    blurb: "Each of these is one scrolling homepage — a look and feel to react to, rather than a full multi-page build. Use them to find the aesthetic you like best.",
    items: [
      { to: "/site1", label: "01", name: "Cinematic editorial", note: "Full-bleed parallax · Fraunces · bone & olive" },
      { to: "/site2", label: "02", name: "Boutique / Vogue", note: "Stark didone · black & white · the outlier" },
      { to: "/site3", label: "03", name: "Asymmetric magazine", note: "Off-grid 12-col · ink & clay · mono details" },
      { to: "/site4", label: "04", name: "Warm neighborhood", note: "Centered welcome · deepened sage · Lora" },
      { to: "/site5", label: "05", name: "Friendly family practice", note: "Approachable split · muted teal" },
      { to: "/site6", label: "06", name: "Quiet clinical-chic", note: "Newsreader · tonal teal · hairline sections" },
      { to: "/site7", label: "07", name: "Down-to-earth", note: "The simplest, most familiar take · Lora" },
    ],
  },
];

// Flat, ordered list of every direction — used by the switcher for prev/next.
export const allSpecs: SpecEntry[] = specGroups.flatMap((g) => g.items);
