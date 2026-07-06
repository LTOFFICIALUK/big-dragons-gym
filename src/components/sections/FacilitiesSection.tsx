"use client";

import { FACILITY_GALLERY } from "@/lib/constants";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const FacilitiesSection = () => {
  const t = useTranslations("facilities");

  return (
    <section className="relative overflow-hidden section-padding bg-gray-100 facility-grid-pattern">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary-red/[0.04]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-maroon/[0.04]"
      />

      <div className="container-narrow relative">
        <FadeIn className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary-red">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-wide text-maroon sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-4 h-1 w-16 bg-primary-red transition-all duration-500"
          />
          <p className="mx-auto mt-4 max-w-2xl text-base text-brand-black/70 sm:text-lg">
            {t("subtitle")}
          </p>
        </FadeIn>

        <StaggerContainer className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-14 md:gap-6 lg:grid-cols-3">
          {FACILITY_GALLERY.map((item, index) => (
            <StaggerItem key={item.key}>
              <figure className="group flex h-full flex-col overflow-hidden rounded bg-white shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:ring-primary-red/15">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={t(`gallery.${item.key}.alt`)}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/25 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-85"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-3 top-3 font-display text-4xl leading-none text-white/20 transition-colors duration-500 group-hover:text-white/35 sm:right-4 sm:top-4 sm:text-5xl"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 p-4 sm:p-5"
                  >
                    <span className="mb-2 block h-0.5 w-8 bg-primary-red transition-all duration-500 group-hover:w-14" />
                    <span className="font-display text-lg tracking-wide text-white sm:text-xl">
                      {t(`gallery.${item.key}.title`)}
                    </span>
                  </p>
                </div>
                <figcaption className="border-l-[3px] border-primary-red/80 p-4 transition-colors duration-500 group-hover:border-primary-red group-hover:bg-gray-50/80 sm:p-5">
                  <span className="sr-only">{t(`gallery.${item.key}.title`)}</span>
                  <p className="text-sm leading-relaxed text-brand-black/70">
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
