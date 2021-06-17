import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'example',
  server: {
    open: true,
    port: 3000
  },
  build: {
    outDir: '../docs'
  }
})
