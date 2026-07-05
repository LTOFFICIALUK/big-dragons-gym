import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { MapDirectionsLight } from "@/components/ui/MapDirections";
import { Link } from "@/i18n/navigation";
import { GEO_AREA_SLUGS, isGeoAreaSlug } from "@/lib/areas";
import { buildPageBreadcrumbSchema } from "@/lib/breadcrumbs";
import { buildPageMetadata, getAbsolutePageUrl } from "@/lib/metadata";
import { buildWebPageSchema } from "@/lib/schema";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ locale: string; town: string }>;
};

export const generateStaticParams = () =>
  GEO_AREA_SLUGS.flatMap((town) =>
    ["en", "cy"].map((locale) => ({ locale, town })),
  );

export const generateMetadata = async ({ params }: Props) => {
  const { locale, town } = await params;

  if (!isGeoAreaSlug(town)) {
    return { title: "Not Found" };
  }

  const t = await getTranslations({ locale, namespace: "areas" });

  return buildPageMetadata({
    locale,
    pathname: "/areas/[town]",
    params: { town },
    title: t(`towns.${town}.metaTitle`),
    description: t(`towns.${town}.metaDescription`),
  });
};

export default async function AreaPage({ params }: Props) {
  const { locale, town } = await params;

  if (!isGeoAreaSlug(town)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "areas" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const tCta = await getTranslations({ locale, namespace: "cta" });
  const lang = locale as "en" | "cy";
  const pageUrl = getAbsolutePageUrl(lang, "/areas/[town]", { town });

  const breadcrumbs = buildPageBreadcrumbSchema(lang, [
    { name: tNav("home"), pathname: "/" },
    { name: t("h1"), pathname: "/location" },
    { name: t(`towns.${town}.name`), url: pageUrl },
  ]);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbs,
          buildWebPageSchema({
            name: t(`towns.${town}.metaTitle`),
            description: t(`towns.${town}.metaDescription`),
            url: pageUrl,
          }),
        ]}
      />
      <PageHero title={t(`towns.${town}.h1`)} subtitle={t(`towns.${town}.intro`)} />

      <section className="section-padding bg-white">
        <div className="container-narrow max-w-3xl space-y-10">
          <FadeIn>
            <h2 className="font-display text-3xl tracking-wide text-maroon">
              {t("whyTitle")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-black/80">
              {t(`towns.${town}.why`)}
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="font-display text-3xl tracking-wide text-maroon">
              {t("gettingHereTitle")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-black/80">
              {t(`towns.${town}.directions`)}
            </p>
            <MapDirectionsLight
              className="mt-6"
              label={tCta("getDirections")}
              googleLabel={tCta("googleMaps")}
              appleLabel={tCta("appleMaps")}
            />
          </FadeIn>

          <FadeIn>
            <h2 className="font-display text-3xl tracking-wide text-maroon">
              {t("servicesTitle")}
            </h2>
            <ul className="mt-4 space-y-3 text-lg text-brand-black/80">
              <li>{t("servicesList.pt")}</li>
              <li>{t("servicesList.nutrition")}</li>
              <li>{t("servicesList.membership")}</li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={{ pathname: "/contact", query: { interest: "pt" } }}
                className="btn-primary text-center"
              >
                {tCta("bookPT")}
              </Link>
              <Link href="/location" className="btn-outline-dark text-center">
                {tNav("location")}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
