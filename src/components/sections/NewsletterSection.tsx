import NewsletterForm from "@/components/ui/NewsletterForm";

export default function NewsletterSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-3xl">
        <div
          className="border-t pt-12 md:pt-16"
          style={{ borderColor: "var(--color-border-strong)" }}
        >
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            — Newsletter
          </p>
          <h2
            className="mt-4 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            If your business feels harder than it should:
          </h2>
          <p
            className="mt-2 text-xl md:text-2xl"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              color: "var(--color-text-secondary)",
            }}
          >
            Start here.
          </p>

          <p
            className="mt-6 text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)", maxWidth: "48ch" }}
          >
            I write about systems thinking, AI automation, and building
            businesses that don&apos;t depend on you being available. No
            frequency promises — only when I have something useful to say.
          </p>

          <div className="mt-8">
            <NewsletterForm />
            <p
              className="mt-3 text-xs"
              style={{ color: "var(--color-text-muted)" }}
            >
              No spam. Unsubscribe any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
