import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import heroImg from "../assets/hero-site5.jpg";
import providerImg from "../assets/stethoscope.jpg";
import { useParallax } from "../lib/useParallax";

export const Route = createFileRoute("/site6")({
  head: () => ({
    meta: [
      { title: "Providence Care Plus — Modern Primary Care You Can Trust" },
      { name: "description", content: "Direct primary care and GLP-1 virtual visits from a licensed nurse practitioner. Same-week appointments, English & Kreyòl Ayisyen." },
      { property: "og:title", content: "Providence Care Plus" },
      { property: "og:description", content: "Modern, trustworthy primary care and GLP-1 virtual visits." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400;1,6..72,500&family=Inter:wght@400;500&display=swap" },
    ],
  }),
  component: Site6,
});

/*
 * Single source of truth for everything client-specific. To reskin this
 * direction for a different practice, edit only this object (and the palette
 * below) — nothing personal is hard-coded into the layout further down.
 */
const practice = {
  name: "Providence Care Plus",
  // Placeholder name + credentials until the real practitioner's are supplied.
  provider: "Jean Joseph, FNP-C",
  phone: "(555) 012-3456",
  email: "hello@providencecare.plus",
  location: "Serving the greater metro area",
  hours: "Mon–Fri · 8am–5pm",
  languages: "English & Kreyòl Ayisyen",
  greeting: "Byenveni", // Haitian Creole for "Welcome"
};

// Quietly expensive — tonal teal muted to a single restrained accent, warm
// neutral paper, deep ink. No second accent (the coral is gone).
const palette = {
  paper: "#F6F4EF",
  paperDeep: "#EEEBE3",
  ink: "#1E2A2B",
  teal: "#2E5A5E",
  tealDeep: "#21464A",
  muted: "#6E6A62",
  hair: "rgba(30,42,43,0.14)",
};

const serif = "'Newsreader', Georgia, serif";
const sans = "'Inter', ui-sans-serif, system-ui, sans-serif";

const grade =
  "linear-gradient(180deg, rgba(30,42,43,0.14) 0%, rgba(46,90,94,0.10) 65%, rgba(30,42,43,0.22) 100%)";
const photoFilter = "saturate(0.92) contrast(1.02)";

const eyebrow: React.CSSProperties = { fontSize: 11, fontWeight: 500, letterSpacing: "0.26em", textTransform: "uppercase", color: palette.teal, margin: 0 };

function Site6() {
  const offset = useParallax(0.2);
  return (
    <div style={{ background: palette.paper, color: palette.ink, fontFamily: sans }}>
      {/* Utility bar — bilingual + phone, a quiet tonal band of plain text */}
      <div style={{ background: palette.tealDeep, color: "#E7EDEC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "10px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8, fontSize: 12, letterSpacing: "0.04em" }}>
          <span>{practice.greeting} — we see patients in {practice.languages}</span>
          <a href={`tel:${practice.phone.replace(/[^\d]/g, "")}`} style={{ color: "inherit", textDecoration: "none" }}>{practice.phone}</a>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(246,244,239,0.88)", backdropFilter: "blur(10px)", borderBottom: `1px solid ${palette.hair}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <span style={{ fontFamily: serif, fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em", color: palette.ink }}>
            {practice.name}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <div className="r-hide" style={{ display: "flex", gap: 32, fontSize: 13.5, color: palette.muted }}>
              <a href="#provider" style={{ color: "inherit", textDecoration: "none" }}>Your Provider</a>
              <a href="#services" style={{ color: "inherit", textDecoration: "none" }}>Services</a>
              <a href="#how" style={{ color: "inherit", textDecoration: "none" }}>How It Works</a>
              <a href="#faq" style={{ color: "inherit", textDecoration: "none" }}>FAQ</a>
            </div>
            <a href="#contact" style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: palette.teal, textDecoration: "none", borderBottom: `1px solid ${palette.teal}`, paddingBottom: 5, whiteSpace: "nowrap" }}>
              Book a Visit
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "clamp(72px, 10vh, 104px) 24px clamp(80px, 11vh, 104px)" }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 72, alignItems: "center" }}>
          <div>
            <p style={{ ...eyebrow, marginBottom: 28 }}>Direct Primary Care · GLP-1 Virtual Visits</p>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(42px, 5.6vw, 76px)", lineHeight: 1.04, fontWeight: 400, letterSpacing: "-0.015em", margin: "0 0 28px" }}>
              Primary care that has time for you.
            </h1>
            <p style={{ fontSize: 19, color: palette.muted, lineHeight: 1.7, margin: "0 0 44px", maxWidth: "46ch" }}>
              A licensed nurse practitioner offering unhurried, modern healthcare, in person or by video, with same-week appointments and clear answers to your questions.
            </p>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap", alignItems: "center", marginBottom: 44 }}>
              <a href="#contact" style={{ padding: "15px 32px", border: `1px solid ${palette.tealDeep}`, color: palette.tealDeep, fontSize: 13, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none" }}>
                Book an Appointment
              </a>
              <a href="#how" style={{ color: palette.tealDeep, fontSize: 15, textDecoration: "none", borderBottom: `1px solid ${palette.hair}`, paddingBottom: 4 }}>
                How it works →
              </a>
            </div>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap", fontSize: 13.5, color: palette.muted, borderTop: `1px solid ${palette.hair}`, paddingTop: 24 }}>
              {["Licensed NP-C", "Virtual & in-person", "Direct primary care"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className="r-hero-img" style={{ position: "relative", height: 520, overflow: "hidden" }}>
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: "-8% 0",
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

      {/* Quiet tonal facts band — plain text, no icons, no cards */}
      <section style={{ background: palette.paperDeep, borderTop: `1px solid ${palette.hair}`, borderBottom: `1px solid ${palette.hair}` }}>
        <div className="r-stack" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {[
            { big: "20+ years", small: "Clinical experience" },
            { big: "Same week", small: "Typical appointment" },
            { big: "Two languages", small: practice.languages },
            { big: "Virtual & in-person", small: "However suits you" },
          ].map((s, i) => (
            <div key={s.small} style={{ padding: "44px 28px", borderLeft: i === 0 ? "none" : `1px solid ${palette.hair}` }}>
              <div style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(22px, 2.2vw, 28px)", letterSpacing: "-0.01em", marginBottom: 8 }}>{s.big}</div>
              <div style={{ fontSize: 13.5, color: palette.muted, lineHeight: 1.5 }}>{s.small}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Provider bio — plain editorial block, no box */}
      <section id="provider" className="r-pad-y" style={{ padding: "clamp(96px, 14vh, 132px) 24px" }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 72, alignItems: "center" }}>
          <div className="r-hero-img" style={{ position: "relative", height: 460, overflow: "hidden" }}>
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
            <p style={{ ...eyebrow, marginBottom: 24 }}>Meet your provider</p>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400, letterSpacing: "-0.015em", lineHeight: 1.04, margin: "0 0 28px" }}>
              {practice.provider}
            </h2>
            <p style={{ fontSize: 18, color: palette.ink, lineHeight: 1.8, margin: "0 0 24px", maxWidth: "48ch" }}>
              With more than twenty years in the medical field, Jean brings a depth of clinical judgment that comes only with experience. Originally from Haiti, he founded {practice.name} to offer the kind of attentive, unhurried care that puts the patient relationship first.
            </p>
            <p style={{ fontSize: 18, color: palette.muted, lineHeight: 1.8, margin: "0 0 28px", maxWidth: "48ch" }}>
              Whether you're here for routine primary care or exploring GLP-1 options, you'll always reach a familiar, attentive provider who knows your history.
            </p>
            <p style={{ fontFamily: serif, fontStyle: "italic", fontSize: 18, color: palette.teal, margin: 0 }}>
              {practice.languages} — {practice.greeting}.
            </p>
          </div>
        </div>
      </section>

      {/* Services — two-column text, hairline ruled, no cards */}
      <section id="services" className="r-pad-y" style={{ padding: "clamp(96px, 14vh, 120px) 24px", background: palette.paperDeep, borderTop: `1px solid ${palette.hair}` }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <p style={{ ...eyebrow, marginBottom: 16 }}>What we offer</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 3.8vw, 48px)", fontWeight: 400, letterSpacing: "-0.015em", margin: "0 0 64px" }}>Two ways we care for you.</h2>
          <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, borderTop: `1px solid ${palette.hair}`, paddingTop: 56 }}>
            {[
              { t: "Primary Care", d: "Annual checkups, sick visits, and chronic care for conditions like blood pressure, diabetes, and thyroid. Longer appointments, same-day messages, and a provider who knows you." },
              { t: "GLP-1 Virtual Visits", d: "Considering semaglutide or tirzepatide? We meet by video to talk through eligibility, expectations, and the journey, with honest guidance and monthly check-ins." },
            ].map((s) => (
              <div key={s.t}>
                <h3 style={{ fontFamily: serif, fontSize: "clamp(24px, 2.6vw, 32px)", fontWeight: 400, margin: "0 0 18px", color: palette.tealDeep }}>{s.t}</h3>
                <p style={{ fontSize: 17, lineHeight: 1.8, color: palette.muted, margin: 0, maxWidth: "44ch" }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — numbered editorial flow, no cards, no icon badges */}
      <section id="how" className="r-pad-y" style={{ padding: "clamp(96px, 14vh, 120px) 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{ ...eyebrow, marginBottom: 16 }}>How it works</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 3.8vw, 48px)", fontWeight: 400, letterSpacing: "-0.015em", margin: "0 0 64px" }}>Getting started is simple.</h2>
          {[
            { n: "01", t: "Reach out", d: "Send a message or call. We respond within one business day to find a time that works." },
            { n: "02", t: "Meet your provider", d: "A real conversation, in person or by video, about your health, goals, and the right plan." },
            { n: "03", t: "Stay connected", d: "Message anytime, schedule easy follow-ups, and keep your care moving forward." },
          ].map((s, i, arr) => (
            <div key={s.n} className="r-stack" style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 32, padding: "44px 0", borderBottom: i === arr.length - 1 ? "none" : `1px solid ${palette.hair}` }}>
              <span style={{ fontFamily: serif, fontSize: "clamp(40px, 5vw, 60px)", fontWeight: 400, color: palette.teal, lineHeight: 1 }}>{s.n}</span>
              <div style={{ maxWidth: 620 }}>
                <h4 style={{ fontFamily: serif, fontSize: 24, fontWeight: 400, margin: "0 0 12px" }}>{s.t}</h4>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: palette.muted, margin: 0 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Voices — plain editorial pull-quotes, no boxes */}
      <section style={{ padding: "clamp(40px, 6vh, 64px) 24px clamp(96px, 14vh, 120px)" }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, borderTop: `1px solid ${palette.hair}`, paddingTop: 64 }}>
          {[
            { q: "My provider remembers my history without scrolling through a chart. It feels like real care again.", a: "Patient since 2024" },
            { q: "Being able to talk through GLP-1 options honestly, in my own language, made all the difference for me.", a: "GLP-1 patient" },
          ].map((t) => (
            <figure key={t.a} style={{ margin: 0 }}>
              <blockquote style={{ margin: "0 0 20px", fontFamily: serif, fontSize: "clamp(21px, 2.2vw, 27px)", lineHeight: 1.4, fontWeight: 400, fontStyle: "italic", color: palette.ink }}>
                “{t.q}”
              </blockquote>
              <figcaption style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: palette.muted }}>{t.a}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ — plain editorial text blocks, hairline ruled, no cards */}
      <section id="faq" className="r-pad-y" style={{ padding: "clamp(96px, 14vh, 120px) 24px", background: palette.paperDeep, borderTop: `1px solid ${palette.hair}` }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <p style={{ ...eyebrow, marginBottom: 16 }}>Good to know</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 3.8vw, 48px)", fontWeight: 400, letterSpacing: "-0.015em", margin: "0 0 56px" }}>Questions, answered.</h2>
          <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 80px" }}>
            {[
              { q: "What is direct primary care?", a: "It's a simple, membership-style relationship with your provider: more time, direct access, and clear, predictable costs." },
              { q: "Do you take my insurance?", a: "We'll explain exactly how it works at your first visit. Many patients use us alongside their existing coverage." },
              { q: "Can I be seen virtually?", a: "Yes. Primary care can be in person or by video, and GLP-1 visits are fully virtual, whichever fits your schedule." },
              { q: "Which languages do you speak?", a: `We see patients in ${practice.languages}, so you can talk through your care in the language you're most comfortable with.` },
            ].map((f) => (
              <div key={f.q} style={{ padding: "32px 0", borderTop: `1px solid ${palette.hair}` }}>
                <h4 style={{ fontFamily: serif, fontSize: 21, fontWeight: 400, margin: "0 0 12px" }}>{f.q}</h4>
                <p style={{ fontSize: 16, lineHeight: 1.75, color: palette.muted, margin: 0, maxWidth: "42ch" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSite6 />

      {/* Footer */}
      <footer style={{ background: palette.ink, color: "#B9C5C4" }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1120, margin: "0 auto", padding: "64px 24px", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 48 }}>
          <div>
            <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 400, color: "#fff", marginBottom: 14 }}>{practice.name}</div>
            <p style={{ fontSize: 14.5, lineHeight: 1.8, margin: 0, maxWidth: "34ch" }}>
              Modern, personal primary care and GLP-1 virtual visits. {practice.greeting} — care in {practice.languages}.
            </p>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7C8E8D", marginBottom: 16 }}>Contact</div>
            <p style={{ margin: "0 0 8px", fontSize: 14.5 }}>{practice.phone}</p>
            <p style={{ margin: 0, fontSize: 14.5 }}>{practice.email}</p>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7C8E8D", marginBottom: 16 }}>Visit</div>
            <p style={{ margin: "0 0 8px", fontSize: 14.5 }}>{practice.hours}</p>
            <p style={{ margin: 0, fontSize: 14.5 }}>{practice.location}</p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ maxWidth: 1120, margin: "0 auto", padding: "22px 24px", fontSize: 12.5, color: "#7C8E8D" }}>
            © 2026 {practice.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactSite6() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  const label: React.CSSProperties = { fontSize: 11, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: palette.muted, marginBottom: 8, display: "block" };
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
    <section id="contact" className="r-pad-y" style={{ padding: "clamp(96px, 14vh, 132px) 24px" }}>
      <div className="r-stack r-gap" style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 72, alignItems: "start" }}>
        <div>
          <p style={{ ...eyebrow, marginBottom: 20 }}>Contact</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 3.8vw, 48px)", fontWeight: 400, letterSpacing: "-0.015em", margin: "0 0 20px", lineHeight: 1.08 }}>
            Let's get you scheduled.
          </h2>
          <p style={{ fontSize: 17, color: palette.muted, lineHeight: 1.7, margin: "0 0 40px" }}>
            Send a note and we'll get back to you, usually the same day. Prefer to talk? Give us a call.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              { k: "Hours", v: practice.hours },
              { k: "Phone", v: practice.phone },
              { k: "Email", v: practice.email },
              { k: "Languages", v: `${practice.languages} (${practice.greeting})` },
            ].map((r, i) => (
              <div key={r.k} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "16px 0", borderTop: i === 0 ? `1px solid ${palette.hair}` : "none", borderBottom: `1px solid ${palette.hair}` }}>
                <span style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: palette.muted }}>{r.k}</span>
                <span style={{ fontSize: 15, color: palette.ink, textAlign: "right" }}>{r.v}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {sent ? (
            <p style={{ color: palette.teal, fontSize: 18, fontFamily: serif, fontStyle: "italic", margin: 0 }}>Thank you — we'll be in touch soon.</p>
          ) : (
            <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <div>
                <label style={label}>Full name</label>
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
                <label style={label}>What can we help with?</label>
                <select style={input}>
                  <option>Primary care</option>
                  <option>GLP-1 virtual visit</option>
                  <option>General question</option>
                </select>
              </div>
              <div>
                <label style={label}>Message</label>
                <textarea required rows={4} style={{ ...input, resize: "none" }} />
              </div>
              <button type="submit" style={{ padding: "15px 36px", background: "transparent", border: `1px solid ${palette.tealDeep}`, color: palette.tealDeep, fontSize: 13, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", cursor: "pointer", fontFamily: sans, alignSelf: "flex-start", marginTop: 8 }}>
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
