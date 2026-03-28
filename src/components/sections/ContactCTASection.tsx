import Link from "next/link";

export default function ContactCTASection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-3xl">
        <div
          className="border-t pt-12 md:pt-16"
          style={{ borderColor: "var(--color-border-strong)" }}
        >
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            — Contact
          </p>
          <h2
            className="mt-4 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            Let&apos;s talk.
          </h2>
          <p
            className="mt-4 text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)", maxWidth: "48ch" }}
          >
            Whether you are interested in working together, have a question
            about KaavOps or Simine Paris, or just want to connect —
            I reply to every message.
          </p>

          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
