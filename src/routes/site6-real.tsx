import { Outlet, Link, useLocation } from "react-router-dom";
import { practice } from "../lib/practice";
import { useDocumentTitle } from "../lib/useDocumentTitle";

// Clinical-chic theme tokens — tonal teal, warm paper, single accent.
export const t6 = {
  paper: "#F6F4EF",
  paperDeep: "#EEEBE3",
  ink: "#1E2A2B",
  teal: "#2E5A5E",
  tealDeep: "#21464A",
  muted: "#6E6A62",
  hair: "rgba(30,42,43,0.14)",
  serif: "'Newsreader', Georgia, serif",
  sans: "'Inter', ui-sans-serif, system-ui, sans-serif",
};

const navLinks = [
  { to: "/site6-real", label: "Home", exact: true },
  { to: "/site6-real/services", label: "Services", exact: false },
  { to: "/site6-real/about", label: "About", exact: false },
  { to: "/site6-real/booking", label: "Book", exact: false },
] as const;

export default function Site6RealLayout() {
  useDocumentTitle("Providence Care Plus — Direct Primary Care & Weight Management");
  // react-router is mounted with basename, so useLocation().pathname is already
  // base-relative (e.g. "/site6-real/services") — compare against the bare `to`.
  const pathname = useLocation().pathname;
  const isActive = (to: string, exact: boolean) => {
    return exact ? pathname === to || pathname === `${to}/` : pathname.startsWith(to);
  };

  return (
    <div style={{ background: t6.paper, color: t6.ink, fontFamily: t6.sans, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Utility bar */}
      <div style={{ background: t6.tealDeep, color: "#E7EDEC" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "10px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8, fontSize: 12, letterSpacing: "0.04em" }}>
          <span>{practice.greeting} — we see patients in {practice.languages}</span>
          <a href={`tel:${practice.contact.phone.replace(/[^\d]/g, "")}`} style={{ color: "inherit", textDecoration: "none" }}>{practice.contact.phone}</a>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(246,244,239,0.9)", backdropFilter: "blur(10px)", borderBottom: `1px solid ${t6.hair}` }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <Link to="/site6-real" style={{ fontFamily: t6.serif, fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em", color: t6.ink, textDecoration: "none" }}>
            {practice.name}
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
            <div className="r-hide" style={{ display: "flex", gap: 30, fontSize: 13.5 }}>
              {navLinks.slice(0, 3).map((l) => (
                <Link key={l.to} to={l.to} style={{ color: isActive(l.to, l.exact) ? t6.ink : t6.muted, textDecoration: "none", borderBottom: isActive(l.to, l.exact) ? `1px solid ${t6.teal}` : "1px solid transparent", paddingBottom: 4 }}>
                  {l.label}
                </Link>
              ))}
            </div>
            <Link to="/site6-real/booking" style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: t6.teal, textDecoration: "none", borderBottom: `1px solid ${t6.teal}`, paddingBottom: 5, whiteSpace: "nowrap" }}>
              Book a Visit
            </Link>
          </div>
        </div>
      </nav>

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ background: t6.ink, color: "#B9C5C4" }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 48 }}>
          <div>
            <div style={{ fontFamily: t6.serif, fontSize: 22, color: "#fff", marginBottom: 14 }}>{practice.name}</div>
            <p style={{ fontSize: 14.5, lineHeight: 1.8, margin: "0 0 16px", maxWidth: "34ch" }}>{practice.tagline}</p>
            <p style={{ fontSize: 14.5, fontStyle: "italic", fontFamily: t6.serif, color: "#9FB3B1", margin: 0 }}>{practice.creoleLine}</p>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7C8E8D", marginBottom: 16 }}>Contact</div>
            <p style={{ margin: "0 0 8px", fontSize: 14.5 }}>{practice.contact.phone}</p>
            <p style={{ margin: "0 0 8px", fontSize: 14.5 }}>{practice.contact.email}</p>
            <p style={{ margin: 0, fontSize: 14.5 }}>{practice.contact.hours}</p>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7C8E8D", marginBottom: 16 }}>Visit</div>
            {navLinks.map((l) => (
              <div key={l.to} style={{ marginBottom: 8 }}>
                <Link to={l.to} style={{ fontSize: 14.5, color: "#B9C5C4", textDecoration: "none" }}>{l.label}</Link>
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", padding: "22px 24px", fontSize: 12.5, color: "#7C8E8D", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <span>© 2026 {practice.name}. All rights reserved.</span>
            <span>{practice.contact.location}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
