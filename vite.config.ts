import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/web-2025/',
  plugins: [react()],
  resolve: {
    alias: {
      'components': '/src/components',
      'ui': '/src/components/ui',
      'lib': '/src/lib'
    },
  },
})
