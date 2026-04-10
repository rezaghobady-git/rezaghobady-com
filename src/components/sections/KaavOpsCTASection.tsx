import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function KaavOpsCTASection() {
  const t = useTranslations('KaavOpsHome');

  return (
    <section
      className="py-20 md:py-32 px-6 md:px-10"
      style={{ backgroundColor: "#f1f0ee" }} // Matches production exactly
    >
      <div className="mx-auto max-w-3xl">
        <p className="label" style={{ color: "var(--color-text-muted)" }}>
          {t('label')}
        </p>

        <div className="mt-8">
          <h2
            className="mt-3 text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text-primary)" }}
          >
            {t('tagline')}
          </h2>

          <div className="mt-6 space-y-4 max-w-2xl">
            <p className="text-l leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              {t('description')}
            </p>
            <p className="label text-sm" style={{ color: "var(--color-text-muted)" }}>
              {t('details')}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {/* Primary Button */}
            <Link
              href="/services#how-it-works"
              className="btn-primary"
            >
              {t('cta.primary')}
            </Link>

            {/* Secondary Button */}
            <a
              href="https://kaavops.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {/* You can keep the arrow as a separate translated string or hardcoded */}
              {t('cta.secondary')} ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}