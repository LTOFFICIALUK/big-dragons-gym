import { MetadataRoute } from "next";
import { GEO_AREA_SLUGS } from "@/lib/areas";
import { blogPosts } from "@/lib/blog";
import { getAbsolutePageUrl, type PagePathname } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

const STATIC_PATHS: PagePathname[] = [
  "/",
  "/about",
  "/personal-training",
  "/nutrition",
  "/membership",
  "/location",
  "/contact",
  "/blog",
  "/faq",
  "/privacy-policy",
  "/cookies",
];

const buildAlternates = (pathname: PagePathname, params?: Record<string, string>) => ({
  languages: {
    en: getAbsolutePageUrl("en", pathname, params),
    cy: getAbsolutePageUrl("cy", pathname, params),
  },
});

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_PATHS.map((pathname) => ({
    url: getAbsolutePageUrl("en", pathname),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: pathname === "/" ? 1 : 0.8,
    alternates: buildAlternates(pathname),
  }));

  const areaEntries = GEO_AREA_SLUGS.flatMap((town) => ({
    url: getAbsolutePageUrl("en", "/areas/[town]", { town }),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
    alternates: buildAlternates("/areas/[town]", { town }),
  }));

  const blogEntries = blogPosts.flatMap((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: buildAlternates("/blog/[slug]", { slug: post.slug }),
  }));

  return [...staticEntries, ...areaEntries, ...blogEntries];
}
