import { useSearchParams } from "react-router-dom";
import { practice } from "../lib/practice";
import { BookingCalendar, type BookingTheme } from "../components/BookingCalendar";
import { t5 } from "./site5-real";
import { useDocumentTitle } from "../lib/useDocumentTitle";

const bookingTheme: BookingTheme = {
  paper: t5.paper,
  ink: t5.ink,
  accent: t5.teal,
  accentDeep: t5.tealDeep,
  muted: t5.muted,
  hair: t5.hair,
  serif: t5.serif,
  sans: t5.sans,
  radius: 8, // friendly twin softens the chips
};

const eyebrow: React.CSSProperties = { fontSize: 11, fontWeight: 600, letterSpacing: "0.24em", textTransform: "uppercase", color: t5.tealDeep, margin: 0 };

export default function BookingPage() {
  useDocumentTitle("Book a Visit — Providence Care Plus");
  const [searchParams] = useSearchParams();
  const service = searchParams.get("service") ?? undefined;
  return (
    <section style={{ padding: "clamp(56px, 9vh, 100px) 24px clamp(72px, 11vh, 120px)" }}>
      <div className="r-stack r-gap" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 72, alignItems: "start" }}>
        <div>
          <p style={{ ...eyebrow, marginBottom: 20 }}>Book a visit</p>
          <h1 style={{ fontFamily: t5.serif, fontSize: "clamp(32px, 4.4vw, 54px)", fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.06, margin: "0 0 24px" }}>
            Find a time that works.
          </h1>
          <p style={{ fontSize: 17, color: t5.muted, lineHeight: 1.75, margin: "0 0 32px", maxWidth: "42ch" }}>
            Choose your service and an open slot. We'll send your request to our scheduling team and confirm by email — usually the same day.
          </p>
          <div style={{ borderTop: `1px solid ${t5.hair}` }}>
            {[["Payment", "Cash-pay, per visit"], ["Languages", practice.languages], ["Questions?", practice.contact.phone]].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "14px 0", borderBottom: `1px solid ${t5.hair}` }}>
                <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: t5.muted }}>{k}</span>
                <span style={{ fontSize: 15, color: t5.ink, textAlign: "right" }}>{v}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12.5, color: t5.muted, lineHeight: 1.6, margin: "20px 0 0", fontStyle: "italic" }}>
            This is a sample booking experience. In production, appointments are managed through the practice's scheduling system ({practice.scheduler}).
          </p>
        </div>

        <div>
          <BookingCalendar theme={bookingTheme} initialServiceId={service} />
        </div>
      </div>
    </section>
  );
}
