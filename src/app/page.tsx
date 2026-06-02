import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMetrics from "@/components/TrustMetrics";
import FeaturesGrid from "@/components/FeaturesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import LmsSolutions from "@/components/LmsSolutions";
import AiAssistant from "@/components/AiAssistant";
import Academics from "@/components/Academics";
import Assessment from "@/components/Assessment";
import Community from "@/components/Community";
import Safety from "@/components/Safety";
import MobileApps from "@/components/MobileApps";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustMetrics />
        <FeaturesGrid />
        <WhyChooseUs />
        <LmsSolutions />
        <AiAssistant />
        <Academics />
        <Assessment />
        <Community />
        <Safety />
        <MobileApps />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
