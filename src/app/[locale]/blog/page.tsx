import { PageHero } from "@/components/sections/PageHero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Link } from "@/i18n/navigation";
import { blogPosts } from "@/lib/blog";
import { ArrowRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Props = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
};

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "blog" });
  const tCta = await getTranslations({ locale, namespace: "cta" });
  const lang = locale as "en" | "cy";

  return (
    <>
      <PageHero title={t("h1")} subtitle={t("intro")} />

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => {
              const content = post[lang];

              return (
                <StaggerItem key={post.slug}>
                  <article className="group overflow-hidden rounded bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <Link href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }}>
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={post.image}
                          alt={content.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary-red">
                          {t("readTime", { minutes: post.readTime })}
                        </p>
                        <h2 className="mt-2 font-display text-xl tracking-wide text-maroon group-hover:text-primary-red">
                          {content.title}
                        </h2>
                        <p className="mt-3 text-sm text-brand-black/70 line-clamp-3">
                          {content.excerpt}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-primary-red">
                          {tCta("readMore")}
                          <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
