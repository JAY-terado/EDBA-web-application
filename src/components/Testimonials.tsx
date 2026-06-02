import React from "react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Dr. Marianne Cole",
      role: "Principal, Oakridge International Academy",
      quote: "Before EDBA, compiling report cards and balancing timetables took our administration weeks of late hours. Now, EDBA's AI Assistant generates them in minutes, allowing our staff to focus on students.",
      avatar: "MC",
      color: "border-blue-100/50 hover:border-blue-200/80 shadow-blue-500/5",
    },
    {
      name: "Sumeet Sharma",
      role: "Administrator, Crestview Preparatory",
      quote: "The billing system is flawless. Parents pay directly inside the Parent App, which automatically reconciles our ledgers. Our invoice collection rates have risen by 40% since launching.",
      avatar: "SS",
      color: "border-cyan-100/50 hover:border-cyan-200/80 shadow-cyan-500/5",
    },
    {
      name: "Evelyn Sterling",
      role: "Director, Sterling Day Institute",
      quote: "Student safety was our main priority. With RFID gates and GPS integration on our bus routes, parents receive real-time notifications when their child boards the bus. It has built enormous trust.",
      avatar: "ES",
      color: "border-teal-100/50 hover:border-teal-200/80 shadow-teal-500/5",
    },
  ];

  return (
    <section className="py-24 bg-[#f1f3f6] border-b border-zinc-200/50 grid-bg-light">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-4 inline-block">
            Endorsements
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-950 mt-3 mb-6">
            Loved by Educators
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed font-normal">
            See how principals and administrative teams globally are transforming their campuses with EDBA.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl neu-card flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-zinc-100 pointer-events-none" />

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-zinc-600 text-sm leading-relaxed mb-8 italic font-normal">
                  "{rev.quote}"
                </p>
              </div>

              {/* Reviewer Meta info */}
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-100">
                <div className="h-10 w-10 rounded-full bg-zinc-100 flex items-center justify-center font-bold text-xs text-zinc-700 border border-zinc-200">
                  {rev.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 leading-snug">{rev.name}</h4>
                  <p className="text-xs text-zinc-400 font-medium">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
