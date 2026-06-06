import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "../assets/hero-site5.jpg";
import providerImg from "../assets/stethoscope.jpg";
import { useParallax } from "../lib/useParallax";
import { practice, services, howItWorks } from "../lib/practice";
import { t5 } from "./site5-real";

export const Route = createFileRoute("/site5-real/")({
  component: Home,
});

const grade = "linear-gradient(180deg, rgba(46,42,38,0.10) 0%, rgba(85,126,120,0.10) 70%, rgba(46,42,38,0.18) 100%)";
const photoFilter = "saturate(0.95) contrast(1.02)";
const eyebrow: React.CSSProperties = { fontSize: 11, fontWeight: 600, letterSpacing: "0.24em", textTransform: "uppercase", color: t5.tealDeep, margin: 0 };

function Home() {
  const offset = useParallax(0.22);
  return (
    <div>
      {/* Hero — split, friendly, says what it is */}
      <section style={{ padding: "clamp(56px, 8vh, 88px) 24px clamp(72px, 10vh, 104px)", maxWidth: 1180, margin: "0 auto" }}>
        <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ ...eyebrow, marginBottom: 24 }}>Primary Care · Weight Care · Physicals</p>
            <h1 style={{ fontFamily: t5.serif, fontSize: "clamp(40px, 6vw, 78px)", lineHeight: 1.04, fontWeight: 600, letterSpacing: "-0.015em", margin: "0 0 24px" }}>
              Friendly care, from a nurse who has time for you.
            </h1>
            <p style={{ fontSize: 19, color: t5.muted, lineHeight: 1.65, margin: "0 0 14px", maxWidth: 500 }}>
              Cash-pay primary care, GLP-1 weight management, and physicals — by video or in person, with same-week appointments and no insurance required.
            </p>
            <p style={{ fontSize: 15, color: t5.tealDeep, fontStyle: "italic", fontFamily: t5.serif, margin: "0 0 36px" }}>
              {practice.languages} · {practice.greeting}
            </p>
            <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
              <Link to="/site5-real/booking" style={{ padding: "15px 30px", border: `1px solid ${t5.tealDeep}`, color: t5.tealDeep, fontSize: 13, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", borderRadius: 8 }}>
                Book an Appointment
              </Link>
              <Link to="/site5-real/services" style={{ color: t5.tealDeep, fontSize: 15, fontWeight: 500, textDecoration: "none", borderBottom: `1px solid ${t5.hair}`, paddingBottom: 4 }}>
                See services & pricing →
              </Link>
            </div>
          </div>
          <div className="r-hero-img" style={{ position: "relative", height: 540, overflow: "hidden", borderRadius: 12, background: t5.paperDeep }}>
            <div aria-hidden style={{ position: "absolute", inset: "-12% 0", backgroundImage: `${grade}, url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center", transform: `translate3d(0, ${offset}px, 0)`, willChange: "transform", filter: photoFilter }} />
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section style={{ padding: "clamp(72px, 11vh, 110px) 24px", borderTop: `1px solid ${t5.hair}` }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <p style={{ ...eyebrow, marginBottom: 16 }}>What we offer</p>
          <h2 style={{ fontFamily: t5.serif, fontSize: "clamp(30px, 3.8vw, 48px)", fontWeight: 600, letterSpacing: "-0.01em", margin: "0 0 8px" }}>Three ways we can help.</h2>
          <p style={{ fontSize: 16, color: t5.muted, margin: "0 0 56px", maxWidth: "52ch", lineHeight: 1.7 }}>{practice.payment}</p>
          <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 56, borderTop: `1px solid ${t5.hair}`, paddingTop: 48 }}>
            {services.map((s) => (
              <div key={s.id}>
                <h3 style={{ fontFamily: t5.serif, fontSize: "clamp(22px, 2.4vw, 28px)", fontWeight: 600, margin: "0 0 12px", color: t5.tealDeep }}>{s.name}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: t5.ink, margin: "0 0 18px" }}>{s.short}</p>
                <p style={{ fontSize: 13.5, color: t5.muted, margin: "0 0 18px" }}>{s.length} · {s.format} · {s.price}</p>
                <Link to="/site5-real/services" hash={s.id} style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: t5.tealDeep, textDecoration: "none", borderBottom: `1px solid ${t5.tealDeep}`, paddingBottom: 3, fontWeight: 600 }}>
                  Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "clamp(72px, 11vh, 110px) 24px", background: t5.paperDeep, borderTop: `1px solid ${t5.hair}` }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{ ...eyebrow, marginBottom: 16 }}>How it works</p>
          <h2 style={{ fontFamily: t5.serif, fontSize: "clamp(30px, 3.8vw, 48px)", fontWeight: 600, letterSpacing: "-0.01em", margin: "0 0 56px" }}>Booking takes a minute.</h2>
          <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 56 }}>
            {howItWorks.map((s) => (
              <div key={s.n} style={{ borderTop: `1px solid ${t5.hair}`, paddingTop: 28 }}>
                <p style={{ fontFamily: t5.serif, fontSize: "clamp(36px, 4vw, 52px)", color: t5.teal, fontWeight: 500, lineHeight: 1, margin: "0 0 24px" }}>{s.n}</p>
                <h4 style={{ fontFamily: t5.serif, fontSize: 23, fontWeight: 600, margin: "0 0 12px" }}>{s.title}</h4>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: t5.muted, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider strip */}
      <section style={{ padding: "clamp(72px, 11vh, 110px) 24px", borderTop: `1px solid ${t5.hair}` }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ ...eyebrow, marginBottom: 20 }}>Meet your provider</p>
            <h2 style={{ fontFamily: t5.serif, fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 600, letterSpacing: "-0.01em", lineHeight: 1.08, margin: "0 0 20px" }}>{practice.provider.name}</h2>
            <p style={{ fontSize: 17.5, color: t5.ink, lineHeight: 1.8, margin: "0 0 24px", maxWidth: "46ch" }}>
              {practice.provider.yearsExperience} in the medical field. {practice.provider.origin}, {practice.provider.first} founded {practice.name} to offer attentive, unhurried care that puts the patient relationship first.
            </p>
            <Link to="/site5-real/about" style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: t5.tealDeep, textDecoration: "none", borderBottom: `1px solid ${t5.tealDeep}`, paddingBottom: 3, fontWeight: 600 }}>
              More about {practice.provider.first}
            </Link>
          </div>
          <div className="r-hero-img" style={{ position: "relative", height: 420, overflow: "hidden", borderRadius: 12 }}>
            <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: `${grade}, url(${providerImg})`, backgroundSize: "cover", backgroundPosition: "center", filter: photoFilter }} />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ padding: "clamp(64px, 10vh, 100px) 24px", background: t5.tealDeep, color: "#F1F6F4", textAlign: "center" }}>
        <h2 style={{ fontFamily: t5.serif, fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 600, letterSpacing: "-0.01em", margin: "0 0 28px" }}>We'd love to see you.</h2>
        <Link to="/site5-real/booking" style={{ display: "inline-block", padding: "15px 38px", border: "1px solid #F1F6F4", color: "#F1F6F4", fontSize: 13, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", borderRadius: 8 }}>
          Book an Appointment
        </Link>
      </section>
    </div>
  );
}
