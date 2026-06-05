import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// GitHub Pages serves this project under /<repo>/. The base path is injected
// at build time via the VITE_BASE env var (set by the deploy workflow) and
// falls back to "/" for local dev.
const base = process.env.VITE_BASE ?? "/";

export default defineConfig({
  base,
  plugins: [
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
  build: {
    outDir: "dist",
  },
});
