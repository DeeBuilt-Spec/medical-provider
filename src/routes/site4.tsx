import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroImg from "../assets/hero-site4.jpg";
import providerImg from "../assets/stethoscope.jpg";
import { useParallax } from "../lib/useParallax";

export const Route = createFileRoute("/site4")({
  head: () => ({
    meta: [
      { title: "Providence Care Plus — Your Neighborhood Practice" },
      { name: "description", content: "Friendly, attentive primary care and GLP-1 virtual visits for your whole family." },
      { property: "og:title", content: "Providence Care Plus" },
      { property: "og:description", content: "Friendly primary care and GLP-1 virtual visits for everyday families." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500&display=swap" },
    ],
  }),
  component: Site4,
});

const palette = {
  cream: "#FBF7F1",
  warm: "#F1E8D9",
  sage: "#5E7A60",
  sageDeep: "#46603F",
  ink: "#33302B",
  muted: "#7A726A",
  hair: "rgba(51,48,43,0.14)",
};

const serif = "'Lora', Georgia, serif";
const sans = "'Inter', ui-sans-serif, system-ui, sans-serif";

// Single warm grade across imagery — soft cream lift, sage-warm shadows.
const grade =
  "linear-gradient(180deg, rgba(51,48,43,0.10) 0%, rgba(94,122,96,0.10) 70%, rgba(51,48,43,0.18) 100%)";
const photoFilter = "saturate(0.95) contrast(1.02)";

function Site4() {
  const offset = useParallax(0.25);
  return (
    <div style={{ background: palette.cream, color: palette.ink, fontFamily: sans }}>
      {/* Nav */}
      <nav style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 50, padding: "26px clamp(24px, 5vw, 48px)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: serif, fontSize: 22, fontWeight: 600, color: palette.sageDeep }}>Providence Care Plus</span>
        <div className="r-hide" style={{ display: "flex", gap: 36, fontSize: 13, letterSpacing: "0.02em", color: palette.ink }}>
          <a href="#about" style={{ color: "inherit", textDecoration: "none" }}>About</a>
          <a href="#services" style={{ color: "inherit", textDecoration: "none" }}>Services</a>
          <a href="#how" style={{ color: "inherit", textDecoration: "none" }}>How It Works</a>
          <a href="#contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* Hero - centered welcoming */}
      <section style={{ position: "relative", minHeight: "92vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "120px 24px 80px" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: "-6% 0",
            backgroundImage: `linear-gradient(rgba(251,247,241,0.72), rgba(251,247,241,0.82)), url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translate3d(0, ${offset}px, 0)`,
            willChange: "transform",
            filter: photoFilter,
          }}
        />
        <div style={{ position: "relative", maxWidth: 860 }}>
          <p style={{ fontSize: 12, letterSpacing: "0.28em", textTransform: "uppercase", color: palette.sageDeep, margin: "0 0 28px", fontWeight: 500 }}>
            Welcome to our practice
          </p>
          <h1 style={{ fontFamily: serif, fontWeight: 500, fontSize: "clamp(44px, 6vw, 84px)", lineHeight: 1.08, letterSpacing: "-0.01em", margin: "0 0 32px", color: palette.ink }}>
            Healthcare that feels <br /> like it's just for you.
          </h1>
          <p style={{ fontSize: 19, color: palette.muted, lineHeight: 1.65, maxWidth: 560, margin: "0 auto 48px" }}>
            A solo nurse practitioner offering unhurried primary care and GLP-1 virtual visits, for neighbors, families, and everyone in between.
          </p>
          <a
            href="#contact"
            style={{ display: "inline-block", padding: "16px 38px", border: `1px solid ${palette.sageDeep}`, color: palette.sageDeep, fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500, textDecoration: "none" }}
          >
            Book an Appointment
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "clamp(100px, 14vh, 140px) 24px", background: palette.cream }}>
        <div style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 12, letterSpacing: "0.28em", textTransform: "uppercase", color: palette.sageDeep, margin: "0 0 28px", fontWeight: 500 }}>About the practice</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(30px, 3.4vw, 44px)", fontWeight: 500, lineHeight: 1.25, letterSpacing: "-0.01em", margin: "0 0 36px" }}>
            Hi, I'm so glad you're here.
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.8, color: palette.ink, margin: 0 }}>
            Providence Care Plus is a small, independent practice run by one nurse practitioner who genuinely wants to know you. I started this practice because I believe healthcare should feel personal: appointments that aren't rushed, a provider who remembers your name and your story, and care that fits into your real life. Whether you're here for your annual visit or exploring GLP-1 options, you'll always have a friendly face on the other end.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: "clamp(100px, 14vh, 140px) 24px", background: palette.warm }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <p style={{ fontSize: 12, letterSpacing: "0.28em", textTransform: "uppercase", color: palette.sageDeep, margin: "0 0 16px", fontWeight: 500 }}>What we offer</p>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 3.6vw, 46px)", fontWeight: 500, margin: 0, letterSpacing: "-0.01em" }}>Two ways we can help.</h2>
          </div>
          <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, borderTop: `1px solid ${palette.hair}`, paddingTop: 64 }}>
            <div>
              <h3 style={{ fontFamily: serif, fontSize: "clamp(26px, 2.6vw, 32px)", fontWeight: 500, margin: "0 0 20px", color: palette.sageDeep }}>Primary Care</h3>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: palette.ink, margin: 0, maxWidth: "44ch" }}>
                Annual checkups, sick visits, chronic care, and everything in between. We take the time to listen, answer your questions, and build a plan that fits your day-to-day.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: serif, fontSize: "clamp(26px, 2.6vw, 32px)", fontWeight: 500, margin: "0 0 20px", color: palette.sageDeep }}>GLP-1 Virtual Visits</h3>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: palette.ink, margin: 0, maxWidth: "44ch" }}>
                Considering a GLP-1 medication? We offer virtual appointments to talk through your goals, options, and questions, with thoughtful follow-up along the way. All from the comfort of home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works — numbered editorial flow, no icon badges */}
      <section id="how" style={{ padding: "clamp(100px, 14vh, 140px) 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <p style={{ fontSize: 12, letterSpacing: "0.28em", textTransform: "uppercase", color: palette.sageDeep, margin: "0 0 16px", fontWeight: 500 }}>How it works</p>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 3.6vw, 46px)", fontWeight: 500, margin: 0, letterSpacing: "-0.01em" }}>Getting started is simple.</h2>
          </div>
          {[
            { n: "01", t: "Reach out", d: "Send a message through the form below or give us a call. We'll get back to you within a business day." },
            { n: "02", t: "Schedule a visit", d: "Pick a time that works, in-person or virtual. We'll talk through your goals and answer any questions." },
            { n: "03", t: "Stay connected", d: "Direct messaging and easy follow-ups mean you always have a way to check in. We're here whenever you need us." },
          ].map((s, i, arr) => (
            <div key={s.n} className="r-stack" style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 32, padding: "40px 0", borderBottom: i === arr.length - 1 ? "none" : `1px solid ${palette.hair}` }}>
              <span style={{ fontFamily: serif, fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 500, color: palette.sage, lineHeight: 1 }}>{s.n}</span>
              <div style={{ maxWidth: 600 }}>
                <h4 style={{ fontFamily: serif, fontSize: 24, fontWeight: 500, margin: "0 0 12px" }}>{s.t}</h4>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: palette.muted, margin: 0 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Provider presence */}
      <section style={{ padding: "clamp(100px, 14vh, 140px) 24px", background: palette.warm }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 72, alignItems: "center" }}>
          <div className="r-hero-img" style={{ position: "relative", height: 480, overflow: "hidden" }}>
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
          <div>
            <p style={{ fontSize: 12, letterSpacing: "0.28em", textTransform: "uppercase", color: palette.sageDeep, margin: "0 0 24px", fontWeight: 500 }}>Meet your provider</p>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(30px, 3.6vw, 46px)", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.01em", margin: "0 0 24px" }}>
              Jean Joseph, <span style={{ fontStyle: "italic", fontWeight: 400 }}>FNP-C</span>
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.8, color: palette.ink, margin: "0 0 24px", maxWidth: "46ch" }}>
              With more than twenty years in the medical field, Jean brings a depth of clinical judgment that comes only with experience. Originally from Haiti, he founded Providence Care Plus to offer the kind of attentive, unhurried care that puts the patient relationship first.
            </p>
            <p style={{ fontFamily: serif, fontStyle: "italic", fontSize: 17, color: palette.sageDeep, margin: 0 }}>
              English &amp; Kreyòl Ayisyen — Byenveni.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSite4 />

      <footer style={{ padding: "36px 24px", textAlign: "center", borderTop: `1px solid ${palette.hair}` }}>
        <p style={{ fontSize: 13, color: palette.muted, margin: 0 }}>
          © 2026 Providence Care Plus · Made with care for our community
        </p>
      </footer>
    </div>
  );
}

function ContactSite4() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  const input: React.CSSProperties = {
    width: "100%",
    padding: "14px 0",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${palette.hair}`,
    fontSize: 16,
    fontFamily: sans,
    color: palette.ink,
    outline: "none",
  };
  return (
    <section id="contact" style={{ padding: "clamp(100px, 14vh, 140px) 24px", background: palette.cream }}>
      <div style={{ maxWidth: 660, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ fontSize: 12, letterSpacing: "0.28em", textTransform: "uppercase", color: palette.sageDeep, margin: "0 0 16px", fontWeight: 500 }}>Say hello</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(34px, 4vw, 48px)", fontWeight: 500, margin: "0 0 16px", letterSpacing: "-0.01em" }}>We'd love to hear from you.</h2>
          <p style={{ fontSize: 17, color: palette.muted, margin: 0 }}>Send us a note and we'll be in touch soon.</p>
        </div>
        {sent ? (
          <p style={{ textAlign: "center", color: palette.sageDeep, fontSize: 18, fontFamily: serif, fontStyle: "italic" }}>Thank you — we'll be in touch soon!</p>
        ) : (
          <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <input required type="text" placeholder="Your name" style={input} />
            <div className="r-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
              <input required type="email" placeholder="Email" style={input} />
              <input type="tel" placeholder="Phone" style={input} />
            </div>
            <textarea required rows={4} placeholder="How can we help?" style={{ ...input, resize: "none" }} />
            <div style={{ textAlign: "center", marginTop: 16 }}>
              <button type="submit" style={{ padding: "16px 44px", background: "transparent", border: `1px solid ${palette.sageDeep}`, color: palette.sageDeep, fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500, cursor: "pointer", fontFamily: sans }}>
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
