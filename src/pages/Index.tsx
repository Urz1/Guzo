import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NarrativeBreak from "@/components/NarrativeBreak";
import DestinationsSection from "@/components/DestinationsSection";
import StatsBanner from "@/components/StatsBanner";
import ExperiencesSection from "@/components/ExperiencesSection";
import HeritageHighlights from "@/components/HeritageHighlights";
import FestivalBreak from "@/components/FestivalBreak";
import FestivalsSection from "@/components/FestivalsSection";
import WildlifeTeaser from "@/components/WildlifeTeaser";
import GallerySection from "@/components/GallerySection";
import CultureSection from "@/components/CultureSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <main className="overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <NarrativeBreak />
        <DestinationsSection />
        <StatsBanner />
        <HeritageHighlights />
        <ExperiencesSection />
        <FestivalBreak />
        <FestivalsSection />
        <WildlifeTeaser />
        <GallerySection />
        <CultureSection />
        <TestimonialsSection />
        <CTASection />
        <FooterSection />
      </main>
    </PageTransition>
  );
};

export default Index;
