import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import WhatIDoSection from "@/components/sections/WhatIDoSection";
import KaavOpsCTASection from "@/components/sections/KaavOpsCTASection";
import RecentWritingSection from "@/components/sections/RecentWritingSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export const metadata: Metadata = {
  title: "Reza Ghobady",
  description:
    "I design AI-powered revenue systems for agencies and B2B service businesses. Founder of KaavOps and Simine Paris. Based in Paris.",
};

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
