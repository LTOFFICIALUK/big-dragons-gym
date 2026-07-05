import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { routing } from "@/i18n/routing";
import { bebasNeue, inter } from "@/lib/fonts";
import { buildGymSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("siteName"),
      template: `%s | ${t("siteName")}`,
    },
    description: t("defaultDescription"),
    openGraph: {
      type: "website",
      locale: locale === "cy" ? "cy_GB" : "en_GB",
      siteName: t("siteName"),
    },
  };
};

export const generateStaticParams = () =>
  routing.locales.map((locale) => ({ locale }));

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "cy")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${bebasNeue.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/media/logo-crest.jpg" />
        <JsonLd data={buildGymSchema()} />
      </head>
      <body className="pb-[4.75rem] lg:pb-0">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileCTA />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
