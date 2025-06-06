import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../backend/public/admin',  // Output the build files directly to the backend/public/admin folder
    assetsDir: 'assets', // Place assets in the assets folder inside the dist folder
  },
  base: '/admin/',  // Ensure that the app knows it's being served from /admin/
  server: {
    port: 5175, // Port for the dev server (not needed in production)
  },
});
