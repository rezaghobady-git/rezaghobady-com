import { useTranslations } from 'next-intl';

export default function ProblemSection() {
  const t = useTranslations('Problem');

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Role: Label */}
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
          {t('label')}
        </p>

        {/* Role: Headline */}
        <h2 className="text-4xl font-serif mb-6">
          {t('headline')}
        </h2>

        {/* Role: Subheadline */}
        <p className="text-xl text-gray-600 mb-12">
          {t('subheadline')}
        </p>

        {/* Role: List Items */}
        <div className="space-y-8">
          <div className="border-l-2 border-black pl-6">
            <p className="text-lg">{t('points.bottleneck')}</p>
          </div>
          <div className="border-l-2 border-black pl-6">
            <p className="text-lg">{t('points.scaling')}</p>
          </div>
          <div className="border-l-2 border-black pl-6">
            <p className="text-lg">{t('points.freedom')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}