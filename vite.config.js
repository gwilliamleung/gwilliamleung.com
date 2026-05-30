import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Set base to '/your-repo-name/' (e.g. '/portfolio/')
// If your repo is named 'gundamwilliam.github.io', use base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
