"use client";

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
    <section className="py-24 bg-[#f8fafc] grid-bg-light relative border-y border-zinc-200/50">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-40 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-4 inline-block"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-zinc-950 mt-3 mb-6"
          >
            Solving Real Campus Challenges, Day-to-Day
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-lg leading-relaxed font-normal"
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
          className="w-full bg-slate-50/50 border border-zinc-200/80 rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(59,130,246,0.04)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Tabs Column */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-3">
              <div className="space-y-3">
                {conversationTabs.map((tab, idx) => {
                  const Icon = tab.icon;
                  const isActive = idx === activeIdx;

                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveIdx(idx)}
                      whileHover={{ x: isActive ? 0 : 4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-700 font-bold shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)]"
                          : "bg-white hover:bg-slate-50 text-zinc-700 border-zinc-200/60 hover:border-zinc-300 font-medium"
                      }`}
                    >
                      <div className={`p-2.5 rounded-xl transition-colors duration-300 ${
                        isActive ? "bg-white/15 text-white" : "bg-blue-50 text-blue-600"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-base tracking-wide">{tab.label}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Decorative brand label */}
              <div className="hidden lg:block pt-6 border-t border-zinc-200/80 text-center lg:text-left">
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">EDBA Interactive Preview</p>
                <p className="text-xs text-zinc-500 mt-1">Click options above to explore solutions</p>
              </div>
            </div>

            {/* Right Chat Preview Panel */}
            <div className="lg:col-span-8 bg-white border border-zinc-200/80 rounded-2xl p-6 md:p-8 flex flex-col justify-center min-h-[280px] md:min-h-[320px] relative overflow-hidden shadow-inner bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]">
              
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
                  className="flex flex-col gap-5 md:gap-6 w-full"
                >
                  {/* Row 1: Questioner Info + Question Bubble */}
                  <motion.div 
                    variants={{
                      initial: { opacity: 0, x: -20, scale: 0.95 },
                      animate: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 14 } },
                      exit: { opacity: 0, x: -10, transition: { duration: 0.2 } }
                    }}
                    className="flex gap-4 items-start"
                  >
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                      <img
                        src={current.questioner.avatar}
                        alt={current.questioner.name}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-blue-500 shadow-md"
                      />
                      <span className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1 rounded-full shadow-sm">
                        <MessageSquare className="w-3 h-3" />
                      </span>
                    </div>

                    {/* Question Bubble wrapper */}
                    <div className="flex flex-col gap-1.5 max-w-[80%]">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-zinc-800 text-xs md:text-sm">{current.questioner.name}</span>
                        <span className="text-zinc-400 text-[10px] md:text-xs">({current.questioner.role})</span>
                      </div>
                      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-3 px-5 rounded-2xl rounded-tl-none shadow-[0_4px_12px_rgba(37,99,235,0.15)]">
                        <p className="font-medium text-sm md:text-base leading-relaxed">
                          {current.question}
                        </p>
                        {/* Speech Bubble Arrow pointing left */}
                        <div className="absolute top-0 -left-2 w-0 h-0 border-t-[12px] border-t-blue-600 border-l-[12px] border-l-transparent"></div>
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
                    className="flex flex-col items-end gap-1.5 self-end w-full max-w-[85%]"
                  >
                    <div className="flex items-center gap-2 justify-end">
                      <span className="font-semibold text-blue-700 text-xs md:text-sm">EDBA Platform</span>
                      <span className="bg-blue-50 text-blue-700 text-[9px] font-extrabold px-1.5 py-0.5 rounded-md uppercase border border-blue-200">System Response</span>
                    </div>
                    <div className="relative bg-slate-50 border border-zinc-200/60 text-zinc-800 py-4 px-6 rounded-2xl rounded-tr-none shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                      <p className="font-normal text-sm md:text-base leading-relaxed">
                        {current.answer}
                      </p>
                      {/* Speech Bubble Arrow pointing right */}
                      <div className="absolute top-0 -right-2 w-0 h-0 border-t-[12px] border-t-slate-50 border-r-[12px] border-r-transparent"></div>
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
