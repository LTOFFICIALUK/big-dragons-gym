"use client";

import { Link } from "@/i18n/navigation";
import { BUSINESS, IMAGES } from "@/lib/constants";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const HomeHero = () => {
  const t = useTranslations("home");
  const tCta = useTranslations("cta");
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-maroon pt-16 md:min-h-[90vh] md:pt-20">
      <Image
        src={IMAGES.hero}
        alt="Big Dragons Gym training floor with free weights"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-maroon/95 via-maroon/85 to-maroon/70" />

      <div className="container-narrow relative z-10 py-16 md:py-28">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="mb-5 inline-flex rounded border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/90">
            Blaenau Ffestiniog
          </span>

          <h1 className="font-display text-3xl leading-[1.05] tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {t("h1")}
          </h1>
          <p className="mt-5 text-base text-white/85 sm:text-lg md:text-xl">
            {t("heroSubline")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Link href="/contact" className="btn-primary text-center">
              {tCta("bookPT")}
            </Link>
            <a href={`tel:${BUSINESS.phone}`} className="btn-secondary text-center">
              {tCta("callUs")}
            </a>
          </div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-8 bg-white angular-divider rotate-180"
        aria-hidden="true"
      />
    </section>
  );
};
