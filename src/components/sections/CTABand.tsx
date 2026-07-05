import { Link } from "@/i18n/navigation";
import { BUSINESS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";

type CTABandProps = {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref?: "/contact" | "/personal-training" | "/membership";
  secondaryLabel?: string;
};

export const CTABand = ({
  title,
  subtitle,
  primaryLabel,
  primaryHref = "/contact",
  secondaryLabel,
}: CTABandProps) => (
  <section className="relative overflow-hidden bg-maroon">
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
        <h2 className="font-display text-4xl tracking-wide text-white md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={primaryHref} className="btn-primary min-w-[200px]">
            {primaryLabel}
          </Link>
          {secondaryLabel && (
            <a
              href={`tel:${BUSINESS.phone}`}
              className="btn-secondary min-w-[200px]"
            >
              {secondaryLabel}
            </a>
          )}
        </div>
      </FadeIn>
    </div>
  </section>
);
