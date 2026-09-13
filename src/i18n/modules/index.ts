import zh from './zh';
import en from './en';
import th from './th';
import ja from './ja';
import ko from './ko';

/**
 * Content modules layered on top of the base language packs.
 * Burmese (my) and Mon (mnw) packs ship English body copy, matching the rest of the site.
 */
export const moduleMessages: Record<string, any> = {
  zh,
  en,
  th,
  ja,
  ko,
  my: en,
  mnw: en,
};

export type WeatherContent = typeof zh.weather;
export type VisitorServicesContent = typeof zh.visitorServices;
export type SeasonStrategyContent = typeof zh.seasonStrategy;
export type AudienceRoutesContent = typeof zh.audienceRoutes;
export type ItineraryContent = typeof zh.itinerary;
export type ScienceResponsibilityContent = typeof zh.scienceResponsibility;
