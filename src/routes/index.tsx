import { createFileRoute, Link } from "@tanstack/react-router";
import { specGroups, type SpecEntry } from "../lib/specs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Providence Care Plus — Design Review" },
      { name: "description", content: "Interactive site builds and visual design directions for Providence Care Plus." },
    ],
  }),
  component: Index,
});

const ink = "#1a1c19";
const accent = "#6b705c";

function Index() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fdfcfb",
        color: ink,
        fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
        padding: "10vh 6vw",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: accent, margin: 0 }}>
          Client Review
        </p>
        <h1 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 1.05, margin: "24px 0 16px", maxWidth: 820 }}>
          Providence Care Plus — design review.
        </h1>
        <p style={{ fontSize: 18, color: "#4a4a4a", maxWidth: 660, lineHeight: 1.6, margin: 0 }}>
          Two complete, interactive site builds to explore first — followed by a set of single-page visual concepts to compare. Open any link in a new tab.
        </p>

        {specGroups.map((g) => (
          <div key={g.title}>
            <SectionHeading kicker={g.kicker} title={g.title} blurb={g.blurb} />
            <div style={{ borderTop: `1px solid rgba(26,28,25,0.12)` }}>
              {g.items.map((s) => (
                <Row key={s.to} s={s} featured={g.featured} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({ kicker, title, blurb }: { kicker: string; title: string; blurb: string }) {
  return (
    <div style={{ marginTop: 88, marginBottom: 8 }}>
      <p style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: accent, margin: "0 0 12px" }}>{kicker}</p>
      <h2 style={{ fontFamily: "Georgia, serif", fontWeight: 400, fontSize: "clamp(26px, 3vw, 38px)", margin: "0 0 12px" }}>{title}</h2>
      <p style={{ fontSize: 15.5, color: "#7a7a7a", maxWidth: 620, lineHeight: 1.6, margin: 0 }}>{blurb}</p>
    </div>
  );
}

function Row({ s, featured = false }: { s: SpecEntry; featured?: boolean }) {
  return (
    <Link
      to={s.to}
      className="r-stack"
      style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr auto",
        gap: 32,
        alignItems: "baseline",
        padding: featured ? "40px 0" : "30px 0",
        borderBottom: "1px solid rgba(26,28,25,0.1)",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      <span style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: accent }}>
        {s.label}
      </span>
      <span style={{ fontFamily: "Georgia, serif", fontSize: featured ? 36 : 28, lineHeight: 1.2 }}>
        {s.name}
        {featured && (
          <span style={{ display: "inline-block", marginLeft: 14, transform: "translateY(-4px)", fontFamily: "ui-sans-serif, system-ui, sans-serif", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: accent, border: `1px solid ${accent}`, padding: "4px 9px", verticalAlign: "middle" }}>
            Multi-page · Bookable
          </span>
        )}
        <span style={{ display: "block", fontFamily: "ui-sans-serif, system-ui, sans-serif", fontSize: 14, color: "#7a7a7a", marginTop: 8 }}>
          {s.note}
        </span>
      </span>
      <span style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: ink, whiteSpace: "nowrap" }}>
        {featured ? "Open →" : "View →"}
      </span>
    </Link>
  );
}
