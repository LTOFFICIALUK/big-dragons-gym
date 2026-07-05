import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "cy"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      cy: "/amdanom",
    },
    "/personal-training": {
      en: "/personal-training",
      cy: "/hyfforddi-personol",
    },
    "/nutrition": {
      en: "/nutrition",
      cy: "/bwyd",
    },
    "/membership": {
      en: "/membership",
      cy: "/aelodaeth",
    },
    "/location": {
      en: "/location",
      cy: "/lleoliad",
    },
    "/contact": {
      en: "/contact",
      cy: "/cysylltu",
    },
    "/blog": {
      en: "/blog",
      cy: "/blog",
    },
    "/blog/[slug]": {
      en: "/blog/[slug]",
      cy: "/blog/[slug]",
    },
    "/faq": {
      en: "/faq",
      cy: "/cwestiynau",
    },
    "/privacy-policy": {
      en: "/privacy-policy",
      cy: "/polisi-preifatrwydd",
    },
    "/cookies": {
      en: "/cookies",
      cy: "/cwcis",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
