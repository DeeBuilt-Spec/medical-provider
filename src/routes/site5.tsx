import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroImg from "../assets/hero-site5.jpg";
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
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,500;8..60,600&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  component: Site5,
});

const palette = {
  cream: "#FCF9F4",
  warm: "#F5EDE0",
  teal: "#5FA8A0",
  tealDeep: "#3F8A82",
  ink: "#2E2A26",
  muted: "#7B736A",
};

const serif = "'Source Serif 4', Georgia, serif";
const sans = "'Inter', ui-sans-serif, system-ui, sans-serif";

function Site5() {
  const offset = useParallax(0.25);
  return (
    <div style={{ background: palette.cream, color: palette.ink, fontFamily: sans }}>
      {/* Nav */}
      <nav style={{ padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", background: palette.cream, borderBottom: `1px solid ${palette.warm}` }}>
        <span style={{ fontFamily: serif, fontSize: 22, fontWeight: 600, color: palette.tealDeep }}>Providence Care Plus</span>
        <div style={{ display: "flex", gap: 32, fontSize: 14, color: palette.ink, alignItems: "center" }}>
          <a href="#about" style={{ color: "inherit", textDecoration: "none" }}>About</a>
          <a href="#services" style={{ color: "inherit", textDecoration: "none" }}>Services</a>
          <a href="#how" style={{ color: "inherit", textDecoration: "none" }}>How It Works</a>
          <a href="#contact" style={{ padding: "10px 20px", background: palette.teal, color: "#fff", textDecoration: "none", fontWeight: 500 }}>Book Visit</a>
        </div>
      </nav>

      {/* Hero - split warm */}
      <section style={{ padding: "80px 40px 100px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 72, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 14, color: palette.tealDeep, margin: "0 0 24px", fontWeight: 600, letterSpacing: "0.05em" }}>
              DIRECT PRIMARY CARE · GLP-1 VIRTUAL VISITS
            </p>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(40px, 6vw, 78px)", lineHeight: 1.08, fontWeight: 600, margin: "0 0 28px", color: palette.ink }}>
              Real care, from a real neighbor.
            </h1>
            <p style={{ fontSize: 19, color: palette.muted, lineHeight: 1.65, margin: "0 0 40px", maxWidth: 480 }}>
              Providence Care Plus is a small, friendly practice where you'll always see the same provider. Take a breath — you're in good hands here.
            </p>
            <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              <a href="#contact" style={{ padding: "16px 32px", background: palette.teal, color: "#fff", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
                Book an Appointment
              </a>
              <a href="#services" style={{ padding: "16px 12px", color: palette.tealDeep, fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
                See our services →
              </a>
            </div>
          </div>
          <div style={{ position: "relative", height: 560, overflow: "hidden", background: palette.warm }}>
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
      </section>

      {/* About */}
      <section id="about" style={{ padding: "100px 40px", background: palette.warm }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80, alignItems: "start" }}>
          <div>
            <p style={{ fontSize: 13, color: palette.tealDeep, fontWeight: 600, letterSpacing: "0.08em", margin: "0 0 16px" }}>ABOUT</p>
            <h2 style={{ fontFamily: serif, fontSize: 40, fontWeight: 600, lineHeight: 1.15, margin: 0 }}>
              A practice built on trust.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: palette.ink, margin: "0 0 20px" }}>
              I'm a nurse practitioner who's spent years caring for families in clinics where there was never quite enough time. Providence Care Plus is my answer to that — a small, independent practice where you'll never feel like a number.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: palette.ink, margin: 0 }}>
              I take the time to actually get to know my patients, follow up when I say I will, and make care feel like the conversation it should be. That's it. That's the whole idea.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: "100px 40px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <p style={{ fontSize: 13, color: palette.tealDeep, fontWeight: 600, letterSpacing: "0.08em", margin: "0 0 16px" }}>WHAT WE OFFER</p>
          <h2 style={{ fontFamily: serif, fontSize: 40, fontWeight: 600, margin: "0 0 64px" }}>Two services, lots of care.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, borderTop: `1px solid ${palette.warm}`, paddingTop: 56 }}>
            <div>
              <h3 style={{ fontFamily: serif, fontSize: 26, fontWeight: 600, color: palette.tealDeep, margin: "0 0 20px" }}>Primary Care</h3>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: palette.ink, margin: "0 0 16px" }}>
                Comprehensive care for adults — from routine physicals and preventive screenings to managing chronic conditions like blood pressure, diabetes, and thyroid issues.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: palette.muted, margin: 0 }}>
                Same-day messages, longer appointments, and a provider who remembers you.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: serif, fontSize: 26, fontWeight: 600, color: palette.tealDeep, margin: "0 0 20px" }}>GLP-1 Virtual Appointments</h3>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: palette.ink, margin: "0 0 16px" }}>
                If you're considering medications like semaglutide or tirzepatide, we'll meet over video to talk it through — eligibility, expectations, and what the journey looks like.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: palette.muted, margin: 0 }}>
                Honest guidance, monthly check-ins, no pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" style={{ padding: "100px 40px", background: palette.warm }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <p style={{ fontSize: 13, color: palette.tealDeep, fontWeight: 600, letterSpacing: "0.08em", margin: "0 0 16px" }}>HOW IT WORKS</p>
          <h2 style={{ fontFamily: serif, fontSize: 40, fontWeight: 600, margin: "0 0 64px" }}>Three friendly steps.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
            {[
              { n: "Step 01", t: "Get in touch", d: "Fill out the form or call us. We'll respond within one business day to find a time that works for you." },
              { n: "Step 02", t: "Meet your provider", d: "Have a real conversation — about your health, your goals, and what kind of care feels right for you." },
              { n: "Step 03", t: "Keep in touch", d: "Message us anytime with questions. Schedule follow-ups easily. We're always just a quick note away." },
            ].map((s) => (
              <div key={s.n}>
                <p style={{ fontSize: 13, color: palette.tealDeep, fontWeight: 600, letterSpacing: "0.08em", margin: "0 0 12px" }}>{s.n}</p>
                <h4 style={{ fontFamily: serif, fontSize: 24, fontWeight: 600, margin: "0 0 12px" }}>{s.t}</h4>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: palette.muted, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSite5 />

      <footer style={{ padding: "32px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, borderTop: `1px solid ${palette.warm}` }}>
        <p style={{ fontSize: 14, color: palette.muted, margin: 0 }}>© 2026 Providence Care Plus · A practice for our community</p>
        <p style={{ fontSize: 14, color: palette.muted, margin: 0 }}>hello@providencecare.plus · (555) 012-3456</p>
      </footer>
    </div>
  );
}

function ContactSite5() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  const label: React.CSSProperties = { fontSize: 13, color: palette.ink, fontWeight: 500, marginBottom: 6, display: "block" };
  const input: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    background: "#fff",
    border: `1px solid ${palette.warm}`,
    fontSize: 15,
    fontFamily: sans,
    color: palette.ink,
    outline: "none",
  };
  return (
    <section id="contact" style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 72, alignItems: "start" }}>
        <div>
          <p style={{ fontSize: 13, color: palette.tealDeep, fontWeight: 600, letterSpacing: "0.08em", margin: "0 0 16px" }}>CONTACT</p>
          <h2 style={{ fontFamily: serif, fontSize: 40, fontWeight: 600, lineHeight: 1.15, margin: "0 0 24px" }}>
            Let's start a conversation.
          </h2>
          <p style={{ fontSize: 17, color: palette.muted, lineHeight: 1.7, margin: "0 0 32px" }}>
            Have a question or want to book a visit? Drop us a line and we'll get back to you soon — usually the same day.
          </p>
          <div style={{ fontSize: 15, lineHeight: 1.9, color: palette.ink }}>
            <p style={{ margin: 0 }}><strong style={{ color: palette.tealDeep }}>Phone</strong> · (555) 012-3456</p>
            <p style={{ margin: 0 }}><strong style={{ color: palette.tealDeep }}>Email</strong> · hello@providencecare.plus</p>
          </div>
        </div>

        {sent ? (
          <p style={{ color: palette.tealDeep, fontSize: 18, fontFamily: serif }}>Thank you — we'll be in touch soon!</p>
        ) : (
          <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <label style={label}>Name</label>
              <input required type="text" style={input} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
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
              <textarea required rows={5} style={{ ...input, resize: "none" }} />
            </div>
            <button type="submit" style={{ padding: "14px 32px", background: palette.teal, color: "#fff", fontSize: 15, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: sans, alignSelf: "flex-start", marginTop: 8 }}>
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
