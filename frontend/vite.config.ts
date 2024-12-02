import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "public", // Ensures the `public` directory is served correctly
  build: {
    outDir: "dist", // Ensures the build output goes to the `dist` directory
  },
});
