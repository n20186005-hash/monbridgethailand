import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://monbridgethailand.com',
  output: 'static',
  i18n: {
    defaultLocale: 'th',
    locales: ['th', 'zh', 'en', 'my', 'mnw', 'ja', 'ko'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
