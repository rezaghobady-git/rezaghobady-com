import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Reza Ghobady — whether about KaavOps, Simine Paris, or just to connect.",
};

const links = [
  {
    label: "Email",
    value: "reza@rezaghobady.com",
    href: "mailto:reza@rezaghobady.com",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rezaghobady",
    href: "https://linkedin.com/in/rezaghobady",
    external: true,
  },
  {
    label: "KaavOps",
    value: "kaavops.com",
    href: "https://kaavops.com",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            — Contact
          </p>
          <h1
            className="mt-6 text-5xl md:text-6xl leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            Let&apos;s talk.
          </h1>
          <p
            className="mt-6 text-base leading-relaxed"
            style={{ color: "var(--color-text-secondary)", maxWidth: "48ch" }}
          >
            Whether you&apos;re interested in working together, have a question
            about KaavOps or Simine Paris, or just want to connect — I&apos;m
            reachable below. I reply to every message.
          </p>
        </div>
      </section>

      {/* ── Two-column layout: links + form ── */}
      <section className="pb-20 md:pb-32 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">

            {/* Left — direct links */}
            <div className="md:col-span-2">
              <p className="label" style={{ color: "var(--color-text-muted)" }}>
                — Direct
              </p>
              <ul className="mt-6 flex flex-col">
                {links.map((link, i) => (
                  <li
                    key={link.label}
                    className="py-4"
                    style={{
                      borderTop: i === 0 ? "1px solid var(--color-border-strong)" : "1px solid var(--color-border)",
                    }}
                  >
                    <p
                      className="label mb-1"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {link.label}
                    </p>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="contact-direct-link text-sm font-medium"
                    >
                      {link.value}
                      {link.external && (
                        <span style={{ color: "var(--color-text-muted)" }}> ↗</span>
                      )}
                    </a>
                  </li>
                ))}
                {/* Final border */}
                <li style={{ borderTop: "1px solid var(--color-border)" }} />
              </ul>

              {/* Response note */}
              <p
                className="mt-8 text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)", maxWidth: "none" }}
              >
                Based in Paris — CET timezone. I typically respond within one
                business day.
              </p>
            </div>

            {/* Right — form */}
            <div className="md:col-span-3">
              <p className="label" style={{ color: "var(--color-text-muted)" }}>
                — Or send a message
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ventures callout ── */}
      <section
        className="py-16 md:py-20 px-6 md:px-10 border-t"
        style={{
          borderColor: "var(--color-border)",
          backgroundColor: "var(--color-surface-muted)",
        }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            — Specific enquiries
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              className="p-6 border"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <p
                className="label"
                style={{ color: "var(--color-accent-warm)" }}
              >
                AI Automation
              </p>
              <p
                className="mt-2 text-sm font-medium"
                style={{ color: "var(--color-text-primary)" }}
              >
                KaavOps
              </p>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)", maxWidth: "none" }}
              >
                Revenue systems, automation audits, or agency partnerships —
                mention KaavOps in your message.
              </p>
            </div>
            <div
              className="p-6 border"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <p
                className="label"
                style={{ color: "var(--color-accent-warm)" }}
              >
                Contemporary Art
              </p>
              <p
                className="mt-2 text-sm font-medium"
                style={{ color: "var(--color-text-primary)" }}
              >
                Simine Paris
              </p>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)", maxWidth: "none" }}
              >
                Exhibition proposals, collector enquiries, or press — mention
                Simine Paris in your message.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
