import { createFileRoute, Link } from "@tanstack/react-router";
import { practice, services } from "../lib/practice";
import { t5 } from "./site5-real";

export const Route = createFileRoute("/site5-real/services")({
  head: () => ({ meta: [{ title: "Services & Pricing — Providence Care Plus" }] }),
  component: ServicesPage,
});

const eyebrow: React.CSSProperties = { fontSize: 11, fontWeight: 600, letterSpacing: "0.24em", textTransform: "uppercase", color: t5.tealDeep, margin: 0 };

function ServicesPage() {
  return (
    <div>
      <section style={{ padding: "clamp(64px, 10vh, 110px) 24px clamp(40px, 6vh, 64px)", borderBottom: `1px solid ${t5.hair}` }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <p style={{ ...eyebrow, marginBottom: 20 }}>Services & Pricing</p>
          <h1 style={{ fontFamily: t5.serif, fontSize: "clamp(34px, 5vw, 60px)", fontWeight: 600, letterSpacing: "-0.015em", margin: "0 0 24px", maxWidth: "16ch" }}>
            Clear services, clear prices.
          </h1>
          <p style={{ fontSize: 17, color: t5.muted, lineHeight: 1.7, margin: 0, maxWidth: "56ch" }}>{practice.payment}</p>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.id} id={s.id} style={{ scrollMarginTop: 90, padding: "clamp(56px, 8vh, 88px) 24px", background: i % 2 === 1 ? t5.paperDeep : t5.paper, borderBottom: `1px solid ${t5.hair}` }}>
          <div className="r-stack r-gap" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <p style={{ fontFamily: t5.serif, fontSize: 15, fontStyle: "italic", color: t5.teal, margin: "0 0 14px" }}>0{i + 1}</p>
              <h2 style={{ fontFamily: t5.serif, fontSize: "clamp(28px, 3.4vw, 42px)", fontWeight: 600, letterSpacing: "-0.01em", margin: "0 0 20px", color: t5.tealDeep }}>{s.name}</h2>
              <p style={{ fontSize: 17.5, color: t5.ink, lineHeight: 1.8, margin: "0 0 28px", maxWidth: "44ch" }}>{s.detail}</p>
              <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "auto 1fr", gap: "0 24px" }}>
                {[["For", s.forWho], ["Format", s.format], ["Length", s.length], ["Fee", s.price]].map(([k, v]) => (
                  <div key={k} style={{ display: "contents" }}>
                    <dt style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: t5.muted, padding: "12px 0", borderTop: `1px solid ${t5.hair}` }}>{k}</dt>
                    <dd style={{ fontSize: 15.5, color: t5.ink, margin: 0, padding: "12px 0", borderTop: `1px solid ${t5.hair}` }}>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <p style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: t5.muted, margin: "0 0 22px" }}>What it covers</p>
              <ul style={{ listStyle: "none", margin: "0 0 32px", padding: 0 }}>
                {s.treats.map((item) => (
                  <li key={item} style={{ fontSize: 16, color: t5.ink, lineHeight: 1.5, padding: "14px 0", borderTop: `1px solid ${t5.hair}` }}>{item}</li>
                ))}
              </ul>
              <Link to="/site5-real/booking" search={{ service: s.id }} style={{ display: "inline-block", padding: "13px 28px", border: `1px solid ${t5.tealDeep}`, color: t5.tealDeep, fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", borderRadius: 8 }}>
                Book {s.name}
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section style={{ padding: "clamp(64px, 10vh, 100px) 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: t5.serif, fontSize: "clamp(28px, 3.6vw, 44px)", fontWeight: 600, letterSpacing: "-0.01em", margin: "0 0 16px" }}>Not sure which visit you need?</h2>
        <p style={{ fontSize: 17, color: t5.muted, margin: "0 0 32px" }}>Book a primary care visit and we'll point you the right way.</p>
        <Link to="/site5-real/booking" style={{ display: "inline-block", padding: "15px 38px", border: `1px solid ${t5.tealDeep}`, color: t5.tealDeep, fontSize: 13, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", borderRadius: 8 }}>
          Book an Appointment
        </Link>
      </section>
    </div>
  );
}
