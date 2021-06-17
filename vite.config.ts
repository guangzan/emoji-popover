import { defineConfig } from 'vite'
const path = require('path')

export default defineConfig({
  server: {
    open: true,
    port: 8080
  },
  build: {
    lib: {
      formats: ['es', 'umd', 'iife'],
      entry: path.resolve(__dirname, './src/main.ts'),
      name: 'EmojiPopover'
    }
  }
})
