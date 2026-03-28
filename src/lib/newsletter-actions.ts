"use server";

export type NewsletterState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function subscribeNewsletter(
  _prev: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const email = (formData.get("email") as string)?.trim();

  if (!email) {
    return { status: "error", message: "Please enter your email address." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // ── Wire up your email service here when ready ─────────────────────────────
  // Option A — Resend audience:
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // const { error } = await resend.contacts.create({
  //   audienceId: process.env.RESEND_AUDIENCE_ID!,
  //   email,
  //   unsubscribed: false,
  // });
  // if (error) return { status: "error", message: "Failed to subscribe — please try again." };
  //
  // Option B — MailerLite:
  // await fetch("https://connect.mailerlite.com/api/subscribers", {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ email, groups: [process.env.MAILERLITE_GROUP_ID] }),
  // });
  // ───────────────────────────────────────────────────────────────────────────

  return { status: "success" };
}
