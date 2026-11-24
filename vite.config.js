import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the built site works on GitHub Pages project URLs
// (https://<user>.github.io/<repo>/) as well as on a custom domain.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
