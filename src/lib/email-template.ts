import { BUSINESS, IMAGES, SITE_URL } from "@/lib/constants";

const BRAND = {
  red: "#C62828",
  redLight: "#E53935",
  maroon: "#4A1212",
  maroonLight: "#6B1F1F",
  charcoal: "#1A1A1A",
  muted: "#555555",
  mutedLight: "#888888",
  border: "#E8E8E8",
  cream: "#F5F5F5",
  white: "#FFFFFF",
} as const;

const FONT =
  "Arial, Helvetica, 'Segoe UI', sans-serif";

export const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const formatMultilineHtml = (value: string): string =>
  escapeHtml(value).replace(/\n/g, "<br />");

type EmailDetailRow = {
  label: string;
  value: string;
  multiline?: boolean;
};

const buildDetailRow = (
  { label, value, multiline = false }: EmailDetailRow,
  isLast: boolean,
): string => {
  const formattedValue = multiline
    ? formatMultilineHtml(value)
    : escapeHtml(value);
  const borderStyle = isLast ? "" : `border-bottom:1px solid ${BRAND.border};`;

  return `
    <tr>
      <td class="detail-label" width="130" valign="top" style="padding:14px 0 14px 18px;${borderStyle}font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${BRAND.red};white-space:nowrap;">
        ${escapeHtml(label)}
      </td>
      <td class="detail-value" valign="top" style="padding:14px 18px 14px 0;${borderStyle}font-family:${FONT};font-size:15px;line-height:1.55;color:${BRAND.charcoal};">
        ${formattedValue}
      </td>
    </tr>
  `;
};

export const buildDetailsTable = (rows: EmailDetailRow[]): string => {
  if (rows.length === 0) {
    return "";
  }

  const tableRows = rows
    .map((row, index) => buildDetailRow(row, index === rows.length - 1))
    .join("");

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:20px 0 0;border:1px solid ${BRAND.border};border-radius:8px;background-color:${BRAND.cream};overflow:hidden;">
      ${tableRows}
    </table>
  `;
};

const buildEmailHeader = (): string => {
  const logoUrl = `${SITE_URL}${IMAGES.logo}`;

  return `
    <tr>
      <td class="email-header" style="padding:32px 40px 24px;background-color:${BRAND.white};text-align:center;">
        <a href="${SITE_URL}" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">
          <img
            src="${logoUrl}"
            alt="${escapeHtml(BUSINESS.name)}"
            width="88"
            height="88"
            style="display:block;width:88px;height:88px;max-width:100%;margin:0 auto 16px;border:0;border-radius:50%;object-fit:cover;"
          />
          <p style="margin:0;font-family:${FONT};font-size:22px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${BRAND.maroon};">
            ${escapeHtml(BUSINESS.name)}
          </p>
        </a>
      </td>
    </tr>
    <tr>
      <td style="padding:0;line-height:0;font-size:0;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td width="50%" height="4" style="background-color:${BRAND.red};font-size:0;line-height:0;">&nbsp;</td>
            <td width="50%" height="4" style="background-color:${BRAND.maroon};font-size:0;line-height:0;">&nbsp;</td>
          </tr>
        </table>
      </td>
    </tr>
  `;
};

const buildEmailFooter = (): string => {
  const currentYear = new Date().getFullYear();
  const { street, locality, postalCode } = BUSINESS.address;
  const phoneHref = BUSINESS.primaryContact.phone.replace(/\s/g, "");

  return `
    <tr>
      <td class="email-footer" style="padding:28px 40px;background-color:${BRAND.maroon};text-align:center;">
        <p style="margin:0 0 6px;font-family:${FONT};font-size:16px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND.white};">
          ${escapeHtml(BUSINESS.name)}
        </p>
        <p style="margin:0 0 16px;font-family:${FONT};font-size:13px;line-height:1.6;color:rgba(255,255,255,0.75);">
          ${escapeHtml(street)}, ${escapeHtml(locality)} ${escapeHtml(postalCode)}
        </p>
        <p style="margin:0 0 8px;font-family:${FONT};font-size:14px;line-height:1.6;">
          <a href="tel:${phoneHref}" style="color:${BRAND.white};text-decoration:none;font-weight:600;">${escapeHtml(BUSINESS.primaryContact.phoneDisplay)}</a>
        </p>
        <p style="margin:0 0 16px;font-family:${FONT};font-size:13px;line-height:1.6;">
          <a href="${BUSINESS.whatsapp}" target="_blank" rel="noopener noreferrer" style="color:${BRAND.redLight};text-decoration:none;">WhatsApp us</a>
          &nbsp;&nbsp;·&nbsp;&nbsp;
          <a href="${SITE_URL}" target="_blank" rel="noopener noreferrer" style="color:${BRAND.redLight};text-decoration:none;">bigdragonsgym.co.uk</a>
        </p>
        <p style="margin:0;font-family:${FONT};font-size:11px;line-height:1.5;color:rgba(255,255,255,0.45);">
          &copy; ${currentYear} ${escapeHtml(BUSINESS.name)}. Open ${escapeHtml(BUSINESS.hours)}.
        </p>
      </td>
    </tr>
  `;
};

type EmailLayoutOptions = {
  previewText: string;
  content: string;
};

export const buildEmailLayout = ({
  previewText,
  content,
}: EmailLayoutOptions): string =>
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="color-scheme" content="light" />
    <meta name="supported-color-schemes" content="light" />
    <title>${escapeHtml(previewText)}</title>
    <!--[if mso]>
      <style type="text/css">
        body, table, td { font-family: Arial, Helvetica, sans-serif !important; }
      </style>
    <![endif]-->
    <style>
      body {
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      img {
        border: 0;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
      table {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
      @media only screen and (max-width: 620px) {
        .email-shell {
          width: 100% !important;
        }
        .email-header,
        .email-body,
        .email-footer {
          padding-left: 24px !important;
          padding-right: 24px !important;
        }
        .email-body {
          padding-top: 28px !important;
          padding-bottom: 28px !important;
        }
        .detail-label,
        .detail-value {
          display: block !important;
          width: 100% !important;
          padding-left: 18px !important;
          padding-right: 18px !important;
        }
        .detail-label {
          padding-bottom: 4px !important;
        }
        .detail-value {
          padding-top: 0 !important;
          padding-bottom: 14px !important;
        }
        .cta-cell {
          display: block !important;
          width: 100% !important;
          padding: 0 0 10px !important;
        }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:${BRAND.cream};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;mso-hide:all;">
      ${escapeHtml(previewText)}
    </div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BRAND.cream};">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" class="email-shell" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background-color:${BRAND.white};border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(26,26,26,0.08);">
            ${buildEmailHeader()}
            <tr>
              <td class="email-body" style="padding:36px 40px;background-color:${BRAND.white};font-family:${FONT};font-size:16px;line-height:1.6;color:${BRAND.charcoal};">
                ${content}
              </td>
            </tr>
            ${buildEmailFooter()}
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

export const buildEmailHeading = (title: string): string =>
  `<h1 style="margin:0 0 8px;font-family:${FONT};font-size:26px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;line-height:1.2;color:${BRAND.maroon};">
    ${escapeHtml(title)}
  </h1>`;

export const buildEmailParagraph = (text: string): string =>
  `<p style="margin:0 0 16px;font-family:${FONT};font-size:16px;line-height:1.65;color:${BRAND.charcoal};">
    ${text}
  </p>`;

export const buildEmailSectionTitle = (title: string): string =>
  `<p style="margin:28px 0 0;font-family:${FONT};font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${BRAND.red};">
    ${escapeHtml(title)}
  </p>`;

export const buildStatusBadge = (text: string): string =>
  `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;">
    <tr>
      <td style="padding:8px 16px;background-color:${BRAND.cream};border:1px solid ${BRAND.border};border-left:4px solid ${BRAND.red};border-radius:6px;">
        <p style="margin:0;font-family:${FONT};font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${BRAND.maroon};">
          ${escapeHtml(text)}
        </p>
      </td>
    </tr>
  </table>`;

export const buildCalloutBox = (content: string): string =>
  `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:24px 0 0;">
    <tr>
      <td style="padding:18px 20px;background-color:${BRAND.cream};border-radius:8px;border:1px solid ${BRAND.border};">
        ${content}
      </td>
    </tr>
  </table>`;

export const buildEmailButton = (
  href: string,
  label: string,
  variant: "primary" | "secondary" = "primary",
): string => {
  const bg = variant === "primary" ? BRAND.red : BRAND.white;
  const color = variant === "primary" ? BRAND.white : BRAND.maroon;
  const border =
    variant === "secondary" ? `border:2px solid ${BRAND.maroon};` : "";

  return `
    <a href="${href}" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:12px 24px;background-color:${bg};${border}border-radius:6px;font-family:${FONT};font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;color:${color};">
      ${escapeHtml(label)}
    </a>
  `;
};

export const buildButtonRow = (
  buttons: { href: string; label: string; variant?: "primary" | "secondary" }[],
): string => {
  const cells = buttons
    .map(
      (button, index) => `
        <td class="cta-cell" align="center" style="padding:${index === 0 ? "0 6px 0 0" : "0 0 0 6px"};">
          ${buildEmailButton(button.href, button.label, button.variant ?? "primary")}
        </td>
      `,
    )
    .join("");

  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:24px 0 0;">
      <tr>
        ${cells}
      </tr>
    </table>
  `;
};
