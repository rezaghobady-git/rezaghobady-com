// Update the `items` array manually whenever Reza's current focus changes.
const items = [
  "Building the v2 onboarding system for KaavOps clients — full automation from first call to live workflow.",
  "Preparing the next Simine Paris exhibition program for autumn 2026.",
  "Writing this site — using Claude Code to ship something that actually represents the work.",
];

export default function NowSection() {
  return (
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
          What I am working on
        </h2>

        <ul className="mt-10 flex flex-col gap-5">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex gap-4"
              style={{ borderLeft: "2px solid var(--color-accent-warm)", paddingLeft: "1.25rem" }}
            >
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)", maxWidth: "none" }}
              >
                {item}
              </p>
            </li>
          ))}
        </ul>

        <p
          className="mt-8 text-xs"
          style={{ color: "var(--color-text-muted)" }}
        >
          Updated March 2026
        </p>
      </div>
    </section>
  );
}
