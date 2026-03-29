import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-3xl">
        {/* Location tag */}
        <p className="label" style={{ color: "var(--color-text-muted)" }}>
          — Paris
        </p>

        {/* Main headline */}
        <h1
          className="mt-6 text-5xl md:text-6xl leading-none tracking-tight"
          style={{
            fontFamily: "var(--font-serif)",
            color: "var(--color-text-primary)",
          }}
        >
          Simplify your thinking.
          <br />
          Build systems.
        </h1>

        {/* Sub-headline */}
        <p
          className="mt-4 text-2xl md:text-3xl leading-snug"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            color: "var(--color-text-secondary)",
          }}
        >
          Let them run your business.
        </p>

        {/* Body */}
        <p
          className="mt-8 text-base leading-relaxed"
          style={{ color: "var(--color-text-secondary)", maxWidth: "52ch" }}
        >
          I design AI-powered revenue systems for agencies and B2B service
          businesses — so founders can focus on the work only they can do.
          Based in Paris. Founder of{" "}
          <a
            href="https://kaavops.com?utm_source=rezaghobady.com&utm_medium=website&utm_campaign=hero"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-70 transition-opacity duration-200"
          >
            KaavOps
          </a>{" "}
          and{" "}
          <a
            href="https://simine.fr?utm_source=rezaghobady.com&utm_medium=website&utm_campaign=hero"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-70 transition-opacity duration-200"
          >
            Simine Paris
          </a>
          .
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/services" className="btn-primary">
            Work with KaavOps
          </Link>
          <Link href="/about" className="btn-secondary">
            About me
          </Link>
        </div>
      </div>
    </section>
  );
}
