import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroImg from "../assets/hero-site1.jpg";
import providerImg from "../assets/stethoscope.jpg";
import { useParallax } from "../lib/useParallax";

export const Route = createFileRoute("/site1")({
  head: () => ({
    meta: [
      { title: "Providence Care Plus — Concierge Primary Care" },
      { name: "description", content: "Direct primary care and GLP-1 virtual appointments — designed around the rhythm of your life." },
      { property: "og:title", content: "Providence Care Plus" },
      { property: "og:description", content: "Direct primary care and GLP-1 virtual appointments." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500&display=swap" },
    ],
  }),
  component: Site1,
});

const palette = {
  bone: "#F6F1E9",
  boneDeep: "#EDE6DA",
  olive: "#6E6B4F",
  ink: "#1A1714",
};

const serif = "'Fraunces', Georgia, serif";
const sans = "'Inter', ui-sans-serif, system-ui, sans-serif";

// A single consistent warm grade applied to every photographic surface so the
// imagery reads art-directed rather than stock. Olive shadows, warm bone lift.
const grade =
  "linear-gradient(180deg, rgba(26,23,20,0.30) 0%, rgba(26,23,20,0.10) 38%, rgba(110,107,79,0.22) 100%)";

function Site1() {
  const offset = useParallax(0.3);
  return (
    <div style={{ background: palette.bone, color: palette.ink, fontFamily: sans }}>
      {/* Hero — cinematic full-bleed, nearly wordless */}
      <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden", display: "flex", alignItems: "flex-end", padding: "0 0 8vh" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: "-8% 0",
            backgroundImage: `${grade}, url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            transform: `translate3d(0, ${offset}px, 0)`,
            willChange: "transform",
            filter: "saturate(0.82) contrast(1.02)",
          }}
        />
        {/* Quiet top wordmark */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, padding: "34px clamp(24px, 5vw, 64px)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: serif, fontSize: 20, color: palette.bone, letterSpacing: "0.01em" }}>Providence Care Plus</span>
          <a href="#contact" className="r-hide" style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: palette.bone, textDecoration: "none", borderBottom: `1px solid rgba(246,241,233,0.5)`, paddingBottom: 4 }}>
            Enquire
          </a>
        </div>

        <div style={{ position: "relative", width: "100%", maxWidth: 1320, margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)" }}>
          <h1 style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(52px, 9vw, 132px)", lineHeight: 0.98, letterSpacing: "-0.02em", color: palette.bone, margin: 0, maxWidth: "14ch" }}>
            Care, at the pace of a life.
          </h1>
          <div style={{ marginTop: 40, display: "flex", alignItems: "baseline", gap: 28, flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{ fontFamily: sans, fontSize: 12, letterSpacing: "0.28em", textTransform: "uppercase", color: palette.bone, textDecoration: "none", border: `1px solid rgba(246,241,233,0.6)`, padding: "16px 34px" }}
            >
              Book an Appointment
            </a>
            <span style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(246,241,233,0.75)" }}>
              Direct Primary Care · GLP-1
            </span>
          </div>
        </div>

        {/* Editorial photo caption, small caps */}
        <p style={{ position: "absolute", right: "clamp(24px, 5vw, 64px)", bottom: "8vh", margin: 0, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(246,241,233,0.7)", writingMode: "vertical-rl", transform: "rotate(180deg)" }} className="r-hide">
          Fig. 01 — Morning light, the practice
        </p>
      </section>

      {/* About — one warm column, very few words */}
      <section style={{ padding: "clamp(110px, 16vh, 200px) clamp(24px, 5vw, 64px)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: palette.olive, margin: "0 0 48px" }}>The Practice</p>
          <p style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(26px, 3.4vw, 40px)", lineHeight: 1.35, letterSpacing: "-0.01em", margin: 0 }}>
            Providence Care Plus is a direct primary care practice led by a dedicated nurse practitioner. We strip away the complexity of modern healthcare to focus on what matters: the relationship between provider and patient. Here, you aren't a chart number. You are a partner in wellness.
          </p>
        </div>
      </section>

      {/* Services — two-column text, no cards */}
      <section style={{ padding: "0 clamp(24px, 5vw, 64px) clamp(110px, 16vh, 200px)" }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 96, borderTop: `1px solid rgba(26,23,20,0.14)`, paddingTop: 72 }}>
          <div>
            <p style={{ fontFamily: serif, fontSize: 12, color: palette.olive, margin: "0 0 20px", letterSpacing: "0.04em" }}>I.</p>
            <h3 style={{ fontFamily: serif, fontSize: "clamp(30px, 3.4vw, 44px)", fontWeight: 400, margin: "0 0 24px", letterSpacing: "-0.01em" }}>Primary Care</h3>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(26,23,20,0.68)", margin: 0, maxWidth: "42ch" }}>
              Unrushed visits and direct access to your provider, with a focus on prevention. A direct-care model that keeps healthcare personal and comprehensive at every stage of life.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: serif, fontSize: 12, color: palette.olive, margin: "0 0 20px", letterSpacing: "0.04em" }}>II.</p>
            <h3 style={{ fontFamily: serif, fontSize: "clamp(30px, 3.4vw, 44px)", fontWeight: 400, margin: "0 0 24px", letterSpacing: "-0.01em" }}>GLP-1 Virtual Care</h3>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(26,23,20,0.68)", margin: 0, maxWidth: "42ch" }}>
              Modern, medically supervised weight management by virtual appointment. Personalized GLP-1 plans with continuous monitoring — guided from the privacy of home.
            </p>
          </div>
        </div>
      </section>

      {/* How it works — numbered editorial flow */}
      <section style={{ padding: "clamp(110px, 16vh, 180px) clamp(24px, 5vw, 64px)", background: palette.boneDeep }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: palette.olive, margin: "0 0 72px" }}>The Path to Care</p>
          {[
            { n: "01", t: "Initial Consultation", d: "A comprehensive virtual or in-person meeting to discuss your history, goals, and needs." },
            { n: "02", t: "Personalized Plan", d: "A tailored care roadmap — whether routine primary care or a specialized GLP-1 protocol." },
            { n: "03", t: "Ongoing Connection", d: "Direct messaging and follow-up visits, so you are supported at every step." },
          ].map((s, i, arr) => (
            <div key={s.n} className="r-stack" style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 32, padding: "48px 0", borderBottom: i === arr.length - 1 ? "none" : `1px solid rgba(26,23,20,0.12)` }}>
              <span style={{ fontFamily: serif, fontWeight: 300, fontSize: "clamp(40px, 5vw, 64px)", color: palette.olive, lineHeight: 1 }}>{s.n}</span>
              <div style={{ maxWidth: 620 }}>
                <h4 style={{ fontFamily: serif, fontSize: 24, fontWeight: 400, margin: "0 0 14px" }}>{s.t}</h4>
                <p style={{ color: "rgba(26,23,20,0.6)", margin: 0, lineHeight: 1.7, fontSize: 16 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Provider presence */}
      <section style={{ padding: "clamp(110px, 16vh, 200px) clamp(24px, 5vw, 64px)" }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "0.8fr 1fr", gap: 80, alignItems: "center" }}>
          <div className="r-hero-img" style={{ position: "relative", height: "62vh", minHeight: 380, overflow: "hidden" }}>
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `${grade}, url(${providerImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "saturate(0.82) contrast(1.02)",
              }}
            />
            <span style={{ position: "absolute", left: 18, bottom: 16, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(246,241,233,0.8)" }}>
              The Provider
            </span>
          </div>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: palette.olive, margin: "0 0 28px" }}>Your Provider</p>
            <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(34px, 4.4vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.01em", margin: "0 0 24px" }}>
              Jean Joseph, <span style={{ fontStyle: "italic", fontWeight: 300 }}>fnp-c</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(26,23,20,0.7)", margin: "0 0 28px", maxWidth: "46ch" }}>
              With more than twenty years in the medical field, Jean Joseph brings a depth of clinical judgment that comes only with experience. Originally from Haiti, he founded Providence Care Plus to offer the kind of attentive, unhurried care that puts the patient relationship first.
            </p>
            <p style={{ fontSize: 13, letterSpacing: "0.04em", color: palette.olive, fontStyle: "italic", fontFamily: serif, margin: 0 }}>
              English &amp; Kreyòl Ayisyen — Byenveni.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <Contact />

      <footer style={{ padding: "48px clamp(24px, 5vw, 64px)", borderTop: `1px solid rgba(26,23,20,0.1)`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <span style={{ fontFamily: serif, fontSize: 16 }}>Providence Care Plus</span>
        <p style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(26,23,20,0.4)", margin: 0 }}>
          © 2026 — All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "16px 0",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid rgba(26,23,20,0.22)`,
    fontSize: 16,
    fontFamily: sans,
    color: palette.ink,
    outline: "none",
  };
  return (
    <section id="contact" style={{ padding: "clamp(110px, 16vh, 180px) clamp(24px, 5vw, 64px)", background: palette.boneDeep }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <h2 style={{ fontFamily: serif, fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 300, letterSpacing: "-0.02em", margin: "0 0 16px" }}>
          Start a conversation.
        </h2>
        <p style={{ fontSize: 16, color: "rgba(26,23,20,0.6)", margin: "0 0 56px", maxWidth: "44ch", lineHeight: 1.7 }}>
          Tell us a little about what you're looking for. We read every note ourselves.
        </p>
        {sent ? (
          <p style={{ color: palette.olive, fontSize: 18, fontFamily: serif, fontStyle: "italic" }}>Thank you — we'll be in touch shortly.</p>
        ) : (
          <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 44 }}>
            <input required type="text" placeholder="Full Name" style={inputStyle} />
            <div className="r-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44 }}>
              <input required type="email" placeholder="Email Address" style={inputStyle} />
              <input type="tel" placeholder="Phone Number" style={inputStyle} />
            </div>
            <textarea required rows={4} placeholder="Your Message" style={{ ...inputStyle, resize: "none" }} />
            <div style={{ paddingTop: 16 }}>
              <button type="submit" style={{ background: "transparent", border: `1px solid ${palette.ink}`, color: palette.ink, padding: "18px 48px", fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", cursor: "pointer", fontFamily: sans }}>
                Send Inquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
