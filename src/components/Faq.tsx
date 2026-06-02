"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "How secure is EDBA with student data?",
      a: "Data security is our primary focus. EDBA is fully compliant with COPPA, FERPA, and GDPR guidelines. All databases are isolated with AES-256 encryption at rest, and communications are processed over SSL/TLS channels.",
    },
    {
      q: "Can we customize the grading scale and report card templates?",
      a: "Yes! EDBA features a custom grading configuration module. You can customize letter systems, GPAs scales, marks weightages, and choose from multiple PDF layouts to output report cards with custom institute logos.",
    },
    {
      q: "How does the AI Assistant keep data private?",
      a: "The EDBA AI Assistant operates inside a closed LLM sandbox. None of your institute records, student profiles, or billing details are ever exported, shared, or used to train public LLM models.",
    },
    {
      q: "Does EDBA support multi-campus institute configurations?",
      a: "Yes. Administrators can manage multiple campuses from a single super-admin panel, sharing resources and teacher directories while keeping student records and billing ledger records separate.",
    },
    {
      q: "Is there support for migrating our historical data?",
      a: "Absolutely. Our specialized engineering onboarding team helps import historical student databases, billing records, and exam logs from Excel, CSV, or legacy SQL databases directly during setup.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#f1f3f6] border-b border-zinc-200/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-4 inline-block">
            Support
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-950 mt-3 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed font-normal">
            Everything you need to know about setting up and configuring EDBA on your campus.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="neu-card rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex gap-3 items-center">
                    <HelpCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm font-semibold text-zinc-900 leading-snug">
                      {item.q}
                    </span>
                  </div>
                  <div className="text-zinc-400">
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {/* Collapsible Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 opacity-100 border-t border-zinc-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="px-6 py-5 text-xs sm:text-sm text-zinc-500 leading-relaxed font-normal">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
