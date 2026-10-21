import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCta from "@/components/layout/FloatingCta";
import DemoModal from "@/components/modals/DemoModal";

// Section 1: Hero
import Hero from "@/components/sections/Hero";
// Section 2: Live Classes & Interactive Learning
import LiveClasses from "@/components/sections/LiveClasses";
// Section 3: Why Institutes Choose EDBA
import WhyInstitutesChooseEdba from "@/components/sections/WhyInstitutesChooseEdba";
// Section 4: Education Management Platform
import EducationManagementPlatform from "@/components/sections/EducationManagementPlatform";
// Section 5: EDBA Ecosystem (8 modules)
import EdbaEcosystem from "@/components/sections/EdbaEcosystem";
// Section 6: Classroom & Academic Management
import ClassroomAcademicManagement from "@/components/sections/ClassroomAcademicManagement";
// Section 7: Student Information & Management
import StudentInformationManagement from "@/components/sections/StudentInformationManagement";
// Section 8: Parent & Institutional Communication
import ParentCommunicationPlatform from "@/components/sections/ParentCommunicationPlatform";
// Section 9: Trusted by Leading Educational Institutions
import TrustedInstitutions from "@/components/sections/TrustedInstitutions";
// Section 10: 4 Simple Steps Towards Digital Transformation
import DigitalTransformationJourney from "@/components/sections/DigitalTransformationJourney";
// Section 11: Data Privacy & Security
import DataPrivacySecurity from "@/components/sections/DataPrivacySecurity";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="flex-1 w-full overflow-x-clip">
        {/* Section 1 */}
        <Hero />
        {/* Section 2 */}
        <LiveClasses />
        {/* Section 3 */}
        <WhyInstitutesChooseEdba />
        {/* Section 4 */}
        <EducationManagementPlatform />
        {/* Section 5 */}
        <EdbaEcosystem />
        {/* Section 6 */}
        <ClassroomAcademicManagement />
        {/* Section 7 */}
        <StudentInformationManagement />
        {/* Section 8 */}
        <ParentCommunicationPlatform />
        {/* Section 9 */}
        <TrustedInstitutions />
        {/* Section 10 */}
        <DigitalTransformationJourney />
        {/* Section 11 */}
        <DataPrivacySecurity />
      </main>

      <Footer />
      <FloatingCta />
      <DemoModal />
    </div>
  );
};

export default HomePage;
