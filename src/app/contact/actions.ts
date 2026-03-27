"use server";

export type FormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { status: "error", message: "All fields are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // ── Wire up Resend here when ready ──────────────────────────────────────
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "contact@rezaghobady.com",
  //   to: "reza@rezaghobady.com",
  //   subject: `Message from ${name}`,
  //   text: `From: ${name} <${email}>\n\n${message}`,
  // });
  // ────────────────────────────────────────────────────────────────────────

  return { status: "success" };
}
