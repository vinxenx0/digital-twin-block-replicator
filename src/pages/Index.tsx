
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StepsSection from "@/components/StepsSection";
import BenefitsSection from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import SecuritySection from "@/components/SecuritySection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import TechnicalDocsSection from "@/components/TechnicalDocsSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <StepsSection />
      <BenefitsSection />
      <PricingSection />
      <SecuritySection />
      <SuccessStoriesSection />
      <TechnicalDocsSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
