import { CTABand } from "@/components/sections/CTABand";
import { PageHero } from "@/components/sections/PageHero";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFAQSchema } from "@/lib/schema";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
};

export default async function FAQPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "faq" });
  const tCta = await getTranslations({ locale, namespace: "cta" });

  const faqs = [
    { question: t("items.q1"), answer: t("items.a1") },
    { question: t("items.q2"), answer: t("items.a2") },
    { question: t("items.q3"), answer: t("items.a3") },
    { question: t("items.q4"), answer: t("items.a4") },
    { question: t("items.q5"), answer: t("items.a5") },
    { question: t("items.q6"), answer: t("items.a6") },
  ];

  return (
    <>
      <JsonLd data={buildFAQSchema(faqs)} />
      <PageHero title={t("h1")} subtitle={t("intro")} />

      <section className="section-padding bg-white">
        <div className="container-narrow max-w-3xl">
          <FadeIn>
            <FAQAccordion items={faqs} />
          </FadeIn>
        </div>
      </section>

      <CTABand
        title={t("h1")}
        subtitle={t("intro")}
        primaryLabel={tCta("enquire")}
        secondaryLabel={tCta("callDei")}
      />
    </>
  );
}
