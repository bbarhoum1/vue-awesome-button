import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "node:path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib';

  return {
    plugins: [vue(), dts({ include: ['src/**/*.ts', 'src/**/*.vue'] })],
    base: isLib ? '/' : '/vue-awesome-button/', // Base path for GitHub Pages
    build: isLib ? {
      lib: {
        entry: resolve(__dirname, "src/index.ts"),
        name: "VueAwesomeButton",
        fileName: "vue-awesome-button",
        formats: ['es', 'umd', 'cjs'],
      },
      rollupOptions: {
        external: ["vue"],
        output: {
          globals: {
            vue: "Vue",
          },
        },
      },
    } : {
      // App mode configuration for GitHub Pages
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
    },
  }
})
