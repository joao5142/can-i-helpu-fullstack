import swc from 'unplugin-swc'
import { defineConfig } from 'vitest/config'
import viteTsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    globals: true,
    root: './',
  },
  plugins: [
    viteTsConfigPaths(),
 
  ],
})
