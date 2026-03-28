const services = [
  {
    label: "Lead generation",
    body: "Automated outreach and qualification systems that surface the right prospects continuously — without you managing the process.",
  },
  {
    label: "Client onboarding",
    body: "Structured workflows that take a new client from signed to operational without requiring your personal attention at each step.",
  },
  {
    label: "Follow-up & retention",
    body: "Sequences that keep clients engaged, surface upsell moments, and handle renewals before they become conversations you have to remember.",
  },
];

export default function WhatIDoSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-3xl">
        <p className="label" style={{ color: "var(--color-text-muted)" }}>
          — What I do
        </p>
        <h2
          className="mt-3 text-3xl md:text-4xl"
          style={{
            fontFamily: "var(--font-serif)",
            color: "var(--color-text-primary)",
          }}
        >
          I build the systems you&apos;re running manually.
        </h2>

        <p
          className="mt-6 text-sm leading-relaxed"
          style={{ color: "var(--color-text-secondary)", maxWidth: "52ch" }}
        >
          Through KaavOps, I design and deploy AI-powered revenue infrastructure
          for agencies and B2B service providers across France and Europe.
        </p>

        <div className="mt-12 flex flex-col">
          {services.map((s, i) => (
            <div
              key={s.label}
              className="py-8 border-t"
              style={{
                borderColor:
                  i === 0
                    ? "var(--color-border-strong)"
                    : "var(--color-border)",
              }}
            >
              <p
                className="text-base font-medium"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--color-text-primary)",
                }}
              >
                {s.label}
              </p>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{
                  color: "var(--color-text-secondary)",
                  maxWidth: "none",
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--color-border)" }} />
        </div>
      </div>
    </section>
  );
}
