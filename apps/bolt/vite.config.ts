import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 8081,
    strictPort: true,
    open: true,
  },
  preview: {
    host: true,
    port: 4174,
    strictPort: true,
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
