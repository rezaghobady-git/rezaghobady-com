import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Reza Ghobady — Paris-based entrepreneur, founder of KaavOps and Simine Paris. Building AI automation systems and a contemporary art gallery focused on Iranian artists.",
};

const tools = [
  { name: "n8n", role: "Automation orchestration" },
  { name: "Claude Code", role: "Development" },
  { name: "ClickUp", role: "Operations & project management" },
  { name: "Linear", role: "Software project tracking" },
  { name: "Notion", role: "Reference & documentation" },
];

const beliefs = [
  {
    label: "Complexity is usually a design failure.",
    body: "When a business feels hard to run, the problem is almost never effort. It is architecture. The right systems make simple work of things that currently require constant attention.",
  },
  {
    label: "Depth over speed, always.",
    body: "I would rather understand a problem completely than ship a solution quickly that solves the wrong thing. This applies equally to a client automation audit and to a curatorial decision at Simine Paris.",
  },
  {
    label: "Solo is a legitimate operating model.",
    body: "Both businesses run without employees. This is a deliberate choice. It forces clarity about what actually matters and what is just noise. Systems do what people would otherwise repeat.",
  },
  {
    label: "Context is not a footnote.",
    body: "In automation: the difference between a useful system and a profitable one is usually a design problem, not a technology problem. In art: the political and social pressures Iranian artists work under are not background — they are part of what the work is doing.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Opening ── */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            — About
          </p>
          <h1
            className="mt-6 text-5xl md:text-6xl leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            I build things that run without me.
          </h1>

          <div
            className="mt-10 flex flex-col gap-5 text-base leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <p>
              At KaavOps, I design AI-powered revenue systems for agencies and
              B2B service providers — the kind of infrastructure that handles
              lead generation, client onboarding, and follow-up automatically,
              so founders can focus on the work that actually requires them.
            </p>
            <p>
              At Simine Paris, I run a contemporary art gallery focused on
              Iranian artists. We organize exhibitions in Paris and
              internationally, and believe that Iranian contemporary art belongs
              at the center of Europe&apos;s cultural conversation — not at its
              margins.
            </p>
            <p>
              I work solo, move deliberately, and prefer depth over speed.
            </p>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section
        className="py-20 md:py-32 px-6 md:px-10"
        style={{ backgroundColor: "var(--color-surface-muted)" }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            — Story
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            How I got here
          </h2>

          <div
            className="mt-8 flex flex-col gap-4 text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <p>
              Iranian roots, Paris life. I have been based in France long enough
              for it to be home, and connected to Iran closely enough for it to
              remain essential. Both inform the work — the precision and
              restraint of French professional culture, and the depth and weight
              of Persian intellectual tradition.
            </p>
            <p>
              My background is in business and the art world, not engineering. I
              am self-taught in technology — which means I approach software
              with a strong preference for clarity over cleverness, and for
              tools that do one thing well over platforms that try to do
              everything.
            </p>
            <p>
              KaavOps came from watching founders in my network run businesses
              that depended entirely on them being present. The pipeline worked
              because they worked it. I kept thinking: this is an infrastructure
              problem. It has a solution. So I built the agency to provide it.
            </p>
            <p>
              Simine Paris came from a different kind of gap — the near-absence
              of serious, sustained engagement with Iranian contemporary art in
              European gallery culture. A periodic appearance at a fair is not
              presence. We are building presence.
            </p>
          </div>
        </div>
      </section>

      {/* ── Beliefs ── */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            — Philosophy
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            What I believe
          </h2>

          <div className="mt-10 flex flex-col gap-8">
            {beliefs.map((item) => (
              <div
                key={item.label}
                className="pt-6 border-t"
                style={{ borderColor: "var(--color-border)" }}
              >
                <p
                  className="text-base font-medium"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {item.label}
                </p>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{
                    color: "var(--color-text-secondary)",
                    maxWidth: "none",
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Current work & stack ── */}
      <section
        className="py-20 md:py-32 px-6 md:px-10"
        style={{ backgroundColor: "var(--color-surface-muted)" }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            — Now
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            What I&apos;m working on
          </h2>

          <div
            className="mt-8 flex flex-col gap-4 text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <p>
              Building the v2 onboarding system for KaavOps clients — full
              automation from first call to live workflow. Preparing the next
              Simine Paris exhibition program for autumn 2026. Writing this site
              — using Claude Code to ship something that actually represents the
              work.
            </p>
          </div>

          {/* Tools list */}
          <div className="mt-12">
            <p className="label" style={{ color: "var(--color-text-muted)" }}>
              Current stack
            </p>
            <ul className="mt-6 flex flex-col">
              {tools.map((tool, i) => (
                <li
                  key={tool.name}
                  className="flex items-baseline justify-between py-4 gap-4"
                  style={{
                    borderTop: i === 0 ? "1px solid var(--color-border)" : undefined,
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {tool.name}
                  </span>
                  <span
                    className="label text-right"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {tool.role}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            — Let&apos;s talk
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            If any of this sounds relevant to what you&apos;re building:
          </h2>
          <p
            className="mt-6 text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)", maxWidth: "48ch" }}
          >
            I am fluent in French and English. I work across art world, private
            equity, food, and fashion networks in France and Europe — contexts
            that do not usually talk to each other, which turns out to be
            useful.
          </p>

          <div
            className="mt-12 pt-10 border-t flex flex-col sm:flex-row sm:items-center gap-4"
            style={{ borderColor: "var(--color-border)" }}
          >
            <Link href="/services" className="btn-primary">
              Work with KaavOps
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in touch
            </Link>
            <Link href="/blog" className="btn-ghost text-sm">
              Read my writing →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
