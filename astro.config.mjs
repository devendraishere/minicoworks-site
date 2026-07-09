// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Canonical domain (GitHub Pages custom domain, same pattern as geomediq-site:
// www is canonical, apex redirects). Change here if the live domain differs.
export default defineConfig({
  site: 'https://www.minicoworks.com',
  trailingSlash: 'never',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
