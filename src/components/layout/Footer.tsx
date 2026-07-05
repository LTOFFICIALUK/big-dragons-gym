import { Link } from "@/i18n/navigation";
import { BUSINESS } from "@/lib/constants";
import { useTranslations } from "next-intl";

const quickLinks = [
  { key: "about", href: "/about" as const },
  { key: "personalTraining", href: "/personal-training" as const },
  { key: "nutrition", href: "/nutrition" as const },
  { key: "location", href: "/location" as const },
  { key: "contact", href: "/contact" as const },
  { key: "blog", href: "/blog" as const },
] as const;

export const Footer = () => {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tLang = useTranslations("language");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-maroon text-white">
      <div className="container-narrow section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-3xl tracking-wider">
              BIG DRAGONS GYM
            </p>
            <p className="mt-2 text-white/70">{t("tagline")}</p>
            <address className="mt-6 space-y-1 not-italic text-white/80">
              <p>{BUSINESS.address.street}</p>
              <p>
                {BUSINESS.address.locality}, {BUSINESS.address.postalCode}
              </p>
            </address>
            <p className="mt-4 inline-flex items-center gap-2 rounded bg-primary-red/20 px-3 py-1 text-sm font-semibold text-primary-red">
              {t("open247")}
            </p>
            <p className="mt-4">
              <span className="text-white/70">{t("callDei")}: </span>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="font-semibold text-white transition-colors hover:text-primary-red"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg tracking-wider">
              {t("quickLinks")}
            </h2>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg tracking-wider">{t("legal")}</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  {tNav("faq")}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  {t("cookies")}
                </Link>
              </li>
            </ul>

            <div className="mt-6 flex gap-4">
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-white"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-white"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>

            <div
              className="mt-6 flex items-center gap-1 text-sm text-white/50"
              role="group"
              aria-label="Language selection"
            >
              <Link
                href="/"
                locale="en"
                className="transition-colors hover:text-white"
              >
                {tLang("en")}
              </Link>
              <span aria-hidden="true">|</span>
              <Link
                href="/"
                locale="cy"
                className="transition-colors hover:text-white"
              >
                {tLang("cy")}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © {year} Big Dragons Gym. {t("rights")}
        </div>
      </div>
    </footer>
  );
};
