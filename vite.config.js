import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "Film-Forecast",
  server: {
    port: 5500,
    proxy: {
      '/api': 'http://localhost:5000', // example of proxy configuration if you are using a backend API
    },
  }
})

