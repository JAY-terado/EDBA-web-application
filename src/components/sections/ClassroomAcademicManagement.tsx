import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  User,
  CreditCard,
  Calendar,
  BookOpen,
  Users,
  BarChart2,
  GraduationCap,
  FileText,
  CheckCircle2,
} from "lucide-react";

interface WorkflowStep {
  number: number;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  isTop: boolean;
  colors: {
    nodeBg: string;
    iconBg: string;
    iconColor: string;
    stemBorder: string;
    borderHover: string;
  };
}

const steps: WorkflowStep[] = [
  {
    number: 1,
    title: "Enquiry & Admission",
    desc: "Capture leads and manage applications to enrolment.",
    icon: User,
    isTop: true,
    colors: {
      nodeBg: "bg-[#f97316]",
      iconBg: "bg-orange-50/90",
      iconColor: "text-[#f97316]",
      stemBorder: "border-[#f97316]",
      borderHover: "hover:border-orange-300",
    },
  },
  {
    number: 2,
    title: "Fees",
    desc: "Collect and track payments effortlessly.",
    icon: CreditCard,
    isTop: false,
    colors: {
      nodeBg: "bg-[#f59e0b]",
      iconBg: "bg-amber-50/90",
      iconColor: "text-[#f59e0b]",
      stemBorder: "border-[#f59e0b]",
      borderHover: "hover:border-amber-300",
    },
  },
  {
    number: 3,
    title: "Classroom Management",
    desc: "Organize classes, sections and daily workflows.",
    icon: Calendar,
    isTop: true,
    colors: {
      nodeBg: "bg-[#3b82f6]",
      iconBg: "bg-blue-50/90",
      iconColor: "text-[#3b82f6]",
      stemBorder: "border-[#3b82f6]",
      borderHover: "hover:border-blue-300",
    },
  },
  {
    number: 4,
    title: "Academic Management",
    desc: "Plan timetables and academic activities.",
    icon: BookOpen,
    isTop: false,
    colors: {
      nodeBg: "bg-[#8b5cf6]",
      iconBg: "bg-purple-50/90",
      iconColor: "text-[#8b5cf6]",
      stemBorder: "border-[#8b5cf6]",
      borderHover: "hover:border-purple-300",
    },
  },
  {
    number: 5,
    title: "Student Attendance",
    desc: "Mark, correct, and track leave.",
    icon: Users,
    isTop: true,
    colors: {
      nodeBg: "bg-[#10b981]",
      iconBg: "bg-emerald-50/90",
      iconColor: "text-[#10b981]",
      stemBorder: "border-[#10b981]",
      borderHover: "hover:border-emerald-300",
    },
  },
  {
    number: 6,
    title: "Examinations & Results",
    desc: "Manage exams and track progress.",
    icon: BarChart2,
    isTop: false,
    colors: {
      nodeBg: "bg-[#f43f5e]",
      iconBg: "bg-rose-50/90",
      iconColor: "text-[#f43f5e]",
      stemBorder: "border-[#f43f5e]",
      borderHover: "hover:border-rose-300",
    },
  },
  {
    number: 7,
    title: "Learning Management (LMS)",
    desc: "Share resources and engage students.",
    icon: GraduationCap,
    isTop: true,
    colors: {
      nodeBg: "bg-[#2563eb]",
      iconBg: "bg-blue-50/90",
      iconColor: "text-[#2563eb]",
      stemBorder: "border-[#2563eb]",
      borderHover: "hover:border-blue-300",
    },
  },
  {
    number: 8,
    title: "Documents & Certifications",
    desc: "Secure and store records and certificates.",
    icon: FileText,
    isTop: false,
    colors: {
      nodeBg: "bg-[#06b6d4]",
      iconBg: "bg-teal-50/90",
      iconColor: "text-[#06b6d4]",
      stemBorder: "border-[#06b6d4]",
      borderHover: "hover:border-teal-300",
    },
  },
];

const highlights = [
  "Less manual effort",
  "Better coordination",
  "More time to teach",
  "One central platform",
];

export default function ClassroomAcademicManagement() {
  const mobileTimelineRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for the mobile vertical connected journey
  const { scrollYProgress } = useScroll({
    target: mobileTimelineRef,
    offset: ["start 75%", "end 60%"],
  });

  // Physical spring smoothing for fluid animated line drawing
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <section
      id="academic-management"
      className="py-14 sm:py-20 bg-[#fbfcfd] relative overflow-hidden border-b border-slate-100"
    >
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl lg:max-w-5xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#eff6ff] border border-blue-200/80 text-blue-600 text-[11px] font-semibold uppercase tracking-wider mb-2.5 shadow-2xs">
            <User className="w-3 h-3 text-blue-600" aria-hidden="true" />
            <span>CLASSROOM & ACADEMIC MANAGEMENT</span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] leading-tight text-slate-900 tracking-tight mb-2.5 md:whitespace-nowrap">
            Classroom & Academic{" "}
            <span className="text-[#0284c7]">
              Management Software
            </span>
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
            Simplify academic workflows with a unified platform designed for schools, colleges, and educational institutions.
          </p>
        </div>

        {/* ── MOBILE: Clean Vertical Connected Journey with Scroll Animation (< md) ── */}
        <div ref={mobileTimelineRef} className="block md:hidden relative px-1 max-w-lg mx-auto">
          {/* Inactive Base Connecting Line Track */}
          <div
            className="absolute left-[19px] top-5 bottom-6 w-[2px] bg-slate-200/80 z-0 pointer-events-none rounded-full"
            aria-hidden="true"
          />

          {/* Active Animated Gradient Line (Linked to user scroll - matches exact color of each node as it passes) */}
          <motion.div
            style={{
              scaleY,
              transformOrigin: "top",
              background:
                "linear-gradient(to bottom, #f97316 0%, #f59e0b 14.3%, #3b82f6 28.6%, #8b5cf6 42.9%, #10b981 57.1%, #f43f5e 71.4%, #2563eb 85.7%, #06b6d4 100%)",
            }}
            className="absolute left-[18.5px] top-5 bottom-6 w-[3px] z-0 pointer-events-none rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            aria-hidden="true"
          />

          <div className="space-y-3.5 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0.5, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-45px" }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex items-start gap-3.5 group"
                >
                  {/* Step Number Node on Vertical Line */}
                  <div className="flex-shrink-0 pt-2.5 relative">
                    <motion.div
                      initial={{ scale: 0.88 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false, margin: "-45px" }}
                      transition={{ type: "spring", stiffness: 350, damping: 20 }}
                      className={`w-10 h-10 rounded-full ${step.colors.nodeBg} text-white font-bold text-xs flex items-center justify-center shadow-md ring-4 ring-[#fbfcfd] transition-transform group-active:scale-95 duration-200`}
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Step Card */}
                  <div className={`flex-1 bg-white rounded-2xl p-4 border border-slate-200/90 shadow-[0_2px_12px_rgba(15,23,42,0.04)] active:scale-[0.99] transition-all duration-150 ${step.colors.borderHover}`}>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 shadow-2xs ${step.colors.iconBg} ${step.colors.iconColor}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-display font-bold text-slate-900 text-[13.5px] leading-snug">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── DESKTOP: 8-Step Timeline with Straight Connecting Line (>= md) ── */}
        <div className="hidden md:block overflow-x-auto pb-4 pt-1 scrollbar-none">
          <div className="min-w-[1180px] 2xl:min-w-0">
            <div className="grid grid-cols-8 gap-3 sm:gap-4 lg:gap-4.5 items-stretch relative">
              
              {/* Continuous Horizontal Straight Line behind the nodes matching each node's exact color */}
              <div
                style={{
                  background:
                    "linear-gradient(to right, #f97316 0%, #f59e0b 14.3%, #3b82f6 28.6%, #8b5cf6 42.9%, #10b981 57.1%, #f43f5e 71.4%, #2563eb 85.7%, #06b6d4 100%)",
                }}
                className="absolute left-[3%] right-[3%] top-1/2 -translate-y-1/2 h-[2.5px] opacity-75 z-0 pointer-events-none rounded-full shadow-xs"
                aria-hidden="true"
              />

              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="flex flex-col items-center justify-between relative z-10 group"
                  >
                    
                    {/* Top Slot (Card if isTop, else invisible placeholder) */}
                    <div className="w-full flex-1 flex flex-col justify-end">
                      {step.isTop ? (
                        <div
                          className={`w-full bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_4px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_36px_rgba(15,23,42,0.12)] transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between min-h-[155px] sm:min-h-[165px] ${step.colors.borderHover}`}
                        >
                          <div>
                            <div className="flex items-center justify-start mb-3 sm:mb-3.5">
                              <div
                                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shadow-2xs ${step.colors.iconBg} ${step.colors.iconColor}`}
                              >
                                <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                              </div>
                            </div>

                            <h3 className="font-display font-bold text-slate-900 text-[13.5px] sm:text-[15px] leading-snug mb-1.5">
                              {step.title}
                            </h3>
                          </div>

                          <p className="text-slate-500 text-[11px] sm:text-[12px] leading-relaxed font-normal">
                            {step.desc}
                          </p>
                        </div>
                      ) : (
                        <div className="w-full min-h-[155px] sm:min-h-[165px]" aria-hidden="true" />
                      )}
                    </div>

                    {/* Middle Slot: Number Node & Vertical Dotted Connector */}
                    <div className="relative w-full h-14 sm:h-16 flex flex-col items-center justify-center my-0.5">
                      {/* Top Dotted Connector (for Top Cards) */}
                      {step.isTop && (
                        <div
                          className={`absolute top-0 bottom-1/2 left-1/2 -translate-x-1/2 w-0 border-l-2 border-dotted ${step.colors.stemBorder} z-0`}
                        />
                      )}

                      {/* Numbered Node Badge on the Straight Line */}
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${step.colors.nodeBg} text-white font-bold text-xs sm:text-[13px] flex items-center justify-center shadow-md relative z-10 ring-3 ring-white transition-transform group-hover:scale-110 duration-200`}
                      >
                        {step.number}
                      </div>

                      {/* Bottom Dotted Connector (for Bottom Cards) */}
                      {!step.isTop && (
                        <div
                          className={`absolute top-1/2 bottom-0 left-1/2 -translate-x-1/2 w-0 border-l-2 border-dotted ${step.colors.stemBorder} z-0`}
                        />
                      )}
                    </div>

                    {/* Bottom Slot (Card if !isTop, else invisible placeholder) */}
                    <div className="w-full flex-1 flex flex-col justify-start">
                      {!step.isTop ? (
                        <div
                          className={`w-full bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_4px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_36px_rgba(15,23,42,0.12)] transition-all duration-200 hover:translate-y-1 flex flex-col justify-between min-h-[155px] sm:min-h-[165px] ${step.colors.borderHover}`}
                        >
                          <div>
                            <div className="flex items-center justify-start mb-3 sm:mb-3.5">
                              <div
                                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shadow-2xs ${step.colors.iconBg} ${step.colors.iconColor}`}
                              >
                                <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                              </div>
                            </div>

                            <h3 className="font-display font-bold text-slate-900 text-[13.5px] sm:text-[15px] leading-snug mb-1.5">
                              {step.title}
                            </h3>
                          </div>

                          <p className="text-slate-500 text-[11px] sm:text-[12px] leading-relaxed font-normal">
                            {step.desc}
                          </p>
                        </div>
                      ) : (
                        <div className="w-full min-h-[155px] sm:min-h-[165px]" aria-hidden="true" />
                      )}
                    </div>

                  </div>
                );
              })}

            </div>
          </div>
        </div>

        {/* Desktop Bottom Benefits Pill (>= md) */}
        <div className="hidden md:flex mt-10 sm:mt-12 max-w-4xl mx-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#eff6ff]/70 border border-blue-100/90 shadow-2xs items-center justify-around gap-4 text-xs sm:text-[13px] font-semibold text-slate-700">
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
