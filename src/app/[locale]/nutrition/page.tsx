import { PageHero } from "@/components/sections/PageHero";
import { RelatedBlogLink } from "@/components/sections/RelatedBlogLink";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { Link } from "@/i18n/navigation";
import { buildPageBreadcrumbSchema } from "@/lib/breadcrumbs";
import { IMAGES } from "@/lib/constants";
import { buildPageMetadata, getAbsolutePageUrl } from "@/lib/metadata";
import { buildFAQSchema, buildServiceSchema } from "@/lib/schema";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nutrition" });

  return buildPageMetadata({
    locale,
    pathname: "/nutrition",
    title: t("metaTitle"),
    description: t("metaDescription"),
  });
};

export default async function NutritionPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nutrition" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const tCta = await getTranslations({ locale, namespace: "cta" });
  const lang = locale as "en" | "cy";

  const includes = ["planning", "habits", "alignment", "support"] as const;
  const faqs = [
    { question: t("faqs.q1"), answer: t("faqs.a1") },
    { question: t("faqs.q2"), answer: t("faqs.a2") },
    { question: t("faqs.q3"), answer: t("faqs.a3") },
  ];
  const pageUrl = getAbsolutePageUrl(lang, "/nutrition");

  return (
    <>
      <JsonLd
        data={[
          buildPageBreadcrumbSchema(lang, [
            { name: tNav("home"), pathname: "/" },
            { name: t("h1"), url: pageUrl },
          ]),
          buildServiceSchema(t("h1"), t("intro"), pageUrl),
          buildFAQSchema(faqs),
        ]}
      />
      <PageHero title={t("h1")} subtitle={t("intro")} image={IMAGES.nutrition} />

      <section className="section-padding bg-white">
        <div className="container-narrow grid gap-16 lg:grid-cols-2">
          <FadeIn>
            <h2 className="font-display text-3xl tracking-wide text-maroon">
              {t("approachTitle")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-black/80">
              {t("approach")}
            </p>
            <p className="mt-6 text-sm text-brand-black/60 italic">
              {t("disclaimer")}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="font-display text-3xl tracking-wide text-maroon">
              {t("includesTitle")}
            </h2>
            <ul className="mt-6 space-y-4">
              {includes.map((key) => (
                <li
                  key={key}
                  className="flex items-start gap-3 border-l-4 border-primary-red pl-4"
                >
                  <span className="text-brand-black/80">{t(`includes.${key}`)}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-brand-black/70">{t("linkPT")}</p>
            <Link
              href={{ pathname: "/contact", query: { interest: "nutrition" } }}
              className="btn-primary mt-6 inline-flex"
            >
              {tCta("enquire")}
            </Link>
            <RelatedBlogLink
              slug="simple-nutrition-tips-gym-goals"
              locale={locale}
              className="mt-8"
            />
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-gray-100">
        <div className="container-narrow max-w-3xl">
          <FadeIn>
            <h2 className="font-display text-3xl tracking-wide text-maroon">
              {t("faqTitle")}
            </h2>
            <div className="mt-8">
              <FAQAccordion items={faqs} />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
