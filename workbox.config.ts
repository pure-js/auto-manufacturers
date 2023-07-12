
export default defineConfig({
  plugins: [
    WorkBox({
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
