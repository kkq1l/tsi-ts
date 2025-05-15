import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ManifestOptions, VitePWA } from "vite-plugin-pwa";
const manifestPWA: Partial<ManifestOptions> = {
  theme_color: "#998fa8",
  background_color: "#ffffff",
  icons: [
    {
      purpose: "maskable",
      sizes: "512x512",
      src: "icon512_maskable.png",
      type: "image/png",
    },
    {
      purpose: "any",
      sizes: "512x512",
      src: "icon512_rounded.png",
      type: "image/png",
    },
  ],
  screenshots: [
    {
      src: "/public/screenshots/desktop.png",
      type: "image/png",
      sizes: "1920x1080",
      form_factor: "wide",
    },
    {
      src: "/public/screenshots/mobile.png",
      type: "image/png",
      sizes: "750x1134",
      form_factor: "narrow",
    },
  ],
  orientation: "any",
  display: "standalone",
  lang: "ru-RU",
  name: "Технологии сети и интернет",
  short_name: "ТСИ",
};
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*/.{html,css,js,ico,png,svg}"],
      },
      manifest: manifestPWA,
    }),
  ],
});
