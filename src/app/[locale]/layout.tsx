import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { routing } from "@/i18n/routing";
import { IMAGES, SITE_URL } from "@/lib/constants";
import { bebasNeue, inter } from "@/lib/fonts";
import { buildGymSchema } from "@/lib/schema";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import type { Viewport } from "next";
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
      images: [
        {
          url: `${SITE_URL}${IMAGES.hero}`,
          width: 1200,
          height: 630,
          alt: t("siteName"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [`${SITE_URL}${IMAGES.hero}`],
    },
  };
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4a1212",
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
        <link rel="apple-touch-icon" href="/media/logo-crest.jpg" />
        <JsonLd data={buildGymSchema()} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <GoogleAnalytics />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileCTA />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
