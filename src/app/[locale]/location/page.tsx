import { CTABand } from "@/components/sections/CTABand";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { JsonLd } from "@/components/seo/JsonLd";
import { MapDirectionsLight } from "@/components/ui/MapDirections";
import { getGoogleMapsDirectionsUrl } from "@/lib/maps";
import { BUSINESS } from "@/lib/constants";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "location" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
};

export default async function LocationPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "location" });
  const tCta = await getTranslations({ locale, namespace: "cta" });

  const directionKeys = ["a470", "station", "betws", "dolwyddelan"] as const;

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", url: "https://bigdragonsgym.co.uk" },
          { name: t("h1"), url: `https://bigdragonsgym.co.uk${locale === "cy" ? "/cy/lleoliad" : "/location"}` },
        ])}
      />
      <PageHero title={t("h1")} subtitle={t("intro")} />

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <h2 className="font-display text-3xl tracking-wide text-maroon">
                {t("addressTitle")}
              </h2>
              <address className="mt-4 space-y-1 not-italic text-lg text-brand-black/80">
                <p className="font-semibold text-brand-black">{BUSINESS.name}</p>
                <p>{BUSINESS.address.street}</p>
                <p>
                  {BUSINESS.address.locality}, {BUSINESS.address.postalCode}
                </p>
                <p>{BUSINESS.address.country}</p>
              </address>
              <p className="mt-4 rounded border-l-4 border-primary-red bg-gray-100 p-4 text-sm text-brand-black/70">
                {t("buildingNote")}
              </p>
              <MapDirectionsLight
                className="mt-6"
                googleLabel={tCta("googleMaps")}
                appleLabel={tCta("appleMaps")}
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <MapEmbed title={`${BUSINESS.name} map`} />
            </FadeIn>
          </div>

          <div className="mt-16">
            <FadeIn>
              <h2 className="font-display text-3xl tracking-wide text-maroon">
                {t("directionsTitle")}
              </h2>
            </FadeIn>
            <StaggerContainer className="mt-8 grid gap-6 md:grid-cols-2">
              {directionKeys.map((key) => (
                <StaggerItem key={key}>
                  <article className="card-premium h-full">
                    <h3 className="font-display text-xl tracking-wide text-maroon">
                      {t(`directions.${key}.title`)}
                    </h3>
                    <p className="mt-3 leading-relaxed text-brand-black/70">
                      {t(`directions.${key}.text`)}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <FadeIn className="mt-16">
            <h2 className="font-display text-3xl tracking-wide text-maroon">
              {t("parkingTitle")}
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-brand-black/80">
              {t("parking")}
            </p>
          </FadeIn>

          <FadeIn className="mt-12 rounded bg-maroon p-8 text-white md:p-10">
            <h2 className="font-display text-2xl tracking-wide">
              {t("areasTitle")}
            </h2>
            <p className="mt-4 text-white/80">{t("areas")}</p>
          </FadeIn>
        </div>
      </section>

      <CTABand
        title={t("h1")}
        subtitle={t("intro")}
        primaryLabel={tCta("getDirections")}
        primaryExternalHref={getGoogleMapsDirectionsUrl()}
        secondaryLabel={tCta("callUs")}
      />
    </>
  );
}
