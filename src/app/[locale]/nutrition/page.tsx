import { CTABand } from "@/components/sections/CTABand";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { Link } from "@/i18n/navigation";
import { IMAGES, SITE_URL } from "@/lib/constants";
import { buildServiceSchema } from "@/lib/schema";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "nutrition" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
};

export default async function NutritionPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "nutrition" });
  const tCta = await getTranslations({ locale, namespace: "cta" });

  const includes = ["planning", "habits", "alignment", "support"] as const;
  const pageUrl = `${SITE_URL}${locale === "cy" ? "/cy/bwyd" : "/nutrition"}`;

  return (
    <>
      <JsonLd data={buildServiceSchema(t("h1"), t("intro"), pageUrl)} />
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
            <Link href="/contact" className="btn-primary mt-6 inline-flex">
              {tCta("enquire")}
            </Link>
          </FadeIn>
        </div>
      </section>

      <CTABand
        title={t("h1")}
        subtitle={t("intro")}
        primaryLabel={tCta("bookPT")}
        secondaryLabel={tCta("callDei")}
      />
    </>
  );
}
