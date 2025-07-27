
import TopBanner from "@/components/TopBanner";
import MegaMenuNavigation from "@/components/MegaMenuNavigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StepsSection from "@/components/StepsSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import SecuritySection from "@/components/SecuritySection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import TechnicalDocsSection from "@/components/TechnicalDocsSection";
import ContactSection from "@/components/ContactSection";
// import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <MegaMenuNavigation />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <StepsSection />
      <PricingSection />
      <SuccessStoriesSection />
      <ContactSection />
      {/* <TechnicalDocsSection /> */}
      {/* <SecuritySection /> */}
      {/* <StatsSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
