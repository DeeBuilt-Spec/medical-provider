import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Providence Care Plus — Mockups" },
      { name: "description", content: "Three homepage design directions for Providence Care Plus." },
    ],
  }),
  component: Index,
});

const sites = [
  { to: "/site1", label: "Site 01", name: "Serif editorial focus", note: "Full-bleed parallax · centered serif wordmark" },
  { to: "/site2", label: "Site 02", name: "Editorial split", note: "Oversized headline · tall portrait image · sage accent" },
  { to: "/site3", label: "Site 03", name: "Asymmetric editorial", note: "Off-grid composition · navy accent · mono details" },
  { to: "/site4", label: "Site 04", name: "Warm neighborhood", note: "Inviting centered hero · soft sage · Lora serif" },
  { to: "/site5", label: "Site 05", name: "Friendly family practice", note: "Approachable split layout · soft teal accent" },
  { to: "/site6", label: "Site 06", name: "Modern clinical & trustworthy", note: "Geometric sans · rounded cards · teal + coral · trust signals" },
] as const;

function Index() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fdfcfb",
        color: "#1a1c19",
        fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
        padding: "10vh 6vw",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#6b705c", margin: 0 }}>
          Client Review
        </p>
        <h1 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 1.05, margin: "24px 0 16px", maxWidth: 800 }}>
          Providence Care Plus — three homepage directions.
        </h1>
        <p style={{ fontSize: 18, color: "#4a4a4a", maxWidth: 640, lineHeight: 1.6, margin: 0 }}>
          Each link opens a complete mockup of the homepage in a distinct design direction. Open them in separate tabs to compare.
        </p>

        <div style={{ marginTop: 80, borderTop: "1px solid rgba(26,28,25,0.1)" }}>
          {sites.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="r-stack"
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr auto",
                gap: 32,
                alignItems: "baseline",
                padding: "36px 0",
                borderBottom: "1px solid rgba(26,28,25,0.1)",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <span style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "#6b705c" }}>
                {s.label}
              </span>
              <span style={{ fontFamily: "Georgia, serif", fontSize: 32, lineHeight: 1.2 }}>
                {s.name}
                <span style={{ display: "block", fontFamily: "ui-sans-serif, system-ui, sans-serif", fontSize: 14, color: "#7a7a7a", marginTop: 8 }}>
                  {s.note}
                </span>
              </span>
              <span style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#1a1c19" }}>
                View →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
