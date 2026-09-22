import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    port: 5175,
    strictPort: false,
  },

  build: {
    outDir: "dist",
  },

  plugins: [react(), tailwindcss()],
});
