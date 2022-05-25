import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ['favicon.svg'],  
      manifest: {
        name: 'Auto Manufacturers',
        short_name: 'Manufacturers',
        description: 'List of vehicle manufacturers',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '512x512',
            type: 'image/svg',
          },
        ]
      }
    })
  ]
});
