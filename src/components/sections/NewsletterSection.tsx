"use client";

import { useTranslations } from 'next-intl';

export default function NewsletterSection() {
  const t = useTranslations('Newsletter');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for your newsletter provider (e.g., Beehiiv, Buttondown, or a custom route) goes here
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-10 border-t" style={{ borderColor: "var(--color-border)" }}>
      <div className="mx-auto max-w-3xl">
        <p className="label" style={{ color: "var(--color-text-muted)" }}>
          {t('label')}
        </p>

        <div className="mt-6">
          <h2
            className="text-3xl md:text-4xl leading-tight"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text-primary)" }}
          >
            {t('headline')}
            <span className="block italic" style={{ color: "var(--color-text-secondary)" }}>
              {t('subheadline')}
            </span>
          </h2>

          <p className="mt-6 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            {t('description')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 max-w-md">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder={t('placeholder')}
              className="flex-1 px-4 py-3 rounded-md bg-transparent border outline-none transition-all duration-200 focus:ring-1 focus:ring-zinc-400"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text-primary)"
              }}
            />
            <button
              type="submit"
              className="btn-primary py-3 px-8 whitespace-nowrap"
            >
              {t('button')}
            </button>
          </div>
          <p className="mt-4 text-xs" style={{ color: "var(--color-text-muted)" }}>
            {t('disclaimer')}
          </p>
        </form>
      </div>
    </section>
  );
}