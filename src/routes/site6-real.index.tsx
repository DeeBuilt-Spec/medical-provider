import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/hero-site5.jpg";
import providerImg from "../assets/stethoscope.jpg";
import { useParallax } from "../lib/useParallax";
import { practice, services, howItWorks } from "../lib/practice";
import { t6 } from "./site6-real";

export const Route = createFileRoute("/site6-real/")({
  component: Home,
});

const grade = "linear-gradient(180deg, rgba(30,42,43,0.16) 0%, rgba(46,90,94,0.10) 65%, rgba(30,42,43,0.28) 100%)";
const photoFilter = "saturate(0.92) contrast(1.02)";
const eyebrow: React.CSSProperties = { fontSize: 11, fontWeight: 500, letterSpacing: "0.26em", textTransform: "uppercase", color: t6.teal, margin: 0 };

function Home() {
  const offset = useParallax(0.18);
  return (
    <div>
      {/* Hero — says exactly what the practice is */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden
          style={{
            position: "absolute", inset: "-8% 0",
            backgroundImage: `${grade}, url(${heroImg})`,
            backgroundSize: "cover", backgroundPosition: "center",
            transform: `translate3d(0, ${offset}px, 0)`, willChange: "transform", filter: photoFilter,
          }}
        />
        <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto", padding: "clamp(96px, 16vh, 180px) 24px clamp(80px, 12vh, 140px)" }}>
          <div style={{ maxWidth: 760 }}>
            <p style={{ ...eyebrow, color: "#CFE0DE", marginBottom: 24 }}>Direct Primary Care · Weight Management · Physicals</p>
            <h1 style={{ fontFamily: t6.serif, fontSize: "clamp(40px, 6vw, 76px)", lineHeight: 1.04, fontWeight: 400, letterSpacing: "-0.015em", color: "#FBFAF7", margin: "0 0 24px" }}>
              A nurse practitioner with real time for your health.
            </h1>
            <p style={{ fontSize: 19, color: "#E7EDEC", lineHeight: 1.6, margin: "0 0 16px", maxWidth: "50ch" }}>
              Cash-pay primary care, GLP-1 weight management, and physicals — by video or in person. Visits run 30 to 45 minutes, with same-week appointments.
            </p>
            <p style={{ fontSize: 15, color: "#CFE0DE", margin: "0 0 40px", fontStyle: "italic", fontFamily: t6.serif }}>
              {practice.languages} · {practice.greeting}
            </p>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap", alignItems: "center" }}>
              <Link to="/site6-real/booking" style={{ padding: "15px 32px", border: "1px solid #FBFAF7", color: "#FBFAF7", fontSize: 13, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none" }}>
                Book an Appointment
              </Link>
              <Link to="/site6-real/services" style={{ color: "#FBFAF7", fontSize: 15, textDecoration: "none", borderBottom: "1px solid rgba(251,250,247,0.5)", paddingBottom: 4 }}>
                See services & pricing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview — named, concrete, priced */}
      <section style={{ padding: "clamp(80px, 12vh, 120px) 24px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <p style={{ ...eyebrow, marginBottom: 16 }}>What we offer</p>
          <h2 style={{ fontFamily: t6.serif, fontSize: "clamp(30px, 3.6vw, 46px)", fontWeight: 400, letterSpacing: "-0.015em", margin: "0 0 8px" }}>Three ways we care for you.</h2>
          <p style={{ fontSize: 16, color: t6.muted, margin: "0 0 56px", maxWidth: "52ch", lineHeight: 1.7 }}>{practice.payment}</p>
          <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: `1px solid ${t6.hair}` }}>
            {services.map((s, i) => (
              <div key={s.id} style={{ padding: "40px 32px 40px 0", borderLeft: i === 0 ? "none" : `1px solid ${t6.hair}`, paddingLeft: i === 0 ? 0 : 32 }}>
                <h3 style={{ fontFamily: t6.serif, fontSize: "clamp(22px, 2.4vw, 28px)", fontWeight: 400, margin: "0 0 12px", color: t6.tealDeep }}>{s.name}</h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.7, color: t6.muted, margin: "0 0 20px" }}>{s.short}</p>
                <p style={{ fontSize: 13, color: t6.ink, margin: "0 0 4px" }}>{s.length} · {s.format}</p>
                <p style={{ fontSize: 13, color: t6.muted, margin: "0 0 20px" }}>{s.price}</p>
                <Link to="/site6-real/services" hash={s.id} style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: t6.teal, textDecoration: "none", borderBottom: `1px solid ${t6.teal}`, paddingBottom: 3 }}>
                  Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "clamp(80px, 12vh, 120px) 24px", background: t6.paperDeep, borderTop: `1px solid ${t6.hair}` }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{ ...eyebrow, marginBottom: 16 }}>How it works</p>
          <h2 style={{ fontFamily: t6.serif, fontSize: "clamp(30px, 3.6vw, 46px)", fontWeight: 400, letterSpacing: "-0.015em", margin: "0 0 56px" }}>Booking takes a minute.</h2>
          {howItWorks.map((s, i, arr) => (
            <div key={s.n} className="r-stack" style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 32, padding: "40px 0", borderBottom: i === arr.length - 1 ? "none" : `1px solid ${t6.hair}` }}>
              <span style={{ fontFamily: t6.serif, fontSize: "clamp(40px, 5vw, 60px)", color: t6.teal, lineHeight: 1 }}>{s.n}</span>
              <div style={{ maxWidth: 620 }}>
                <h4 style={{ fontFamily: t6.serif, fontSize: 24, fontWeight: 400, margin: "0 0 12px" }}>{s.title}</h4>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: t6.muted, margin: 0 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Provider strip */}
      <section style={{ padding: "clamp(80px, 12vh, 120px) 24px" }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 64, alignItems: "center" }}>
          <div className="r-hero-img" style={{ position: "relative", height: 420, overflow: "hidden" }}>
            <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: `${grade}, url(${providerImg})`, backgroundSize: "cover", backgroundPosition: "center", filter: photoFilter }} />
          </div>
          <div>
            <p style={{ ...eyebrow, marginBottom: 20 }}>Your provider</p>
            <h2 style={{ fontFamily: t6.serif, fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 400, letterSpacing: "-0.015em", lineHeight: 1.06, margin: "0 0 20px" }}>{practice.provider.name}</h2>
            <p style={{ fontSize: 17.5, color: t6.ink, lineHeight: 1.8, margin: "0 0 24px", maxWidth: "46ch" }}>
              {practice.provider.yearsExperience} in the medical field. {practice.provider.origin}, {practice.provider.first} founded {practice.name} to offer attentive, unhurried care that puts the patient relationship first.
            </p>
            <Link to="/site6-real/about" style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: t6.teal, textDecoration: "none", borderBottom: `1px solid ${t6.teal}`, paddingBottom: 3 }}>
              More about {practice.provider.first}
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ padding: "clamp(72px, 11vh, 110px) 24px", background: t6.tealDeep, color: "#EAF2F0", textAlign: "center" }}>
        <h2 style={{ fontFamily: t6.serif, fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 400, letterSpacing: "-0.015em", margin: "0 0 28px" }}>Ready when you are.</h2>
        <Link to="/site6-real/booking" style={{ display: "inline-block", padding: "16px 40px", border: "1px solid #EAF2F0", color: "#EAF2F0", fontSize: 13, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none" }}>
          Book an Appointment
        </Link>
      </section>
    </div>
  );
}
