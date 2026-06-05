import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroImg from "../assets/hero-site2.jpg";
import { useParallax } from "../lib/useParallax";

export const Route = createFileRoute("/site2")({
  head: () => ({
    meta: [
      { title: "Providence Care Plus — Primary Care Reimagined" },
      { name: "description", content: "Personalized, virtual-first primary care and GLP-1 weight wellness for the modern patient." },
      { property: "og:title", content: "Providence Care Plus" },
      { property: "og:description", content: "Personalized, virtual-first primary care and GLP-1 weight wellness." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@400;500&display=swap" },
    ],
  }),
  component: Site2,
});

const palette = {
  bg: "#F9F8F6",
  panel: "#EFEEE9",
  sage: "#4A5D4E",
  ink: "#1F2421",
  muted: "#6B6B66",
};

const serif = "'Cormorant Garamond', Georgia, serif";
const sans = "'Inter', ui-sans-serif, system-ui, sans-serif";

function Site2() {
  const offset = useParallax(0.25);
  return (
    <div style={{ background: palette.bg, color: palette.ink, fontFamily: sans }}>
      {/* Nav */}
      <nav style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 50, padding: "28px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: serif, fontSize: 22, fontWeight: 500 }}>Providence Care Plus</span>
        <div style={{ display: "flex", gap: 40, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: palette.muted }}>
          <a href="#practice" style={{ color: "inherit", textDecoration: "none" }}>Practice</a>
          <a href="#services" style={{ color: "inherit", textDecoration: "none" }}>Services</a>
          <a href="#process" style={{ color: "inherit", textDecoration: "none" }}>Process</a>
          <a href="#contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* Hero split */}
      <section style={{ minHeight: "100vh", paddingTop: 120, paddingBottom: 60, display: "flex", alignItems: "center" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%", padding: "0 40px", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(48px, 7vw, 104px)", lineHeight: 0.98, fontWeight: 400, margin: "0 0 32px", letterSpacing: "-0.01em" }}>
              Primary care <br />
              <span style={{ fontStyle: "italic", fontWeight: 400 }}>reimagined</span> for the <br />
              modern patient.
            </h1>
            <p style={{ fontSize: 19, color: palette.muted, lineHeight: 1.65, maxWidth: "40ch", margin: "0 0 48px" }}>
              A personalized, virtual-first medical practice specializing in longitudinal primary care and GLP-1 weight wellness.
            </p>
            <a href="#contact" style={{ display: "inline-block", padding: "18px 36px", background: palette.sage, color: "#fff", fontSize: 13, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>
              Book an Appointment
            </a>
          </div>
          <div style={{ position: "relative", height: "78vh", overflow: "hidden" }}>
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: "-10% 0",
                backgroundImage: `url(${heroImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: `translate3d(0, ${offset}px, 0)`,
                willChange: "transform",
              }}
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="practice" style={{ padding: "180px 40px", background: palette.panel }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: "56ch" }}>
            <p style={{ fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", color: palette.sage, margin: "0 0 32px" }}>The Practice</p>
            <p style={{ fontFamily: serif, fontSize: "clamp(32px, 3.5vw, 44px)", lineHeight: 1.2, fontWeight: 400, margin: "0 0 40px" }}>
              Founded on the principle that healthcare should be as intuitive as it is precise.
            </p>
            <p style={{ fontSize: 18, color: palette.muted, lineHeight: 1.7, margin: 0 }}>
              Providence Care Plus is a solo clinical practice led by a dedicated nurse practitioner. We bridge the gap between traditional medicine and modern convenience, offering a boutique experience that prioritizes time, clarity, and patient autonomy. Whether navigating chronic conditions or pursuing metabolic health, our approach is always considered and human.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: "180px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, borderTop: "1px solid rgba(31,36,33,0.15)", paddingTop: 64 }}>
          <h2 style={{ fontFamily: serif, fontSize: 48, fontWeight: 400, margin: 0 }}>Our Care</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
            <div>
              <h3 style={{ fontFamily: serif, fontSize: 28, fontWeight: 500, margin: "0 0 20px" }}>Primary Care</h3>
              <p style={{ color: palette.muted, lineHeight: 1.7, fontSize: 16, margin: 0 }}>
                Comprehensive virtual health management covering acute needs, preventative screenings, and chronic disease management. A steady hand for your long-term wellbeing.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: serif, fontSize: 28, fontWeight: 500, margin: "0 0 20px" }}>GLP-1 Weight Wellness</h3>
              <p style={{ color: palette.muted, lineHeight: 1.7, fontSize: 16, margin: 0 }}>
                Evidence-based metabolic health support. We provide medical oversight for GLP-1 therapies combined with personalized nutrition and lifestyle guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" style={{ padding: "160px 40px", background: "#171917", color: "#D6D4CF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <p style={{ fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(214,212,207,0.5)", margin: "0 0 80px" }}>The Process</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 80 }}>
            {[
              { n: "01", t: "Virtual Intake", d: "Begin with a detailed health assessment and medical history review through our secure digital portal." },
              { n: "02", t: "Consultation", d: "A 45-minute virtual visit to discuss your health goals and establish a tailored medical treatment plan." },
              { n: "03", t: "Ongoing Support", d: "Continuous access to your provider, periodic check-ins, and seamless prescription management." },
            ].map((s) => (
              <div key={s.n}>
                <div style={{ fontFamily: serif, fontSize: 80, color: "rgba(74,93,78,0.55)", lineHeight: 1, marginBottom: 32 }}>{s.n}</div>
                <h4 style={{ color: "#fff", fontWeight: 500, fontSize: 17, margin: "0 0 16px" }}>{s.t}</h4>
                <p style={{ fontSize: 14, lineHeight: 1.65, maxWidth: "35ch", margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSite2 />

      <footer style={{ padding: "40px", borderTop: "1px solid rgba(31,36,33,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <p style={{ fontSize: 12, color: palette.muted, margin: 0 }}>© 2026 Providence Care Plus. All rights reserved.</p>
        <div style={{ display: "flex", gap: 32, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: palette.muted }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}

function ContactSite2() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  const fieldLabel: React.CSSProperties = { fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: palette.muted, fontWeight: 500 };
  const input: React.CSSProperties = { background: "transparent", borderTop: "none", borderLeft: "none", borderRight: "none", borderBottom: "1px solid rgba(31,36,33,0.25)", padding: "12px 0", fontSize: 15, outline: "none", fontFamily: sans, color: palette.ink };
  return (
    <section id="contact" style={{ padding: "180px 40px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <h2 style={{ fontFamily: serif, fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 400, margin: "0 0 56px" }}>Get in touch</h2>
        {sent ? (
          <p style={{ color: palette.sage, fontSize: 18 }}>Thank you — we'll be in touch shortly.</p>
        ) : (
          <form onSubmit={onSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36 }}>
            <label style={{ display: "flex", flexDirection: "column", gap: 8 }}><span style={fieldLabel}>Full Name</span><input required type="text" style={input} /></label>
            <label style={{ display: "flex", flexDirection: "column", gap: 8 }}><span style={fieldLabel}>Email Address</span><input required type="email" style={input} /></label>
            <label style={{ display: "flex", flexDirection: "column", gap: 8 }}><span style={fieldLabel}>Phone Number</span><input type="tel" style={input} /></label>
            <label style={{ display: "flex", flexDirection: "column", gap: 8 }}><span style={fieldLabel}>Subject</span>
              <select style={input}>
                <option>Primary Care</option>
                <option>GLP-1 Appointments</option>
                <option>General Inquiry</option>
              </select>
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: "1 / -1", marginTop: 16 }}>
              <span style={fieldLabel}>Message</span>
              <textarea required rows={4} style={{ ...input, resize: "none" }} />
            </label>
            <div style={{ gridColumn: "1 / -1", paddingTop: 32 }}>
              <button type="submit" style={{ padding: "16px 48px", background: palette.sage, color: "#fff", fontSize: 13, fontFamily: sans, border: "none", cursor: "pointer", letterSpacing: "0.1em" }}>
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
