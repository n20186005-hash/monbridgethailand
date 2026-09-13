/**
 * Server-rendered weather endpoint.
 *
 * Runs on the server (Cloudflare Worker when deployed), fetches the upstream
 * forecast once, localises it and caches the result at the edge so the page
 * itself can stay fully static. Visitors only ever see weather data — never
 * provider details.
 */
export const prerender = false;

import type { APIRoute } from 'astro';
import { attraction } from '../../config';
import { moduleMessages } from '../../i18n/modules';
import { defaultLang, languagesList } from '../../i18n/ui';

const TIMEZONE = 'Asia/Bangkok';
/** Forecast lifetime in seconds (30 minutes). */
const TTL = 1800;
const UPSTREAM = 'https://api.open-meteo.com/v1/forecast';

const INTL_LOCALE: Record<string, string> = {
  zh: 'zh-CN',
  en: 'en-GB',
  th: 'th-TH',
  ja: 'ja-JP',
  ko: 'ko-KR',
  my: 'my-MM',
  mnw: 'en-GB',
};

function pickLang(raw: string | null): string {
  return raw && (languagesList as readonly string[]).includes(raw) ? raw : defaultLang;
}

function iconFor(code: number, isDay = true): string {
  if (code === 0) return isDay ? '☀️' : '🌙';
  if (code === 1) return isDay ? '🌤️' : '🌙';
  if (code === 2) return isDay ? '⛅' : '☁️';
  if (code === 3) return '☁️';
  if (code === 45 || code === 48) return '🌫️';
  if (code >= 51 && code <= 57) return '🌦️';
  if (code >= 61 && code <= 67) return '🌧️';
  if (code >= 71 && code <= 77) return '🌨️';
  if (code === 80 || code === 81) return '🌦️';
  if (code === 82) return '⛈️';
  if (code === 85 || code === 86) return '🌨️';
  if (code >= 95) return '⛈️';
  return '🌤️';
}

function uvKey(uv: number): string {
  if (uv < 3) return 'uvLow';
  if (uv < 6) return 'uvModerate';
  if (uv < 8) return 'uvHigh';
  if (uv < 11) return 'uvVeryHigh';
  return 'uvExtreme';
}

function adviceKey(codes: number[], precipProb: number, maxTemp: number): string {
  if (codes.some((c) => c >= 95)) return 'adviceStorm';
  if (precipProb >= 50 || codes.some((c) => c >= 51)) return 'adviceRain';
  if (maxTemp >= 34) return 'adviceHeat';
  return 'adviceDry';
}

function timeOf(iso: string | undefined): string {
  return typeof iso === 'string' && iso.length >= 16 ? iso.slice(11, 16) : '';
}

function weekdayLabel(iso: string, lang: string): string {
  try {
    const d = new Date(`${iso.slice(0, 10)}T12:00:00Z`);
    return new Intl.DateTimeFormat(INTL_LOCALE[lang] ?? 'en-GB', { weekday: 'short' }).format(d);
  } catch {
    return iso.slice(5, 10);
  }
}

async function build(lang: string) {
  const w = moduleMessages[lang]?.weather ?? moduleMessages[defaultLang].weather;
  const codes: Record<string, string> = w.codes ?? {};
  const label = (code: number) => codes[String(code)] ?? '—';

  const params = new URLSearchParams({
    latitude: String(attraction.latitude),
    longitude: String(attraction.longitude),
    current:
      'temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m',
    hourly: 'temperature_2m,weather_code,precipitation_probability,precipitation',
    daily:
      'weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,precipitation_probability_max,uv_index_max,wind_speed_10m_max',
    timezone: TIMEZONE,
    forecast_days: '7',
    wind_speed_unit: 'kmh',
  });

  const upstream = await fetch(`${UPSTREAM}?${params.toString()}`, {
    headers: { accept: 'application/json' },
  });
  if (!upstream.ok) throw new Error('upstream');
  const data: any = await upstream.json();

  const cur = data.current ?? {};
  const d = data.daily ?? {};
  const h = data.hourly ?? {};

  const current = {
    temp: Math.round(cur.temperature_2m),
    feels: Math.round(cur.apparent_temperature),
    humidity: Math.round(cur.relative_humidity_2m),
    wind: Math.round(cur.wind_speed_10m),
    precip: Number(cur.precipitation ?? 0),
    code: Number(cur.weather_code ?? 0),
    isDay: cur.is_day === 1,
    label: label(Number(cur.weather_code ?? 0)),
    icon: iconFor(Number(cur.weather_code ?? 0), cur.is_day === 1),
  };

  const dates: string[] = d.time ?? [];
  const daily = dates.map((iso: string, i: number) => {
    const code = Number(d.weather_code?.[i] ?? 0);
    const isToday = i === 0;
    return {
      weekday: isToday ? w.todayLabel : i === 1 ? w.tomorrowLabel : weekdayLabel(iso, lang),
      date: iso.slice(5),
      code,
      label: label(code),
      icon: iconFor(code, true),
      max: Math.round(d.temperature_2m_max?.[i] ?? 0),
      min: Math.round(d.temperature_2m_min?.[i] ?? 0),
      precipProb: Math.round(d.precipitation_probability_max?.[i] ?? 0),
      precip: Number(d.precipitation_sum?.[i] ?? 0),
      uv: Math.round(d.uv_index_max?.[i] ?? 0),
      uvLabel: w[uvKey(Number(d.uv_index_max?.[i] ?? 0))],
      wind: Math.round(d.wind_speed_10m_max?.[i] ?? 0),
      sunrise: timeOf(d.sunrise?.[i]),
      sunset: timeOf(d.sunset?.[i]),
    };
  });

  const hTimes: string[] = h.time ?? [];
  const nowIso = new Date(Date.now() + 7 * 3600 * 1000).toISOString().slice(0, 13);
  let start = hTimes.findIndex((t: string) => t.slice(0, 13) >= nowIso);
  if (start < 0) start = 0;
  const hourly = hTimes.slice(start, start + 12).map((iso: string, k: number) => {
    const i = start + k;
    const code = Number(h.weather_code?.[i] ?? 0);
    return {
      time: timeOf(iso),
      code,
      icon: iconFor(code, true),
      temp: Math.round(h.temperature_2m?.[i] ?? 0),
      precipProb: Math.round(h.precipitation_probability?.[i] ?? 0),
    };
  });

  const today = daily[0] ?? {};
  const nextCodes = daily.map((x: any) => x.code);
  const maxPrecipProb = Math.max(...daily.map((x: any) => x.precipProb), 0);
  const maxTemp = Math.max(...daily.map((x: any) => x.max), 0);

  return {
    ok: true,
    timezone: TIMEZONE,
    updated: new Date().toISOString().slice(0, 16).replace('T', ' '),
    current,
    today: {
      sunrise: (today as any).sunrise ?? '',
      sunset: (today as any).sunset ?? '',
      uv: (today as any).uv ?? 0,
      uvLabel: (today as any).uvLabel ?? '',
    },
    advice: w[adviceKey(nextCodes, maxPrecipProb, maxTemp)],
    daily,
    hourly,
  };
}

function jsonResponse(body: string, maxAge = TTL, status = 200): Response {
  return new Response(body, {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': `public, s-maxage=${maxAge}, stale-while-revalidate=${maxAge * 2}`,
    },
  });
}

/** In-process cache so local dev (no edge cache) still avoids hammering upstream. */
const memory = new Map<string, { body: string; expires: number }>();

type EdgeCache = {
  match: (req: Request) => Promise<Response | undefined>;
  put: (req: Request, res: Response) => Promise<void>;
};

function edgeCache(): EdgeCache | null {
  const c = (globalThis as any).caches;
  return c && c.default ? (c.default as EdgeCache) : null;
}

export const GET: APIRoute = async ({ url }) => {
  const lang = pickLang(url.searchParams.get('lang'));
  const key = `${url.origin}${url.pathname}?lang=${lang}`;
  const req = new Request(key, { method: 'GET' });
  const edge = edgeCache();

  if (edge) {
    try {
      const hit = await edge.match(req);
      if (hit) return hit;
    } catch {
      /* fall through to a fresh fetch */
    }
  } else {
    const hit = memory.get(key);
    if (hit && hit.expires > Date.now()) return jsonResponse(hit.body);
  }

  try {
    const body = JSON.stringify(await build(lang));
    memory.set(key, { body, expires: Date.now() + TTL * 1000 });
    const res = jsonResponse(body);
    if (edge) {
      try {
        await edge.put(req, res.clone());
      } catch {
        /* caching is best-effort */
      }
    }
    return res;
  } catch {
    const stale = memory.get(key);
    if (stale) return jsonResponse(stale.body, 300);
    return jsonResponse(JSON.stringify({ ok: false }), 60, 503);
  }
};
