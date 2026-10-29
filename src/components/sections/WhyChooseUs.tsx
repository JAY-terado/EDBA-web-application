import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MousePointerClick, 
  Workflow, 
  ShieldCheck, 
  Sparkles, 
  Zap,
  MessageSquare
} from "lucide-react";

// Tab Data for the interactive conversation
const conversationTabs = [
  {
    id: "simplify",
    label: "Effortless",
    icon: MousePointerClick,
    questioner: {
      name: "Rajesh Kumar",
      role: "Campus Administrator",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    },
    question: "How easy is it to manage daily tasks?",
    answer: "Yes—everything you need is organized in one clean, easy-to-use dashboard.",
  },
  {
    id: "streamline",
    label: "Run Smoother",
    icon: Workflow,
    questioner: {
      name: "Priya Patel",
      role: "Academic Staff",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    },
    question: "Can I manage all school operations from one place?",
    answer: "Yes. Academics, administration, and communication are all integrated into a single, clean dashboard.",
  },
  {
    id: "secure",
    label: "Protected",
    icon: ShieldCheck,
    questioner: {
      name: "Vikram Shah",
      role: "IT & Operations Lead",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    },
    question: "Is my data secure?",
    answer: "Yes. We use industry-standard encryption and strict privacy controls to keep all your information protected.",
  },
  {
    id: "smart",
    label: "AI-Powered",
    icon: Sparkles,
    questioner: {
      name: "Ananya Sen",
      role: "Campus Director",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
    },
    question: "Does the platform use AI?",
    answer: "Yes. Built-in AI handles routine tasks, delivers real-time insights, and supports flexible hybrid learning.",
  },
  {
    id: "start",
    label: "Get Started",
    icon: Zap,
    questioner: {
      name: "Amit Sharma",
      role: "School Management",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    },
    question: "How fast can we get started?",
    answer: "Get set up in under 7 Days, backed by step-by-step support every step of the way.",
  },
];

export default function WhyChooseUs() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = conversationTabs[activeIdx];

  return (
    <section className="py-20 sm:py-28 smart-display-tight:py-12 bg-[#f8fafc] grid-bg-light relative border-y border-slate-200/80">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-40 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 shadow-2xs">
              <Workflow className="w-3 h-3 text-blue-600" aria-hidden="true" />
              Why Choose Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-extrabold text-2xl sm:text-4xl lg:text-[42px] leading-tight text-slate-900 mt-2 mb-3 sm:mb-4 tracking-tight"
          >
            Solving Real Campus Challenges, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Day-to-Day</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal"
          >
            See how EDBA simplifies operations, streamlines data, and guarantees absolute security through real-world dialogues with campus administrators, staff, and directors.
          </motion.p>
        </div>

        {/* Interactive Component Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full bg-white border border-slate-200/90 rounded-3xl p-4 sm:p-6 md:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.04)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            
            {/* Left Tabs Column */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-3" role="tablist" aria-label="Why Choose Us Topics">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2.5 sm:gap-3">
                {conversationTabs.map((tab, idx) => {
                  const Icon = tab.icon;
                  const isActive = idx === activeIdx;

                  return (
                    <motion.button
                      key={tab.id}
                      role="tab"
                      id={`tab-${tab.id}`}
                      aria-controls={`panel-${tab.id}`}
                      aria-selected={isActive}
                      onClick={() => setActiveIdx(idx)}
                      whileHover={{ x: isActive ? 0 : 4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center gap-3 sm:gap-4 p-3 sm:px-5 sm:py-4 rounded-xl sm:rounded-2xl text-left border transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 min-h-[44px] ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-700 font-bold shadow-[0_8px_20px_-6px_rgba(45,118,196,0.4)]"
                          : "bg-white hover:bg-slate-50 text-slate-700 border-slate-200/80 hover:border-slate-300 font-medium"
                      }`}
                    >
                      <div className={`p-2 sm:p-2.5 rounded-lg sm:rounded-xl transition-colors duration-200 ${
                        isActive ? "bg-white/15 text-white" : "bg-blue-50 text-blue-600"
                      }`}>
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                      </div>
                      <span className="text-sm sm:text-base tracking-normal">{tab.label}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Decorative brand label */}
              <div className="hidden lg:block pt-6 border-t border-slate-100 text-center lg:text-left">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">EDBA Interactive Preview</p>
                <p className="text-xs text-slate-500 mt-1">Select any tab above to see the interactive conversation</p>
              </div>
            </div>

            {/* Right Chat Preview Panel */}
            <div 
              role="tabpanel"
              id={`panel-${current.id}`}
              aria-labelledby={`tab-${current.id}`}
              className="lg:col-span-8 bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-center min-h-[260px] sm:min-h-[300px] relative overflow-hidden shadow-inner bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"
            >
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={{
                    initial: { opacity: 0 },
                    animate: { opacity: 1, transition: { staggerChildren: 0.15 } },
                    exit: { opacity: 0, transition: { duration: 0.2 } }
                  }}
                  className="flex flex-col gap-4 sm:gap-6 w-full"
                >
                  {/* Row 1: Questioner Info + Question Bubble */}
                  <motion.div 
                    variants={{
                      initial: { opacity: 0, x: -20, scale: 0.95 },
                      animate: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 14 } },
                      exit: { opacity: 0, x: -10, transition: { duration: 0.2 } }
                    }}
                    className="flex gap-3 sm:gap-4 items-start"
                  >
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                      <img
                        src={current.questioner.avatar}
                        alt={current.questioner.name}
                        className="w-11 h-11 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-blue-500 shadow-md"
                      />
                      <span className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1 rounded-full shadow-sm">
                        <MessageSquare className="w-2.5 h-2.5 sm:w-3 sm:h-3" aria-hidden="true" />
                      </span>
                    </div>

                    {/* Question Bubble wrapper */}
                    <div className="flex flex-col gap-1 sm:gap-1.5 max-w-[85%] sm:max-w-[80%]">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-800 text-xs sm:text-sm">{current.questioner.name}</span>
                        <span className="text-slate-500 text-xs">({current.questioner.role})</span>
                      </div>
                      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-2.5 px-4 sm:py-3 sm:px-5 rounded-2xl rounded-tl-none shadow-[0_4px_12px_rgba(45,118,196,0.15)]">
                        <p className="font-medium text-sm sm:text-base leading-relaxed">
                          {current.question}
                        </p>
                        <div className="absolute top-0 -left-2 w-0 h-0 border-t-[10px] sm:border-t-[12px] border-t-blue-600 border-l-[10px] sm:border-l-[12px] border-l-transparent"></div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Row 2: EDBA Answer Bubble */}
                  <motion.div 
                    variants={{
                      initial: { opacity: 0, y: 20, scale: 0.95 },
                      animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 14 } },
                      exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
                    }}
                    className="flex flex-col items-end gap-1.5 self-end w-full max-w-[90%] sm:max-w-[85%]"
                  >
                    <div className="flex items-center gap-2 justify-end">
                      <span className="font-semibold text-blue-700 text-xs sm:text-sm">EDBA Platform</span>
                      <span className="bg-blue-50 text-blue-700 text-xs font-extrabold px-2 py-0.5 rounded-md uppercase border border-blue-200">System Response</span>
                    </div>
                    <div className="relative bg-white border border-slate-200 text-slate-800 py-3 px-4 sm:py-4 sm:px-6 rounded-2xl rounded-tr-none shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
                      <p className="font-normal text-sm sm:text-base leading-relaxed">
                        {current.answer}
                      </p>
                      <div className="absolute top-0 -right-2 w-0 h-0 border-t-[10px] sm:border-t-[12px] border-t-white border-r-[10px] sm:border-r-[12px] border-r-transparent"></div>
                    </div>
                  </motion.div>
                  
                </motion.div>
              </AnimatePresence>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
