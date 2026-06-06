import { createFileRoute, Link } from "@tanstack/react-router";
import { practice, services } from "../lib/practice";
import { t6 } from "./site6-real";

export const Route = createFileRoute("/site6-real/services")({
  head: () => ({ meta: [{ title: "Services & Pricing — Providence Care Plus" }] }),
  component: ServicesPage,
});

const eyebrow: React.CSSProperties = { fontSize: 11, fontWeight: 500, letterSpacing: "0.26em", textTransform: "uppercase", color: t6.teal, margin: 0 };

function ServicesPage() {
  return (
    <div>
      {/* Page header */}
      <section style={{ padding: "clamp(72px, 11vh, 120px) 24px clamp(48px, 7vh, 72px)", borderBottom: `1px solid ${t6.hair}` }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <p style={{ ...eyebrow, marginBottom: 20 }}>Services & Pricing</p>
          <h1 style={{ fontFamily: t6.serif, fontSize: "clamp(34px, 5vw, 64px)", fontWeight: 400, letterSpacing: "-0.02em", margin: "0 0 24px", maxWidth: "16ch" }}>
            Clear services. Clear prices.
          </h1>
          <p style={{ fontSize: 17, color: t6.muted, lineHeight: 1.7, margin: 0, maxWidth: "56ch" }}>{practice.payment}</p>
        </div>
      </section>

      {/* Each service in detail */}
      {services.map((s, i) => (
        <section key={s.id} id={s.id} style={{ scrollMarginTop: 90, padding: "clamp(64px, 9vh, 96px) 24px", background: i % 2 === 1 ? t6.paperDeep : t6.paper, borderBottom: `1px solid ${t6.hair}` }}>
          <div className="r-stack r-gap" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <p style={{ fontFamily: t6.serif, fontSize: 15, fontStyle: "italic", color: t6.teal, margin: "0 0 14px" }}>0{i + 1}</p>
              <h2 style={{ fontFamily: t6.serif, fontSize: "clamp(28px, 3.4vw, 42px)", fontWeight: 400, letterSpacing: "-0.015em", margin: "0 0 20px", color: t6.tealDeep }}>{s.name}</h2>
              <p style={{ fontSize: 17.5, color: t6.ink, lineHeight: 1.8, margin: "0 0 28px", maxWidth: "44ch" }}>{s.detail}</p>
              <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "auto 1fr", gap: "0 24px" }}>
                {[
                  ["For", s.forWho],
                  ["Format", s.format],
                  ["Length", s.length],
                  ["Fee", s.price],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: "contents" }}>
                    <dt style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: t6.muted, padding: "12px 0", borderTop: `1px solid ${t6.hair}` }}>{k}</dt>
                    <dd style={{ fontSize: 15.5, color: t6.ink, margin: 0, padding: "12px 0", borderTop: `1px solid ${t6.hair}` }}>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: t6.muted, margin: "0 0 22px" }}>What it covers</p>
              <ul style={{ listStyle: "none", margin: "0 0 32px", padding: 0 }}>
                {s.treats.map((item) => (
                  <li key={item} style={{ fontSize: 16, color: t6.ink, lineHeight: 1.5, padding: "14px 0", borderTop: `1px solid ${t6.hair}` }}>{item}</li>
                ))}
              </ul>
              <Link to="/site6-real/booking" hash={s.id} search={{ service: s.id }} style={{ display: "inline-block", padding: "14px 30px", border: `1px solid ${t6.tealDeep}`, color: t6.tealDeep, fontSize: 12, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none" }}>
                Book {s.name}
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ padding: "clamp(72px, 11vh, 110px) 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: t6.serif, fontSize: "clamp(28px, 3.6vw, 44px)", fontWeight: 400, letterSpacing: "-0.015em", margin: "0 0 16px" }}>Not sure which visit you need?</h2>
        <p style={{ fontSize: 17, color: t6.muted, margin: "0 0 32px" }}>Book a primary care visit and we'll point you the right way.</p>
        <Link to="/site6-real/booking" style={{ display: "inline-block", padding: "16px 40px", border: `1px solid ${t6.tealDeep}`, color: t6.tealDeep, fontSize: 13, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none" }}>
          Book an Appointment
        </Link>
      </section>
    </div>
  );
}
