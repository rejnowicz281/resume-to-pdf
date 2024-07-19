import react from "@vitejs/plugin-react";
// @ts-ignore
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/resume-to-pdf/",
    plugins: [react()],
    resolve: {
        alias: {
            // @ts-ignore
            "@": path.resolve(__dirname, "./src")
        }
    }
});
