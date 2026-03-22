import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Local dev on Windows: bind loopback so http://127.0.0.1:8081 / http://localhost:8081 work in your system browser.
export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 8081,
    strictPort: true,
    open: true,
    hmr: {
      host: "127.0.0.1",
    },
  },
  preview: {
    host: "127.0.0.1",
    port: 4174,
    strictPort: true,
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
