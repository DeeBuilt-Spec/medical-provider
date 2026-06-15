import { Link } from "react-router-dom";
import providerImg from "../assets/stethoscope.jpg";
import { practice, faqs } from "../lib/practice";
import { t6 } from "./site6-real";
import { useDocumentTitle } from "../lib/useDocumentTitle";

const grade = "linear-gradient(180deg, rgba(30,42,43,0.16) 0%, rgba(46,90,94,0.10) 65%, rgba(30,42,43,0.24) 100%)";
const eyebrow: React.CSSProperties = { fontSize: 11, fontWeight: 500, letterSpacing: "0.26em", textTransform: "uppercase", color: t6.teal, margin: 0 };

export default function AboutPage() {
  useDocumentTitle("About — Providence Care Plus");
  return (
    <div>
      {/* Provider */}
      <section style={{ padding: "clamp(64px, 10vh, 120px) 24px" }}>
        <div className="r-stack r-gap" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 72, alignItems: "center" }}>
          <div className="r-hero-img" style={{ position: "relative", height: 520, overflow: "hidden" }}>
            <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: `${grade}, url(${providerImg})`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.92) contrast(1.02)" }} />
          </div>
          <div>
            <p style={{ ...eyebrow, marginBottom: 22 }}>About the practice</p>
            <h1 style={{ fontFamily: t6.serif, fontSize: "clamp(32px, 4.4vw, 56px)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.04, margin: "0 0 12px" }}>{practice.provider.name}</h1>
            <p style={{ fontSize: 14, letterSpacing: "0.06em", color: t6.muted, margin: "0 0 28px" }}>{practice.provider.credentials}</p>
            <p style={{ fontSize: 18, color: t6.ink, lineHeight: 1.8, margin: "0 0 24px", maxWidth: "48ch" }}>
              With {practice.provider.yearsExperience.toLowerCase()} in the medical field, {practice.provider.first} brings a depth of clinical judgment that comes only with experience. {practice.provider.origin}, he founded {practice.name} to offer the kind of attentive, unhurried care that puts the patient relationship first.
            </p>
            <p style={{ fontSize: 18, color: t6.muted, lineHeight: 1.8, margin: "0 0 28px", maxWidth: "48ch" }}>
              Whether you're here for routine primary care, exploring GLP-1 options, or need a physical on short notice, you'll always reach a provider who knows your history and has time to listen.
            </p>
            <p style={{ fontFamily: t6.serif, fontStyle: "italic", fontSize: 18, color: t6.teal, margin: 0 }}>{practice.creoleLine}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "clamp(80px, 12vh, 120px) 24px", background: t6.paperDeep, borderTop: `1px solid ${t6.hair}` }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <p style={{ ...eyebrow, marginBottom: 16 }}>Good to know</p>
          <h2 style={{ fontFamily: t6.serif, fontSize: "clamp(30px, 3.6vw, 46px)", fontWeight: 400, letterSpacing: "-0.015em", margin: "0 0 56px" }}>Questions, answered.</h2>
          <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 80px" }}>
            {faqs.map((f) => (
              <div key={f.q} style={{ padding: "32px 0", borderTop: `1px solid ${t6.hair}` }}>
                <h3 style={{ fontFamily: t6.serif, fontSize: 21, fontWeight: 400, margin: "0 0 12px" }}>{f.q}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.75, color: t6.muted, margin: 0, maxWidth: "44ch" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "clamp(72px, 11vh, 110px) 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: t6.serif, fontSize: "clamp(28px, 3.6vw, 44px)", fontWeight: 400, letterSpacing: "-0.015em", margin: "0 0 28px" }}>Care in your language, on your schedule.</h2>
        <Link to="/site6-real/booking" style={{ display: "inline-block", padding: "16px 40px", border: `1px solid ${t6.tealDeep}`, color: t6.tealDeep, fontSize: 13, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none" }}>
          Book an Appointment
        </Link>
      </section>
    </div>
  );
}
