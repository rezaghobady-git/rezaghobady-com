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

const interests = [
  { label: "AI & automation", body: "Not as a trend — as infrastructure. I am interested in how systems can take repetitive cognitive work off human plates entirely." },
  { label: "Contemporary art", body: "Particularly the relationship between cultural production and political context. Iranian contemporary art is the specific area where I have built sustained knowledge." },
  { label: "Business models", body: "How businesses actually make money, and why most automation projects fail to connect to revenue. The gap between a useful system and a profitable one is usually a design problem." },
  { label: "Persian history & culture", body: "A personal and ongoing education — roots, language, literature, and how a civilization talks to the present tense." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
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
              internationally, and believe strongly that Iranian contemporary art
              belongs at the center of Europe&apos;s cultural conversation — not at
              its margins.
            </p>
            <p>
              I work solo, move deliberately, and prefer depth over speed.
            </p>
          </div>
        </div>
      </section>

      {/* ── Ventures ── */}
      <section
        className="py-20 md:py-32 px-6 md:px-10"
        style={{ backgroundColor: "var(--color-surface-muted)" }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            — Ventures
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            What I run
          </h2>

          {/* KaavOps */}
          <div
            className="mt-12 pt-8 border-t"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h3
                className="text-2xl font-normal"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--color-text-primary)",
                }}
              >
                KaavOps
              </h3>
              <a
                href="https://kaavops.com"
                target="_blank"
                rel="noopener noreferrer"
                className="label about-external-link"
              >
                kaavops.com ↗
              </a>
            </div>
            <p
              className="mt-1 label"
              style={{ color: "var(--color-accent-warm)" }}
            >
              AI Automation Agency · Paris &amp; Europe
            </p>
            <div
              className="mt-5 flex flex-col gap-4 text-sm leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <p>
                KaavOps designs revenue infrastructure for agencies and B2B
                service providers. The core problem: most service businesses
                are built around manual, founder-dependent revenue processes.
                Lead generation runs on personal network. Follow-up happens
                when someone remembers. Client onboarding depends on whoever
                has the most context that week.
              </p>
              <p>
                We replace these processes with automated systems — built on
                n8n, connected to CRMs and outreach tools, and designed to run
                continuously without human intervention. The result is not just
                efficiency. It is predictability. Clients know their pipeline
                is working even when they are not looking at it.
              </p>
              <p>
                We work across France and Europe, primarily with founders who
                have already found product-market fit and need infrastructure
                to match their ambition.
              </p>
            </div>
          </div>

          {/* Simine Paris */}
          <div
            className="mt-12 pt-8 border-t"
            style={{ borderColor: "var(--color-border)" }}
          >
            <h3
              className="text-2xl font-normal"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--color-text-primary)",
              }}
            >
              Simine Paris
            </h3>
            <p
              className="mt-1 label"
              style={{ color: "var(--color-accent-warm)" }}
            >
              Contemporary Art Gallery · Paris
            </p>
            <div
              className="mt-5 flex flex-col gap-4 text-sm leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <p>
                Simine Paris is a gallery with a focused thesis: Iranian
                contemporary art deserves a permanent, serious presence in
                Europe&apos;s cultural conversation — not a periodic appearance at
                the margins.
              </p>
              <p>
                We organize exhibitions in Paris and internationally, working
                directly with artists on programs that make a genuine argument
                rather than simply presenting work. Context matters. The
                political and social pressures Iranian artists work under are
                not footnotes — they are part of what the work is doing.
              </p>
              <p>
                The gallery serves two audiences simultaneously: collectors and
                institutions who want to engage seriously with this tradition,
                and broader publics who encounter this work for the first time.
                We try to serve both without condescending to either.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How I Work ── */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            — Method
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            How I work
          </h2>
          <div
            className="mt-8 flex flex-col gap-4 text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <p>
              Solo. Both businesses run without employees. This is a deliberate
              choice, not a constraint — it forces clarity about what actually
              matters and what is just noise. Systems do what people would
              otherwise repeat.
            </p>
            <p>
              Tools-forward. I build with what works, not with what is
              fashionable. The stack is stable, well-understood, and chosen
              because each tool does one thing well.
            </p>
            <p>
              Depth over speed. I would rather understand a problem completely
              than ship a solution that solves the wrong thing quickly.
              This applies to both client work at KaavOps and to curatorial
              decisions at Simine Paris.
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

      {/* ── Interests ── */}
      <section
        className="py-20 md:py-32 px-6 md:px-10"
        style={{ backgroundColor: "var(--color-surface-muted)" }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            — Interests
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            What I think about
          </h2>

          <div className="mt-10 flex flex-col gap-8">
            {interests.map((item) => (
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

      {/* ── Background ── */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            — Background
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            Where I come from
          </h2>
          <div
            className="mt-8 flex flex-col gap-4 text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <p>
              Iranian roots, Paris life. I have been based in France long
              enough for it to be home, and connected to Iran closely enough
              for it to remain essential. Both inform the work — the precision
              and restraint of French professional culture, and the depth and
              weight of Persian intellectual tradition.
            </p>
            <p>
              I am fluent in French and English. My Persian is functional and
              improving. I work across art world, private equity, food, and
              fashion networks in France and Europe — contexts that do not
              usually talk to each other, which turns out to be useful.
            </p>
            <p>
              Self-taught in technology. My background is in business and the
              art world, not engineering. I learned to build with tools, not
              despite them — which means I approach software with a strong
              preference for clarity over cleverness.
            </p>
          </div>

          {/* CTA */}
          <div
            className="mt-14 pt-10 border-t flex flex-col sm:flex-row sm:items-center gap-4"
            style={{ borderColor: "var(--color-border)" }}
          >
            <Link href="/contact" className="btn-primary">
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
