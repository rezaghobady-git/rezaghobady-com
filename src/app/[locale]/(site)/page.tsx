import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import WhatIDoSection from "@/components/sections/WhatIDoSection";
import KaavOpsCTASection from "@/components/sections/KaavOpsCTASection";
import RecentWritingSection from "@/components/sections/RecentWritingSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { getTranslations } from 'next-intl/server';

// Metadata needs to be generated based on the locale now
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description')
  };
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <WhatIDoSection />
      <KaavOpsCTASection />
      <RecentWritingSection />
      <NewsletterSection />
    </>
  );
}