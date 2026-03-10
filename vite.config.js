import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: '/lmm-luxebeam-7-reasons-why/',
  build: { outDir: 'docs' },
})
