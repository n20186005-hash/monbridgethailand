import zh from './zh.json';
import en from './en.json';
import my from './my.json';
import th from './th.json';
import mnw from './mnw.json';
import ja from './ja.json';
import ko from './ko.json';
import { seoMessages } from './seo';
import { moduleMessages } from './modules';

export const defaultLang = 'th';
/** Switcher order: Thai (default) first, then Korean, Chinese, English, Japanese, Mon, Burmese. */
export const languagesList = ['th', 'ko', 'zh', 'en', 'ja', 'mnw', 'my'] as const;

export const languages: Record<string, string> = {
  zh: '中文',
  en: 'English',
  my: 'မြန်မာ',
  th: 'ไทย',
  mnw: 'ဘာသာမန်',
  ja: '日本語',
  ko: '한국어',
};

/**
 * Shallow-merge the SEO / sources and content-namespace layers on top of each
 * language pack so components can keep reading everything from one `messages`.
 */
function mergeNamespaces(base: any, ...extras: any[]): any {
  const out: Record<string, any> = { ...base };
  for (const extra of extras) {
    if (!extra) continue;
    for (const key of Object.keys(extra)) {
      const b = out[key];
      const e = extra[key];
      if (b && e && typeof b === 'object' && typeof e === 'object' && !Array.isArray(b) && !Array.isArray(e)) {
        out[key] = { ...b, ...e };
      } else if (e !== undefined) {
        out[key] = e;
      }
    }
  }
  return out;
}

const ui: Record<string, any> = {
  zh: mergeNamespaces(zh, seoMessages.zh, moduleMessages.zh),
  en: mergeNamespaces(en, seoMessages.en, moduleMessages.en),
  my: mergeNamespaces(my, seoMessages.my, moduleMessages.my),
  th: mergeNamespaces(th, seoMessages.th, moduleMessages.th),
  mnw: mergeNamespaces(mnw, seoMessages.mnw, moduleMessages.mnw),
  ja: mergeNamespaces(ja, seoMessages.ja, moduleMessages.ja),
  ko: mergeNamespaces(ko, seoMessages.ko, moduleMessages.ko),
};

export function getLangFromUrl(url: URL): string {
  const seg = url.pathname.split('/').filter(Boolean);
  const lang = seg[0];
  return (languagesList as readonly string[]).includes(lang) ? lang : defaultLang;
}

export function getI18n(url: URL) {
  const lang = getLangFromUrl(url);
  const messages = ui[lang];
  const t = (key: string): string => {
    const found = key
      .split('.')
      .reduce<any>((o, i) => (o == null ? undefined : o[i]), messages);
    return found ?? '';
  };
  return { lang, messages, t };
}

/**
 * BCP-47 values used for the `hreflang` attribute. These differ from the URL
 * prefix for Chinese, where the script subtag (`zh-Hans`) is what Google needs
 * to tell Simplified Chinese apart from Traditional.
 */
export const hreflang: Record<string, string> = {
  th: 'th',
  ko: 'ko',
  zh: 'zh-Hans',
  en: 'en',
  ja: 'ja',
  mnw: 'mnw',
  my: 'my',
};

/** Canonical URL form: always https + trailing slash (see `trailingSlash` in astro.config). */
export function buildAlternates(path = ''): Record<string, string> {
  const base = 'https://www.monbridgethailand.com';
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  const mk = (l: string) => `${base}/${l}/${clean ? clean + '/' : ''}`;
  return {
    zh: mk('zh'),
    en: mk('en'),
    my: mk('my'),
    th: mk('th'),
    mnw: mk('mnw'),
    ja: mk('ja'),
    ko: mk('ko'),
    xDefault: mk('th'),
  };
}

export function htmlLangAttr(lang: string): string {
  if (lang === 'zh') return 'zh-CN';
  return lang;
}
