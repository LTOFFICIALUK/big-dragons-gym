"use client";

import { Link } from "@/i18n/navigation";
import { trackConversion } from "@/lib/analytics";
import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

type ContactFormProps = {
  defaultInterest?: string;
};

export const ContactForm = ({ defaultInterest = "general" }: ContactFormProps) => {
  const t = useTranslations("contact.form");
  const tCta = useTranslations("cta");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          interest: formData.get("interest"),
          message: formData.get("message"),
          gdpr: formData.get("gdpr") === "on",
        }),
      });

      if (response.ok) {
        trackConversion("form_submit", String(formData.get("interest") ?? "general"));
        setStatus("success");
        event.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "success") {
    return (
      <FadeIn>
        <div
          className="rounded bg-green-50 p-8 text-center ring-1 ring-green-200"
          role="status"
        >
          <p className="text-lg text-green-800">{t("success")}</p>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8"
        noValidate
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand-black">
              {t("name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-2 w-full rounded border border-black/10 px-4 py-3 transition-colors focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-brand-black">
              {t("phone")}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="mt-2 w-full rounded border border-black/10 px-4 py-3 transition-colors focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-black">
            {t("email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-2 w-full rounded border border-black/10 px-4 py-3 transition-colors focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20"
          />
        </div>

        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-brand-black">
            {t("interest")}
          </label>
          <select
            id="interest"
            name="interest"
            defaultValue={defaultInterest}
            className="mt-2 w-full rounded border border-black/10 px-4 py-3 transition-colors focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20"
          >
            <option value="pt">{t("interests.pt")}</option>
            <option value="nutrition">{t("interests.nutrition")}</option>
            <option value="membership">{t("interests.membership")}</option>
            <option value="general">{t("interests.general")}</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-brand-black">
            {t("message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-2 w-full rounded border border-black/10 px-4 py-3 transition-colors focus:border-primary-red focus:outline-none focus:ring-2 focus:ring-primary-red/20"
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="gdpr"
            name="gdpr"
            required
            className="mt-1 h-4 w-4 rounded border-black/20 text-primary-red focus:ring-primary-red"
          />
          <label htmlFor="gdpr" className="text-sm text-brand-black/70">
            {t("gdpr")}{" "}
            <Link
              href="/privacy-policy"
              className="text-primary-red underline hover:text-maroon"
            >
              {t("privacyLink")}
            </Link>
          </label>
        </div>

        {status === "error" && (
          <p className="text-sm text-primary-red" role="alert">
            {t("error")}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-50 md:w-auto"
        >
          {isSubmitting ? "..." : tCta("sendEnquiry")}
        </button>
      </form>
    </FadeIn>
  );
};
