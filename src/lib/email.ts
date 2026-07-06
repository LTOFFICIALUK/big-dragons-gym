import { Resend } from "resend";
import { BUSINESS, SITE_URL } from "@/lib/constants";

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

const BRAND = {
  red: "#C62828",
  maroon: "#4A1212",
  charcoal: "#1A1A1A",
  muted: "#555555",
  border: "#E8E8E8",
  cream: "#FAFAFA",
  white: "#FFFFFF",
} as const;

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

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const formatMultilineHtml = (value: string): string =>
  escapeHtml(value).replace(/\n/g, "<br />");

const buildEmailLayout = (previewText: string, content: string): string => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(BUSINESS.name)}</title>
  </head>
  <body style="margin:0;padding:0;background-color:${BRAND.cream};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
      ${escapeHtml(previewText)}
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BRAND.cream};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background-color:${BRAND.white};border:1px solid ${BRAND.border};border-radius:8px;overflow:hidden;">
            <tr>
              <td style="padding:28px 32px;background-color:${BRAND.maroon};text-align:center;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:22px;font-weight:700;color:${BRAND.white};">
                  ${escapeHtml(BUSINESS.name)}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;font-family:Arial,Helvetica,sans-serif;color:${BRAND.charcoal};">
                ${content}
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background-color:${BRAND.cream};border-top:1px solid ${BRAND.border};">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;color:${BRAND.muted};text-align:center;">
                  ${escapeHtml(BUSINESS.name)} · ${escapeHtml(BUSINESS.address.street)}, ${escapeHtml(BUSINESS.address.locality)} ${escapeHtml(BUSINESS.address.postalCode)}<br />
                  <a href="${SITE_URL}" style="color:${BRAND.red};text-decoration:underline;">${SITE_URL.replace("https://", "")}</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

const buildParagraph = (text: string): string =>
  `<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:${BRAND.charcoal};">${text}</p>`;

const buildDetailsTable = (
  rows: { label: string; value: string; multiline?: boolean }[],
): string => {
  const tableRows = rows
    .map((row, index) => {
      const value = row.multiline
        ? formatMultilineHtml(row.value)
        : escapeHtml(row.value);
      const border =
        index === rows.length - 1
          ? ""
          : `border-bottom:1px solid ${BRAND.border};`;

      return `
        <tr>
          <td style="padding:14px 18px;${border}">
            <p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND.red};">
              ${escapeHtml(row.label)}
            </p>
            <p style="margin:0;font-size:15px;line-height:1.55;color:${BRAND.charcoal};">
              ${value}
            </p>
          </td>
        </tr>
      `;
    })
    .join("");

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 0;border:1px solid ${BRAND.border};border-radius:6px;background-color:${BRAND.cream};overflow:hidden;">
      ${tableRows}
    </table>
  `;
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

const buildOwnerEmail = (payload: EnquiryPayload) => {
  const intro = "You have received a new enquiry from the Big Dragons Gym website.";
  const content = [
    `<h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;color:${BRAND.maroon};">New website enquiry</h1>`,
    buildParagraph(intro),
    buildParagraph(
      `Reply directly to <a href="mailto:${escapeHtml(payload.email)}" style="color:${BRAND.red};text-decoration:underline;">${escapeHtml(payload.email)}</a> to follow up.`,
    ),
    buildDetailsTable(buildDetailRows(payload)),
  ].join("");

  return {
    subject: `New enquiry from ${payload.name} — ${INTEREST_LABELS[payload.interest] ?? payload.interest}`,
    html: buildEmailLayout(intro, content),
  };
};

const buildCustomerEmail = (payload: EnquiryPayload) => {
  const previewText =
    "Thanks for your enquiry. We'll be in touch soon.";
  const content = [
    buildParagraph(`Hi ${escapeHtml(payload.name)},`),
    buildParagraph(
      `Thank you for getting in touch with ${escapeHtml(BUSINESS.name)}.`,
    ),
    buildParagraph(
      "We have received your enquiry and will be in touch as soon as possible. If you need a quicker response, call Dei on +44 7940 125381.",
    ),
    `<h2 style="margin:24px 0 8px;font-size:16px;color:${BRAND.maroon};">Summary of your enquiry</h2>`,
    buildDetailsTable(buildDetailRows(payload)),
    buildParagraph(
      "If anything looks incorrect, reply to this email and we will update your enquiry.",
    ),
    buildParagraph(
      `Kind regards,<br /><strong style="color:${BRAND.red};">${escapeHtml(BUSINESS.name)}</strong>`,
    ),
  ].join("");

  return {
    subject: "We've received your enquiry — Big Dragons Gym",
    html: buildEmailLayout(previewText, content),
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
