"use client";

import { FACILITY_GALLERY } from "@/lib/constants";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const FacilitiesSection = () => {
  const t = useTranslations("facilities");

  return (
    <section className="relative section-padding bg-gray-100">
      <div className="container-narrow">
        <FadeIn className="text-center">
          <h2 className="font-display text-3xl tracking-wide text-maroon sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-brand-black/70 sm:text-lg">
            {t("subtitle")}
          </p>
        </FadeIn>

        <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {FACILITY_GALLERY.map((item) => (
            <StaggerItem key={item.key}>
              <figure className="group overflow-hidden rounded bg-white shadow-sm ring-1 ring-black/5">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={t(`gallery.${item.key}.alt`)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="p-4">
                  <p className="font-display text-lg tracking-wide text-maroon">
                    {t(`gallery.${item.key}.title`)}
                  </p>
                  <p className="mt-1 text-sm text-brand-black/70">
                    {t(`gallery.${item.key}.description`)}
                  </p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
