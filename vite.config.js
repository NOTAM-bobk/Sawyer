import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // VITE_GROQ_API_KEY is set in Vercel dashboard → automatically exposed to import.meta.env
})
