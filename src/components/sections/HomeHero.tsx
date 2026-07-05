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
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-maroon pt-16 md:pt-20">
      <Image
        src={IMAGES.hero}
        alt="Big Dragons Gym training floor with free weights"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-maroon/95 via-maroon/80 to-maroon/60" />
      <div
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 opacity-[0.07] lg:block"
        aria-hidden="true"
      >
        <Image
          src={IMAGES.logo}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="container-narrow relative z-10 py-20 md:py-28">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <Image
              src={IMAGES.logo}
              alt="Big Dragons Gym crest"
              width={80}
              height={80}
              className="h-16 w-16 rounded object-contain md:h-20 md:w-20"
              priority
            />
            <span className="inline-flex rounded bg-primary-red/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-red">
              North Wales
            </span>
          </div>

          <h1 className="font-display text-4xl leading-[1.1] tracking-wide text-white md:text-5xl lg:text-6xl">
            {t("h1")}
          </h1>
          <p className="mt-6 text-lg text-white/85 md:text-xl">
            {t("heroSubline")}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              {tCta("bookPT")}
            </Link>
            <a href={`tel:${BUSINESS.phone}`} className="btn-secondary">
              {tCta("callDei")}
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
