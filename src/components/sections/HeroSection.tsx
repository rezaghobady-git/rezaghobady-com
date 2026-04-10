import { useTranslations } from 'next-intl';
import { Link } from "@/i18n/navigation"; // Use your localized Link!

export default function HeroSection() {
  const t = useTranslations('Hero');

  return (
    <section className="py-20 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-3xl">
        <p className="label" style={{ color: "var(--color-text-muted)" }}>
          {t('location')}
        </p>

        <h1
          className="mt-6 text-5xl md:text-6xl leading-none tracking-tight"
          style={{
            fontFamily: "var(--font-serif)",
            color: "var(--color-text-primary)",
          }}
        >
          {t('title')}
          <br />
          {t('subtitle')}
        </h1>

        <p
          className="mt-4 text-2xl md:text-3xl leading-snug"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            color: "var(--color-text-secondary)",
          }}
        >
          {t('description')}
        </p>

        <div
          className="mt-8 text-base leading-relaxed"
          style={{ color: "var(--color-text-secondary)", maxWidth: "52ch" }}
        >
          {/* Using t.rich allows us to keep the links interactive within the translation string */}
          {t.rich('body', {
            kaav: (chunks) => (
              <a
                href="https://kaavops.com?utm_source=rezaghobady.com&utm_medium=website&utm_campaign=hero"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-70 transition-opacity duration-200"
              >
                {chunks}
              </a>
            ),
            simine: (chunks) => (
              <a
                href="https://simine.fr?utm_source=rezaghobady.com&utm_medium=website&utm_campaign=hero"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-70 transition-opacity duration-200"
              >
                {chunks}
              </a>
            )
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/services" className="btn-primary">
            {t('ctaWork')}
          </Link>
          <Link href="/about" className="btn-secondary">
            {t('ctaAbout')}
          </Link>
        </div>
      </div>
    </section>
  );
}