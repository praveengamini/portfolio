import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Add this line
    },
  },
  server: {
    host: '0.0.0.0', // Allow connections from your local network
    port: 3000, // Or any other port you prefer
  },
});
