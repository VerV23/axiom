import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'assets': path.resolve(__dirname, './public/assets')
    }
  },
  build: {
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg'],
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    }
  },
  server: {
    watch: {
      usePolling: true
    }
  },
  publicDir: 'public'
});