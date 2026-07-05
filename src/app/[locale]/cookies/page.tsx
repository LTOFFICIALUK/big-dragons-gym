import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildPageMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({ params }: Props) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cookies" });

  return buildPageMetadata({
    locale,
    pathname: "/cookies",
    title: t("metaTitle"),
    description: t("content").slice(0, 155),
  });
};

export default async function CookiesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "cookies" });

  return (
    <>
      <PageHero title={t("h1")} />
      <section className="section-padding bg-white">
        <div className="container-narrow max-w-3xl">
          <FadeIn>
            <p className="text-lg leading-relaxed text-brand-black/80">
              {t("content")}
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
