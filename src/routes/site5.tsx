import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroImg from "../assets/hero-site5.jpg";
import providerImg from "../assets/stethoscope.jpg";
import { useParallax } from "../lib/useParallax";

export const Route = createFileRoute("/site5")({
  head: () => ({
    meta: [
      { title: "Providence Care Plus — Friendly Family Care" },
      { name: "description", content: "Approachable primary care and GLP-1 virtual appointments for your neighborhood." },
      { property: "og:title", content: "Providence Care Plus" },
      { property: "og:description", content: "Approachable primary care and GLP-1 virtual appointments." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  component: Site5,
});

// Teal muted one notch toward sophistication — desaturated, deeper, calmer.
const palette = {
  cream: "#FCF9F4",
  warm: "#F4ECDF",
  teal: "#557E78",
  tealDeep: "#3C625D",
  ink: "#2E2A26",
  muted: "#7B736A",
  hair: "rgba(46,42,38,0.14)",
};

const serif = "'Source Serif 4', Georgia, serif";
const sans = "'Inter', ui-sans-serif, system-ui, sans-serif";

const grade =
  "linear-gradient(180deg, rgba(46,42,38,0.10) 0%, rgba(85,126,120,0.10) 70%, rgba(46,42,38,0.18) 100%)";
const photoFilter = "saturate(0.95) contrast(1.02)";

// Small uppercase wide-tracked label — the sharpened hierarchy detail.
const eyebrow: React.CSSProperties = { fontSize: 11, color: palette.tealDeep, fontWeight: 600, letterSpacing: "0.24em", textTransform: "uppercase", margin: "0 0 20px" };

function Site5() {
  const offset = useParallax(0.25);
  return (
    <div style={{ background: palette.cream, color: palette.ink, fontFamily: sans }}>
      {/* Nav */}
      <nav style={{ padding: "22px clamp(24px, 5vw, 40px)", display: "flex", justifyContent: "space-between", alignItems: "center", background: palette.cream, borderBottom: `1px solid ${palette.hair}` }}>
        <span style={{ fontFamily: serif, fontSize: 22, fontWeight: 600, color: palette.tealDeep }}>Providence Care Plus</span>
        <div className="r-hide" style={{ display: "flex", gap: 32, fontSize: 14, color: palette.ink, alignItems: "center" }}>
          <a href="#about" style={{ color: "inherit", textDecoration: "none" }}>About</a>
          <a href="#services" style={{ color: "inherit", textDecoration: "none" }}>Services</a>
          <a href="#how" style={{ color: "inherit", textDecoration: "none" }}>How It Works</a>
          <a href="#contact" style={{ color: palette.tealDeep, textDecoration: "none", fontWeight: 500, borderBottom: `1px solid ${palette.tealDeep}`, paddingBottom: 4 }}>Book Visit</a>
        </div>
      </nav>

      {/* Hero - split warm */}
      <section style={{ padding: "clamp(64px, 9vh, 96px) clamp(24px, 5vw, 40px) clamp(80px, 11vh, 112px)", maxWidth: 1280, margin: "0 auto" }}>
        <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 72, alignItems: "center" }}>
          <div>
            <p style={eyebrow}>Direct Primary Care · GLP-1 Virtual Visits</p>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(46px, 7vw, 92px)", lineHeight: 1.02, fontWeight: 600, letterSpacing: "-0.015em", margin: "0 0 32px", color: palette.ink }}>
              Real care, from a real neighbor.
            </h1>
            <p style={{ fontSize: 19, color: palette.muted, lineHeight: 1.65, margin: "0 0 44px", maxWidth: 480 }}>
              Providence Care Plus is a small, friendly practice where you'll always see the same provider. Take a breath, you're in good hands here.
            </p>
            <div style={{ display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap" }}>
              <a href="#contact" style={{ padding: "15px 32px", border: `1px solid ${palette.tealDeep}`, color: palette.tealDeep, fontSize: 13, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none" }}>
                Book an Appointment
              </a>
              <a href="#services" style={{ color: palette.tealDeep, fontSize: 15, fontWeight: 500, textDecoration: "none", borderBottom: `1px solid ${palette.hair}`, paddingBottom: 4 }}>
                See our services →
              </a>
            </div>
          </div>
          <div className="r-hero-img" style={{ position: "relative", height: 560, overflow: "hidden", background: palette.warm }}>
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
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "clamp(80px, 12vh, 120px) clamp(24px, 5vw, 40px)", borderTop: `1px solid ${palette.hair}` }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80, alignItems: "start" }}>
          <div>
            <p style={eyebrow}>About</p>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 600, lineHeight: 1.12, letterSpacing: "-0.01em", margin: 0 }}>
              A practice built on trust.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 18, lineHeight: 1.8, color: palette.ink, margin: "0 0 24px" }}>
              I'm a nurse practitioner who's spent years caring for families in clinics where there was never quite enough time. Providence Care Plus is my answer to that: a small, independent practice where you'll never feel like a number.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.8, color: palette.ink, margin: 0 }}>
              I take the time to know my patients, follow up when I say I will, and make care feel like the conversation it should be.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: "clamp(80px, 12vh, 120px) clamp(24px, 5vw, 40px)", borderTop: `1px solid ${palette.hair}` }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <p style={eyebrow}>What we offer</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 600, margin: "0 0 64px", letterSpacing: "-0.01em" }}>Two services, lots of care.</h2>
          <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, borderTop: `1px solid ${palette.hair}`, paddingTop: 56 }}>
            <div>
              <h3 style={{ fontFamily: serif, fontSize: "clamp(24px, 2.4vw, 30px)", fontWeight: 600, color: palette.tealDeep, margin: "0 0 20px" }}>Primary Care</h3>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: palette.ink, margin: "0 0 16px", maxWidth: "44ch" }}>
                Comprehensive care for adults, from routine physicals and preventive screenings to managing chronic conditions like blood pressure, diabetes, and thyroid issues.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: palette.muted, margin: 0 }}>
                Same-day messages, longer appointments, and a provider who remembers you.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: serif, fontSize: "clamp(24px, 2.4vw, 30px)", fontWeight: 600, color: palette.tealDeep, margin: "0 0 20px" }}>GLP-1 Virtual Appointments</h3>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: palette.ink, margin: "0 0 16px", maxWidth: "44ch" }}>
                If you're considering medications like semaglutide or tirzepatide, we'll meet over video to talk it through: eligibility, expectations, and what the journey looks like.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: palette.muted, margin: 0 }}>
                Clear guidance and monthly check-ins at a pace that suits you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" style={{ padding: "clamp(80px, 12vh, 120px) clamp(24px, 5vw, 40px)", borderTop: `1px solid ${palette.hair}` }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <p style={eyebrow}>How it works</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 600, margin: "0 0 64px", letterSpacing: "-0.01em" }}>Three friendly steps.</h2>
          <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 56 }}>
            {[
              { n: "01", t: "Get in touch", d: "Fill out the form or call us. We'll respond within one business day to find a time that works for you." },
              { n: "02", t: "Meet your provider", d: "Have a real conversation about your health, your goals, and what kind of care feels right for you." },
              { n: "03", t: "Keep in touch", d: "Message us anytime with questions. Schedule follow-ups easily. We're always just a quick note away." },
            ].map((s) => (
              <div key={s.n} style={{ borderTop: `1px solid ${palette.hair}`, paddingTop: 28 }}>
                <p style={{ fontFamily: serif, fontSize: "clamp(36px, 4vw, 52px)", color: palette.teal, fontWeight: 500, lineHeight: 1, margin: "0 0 24px" }}>{s.n}</p>
                <h4 style={{ fontFamily: serif, fontSize: 23, fontWeight: 600, margin: "0 0 12px" }}>{s.t}</h4>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: palette.muted, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider presence */}
      <section style={{ padding: "clamp(80px, 12vh, 120px) clamp(24px, 5vw, 40px)", borderTop: `1px solid ${palette.hair}` }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 72, alignItems: "center" }}>
          <div>
            <p style={eyebrow}>Meet your provider</p>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-0.01em", margin: "0 0 24px" }}>
              Jean Joseph, <span style={{ fontStyle: "italic", fontWeight: 400 }}>FNP-C</span>
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.8, color: palette.ink, margin: "0 0 24px", maxWidth: "46ch" }}>
              With more than twenty years in the medical field, Jean brings a depth of clinical judgment that comes only with experience. Originally from Haiti, he founded Providence Care Plus to offer the kind of attentive, unhurried care that puts the patient relationship first.
            </p>
            <p style={{ fontFamily: serif, fontStyle: "italic", fontSize: 17, color: palette.tealDeep, margin: 0 }}>
              English &amp; Kreyòl Ayisyen — Byenveni.
            </p>
          </div>
          <div className="r-hero-img" style={{ position: "relative", height: 460, overflow: "hidden", background: palette.warm }}>
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
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSite5 />

      <footer style={{ padding: "36px clamp(24px, 5vw, 40px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, borderTop: `1px solid ${palette.hair}` }}>
        <p style={{ fontSize: 14, color: palette.muted, margin: 0 }}>© 2026 Providence Care Plus · A practice for our community</p>
        <p style={{ fontSize: 14, color: palette.muted, margin: 0 }}>hello@providencecare.plus · (555) 012-3456</p>
      </footer>
    </div>
  );
}

function ContactSite5() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  const label: React.CSSProperties = { fontSize: 11, color: palette.muted, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 8, display: "block" };
  const input: React.CSSProperties = {
    width: "100%",
    padding: "13px 0",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${palette.hair}`,
    fontSize: 16,
    fontFamily: sans,
    color: palette.ink,
    outline: "none",
  };
  return (
    <section id="contact" style={{ padding: "clamp(80px, 12vh, 120px) clamp(24px, 5vw, 40px)", borderTop: `1px solid ${palette.hair}` }}>
      <div className="r-stack r-gap" style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 72, alignItems: "start" }}>
        <div>
          <p style={eyebrow}>Contact</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 600, lineHeight: 1.12, letterSpacing: "-0.01em", margin: "0 0 24px" }}>
            Let's start a conversation.
          </h2>
          <p style={{ fontSize: 17, color: palette.muted, lineHeight: 1.7, margin: "0 0 36px" }}>
            Have a question or want to book a visit? Drop us a line and we'll get back to you soon, usually the same day.
          </p>
          <div style={{ fontSize: 15, lineHeight: 2, color: palette.ink }}>
            <p style={{ margin: 0 }}><span style={{ color: palette.tealDeep, fontWeight: 600 }}>Phone</span> · (555) 012-3456</p>
            <p style={{ margin: 0 }}><span style={{ color: palette.tealDeep, fontWeight: 600 }}>Email</span> · hello@providencecare.plus</p>
          </div>
        </div>

        {sent ? (
          <p style={{ color: palette.tealDeep, fontSize: 18, fontFamily: serif, fontStyle: "italic" }}>Thank you — we'll be in touch soon!</p>
        ) : (
          <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div>
              <label style={label}>Name</label>
              <input required type="text" style={input} />
            </div>
            <div className="r-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
              <div>
                <label style={label}>Email</label>
                <input required type="email" style={input} />
              </div>
              <div>
                <label style={label}>Phone</label>
                <input type="tel" style={input} />
              </div>
            </div>
            <div>
              <label style={label}>Message</label>
              <textarea required rows={4} style={{ ...input, resize: "none" }} />
            </div>
            <button type="submit" style={{ padding: "15px 36px", background: "transparent", border: `1px solid ${palette.tealDeep}`, color: palette.tealDeep, fontSize: 13, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", cursor: "pointer", fontFamily: sans, alignSelf: "flex-start", marginTop: 8 }}>
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
