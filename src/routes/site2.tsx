import { useState, type FormEvent } from "react";
import heroImg from "../assets/hero-site2.jpg";
import providerImg from "../assets/stethoscope.jpg";
import { useParallax } from "../lib/useParallax";
import { useDocumentTitle } from "../lib/useDocumentTitle";

// Stark gallery editorial — paper + near-black only, NO color accent.
const palette = {
  paper: "#F4F2EE",
  ink: "#141414",
  muted: "#6E6B66",
  hair: "rgba(20,20,20,0.16)",
};

const serif = "'Bodoni Moda', 'Didot', Georgia, serif";
const sans = "'Jost', ui-sans-serif, system-ui, sans-serif";

// Single consistent grade — a refined editorial black-and-white treatment so
// the photography reads art-directed in the gallery, not stock.
const grade =
  "linear-gradient(180deg, rgba(20,20,20,0.12) 0%, rgba(20,20,20,0.04) 50%, rgba(20,20,20,0.18) 100%)";
const photoFilter = "grayscale(1) contrast(1.06) brightness(1.02)";

export default function Site2() {
  useDocumentTitle("Providence Care Plus — Primary Care Reimagined");
  const offset = useParallax(0.22);
  return (
    <div style={{ background: palette.paper, color: palette.ink, fontFamily: sans }}>
      {/* Nav */}
      <nav style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 50, padding: "32px clamp(24px, 5vw, 56px)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: serif, fontSize: 21, fontWeight: 500, letterSpacing: "0.02em" }}>Providence Care Plus</span>
        <div className="r-hide" style={{ display: "flex", gap: 44, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: palette.muted }}>
          <a href="#practice" style={{ color: "inherit", textDecoration: "none" }}>Practice</a>
          <a href="#services" style={{ color: "inherit", textDecoration: "none" }}>Services</a>
          <a href="#process" style={{ color: "inherit", textDecoration: "none" }}>Process</a>
          <a href="#contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* Hero — asymmetric split, tall portrait, huge italic display */}
      <section style={{ minHeight: "100vh", paddingTop: 120, paddingBottom: 72, display: "flex", alignItems: "center" }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1320, margin: "0 auto", width: "100%", padding: "0 clamp(24px, 5vw, 56px)", display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: 72, alignItems: "stretch" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: palette.muted, margin: "0 0 40px" }}>
              Concierge Medicine — Est. 2026
            </p>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(52px, 8vw, 124px)", lineHeight: 0.92, fontWeight: 400, margin: 0, letterSpacing: "-0.01em" }}>
              Primary care,<br />
              <span style={{ fontStyle: "italic", fontWeight: 400 }}>reimagined.</span>
            </h1>
            <p style={{ fontSize: 17, color: palette.muted, lineHeight: 1.7, maxWidth: "38ch", margin: "44px 0 52px", fontWeight: 300 }}>
              A personalized, virtual-first practice for longitudinal primary care and GLP-1 weight wellness.
            </p>
            <a href="#contact" style={{ alignSelf: "flex-start", fontFamily: sans, fontSize: 12, letterSpacing: "0.28em", textTransform: "uppercase", color: palette.ink, textDecoration: "none", borderBottom: `1px solid ${palette.ink}`, paddingBottom: 6 }}>
              Book an Appointment
            </a>
          </div>
          <figure className="r-hero-img" style={{ position: "relative", height: "82vh", overflow: "hidden", margin: 0 }}>
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
            <figcaption style={{ position: "absolute", left: 0, bottom: -1, right: 0, padding: "14px 0", fontSize: 9, letterSpacing: "0.34em", textTransform: "uppercase", color: palette.muted, borderTop: `1px solid ${palette.hair}`, background: palette.paper }}>
              Plate I — The Practice, in natural light
            </figcaption>
          </figure>
        </div>
      </section>

      {/* About — drop-cap paragraph */}
      <section id="practice" style={{ padding: "clamp(120px, 18vh, 220px) clamp(24px, 5vw, 56px)", borderTop: `1px solid ${palette.hair}` }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "0.5fr 1fr", gap: 72 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.34em", textTransform: "uppercase", color: palette.muted, margin: 0 }}>The Practice</p>
          <div style={{ maxWidth: "60ch" }}>
            <p style={{ fontFamily: serif, fontSize: "clamp(28px, 3.4vw, 46px)", lineHeight: 1.18, fontWeight: 400, margin: "0 0 48px", letterSpacing: "-0.01em" }}>
              Founded on the principle that healthcare should be as intuitive as it is precise.
            </p>
            <p className="dropcap" style={{ fontSize: 18, color: palette.ink, lineHeight: 1.8, margin: 0, fontWeight: 300 }}>
              Providence Care Plus is a solo clinical practice led by a dedicated nurse practitioner. The practice bridges traditional medicine and modern convenience, offering a boutique experience built around time, clarity, and patient autonomy. From chronic conditions to metabolic health, the approach remains considered and deeply human.
            </p>
          </div>
        </div>
      </section>

      {/* Services — two-column text, hairline ruled */}
      <section id="services" className="r-pad-y" style={{ padding: "clamp(120px, 18vh, 200px) clamp(24px, 5vw, 56px)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "0.5fr 1fr", gap: 72, borderTop: `1px solid ${palette.hair}`, paddingTop: 64 }}>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(34px, 4vw, 56px)", fontWeight: 400, margin: 0, letterSpacing: "-0.01em" }}>Our Care</h2>
            <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72 }}>
              <div>
                <p style={{ fontFamily: serif, fontSize: 13, fontStyle: "italic", color: palette.muted, margin: "0 0 18px" }}>i.</p>
                <h3 style={{ fontFamily: serif, fontSize: "clamp(26px, 2.6vw, 34px)", fontWeight: 400, margin: "0 0 20px" }}>Primary Care</h3>
                <p style={{ color: palette.muted, lineHeight: 1.8, fontSize: 16, margin: 0, fontWeight: 300 }}>
                  Comprehensive virtual health management across acute needs, preventative screenings, and chronic disease care. A steady hand for your long-term wellbeing.
                </p>
              </div>
              <div>
                <p style={{ fontFamily: serif, fontSize: 13, fontStyle: "italic", color: palette.muted, margin: "0 0 18px" }}>ii.</p>
                <h3 style={{ fontFamily: serif, fontSize: "clamp(26px, 2.6vw, 34px)", fontWeight: 400, margin: "0 0 20px" }}>GLP-1 Weight Wellness</h3>
                <p style={{ color: palette.muted, lineHeight: 1.8, fontSize: 16, margin: 0, fontWeight: 300 }}>
                  Evidence-based metabolic health support, with medical oversight of GLP-1 therapies alongside personalized nutrition and lifestyle guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process — dark plate, numbered editorial flow */}
      <section id="process" className="r-pad-y" style={{ padding: "clamp(120px, 16vh, 180px) clamp(24px, 5vw, 56px)", background: palette.ink, color: palette.paper }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.34em", textTransform: "uppercase", color: "rgba(244,242,238,0.5)", margin: "0 0 80px" }}>The Process</p>
          <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 64 }}>
            {[
              { n: "I", t: "Virtual Intake", d: "A detailed health assessment and medical history review through a secure digital portal." },
              { n: "II", t: "Consultation", d: "A 45-minute virtual visit to discuss your goals and establish a tailored treatment plan." },
              { n: "III", t: "Ongoing Support", d: "Continuous access to your provider, periodic check-ins, and seamless prescription management." },
            ].map((s) => (
              <div key={s.n} style={{ paddingTop: 40, borderTop: `1px solid rgba(244,242,238,0.2)` }}>
                <div style={{ fontFamily: serif, fontSize: "clamp(56px, 6vw, 96px)", fontStyle: "italic", color: "rgba(244,242,238,0.85)", lineHeight: 1, marginBottom: 36 }}>{s.n}</div>
                <h4 style={{ fontFamily: serif, color: palette.paper, fontWeight: 400, fontSize: 22, margin: "0 0 16px" }}>{s.t}</h4>
                <p style={{ fontSize: 15, lineHeight: 1.75, maxWidth: "34ch", margin: 0, color: "rgba(244,242,238,0.65)", fontWeight: 300 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider presence — asymmetric, tall portrait */}
      <section style={{ padding: "clamp(120px, 18vh, 220px) clamp(24px, 5vw, 56px)" }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 0.85fr", gap: 80, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.34em", textTransform: "uppercase", color: palette.muted, margin: "0 0 36px" }}>The Provider</p>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(40px, 5.5vw, 76px)", fontWeight: 400, lineHeight: 1, letterSpacing: "-0.01em", margin: "0 0 32px" }}>
              Jean Joseph,<br /><span style={{ fontStyle: "italic" }}>fnp-c</span>
            </h2>
            <p style={{ fontSize: 18, color: palette.muted, lineHeight: 1.8, margin: "0 0 32px", maxWidth: "44ch", fontWeight: 300 }}>
              With more than twenty years in the medical field, Jean Joseph brings a depth of clinical judgment that comes only with experience. Originally from Haiti, he founded Providence Care Plus to offer attentive, unhurried care that places the patient relationship first.
            </p>
            <p style={{ fontFamily: serif, fontSize: 17, fontStyle: "italic", color: palette.ink, margin: 0 }}>
              English &amp; Kreyòl Ayisyen — Byenveni.
            </p>
          </div>
          <figure className="r-hero-img" style={{ position: "relative", height: "70vh", minHeight: 420, overflow: "hidden", margin: 0 }}>
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
            <figcaption style={{ position: "absolute", left: 0, bottom: -1, right: 0, padding: "14px 0", fontSize: 9, letterSpacing: "0.34em", textTransform: "uppercase", color: palette.muted, borderTop: `1px solid ${palette.hair}`, background: palette.paper }}>
              Plate II — The Practice
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Contact */}
      <ContactSite2 />

      <footer style={{ padding: "40px clamp(24px, 5vw, 56px)", borderTop: `1px solid ${palette.hair}`, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <span style={{ fontFamily: serif, fontSize: 16 }}>Providence Care Plus</span>
        <div style={{ display: "flex", gap: 32, fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: palette.muted }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Privacy</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Terms</a>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  );
}

function ContactSite2() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  const fieldLabel: React.CSSProperties = { fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: palette.muted, fontWeight: 400 };
  const input: React.CSSProperties = { background: "transparent", borderTop: "none", borderLeft: "none", borderRight: "none", borderBottom: `1px solid ${palette.hair}`, padding: "14px 0", fontSize: 15, outline: "none", fontFamily: sans, color: palette.ink, fontWeight: 300 };
  return (
    <section id="contact" style={{ padding: "clamp(120px, 18vh, 200px) clamp(24px, 5vw, 56px)", borderTop: `1px solid ${palette.hair}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "0.5fr 1fr", gap: 72 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.34em", textTransform: "uppercase", color: palette.muted, margin: 0 }}>Contact</p>
          <div>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(40px, 5vw, 68px)", fontWeight: 400, margin: "0 0 48px", letterSpacing: "-0.01em" }}>
              Get in <span style={{ fontStyle: "italic" }}>touch.</span>
            </h2>
            {sent ? (
              <p style={{ color: palette.ink, fontSize: 18, fontFamily: serif, fontStyle: "italic" }}>Thank you — we'll be in touch shortly.</p>
            ) : (
              <form onSubmit={onSubmit} className="r-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
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
                <label style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: "1 / -1", marginTop: 12 }}>
                  <span style={fieldLabel}>Message</span>
                  <textarea required rows={4} style={{ ...input, resize: "none" }} />
                </label>
                <div style={{ gridColumn: "1 / -1", paddingTop: 24 }}>
                  <button type="submit" style={{ background: "transparent", border: "none", padding: 0, fontFamily: sans, fontSize: 12, letterSpacing: "0.28em", textTransform: "uppercase", color: palette.ink, cursor: "pointer", borderBottom: `1px solid ${palette.ink}`, paddingBottom: 6 }}>
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
