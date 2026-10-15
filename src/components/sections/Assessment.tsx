import React from "react";
import { CalendarRange, CheckSquare, BarChart3, HelpCircle } from "lucide-react";

interface AssessmentItem {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  color: string;
}

const ASSESSMENT_FEATURES: AssessmentItem[] = [
  {
    title: "Exams Scheduling",
    desc: "Manage semesters, select course cohorts, and run our AI scheduler to prevent exam session overlaps automatically.",
    icon: CalendarRange,
    color: "bg-blue-600 text-white shadow-md shadow-blue-500/20",
  },
  {
    title: "Self-Assessment Practice",
    desc: "Empower students to improve. Generate adaptive practice tests, access mock exams, and review conceptual explanations at their own pace.",
    icon: CheckSquare,
    color: "bg-indigo-600 text-white shadow-md shadow-indigo-500/20",
  },
  {
    title: "Result Analysis",
    desc: "Generate performance breakdowns. Instantly flag subject weaknesses and view class averages with visual graphs.",
    icon: BarChart3,
    color: "bg-cyan-500 text-white shadow-md shadow-cyan-500/20",
  },
];

export const Assessment: React.FC = () => {
  return (
    <section id="assessment" className="py-16 sm:py-20 lg:py-24 smart-display-tight:py-12 bg-white border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 smart-display-tight:mb-8">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-700 bg-blue-50/90 px-3.5 py-1.5 rounded-full border border-blue-200/70 mb-4 inline-block shadow-xs">
            Assessments
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-slate-900 mt-2 mb-4 tracking-tight">
            Modern Assessment Management
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Schedule exams, supervise digital test environments, and analyze results seamlessly.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ASSESSMENT_FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 bg-white border border-slate-200/80 hover:border-blue-300 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Card Icon */}
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 flex-shrink-0 ${feat.color}`}>
                  <feat.icon className="h-6 w-6" aria-hidden="true" />
                </div>

                {/* Title & Desc */}
                <h3 className="font-display font-semibold text-lg text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {feat.desc}
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-500 gap-1.5 group-hover:text-blue-600 transition-colors">
                <HelpCircle className="h-3.5 w-3.5 text-blue-500" aria-hidden="true" />
                <span>How EDBA powers this module</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Assessment;
