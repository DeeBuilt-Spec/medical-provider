import { Routes, Route, Navigate } from "react-router-dom";
import { SpecChrome } from "@/components/spec-chrome";

// Visual concept directions (single-page).
import Index from "./routes/index";
import Site1 from "./routes/site1";
import Site2 from "./routes/site2";
import Site3 from "./routes/site3";
import Site4 from "./routes/site4";
import Site5 from "./routes/site5";
import Site6 from "./routes/site6";
import Site7 from "./routes/site7";

// Full interactive builds — a layout per build with nested pages.
import Site5RealLayout from "./routes/site5-real";
import Site5RealHome from "./routes/site5-real.index";
import Site5RealServices from "./routes/site5-real.services";
import Site5RealAbout from "./routes/site5-real.about";
import Site5RealBooking from "./routes/site5-real.booking";

import Site6RealLayout from "./routes/site6-real";
import Site6RealHome from "./routes/site6-real.index";
import Site6RealServices from "./routes/site6-real.services";
import Site6RealAbout from "./routes/site6-real.about";
import Site6RealBooking from "./routes/site6-real.booking";

/*
 * Central route table (react-router-dom v7).
 *
 * Replaces TanStack Router's file-based routing. The two "-real" builds are
 * nested layout routes: the layout renders <Outlet /> and its index/services/
 * about/booking pages render inside it. react-router is mounted with basename
 * in main.tsx, so every `to`/path here is base-relative.
 *
 * <SpecChrome> wraps everything: the logo header + footer credit (hidden header
 * on "/") and the floating prev/next/dropdown switcher.
 */
export default function App() {
  return (
    <SpecChrome>
      <Routes>
        <Route path="/" element={<Index />} />

        {/* Single-page visual concepts */}
        <Route path="/site1" element={<Site1 />} />
        <Route path="/site2" element={<Site2 />} />
        <Route path="/site3" element={<Site3 />} />
        <Route path="/site4" element={<Site4 />} />
        <Route path="/site5" element={<Site5 />} />
        <Route path="/site6" element={<Site6 />} />
        <Route path="/site7" element={<Site7 />} />

        {/* Full interactive build — friendly twin */}
        <Route path="/site5-real" element={<Site5RealLayout />}>
          <Route index element={<Site5RealHome />} />
          <Route path="services" element={<Site5RealServices />} />
          <Route path="about" element={<Site5RealAbout />} />
          <Route path="booking" element={<Site5RealBooking />} />
        </Route>

        {/* Full interactive build — clinical-chic twin */}
        <Route path="/site6-real" element={<Site6RealLayout />}>
          <Route index element={<Site6RealHome />} />
          <Route path="services" element={<Site6RealServices />} />
          <Route path="about" element={<Site6RealAbout />} />
          <Route path="booking" element={<Site6RealBooking />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SpecChrome>
  );
}
