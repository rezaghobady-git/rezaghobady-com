import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from "next";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'AboutPage.Metadata' });

  return {
    title: t('title'),
    description: t('description')
  };
}

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  // 1. For the beliefs keys:
  const beliefKeys = t('Philosophy.list').split(',') as string[];

  // 2. For the tools (Keep this as a literal so 'as const' works):
  const tools = ['n8n', 'Claude Code', 'ClickUp', 'Linear', 'Notion'] as const;

  return (
    <>
      {/* ── Opening ── */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            {t('Header.label')}
          </p>
          <h1
            className="mt-6 text-5xl md:text-6xl leading-none tracking-tight"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            {t('Header.title')}
          </h1>

          <div
            className="mt-10 flex flex-col gap-5 text-base leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <p>{t('Header.description')}</p>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section
        className="py-20 md:py-32 px-6 md:px-10"
        style={{ backgroundColor: "var(--color-surface-muted)" }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            {t('Story.label')}
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            {t('Story.title')}
          </h2>

          <div
            className="mt-8 flex flex-col gap-4 text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <p>{t('Story.body1')}</p>
            <p>{t('Story.body2')}</p>
            <p>{t('Story.body3')}</p>
            <p>{t('Story.body4')}</p>
          </div>
        </div>
      </section>

      {/* ── Beliefs ── */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            {t('Philosophy.label')}
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            {t('Philosophy.title')}
          </h2>

          <div className="mt-10 flex flex-col gap-8">
            {beliefKeys.map((key) => (
              <div
                key={key}
                className="pt-6 border-t"
                style={{ borderColor: "var(--color-border)" }}
              >
                <p
                  className="text-base font-medium"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {t(`Philosophy.${key}.title` as any)}
                </p>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{
                    color: "var(--color-text-secondary)",
                    maxWidth: "none",
                  }}
                >
                  {t(`Philosophy.${key}.desc` as any)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Current work & stack ── */}
      <section
        className="py-20 md:py-32 px-6 md:px-10"
        style={{ backgroundColor: "var(--color-surface-muted)" }}
      >
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            {t('Now.label')}
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            {t('Now.title')}
          </h2>

          <div
            className="mt-8 flex flex-col gap-4 text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <p>{t('Now.body')}</p>
          </div>

          {/* Tools list */}
          <div className="mt-12">
            <p className="label" style={{ color: "var(--color-text-muted)" }}>
              {t('Now.stackLabel')}
            </p>
            <ul className="mt-6 flex flex-col">
              {tools.map((tool, i) => (
                <li
                  key={tool}
                  className="flex items-baseline justify-between py-4 gap-4"
                  style={{
                    borderTop: i === 0 ? "1px solid var(--color-border)" : undefined,
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {tool}
                  </span>
                  <span
                    className="label text-right"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {t(`Now.stack.${tool}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="label" style={{ color: "var(--color-text-muted)" }}>
            {t('Contact.label')}
          </p>
          <h2
            className="mt-3 text-3xl md:text-4xl"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-text-primary)",
            }}
          >
            {/* Change this line below */}
            {t('Contact.title')}
          </h2>
          <p
            className="mt-6 text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)", maxWidth: "48ch" }}
          >
            {t('Contact.body')}
          </p>

          <div
            className="mt-12 pt-10 border-t flex flex-col sm:flex-row sm:items-center gap-4"
            style={{ borderColor: "var(--color-border)" }}
          >
            <Link href="/services" className="btn-primary">
              {t('Contact.ctaWork')}
            </Link>
            <Link href="/contact" className="btn-secondary">
              {t('Contact.ctaContact')}
            </Link>
            <Link href="/blog" className="btn-ghost text-sm">
              {t('Contact.ctaWriting')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}