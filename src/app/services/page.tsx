import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "KaavOps designs AI-powered revenue systems for agencies and B2B service providers across France and Europe. Automation audits, lead generation, onboarding, and retention systems.",
};

const process = [
  {
    step: "01",
    label: "Automation audit",
    body: "We map every manual, founder-dependent process in your revenue operations. One week. Deliverable: a clear picture of what can be automated, what the impact would be, and what we would build.",
  },
  {
    step: "02",
    label: "System design",
    body: "We design the infrastructure — the workflows, connections, and logic — before touching any tools. Good automation is an architecture problem first.",
  },
  {
    step: "03",
    label: "Build & deploy",
    body: "We build in n8n, connected to your existing CRM, email, and calendar. Everything is documented. You own the systems entirely — no dependency on us to keep them running.",
  },
  {
    step: "04",
    label: "Ongoing support",
    body: "Available for maintenance, expansions, and new system builds as your business grows. No retainer required to start.",
  },
];

const systems = [
  {
    tag: "Lead generation",
    description:
      "Automated outreach and qualification that runs continuously — finding, contacting, and filtering prospects without manual effort.",
  },
  {
    tag: "Client onboarding",
    description:
      "Structured workflows that take a new client from signed to operational without requiring your personal attention at each step.",
  },
  {
    tag: "Follow-up & retention",
    description:
      "Sequences that keep clients engaged, surface upsell moments, and handle renewals before they become conversations you have to remember.",
  },
  {
    tag: "Reporting & visibility",
    description:
      "Dashboards and automated summaries that give you the numbers you need without pulling them yourself.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            — KaavOps
          </p>
          <h1
            className="mt-6 text-5xl md:text-6xl leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            Revenue systems that run without you.
          </h1>
          <p
            className="mt-6 text-base leading-relaxed"
            style={{ color: "var(--color-text-secondary)", maxWidth: "52ch" }}
          >
            We design and deploy AI-powered automation infrastructure for
            agencies and B2B service providers across France and Europe. The
            audit takes one week. The systems run for years.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Book an audit
            </Link>
            <a
              href="https://kaavops.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              kaavops.com ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── What we build ── */}
      <section
        className="py-20 md:py-32 px-6 md:px-10"
        style={{ backgroundColor: "var(--color-surface-muted)" }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 max-w-3xl">
            <p className="label" style={{ color: "var(--color-text-muted)" }}>
              — Systems
            </p>
            <h2
              className="mt-3 text-3xl md:text-4xl"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--color-text-primary)",
              }}
            >
              What we build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systems.map((s) => (
              <div
                key={s.tag}
                className="p-8 border"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <p
                  className="label"
                  style={{ color: "var(--color-accent-warm)" }}
                >
                  {s.tag}
                </p>
                <p
                  className="mt-4 text-sm leading-relaxed"
                  style={{
                    color: "var(--color-text-secondary)",
                    maxWidth: "none",
                  }}
                >
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            — Process
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            How it works
          </h2>

          <div className="mt-12 flex flex-col">
            {process.map((step, i) => (
              <div
                key={step.step}
                className="py-8 border-t flex gap-8"
                style={{
                  borderColor:
                    i === 0
                      ? "var(--color-border-strong)"
                      : "var(--color-border)",
                }}
              >
                <span
                  className="label shrink-0 pt-0.5"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {step.step}
                </span>
                <div>
                  <p
                    className="text-base font-medium"
                    style={{
                      fontFamily: "var(--font-serif)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {step.label}
                  </p>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{
                      color: "var(--color-text-secondary)",
                      maxWidth: "none",
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--color-border)" }} />
          </div>
        </div>
      </section>

      {/* ── Who it&apos;s for ── */}
      <section
        className="py-20 md:py-32 px-6 md:px-10"
        style={{ backgroundColor: "var(--color-surface-muted)" }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            — Fit
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            Who this is for
          </h2>

          <div
            className="mt-8 flex flex-col gap-4 text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <p>
              Agencies and B2B service businesses that have found product-market
              fit and need infrastructure to match their ambition. You are
              already generating revenue. The problem is that the revenue
              process depends on you.
            </p>
            <p>
              We work in France and Europe, in English and French. Typical
              client profile: 5–50 person agency or consultancy, €500k–€5M
              ARR, founder-led sales with a team that needs the founder out of
              every deal.
            </p>
            <p>
              If you are at an earlier stage and want to build clean
              infrastructure from the start, we can talk about that too.
            </p>
          </div>

          <div
            className="mt-12 pt-10 border-t flex flex-col sm:flex-row sm:items-center gap-4"
            style={{ borderColor: "var(--color-border)" }}
          >
            <Link href="/contact" className="btn-primary">
              Book an audit
            </Link>
            <Link href="/about" className="btn-ghost text-sm">
              About Reza →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
