import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest:
            {
                "name": "Mi PWA",
                "short_name": "PWA",
                "description": "Aplicación PWA con React y Vite",
                "start_url": "/",
                "display": "standalone",
                "background_color": "#ffffff",
                "theme_color": "#ffffff",
                "icons": [
                    {
                        "src": "/icons/icon-192x192.png",
                        "sizes": "192x192",
                        "type": "image/png"
                    },
                    {
                        "src": "/icons/icon-512x512.png",
                        "sizes": "512x512",
                        "type": "image/png"
                    }
                ]
            }
        })
    ],
})
