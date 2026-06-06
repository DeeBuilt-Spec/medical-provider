import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroImg from "../assets/hero-site4.jpg";
import { useParallax } from "../lib/useParallax";

export const Route = createFileRoute("/site7")({
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
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&family=Nunito+Sans:wght@400;500;600&display=swap" },
    ],
  }),
  component: Site7,
});

const palette = {
  cream: "#FBF7F1",
  warm: "#F3EBDD",
  sage: "#7C9A7E",
  sageDeep: "#5C7A5F",
  ink: "#3A3530",
  muted: "#7A726A",
};

const serif = "'Lora', Georgia, serif";
const sans = "'Nunito Sans', ui-sans-serif, system-ui, sans-serif";

function Site7() {
  const offset = useParallax(0.25);
  return (
    <div style={{ background: palette.cream, color: palette.ink, fontFamily: sans }}>
      {/* Nav */}
      <nav style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 50, padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: serif, fontSize: 22, fontWeight: 600, color: palette.sageDeep }}>Providence Care Plus</span>
        <div className="r-hide" style={{ display: "flex", gap: 36, fontSize: 14, color: palette.ink }}>
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
            inset: 0,
            backgroundImage: `linear-gradient(rgba(251,247,241,0.78), rgba(251,247,241,0.88)), url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translate3d(0, ${offset}px, 0)`,
            willChange: "transform",
          }}
        />
        <div style={{ position: "relative", maxWidth: 820 }}>
          <p style={{ fontSize: 14, color: palette.sageDeep, margin: "0 0 24px", fontWeight: 500 }}>
            ✿ Welcome to our practice
          </p>
          <h1 style={{ fontFamily: serif, fontWeight: 500, fontSize: "clamp(40px, 5.5vw, 72px)", lineHeight: 1.15, margin: "0 0 28px", color: palette.ink }}>
            Healthcare that feels <br /> like it's just for you.
          </h1>
          <p style={{ fontSize: 19, color: palette.muted, lineHeight: 1.6, maxWidth: 560, margin: "0 auto 44px" }}>
            A solo nurse practitioner offering unhurried primary care and GLP-1 virtual visits — for neighbors, families, and everyone in between.
          </p>
          <a
            href="#contact"
            style={{ display: "inline-block", padding: "18px 40px", background: palette.sage, color: "#fff", fontSize: 15, fontWeight: 600, textDecoration: "none" }}
          >
            Book an Appointment
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "120px 24px", background: palette.cream }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: serif, fontStyle: "italic", color: palette.sageDeep, fontSize: 16, margin: "0 0 24px" }}>About the practice</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(28px, 3vw, 38px)", fontWeight: 500, lineHeight: 1.35, margin: "0 0 32px" }}>
            Hi, I'm so glad you're here.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.75, color: palette.ink, margin: 0 }}>
            Providence Care Plus is a small, independent practice run by one nurse practitioner who genuinely wants to know you. I started this practice because I believe healthcare should feel personal — appointments that aren't rushed, a provider who remembers your name and your story, and care that fits into your real life. Whether you're here for your annual visit or exploring GLP-1 options, you'll always have a friendly face on the other end.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: "120px 24px", background: palette.warm }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <p style={{ fontFamily: serif, fontStyle: "italic", color: palette.sageDeep, fontSize: 16, margin: "0 0 12px" }}>What we offer</p>
            <h2 style={{ fontFamily: serif, fontSize: 40, fontWeight: 500, margin: 0 }}>Two ways we can help.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 72 }}>
            <div>
              <h3 style={{ fontFamily: serif, fontSize: 28, fontWeight: 500, margin: "0 0 16px", color: palette.sageDeep }}>Primary Care</h3>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: palette.ink, margin: 0 }}>
                Annual checkups, sick visits, chronic care, and everything in between. We take the time to listen, answer your questions, and build a plan that fits your day-to-day.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: serif, fontSize: 28, fontWeight: 500, margin: "0 0 16px", color: palette.sageDeep }}>GLP-1 Virtual Visits</h3>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: palette.ink, margin: 0 }}>
                Considering a GLP-1 medication? We offer virtual appointments to talk through your goals, options, and questions — with thoughtful follow-up along the way. All from the comfort of home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <p style={{ fontFamily: serif, fontStyle: "italic", color: palette.sageDeep, fontSize: 16, margin: "0 0 12px" }}>How it works</p>
            <h2 style={{ fontFamily: serif, fontSize: 40, fontWeight: 500, margin: 0 }}>Getting started is simple.</h2>
          </div>
          <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
            {[
              { n: "1", t: "Reach out", d: "Send a message through the form below or give us a call. We'll get back to you within a business day." },
              { n: "2", t: "Schedule a visit", d: "Pick a time that works — in-person or virtual. We'll talk through your goals and answer any questions." },
              { n: "3", t: "Stay connected", d: "Direct messaging and easy follow-ups mean you always have a way to check in. We're here whenever you need us." },
            ].map((s) => (
              <div key={s.n} style={{ textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: palette.sage, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: serif, fontSize: 26, fontWeight: 500, margin: "0 auto 24px" }}>{s.n}</div>
                <h4 style={{ fontFamily: serif, fontSize: 22, fontWeight: 500, margin: "0 0 12px" }}>{s.t}</h4>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: palette.muted, margin: 0, maxWidth: 280, marginInline: "auto" }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSite7 />

      <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: `1px solid ${palette.warm}` }}>
        <p style={{ fontSize: 14, color: palette.muted, margin: 0 }}>
          © 2026 Providence Care Plus · Made with care for our community
        </p>
      </footer>
    </div>
  );
}

function ContactSite7() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  const input: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    background: "#fff",
    border: `1px solid ${palette.warm}`,
    fontSize: 16,
    fontFamily: sans,
    color: palette.ink,
    outline: "none",
  };
  return (
    <section id="contact" style={{ padding: "120px 24px", background: palette.warm }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontFamily: serif, fontStyle: "italic", color: palette.sageDeep, fontSize: 16, margin: "0 0 12px" }}>Say hello</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 500, margin: "0 0 16px" }}>We'd love to hear from you.</h2>
          <p style={{ fontSize: 17, color: palette.muted, margin: 0 }}>Send us a note and we'll be in touch soon.</p>
        </div>
        {sent ? (
          <p style={{ textAlign: "center", color: palette.sageDeep, fontSize: 18, fontFamily: serif }}>Thank you — we'll be in touch soon!</p>
        ) : (
          <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <input required type="text" placeholder="Your name" style={input} />
            <div className="r-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <input required type="email" placeholder="Email" style={input} />
              <input type="tel" placeholder="Phone" style={input} />
            </div>
            <textarea required rows={5} placeholder="How can we help?" style={{ ...input, resize: "none" }} />
            <div style={{ textAlign: "center", marginTop: 12 }}>
              <button type="submit" style={{ padding: "16px 48px", background: palette.sage, color: "#fff", fontSize: 15, fontWeight: 600, border: "none", cursor: "pointer", fontFamily: sans }}>
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
