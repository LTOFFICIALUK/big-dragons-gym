import { NextRequest, NextResponse } from "next/server";
import { sendEnquiryEmails } from "@/lib/email";

const VALID_INTERESTS = new Set(["pt", "nutrition", "membership", "general"]);

const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isGdprAccepted = (value: unknown): boolean =>
  value === true || value === "true" || value === "on" || value === "yes" || value === 1;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const email = String(body.email ?? "").trim();
    const interest = String(body.interest ?? "general").trim();
    const message = String(body.message ?? "").trim();
    const gdpr = isGdprAccepted(body.gdpr);

    if (!name || !phone || !email || !message || !gdpr) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    if (!VALID_INTERESTS.has(interest)) {
      return NextResponse.json({ error: "Invalid interest" }, { status: 400 });
    }

    await sendEnquiryEmails({
      name,
      phone,
      email,
      interest,
      message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return NextResponse.json(
      { error: "Failed to process enquiry" },
      { status: 500 },
    );
  }
}
