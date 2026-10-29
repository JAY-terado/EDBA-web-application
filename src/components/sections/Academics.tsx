import React from "react";
import { BookMarked, Award, BookOpen, Check } from "lucide-react";

interface AcademicCard {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  features: string[];
  color: string;
}

const CARDS: AcademicCard[] = [
  {
    title: "Curriculum Architecture Core",
    desc: "Maintain complete course control. Define academic terms, assign teachers to subjects, and track lesson plan progress.",
    icon: BookMarked,
    features: ["Syllabus & curriculum tracking", "Lesson plan approvals", "Teacher-subject allocation"],
    color: "bg-blue-600 text-white shadow-md shadow-blue-500/20",
  },
  {
    title: "Exam & Grading",
    desc: "Define custom grading systems. Input marks, calculate GPA scorecards, and compile printable digital report cards.",
    icon: Award,
    features: ["Weighted grading averages", "Class Rank auto-calculations", "Sleek PDF report card exports"],
    color: "bg-cyan-500 text-white shadow-md shadow-cyan-500/20",
  },
  {
    title: "Library Management",
    desc: "Digitize your library operations. Manage physical and digital book stocks, track issue & return logs, and configure fine structures.",
    icon: BookOpen,
    features: ["OPAC digital search catalog", "Auto late return reminders", "Fines ledger configuration"],
    color: "bg-teal-500 text-white shadow-md shadow-teal-500/20",
  },
];

export const Academics: React.FC = () => {
  return (
    <section id="academics" className="py-20 sm:py-28 smart-display-tight:py-12 bg-white border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 smart-display-tight:mb-8">
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-3 shadow-2xs">
            <BookMarked className="w-3 h-3 text-blue-600" aria-hidden="true" />
            Academics
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-[42px] leading-tight text-slate-900 mt-2 mb-3 sm:mb-4 tracking-tight">
            Academic <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Performance Architecture</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Empower educators with an integrated instructional infrastructure. Streamline curriculum architecture, accelerate performance calibration, and orchestrate hybrid learning modalities seamlessly.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map((c, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-white border border-slate-200/80 hover:border-blue-300 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon */}
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 ${c.color}`}>
                  <c.icon className="h-6 w-6" aria-hidden="true" />
                </div>

                {/* Title & Description */}
                <h3 className="font-display font-semibold text-lg text-slate-900 mb-3">
                  {c.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {c.desc}
                </p>
              </div>

              {/* Bullets */}
              <ul className="space-y-3 pt-6 border-t border-slate-100">
                {c.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                    <div className="h-4 w-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-200">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Academics;
