import { CTABand } from "@/components/sections/CTABand";
import { PageHero } from "@/components/sections/PageHero";
import { RelatedBlogLink } from "@/components/sections/RelatedBlogLink";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { Check } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { BUSINESS, IMAGES, SITE_URL } from "@/lib/constants";
import { buildFAQSchema, buildServiceSchema } from "@/lib/schema";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "personalTraining" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
};

export default async function PersonalTrainingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "personalTraining" });
  const tCta = await getTranslations({ locale, namespace: "cta" });

  const includes = ["goals", "programme", "form", "accountability", "environment"] as const;
  const faqs = [
    { question: t("faqs.q1"), answer: t("faqs.a1") },
    { question: t("faqs.q2"), answer: t("faqs.a2") },
    { question: t("faqs.q3"), answer: t("faqs.a3") },
    { question: t("faqs.q4"), answer: t("faqs.a4") },
  ];

  const pageUrl = `${SITE_URL}${locale === "cy" ? "/cy/hyfforddi-personol" : "/personal-training"}`;

  return (
    <>
      <JsonLd
        data={[
          buildServiceSchema(t("h1"), t("intro"), pageUrl),
          buildFAQSchema(faqs),
        ]}
      />
      <PageHero
        title={t("h1")}
        subtitle={t("intro")}
        image={IMAGES.personalTraining}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="btn-primary">
            {tCta("bookPT")}
          </Link>
          <a href={BUSINESS.whatsapp} className="btn-secondary" target="_blank" rel="noopener noreferrer">
            {tCta("whatsapp")}
          </a>
        </div>
      </PageHero>

      <section className="section-padding bg-white">
        <div className="container-narrow grid gap-16 lg:grid-cols-2">
          <FadeIn>
            <h2 className="font-display text-3xl tracking-wide text-maroon">
              {t("aboutCoachingTitle")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-black/80">
              {t("aboutCoaching")}
            </p>
            <h2 className="mt-10 font-display text-3xl tracking-wide text-maroon">
              {t("forWhoTitle")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-black/80">
              {t("forWho")}
            </p>
            <p className="mt-6 rounded bg-gray-100 p-4 text-brand-black/70">
              {t("pricingNote")}
            </p>
            <Link href="/contact" className="btn-primary mt-6 inline-flex">
              {tCta("contactForRates")}
            </Link>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="font-display text-3xl tracking-wide text-maroon">
              {t("includesTitle")}
            </h2>
            <ul className="mt-6 space-y-4">
              {includes.map((key) => (
                <li
                  key={key}
                  className="flex items-start gap-3 rounded bg-gray-100 p-4"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary-red" strokeWidth={2.5} aria-hidden="true" />
                  <span className="text-brand-black/80">{t(`includes.${key}`)}</span>
                </li>
              ))}
            </ul>
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
            <RelatedBlogLink
              slug="personal-training-north-wales-dei"
              locale={locale}
              className="mt-8"
            />
          </FadeIn>
        </div>
      </section>

      <CTABand
        title={t("h1")}
        subtitle={t("intro")}
        primaryLabel={tCta("bookPT")}
        secondaryLabel={tCta("callUs")}
      />
    </>
  );
}
