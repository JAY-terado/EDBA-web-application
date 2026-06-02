import React from "react";

export default function TrustMetrics() {
  const metrics = [
    {
      label: "Students Enrolled",
      value: "1,00,000+",
      color: "text-blue-600",
    },
    {
      label: "Institutes Onboarded",
      value: "15+",
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

        {/* Muted Schools/Institutes list pills in auto-scrolling infinite loop */}
        <div className="relative w-full overflow-hidden mt-12 py-4 select-none">
          {/* Subtle fade overlays at the edges for a premium visual blend */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#f1f3f6] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#f1f3f6] to-transparent z-10 pointer-events-none" />

          {/* Running track */}
          <div className="flex w-max animate-infinite-scroll gap-4 py-2">
            {/* Duplicate the array to create a seamless infinite loop */}
            {[...schools, ...schools].map((school, idx) => (
              <span
                key={idx}
                className="px-5 py-2.5 rounded-full text-xs font-bold text-zinc-500 neu-pill whitespace-nowrap hover:scale-105 transition-transform duration-200"
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
