import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { allSpecs, specGroups } from "../lib/specs";

/*
 * Floating review-only navigation shell.
 *
 * Renders a slim bar at the bottom-center of every spec page so a reviewer can
 * step Prev/Next through directions or jump to any one from a dropdown, without
 * the browser back-button dance. Hidden on the landing page ("/").
 *
 * Designed to be reusable across future specs: it reads the generic spec list
 * from lib/specs and is mounted once in __root, so it needs no per-site wiring.
 */

export function SpecSwitcher() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const fullPath = (to: string) => `${base}${to}`;
  const homePath = base === "" ? "/" : base;

  // Are we on the landing page? If so, render nothing.
  const onHome = pathname === homePath || pathname === `${homePath}/` || pathname === "/";

  // Find the current direction by longest matching prefix, so child pages of a
  // multi-page site (e.g. /site6-real/booking) still resolve to their parent.
  let currentIndex = -1;
  let bestLen = -1;
  allSpecs.forEach((s, i) => {
    const full = fullPath(s.to);
    if ((pathname === full || pathname.startsWith(`${full}/`)) && full.length > bestLen) {
      bestLen = full.length;
      currentIndex = i;
    }
  });

  // Close dropdown on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    // Listen for touchstart too, so tapping outside closes the panel on mobile.
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close the dropdown whenever the route changes.
  useEffect(() => { setOpen(false); }, [pathname]);

  if (onHome) return null;

  const current = currentIndex >= 0 ? allSpecs[currentIndex] : null;
  const prev = currentIndex > 0 ? allSpecs[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < allSpecs.length - 1 ? allSpecs[currentIndex + 1] : null;

  const ink = "#1a1c19";
  const paper = "#fdfcfb";
  const muted = "#7a7a7a";
  const hair = "rgba(26,28,25,0.14)";
  const sans = "ui-sans-serif, system-ui, -apple-system, sans-serif";

  // Arrows are <button>s (not <Link>s) so taps fire reliably on real
  // touchscreens — the same control type as the dropdown toggle, which works on
  // mobile. 44px target meets the touch minimum; touchAction avoids tap delay.
  const arrow: React.CSSProperties = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    width: 44, height: 44, borderRadius: 999, textDecoration: "none",
    color: ink, fontSize: 22, lineHeight: 1, flexShrink: 0,
    background: "transparent", border: "none", padding: 0, cursor: "pointer",
    fontFamily: sans, touchAction: "manipulation", WebkitTapHighlightColor: "transparent",
  };
  const arrowDisabled: React.CSSProperties = { ...arrow, color: "rgba(26,28,25,0.22)", cursor: "default", pointerEvents: "none" };

  return (
    <div
      ref={ref}
      style={{
        position: "fixed", left: "50%", bottom: 20, transform: "translateX(-50%)",
        zIndex: 1000, fontFamily: sans,
        // keep clear of small screens' edges
        maxWidth: "calc(100vw - 24px)",
      }}
    >
      {/* Dropdown panel (opens upward) */}
      {open && (
        <div
          style={{
            position: "absolute", bottom: "calc(100% + 10px)", left: "50%", transform: "translateX(-50%)",
            width: 360, maxWidth: "calc(100vw - 24px)", maxHeight: "70vh", overflowY: "auto",
            background: paper, border: `1px solid ${hair}`, borderRadius: 14,
            boxShadow: "0 24px 60px -24px rgba(26,28,25,0.4)", padding: "10px 0",
          }}
        >
          {specGroups.map((g) => (
            <div key={g.title}>
              <div style={{ padding: "12px 18px 6px", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: muted }}>
                {g.title}
              </div>
              {g.items.map((s) => {
                const active = current?.to === s.to;
                return (
                  <Link
                    key={s.to}
                    to={s.to}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "flex", alignItems: "baseline", gap: 12, padding: "10px 18px",
                      textDecoration: "none", color: ink,
                      background: active ? "rgba(26,28,25,0.05)" : "transparent",
                    }}
                  >
                    <span style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: muted, minWidth: 56, flexShrink: 0 }}>
                      {s.label}
                    </span>
                    <span style={{ fontSize: 14.5 }}>
                      {s.name}
                      {active && <span style={{ color: muted, fontSize: 12 }}> · current</span>}
                    </span>
                  </Link>
                );
              })}
            </div>
          ))}
          <div style={{ borderTop: `1px solid ${hair}`, marginTop: 6, paddingTop: 6 }}>
            <Link to="/" onClick={() => setOpen(false)} style={{ display: "block", padding: "10px 18px", textDecoration: "none", color: muted, fontSize: 13, letterSpacing: "0.04em" }}>
              ← All directions
            </Link>
          </div>
        </div>
      )}

      {/* The bar */}
      <div
        style={{
          display: "flex", alignItems: "center", gap: 4,
          background: paper, border: `1px solid ${hair}`, borderRadius: 999,
          boxShadow: "0 14px 36px -18px rgba(26,28,25,0.45)",
          padding: "6px 8px",
        }}
      >
        {prev ? (
          <button type="button" onClick={() => navigate({ to: prev.to })} style={arrow} aria-label={`Previous: ${prev.name}`} title={prev.name}>‹</button>
        ) : (
          <span style={arrowDisabled} aria-hidden>‹</span>
        )}

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          style={{
            display: "flex", alignItems: "center", gap: 10, background: "transparent", border: "none",
            cursor: "pointer", padding: "6px 12px", fontFamily: sans, color: ink, maxWidth: "62vw",
          }}
        >
          <span style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 9.5, letterSpacing: "0.18em", textTransform: "uppercase", color: muted, flexShrink: 0 }}>
            {current ? current.label : "Spec"}
          </span>
          <span style={{ fontSize: 14, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {current ? current.name : "Browse directions"}
          </span>
          <span style={{ fontSize: 10, color: muted, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.15s", flexShrink: 0 }}>▲</span>
        </button>

        {next ? (
          <button type="button" onClick={() => navigate({ to: next.to })} style={arrow} aria-label={`Next: ${next.name}`} title={next.name}>›</button>
        ) : (
          <span style={arrowDisabled} aria-hidden>›</span>
        )}
      </div>
    </div>
  );
}
