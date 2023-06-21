import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Film-Me-In_A-Movie-DB-Explorer",
  plugins: [react()],
})
