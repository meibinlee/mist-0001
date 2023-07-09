import { defineConfig } from 'vite';
export default defineConfig({
  server: {
    proxy: {
      '/api/': {
        target: 'https://us-central1-cloud-test-b0c05.cloudfunctions.net/',
        changeOrigin: true,
        // Additional options if needed
      },
    },
  },
});
