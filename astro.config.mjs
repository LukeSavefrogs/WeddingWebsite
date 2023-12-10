import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: IS_PRODUCTION ? 'https://lukesavefrogs.github.io' : undefined,
  base: IS_PRODUCTION ? '/WeddingWebsite' : undefined,
  integrations: [tailwind()],
  prefetch: {
    // Enable prefetching for all links, including those without the
    // `data-astro-prefetch` attribute.
    prefetchAll: true
  }
});