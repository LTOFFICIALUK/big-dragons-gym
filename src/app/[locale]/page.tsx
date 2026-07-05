import { CTABand } from "@/components/sections/CTABand";
import { HomeHero } from "@/components/sections/HomeHero";
import { LocationStrip } from "@/components/sections/LocationStrip";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SocialSection } from "@/components/sections/SocialSection";
import { USPSection } from "@/components/sections/USPSection";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      languages: {
        "en-GB": "/",
        "cy-GB": "/cy",
        "x-default": "/",
      },
    },
  };
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "home" });
  const tCta = await getTranslations({ locale, namespace: "cta" });

  return (
    <>
      <HomeHero />
      <USPSection />
      <ServicesSection />
      <SocialSection />
      <LocationStrip />
      <CTABand
        title={t("finalCtaTitle")}
        subtitle={t("finalCtaSubtitle")}
        primaryLabel={tCta("bookPT")}
        secondaryLabel={tCta("callUs")}
      />
    </>
  );
}
