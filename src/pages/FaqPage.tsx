import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  HelpCircle, 
  Sparkles, 
  Layers, 
  Rocket, 
  ChevronDown, 
  Phone, 
  Mail, 
  Calendar, 
  CheckCircle2, 
  BookOpen,
  School,
  GraduationCap,
  ShieldCheck,
  Clock
} from "lucide-react";
import Footer from "@/components/layout/Footer";
import FloatingCta from "@/components/layout/FloatingCta";
import DemoModal from "@/components/modals/DemoModal";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: "general" | "modules" | "getting-started";
  categoryLabel: string;
  badge?: string;
  tags: string[];
}

const FAQ_DATA: FaqItem[] = [
  // Category 1: General
  {
    id: 1,
    category: "general",
    categoryLabel: "General Overview",
    question: "What is EDBA?",
    answer: "EDBA is an education management platform that brings admissions, fees, classroom activities, academics, attendance, exams, and certificates into one place. It helps schools and colleges reduce manual work and stay organized.",
    tags: ["edba", "overview", "platform", "school", "college", "management", "features"]
  },
  {
    id: 2,
    category: "general",
    categoryLabel: "General Overview",
    question: "Who can use EDBA?",
    answer: "EDBA is built for schools, colleges, and specialised institutes. Administrators, educators, and authorized staff can each use it with the access they need.",
    tags: ["users", "roles", "schools", "colleges", "administrators", "educators", "staff"]
  },
  {
    id: 3,
    category: "general",
    categoryLabel: "General Overview",
    badge: "SSC, CBSE, ICSE, IB",
    question: "Does EDBA support different boards?",
    answer: "Yes. EDBA supports SSC, CBSE, ICSE, and IB schools with flexible curricula configurations and grading compliance.",
    tags: ["boards", "cbse", "icse", "ssc", "ib", "curriculum", "standards"]
  },

  // Category 2: Modules and features
  {
    id: 4,
    category: "modules",
    categoryLabel: "Modules & Features",
    question: "How does EDBA help with admissions?",
    answer: "EDBA captures enquiries from your website or offline sources and takes them through the admission process to enrolment. Your team can follow up on every lead from one place.",
    tags: ["admissions", "enrolment", "leads", "crm", "enquiries", "students"]
  },
  {
    id: 5,
    category: "modules",
    categoryLabel: "Modules & Features",
    question: "Can we manage fees on EDBA?",
    answer: "Yes. You can collect fees and track payments in the same system as admissions and student records with comprehensive ledger reports.",
    tags: ["fees", "payments", "finance", "billing", "collection", "ledger"]
  },
  {
    id: 6,
    category: "modules",
    categoryLabel: "Modules & Features",
    question: "How does EDBA help educators in the classroom?",
    answer: "Educators can manage classes, access timetables, coordinate academic activities, and keep student records without paperwork. This gives them more time to teach.",
    tags: ["educators", "teachers", "classroom", "timetables", "academics", "lesson planning"]
  },
  {
    id: 7,
    category: "modules",
    categoryLabel: "Modules & Features",
    question: "How does attendance work?",
    answer: "Educators can mark attendance digitally. EDBA also supports attendance corrections, leave requests, and instant parent notifications.",
    tags: ["attendance", "leave", "corrections", "daily tracking", "educators", "digital"]
  },
  {
    id: 8,
    category: "modules",
    categoryLabel: "Modules & Features",
    question: "What is the Learning Management System (LMS)?",
    answer: "The LMS lets educators share learning resources and keep students engaged through the same unified platform with assignments and study material access.",
    tags: ["lms", "learning", "study material", "assignments", "resources", "students"]
  },
  {
    id: 9,
    category: "modules",
    categoryLabel: "Modules & Features",
    question: "Can EDBA manage exams and results?",
    answer: "Yes. You can manage examinations, automate mark entries, and track student academic progress and results seamlessly.",
    tags: ["exams", "results", "marks", "grading", "report cards", "performance", "academics"]
  },
  {
    id: 10,
    category: "modules",
    categoryLabel: "Modules & Features",
    question: "Can we issue documents and certificates through EDBA?",
    answer: "Yes. You can issue, verify, and store student documents, transfer certificates, and merit certificates securely in the system.",
    tags: ["certificates", "documents", "tc", "records", "verification", "issuance"]
  },

  // Category 3: Getting started
  {
    id: 11,
    category: "getting-started",
    categoryLabel: "Getting Started",
    badge: "24-Hour Setup",
    question: "How long does setup take?",
    answer: "Most institutions can get started within 24 hours. Our dedicated onboarding team assists with data import and staff training for a smooth transition.",
    tags: ["setup", "24 hours", "onboarding", "migration", "start", "timeline"]
  },
  {
    id: 12,
    category: "getting-started",
    categoryLabel: "Getting Started",
    badge: "Live Walkthrough",
    question: "How can I see EDBA in action?",
    answer: "Click 'Book Free Demo' and our team will give you a walkthrough tailored specifically to your school or college.",
    tags: ["demo", "walkthrough", "preview", "consultation", "action", "trial"]
  }
];

export const FaqPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "general" | "modules" | "getting-started">("all");
  const [openIds, setOpenIds] = useState<number[]>([1]); // Only 1st box open by default

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-demo-modal"));
  };

  const toggleAccordion = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Filter items based on active category
  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      return activeCategory === "all" || item.category === activeCategory;
    });
  }, [activeCategory]);

  // Counts for pills
  const counts = useMemo(() => {
    return {
      all: FAQ_DATA.length,
      general: FAQ_DATA.filter((i) => i.category === "general").length,
      modules: FAQ_DATA.filter((i) => i.category === "modules").length,
      "getting-started": FAQ_DATA.filter((i) => i.category === "getting-started").length,
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#070e18] text-slate-100 font-sans flex flex-col selection:bg-blue-600 selection:text-white relative overflow-hidden">
      
      {/* Background Ambient Glows (matching EDBA dark aesthetics) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-[20%] left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      </div>

      {/* Header Bar */}
      <header className="w-full backdrop-blur-xl bg-[#0b1626]/80 sticky top-0 z-50 border-b border-slate-800/80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 group cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full px-3.5 py-1.5 hover:bg-slate-800/60 transition-all min-h-[44px]"
          >
            <ArrowLeft className="h-4 w-4 text-slate-400 group-hover:-translate-x-1 group-hover:text-white transition-all" />
            <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
              Back to Home
            </span>
          </Link>

          <Link to="/" className="transition-transform hover:scale-105">
            <img src="/logo.png" alt="EDBA Logo" className="h-7 sm:h-8 w-auto brightness-110" />
          </Link>

          <button
            type="button"
            onClick={handleOpenDemo}
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-all duration-150 rounded-full shadow-[0_2px_10px_rgba(37,99,235,0.35)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Book Free Demo
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow relative z-10">
        <section className="pt-14 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-400 bg-blue-950/60 border border-blue-800/60 mb-6 backdrop-blur-md shadow-xs">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span>Help Center &amp; Common Queries</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-300">Questions</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Everything you need to know about EDBA's education management platform, key modules, classroom tools, and rapid onboarding.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {[
              { id: "all", label: "All Questions", count: counts.all, icon: Sparkles },
              { id: "general", label: "General Overview", count: counts.general, icon: School },
              { id: "modules", label: "Modules & Features", count: counts.modules, icon: Layers },
              { id: "getting-started", label: "Getting Started", count: counts["getting-started"], icon: Rocket },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(tab.id as typeof activeCategory);
                  }}
                  className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400/40"
                      : "bg-[#0d1c32]/60 hover:bg-[#132845] text-slate-300 hover:text-white border border-slate-800"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-blue-400"}`} />
                  <span>{tab.label}</span>
                  <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-slate-800 text-slate-400"}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Highlight Quick Cards */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-6 rounded-2xl bg-[#0c182a]/70 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                <School className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm sm:text-base">All-In-One Platform</h3>
                <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed mt-1">
                  Unified dashboard for admissions, fees, classroom, attendance, examinations, and certificates.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0c182a]/70 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm sm:text-base">Fast 24-Hour Setup</h3>
                <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed mt-1">
                  Most institutions get fully operational within 24 hours with complete data import assistance.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0c182a]/70 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm sm:text-base">Board Flexible</h3>
                <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed mt-1">
                  Compliant workflows preconfigured for SSC, CBSE, ICSE, and IB curriculum standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Accordion List */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
          <div className="space-y-4">
              {filteredFaqs.map((faq) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl transition-all duration-200 border ${
                      isOpen
                        ? "bg-[#0d1c32] border-blue-500/50 shadow-xl shadow-blue-500/5"
                        : "bg-[#0b1626]/70 hover:bg-[#0d1c32]/80 border-slate-800/90 hover:border-slate-700"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full px-5 sm:px-6 py-4.5 sm:py-5 flex items-start justify-between gap-4 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-3 sm:gap-4 flex-1">
                        <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">
                          {faq.id}
                        </span>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                              {faq.categoryLabel}
                            </span>
                            {faq.badge && (
                              <span className="text-[10.5px] px-2 py-0.5 rounded-full bg-blue-900/60 text-blue-300 font-semibold border border-blue-700/60">
                                {faq.badge}
                              </span>
                            )}
                          </div>
                          <h2 className="text-sm sm:text-base font-semibold text-white leading-snug">
                            {faq.question}
                          </h2>
                        </div>
                      </div>

                      <div className={`p-1 rounded-full text-slate-400 transition-transform duration-200 mt-1 ${isOpen ? "rotate-180 text-blue-400" : ""}`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>

                    {/* Answer Collapsible with Apple Spring Physics */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ type: "spring", damping: 28, stiffness: 320 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60 mt-1">
                            <p className="font-normal">{faq.answer}</p>
                            
                            {/* Interactive actions for specific questions */}
                            {faq.id === 12 && (
                              <div className="mt-4 pt-3 border-t border-slate-800/40 flex items-center gap-3">
                                <button
                                  type="button"
                                  onClick={handleOpenDemo}
                                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all cursor-pointer shadow-md shadow-blue-600/30"
                                >
                                  <Calendar className="w-3.5 h-3.5" />
                                  <span>Book Free Demo</span>
                                </button>
                                <span className="text-[11px] text-slate-400">
                                  Personalized 1-on-1 walkthrough for your campus
                                </span>
                              </div>
                            )}

                            {faq.id === 11 && (
                              <div className="mt-3.5 inline-flex items-center gap-2 text-xs text-emerald-400 font-medium">
                                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                                <span>Quick setup • Zero disruption • Dedicated data migration</span>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          {/* Still Have Questions CTA Card */}
          <div className="mt-14 sm:mt-16 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0c1a2e] to-[#081220] border border-blue-900/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                  Have a specific question?
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Still have questions? Our team is here to help.
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
                  Connect directly with our education specialists for platform inquiries, pricing, or customized institutional needs.
                </p>

                {/* Direct Contact Links */}
                <div className="mt-5 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
                  <a
                    href="tel:+918956734701"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    <span>Call: +91 8956734701</span>
                  </a>
                  <span className="text-slate-600">•</span>
                  <a
                    href="tel:+918356846130"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Support: +91 83568 46130</span>
                  </a>
                  <span className="text-slate-600">•</span>
                  <a
                    href="mailto:support@edba.io?cc=vidula.patil@edba.io"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>support@edba.io</span>
                  </a>
                </div>
              </div>

              <div className="flex-shrink-0">
                <button
                  type="button"
                  onClick={handleOpenDemo}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-all duration-150 shadow-lg shadow-blue-500/25 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <span>Book Free Demo</span>
                </button>
              </div>
            </div>
          </div>

        </section>
      </main>

      {/* Complete Footer */}
      <Footer />

      {/* Floating Robo mascot and Demo Modal */}
      <FloatingCta />
      <DemoModal />
    </div>
  );
};

export default FaqPage;
