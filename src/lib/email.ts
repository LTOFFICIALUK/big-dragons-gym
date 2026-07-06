import { Resend } from "resend";
import { BUSINESS } from "@/lib/constants";
import {
  buildButtonRow,
  buildCalloutBox,
  buildDetailsTable,
  buildEmailHeading,
  buildEmailLayout,
  buildEmailParagraph,
  buildEmailSectionTitle,
  buildStatusBadge,
  escapeHtml,
} from "@/lib/email-template";

const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL_TO ?? "mondeisec@gmail.com";

const FROM_EMAIL = "Big Dragons Gym <enquiries@bigdragonsgym.co.uk>";

const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return null;
  }

  return new Resend(apiKey);
};

const INTEREST_LABELS: Record<string, string> = {
  pt: "Personal Training",
  nutrition: "Nutrition",
  membership: "Membership",
  general: "General Enquiry",
};

export type EnquiryPayload = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

const buildDetailRows = (payload: EnquiryPayload) => [
  { label: "Name", value: payload.name },
  { label: "Phone", value: payload.phone },
  { label: "Email", value: payload.email },
  {
    label: "Interest",
    value: INTEREST_LABELS[payload.interest] ?? payload.interest,
  },
  { label: "Message", value: payload.message, multiline: true },
];

export const buildOwnerEmail = (payload: EnquiryPayload) => {
  const intro = "You have received a new enquiry from the Big Dragons Gym website.";
  const phoneHref = payload.phone.replace(/[^\d+]/g, "");

  const content = [
    buildEmailHeading("New website enquiry"),
    buildEmailParagraph(intro),
    buildButtonRow([
      {
        href: `mailto:${escapeHtml(payload.email)}`,
        label: `Reply to ${payload.name.split(" ")[0]}`,
      },
      {
        href: `tel:${phoneHref}`,
        label: "Call back",
        variant: "secondary",
      },
    ]),
    buildEmailSectionTitle("Enquiry details"),
    buildDetailsTable(buildDetailRows(payload)),
    buildEmailParagraph(
      `Reply-to is set to <a href="mailto:${escapeHtml(payload.email)}" style="color:#C62828;text-decoration:underline;">${escapeHtml(payload.email)}</a> — just hit reply on this email to respond.`,
    ),
  ].join("");

  return {
    subject: `New enquiry from ${payload.name} — ${INTEREST_LABELS[payload.interest] ?? payload.interest}`,
    html: buildEmailLayout({ previewText: intro, content }),
  };
};

export const buildCustomerEmail = (payload: EnquiryPayload) => {
  const previewText =
    "Thanks for your enquiry. We'll be in touch soon.";
  const phoneHref = BUSINESS.primaryContact.phone.replace(/\s/g, "");

  const content = [
    buildStatusBadge("Enquiry received"),
    buildEmailParagraph(`Hi ${escapeHtml(payload.name)},`),
    buildEmailParagraph(
      `Thank you for getting in touch with ${escapeHtml(BUSINESS.name)}.`,
    ),
    buildEmailParagraph(
      "We have received your enquiry and will be in touch as soon as possible.",
    ),
    buildCalloutBox(
      `<p style="margin:0 0 4px;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#4A1212;">Need a faster response?</p>
       <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.55;color:#1A1A1A;">Call ${escapeHtml(BUSINESS.primaryContact.name)} on <a href="tel:${phoneHref}" style="color:#C62828;text-decoration:none;font-weight:600;">${escapeHtml(BUSINESS.primaryContact.phoneDisplay)}</a></p>`,
    ),
    buildEmailSectionTitle("Summary of your enquiry"),
    buildDetailsTable(buildDetailRows(payload)),
    buildEmailParagraph(
      "If anything looks incorrect, reply to this email and we will update your enquiry.",
    ),
    buildEmailParagraph(
      `Kind regards,<br /><strong style="color:#C62828;">${escapeHtml(BUSINESS.name)}</strong>`,
    ),
  ].join("");

  return {
    subject: "We've received your enquiry — Big Dragons Gym",
    html: buildEmailLayout({ previewText, content }),
  };
};

export const sendEnquiryEmails = async (
  payload: EnquiryPayload,
): Promise<void> => {
  const resend = getResend();
  if (!resend) {
    throw new Error("Email service is not configured.");
  }

  const ownerEmail = buildOwnerEmail(payload);
  const customerEmail = buildCustomerEmail(payload);

  const [ownerResult, customerResult] = await Promise.all([
    resend.emails.send({
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: payload.email,
      subject: ownerEmail.subject,
      html: ownerEmail.html,
    }),
    resend.emails.send({
      from: FROM_EMAIL,
      to: payload.email,
      replyTo: CONTACT_EMAIL,
      subject: customerEmail.subject,
      html: customerEmail.html,
    }),
  ]);

  if (ownerResult.error || customerResult.error) {
    throw new Error(
      ownerResult.error?.message ??
        customerResult.error?.message ??
        "Failed to send enquiry emails.",
    );
  }
};
