export const siteConfig = {
  name: 'Mon Bridge (Uttamanusorn Bridge)',
  baseUrl: 'https://monbridgethailand.com',
  slug: 'mon-bridge',
  locales: ['zh', 'en', 'my', 'th', 'mnw', 'ja', 'ko'] as const,
};

export const ogLocale: Record<string, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  my: 'my_MM',
  th: 'th_TH',
  mnw: 'mnw',
  ja: 'ja_JP',
  ko: 'ko_KR',
};
