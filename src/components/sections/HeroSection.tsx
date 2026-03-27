import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-3xl">
        {/* Location tag */}
        <p className="label" style={{ color: "var(--color-text-muted)" }}>
          — Paris
        </p>

        {/* Name */}
        <h1
          className="mt-6 text-5xl md:text-6xl leading-none tracking-tight"
          style={{
            fontFamily: "var(--font-serif)",
            color: "var(--color-text-primary)",
          }}
        >
          Reza Ghobady
        </h1>

        {/* One-line descriptor */}
        <p
          className="mt-6 text-xl md:text-2xl leading-snug"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            color: "var(--color-text-secondary)",
            maxWidth: "none",
          }}
        >
          Entrepreneur building at the intersection of AI, automation, and
          contemporary art.
        </p>

        {/* Bio */}
        <p
          className="mt-8 text-base leading-relaxed"
          style={{ color: "var(--color-text-secondary)", maxWidth: "52ch" }}
        >
          Based in Paris. Founder of KaavOps and Simine Paris.
          <br className="hidden md:block" />I design systems that replace
          manual work, and spaces that make art matter.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/about" className="btn-primary">
            About me
          </Link>
          <Link href="/blog" className="btn-secondary">
            Read my writing
          </Link>
        </div>
      </div>
    </section>
  );
}
