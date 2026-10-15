import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCta from "@/components/layout/FloatingCta";
import DemoModal from "@/components/modals/DemoModal";
import Hero from "@/components/sections/Hero";
import TrustMetrics from "@/components/sections/TrustMetrics";
import Pioneers from "@/components/sections/Pioneers";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import LmsSolutions from "@/components/sections/LmsSolutions";
import AiAssistant from "@/components/sections/AiAssistant";
import Academics from "@/components/sections/Academics";
import Assessment from "@/components/sections/Assessment";
import Community from "@/components/sections/Community";
import MobileApps from "@/components/sections/MobileApps";
import Cta from "@/components/sections/Cta";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />
      
      <main className="flex-1 w-full">
        <Hero />
        <TrustMetrics />
        <Pioneers />
        <FeaturesGrid />
        <WhyChooseUs />
        <LmsSolutions />
        <AiAssistant />
        <Academics />
        <Assessment />
        <Community />
        <MobileApps />
        <Cta />
      </main>

      <Footer />
      <FloatingCta />
      <DemoModal />
    </div>
  );
};

export default HomePage;
