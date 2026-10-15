import React from "react";

export default function TrustMetrics() {
  const metrics = [
    {
      label: "Students Enrolled",
      value: "1,00,000+",
      color: "text-blue-600",
      description: "Active learners using EDBA daily",
    },
    {
      label: "Institutes Onboarded",
      value: "15+",
      color: "text-teal-600",
      description: "Colleges and school chains",
    },
    {
      label: "Parent Engagement",
      value: "95%",
      color: "text-purple-600",
      description: "Direct real-time app participation",
    },
    {
      label: "Admin Time Saved",
      value: "70%",
      color: "text-indigo-600",
      description: "Automated paperwork and roll-calls",
    },
  ];

  const schools = [
    "Muljibhai Mehta International School",
    "Bharat College Of Engineering",
    "CBSE Schools",
    "Orchid Group",
    "Heritage Schools",
    "Podar World School",
    "VIVA College of Arts,Commerce & Science",
    "VIVA Institute of Management & Research",
    "VIVA Institute of Management Studies",
    "VIVA Institute of Technology",
    "VIVA College of Hotel & Tourism Management Studies",
    "VIVA College of Diploma, Engineering & Technology",
    "VIVA School of Architecture",
    "VIVA Institute of Pharmacy",
    "VIVA Institute of Applied Art",
    "VIVA School of MCA",
    "Utkarsha Vidyalaya & Jr. College",
    "VIVA Jr. College Nallasopara",
    "Utkarsha Vidyalaya English Medium",
    "Utkarsha Vidyalaya Marathi Medium",
    "VIVA College of law",
    "VIVA Institute Of Art & Design"
  ];

  return (
    <section className="py-16 sm:py-20 smart-display-tight bg-white border-y border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-slate-400 font-mono">
            Trusted by India’s forward-thinking educational institutions
          </span>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-14">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/70 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              <span className={`font-display font-extrabold text-3xl sm:text-5xl lg:text-[50px] leading-tight ${m.color} mb-1 tracking-tight`}>
                {m.value}
              </span>
              <span className="font-bold text-xs sm:text-base text-slate-800">{m.label}</span>
              <span className="text-xs text-slate-500 mt-1 hidden sm:block">{m.description}</span>
            </div>
          ))}
        </div>

        {/* Scrolling institute marquee with smooth fade edges */}
        <div className="relative w-full overflow-hidden py-3 select-none">
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Running track */}
          <div className="flex w-max animate-infinite-scroll gap-3 sm:gap-3.5 py-1">
            {[...schools, ...schools].map((school, idx) => (
              <span
                key={idx}
                className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold text-slate-600 bg-white border border-slate-200/90 shadow-sm whitespace-nowrap hover:border-blue-400 hover:text-blue-600 hover:scale-105 transition-all duration-200"
              >
                {school}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
