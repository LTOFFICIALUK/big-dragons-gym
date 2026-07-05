import { CTABand } from "@/components/sections/CTABand";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { IMAGES } from "@/lib/constants";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });
  const tCta = await getTranslations({ locale, namespace: "cta" });

  const values = ["access", "coaching", "community", "quality"] as const;

  return (
    <>
      <PageHero title={t("h1")} subtitle={t("intro")} image={IMAGES.gymFloor} />
      <section className="section-padding bg-white">
        <div className="container-narrow max-w-3xl space-y-12">
          <FadeIn>
            <h2 className="font-display text-3xl tracking-wide text-maroon">
              {t("missionTitle")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-black/80">
              {t("mission")}
            </p>
          </FadeIn>
          <FadeIn>
            <h2 className="font-display text-3xl tracking-wide text-maroon">
              {t("distinctTitle")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-black/80">
              {t("distinct")}
            </p>
          </FadeIn>
          <FadeIn>
            <h2 className="font-display text-3xl tracking-wide text-maroon">
              {t("valuesTitle")}
            </h2>
            <ul className="mt-4 space-y-3">
              {values.map((key) => (
                <li
                  key={key}
                  className="flex items-start gap-3 text-lg text-brand-black/80"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-primary-red" />
                  {t(`values.${key}`)}
                </li>
              ))}
            </ul>
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
