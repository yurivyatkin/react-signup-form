import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import "vitest/config"

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-signup-form/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.js',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
