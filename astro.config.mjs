import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: 'https://lukesavefrogs.github.io',
  base: IS_PRODUCTION ? '/WeddingWebsite' : '',
  integrations: [tailwind()],
  prefetch: {
    // Enable prefetching for all links, including those without the
    // `data-astro-prefetch` attribute.
    prefetchAll: true
  }
});