import { Link } from "@/i18n/navigation";
import { BUSINESS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionTransition } from "@/components/ui/SectionTransition";

type CTABandProps = {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref?: "/contact" | "/personal-training" | "/membership";
  primaryExternalHref?: string;
  secondaryLabel?: string;
};

export const CTABand = ({
  title,
  subtitle,
  primaryLabel,
  primaryHref = "/contact",
  primaryExternalHref,
  secondaryLabel,
}: CTABandProps) => (
  <section className="relative overflow-hidden bg-maroon">
    <SectionTransition fill="maroon" anchor="lower" size="md" />
    <div
      className="pointer-events-none absolute inset-0 opacity-5"
      style={{
        backgroundImage: "url('/media/logo-crest.jpg')",
        backgroundSize: "400px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-hidden="true"
    />
    <div className="container-narrow relative section-padding text-center">
      <FadeIn>
        <h2 className="font-display text-3xl tracking-wide text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          {primaryExternalHref ? (
            <a
              href={primaryExternalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary min-w-[200px] text-center"
            >
              {primaryLabel}
            </a>
          ) : (
            <Link href={primaryHref} className="btn-primary min-w-[200px] text-center">
              {primaryLabel}
            </Link>
          )}
          {secondaryLabel && (
            <a href={`tel:${BUSINESS.phone}`} className="btn-secondary min-w-[200px] text-center">
              {secondaryLabel}
            </a>
          )}
        </div>
      </FadeIn>
    </div>
  </section>
);
