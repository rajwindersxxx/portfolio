import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // Use the modern API
        api: 'modern-compiler', // or "modern"
      },
    },
  },
});
