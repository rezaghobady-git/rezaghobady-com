const ventures = [
  {
    tag: "AI Automation",
    name: "KaavOps",
    url: "https://kaavops.com",
    description:
      "AI-powered revenue infrastructure for agencies and B2B service providers across France and Europe. I design systems that handle lead generation, client onboarding, and follow-up automatically — so founders can focus on the work that actually requires them.",
    detail: "Active · Paris & Europe",
  },
  {
    tag: "Contemporary Art",
    name: "Simine Paris",
    url: null,
    description:
      "A gallery with a focused thesis: Iranian contemporary art deserves a permanent presence in Europe's cultural conversation — not at its margins. We organize exhibitions in Paris and internationally.",
    detail: "Active · Paris",
  },
];

export default function VenturesSection() {
  return (
    <section
      className="py-20 md:py-32 px-6 md:px-10"
      style={{ backgroundColor: "var(--color-surface-muted)" }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-12 max-w-3xl">
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
            What I am building
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ventures.map((v) => (
            <div
              key={v.name}
              className="venture-card p-8 border flex flex-col"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <p
                className="label"
                style={{ color: "var(--color-accent-warm)" }}
              >
                {v.tag}
              </p>

              <h3
                className="mt-4 text-2xl font-normal"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--color-text-primary)",
                }}
              >
                {v.url ? (
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="venture-name-link"
                  >
                    {v.name}
                    <span
                      className="ml-2 text-sm"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      ↗
                    </span>
                  </a>
                ) : (
                  v.name
                )}
              </h3>

              <p
                className="mt-4 text-sm leading-relaxed flex-1"
                style={{ color: "var(--color-text-secondary)", maxWidth: "none" }}
              >
                {v.description}
              </p>

              <p
                className="mt-6 label"
                style={{ color: "var(--color-text-muted)" }}
              >
                {v.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
