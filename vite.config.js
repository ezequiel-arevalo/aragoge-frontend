import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/aragoge-frontend/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    },
  },
})
