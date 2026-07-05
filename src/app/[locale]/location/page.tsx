import { PageHero } from "@/components/sections/PageHero";
import { RelatedBlogLink } from "@/components/sections/RelatedBlogLink";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { JsonLd } from "@/components/seo/JsonLd";
import { MapDirectionsLight } from "@/components/ui/MapDirections";
import { GEO_AREA_SLUGS } from "@/lib/areas";
import { buildPageBreadcrumbSchema } from "@/lib/breadcrumbs";
import { getGoogleMapsDirectionsUrl } from "@/lib/maps";
import { BUSINESS } from "@/lib/constants";
import { getAbsolutePageUrl } from "@/lib/metadata";
import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildPageMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "location" });

  return buildPageMetadata({
    locale,
    pathname: "/location",
    title: t("metaTitle"),
    description: t("metaDescription"),
  });
};

export default async function LocationPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "location" });
  const tAreas = await getTranslations({ locale, namespace: "areas" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const tCta = await getTranslations({ locale, namespace: "cta" });
  const lang = locale as "en" | "cy";
  const pageUrl = getAbsolutePageUrl(lang, "/location");

  const directionKeys = ["a470", "station", "betws", "dolwyddelan"] as const;

  return (
    <>
      <JsonLd
        data={buildPageBreadcrumbSchema(lang, [
          { name: tNav("home"), pathname: "/" },
          { name: t("h1"), url: pageUrl },
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
                label={tCta("getDirections")}
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
            <RelatedBlogLink
              slug="why-big-dragons-gym-24-7-blaenau-ffestiniog"
              locale={locale}
              className="mt-8 max-w-3xl"
            />
          </FadeIn>

          <FadeIn className="mt-12 rounded bg-maroon p-8 text-white md:p-10">
            <h2 className="font-display text-2xl tracking-wide">
              {t("areasTitle")}
            </h2>
            <p className="mt-4 text-white/80">{t("areas")}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {GEO_AREA_SLUGS.map((town) => (
                <li key={town}>
                  <Link
                    href={{ pathname: "/areas/[town]", params: { town } }}
                    className="inline-flex rounded-full border border-white/20 px-3 py-1 text-sm text-white/90 transition-colors hover:border-white hover:text-white"
                  >
                    {tAreas(`towns.${town}.name`)}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
