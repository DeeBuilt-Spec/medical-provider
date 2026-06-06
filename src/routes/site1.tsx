import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroImg from "../assets/hero-site1.jpg";
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
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@300;400;500&display=swap" },
    ],
  }),
  component: Site1,
});

const palette = {
  cream: "#FDFCFB",
  stone: "#F4F2EF",
  sage: "#6B705C",
  ink: "#1A1C19",
};

const serif = "'DM Serif Display', Georgia, serif";
const sans = "'Inter', ui-sans-serif, system-ui, sans-serif";

function Site1() {
  const offset = useParallax(0.3);
  return (
    <div style={{ background: palette.cream, color: palette.ink, fontFamily: sans }}>
      {/* Hero */}
      <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(253,252,251,0.55), rgba(253,252,251,0.65)), url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translate3d(0, ${offset}px, 0)`,
            willChange: "transform",
          }}
        />
        <div style={{ position: "relative", maxWidth: 960 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase", color: palette.sage, margin: 0, fontWeight: 500 }}>
            Providence Care Plus
          </p>
          <h1 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(44px, 6.5vw, 88px)", lineHeight: 1.05, letterSpacing: "-0.01em", margin: "32px 0 40px" }}>
            Healthcare designed around <br /> the rhythm of your life.
          </h1>
          <a
            href="#contact"
            style={{ display: "inline-block", padding: "20px 44px", background: palette.ink, color: palette.cream, fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", textDecoration: "none" }}
          >
            Book an Appointment
          </a>
        </div>
      </section>

      {/* About */}
      <section style={{ padding: "160px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: palette.sage, margin: "0 0 48px" }}>The Practice</p>
          <p style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 300, lineHeight: 1.5, color: "rgba(26,28,25,0.85)", margin: 0 }}>
            Providence Care Plus is a direct primary care practice led by a dedicated nurse practitioner. We strip away the complexity of modern healthcare to focus on what matters: the relationship between provider and patient. Here, you aren't a chart number — you are a partner in wellness.
          </p>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "120px 24px", borderTop: "1px solid rgba(26,28,25,0.06)" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 80 }}>
          <div>
            <h3 style={{ fontFamily: serif, fontSize: 40, fontWeight: 400, margin: "0 0 24px" }}>Primary Care</h3>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(26,28,25,0.7)", margin: 0 }}>
              Unrushed visits, direct access to your provider, and a focus on preventative wellness. Our Direct Primary Care model ensures that healthcare remains personal, accessible, and comprehensive for every stage of life.
            </p>
          </div>
          <div>
            <h3 style={{ fontFamily: serif, fontSize: 40, fontWeight: 400, margin: "0 0 24px" }}>GLP-1 Virtual Care</h3>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "rgba(26,28,25,0.7)", margin: 0 }}>
              Modern medical weight management through virtual appointments. We provide personalized GLP-1 treatment plans with continuous monitoring and support, all from the comfort and privacy of your home.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "140px 24px", background: palette.stone }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: palette.sage, textAlign: "center", margin: "0 0 80px" }}>The Path to Care</p>
          {[
            { n: "01", t: "Initial Consultation", d: "A comprehensive virtual or in-person meeting to discuss your health history, goals, and needs." },
            { n: "02", t: "Personalized Plan", d: "We develop a tailored care roadmap, whether routine primary care or a specialized GLP-1 protocol." },
            { n: "03", t: "Ongoing Connection", d: "Direct messaging and follow-up visits ensure you are supported every step of the way." },
          ].map((s, i, arr) => (
            <div key={s.n} className="r-stack" style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 24, padding: "44px 0", borderBottom: i === arr.length - 1 ? "none" : "1px solid rgba(26,28,25,0.1)" }}>
              <span style={{ fontFamily: serif, fontSize: 32, color: palette.sage }}>{s.n}</span>
              <div style={{ maxWidth: 600 }}>
                <h4 style={{ fontSize: 20, fontWeight: 500, margin: "0 0 12px" }}>{s.t}</h4>
                <p style={{ color: "rgba(26,28,25,0.6)", margin: 0, lineHeight: 1.6 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <Contact />

      <footer style={{ padding: "48px 24px", textAlign: "center", borderTop: "1px solid rgba(26,28,25,0.06)" }}>
        <p style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(26,28,25,0.4)", margin: 0 }}>
          © Providence Care Plus — All Rights Reserved
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
    borderBottom: "1px solid rgba(26,28,25,0.2)",
    fontSize: 16,
    fontFamily: sans,
    color: palette.ink,
    outline: "none",
  };
  return (
    <section id="contact" style={{ padding: "140px 24px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <h2 style={{ fontFamily: serif, fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400, textAlign: "center", margin: "0 0 56px" }}>
          Start a Conversation
        </h2>
        {sent ? (
          <p style={{ textAlign: "center", color: palette.sage, fontSize: 18 }}>Thank you — we'll be in touch shortly.</p>
        ) : (
          <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            <input required type="text" placeholder="Full Name" style={inputStyle} />
            <div className="r-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
              <input required type="email" placeholder="Email Address" style={inputStyle} />
              <input type="tel" placeholder="Phone Number" style={inputStyle} />
            </div>
            <textarea required rows={4} placeholder="Your Message" style={{ ...inputStyle, resize: "none" }} />
            <div style={{ textAlign: "center", paddingTop: 24 }}>
              <button type="submit" style={{ padding: "20px 64px", background: palette.ink, color: palette.cream, fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", border: "none", cursor: "pointer", fontFamily: sans }}>
                Send Inquiry
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
