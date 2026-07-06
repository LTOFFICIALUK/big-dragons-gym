import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { Resend } from "resend";
import { buildCustomerEmail, buildOwnerEmail } from "../src/lib/email";

const loadEnv = () => {
  const envPath = resolve(process.cwd(), ".env.local");
  const contents = readFileSync(envPath, "utf8");

  for (const line of contents.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const separator = trimmed.indexOf("=");
    if (separator === -1) continue;

    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim();
    process.env[key] ??= value;
  }
};

const TEST_PAYLOAD = {
  name: "Luke Carter",
  phone: "+44 7700 900123",
  email: "everythingsimpleinc1@gmail.com",
  interest: "pt",
  message:
    "This is a test enquiry to preview the updated email design.\n\nI'd like to book a personal training session and hear about membership options.",
};

const FROM_EMAIL = "Big Dragons Gym <enquiries@bigdragonsgym.co.uk>";
const TO = "everythingsimpleinc1@gmail.com";

const main = async () => {
  loadEnv();

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set in .env.local");
  }

  const resend = new Resend(apiKey);
  const ownerEmail = buildOwnerEmail(TEST_PAYLOAD);
  const customerEmail = buildCustomerEmail(TEST_PAYLOAD);

  const [ownerResult, customerResult] = await Promise.all([
    resend.emails.send({
      from: FROM_EMAIL,
      to: TO,
      subject: `[Preview — Owner] ${ownerEmail.subject}`,
      html: ownerEmail.html,
    }),
    resend.emails.send({
      from: FROM_EMAIL,
      to: TO,
      subject: `[Preview — Customer] ${customerEmail.subject}`,
      html: customerEmail.html,
    }),
  ]);

  if (ownerResult.error || customerResult.error) {
    throw new Error(
      ownerResult.error?.message ??
        customerResult.error?.message ??
        "Failed to send preview emails.",
    );
  }

  console.log(`Sent owner preview: ${ownerResult.data?.id}`);
  console.log(`Sent customer preview: ${customerResult.data?.id}`);
  console.log(`Delivered to ${TO}`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
