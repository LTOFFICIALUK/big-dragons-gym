import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { Link } from "@/i18n/navigation";
import { getBlogPostContent, blogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";
import { buildPageMetadata, getAbsolutePageUrl } from "@/lib/metadata";
import { buildArticleSchema } from "@/lib/schema";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export const generateStaticParams = () =>
  blogPosts.flatMap((post) =>
    ["en", "cy"].map((locale) => ({ locale, slug: post.slug }))
  );

export const generateMetadata = async ({ params }: Props) => {
  const { locale, slug } = await params;
  const post = getBlogPostContent(slug, locale as "en" | "cy");

  if (!post) return { title: "Not Found" };

  return buildPageMetadata({
    locale,
    pathname: "/blog/[slug]",
    params: { slug },
    title: post.content.title,
    description: post.content.excerpt,
    ogImage: `${SITE_URL}${post.image}`,
  });
};

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const lang = locale as "en" | "cy";
  const post = getBlogPostContent(slug, lang);

  if (!post) notFound();

  const t = await getTranslations({ locale, namespace: "blog" });
  const tCta = await getTranslations({ locale, namespace: "cta" });
  const { title, excerpt, content: paragraphs } = post.content;
  const pageUrl = getAbsolutePageUrl(lang, "/blog/[slug]", { slug });

  return (
    <>
      <JsonLd
        data={buildArticleSchema({
          title,
          description: excerpt,
          url: pageUrl,
          image: post.image,
          datePublished: "2026-01-01",
        })}
      />
      <article>
        <div className="relative h-[40vh] min-h-[300px] bg-maroon pt-16 md:pt-20">
          <Image
            src={post.image}
            alt={title}
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon via-maroon/70 to-transparent" />
          <div className="container-narrow relative flex h-full flex-col justify-end pb-12">
            <FadeIn>
              <Link
                href="/blog"
                className="mb-4 text-sm text-white/70 transition-colors hover:text-white"
              >
                ← {t("h1")}
              </Link>
              <h1 className="max-w-4xl font-display text-3xl tracking-wide text-white md:text-5xl">
                {title}
              </h1>
              <p className="mt-4 text-white/70">
                {t("author")} · {t("readTime", { minutes: post.readTime })}
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="section-padding bg-white">
          <div className="container-narrow max-w-3xl">
            <FadeIn>
              <p className="text-xl leading-relaxed text-brand-black/80">
                {excerpt}
              </p>
            </FadeIn>
            <div className="mt-10 space-y-6">
              {paragraphs.map((paragraph, index) => (
                <FadeIn key={index} delay={index * 0.05}>
                  <p className="text-lg leading-relaxed text-brand-black/80">
                    {paragraph}
                  </p>
                </FadeIn>
              ))}
            </div>
            <FadeIn className="mt-12 flex flex-col gap-4 border-t border-black/10 pt-8 sm:flex-row">
              <Link
                href={{ pathname: "/contact", query: { interest: "pt" } }}
                className="btn-primary"
              >
                {tCta("bookPT")}
              </Link>
              <Link href="/contact" className="btn-outline-dark">
                {tCta("enquire")}
              </Link>
            </FadeIn>
          </div>
        </div>
      </article>
    </>
  );
}
