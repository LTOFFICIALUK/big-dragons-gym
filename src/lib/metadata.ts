import { routing } from "@/i18n/routing";
import { IMAGES, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

export type PagePathname = keyof typeof routing.pathnames;

type Locale = (typeof routing.locales)[number];

export const getLocalizedPageUrl = (
  locale: Locale,
  pathname: PagePathname,
  params?: Record<string, string>,
): string => {
  const config = routing.pathnames[pathname];
  let segment: string =
    typeof config === "string" ? config : config[locale];

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      segment = segment.replace(`[${key}]`, value);
    });
  }

  if (locale === "cy") {
    return segment === "/" ? "/cy" : `/cy${segment}`;
  }

  return segment;
};

export const getAbsolutePageUrl = (
  locale: Locale,
  pathname: PagePathname,
  params?: Record<string, string>,
): string => `${SITE_URL}${getLocalizedPageUrl(locale, pathname, params)}`;

type BuildPageMetadataOptions = {
  locale: string;
  pathname: PagePathname;
  title: string;
  description: string;
  params?: Record<string, string>;
  ogImage?: string;
};

export const buildPageMetadata = ({
  locale,
  pathname,
  title,
  description,
  params,
  ogImage = `${SITE_URL}${IMAGES.hero}`,
}: BuildPageMetadataOptions): Metadata => {
  const lang = locale as Locale;
  const enUrl = getAbsolutePageUrl("en", pathname, params);
  const cyUrl = getAbsolutePageUrl("cy", pathname, params);
  const canonical = lang === "cy" ? cyUrl : enUrl;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        "en-GB": enUrl,
        "cy-GB": cyUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Big Dragons Gym",
      locale: lang === "cy" ? "cy_GB" : "en_GB",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
};
