import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const base = import.meta.env.DEPLOY_TARGET === 'gh' ? '/foodrestaurant/' : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [
    react(), 
    tailwindcss()
  ],
})
