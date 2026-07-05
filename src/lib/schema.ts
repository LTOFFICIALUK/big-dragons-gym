import { BUSINESS, IMAGES, SITE_URL } from "./constants";
import { getGoogleMapsDirectionsUrl } from "./maps";

export const buildGymSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["ExerciseGym", "LocalBusiness"],
  name: BUSINESS.name,
  description:
    "24/7 gym, personal training, and nutrition advice in Blaenau Ffestiniog, Gwynedd. Premium fitness centre on High Street, LL41 3AL.",
  image: [`${SITE_URL}${IMAGES.hero}`, `${SITE_URL}${IMAGES.logo}`],
  telephone: BUSINESS.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.locality,
    postalCode: BUSINESS.address.postalCode,
    addressRegion: "Gwynedd",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.geo.lat,
    longitude: BUSINESS.geo.lng,
  },
  hasMap: getGoogleMapsDirectionsUrl(),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [BUSINESS.facebook, BUSINESS.instagram],
  priceRange: "££",
  url: SITE_URL,
  areaServed: [
    { "@type": "City", name: "Blaenau Ffestiniog" },
    { "@type": "AdministrativeArea", name: "Gwynedd" },
    { "@type": "Place", name: "Snowdonia" },
  ],
});

export const buildBreadcrumbSchema = (
  items: { name: string; url: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const buildFAQSchema = (
  faqs: { question: string; answer: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const buildServiceSchema = (
  name: string,
  description: string,
  url: string,
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  provider: {
    "@type": ["ExerciseGym", "LocalBusiness"],
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.address.locality,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: "GB",
    },
  },
  areaServed: [
    { "@type": "City", name: "Blaenau Ffestiniog" },
    { "@type": "AdministrativeArea", name: "Gwynedd" },
    { "@type": "Place", name: "Snowdonia, North Wales" },
  ],
  url,
});

export const buildArticleSchema = ({
  title,
  description,
  url,
  image,
  datePublished,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  image: `${SITE_URL}${image}`,
  datePublished,
  author: {
    "@type": "Organization",
    name: BUSINESS.name,
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: BUSINESS.name,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}${IMAGES.logo}`,
    },
  },
  mainEntityOfPage: url,
});

export const buildWebPageSchema = ({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name,
  description,
  url,
  isPartOf: {
    "@type": "WebSite",
    name: BUSINESS.name,
    url: SITE_URL,
  },
  about: {
    "@type": ["ExerciseGym", "LocalBusiness"],
    name: BUSINESS.name,
  },
});
