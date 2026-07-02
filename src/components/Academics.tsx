import React from "react";
import { BookMarked, Award, BookOpen, Check } from "lucide-react";

export default function Academics() {
  const cards = [
    {
      title: "Curriculum Architecture Core",
      desc: "Maintain complete course control. Define academic terms, assign teachers to subjects, and track lesson plan progress.",
      icon: BookMarked,
      features: ["Syllabus & curriculum tracking", "Lesson plan approvals", "Teacher-subject allocation"],
      color: "bg-blue-600 text-white shadow-md shadow-blue-500/10",
    },
    {
      title: "Exam & Grading",
      desc: "Define custom grading systems. Input marks, calculate GPA scorecards, and compile printable digital report cards.",
      icon: Award,
      features: ["Weighted grading averages", "Class Rank auto-calculations", "Sleek PDF report card exports"],
      color: "bg-cyan-500 text-white shadow-md shadow-cyan-500/10",
    },
    {
      title: "Library Management",
      desc: "Digitize your library operations. Manage physical and digital book stocks, track issue & return logs, and configure fine structures.",
      icon: BookOpen,
      features: ["OPAC digital search catalog", "Auto late return reminders", "Fines ledger configuration"],
      color: "bg-teal-500 text-white shadow-md shadow-teal-500/10",
    },
  ];

  return (
    <section className="py-24 bg-[#f1f3f6] border-b border-zinc-200/50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-4 inline-block">
            Academics
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-950 mt-3 mb-6">
            Academic Performance Architecture
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed font-normal">
            Empower educators with an integrated instructional infrastructure. Streamline curriculum architecture, accelerate performance calibration, and orchestrate hybrid learning modalities seamlessly.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="p-8 neu-card rounded-2xl"
            >
              {/* Header Icon */}
              <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 ${c.color}`}>
                <c.icon className="h-6 w-6" />
              </div>

              {/* Title & Description */}
              <h3 className="font-display font-semibold text-lg text-zinc-900 mb-3">
                {c.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                {c.desc}
              </p>

              {/* Bullets */}
              <ul className="space-y-3 pt-6 border-t border-zinc-100">
                {c.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2.5 text-xs text-zinc-700 font-medium">
                    <div className="h-4 w-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                      <Check className="h-3 w-3" />
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
}
