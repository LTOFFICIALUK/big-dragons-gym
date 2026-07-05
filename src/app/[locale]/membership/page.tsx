import { CTABand } from "@/components/sections/CTABand";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "@/i18n/navigation";
import { IMAGES } from "@/lib/constants";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "membership" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
};

export default async function MembershipPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "membership" });
  const tCta = await getTranslations({ locale, namespace: "cta" });

  const includes = ["access", "equipment", "facility", "community"] as const;

  return (
    <>
      <PageHero title={t("h1")} subtitle={t("intro")} image={IMAGES.membership} />

      <section className="section-padding bg-white">
        <div className="container-narrow max-w-3xl space-y-12">
          <FadeIn>
            <h2 className="font-display text-3xl tracking-wide text-maroon">
              {t("uspTitle")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-black/80">
              {t("usp")}
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="font-display text-3xl tracking-wide text-maroon">
              {t("includesTitle")}
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {includes.map((key) => (
                <li key={key} className="card-premium">
                  <span className="font-display text-2xl text-primary-red">24/7</span>
                  <p className="mt-2 text-brand-black/80">{t(`includes.${key}`)}</p>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn>
            <h2 className="font-display text-3xl tracking-wide text-maroon">
              {t("howToJoinTitle")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-black/80">
              {t("howToJoin")}
            </p>
            <Link href="/contact" className="btn-primary mt-6 inline-flex">
              {tCta("joinNow")}
            </Link>
          </FadeIn>

          <FadeIn>
            <h2 className="font-display text-3xl tracking-wide text-maroon">
              {t("safetyTitle")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-black/80">
              {t("safety")}
            </p>
          </FadeIn>
        </div>
      </section>

      <CTABand
        title={t("h1")}
        subtitle={t("intro")}
        primaryLabel={tCta("joinNow")}
        secondaryLabel={tCta("callUs")}
      />
    </>
  );
}
