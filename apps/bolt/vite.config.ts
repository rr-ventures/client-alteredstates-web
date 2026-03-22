import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';

const inDocker = fs.existsSync('/.dockerenv');

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8081,
    strictPort: true,
    open: false,
    watch: inDocker ? { usePolling: true } : undefined,
    hmr: inDocker ? { clientPort: 8081 } : undefined,
  },
  preview: {
    host: "0.0.0.0",
    port: 4174,
    strictPort: true,
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
