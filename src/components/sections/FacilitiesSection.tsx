"use client";

import { FACILITY_GALLERY } from "@/lib/constants";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCallback, useRef, useState } from "react";

type GalleryItem = (typeof FACILITY_GALLERY)[number];

type FacilityCardProps = {
  item: GalleryItem;
  index: number;
  title: string;
  description: string;
  alt: string;
  compact?: boolean;
};

const FacilityCard = ({
  item,
  index,
  title,
  description,
  alt,
  compact = false,
}: FacilityCardProps) => (
  <figure
    className={`group flex h-full flex-col overflow-hidden rounded bg-white shadow-sm ring-1 ring-black/5 transition-all duration-500 ${
      compact ? "" : "hover:-translate-y-1.5 hover:shadow-xl hover:ring-primary-red/15"
    }`}
  >
    <div className={`relative overflow-hidden ${compact ? "aspect-[5/4]" : "aspect-[4/3]"}`}>
      <Image
        src={item.src}
        alt={alt}
        fill
        className={`object-cover ${compact ? "" : "transition-transform duration-700 ease-out group-hover:scale-110"}`}
        sizes={
          compact
            ? "88vw"
            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        }
        priority={compact && index === 0}
      />
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-t from-maroon/95 via-maroon/40 to-maroon/10 ${
          compact ? "opacity-90" : "opacity-60 transition-opacity duration-500 group-hover:opacity-85"
        }`}
      />
      <span
        aria-hidden="true"
        className={`absolute right-3 top-3 font-display leading-none text-white/20 ${
          compact ? "text-3xl" : "text-4xl transition-colors duration-500 group-hover:text-white/35 sm:right-4 sm:top-4 sm:text-5xl"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div
        aria-hidden={compact ? undefined : true}
        className={`absolute inset-x-0 bottom-0 ${compact ? "p-4" : "p-4 sm:p-5"}`}
      >
        <span className="mb-2 block h-0.5 w-8 bg-primary-red transition-all duration-500 group-hover:w-14" />
        <p className="font-display text-lg tracking-wide text-white sm:text-xl">{title}</p>
        {compact ? (
          <p className="mt-1.5 text-sm leading-snug text-white/85">{description}</p>
        ) : null}
      </div>
    </div>
    {!compact ? (
      <figcaption className="border-l-[3px] border-primary-red/80 p-4 transition-colors duration-500 group-hover:border-primary-red group-hover:bg-gray-50/80 sm:p-5">
        <span className="sr-only">{title}</span>
        <p className="text-sm leading-relaxed text-brand-black/70">{description}</p>
      </figcaption>
    ) : null}
  </figure>
);

export const FacilitiesSection = () => {
  const t = useTranslations("facilities");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const slides = Array.from(container.children) as HTMLElement[];
    if (slides.length === 0) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(containerCenter - slideCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const slide = container.children[index] as HTMLElement | undefined;
    if (!slide) return;

    slide.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setActiveIndex(index);
  };

  const handlePrevious = () => {
    scrollToIndex(Math.max(activeIndex - 1, 0));
  };

  const handleNext = () => {
    scrollToIndex(Math.min(activeIndex + 1, FACILITY_GALLERY.length - 1));
  };

  const handleDotClick = (index: number) => {
    scrollToIndex(index);
  };

  const handleDotKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleDotClick(index);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gray-100 py-12 facility-grid-pattern md:py-24">
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
          <h2 className="mt-2 font-display text-2xl tracking-wide text-maroon sm:mt-3 sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-3 h-1 w-16 bg-primary-red transition-all duration-500 sm:mt-4"
          />
          <p className="mx-auto mt-3 max-w-2xl text-sm text-brand-black/70 sm:mt-4 sm:text-lg">
            {t("subtitle")}
          </p>
        </FadeIn>

        <div className="mt-6 sm:hidden">
          <div
            ref={scrollRef}
            role="region"
            aria-roledescription="carousel"
            aria-label={t("title")}
            className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onScroll={handleScroll}
          >
            {FACILITY_GALLERY.map((item, index) => (
              <div
                key={item.key}
                className="w-[88%] shrink-0 snap-center"
                aria-hidden={activeIndex !== index}
              >
                <FacilityCard
                  item={item}
                  index={index}
                  title={t(`gallery.${item.key}.title`)}
                  description={t(`gallery.${item.key}.description`)}
                  alt={t(`gallery.${item.key}.alt`)}
                  compact
                />
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={activeIndex === 0}
              aria-label="Previous facility"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white text-maroon shadow-sm ring-1 ring-black/5 transition-colors hover:bg-primary-red/5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <div
              className="flex flex-wrap items-center justify-center gap-1.5"
              role="tablist"
              aria-label="Facility slides"
            >
              {FACILITY_GALLERY.map((item, index) => (
                <button
                  key={item.key}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-label={`${t(`gallery.${item.key}.title`)} — slide ${index + 1} of ${FACILITY_GALLERY.length}`}
                  onClick={() => handleDotClick(index)}
                  onKeyDown={(event) => handleDotKeyDown(event, index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-6 bg-primary-red"
                      : "w-2 bg-maroon/20 hover:bg-maroon/35"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={activeIndex === FACILITY_GALLERY.length - 1}
              aria-label="Next facility"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-white text-maroon shadow-sm ring-1 ring-black/5 transition-colors hover:bg-primary-red/5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <p className="mt-2 text-center text-xs font-medium tabular-nums text-brand-black/45">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(FACILITY_GALLERY.length).padStart(2, "0")}
          </p>
        </div>

        <StaggerContainer className="mt-10 hidden gap-5 sm:grid sm:grid-cols-2 md:mt-14 md:gap-6 lg:grid-cols-3">
          {FACILITY_GALLERY.map((item, index) => (
            <StaggerItem key={item.key}>
              <FacilityCard
                item={item}
                index={index}
                title={t(`gallery.${item.key}.title`)}
                description={t(`gallery.${item.key}.description`)}
                alt={t(`gallery.${item.key}.alt`)}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
