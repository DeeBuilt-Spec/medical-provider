import { useSearchParams } from "react-router-dom";
import { practice } from "../lib/practice";
import { BookingCalendar, type BookingTheme } from "../components/BookingCalendar";
import { t6 } from "./site6-real";
import { useDocumentTitle } from "../lib/useDocumentTitle";

const bookingTheme: BookingTheme = {
  paper: t6.paper,
  ink: t6.ink,
  accent: t6.teal,
  accentDeep: t6.tealDeep,
  muted: t6.muted,
  hair: t6.hair,
  serif: t6.serif,
  sans: t6.sans,
  radius: 0, // clinical-chic stays square
};

const eyebrow: React.CSSProperties = { fontSize: 11, fontWeight: 500, letterSpacing: "0.26em", textTransform: "uppercase", color: t6.teal, margin: 0 };

export default function BookingPage() {
  useDocumentTitle("Book a Visit — Providence Care Plus");
  const [searchParams] = useSearchParams();
  const service = searchParams.get("service") ?? undefined;
  return (
    <section style={{ padding: "clamp(64px, 10vh, 110px) 24px clamp(80px, 12vh, 130px)" }}>
      <div className="r-stack r-gap" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 72, alignItems: "start" }}>
        {/* Left rail — context */}
        <div>
          <p style={{ ...eyebrow, marginBottom: 20 }}>Book a visit</p>
          <h1 style={{ fontFamily: t6.serif, fontSize: "clamp(32px, 4.4vw, 56px)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.05, margin: "0 0 24px" }}>
            Find a time that works.
          </h1>
          <p style={{ fontSize: 17, color: t6.muted, lineHeight: 1.75, margin: "0 0 32px", maxWidth: "42ch" }}>
            Choose your service and an open slot. We'll send your request to our scheduling team and confirm by email — usually the same day.
          </p>
          <div style={{ borderTop: `1px solid ${t6.hair}` }}>
            {[
              ["Payment", "Cash-pay, per visit"],
              ["Languages", `${practice.languages}`],
              ["Questions?", practice.contact.phone],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "14px 0", borderBottom: `1px solid ${t6.hair}` }}>
                <span style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: t6.muted }}>{k}</span>
                <span style={{ fontSize: 15, color: t6.ink, textAlign: "right" }}>{v}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12.5, color: t6.muted, lineHeight: 1.6, margin: "20px 0 0", fontStyle: "italic" }}>
            This is a sample booking experience. In production, appointments are managed through the practice's scheduling system ({practice.scheduler}).
          </p>
        </div>

        {/* Right — the calendar mock */}
        <div>
          <BookingCalendar theme={bookingTheme} initialServiceId={service} />
        </div>
      </div>
    </section>
  );
}
