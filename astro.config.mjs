import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// Legal / settings pages carry no search value and must not consume crawl budget.
const NON_INDEXABLE = /(\/cookie-settings|\/privacy-policy|\/terms-of-service)\/?$/;
// The bare root is a 301 stub (see public/_redirects) and is not a canonical document.
const ROOT_STUB = /^https:\/\/monbridgethailand\.com\/$/;

// https://astro.build/config
export default defineConfig({
  site: 'https://monbridgethailand.com',
  // One canonical form only: trailing slash. The Cloudflare asset layer issues the
  // matching 301 for the slash-less variant, so Search Console stops splitting
  // /en and /en/ into two competing documents.
  trailingSlash: 'always',
  // Every locale page is prerendered at build time; only the weather endpoint
  // (src/pages/api/weather.ts) renders on demand on the Cloudflare Worker.
  output: 'static',
  // Photos are pre-optimised at build time (see the gallery pipeline), so the
  // Worker never needs an image service — keeps the bundle lean and cold starts fast.
  adapter: cloudflare({ imageService: 'passthrough' }),
  integrations: [
    sitemap({
      filter: (page) => !NON_INDEXABLE.test(page) && !ROOT_STUB.test(page),
      // Emits xhtml:link alternates for every locale variant of a page.
      // Codes must match the hreflang values emitted in <head> (src/i18n/ui.ts).
      i18n: {
        defaultLocale: 'th',
        locales: {
          th: 'th-TH',
          ko: 'ko-KR',
          zh: 'zh-Hans',
          en: 'en-US',
          ja: 'ja-JP',
          mnw: 'mnw',
          my: 'my-MM',
        },
      },
      changefreq: 'monthly',
      priority: 0.9,
    }),
  ],
  i18n: {
    defaultLocale: 'th',
    locales: ['th', 'ko', 'zh', 'en', 'ja', 'mnw', 'my'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
