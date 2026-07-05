import { MembershipPricing } from "@/components/sections/MembershipPricing";
import { PageHero } from "@/components/sections/PageHero";
import { RelatedBlogLink } from "@/components/sections/RelatedBlogLink";
import { FadeIn } from "@/components/ui/FadeIn";
import { Link } from "@/i18n/navigation";
import { IMAGES } from "@/lib/constants";
import { Clock, Dumbbell, ShieldCheck, Users, type LucideIcon } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildPageMetadata } from "@/lib/metadata";

type Props = {
  params: Promise<{ locale: string }>;
};

const includeIcons: Record<"access" | "equipment" | "facility" | "community", LucideIcon> = {
  access: Clock,
  equipment: Dumbbell,
  facility: ShieldCheck,
  community: Users,
};

export const generateMetadata = async ({ params }: Props) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "membership" });

  return buildPageMetadata({
    locale,
    pathname: "/membership",
    title: t("metaTitle"),
    description: t("metaDescription"),
  });
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

      <MembershipPricing />

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
              {includes.map((key) => {
                const Icon = includeIcons[key];

                return (
                  <li key={key} className="card-premium">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-red/10">
                      <Icon
                        className="h-5 w-5 text-primary-red"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-3 text-brand-black/80">{t(`includes.${key}`)}</p>
                  </li>
                );
              })}
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
            <RelatedBlogLink
              slug="why-big-dragons-gym-24-7-blaenau-ffestiniog"
              locale={locale}
              className="mt-8"
            />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
