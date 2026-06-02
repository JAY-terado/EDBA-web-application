import React from "react";
import { CalendarRange, CheckSquare, BarChart3, HelpCircle } from "lucide-react";

export default function Assessment() {
  const assessmentFeatures = [
    {
      title: "Exams Scheduling",
      desc: "Manage semesters, select course cohorts, and run our AI scheduler to prevent exam session overlaps automatically.",
      icon: CalendarRange,
      color: "bg-blue-600 text-white shadow-md shadow-blue-500/10",
    },
    {
      title: "Self-Assessment Practice",
      desc: "Empower students to improve. Generate adaptive practice tests, access mock exams, and review conceptual explanations at their own pace.",
      icon: CheckSquare,
      color: "bg-indigo-500 text-white shadow-md shadow-indigo-500/10",
    },
    {
      title: "Result Analysis",
      desc: "Generate performance breakdowns. Instantly flag subject weaknesses and view class averages with visual graphs.",
      icon: BarChart3,
      color: "bg-cyan-500 text-white shadow-md shadow-cyan-500/10",
    },
  ];

  return (
    <section className="py-24 bg-[#f1f3f6] border-b border-zinc-200/50 grid-bg-light">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-4 inline-block">
            Assessments
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-950 mt-3 mb-6">
            Modern Assessment Management
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed font-normal">
            Schedule exams, supervise digital test environments, and analyze results seamlessly.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {assessmentFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="neu-card p-6 rounded-2xl flex flex-col"
            >
              {/* Card Icon */}
              <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 flex-shrink-0 ${feat.color}`}>
                <feat.icon className="h-6 w-6" />
              </div>

              {/* Title & Desc */}
              <h3 className="font-display font-semibold text-lg text-zinc-900 mb-3">
                {feat.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">
                {feat.desc}
              </p>
              
              <div className="pt-4 border-t border-zinc-100 flex items-center text-xs font-bold text-zinc-400 gap-1.5 cursor-pointer hover:text-blue-600 transition-colors">
                <HelpCircle className="h-3.5 w-3.5" />
                <span>How EDBA powers this module</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
