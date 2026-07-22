// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://biologiaodebilidad.example",
  integrations: [sitemap()],
  vite: {
    plugins: [/** @type {any} */ (tailwindcss())],
  },
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
  prefetch: {
    prefetchAll: true,
  },
});
