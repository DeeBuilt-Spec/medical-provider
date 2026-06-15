import { useState, type FormEvent } from "react";
import heroImg from "../assets/hero-site3.jpg";
import providerImg from "../assets/stethoscope.jpg";
import { useParallax } from "../lib/useParallax";
import { useDocumentTitle } from "../lib/useDocumentTitle";

// Ink + clay — warm paper, warm ink, a single muted terracotta accent.
const palette = {
  bg: "#F7F4EE",
  white: "#FCFAF6",
  ink: "#20201D",
  clay: "#9C5B3B",
  muted: "#7A7064",
  border: "rgba(32,32,29,0.14)",
};

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Inter', ui-sans-serif, system-ui, sans-serif";
const mono = "'JetBrains Mono', ui-monospace, Menlo, monospace";

// Single warm grade so the photography reads art-directed and tonal with the
// clay palette rather than cool/stock.
const grade =
  "linear-gradient(180deg, rgba(32,32,29,0.16) 0%, rgba(156,91,59,0.10) 60%, rgba(32,32,29,0.22) 100%)";
const photoFilter = "saturate(0.9) contrast(1.03) sepia(0.08)";

export default function Site3() {
  useDocumentTitle("Providence Care Plus — Unrushed Care");
  const offset = useParallax(0.35);
  return (
    <div style={{ background: palette.bg, color: palette.ink, fontFamily: sans }}>
      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, padding: "24px 32px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", background: "rgba(247,244,238,0.85)", backdropFilter: "blur(8px)" }}>
        <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase" }}>Providence Care Plus</span>
        <div className="r-hide" style={{ display: "flex", gap: 48, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>
          <a href="#practice" style={{ color: "inherit", textDecoration: "none" }}>Practice</a>
          <a href="#services" style={{ color: "inherit", textDecoration: "none" }}>Services</a>
          <a href="#method" style={{ color: "inherit", textDecoration: "none" }}>Method</a>
          <a href="#contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* Hero asymmetric — off-grid 12-col signature */}
      <section style={{ padding: "80px clamp(24px, 5.5vw, 80px) 160px", maxWidth: 1440, margin: "0 auto" }}>
        <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 32, alignItems: "start" }}>
          <div style={{ gridColumn: "span 5", paddingTop: 48 }}>
            <p style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: palette.clay, margin: "0 0 32px" }}>Direct Primary Care</p>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(48px, 7vw, 112px)", lineHeight: 0.95, fontWeight: 500, margin: "0 0 48px" }}>
              Unrushed care <br /> for the <br />
              <em style={{ fontWeight: 500 }}>modern patient.</em>
            </h1>
            <a href="#contact" style={{ display: "inline-block", textDecoration: "none", color: palette.ink, position: "relative", paddingBottom: 4, borderBottom: `1px solid ${palette.clay}`, fontSize: 14, fontWeight: 500, letterSpacing: "-0.01em" }}>
              Book an Appointment
            </a>
          </div>

          <div style={{ gridColumn: "7 / -1", position: "relative" }}>
            {/* Decorative offset frame — contained to its own column, never overflows */}
            <div aria-hidden className="r-hide" style={{ position: "absolute", inset: 0, transform: "translate(28px, 28px)", border: `1px solid ${palette.clay}`, opacity: 0.5, zIndex: 0 }} />
            <div style={{ position: "relative", aspectRatio: "4 / 5", overflow: "hidden", zIndex: 1 }}>
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: "-12% 0",
                  backgroundImage: `${grade}, url(${heroImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: `translate3d(0, ${offset}px, 0)`,
                  willChange: "transform",
                  filter: photoFilter,
                }}
              />
              <span style={{ position: "absolute", left: 16, bottom: 14, fontFamily: mono, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(247,244,238,0.85)" }}>Fig. 01</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / pull-quote */}
      <section id="practice" style={{ padding: "140px clamp(24px, 5.5vw, 80px)", background: palette.ink, color: palette.bg }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <p style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(247,244,238,0.5)", margin: "0 0 48px" }}>The Philosophy</p>
          <p style={{ fontFamily: serif, fontSize: "clamp(28px, 3.4vw, 46px)", lineHeight: 1.4, fontWeight: 500, margin: 0 }}>
            Health is not merely the absence of disease, but the presence of vitality. Providence Care Plus is a sanctuary for medicine, where the stopwatch is removed from the exam room.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="r-pad-y" style={{ padding: "180px clamp(24px, 5.5vw, 80px)", maxWidth: 1440, margin: "0 auto" }}>
        <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(64px, 10vw, 160px)" }}>
          <div>
            <p style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: palette.clay, margin: "0 0 32px" }}>01 / 02</p>
            <h3 style={{ fontFamily: serif, fontSize: "clamp(34px, 3.6vw, 44px)", fontWeight: 500, margin: "0 0 32px" }}>Direct Primary Care</h3>
            <p style={{ color: palette.muted, lineHeight: 1.75, fontSize: 16, maxWidth: 440, margin: 0 }}>
              Comprehensive healthcare managed directly between you and your provider. No insurance hurdles, just unlimited access, extended visits, and a personalized health roadmap designed for your life.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: palette.clay, margin: "0 0 32px" }}>02 / 02</p>
            <h3 style={{ fontFamily: serif, fontSize: "clamp(34px, 3.6vw, 44px)", fontWeight: 500, margin: "0 0 32px" }}>GLP-1 Weight Wellness</h3>
            <p style={{ color: palette.muted, lineHeight: 1.75, fontSize: 16, maxWidth: 440, margin: 0 }}>
              Evidence-based metabolic support through virtual appointments, combining advanced pharmacology with continuous clinical oversight to help you achieve sustainable health transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Provider — inside the asymmetric grid */}
      <section style={{ padding: "40px clamp(24px, 5.5vw, 80px) 160px", maxWidth: 1440, margin: "0 auto" }}>
        <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 32, alignItems: "center" }}>
          <div style={{ gridColumn: "span 5", position: "relative" }}>
            <div aria-hidden className="r-hide" style={{ position: "absolute", inset: 0, transform: "translate(-24px, 24px)", border: `1px solid ${palette.clay}`, opacity: 0.5, zIndex: 0 }} />
            <div style={{ position: "relative", aspectRatio: "4 / 5", overflow: "hidden", zIndex: 1 }}>
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `${grade}, url(${providerImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: photoFilter,
                }}
              />
              <span style={{ position: "absolute", left: 16, bottom: 14, fontFamily: mono, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(247,244,238,0.85)" }}>Fig. 02</span>
            </div>
          </div>
          <div style={{ gridColumn: "7 / -1" }}>
            <p style={{ fontFamily: mono, fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: palette.clay, margin: "0 0 28px" }}>Your Provider</p>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(36px, 4.4vw, 60px)", fontWeight: 500, lineHeight: 1.02, margin: "0 0 28px" }}>
              Jean Joseph, <em style={{ fontWeight: 500 }}>fnp-c</em>
            </h2>
            <p style={{ fontSize: 17, color: palette.muted, lineHeight: 1.8, margin: "0 0 28px", maxWidth: "46ch" }}>
              With more than twenty years in the medical field, Jean Joseph brings a depth of clinical judgment that comes only with experience. Originally from Haiti, he founded Providence Care Plus to offer attentive, unhurried care that places the patient relationship first.
            </p>
            <p style={{ fontFamily: mono, fontSize: 11, letterSpacing: "0.15em", color: palette.ink }}>
              English &amp; Kreyòl Ayisyen — Byenveni
            </p>
          </div>
        </div>
      </section>

      {/* Method */}
      <section id="method" style={{ padding: "140px clamp(24px, 5.5vw, 80px)", borderTop: `1px solid ${palette.border}`, background: palette.white }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 500, margin: "0 0 96px" }}>The Method</h2>
          <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 64 }}>
            {[
              { n: "01", t: "Discovery", d: "A comprehensive virtual consultation to map your clinical history and personal wellness goals." },
              { n: "02", t: "Architecture", d: "A tailored protocol, including diagnostic labs and prescription management where clinically indicated." },
              { n: "03", t: "Continuity", d: "Direct text access to your provider and monthly check-ins to calibrate your care as you progress." },
            ].map((s) => (
              <div key={s.n} style={{ display: "flex", flexDirection: "column", gap: 24, borderTop: `1px solid ${palette.border}`, paddingTop: 32 }}>
                <span style={{ fontFamily: serif, fontStyle: "italic", fontSize: 64, color: palette.clay, opacity: 0.4, lineHeight: 1 }}>{s.n}</span>
                <h4 style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", margin: 0 }}>{s.t}</h4>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: palette.muted, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSite3 />

      <footer style={{ padding: "40px clamp(24px, 5.5vw, 80px)", borderTop: `1px solid ${palette.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", opacity: 0.5 }}>© 2026 Providence Care Plus. All Rights Reserved.</div>
        <div style={{ display: "flex", gap: 32, fontFamily: mono, fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", opacity: 0.5 }}>
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
    <section id="contact" className="r-pad-y" style={{ padding: "180px clamp(24px, 5.5vw, 80px)", maxWidth: 1440, margin: "0 auto" }}>
      <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "start" }}>
        <div>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 500, margin: "0 0 24px" }}>Begin your care.</h2>
          <p style={{ color: palette.muted, marginBottom: 48, maxWidth: 360, lineHeight: 1.65 }}>
            Inquiries are typically answered within four business hours by the clinical team.
          </p>
          <div style={{ fontFamily: mono, fontSize: 11, lineHeight: 1.9, color: palette.ink }}>
            <p style={{ margin: 0 }}>T: 555.012.3456</p>
            <p style={{ margin: 0 }}>E: hello@providencecare.plus</p>
          </div>
        </div>

        {sent ? (
          <p style={{ color: palette.clay, fontSize: 18, fontFamily: serif, fontStyle: "italic" }}>Thank you — we'll be in touch shortly.</p>
        ) : (
          <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            <div className="r-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
              <div style={field}><label style={label}>Full Name</label><input required type="text" placeholder="J. Smith" style={input} /></div>
              <div style={field}><label style={label}>Email Address</label><input required type="email" placeholder="email@domain.com" style={input} /></div>
            </div>
            <div style={field}><label style={label}>Phone Number</label><input type="tel" placeholder="555.000.0000" style={input} /></div>
            <div style={field}><label style={label}>Clinical Interest</label><input type="text" placeholder="Primary Care / Metabolic Support" style={input} /></div>
            <div style={field}><label style={label}>Message</label><textarea required rows={3} placeholder="Describe your needs" style={{ ...input, resize: "none" }} /></div>
            <button type="submit" style={{ display: "inline-flex", alignItems: "center", gap: 16, background: "transparent", border: "none", padding: 0, cursor: "pointer", fontFamily: sans, color: palette.ink }}>
              <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" }}>Send Inquiry</span>
              <span style={{ width: 48, height: 1, background: palette.clay }} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
