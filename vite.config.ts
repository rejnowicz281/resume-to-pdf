import react from "@vitejs/plugin-react";
// @ts-ignore
import path from "path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),

        VitePWA({
            registerType: "autoUpdate",

            workbox: {
                maximumFileSizeToCacheInBytes: 10485760, // 10MB
                globPatterns: ["**/*"],
                cleanupOutdatedCaches: true
            },

            includeAssets: ["**/*"],

            manifest: {
                theme_color: "#ffffff",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                short_name: "resume-to-pdf",
                description: "Turn resumes into PDFs",
                name: "Resume To PDF",
                icons: [
                    {
                        src: "/icons/512.png",
                        sizes: "512x512",
                        type: "image/png"
                    },
                    {
                        src: "/icons/384.png",
                        sizes: "384x384",
                        type: "image/png"
                    },
                    {
                        src: "/icons/256.png",
                        sizes: "256x256",
                        type: "image/png"
                    },
                    {
                        src: "/icons/192.png",
                        sizes: "192x192",
                        type: "image/png"
                    },
                    {
                        src: "/icons/144.png",
                        sizes: "144x144",
                        type: "image/png"
                    },
                    {
                        src: "/icons/128.png",
                        sizes: "128x128",
                        type: "image/png"
                    },
                    {
                        src: "/icons/96.png",
                        sizes: "96x96",
                        type: "image/png"
                    },
                    {
                        src: "/icons/72.png",
                        sizes: "72x72",
                        type: "image/png"
                    }
                ]
            }
        })
    ],
    resolve: {
        alias: {
            // @ts-ignore
            "@": path.resolve(__dirname, "./src")
        }
    }
});
