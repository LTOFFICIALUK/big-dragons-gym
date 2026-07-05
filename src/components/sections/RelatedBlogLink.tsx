import { Link } from "@/i18n/navigation";
import { getBlogPostContent } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

type RelatedBlogLinkProps = {
  slug: string;
  locale: string;
  className?: string;
};

export const RelatedBlogLink = async ({
  slug,
  locale,
  className,
}: RelatedBlogLinkProps) => {
  const post = getBlogPostContent(slug, locale as "en" | "cy");
  if (!post) return null;

  const t = await getTranslations({ locale, namespace: "blog" });

  return (
    <aside
      className={cn(
        "rounded-lg border border-black/5 bg-gray-50 p-4 md:p-5",
        className,
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-black/50">
        {t("relatedReading")}
      </p>
      <Link
        href={{ pathname: "/blog/[slug]", params: { slug } }}
        className="group mt-2 flex items-start gap-2 text-maroon transition-colors hover:text-primary-red"
      >
        <span className="font-medium leading-snug">{post.content.title}</span>
        <ArrowRight
          className="mt-0.5 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5"
          strokeWidth={2}
          aria-hidden="true"
        />
      </Link>
    </aside>
  );
};
