import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  resolve: {
    preserveSymlinks: true,
  }, 
  build: {
    chunkSizeWarningLimit: 10000,
    rollupOptions: {
      external: ["@mui", "@mui/material", "@mui/material/Box", "@mui/material/Modal", "@mui/material/Button", "@mui/material/utils"],
    },
  },
});
