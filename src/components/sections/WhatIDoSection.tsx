import { useTranslations } from 'next-intl';

export default function WhatIDoSection() {
  const t = useTranslations('HomeServices');
  // Grabs "lead-gen,onboarding,retention" from your JSON
  const services = t('list').split(',');

  return (
    <section
      className="py-20 px-6 md:px-10 border-t"
      style={{ borderColor: "var(--color-border)" }}
    >
      <div className="mx-auto max-w-3xl">
        <p className="label uppercase tracking-widest text-sm" style={{ color: "var(--color-text-muted)" }}>
          {t('label')}
        </p>

        <h2
          className="mt-3 text-3xl md:text-4xl font-normal"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-text-primary)" }}
        >
          {t('headline')}
        </h2>

        <p className="mt-6 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
          {t('subheadline')}
        </p>

        <div className="mt-16">
          {services.map((key) => (
            <div
              key={key}
              className="py-8 border-t"
              style={{ borderColor: "var(--color-border)" }}
            >
              <h3
                className="text-base font-medium"
                style={{ fontFamily: "var(--font-serif)", color: "var(--color-text-primary)" }}
              >
                {t(`${key}.title`)}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)", maxWidth: "none" }}
              >
                {t(`${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}