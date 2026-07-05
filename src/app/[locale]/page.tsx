import { FacilitiesSection } from "@/components/sections/FacilitiesSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SocialSection } from "@/components/sections/SocialSection";
import { USPSection } from "@/components/sections/USPSection";
import { buildPageMetadata } from "@/lib/metadata";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return buildPageMetadata({
    locale,
    pathname: "/",
    title: t("metaTitle"),
    description: t("metaDescription"),
  });
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HomeHero />
      <USPSection />
      <ServicesSection />
      <FacilitiesSection />
      <SocialSection />
    </>
  );
}
