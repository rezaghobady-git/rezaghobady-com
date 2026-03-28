export default function ProblemSection() {
  return (
    <section
      className="py-20 md:py-32 px-6 md:px-10"
      style={{ backgroundColor: "var(--color-surface-muted)" }}
    >
      <div className="mx-auto max-w-3xl">
        <p className="label" style={{ color: "var(--color-text-muted)" }}>
          — The problem
        </p>
        <h2
          className="mt-3 text-3xl md:text-4xl"
          style={{
            fontFamily: "var(--font-serif)",
            color: "var(--color-text-primary)",
          }}
        >
          Most service businesses are built around their founders.
        </h2>

        <div
          className="mt-8 flex flex-col gap-4 text-sm leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <p>
            Your pipeline works because you work it. Follow-up happens when you
            remember. New clients get onboarded when you have time. Proposals go
            out when you write them.
          </p>
          <p>
            The business doesn&apos;t run — you run the business. Every time you
            stop, it stops. That&apos;s not a growth problem. It&apos;s an
            infrastructure problem.
          </p>
          <p style={{ color: "var(--color-text-primary)", fontWeight: 500 }}>
            And it&apos;s the kind of problem that has a clear solution.
          </p>
        </div>
      </div>
    </section>
  );
}
