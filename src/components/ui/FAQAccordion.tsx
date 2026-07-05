"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { FadeIn } from "./FadeIn";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export const FAQAccordion = ({ items }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle(index);
    }
  };

  return (
    <div className="divide-y divide-black/10 rounded bg-white shadow-sm ring-1 ring-black/5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <FadeIn key={item.question} delay={index * 0.05}>
            <div className="px-6 py-1">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                onClick={() => handleToggle(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
              >
                <span className="font-display text-lg tracking-wide text-maroon md:text-xl">
                  {item.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded bg-primary-red/10 text-primary-red transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-button-${index}`}
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="text-brand-black/80 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
};

export const useFAQItems = (
  namespace: "faq" | "personalTraining",
  prefix: "items" | "faqs" = "items"
) => {
  const t = useTranslations(namespace);

  if (prefix === "faqs") {
    return [
      { question: t("faqs.q1"), answer: t("faqs.a1") },
      { question: t("faqs.q2"), answer: t("faqs.a2") },
      { question: t("faqs.q3"), answer: t("faqs.a3") },
      { question: t("faqs.q4"), answer: t("faqs.a4") },
    ];
  }

  return [
    { question: t("items.q1"), answer: t("items.a1") },
    { question: t("items.q2"), answer: t("items.a2") },
    { question: t("items.q3"), answer: t("items.a3") },
    { question: t("items.q4"), answer: t("items.a4") },
    { question: t("items.q5"), answer: t("items.a5") },
    { question: t("items.q6"), answer: t("items.a6") },
  ];
};
