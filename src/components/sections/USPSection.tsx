"use client";

import { Clock, Dumbbell, MapPin, Users, UtensilsCrossed, type LucideIcon } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionTransition } from "@/components/ui/SectionTransition";
import { useTranslations } from "next-intl";

const uspIcons: LucideIcon[] = [Clock, Dumbbell, UtensilsCrossed, Users, MapPin];
const whyKeys = ["local", "supportive", "noNonsense", "access"] as const;

type UspItemProps = {
  label: string;
  Icon: LucideIcon;
  duplicate?: boolean;
};

const UspItem = ({ label, Icon, duplicate = false }: UspItemProps) => (
  <div
    className={`flex shrink-0 items-center gap-3 px-4 sm:px-6${duplicate ? " usp-marquee-duplicate" : ""}`}
    aria-hidden={duplicate || undefined}
  >
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
      <Icon className="h-5 w-5 text-primary-red" strokeWidth={1.75} aria-hidden="true" />
    </div>
    <p className="whitespace-nowrap text-sm font-semibold text-maroon sm:text-base">{label}</p>
  </div>
);

export const USPSection = () => {
  const t = useTranslations("home");

  const usps = [
    { label: t("usps.open247"), Icon: uspIcons[0] },
    { label: t("usps.personalTraining"), Icon: uspIcons[1] },
    { label: t("usps.nutrition"), Icon: uspIcons[2] },
    { label: t("usps.community"), Icon: uspIcons[3] },
    { label: t("usps.location"), Icon: uspIcons[4] },
  ];

  return (
    <>
      <section
        className="relative bg-gray-100 pb-8 pt-10 md:pb-10 md:pt-12"
        aria-label={t("uspMarqueeLabel")}
      >
        <SectionTransition fill="gray-100" anchor="lower" size="md" />
        <div className="usp-marquee usp-marquee-mask overflow-hidden">
          <div className="usp-marquee-track items-center py-2">
            {usps.map((usp) => (
              <UspItem key={usp.label} label={usp.label} Icon={usp.Icon} />
            ))}
            {usps.map((usp) => (
              <UspItem
                key={`${usp.label}-dup`}
                label={usp.label}
                Icon={usp.Icon}
                duplicate
              />
            ))}
          </div>
        </div>
        <SectionTransition fill="gray-100" anchor="upper" size="md" />
      </section>

      <section className="relative section-padding bg-white">
        <SectionTransition fill="gray-100" anchor="lower" size="md" />
        <div className="container-narrow">
          <FadeIn className="text-center">
            <h2 className="font-display text-3xl tracking-wide text-maroon sm:text-4xl md:text-5xl">
              {t("whyTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-brand-black/70 sm:text-lg">
              {t("whySubtitle")}
            </p>
          </FadeIn>

          <StaggerContainer className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 md:gap-6">
            {whyKeys.map((key) => (
              <StaggerItem key={key}>
                <article className="card-premium h-full border-l-4 border-primary-red">
                  <h3 className="font-display text-xl tracking-wide text-maroon sm:text-2xl">
                    {t(`whyPoints.${key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm text-brand-black/70 sm:text-base">
                    {t(`whyPoints.${key}.description`)}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
};
