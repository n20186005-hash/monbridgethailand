import zh from './zh';
import en from './en';
import th from './th';
import ja from './ja';
import ko from './ko';
import my from './my';
import mnw from './mnw';

/**
 * Content modules layered on top of the base language packs.
 * Every shipped locale (including Burmese `my` and Mon `mnw`) has its own
 * localized module so no English body copy leaks into a translated page.
 */
export const moduleMessages: Record<string, any> = {
  zh,
  en,
  th,
  ja,
  ko,
  my,
  mnw,
};

export type WeatherContent = typeof zh.weather;
export type VisitorServicesContent = typeof zh.visitorServices;
export type SeasonStrategyContent = typeof zh.seasonStrategy;
export type AudienceRoutesContent = typeof zh.audienceRoutes;
export type ItineraryContent = typeof zh.itinerary;
export type ScienceResponsibilityContent = typeof zh.scienceResponsibility;
