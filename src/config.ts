export const siteConfig = {
  name: 'Mon Bridge (Uttamanusorn Bridge)',
  baseUrl: 'https://monbridgethailand.com',
  slug: 'mon-bridge',
  locales: ['th', 'ko', 'zh', 'en', 'ja', 'mnw', 'my'] as const,
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

/**
 * Single-attraction SEO entity binding source of truth.
 * Values are cross-checked against the official Google Maps listing for
 * Mon Bridge (สะพานมอญ) — 1 Saphan Mai Alley, Nong Lu, Sangkhla Buri.
 */
export const attraction = {
  fullName: 'Mon Bridge (Uttamanusorn Bridge)',
  shortName: 'Mon Bridge',
  thaiName: 'สะพานมอญ',
  city: 'Sangkhla Buri',
  province: 'Kanchanaburi',
  country: 'Thailand',
  countryCode: 'TH',
  postalCode: '71240',
  streetAddress: '1 Saphan Mai Alley, Nong Lu',
  plusCode: '4CVX+9W',
  latitude: 15.1434,
  longitude: 98.4498,
  mapsShareUrl: 'https://maps.app.goo.gl/QWVCDcZqzonpm72w8',
  mapsEmbedSrc: 'https://www.google.com/maps?q=15.1434,98.4498&output=embed',
  // Authoritative (.gov / .org) outbound reference for regional tourism info.
  tourismUrl: 'https://www.tourismthailand.org/',
  wikipediaUrl: 'https://en.wikipedia.org/wiki/Uttamanusorn_Bridge',
  nearbyLandmarks: ['Wat Wang Wiwekaram', 'Three Pagodas Pass'],
  // Photo naming convention: <attraction>-<city>-<n>.jpg (see /public/gallery).
  galleryPrefix: 'mon-bridge-sangkhla-buri',
  galleryCount: 23,
  heroImage: 'mon-bridge-sangkhla-buri-20.jpg',
  images: [
    'https://monbridgethailand.com/gallery/mon-bridge-sangkhla-buri-1.jpg',
    'https://monbridgethailand.com/gallery/mon-bridge-sangkhla-buri-3.jpg',
    'https://monbridgethailand.com/gallery/mon-bridge-sangkhla-buri-13.jpg',
    'https://monbridgethailand.com/gallery/mon-bridge-sangkhla-buri-20.jpg',
  ],
  rating: {
    // Latest Google Maps rating for Mon Bridge (verified 2026-09).
    value: '4.6',
    count: 12009,
    best: 5,
    worst: 1,
    source: 'Google Maps',
    sourceUrl: 'https://maps.app.goo.gl/QWVCDcZqzonpm72w8',
    verified: '2026-09',
  },
};
