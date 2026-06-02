import React from "react";

export default function TrustMetrics() {
  const metrics = [
    {
      label: "Students Enrolled",
      value: "50,000+",
      color: "text-blue-600",
    },
    {
      label: "Schools Onboarded",
      value: "500+",
      color: "text-teal-600",
    },
    {
      label: "Parent Engagement",
      value: "95%",
      color: "text-purple-650",
    },
    {
      label: "Admin Time Saved",
      value: "70%",
      color: "text-blue-600",
    },
  ];

  const schools = [
    "DPS Group",
    "Ryan International",
    "CBSE Schools",
    "Orchid Group",
    "Heritage Schools",
    "Podar World School",
  ];

  return (
    <section className="py-16 bg-[#f1f3f6] border-y border-zinc-200/50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-400 font-mono">
            Trusted by Progressive Schools Across India
          </h3>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center animate-fade-in"
            >
              <span className={`font-display font-extrabold text-4xl sm:text-5xl lg:text-[54px] ${m.color} mb-2`}>
                {m.value}
              </span>
              <span className="font-semibold text-xs sm:text-sm text-zinc-700">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Muted Schools/Institutes list pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
          {schools.map((school, idx) => (
            <span
              key={idx}
              className="px-5 py-2.5 rounded-full text-xs font-bold text-zinc-500 neu-pill whitespace-nowrap hover:scale-102 transition-transform duration-200"
            >
              {school}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
