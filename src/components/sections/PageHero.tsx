import Image from "next/image";
import { ReactNode } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionTransition } from "@/components/ui/SectionTransition";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
};

export const PageHero = ({
  title,
  subtitle,
  image,
  children,
}: PageHeroProps) => (
  <section className="relative overflow-hidden bg-maroon pt-24 md:pt-28">
    {image && (
      <>
        <Image
          src={image}
          alt=""
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/80 via-maroon/90 to-maroon" />
      </>
    )}
    <div className="container-narrow relative pb-16 pt-8 md:pb-20">
      <FadeIn>
        <h1 className="max-w-4xl font-display text-4xl leading-tight tracking-wide text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </FadeIn>
    </div>
    <SectionTransition fill="white" size="sm" />
  </section>
);
