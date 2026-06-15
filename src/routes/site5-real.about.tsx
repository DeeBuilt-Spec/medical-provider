import { Link } from "react-router-dom";
import providerImg from "../assets/stethoscope.jpg";
import { practice, faqs } from "../lib/practice";
import { t5 } from "./site5-real";
import { useDocumentTitle } from "../lib/useDocumentTitle";

const grade = "linear-gradient(180deg, rgba(46,42,38,0.10) 0%, rgba(85,126,120,0.10) 70%, rgba(46,42,38,0.18) 100%)";
const eyebrow: React.CSSProperties = { fontSize: 11, fontWeight: 600, letterSpacing: "0.24em", textTransform: "uppercase", color: t5.tealDeep, margin: 0 };

export default function AboutPage() {
  useDocumentTitle("About — Providence Care Plus");
  return (
    <div>
      <section style={{ padding: "clamp(56px, 9vh, 110px) 24px" }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 72, alignItems: "center" }}>
          <div>
            <p style={{ ...eyebrow, marginBottom: 22 }}>About the practice</p>
            <h1 style={{ fontFamily: t5.serif, fontSize: "clamp(32px, 4.4vw, 54px)", fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.06, margin: "0 0 12px" }}>{practice.provider.name}</h1>
            <p style={{ fontSize: 14, letterSpacing: "0.04em", color: t5.muted, margin: "0 0 28px" }}>{practice.provider.credentials}</p>
            <p style={{ fontSize: 18, color: t5.ink, lineHeight: 1.8, margin: "0 0 24px", maxWidth: "48ch" }}>
              With {practice.provider.yearsExperience.toLowerCase()} in the medical field, {practice.provider.first} brings a depth of clinical judgment that comes only with experience. {practice.provider.origin}, he founded {practice.name} to offer the kind of attentive, unhurried care that puts the patient relationship first.
            </p>
            <p style={{ fontSize: 18, color: t5.muted, lineHeight: 1.8, margin: "0 0 28px", maxWidth: "48ch" }}>
              Whether you're here for routine primary care, exploring GLP-1 options, or need a physical on short notice, you'll always reach a provider who knows your history and has time to listen.
            </p>
            <p style={{ fontFamily: t5.serif, fontStyle: "italic", fontSize: 18, color: t5.tealDeep, margin: 0 }}>{practice.creoleLine}</p>
          </div>
          <div className="r-hero-img" style={{ position: "relative", height: 500, overflow: "hidden", borderRadius: 12 }}>
            <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: `${grade}, url(${providerImg})`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.95) contrast(1.02)" }} />
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(72px, 11vh, 110px) 24px", background: t5.paperDeep, borderTop: `1px solid ${t5.hair}` }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <p style={{ ...eyebrow, marginBottom: 16 }}>Good to know</p>
          <h2 style={{ fontFamily: t5.serif, fontSize: "clamp(30px, 3.8vw, 48px)", fontWeight: 600, letterSpacing: "-0.01em", margin: "0 0 56px" }}>Questions, answered.</h2>
          <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 80px" }}>
            {faqs.map((f) => (
              <div key={f.q} style={{ padding: "32px 0", borderTop: `1px solid ${t5.hair}` }}>
                <h3 style={{ fontFamily: t5.serif, fontSize: 21, fontWeight: 600, margin: "0 0 12px" }}>{f.q}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.75, color: t5.muted, margin: 0, maxWidth: "44ch" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(64px, 10vh, 100px) 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: t5.serif, fontSize: "clamp(28px, 3.6vw, 44px)", fontWeight: 600, letterSpacing: "-0.01em", margin: "0 0 28px" }}>Care in your language, on your schedule.</h2>
        <Link to="/site5-real/booking" style={{ display: "inline-block", padding: "15px 38px", border: `1px solid ${t5.tealDeep}`, color: t5.tealDeep, fontSize: 13, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", borderRadius: 8 }}>
          Book an Appointment
        </Link>
      </section>
    </div>
  );
}
