import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Settings, Zap, TrendingUp, ArrowRight, Check } from "lucide-react";

const steps = [
  {
    no: "1",
    title: "Discover",
    subtitle: "Understand Your Institution's Needs",
    desc: "We begin by understanding your institution's existing processes, challenges, and goals. Through personalized discussions and a product demonstration, we explore how EDBA can support your academic and administrative requirements.",
    icon: Search,
    color: "from-blue-600 to-indigo-600",
    glow: "shadow-blue-500/30",
    accent: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    highlights: [
      "Understanding your workflows",
      "Product demonstration",
      "Personalized consultation",
      "Goals & requirements mapping",
    ],
  },
  {
    no: "2",
    title: "Customize",
    subtitle: "Configure EDBA Around Your Requirements",
    desc: "Every educational institution works differently. We align EDBA with your institution's workflows, requirements, and operational processes to create a solution that fits your needs.",
    icon: Settings,
    color: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/30",
    accent: "text-cyan-700",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    highlights: [
      "Institution-specific configuration",
      "Workflow alignment",
      "Flexible module setup",
      "Tailored data structures",
    ],
  },
  {
    no: "3",
    title: "Implement",
    subtitle: "Connect Your Teams and Simplify Adoption",
    desc: "Our team supports the implementation process, including system configuration, data preparation, user access, and guidance for administrators and staff to help ensure a smooth transition to EDBA.",
    icon: Zap,
    color: "from-violet-600 to-purple-600",
    glow: "shadow-violet-500/30",
    accent: "text-violet-700",
    bg: "bg-violet-50",
    border: "border-violet-200",
    highlights: [
      "System configuration & setup",
      "Data preparation & migration",
      "User access management",
      "Staff onboarding guidance",
    ],
  },
  {
    no: "4",
    title: "Grow",
    subtitle: "Continuous Support for Lasting Success",
    desc: "As your institution evolves, EDBA supports your ongoing digital journey through technical assistance, system improvements, and guidance to help you make the most of your education management platform.",
    icon: TrendingUp,
    color: "from-emerald-600 to-teal-600",
    glow: "shadow-emerald-500/30",
    accent: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    highlights: [
      "Ongoing technical assistance",
      "System improvements",
      "Feature updates & enhancements",
      "Dedicated support partnership",
    ],
  },
];

export default function DigitalTransformationJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const step = steps[activeStep];
  const StepIcon = step.icon;

  return (
    <section
      id="journey"
      className="py-20 sm:py-28 bg-white border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-5 shadow-xs">
            <Zap className="w-3.5 h-3.5" aria-hidden="true" />
            Digital Transformation
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-slate-900 tracking-tight mb-4">
            4 Simple Steps Towards{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Digital Transformation
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-semibold mb-2">
            Your Institution's Journey with EDBA
          </p>
          <p className="text-slate-500 text-base leading-relaxed font-normal">
            From your first discussion to ongoing growth, EDBA is your partner in digital education management.
          </p>
        </motion.div>

        {/* Step Tabs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border font-semibold text-sm transition-all duration-200 cursor-pointer ${
                  i === activeStep
                    ? `bg-gradient-to-r ${s.color} text-white border-transparent shadow-lg ${s.glow}`
                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                <div className={`h-7 w-7 rounded-xl flex items-center justify-center ${
                  i === activeStep ? "bg-white/15" : "bg-slate-100"
                }`}>
                  <Icon className={`h-4 w-4 ${i === activeStep ? "text-white" : "text-slate-500"}`} />
                </div>
                <span>
                  <span className="text-[10px] font-bold opacity-70 block leading-none mb-0.5">Step {s.no}</span>
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Detail */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          {/* Left: Visual */}
          <div className="lg:col-span-5">
            <div className={`relative rounded-3xl p-8 bg-gradient-to-br ${step.color} text-white shadow-2xl ${step.glow} overflow-hidden`}>
              {/* Background circles */}
              <div className="absolute top-0 right-0 h-48 w-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 h-36 w-36 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                {/* Step number */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-16 w-16 rounded-2xl bg-white/15 flex items-center justify-center border border-white/20">
                    <StepIcon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Step {step.no} of 4</p>
                    <p className="text-white text-xl font-extrabold">{step.title}</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mb-8">
                  <div className="flex gap-2">
                    {steps.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                          i <= activeStep ? "bg-white" : "bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-white/70 text-[10px] mt-2 font-medium">{activeStep + 1} of {steps.length} steps</p>
                </div>

                {/* Subtitle */}
                <p className="text-white/90 text-base font-semibold mb-4">{step.subtitle}</p>

                {/* Highlights */}
                <div className="space-y-2.5">
                  {step.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-white/90 text-sm font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold ${step.bg} ${step.accent} border ${step.border} mb-5`}>
              <span>Step {step.no}</span>
              <span>•</span>
              <span>{step.title}</span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-tight mb-5">
              {step.subtitle}
            </h3>

            <p className="text-slate-600 text-base leading-relaxed mb-8 font-normal">
              {step.desc}
            </p>

            {/* Navigation arrows */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="h-10 w-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:border-slate-300 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>

              <button
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
                className={`h-10 px-5 rounded-xl flex items-center gap-2 text-sm font-bold transition-all cursor-pointer bg-gradient-to-r ${step.color} text-white shadow-md disabled:opacity-30 disabled:cursor-not-allowed`}
              >
                <span>Next Step</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
                className="ml-4 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
              >
                Book a Free Demo →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center p-6 bg-slate-50 border border-slate-200 rounded-2xl max-w-2xl mx-auto"
        >
          <p className="text-slate-600 text-sm leading-relaxed">
            <span className="font-bold text-slate-800">From your first discussion to ongoing growth,</span> EDBA is your partner in digital education management — every step of the way.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
