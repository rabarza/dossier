import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: el sitio vive en https://rabarza.github.io/dossier/
export default defineConfig({
  base: "/dossier/",
  plugins: [react()],
});
