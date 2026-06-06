/*
 * Single source of truth for the practice's real-world substance.
 *
 * The earlier mockups (site1–site7) read as "boutique" partly because their
 * copy was vague. The realistic twins (site5-real, site6-real) draw every
 * concrete fact — named services, visit lengths, sample pricing, booking
 * model — from this one object, so the sites SAY real things a patient can
 * act on. To reskin for the real practice, edit only this file.
 *
 * NOTE: pricing is placeholder ("sample") — the practice is new and hasn't set
 * rates. Booking is cash-pay PER VISIT (no membership yet). The booking page is
 * a front-end mock; in production it hands off to their EHR scheduler (RXNT).
 */

export const practice = {
  name: "Providence Care Plus",
  tagline: "Direct primary care, weight management, and physicals — virtual or in person.",
  // Placeholder provider identity until the real practitioner's details land.
  provider: {
    name: "Jean Joseph, FNP-C",
    first: "Jean",
    credentials: "Family Nurse Practitioner, Board Certified",
    yearsExperience: "20+ years",
    origin: "Originally from Haiti",
  },
  contact: {
    phone: "(555) 012-3456",
    email: "hello@providencecare.plus",
    hours: "Mon–Fri · 8am–5pm",
    location: "Virtual visits statewide · In-person by appointment",
  },
  languages: "English & Kreyòl Ayisyen",
  greeting: "Byenveni", // Haitian Creole for "Welcome"
  creoleLine: "Nou pale Kreyòl — Byenveni.", // "We speak Creole — Welcome."

  // How payment works, stated plainly (the inspos all make this clear up front).
  payment:
    "Cash-pay, per visit. No insurance required and no membership — you pay a simple, flat fee at the time of your appointment. Pricing below is a sample while the practice finalizes rates.",

  // The real scheduler. The website booking page is a front end that hands the
  // request off to this system; it does not read live availability here.
  scheduler: "RXNT",
} as const;

export type Service = {
  id: string;
  name: string;
  short: string; // one-line summary for cards/nav
  forWho: string; // who it's for
  treats: string[]; // concrete, named conditions/needs
  format: string; // virtual / in-person / both
  length: string; // typical visit length
  price: string; // sample price
  detail: string; // a paragraph for the services page
};

export const services: Service[] = [
  {
    id: "primary-care",
    name: "Primary Care",
    short: "Everyday and ongoing medical care for adults.",
    forWho: "Adults who want a provider who knows them and has time to listen.",
    treats: [
      "Annual wellness visits",
      "High blood pressure",
      "Type 2 diabetes & prediabetes",
      "High cholesterol",
      "Thyroid conditions",
      "Sick visits (colds, infections, minor illness)",
      "Medication management & refills",
    ],
    format: "Virtual or in person",
    length: "30–45 minutes",
    price: "$95 / visit (sample)",
    detail:
      "Comprehensive primary care for adults — from your yearly check-up to managing ongoing conditions like high blood pressure, diabetes, high cholesterol, and thyroid disease. Visits run 30 to 45 minutes, so there is real time to talk through your health, review your medications, and build a plan that fits your life. Available by video or in person.",
  },
  {
    id: "weight-management",
    name: "GLP-1 Weight Management",
    short: "Medically supervised weight care, including GLP-1 medications.",
    forWho: "Adults exploring GLP-1 medications or structured weight care.",
    treats: [
      "GLP-1 medications (semaglutide, tirzepatide)",
      "Eligibility & medical screening",
      "Monthly progress check-ins",
      "Nutrition & lifestyle guidance",
      "Metabolic & cardiometabolic health",
    ],
    format: "Fully virtual",
    length: "About 45 minutes",
    price: "$120 / visit (sample)",
    detail:
      "If you are considering a GLP-1 medication like semaglutide or tirzepatide, we start with a thorough virtual visit to review your history, screen for eligibility, and talk honestly about what to expect. From there, monthly check-ins keep your care on track, with guidance on nutrition and lifestyle along the way. Every visit is by video, about 45 minutes.",
  },
  {
    id: "physicals",
    name: "Physicals & Exams",
    short: "Wellness, work, and sports physicals.",
    forWho: "Anyone who needs a documented exam, fast.",
    treats: [
      "Annual wellness physicals",
      "Employment / pre-employment physicals",
      "Sports & school physicals",
      "DOT exams (where applicable)",
      "Same-week appointments",
    ],
    format: "In person or virtual where allowed",
    length: "20–30 minutes",
    price: "$75 / exam (sample)",
    detail:
      "Need a physical on a deadline? We offer wellness, employment, and sports or school physicals with same-week availability and clear documentation. Most exams take 20 to 30 minutes. In person where a hands-on exam is required, or by video where that is appropriate.",
  },
];

export type Step = { n: string; title: string; body: string };

export const howItWorks: Step[] = [
  {
    n: "01",
    title: "Choose a time",
    body: "Pick a service and an open appointment slot right on the site. You'll get a confirmation and simple instructions for your visit.",
  },
  {
    n: "02",
    title: "Meet your provider",
    body: "Connect by video or come in. Your visit is unhurried — real time to talk through your health and your goals.",
  },
  {
    n: "03",
    title: "Stay on track",
    body: "Leave with a clear plan, your prescriptions handled, and an easy way to follow up or book your next visit.",
  },
];

export const faqs = [
  {
    q: "Do I need insurance?",
    a: "No. This is a cash-pay practice — you pay a simple flat fee per visit, with no insurance and no membership required.",
  },
  {
    q: "Are visits virtual or in person?",
    a: "Both, depending on the service. Primary care and physicals can be in person or by video; GLP-1 weight visits are fully virtual.",
  },
  {
    q: "How do I book?",
    a: "Choose your service and an open time right here on the site. Your request is sent to our scheduling system and confirmed by email.",
  },
  {
    q: "What languages do you speak?",
    a: "We see patients in English and Kreyòl Ayisyen, so you can talk through your care in the language you're most comfortable with.",
  },
];
