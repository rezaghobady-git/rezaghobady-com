"use client";

import { useActionState, useRef, useEffect } from "react";
import { submitContact } from "./actions";
import type { FormState } from "./actions";

const INITIAL: FormState = { status: "idle" };

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, INITIAL);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form ref={formRef} action={action} className="flex flex-col gap-5" noValidate>
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="label"
          style={{ color: "var(--color-text-muted)" }}
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="contact-input"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="label"
          style={{ color: "var(--color-text-muted)" }}
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="contact-input"
          placeholder="you@example.com"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="label"
          style={{ color: "var(--color-text-muted)" }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="contact-input resize-none"
          placeholder="What's on your mind?"
        />
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={pending}
          className="btn-primary self-start"
          style={{ opacity: pending ? 0.6 : 1 }}
        >
          {pending ? "Sending…" : "Send message"}
        </button>

        {/* Feedback */}
        {state.status === "success" && (
          <p
            className="text-sm"
            style={{ color: "var(--color-text-secondary)" }}
            role="status"
          >
            Message sent — I&apos;ll reply soon.
          </p>
        )}
        {state.status === "error" && (
          <p
            className="text-sm"
            style={{ color: "#b44" }}
            role="alert"
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
