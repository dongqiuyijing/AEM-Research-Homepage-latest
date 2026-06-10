import HeroSection from "../components/HeroSection";
import AbstractSection from "../components/AbstractSection";
import MotivationSection from "../components/MotivationSection";
import MethodSection from "../components/MethodSection";
import SimResultsSection from "../components/SimResultsSection";
import RealResultsSection from "../components/RealResultsSection";
import AblationSection from "../components/AblationSection";
import AcknowledgementSection from "../components/AcknowledgementSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <div className="mx-auto max-w-5xl">
        <hr className="border-border" />
      </div>
      <AbstractSection />
      <MotivationSection />
      <MethodSection />
      <SimResultsSection />
      <RealResultsSection />
      <AblationSection />
      <AcknowledgementSection />
      <Footer />
    </div>
  );
};

export default Index;
