import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

function openMarkdownLinksInNewTab() {
  return (tree) => {
    function updateLinks(node) {
      if (node.type === "element" && node.tagName === "a") {
        node.properties ??= {};
        node.properties.target = "_blank";
        node.properties.rel = ["noopener", "noreferrer"];
      }

      node.children?.forEach(updateLinks);
    }

    updateLinks(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://adamgovier.co.uk",
  integrations: [vue(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    processor: unified({
      rehypePlugins: [openMarkdownLinksInNewTab],
    }),
    shikiConfig: {
      theme: "monokai"
    }
  }
});
