import type { Locale } from "@/i18n/routing";

const pathMap = {
  en: {
    home: "/",
    about: "/about",
    personalTraining: "/personal-training",
    nutrition: "/nutrition",
    membership: "/membership",
    location: "/location",
    contact: "/contact",
    blog: "/blog",
    faq: "/faq",
    privacy: "/privacy-policy",
    cookies: "/cookies",
  },
  cy: {
    home: "/cy",
    about: "/cy/amdanom",
    personalTraining: "/cy/hyfforddi-personol",
    nutrition: "/cy/bwyd",
    membership: "/cy/aelodaeth",
    location: "/cy/lleoliad",
    contact: "/cy/cysylltu",
    blog: "/cy/blog",
    faq: "/cy/cwestiynau",
    privacy: "/cy/polisi-preifatrwydd",
    cookies: "/cy/cwcis",
  },
} as const;

export type PathKey = keyof typeof pathMap.en;

export const getLocalizedPath = (locale: Locale, key: PathKey): string =>
  pathMap[locale][key];

export const getAlternatePaths = (key: PathKey) => ({
  en: pathMap.en[key],
  cy: pathMap.cy[key],
});
