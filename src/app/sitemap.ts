import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
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
    "/cy",
    "/cy/amdanom",
    "/cy/hyfforddi-personol",
    "/cy/bwyd",
    "/cy/aelodaeth",
    "/cy/lleoliad",
    "/cy/cysylltu",
    "/cy/blog",
    "/cy/cwestiynau",
    "/cy/polisi-preifatrwydd",
    "/cy/cwcis",
  ];

  const blogEntries = blogPosts.flatMap((post) => [
    {
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/cy/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]);

  return [
    ...staticPages.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" || path === "/cy" ? 1 : 0.8,
    })),
    ...blogEntries,
  ];
}
