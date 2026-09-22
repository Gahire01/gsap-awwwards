import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/Spylt-awward-clone/" : "/",

  server: {
    port: 5175,
    strictPort: false, // If 5173 is busy, Vite automatically tries the next free port
  },

  build: {
    outDir: "docs",
  },

  plugins: [react(), tailwindcss()],
});
