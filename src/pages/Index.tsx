import HeroSection from "@/components/HeroSection";
import NarrativeBreak from "@/components/NarrativeBreak";
import DestinationsSection from "@/components/DestinationsSection";
import StatsBanner from "@/components/StatsBanner";
import ExperiencesSection from "@/components/ExperiencesSection";
import FestivalBreak from "@/components/FestivalBreak";
import GallerySection from "@/components/GallerySection";
import CultureSection from "@/components/CultureSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <NarrativeBreak />
      <DestinationsSection />
      <StatsBanner />
      <ExperiencesSection />
      <FestivalBreak />
      <GallerySection />
      <CultureSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </main>
  );
};

export default Index;
