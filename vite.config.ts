import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import "vitest/config"

const base = process.env.NODE_ENV === 'production' ? '/react-signup-form/' : '/';

// https://vitejs.dev/config/
export default defineConfig({
  base,
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
