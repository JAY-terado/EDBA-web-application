import React from "react";
import { Star, Quote } from "lucide-react";

import { siteStats } from "@/data/siteStats";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const REVIEWS: Testimonial[] = [
  {
    name: "Dr. Marianne Cole",
    role: "Principal, Oakridge International Academy",
    quote: "Before EDBA, compiling report cards and balancing timetables took our administration weeks of late hours. Now, EDBA's AI Assistant generates them in minutes, allowing our staff to focus on students.",
    avatar: "MC",
  },
  {
    name: "Sumeet Sharma",
    role: "Administrator, Crestview Preparatory",
    quote: "The billing system is flawless. Parents pay directly inside the Parent App, which automatically reconciles our ledgers. Our invoice collection rates have risen by 40% since launching.",
    avatar: "SS",
  },
  {
    name: "Evelyn Sterling",
    role: "Director, Sterling Day Institute",
    quote: "Student safety was our main priority. With RFID gates and GPS integration on our bus routes, parents receive real-time notifications when their child boards the bus. It has built enormous trust.",
    avatar: "ES",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28 smart-display-tight:py-12 bg-white border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 smart-display-tight:mb-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-4 shadow-xs">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
            Endorsements • Rated {siteStats.rating.display}
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-slate-900 mt-2 mb-4 tracking-tight">
            Loved by Educators Across <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">{siteStats.institutes.display} Institutes</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            See how principals and administrative teams globally are transforming their campuses with EDBA.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-slate-200 pointer-events-none" aria-hidden="true" />

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-sm leading-relaxed mb-8 italic font-normal">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Reviewer Meta info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 border border-blue-200/70 flex items-center justify-center font-bold text-xs">
                  {rev.avatar}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 leading-snug">{rev.name}</h3>
                  <p className="text-xs text-slate-500 font-medium">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
