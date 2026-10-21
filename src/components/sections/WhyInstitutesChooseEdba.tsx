/// <reference types="vite/client" />
import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Building2, ArrowRight, Image as ImageIcon } from "lucide-react";

// Dynamically resolve point images from /src/assets/why/ (e.g. point1.png, point2.png, etc.)
const whyImages = import.meta.glob<{ default: string }>(
  "/src/assets/why/point*.{png,webp,jpg}",
  { eager: true }
);

const getPointImage = (pointNum: number): string | undefined => {
  for (const path in whyImages) {
    if (path.includes(`/point${pointNum}.`)) {
      return whyImages[path]?.default;
    }
  }
  return undefined;
};

const benefits = [
  {
    no: "01",
    headline: "Less paperwork, more time for teaching",
    body: "Import students, staff and timetables from a file. Mark attendance, enter marks and generate results without paper registers.",
    modules: ["Student Management", "Staff Management", "Academics", "Examinations"],
    card: "Less paperwork, more teaching time",
    alt: "Clipboard checklist with a clock",
  },
  {
    no: "02",
    headline: "Your whole institute in one place",
    body: "Admissions, classes, exams, fees and the library work together, so nothing is entered twice.",
    modules: ["Overview", "Admissions", "Academics", "Library Operations"],
    card: "Everything in one place",
    alt: "School connected to books, cap, laptop, rupee",
  },
  {
    no: "03",
    headline: "Stay connected with parents and students",
    body: "Send notices and circulars, run live classes with chat, and let parents follow everything on the mobile app.",
    modules: ["Communications", "Live classroom and chat", "Mobile apps", "Student Management"],
    card: "Parents always in the loop",
    alt: "Parent, student and phone",
  },
  {
    no: "04",
    headline: "Fees that are easy to collect and track",
    body: "Set the fee structure for each class, record payments and see what is pending at any time.",
    modules: ["Finance & Fees", "Admissions"],
    card: "Fees collected on time",
    alt: "Hands holding smartphone displaying fee payments, coins, and cards",
  },
  {
    no: "05",
    headline: "A better day for teachers and staff",
    body: "Ready timetables, lecture planning, homework and approvals in one place, so teachers spend time on students.",
    modules: ["Academics", "LMS", "Staff Management", "Examinations"],
    card: "Happier teachers and staff",
    alt: "Teacher holding tablet with lesson planner, calendar, and checklist",
  },
  {
    no: "06",
    headline: "Build trust in your school community",
    body: "Share events, photos and class updates, and give parents a clear view of their child's progress.",
    modules: [
      "Communications (events, photo gallery)",
      "Live classroom and chat",
      "Shorts videos",
      "Mobile apps",
    ],
    card: "A school parents trust",
    alt: "School building held in supporting hand with students, parents, teachers, and trust shield",
  },
];

export default function WhyInstitutesChooseEdba() {
  const shouldReduceMotion = useReducedMotion();
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const renderCard = (b: (typeof benefits)[0], i: number) => {
    const pointNumber = i + 1;
    const imgSrc = getPointImage(pointNumber);
    const hasValidImage = Boolean(imgSrc && !imageErrors[pointNumber]);

    return (
      <motion.article
        key={b.headline}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }
        }
        className="group rounded-[20px] border border-[#1F293D] bg-[#111A2E] p-4 sm:p-5 flex gap-3.5 sm:gap-4 items-start shadow-xl shadow-black/20 hover:border-blue-500/40 hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] h-full"
      >
        {/* LEFT: Round illustration */}
        <div className="shrink-0 pt-0.5">
          {hasValidImage ? (
            <img
              src={imgSrc}
              alt={b.alt}
              width={84}
              height={84}
              loading="lazy"
              onError={() =>
                setImageErrors((prev) => ({ ...prev, [pointNumber]: true }))
              }
              className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] shrink-0 rounded-full bg-white object-cover border-2 border-white/20 shadow-md group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div
              className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] shrink-0 rounded-full border-2 border-dashed border-slate-700 bg-slate-800 flex items-center justify-center text-slate-500"
              aria-hidden="true"
            >
              <ImageIcon className="w-7 h-7" />
            </div>
          )}
        </div>

        {/* RIGHT: Content Column */}
        <div className="flex flex-col min-w-0 flex-1 h-full">
          {/* 1. Title h3 (aligned directly at the top with illustration) */}
          <h3 className="text-white text-base sm:text-[17px] font-extrabold tracking-tight leading-snug group-hover:text-blue-300 transition-colors duration-200 mb-1.5">
            {b.headline}
          </h3>

          {/* 2. Description */}
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 flex-1">
            {b.body}
          </p>

          {/* 3. Module chips */}
          <div className="mb-3">
            <span id={`modules-label-${i}`} className="sr-only">
              Modules connected:
            </span>
            <ul
              aria-labelledby={`modules-label-${i}`}
              className="flex flex-wrap gap-1.5 list-none p-0 m-0"
            >
              {b.modules.map((mod) => (
                <li
                  key={mod}
                  className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-[#1C2640] border border-slate-700/80 text-slate-300"
                >
                  {mod}
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Link */}
          <div className="pt-1 mt-auto">
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-demo-modal"))
              }
              className="group/link text-xs sm:text-sm font-bold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 min-h-[32px] cursor-pointer focus:outline-hidden focus-visible:outline-2 focus-visible:outline-blue-400 focus-visible:outline-offset-2 rounded-md transition-colors"
            >
              <span>{b.card}</span>
              <ArrowRight
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform duration-200 group-hover/link:translate-x-[3px] group-hover:translate-x-[3px]"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </motion.article>
    );
  };

  return (
    <section
      id="why-edba"
      aria-labelledby="why-edba-heading"
      className="py-16 sm:py-20 bg-[#0B1220] border-y border-slate-800/80 relative overflow-hidden"
    >
      {/* Top radial blue glow background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1360px] h-[380px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(45, 118, 196, 0.22) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Header (centered, mb-10) */}
        <div className="text-center max-w-[760px] mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/30 mb-3 shadow-xs">
            <Building2 className="w-3.5 h-3.5" aria-hidden="true" />
            Why Institutes Choose EDBA
          </span>
          <h2
            id="why-edba-heading"
            className="text-3xl lg:text-[44px] font-extrabold tracking-tight leading-[1.12] text-white"
          >
            One platform that{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              cuts paperwork
            </span>
            , keeps parents informed and keeps fees on track.
          </h2>
          <p className="text-[16px] text-slate-300 max-w-[600px] mx-auto mt-3 leading-relaxed">
            Six powerful reasons leading educational institutions choose EDBA as their trusted management platform.
          </p>
        </div>

        {/* 3 Cards in 1st Row aligned & next 3 Cards in 2nd Row below */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {benefits.map((b, i) => renderCard(b, i))}
        </div>
      </div>
    </section>
  );
}

