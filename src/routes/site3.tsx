import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroImg from "../assets/hero-site3.jpg";
import { useParallax } from "../lib/useParallax";

export const Route = createFileRoute("/site3")({
  head: () => ({
    meta: [
      { title: "Providence Care Plus — Unrushed Care" },
      { name: "description", content: "Unrushed direct primary care and GLP-1 metabolic support for the modern patient." },
      { property: "og:title", content: "Providence Care Plus" },
      { property: "og:description", content: "Unrushed direct primary care and GLP-1 metabolic support." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400&display=swap" },
    ],
  }),
  component: Site3,
});

const palette = {
  bg: "#F8F7F4",
  white: "#FFFFFF",
  ink: "#1A1F26",
  navy: "#2C3E50",
  muted: "#64748B",
  border: "rgba(26,31,38,0.12)",
};

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Inter', ui-sans-serif, system-ui, sans-serif";
const mono = "'JetBrains Mono', ui-monospace, Menlo, monospace";

function Site3() {
  const offset = useParallax(0.35);
  return (
    <div style={{ background: palette.bg, color: palette.ink, fontFamily: sans }}>
      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, padding: "24px 32px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", background: "rgba(248,247,244,0.85)", backdropFilter: "blur(8px)" }}>
        <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase" }}>Providence Care Plus</span>
        <div style={{ display: "flex", gap: 48, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>
          <a href="#practice" style={{ color: "inherit", textDecoration: "none" }}>Practice</a>
          <a href="#services" style={{ color: "inherit", textDecoration: "none" }}>Services</a>
          <a href="#method" style={{ color: "inherit", textDecoration: "none" }}>Method</a>
          <a href="#contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* Hero asymmetric */}
      <section style={{ paddingTop: 80, paddingBottom: 160, padding: "80px 80px 160px", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 32, alignItems: "start" }}>
          <div style={{ gridColumn: "span 5", paddingTop: 48 }}>
            <p style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: palette.muted, margin: "0 0 32px" }}>Direct Primary Care</p>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(48px, 7vw, 112px)", lineHeight: 0.95, fontWeight: 500, margin: "0 0 48px" }}>
              Unrushed care <br /> for the <br />
              <em style={{ fontWeight: 500 }}>modern patient.</em>
            </h1>
            <a href="#contact" style={{ display: "inline-block", textDecoration: "none", color: palette.ink, position: "relative", paddingBottom: 4, borderBottom: `1px solid ${palette.ink}`, fontSize: 14, fontWeight: 500, letterSpacing: "-0.01em" }}>
              Book an Appointment
            </a>
          </div>

          <div style={{ gridColumn: "7 / -1", position: "relative" }}>
            <div style={{ position: "absolute", inset: "-16px -16px -16px 16px", border: `1px solid ${palette.border}`, transform: "translate(32px, 32px)", zIndex: 0 }} />
            <div style={{ position: "relative", aspectRatio: "4 / 5", overflow: "hidden", boxShadow: "0 30px 60px -30px rgba(26,31,38,0.3)", zIndex: 1 }}>
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: "-12% 0",
                  backgroundImage: `url(${heroImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: `translate3d(0, ${offset}px, 0)`,
                  willChange: "transform",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="practice" style={{ padding: "140px 80px", background: palette.navy, color: palette.bg }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", opacity: 0.6, margin: "0 0 48px" }}>The Philosophy</p>
          <p style={{ fontFamily: serif, fontSize: "clamp(26px, 3.2vw, 40px)", lineHeight: 1.45, fontWeight: 500, margin: 0 }}>
            Health is not merely the absence of disease, but the presence of vitality. We provide a sanctuary for medicine where the stopwatch is removed from the exam room.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: "180px 80px", maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 160 }}>
          <div>
            <p style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: palette.muted, margin: "0 0 32px" }}>01 / 02</p>
            <h3 style={{ fontFamily: serif, fontSize: 44, fontWeight: 500, margin: "0 0 32px" }}>Direct Primary Care</h3>
            <p style={{ color: palette.muted, lineHeight: 1.75, fontSize: 16, maxWidth: 420, margin: 0 }}>
              Comprehensive healthcare managed directly between you and your provider. No insurance hurdles — just unlimited access, extended visits, and a personalized health roadmap designed for your life.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: palette.muted, margin: "0 0 32px" }}>02 / 02</p>
            <h3 style={{ fontFamily: serif, fontSize: 44, fontWeight: 500, margin: "0 0 32px" }}>GLP-1 Weight Wellness</h3>
            <p style={{ color: palette.muted, lineHeight: 1.75, fontSize: 16, maxWidth: 420, margin: 0 }}>
              Evidence-based metabolic support through virtual appointments. We combine advanced pharmacology with continuous clinical oversight to help you achieve sustainable health transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Method */}
      <section id="method" style={{ padding: "140px 80px", borderTop: `1px solid ${palette.border}`, background: palette.white }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 500, margin: "0 0 96px" }}>The Method</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 64 }}>
            {[
              { n: "01", t: "Discovery", d: "Begin with a comprehensive virtual consultation to map your clinical history and personal wellness goals." },
              { n: "02", t: "Architecture", d: "Receive a tailored protocol including diagnostic labs and prescription management where clinically indicated." },
              { n: "03", t: "Continuity", d: "Enjoy direct text access to your provider and monthly check-ins to calibrate your journey as you progress." },
            ].map((s) => (
              <div key={s.n} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <span style={{ fontFamily: serif, fontStyle: "italic", fontSize: 64, color: "rgba(44,62,80,0.15)", lineHeight: 1 }}>{s.n}</span>
                <h4 style={{ fontSize: 15, fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", margin: 0 }}>{s.t}</h4>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: palette.muted, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSite3 />

      <footer style={{ padding: "40px 80px", borderTop: `1px solid ${palette.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", opacity: 0.4 }}>© 2026 Providence Care Plus. All Rights Reserved.</div>
        <div style={{ display: "flex", gap: 32, fontFamily: mono, fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", opacity: 0.4 }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Privacy</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Terms</a>
        </div>
      </footer>
    </div>
  );
}

function ContactSite3() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  const label: React.CSSProperties = { fontFamily: mono, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: palette.muted, marginBottom: 8, display: "block" };
  const field: React.CSSProperties = { borderBottom: `1px solid ${palette.border}`, paddingBottom: 12 };
  const input: React.CSSProperties = { width: "100%", background: "transparent", border: "none", outline: "none", fontSize: 17, fontFamily: sans, color: palette.ink };

  return (
    <section id="contact" style={{ padding: "180px 80px", maxWidth: 1440, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "start" }}>
        <div>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 500, margin: "0 0 24px" }}>Begin your care.</h2>
          <p style={{ color: palette.muted, marginBottom: 48, maxWidth: 360, lineHeight: 1.65 }}>
            Inquiries are typically answered within four business hours by the clinical team.
          </p>
          <div style={{ fontFamily: mono, fontSize: 11, lineHeight: 1.9 }}>
            <p style={{ margin: 0 }}>T: 555.012.3456</p>
            <p style={{ margin: 0 }}>E: hello@providencecare.plus</p>
          </div>
        </div>

        {sent ? (
          <p style={{ color: palette.navy, fontSize: 18 }}>Thank you — we'll be in touch shortly.</p>
        ) : (
          <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
              <div style={field}><label style={label}>Full Name</label><input required type="text" placeholder="J. Smith" style={input} /></div>
              <div style={field}><label style={label}>Email Address</label><input required type="email" placeholder="email@domain.com" style={input} /></div>
            </div>
            <div style={field}><label style={label}>Phone Number</label><input type="tel" placeholder="555.000.0000" style={input} /></div>
            <div style={field}><label style={label}>Clinical Interest</label><input type="text" placeholder="Primary Care / Metabolic Support" style={input} /></div>
            <div style={field}><label style={label}>Message</label><textarea required rows={3} placeholder="Describe your needs" style={{ ...input, resize: "none" }} /></div>
            <button type="submit" style={{ display: "inline-flex", alignItems: "center", gap: 16, background: "transparent", border: "none", padding: 0, cursor: "pointer", fontFamily: sans, color: palette.ink }}>
              <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}>Send Inquiry</span>
              <span style={{ width: 48, height: 1, background: palette.ink }} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
