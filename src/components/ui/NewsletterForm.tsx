"use client";

import { useActionState, useEffect, useRef } from "react";
import { subscribeNewsletter } from "@/lib/newsletter-actions";
import type { NewsletterState } from "@/lib/newsletter-actions";

const INITIAL: NewsletterState = { status: "idle" };

export default function NewsletterForm() {
  const [state, action, pending] = useActionState(subscribeNewsletter, INITIAL);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--color-text-secondary)" }}
        role="status"
      >
        You&apos;re on the list. I write when I have something worth saying.
      </p>
    );
  }

  return (
    <form
      ref={formRef}
      action={action}
      className="flex flex-col sm:flex-row gap-3"
      noValidate
    >
      <input
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="your@email.com"
        className="contact-input flex-1"
        style={{ maxWidth: "28rem" }}
      />
      <button
        type="submit"
        disabled={pending}
        className="btn-primary shrink-0"
        style={{ opacity: pending ? 0.6 : 1 }}
      >
        {pending ? "Submitting…" : "Start here"}
      </button>

      {state.status === "error" && (
        <p
          className="text-sm self-center"
          style={{ color: "#b44" }}
          role="alert"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
