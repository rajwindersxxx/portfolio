import { defineConfig } from 'vite';
// import { compression } from 'vite-plugin-compression2'
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
