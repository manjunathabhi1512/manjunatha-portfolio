import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use relative base so built assets work on GitHub Pages and custom domains
  base: './',
  plugins: [react()],
})
