declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>,
) => {
  if (typeof window === "undefined" || !window.gtag || !GA_MEASUREMENT_ID) {
    return;
  }

  window.gtag("event", eventName, params);
};

export const trackConversion = (
  action: "phone_click" | "whatsapp_click" | "form_submit" | "directions_click",
  label?: string,
) => {
  trackEvent(action, {
    event_category: "conversion",
    event_label: label ?? action,
  });
};
