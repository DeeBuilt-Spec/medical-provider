import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import heroImg from "../assets/hero-site5.jpg";
import providerImg from "../assets/hero-site4.jpg";

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
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap" },
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
  // TODO: replace with the practitioner's real name + credentials.
  provider: "Marie J. Pierre, APRN, FNP-C",
  providerFirst: "Marie",
  phone: "(555) 012-3456",
  email: "hello@providencecare.plus",
  location: "Serving the greater metro area",
  hours: "Mon–Fri · 8am–5pm",
  languages: "English & Kreyòl Ayisyen",
  greeting: "Byenveni", // Haitian Creole for "Welcome"
};

const palette = {
  bg: "#F5F9FA",
  surface: "#FFFFFF",
  tint: "#E7F3F4",
  ink: "#0F2A2E",
  primary: "#0E7C86",
  primaryDeep: "#0A5A62",
  accent: "#E07856", // warm coral CTA — the extra energy the muted set was missing
  accentDeep: "#C9633F",
  muted: "#5C6E70",
  line: "#E0E9EA",
};

const display = "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif";
const sans = "'Inter', ui-sans-serif, system-ui, sans-serif";

const card: React.CSSProperties = {
  background: palette.surface,
  border: `1px solid ${palette.line}`,
  borderRadius: 16,
  boxShadow: "0 1px 2px rgba(15,42,46,0.04), 0 18px 40px -28px rgba(15,42,46,0.25)",
};

/* --- tiny inline icons (stroke) ------------------------------------------ */
function Icon({ path, size = 22, color = palette.primary }: { path: ReactNode; size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {path}
    </svg>
  );
}
const iconCheck = <polyline points="20 6 9 17 4 12" />;
const iconHeart = <path d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 5 4.5 4.5 0 0 0 2 8.5C2 10.7 3.5 12.5 5 14l7 7Z" />;
const iconVideo = <><rect x="2.5" y="6" width="13" height="12" rx="2.5" /><path d="m15.5 10 6-3v10l-6-3" /></>;
const iconClock = <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>;
const iconGlobe = <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" /></>;
const iconShield = <path d="M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5l-8-3Z" />;

function Site6() {
  return (
    <div style={{ background: palette.bg, color: palette.ink, fontFamily: sans }}>
      {/* Utility bar — bilingual + phone, a small but powerful trust/personal signal */}
      <div style={{ background: palette.primaryDeep, color: "#EaF4F5" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "9px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8, fontSize: 13 }}>
          <span style={{ fontWeight: 500 }}>{practice.greeting} — we see patients in {practice.languages}</span>
          <a href={`tel:${practice.phone.replace(/[^\d]/g, "")}`} style={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}>{practice.phone}</a>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(245,249,250,0.85)", backdropFilter: "blur(10px)", borderBottom: `1px solid ${palette.line}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <span style={{ fontFamily: display, fontSize: 19, fontWeight: 800, letterSpacing: "-0.02em", color: palette.ink }}>
            {practice.name}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <div className="r-hide" style={{ display: "flex", gap: 28, fontSize: 14.5, fontWeight: 500, color: palette.muted }}>
              <a href="#provider" style={{ color: "inherit", textDecoration: "none" }}>Your Provider</a>
              <a href="#services" style={{ color: "inherit", textDecoration: "none" }}>Services</a>
              <a href="#how" style={{ color: "inherit", textDecoration: "none" }}>How It Works</a>
              <a href="#faq" style={{ color: "inherit", textDecoration: "none" }}>FAQ</a>
            </div>
            <a href="#contact" style={{ padding: "11px 20px", background: palette.accent, color: "#fff", borderRadius: 10, fontSize: 14.5, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>
              Book a Visit
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "84px 24px 96px" }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 64, alignItems: "center" }}>
          <div>
            <span style={{ display: "inline-block", padding: "7px 14px", background: palette.tint, color: palette.primaryDeep, borderRadius: 999, fontSize: 13, fontWeight: 600, marginBottom: 24 }}>
              Direct Primary Care · GLP-1 Virtual Visits
            </span>
            <h1 style={{ fontFamily: display, fontSize: "clamp(38px, 5.2vw, 62px)", lineHeight: 1.05, fontWeight: 800, letterSpacing: "-0.025em", margin: "0 0 22px" }}>
              Primary care that actually has time for you.
            </h1>
            <p style={{ fontSize: 19, color: palette.muted, lineHeight: 1.6, margin: "0 0 36px", maxWidth: "46ch" }}>
              A licensed nurse practitioner offering unhurried, modern healthcare — in person or by video. Same-week appointments, straight answers, no runaround.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
              <a href="#contact" style={{ padding: "15px 28px", background: palette.accent, color: "#fff", borderRadius: 11, fontSize: 15.5, fontWeight: 600, textDecoration: "none" }}>
                Book an Appointment
              </a>
              <a href="#how" style={{ padding: "15px 26px", background: palette.surface, color: palette.ink, border: `1px solid ${palette.line}`, borderRadius: 11, fontSize: 15.5, fontWeight: 600, textDecoration: "none" }}>
                How it works
              </a>
            </div>
            <div style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
              {["Licensed NP-C", "Virtual & in-person", "No insurance hassle"].map((t) => (
                <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500, color: palette.ink }}>
                  <Icon path={iconCheck} size={18} color={palette.primary} />
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div className="r-hero-img" style={{ position: "relative", height: 480, borderRadius: 20, overflow: "hidden", boxShadow: "0 30px 60px -30px rgba(15,42,46,0.45)" }}>
              <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
            </div>
            {/* floating stat card — a modern, app-like polish the other 5 don't have */}
            <div className="r-hide" style={{ ...card, position: "absolute", left: -24, bottom: -24, padding: "18px 22px", display: "flex", alignItems: "center", gap: 14, borderRadius: 14 }}>
              <div style={{ width: 42, height: 42, borderRadius: 11, background: palette.tint, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon path={iconClock} size={22} />
              </div>
              <div>
                <div style={{ fontFamily: display, fontWeight: 700, fontSize: 16 }}>Same-week visits</div>
                <div style={{ fontSize: 13, color: palette.muted }}>Most patients seen in days</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / stats strip */}
      <section style={{ padding: "0 24px" }}>
        <div className="r-stack" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
          {[
            { icon: iconShield, big: "10+ yrs", small: "Clinical experience" },
            { icon: iconClock, big: "Same week", small: "Typical appointment" },
            { icon: iconGlobe, big: "2 languages", small: practice.languages },
            { icon: iconVideo, big: "Virtual + in-person", small: "However suits you" },
          ].map((s) => (
            <div key={s.small} style={{ ...card, padding: "24px 22px", display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: palette.tint, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon path={s.icon} />
              </div>
              <div style={{ fontFamily: display, fontWeight: 700, fontSize: 20, letterSpacing: "-0.01em" }}>{s.big}</div>
              <div style={{ fontSize: 14, color: palette.muted }}>{s.small}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Provider bio — the biggest "this is a real practice" signal */}
      <section id="provider" className="r-pad-y" style={{ padding: "110px 24px" }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 64, alignItems: "center" }}>
          <div className="r-hero-img" style={{ position: "relative", height: 440, borderRadius: 20, overflow: "hidden", border: `1px solid ${palette.line}` }}>
            <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: `url(${providerImg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
          </div>
          <div>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: palette.primary }}>Meet your provider</span>
            <h2 style={{ fontFamily: display, fontSize: "clamp(30px, 3.6vw, 42px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "14px 0 8px" }}>
              {practice.provider}
            </h2>
            <p style={{ fontSize: 17.5, color: palette.muted, lineHeight: 1.7, margin: "16px 0" }}>
              Hi, I'm {practice.providerFirst}. I started {practice.name} because I believe healthcare should feel personal — appointments that aren't rushed, a provider who remembers your story, and care that fits your real life.
            </p>
            <p style={{ fontSize: 17.5, color: palette.muted, lineHeight: 1.7, margin: "16px 0 28px" }}>
              Whether you're here for routine primary care or exploring GLP-1 options, you'll always reach a familiar, friendly face.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "12px 18px", background: palette.tint, borderRadius: 12 }}>
              <Icon path={iconGlobe} size={20} color={palette.primaryDeep} />
              <span style={{ fontSize: 14.5, fontWeight: 600, color: palette.primaryDeep }}>
                Languages: {practice.languages} ({practice.greeting}!)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="r-pad-y" style={{ padding: "100px 24px", background: palette.tint }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: palette.primary }}>What we offer</span>
            <h2 style={{ fontFamily: display, fontSize: "clamp(30px, 3.6vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "14px 0 0" }}>Two ways we care for you</h2>
          </div>
          <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
            {[
              { icon: iconHeart, t: "Primary Care", d: "Annual checkups, sick visits, and chronic care for conditions like blood pressure, diabetes, and thyroid. Longer appointments, same-day messages, and a provider who knows you." },
              { icon: iconVideo, t: "GLP-1 Virtual Visits", d: "Considering semaglutide or tirzepatide? We meet by video to talk through eligibility, expectations, and the journey — with honest guidance and monthly check-ins." },
            ].map((s) => (
              <div key={s.t} style={{ ...card, padding: "36px 34px" }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: palette.tint, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
                  <Icon path={s.icon} size={26} />
                </div>
                <h3 style={{ fontFamily: display, fontSize: 24, fontWeight: 700, margin: "0 0 14px", letterSpacing: "-0.01em" }}>{s.t}</h3>
                <p style={{ fontSize: 16.5, lineHeight: 1.7, color: palette.muted, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="r-pad-y" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: palette.primary }}>How it works</span>
            <h2 style={{ fontFamily: display, fontSize: "clamp(30px, 3.6vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "14px 0 0" }}>Getting started is simple</h2>
          </div>
          <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { n: "1", t: "Reach out", d: "Send a message or call. We respond within one business day to find a time that works." },
              { n: "2", t: "Meet your provider", d: "A real conversation — in person or by video — about your health, goals, and the right plan." },
              { n: "3", t: "Stay connected", d: "Message anytime, schedule easy follow-ups, and keep care moving without the runaround." },
            ].map((s) => (
              <div key={s.n} style={{ ...card, padding: "32px 30px", position: "relative" }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: palette.accent, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: display, fontWeight: 700, fontSize: 20, marginBottom: 20 }}>{s.n}</div>
                <h4 style={{ fontFamily: display, fontSize: 20, fontWeight: 700, margin: "0 0 10px" }}>{s.t}</h4>
                <p style={{ fontSize: 15.5, lineHeight: 1.65, color: palette.muted, margin: 0 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: "0 24px 100px" }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            { q: "I've never had a provider actually remember my history without scrolling through a chart. It feels like real care again.", a: "Patient since 2024" },
            { q: "Being able to talk through GLP-1 options honestly — in my own language — made all the difference for me.", a: "GLP-1 patient" },
          ].map((t) => (
            <figure key={t.a} style={{ ...card, padding: "34px 32px", margin: 0 }}>
              <div style={{ color: palette.accent, fontFamily: display, fontSize: 40, lineHeight: 1, marginBottom: 8 }}>“</div>
              <blockquote style={{ margin: "0 0 18px", fontSize: 18, lineHeight: 1.6, fontWeight: 500, color: palette.ink }}>{t.q}</blockquote>
              <figcaption style={{ fontSize: 14, color: palette.muted }}>{t.a}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ — substance that builds trust and explains the DPC model */}
      <section id="faq" className="r-pad-y" style={{ padding: "100px 24px", background: palette.tint }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: palette.primary }}>Good to know</span>
            <h2 style={{ fontFamily: display, fontSize: "clamp(30px, 3.6vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "14px 0 0" }}>Questions, answered</h2>
          </div>
          <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[
              { q: "What is direct primary care?", a: "It's a simple, membership-style relationship with your provider — more time, direct access, and clear costs, without billing surprises." },
              { q: "Do you take my insurance?", a: "We'll explain exactly how it works at your first visit so there are no surprises. Many patients use us alongside their existing coverage." },
              { q: "Can I be seen virtually?", a: "Yes. Primary care can be in person or by video, and GLP-1 visits are fully virtual — whatever fits your schedule." },
              { q: "Which languages do you speak?", a: `We see patients in ${practice.languages}, so you can talk through your care in the language you're most comfortable with.` },
            ].map((f) => (
              <div key={f.q} style={{ ...card, padding: "28px 30px" }}>
                <h4 style={{ fontFamily: display, fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>{f.q}</h4>
                <p style={{ fontSize: 15.5, lineHeight: 1.65, color: palette.muted, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSite6 />

      {/* Footer */}
      <footer style={{ background: palette.ink, color: "#C7D6D7" }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 24px", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 48 }}>
          <div>
            <div style={{ fontFamily: display, fontSize: 19, fontWeight: 800, color: "#fff", marginBottom: 12 }}>{practice.name}</div>
            <p style={{ fontSize: 14.5, lineHeight: 1.7, margin: 0, maxWidth: "34ch" }}>
              Modern, personal primary care and GLP-1 virtual visits. {practice.greeting} — care in {practice.languages}.
            </p>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7FA0A2", marginBottom: 14 }}>Contact</div>
            <p style={{ margin: "0 0 8px", fontSize: 14.5 }}>{practice.phone}</p>
            <p style={{ margin: 0, fontSize: 14.5 }}>{practice.email}</p>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7FA0A2", marginBottom: 14 }}>Visit</div>
            <p style={{ margin: "0 0 8px", fontSize: 14.5 }}>{practice.hours}</p>
            <p style={{ margin: 0, fontSize: 14.5 }}>{practice.location}</p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 24px", fontSize: 13, color: "#7FA0A2" }}>
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
  const label: React.CSSProperties = { fontSize: 13.5, fontWeight: 600, color: palette.ink, marginBottom: 7, display: "block" };
  const input: React.CSSProperties = {
    width: "100%",
    padding: "13px 15px",
    background: palette.surface,
    border: `1px solid ${palette.line}`,
    borderRadius: 10,
    fontSize: 15.5,
    fontFamily: sans,
    color: palette.ink,
    outline: "none",
  };
  return (
    <section id="contact" className="r-pad-y" style={{ padding: "110px 24px" }}>
      <div className="r-stack r-gap" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 56, alignItems: "start" }}>
        <div>
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: palette.primary }}>Contact</span>
          <h2 style={{ fontFamily: display, fontSize: "clamp(30px, 3.6vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", margin: "14px 0 18px" }}>
            Let's get you scheduled
          </h2>
          <p style={{ fontSize: 17, color: palette.muted, lineHeight: 1.7, margin: "0 0 32px" }}>
            Send a note and we'll get back to you — usually the same day. Prefer to talk? Give us a call.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { icon: iconClock, k: "Hours", v: practice.hours },
              { icon: iconHeart, k: "Phone", v: practice.phone },
              { icon: iconVideo, k: "Email", v: practice.email },
              { icon: iconGlobe, k: "Languages", v: `${practice.languages} (${practice.greeting}!)` },
            ].map((r) => (
              <div key={r.k} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 42, height: 42, borderRadius: 11, background: palette.tint, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon path={r.icon} size={20} />
                </div>
                <div>
                  <div style={{ fontSize: 12.5, color: palette.muted }}>{r.k}</div>
                  <div style={{ fontSize: 15.5, fontWeight: 600 }}>{r.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ ...card, padding: "36px 34px" }}>
          {sent ? (
            <p style={{ color: palette.primary, fontSize: 18, fontWeight: 600, margin: 0 }}>Thank you — we'll be in touch soon!</p>
          ) : (
            <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div>
                <label style={label}>Full name</label>
                <input required type="text" style={input} />
              </div>
              <div className="r-stack" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
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
              <button type="submit" style={{ padding: "15px 28px", background: palette.accent, color: "#fff", fontSize: 15.5, fontWeight: 600, border: "none", borderRadius: 11, cursor: "pointer", fontFamily: sans, marginTop: 4 }}>
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
