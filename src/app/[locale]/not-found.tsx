import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-maroon pt-20">
      <div className="container-narrow text-center">
        <p className="font-display text-8xl text-primary-red">404</p>
        <h1 className="mt-4 font-display text-4xl tracking-wide text-white">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-white/70">{t("description")}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn-primary">
            {t("backHome")}
          </Link>
          <Link href="/contact" className="btn-secondary">
            {t("contact")}
          </Link>
        </div>
      </div>
    </section>
  );
}
