export const GEO_AREA_SLUGS = [
  "blaenau-ffestiniog",
  "dolwyddelan",
  "penrhyndeudraeth",
  "betws-y-coed",
] as const;

export type GeoAreaSlug = (typeof GEO_AREA_SLUGS)[number];

export const isGeoAreaSlug = (slug: string): slug is GeoAreaSlug =>
  GEO_AREA_SLUGS.includes(slug as GeoAreaSlug);
