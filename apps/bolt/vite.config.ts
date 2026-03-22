import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    host: true,
    port: 5174,
    strictPort: false,
    open: true,
  },
  preview: {
    host: true,
    port: 4174,
    strictPort: true,
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
