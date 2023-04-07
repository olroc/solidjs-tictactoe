/// <reference types="vitest" />
/// <reference types="vite/client" />
// 👆 do not forget to add the references above
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './testsSetup.js',
    transformMode: { web: [/\.[jt]sx?$/] },
  },
})
