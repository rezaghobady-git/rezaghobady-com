import Link from "next/link";

export default function KaavOpsCTASection() {
  return (
    <section
      className="py-20 md:py-32 px-6 md:px-10"
      style={{ backgroundColor: "var(--color-surface-muted)" }}
    >
      <div className="mx-auto max-w-3xl">
        <p className="label" style={{ color: "var(--color-text-muted)" }}>
          — KaavOps
        </p>
        <h2
          className="mt-3 text-3xl md:text-4xl"
          style={{
            fontFamily: "var(--font-serif)",
            color: "var(--color-text-primary)",
          }}
        >
          AI automation for agencies and B2B service providers.
        </h2>

        <div
          className="mt-8 flex flex-col gap-4 text-sm leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <p>
            We work with founders who have already found product-market fit and
            need infrastructure to match their ambition. The audit takes one
            week. The systems run for years.
          </p>
          <p>
            France and Europe. English and French. No retainers without results.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/services" className="btn-primary">
            See how it works
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
  );
}
