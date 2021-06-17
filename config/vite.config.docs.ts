import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'

export default ({ mode }) => {
  const __DEV__ = mode === 'development'

  return defineConfig({
    base: __DEV__ ? '/' : 'emoji-popover',
    root: 'example',
    server: {
      open: false,
      port: 3000
    },
    build: {
      outDir: '../docs',
      assetsDir: 'assets',
      emptyOutDir: true
    }
  })
}
