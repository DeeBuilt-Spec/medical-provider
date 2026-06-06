import { createFileRoute, Outlet, Link, useRouterState } from "@tanstack/react-router";
import { practice } from "../lib/practice";

export const Route = createFileRoute("/site5-real")({
  head: () => ({
    meta: [
      { title: "Providence Care Plus — Friendly Primary Care & Weight Care" },
      { name: "description", content: "Cash-pay primary care, GLP-1 weight management, and physicals from a friendly nurse practitioner. Virtual or in person. English & Kreyòl Ayisyen." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  component: Site5RealLayout,
});

// Friendly theme tokens — muted teal, warm cream, soft.
export const t5 = {
  paper: "#FCF9F4",
  paperDeep: "#F4ECDF",
  ink: "#2E2A26",
  teal: "#557E78",
  tealDeep: "#3C625D",
  muted: "#7B736A",
  hair: "rgba(46,42,38,0.14)",
  serif: "'Source Serif 4', Georgia, serif",
  sans: "'Inter', ui-sans-serif, system-ui, sans-serif",
};

const navLinks = [
  { to: "/site5-real", label: "Home", exact: true },
  { to: "/site5-real/services", label: "Services", exact: false },
  { to: "/site5-real/about", label: "About", exact: false },
  { to: "/site5-real/booking", label: "Book", exact: false },
] as const;

function Site5RealLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const isActive = (to: string, exact: boolean) => {
    const full = `${base}${to}`;
    return exact ? pathname === full || pathname === `${full}/` : pathname.startsWith(full);
  };

  return (
    <div style={{ background: t5.paper, color: t5.ink, fontFamily: t5.sans, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(252,249,244,0.92)", backdropFilter: "blur(10px)", borderBottom: `1px solid ${t5.hair}` }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <Link to="/site5-real" style={{ fontFamily: t5.serif, fontSize: 22, fontWeight: 600, color: t5.tealDeep, textDecoration: "none" }}>
            {practice.name}
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
            <div className="r-hide" style={{ display: "flex", gap: 30, fontSize: 14 }}>
              {navLinks.slice(0, 3).map((l) => (
                <Link key={l.to} to={l.to} style={{ color: isActive(l.to, l.exact) ? t5.ink : t5.muted, textDecoration: "none", borderBottom: isActive(l.to, l.exact) ? `1px solid ${t5.teal}` : "1px solid transparent", paddingBottom: 4 }}>
                  {l.label}
                </Link>
              ))}
            </div>
            <Link to="/site5-real/booking" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: t5.tealDeep, textDecoration: "none", border: `1px solid ${t5.tealDeep}`, padding: "10px 18px", borderRadius: 8, whiteSpace: "nowrap" }}>
              Book a Visit
            </Link>
          </div>
        </div>
      </nav>

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ background: t5.paperDeep, borderTop: `1px solid ${t5.hair}` }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1180, margin: "0 auto", padding: "60px 24px", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 48 }}>
          <div>
            <div style={{ fontFamily: t5.serif, fontSize: 22, fontWeight: 600, color: t5.tealDeep, marginBottom: 14 }}>{practice.name}</div>
            <p style={{ fontSize: 14.5, lineHeight: 1.8, margin: "0 0 14px", maxWidth: "34ch", color: t5.muted }}>{practice.tagline}</p>
            <p style={{ fontSize: 14.5, fontStyle: "italic", fontFamily: t5.serif, color: t5.tealDeep, margin: 0 }}>{practice.creoleLine}</p>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: t5.muted, marginBottom: 16 }}>Contact</div>
            <p style={{ margin: "0 0 8px", fontSize: 14.5 }}>{practice.contact.phone}</p>
            <p style={{ margin: "0 0 8px", fontSize: 14.5 }}>{practice.contact.email}</p>
            <p style={{ margin: 0, fontSize: 14.5 }}>{practice.contact.hours}</p>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: t5.muted, marginBottom: 16 }}>Visit</div>
            {navLinks.map((l) => (
              <div key={l.to} style={{ marginBottom: 8 }}>
                <Link to={l.to} style={{ fontSize: 14.5, color: t5.ink, textDecoration: "none" }}>{l.label}</Link>
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${t5.hair}` }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", padding: "20px 24px", fontSize: 13, color: t5.muted, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <span>© 2026 {practice.name} · A practice for our community</span>
            <span>{practice.contact.location}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
