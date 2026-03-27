import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import VenturesSection from "@/components/sections/VenturesSection";
import RecentWritingSection from "@/components/sections/RecentWritingSection";
import NowSection from "@/components/sections/NowSection";
import ContactCTASection from "@/components/sections/ContactCTASection";

export const metadata: Metadata = {
  title: "Reza Ghobady",
  description:
    "Entrepreneur building at the intersection of AI, automation, and contemporary art. Founder of KaavOps and Simine Paris. Based in Paris.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <VenturesSection />
      <RecentWritingSection />
      <NowSection />
      <ContactCTASection />
    </>
  );
}
