import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://bayphl.org",
  output: "static",
  adapter: netlify(),
});