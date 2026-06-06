import { useMemo, useState, type FormEvent } from "react";
import { services } from "../lib/practice";

/*
 * Front-end booking MOCK.
 *
 * This does not read live availability. In production the practice's scheduler
 * (RXNT) owns the real calendar; this component imitates that experience so the
 * client can see the booking flow end to end. Availability is generated
 * deterministically from the date so it looks plausible and stable (no random
 * jitter on re-render): weekends are closed, and a fixed set of slots is shown
 * per weekday with a couple already "taken."
 */

export type BookingTheme = {
  paper: string;
  ink: string;
  accent: string;
  accentDeep: string;
  muted: string;
  hair: string;
  serif: string;
  sans: string;
  /** square vs rounded chips — lets the clinical twin stay sharp, friendly twin soften */
  radius: number;
};

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const ALL_SLOTS = ["9:00 AM", "10:00 AM", "11:00 AM", "1:30 PM", "2:30 PM", "3:30 PM", "4:30 PM"];

// Deterministic "is this slot taken" — stable per (day, slot), looks irregular.
function slotTaken(dayOfMonth: number, slotIndex: number) {
  return (dayOfMonth * 7 + slotIndex * 3) % 5 === 0;
}

type Props = {
  theme: BookingTheme;
  /** Pre-select a service by id (e.g. when arriving from a service link). */
  initialServiceId?: string;
};

export function BookingCalendar({ theme, initialServiceId }: Props) {
  // Anchor the mock to a fixed reference month so it's stable across renders
  // and never depends on Date.now(). June 2026 — matches the demo timeframe.
  const refYear = 2026;
  const refMonth = 5; // June (0-indexed)

  const [serviceId, setServiceId] = useState(initialServiceId ?? services[0].id);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const service = services.find((s) => s.id === serviceId) ?? services[0];

  const { firstWeekday, daysInMonth } = useMemo(() => {
    const first = new Date(refYear, refMonth, 1).getDay();
    const count = new Date(refYear, refMonth + 1, 0).getDate();
    return { firstWeekday: first, daysInMonth: count };
  }, [refYear, refMonth]);

  // Day 5 is the demo "today" — earlier days are shown as past/unavailable.
  const today = 5;

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const dayState = (d: number) => {
    const weekday = new Date(refYear, refMonth, d).getDay();
    if (weekday === 0 || weekday === 6) return "closed" as const;
    if (d < today) return "past" as const;
    return "open" as const;
  };

  const slotsFor = (d: number) =>
    ALL_SLOTS.map((time, i) => ({ time, taken: slotTaken(d, i) }));

  const pickDay = (d: number) => {
    if (dayState(d) !== "open") return;
    setSelectedDay(d);
    setSelectedSlot(null);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const chip: React.CSSProperties = {
    fontFamily: theme.sans,
    fontSize: 13,
    padding: "10px 4px",
    borderRadius: theme.radius,
    border: `1px solid ${theme.hair}`,
    background: "transparent",
    color: theme.ink,
    cursor: "pointer",
    textAlign: "center",
  };

  if (confirmed) {
    return (
      <div style={{ fontFamily: theme.sans, color: theme.ink, padding: "8px 0" }}>
        <p style={{ fontFamily: theme.serif, fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 400, margin: "0 0 16px", color: theme.accentDeep }}>
          You're requested for {MONTHS[refMonth]} {selectedDay}.
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: theme.muted, margin: "0 0 24px", maxWidth: "52ch" }}>
          We've sent your request for a <strong style={{ color: theme.ink }}>{service.name}</strong> visit at{" "}
          <strong style={{ color: theme.ink }}>{selectedSlot}</strong>. You'll get a confirmation by email shortly with everything you need for your appointment.
        </p>
        <button
          onClick={() => { setConfirmed(false); setSelectedDay(null); setSelectedSlot(null); }}
          style={{ ...chip, padding: "12px 24px", width: "auto", borderColor: theme.accentDeep, color: theme.accentDeep, letterSpacing: "0.14em", textTransform: "uppercase", fontSize: 12 }}
        >
          Book another visit
        </button>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: theme.sans, color: theme.ink }}>
      {/* Service selector */}
      <label style={{ display: "block", marginBottom: 28 }}>
        <span style={{ display: "block", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: theme.muted, marginBottom: 10 }}>
          1. Choose a service
        </span>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {services.map((s) => {
            const active = s.id === serviceId;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setServiceId(s.id)}
                style={{
                  ...chip,
                  padding: "10px 18px",
                  borderColor: active ? theme.accentDeep : theme.hair,
                  background: active ? theme.accentDeep : "transparent",
                  color: active ? theme.paper : theme.ink,
                  fontWeight: active ? 500 : 400,
                }}
              >
                {s.name}
              </button>
            );
          })}
        </div>
        <p style={{ fontSize: 13, color: theme.muted, margin: "12px 0 0" }}>
          {service.length} · {service.format} · {service.price}
        </p>
      </label>

      {/* Calendar */}
      <div style={{ marginBottom: 28 }}>
        <span style={{ display: "block", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: theme.muted, marginBottom: 14 }}>
          2. Pick a day — {MONTHS[refMonth]} {refYear}
        </span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6 }}>
          {DAY_LABELS.map((d) => (
            <div key={d} style={{ textAlign: "center", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: theme.muted, paddingBottom: 6 }}>
              {d}
            </div>
          ))}
          {cells.map((d, i) => {
            if (d === null) return <div key={`e${i}`} />;
            const state = dayState(d);
            const selected = d === selectedDay;
            const open = state === "open";
            return (
              <button
                key={d}
                type="button"
                disabled={!open}
                onClick={() => pickDay(d)}
                aria-label={`${MONTHS[refMonth]} ${d}${open ? ", available" : ", unavailable"}`}
                style={{
                  ...chip,
                  padding: "12px 0",
                  cursor: open ? "pointer" : "default",
                  borderColor: selected ? theme.accentDeep : open ? theme.hair : "transparent",
                  background: selected ? theme.accentDeep : "transparent",
                  color: selected ? theme.paper : open ? theme.ink : "rgba(0,0,0,0.22)",
                  fontWeight: selected ? 600 : 400,
                  textDecoration: state === "past" ? "line-through" : "none",
                }}
              >
                {d}
              </button>
            );
          })}
        </div>
        <p style={{ fontSize: 12, color: theme.muted, margin: "12px 0 0" }}>
          Weekends are closed. Times shown are samples — live availability is confirmed by our scheduler.
        </p>
      </div>

      {/* Time slots */}
      {selectedDay && (
        <div style={{ marginBottom: 32 }}>
          <span style={{ display: "block", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: theme.muted, marginBottom: 14 }}>
            3. Pick a time
          </span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: 8 }}>
            {slotsFor(selectedDay).map(({ time, taken }) => {
              const selected = time === selectedSlot;
              return (
                <button
                  key={time}
                  type="button"
                  disabled={taken}
                  onClick={() => setSelectedSlot(time)}
                  style={{
                    ...chip,
                    padding: "11px 0",
                    cursor: taken ? "default" : "pointer",
                    borderColor: selected ? theme.accentDeep : taken ? "transparent" : theme.hair,
                    background: selected ? theme.accentDeep : taken ? theme.hair : "transparent",
                    color: selected ? theme.paper : taken ? "rgba(0,0,0,0.3)" : theme.ink,
                    textDecoration: taken ? "line-through" : "none",
                  }}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Details form — appears once a slot is chosen */}
      {selectedDay && selectedSlot && (
        <form onSubmit={onSubmit} style={{ borderTop: `1px solid ${theme.hair}`, paddingTop: 28 }}>
          <span style={{ display: "block", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: theme.muted, marginBottom: 18 }}>
            4. Your details
          </span>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }} className="r-stack">
            <Field theme={theme} label="Full name" type="text" required />
            <Field theme={theme} label="Date of birth" type="text" placeholder="MM / DD / YYYY" required />
            <Field theme={theme} label="Email" type="email" required />
            <Field theme={theme} label="Phone" type="tel" required />
          </div>
          <label style={{ display: "block", marginBottom: 28 }}>
            <span style={{ display: "block", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: theme.muted, marginBottom: 8 }}>
              Anything we should know? (optional)
            </span>
            <textarea
              rows={3}
              style={{ width: "100%", background: "transparent", border: "none", borderBottom: `1px solid ${theme.hair}`, padding: "10px 0", fontSize: 16, fontFamily: theme.sans, color: theme.ink, outline: "none", resize: "none" }}
            />
          </label>
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <button
              type="submit"
              style={{ background: "transparent", border: `1px solid ${theme.accentDeep}`, color: theme.accentDeep, padding: "15px 36px", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 500, cursor: "pointer", fontFamily: theme.sans, borderRadius: theme.radius }}
            >
              Request this time
            </button>
            <span style={{ fontSize: 14, color: theme.muted }}>
              {service.name} · {MONTHS[refMonth]} {selectedDay} · {selectedSlot}
            </span>
          </div>
        </form>
      )}
    </div>
  );
}

function Field({ theme, label, type, placeholder, required }: { theme: BookingTheme; label: string; type: string; placeholder?: string; required?: boolean }) {
  return (
    <label style={{ display: "block" }}>
      <span style={{ display: "block", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: theme.muted, marginBottom: 8 }}>{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        style={{ width: "100%", background: "transparent", border: "none", borderBottom: `1px solid ${theme.hair}`, padding: "10px 0", fontSize: 16, fontFamily: theme.sans, color: theme.ink, outline: "none" }}
      />
    </label>
  );
}
