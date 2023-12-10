import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  prefetch: {
    // Enable prefetching for all links, including those without the
    // `data-astro-prefetch` attribute.
    prefetchAll: true
  }
});