/*
 * Per-spec configuration for the DeeBuilt spec-chrome bundle (medical-provider).
 *
 * Generated from `_shared/spec-chrome/config.template.ts`. Only the values in
 * `specChromeConfig` are spec-specific — to change shared chrome behavior, edit
 * the canonical bundle in `C:\DeeBuilt Spec\_shared\spec-chrome\` and re-copy.
 */

export type SpecChromeConfig = {
  /** Display name of THIS spec (e.g. "Olea"). Used in the switcher context + aria. */
  specName: string;
  /** Business name. Not shown as text in the header (logo only) — used for the
   *  footer credit and accessibility labels. Default "DeeBuilt". */
  brandName: string;
  /** Maker credit, shown in the FOOTER (e.g. "designed by Ruthnie"). */
  credit: string;
  /** Where the logo links — the apex landing page listing all directions. */
  landingUrl: string; // "https://spec.deebuilt.co/"
  /** Where the footer credit links — the DeeBuilt business site. */
  businessUrl: string; // "https://deebuilt.co"
  /**
   * Public path to the brand logo, relative to BASE_URL. The component prefixes
   * `import.meta.env.BASE_URL` so it resolves under any GitHub Pages route.
   * Point this at the real transparent logo dropped in `public/`.
   */
  logoSrc: string; // "deebuilt-logo.png"
};

export const specChromeConfig: SpecChromeConfig = {
  specName: "Providence Care Plus",
  brandName: "DeeBuilt",
  credit: "designed by Ruthnie",
  landingUrl: "https://spec.deebuilt.co/",
  businessUrl: "https://deebuilt.co",
  logoSrc: "deebuilt-logo.png",
};
