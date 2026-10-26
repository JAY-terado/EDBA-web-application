import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Settings,
  Zap,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Cloud,
  ShieldCheck,
  Users,
  HeartHandshake,
  Sliders,
  FileCheck2,
  ChevronRight,
} from "lucide-react";

interface Step {
  id: string;
  no: string;
  stepNumber: number;
  title: string;
  tagline: string;
  subtitle: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  badgeColor: string;
  accentBg: string;
  accentText: string;
  accentBorder: string;
  floatingBadges: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    subtitle?: string;
    position: string;
    colorClass: string;
  }[];
  highlights: string[];
}

const steps: Step[] = [
  {
    id: "discover",
    no: "01",
    stepNumber: 1,
    title: "Discover",
    tagline: "Exploration & Consultation",
    subtitle: "Understand Your Institution's Needs",
    desc: "We begin by understanding your institution's existing processes, challenges, and goals. Through personalized discussions and tailored demonstrations, we map how EDBA accelerates academic excellence and operational efficiency.",
    icon: Search,
    image: "/images/journey/step-1-discover.jpg",
    badgeColor: "bg-blue-600 text-white",
    accentBg: "bg-blue-50",
    accentText: "text-blue-700",
    accentBorder: "border-blue-200/80",
    floatingBadges: [
      {
        icon: FileCheck2,
        title: "Needs Assessment Complete",
        subtitle: "360° Workflow Mapped",
        position: "top-4 left-4 sm:top-6 sm:left-6",
        colorClass: "text-blue-600 bg-blue-50 border-blue-100",
      },
      {
        icon: Sparkles,
        title: "Personalized Roadmap Ready",
        subtitle: "Aligned with Institutional Goals",
        position: "bottom-4 right-4 sm:bottom-6 sm:right-6",
        colorClass: "text-indigo-600 bg-indigo-50 border-indigo-100",
      },
    ],
    highlights: [
      "In-depth workflow & operations assessment",
      "Interactive leadership consultation",
      "Custom product demonstration",
      "Institutional transformation blueprint",
    ],
  },
  {
    id: "customize",
    no: "02",
    stepNumber: 2,
    title: "Customize",
    tagline: "Tailored Configuration",
    subtitle: "Configure EDBA Around Your Requirements",
    desc: "Every educational institution operates uniquely. We configure EDBA to fit your exact grading structures, department hierarchies, fee rules, and administrative workflows without forcing rigid templates.",
    icon: Settings,
    image: "/images/journey/step-2-customize.jpg",
    badgeColor: "bg-cyan-600 text-white",
    accentBg: "bg-cyan-50",
    accentText: "text-cyan-800",
    accentBorder: "border-cyan-200/80",
    floatingBadges: [
      {
        icon: Sliders,
        title: "Custom Workflows Active",
        subtitle: "Curriculum & Timetables Configured",
        position: "top-4 left-4 sm:top-6 sm:left-6",
        colorClass: "text-cyan-600 bg-cyan-50 border-cyan-100",
      },
      {
        icon: ShieldCheck,
        title: "Granular RBAC Security",
        subtitle: "Role-Based Access Verified",
        position: "bottom-4 right-4 sm:bottom-6 sm:right-6",
        colorClass: "text-blue-600 bg-blue-50 border-blue-100",
      },
    ],
    highlights: [
      "Institution-specific module configuration",
      "Automated timetable & academic scheduling",
      "Flexible fee structures & payment gateways",
      "Role-based permission architecture",
    ],
  },
  {
    id: "implement",
    no: "03",
    stepNumber: 3,
    title: "Implement",
    tagline: "Adoption & Rollout",
    subtitle: "Connect Your Teams and Simplify Adoption",
    desc: "Our engineering and onboarding team manages full deployment—from secure data migration and SIS setup to hands-on faculty and staff training—guaranteeing a frictionless transition with zero downtime.",
    icon: Zap,
    image: "/images/journey/step-3-implement.jpg",
    badgeColor: "bg-violet-600 text-white",
    accentBg: "bg-violet-50",
    accentText: "text-violet-800",
    accentBorder: "border-violet-200/80",
    floatingBadges: [
      {
        icon: Cloud,
        title: "Uploaded to Cloud",
        subtitle: "Encrypted & Secure Sync",
        position: "top-4 left-4 sm:top-6 sm:left-6",
        colorClass: "text-blue-600 bg-blue-50 border-blue-100",
      },
      {
        icon: Users,
        title: "Faculty & Staff Onboarded",
        subtitle: "100% Adoption Milestone",
        position: "bottom-4 right-4 sm:bottom-6 sm:right-6",
        colorClass: "text-violet-600 bg-violet-50 border-violet-100",
      },
    ],
    highlights: [
      "Turnkey data preparation & historical migration",
      "Interactive flat panel & classroom sync",
      "Role-specific training for staff & faculty",
      "Dedicated deployment manager on-call",
    ],
  },
  {
    id: "grow",
    no: "04",
    stepNumber: 4,
    title: "Grow",
    tagline: "Continuous Excellence",
    subtitle: "Continuous Support for Lasting Success",
    desc: "Your digital transformation continues long after rollout. EDBA provides 24/7 technical monitoring, regular software enhancements, and ongoing success reviews to ensure your institution remains at the cutting edge.",
    icon: TrendingUp,
    image: "/images/journey/step-4-grow.jpg",
    badgeColor: "bg-emerald-600 text-white",
    accentBg: "bg-emerald-50",
    accentText: "text-emerald-800",
    accentBorder: "border-emerald-200/80",
    floatingBadges: [
      {
        icon: TrendingUp,
        title: "99.98% System Uptime",
        subtitle: "High-Availability Cloud",
        position: "top-4 left-4 sm:top-6 sm:left-6",
        colorClass: "text-emerald-600 bg-emerald-50 border-emerald-100",
      },
      {
        icon: HeartHandshake,
        title: "Dedicated Success Partner",
        subtitle: "Proactive Priority Support",
        position: "bottom-4 right-4 sm:bottom-6 sm:right-6",
        colorClass: "text-teal-600 bg-teal-50 border-teal-100",
      },
    ],
    highlights: [
      "24/7 high-availability infrastructure monitoring",
      "Automatic quarterly feature upgrades",
      "Priority SLA & dedicated account manager",
      "Annual institutional growth analytics reviews",
    ],
  },
];

export default function DigitalTransformationJourney() {
  return (
    <section
      id="journey"
      className="pt-20 sm:pt-28 pb-4 sm:pb-6 bg-gradient-to-b from-white via-slate-50/60 to-white border-b border-slate-200/80 relative"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl lg:max-w-5xl mx-auto mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50/90 border border-blue-200/80 mb-5 shadow-xs backdrop-blur-sm">
            <Zap className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
            <span>Digital Transformation</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-slate-900 tracking-tight mb-4">
            4 Simple Steps Towards{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500">
              Digital Transformation
            </span>
          </h2>

          <p className="text-slate-500 text-sm sm:text-base lg:text-[16px] leading-relaxed max-w-4xl lg:max-w-5xl mx-auto">
            From initial consultation to campus-wide deployment and continuous evolution, EDBA is your dedicated partner in modern education management.
          </p>
        </motion.div>

        {/* TEACHMINT-STYLE STACKING CARDS CONTAINER (Direct siblings in same sticky context) */}
        <div className="relative">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <div
                key={step.id}
                className="sticky w-full bg-white rounded-2xl sm:rounded-3xl lg:rounded-[36px] border border-slate-200/90 shadow-[0_-12px_36px_rgba(15,23,42,0.08),0_24px_48px_rgba(15,23,42,0.12)] overflow-hidden transition-all duration-300"
                style={{
                  // Responsive sticky top position below navbar maintaining exact visual gap from screenshot
                  top: "clamp(108px, 14vh, 128px)",
                  // Higher zIndex ensures later cards slide directly over previous cards
                  zIndex: (index + 1) * 10,
                }}
              >
                {/* Main Card Content (Teachmint Connected Classroom Layout) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 relative">
                  
                  {/* Left Column: Descriptive Narrative & Capabilities */}
                  <div className="lg:col-span-5 p-4 sm:p-6 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100 bg-white">
                    <div>

                      {/* Step Heading */}
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl lg:text-3xl text-slate-900 leading-tight mb-2.5 sm:mb-3.5 tracking-tight">
                        {step.subtitle}
                      </h3>

                      {/* Narrative */}
                      <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-6 font-normal">
                        {step.desc}
                      </p>

                      {/* Key Deliverables / Highlights */}
                      <div className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-6">
                        {step.highlights.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-xl bg-slate-50/90 border border-slate-100 hover:bg-slate-100/70 transition-colors"
                          >
                            <div className="h-4 w-4 sm:h-5 sm:w-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5 text-blue-700">
                              <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                            </div>
                            <span className="text-slate-700 text-xs sm:text-sm font-semibold leading-snug">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-3 sm:pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all cursor-pointer group active:scale-95"
                      >
                        <span>Book a Free Demo</span>
                        <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-0.5 transition-transform" />
                      </button>

                      <span className="text-[11px] sm:text-xs text-slate-400 font-medium">
                        {isLast ? "Final Transformation Stage" : `Next: Step 0${index + 2}`}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: High-Resolution Visual with Floating Frosted Badges */}
                  <div className="lg:col-span-7 bg-slate-900/5 relative p-3 sm:p-5 lg:p-7 flex items-center justify-center">
                    <div className="relative w-full h-[210px] sm:h-[270px] lg:h-[460px] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-100">
                      
                      {/* Minimal Photorealistic Educational Technology Image */}
                      <img
                        src={step.image}
                        alt={step.subtitle}
                        className="w-full h-full object-cover object-center select-none"
                        loading="lazy"
                      />

                      {/* Soft gradient overlay for badge contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/15 pointer-events-none" />

                      {/* Floating Frosted Glass Badges (Teachmint Reference) */}
                      {step.floatingBadges.map((badge) => {
                        const BadgeIcon = badge.icon;
                        return (
                          <div
                            key={badge.title}
                            className={`absolute ${badge.position} z-20`}
                          >
                            <div className="flex items-center gap-3 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-white/92 backdrop-blur-md border border-white/80 shadow-xl shadow-slate-900/10 text-slate-900 hover:scale-[1.02] transition-transform duration-200">
                              <div
                                className={`h-8 w-8 sm:h-9 sm:w-9 rounded-xl flex items-center justify-center flex-shrink-0 border ${badge.colorClass}`}
                              >
                                <BadgeIcon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                              </div>
                              <div className="text-left pr-1">
                                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                                  {badge.title}
                                </p>
                                {badge.subtitle && (
                                  <p className="text-[10px] sm:text-xs font-medium text-slate-500 leading-none mt-1">
                                    {badge.subtitle}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      {/* Live Connected Ecosystem Pill */}
                      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/20 text-white shadow-lg text-[11px] font-semibold">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Connected EDBA Ecosystem</span>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
