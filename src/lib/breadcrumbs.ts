import {
  getAbsolutePageUrl,
  type PagePathname,
} from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema";
import type { Locale } from "@/i18n/routing";

type BreadcrumbItem = {
  name: string;
  pathname?: PagePathname;
  params?: Record<string, string>;
  url?: string;
};

export const buildPageBreadcrumbSchema = (
  locale: Locale,
  items: BreadcrumbItem[],
) =>
  buildBreadcrumbSchema(
    items.map((item) => ({
      name: item.name,
      url:
        item.url ??
        (item.pathname
          ? getAbsolutePageUrl(locale, item.pathname, item.params)
          : getAbsolutePageUrl(locale, "/")),
    })),
  );
