import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "node:fs";
import { componentTagger } from "lovable-tagger";

const inDocker = fs.existsSync("/.dockerenv");

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    // Listen on all interfaces so Dev Containers port forwarding can reach the dev server
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
    // In containers, auto-open has no display; on host use http://localhost:8080 (forwarded)
    open: false,
    watch: inDocker
      ? {
          // Bind mounts in Dev Containers often need polling for reliable HMR
          usePolling: true,
        }
      : undefined,
    hmr: {
      overlay: false,
      ...(inDocker ? { clientPort: 8080 } : {}),
    },
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
    strictPort: true,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
