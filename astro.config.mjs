import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwindcss(), mdx()],
  markdown: {
    shikiConfig: {
      theme: "monokai"
    }
  }
});