"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function AiAssistant() {
  const [currentStep, setCurrentStep] = useState(0);
  const [typedQuestion, setTypedQuestion] = useState("");
  const [typedReply, setTypedReply] = useState("");
  const [typedTextContent, setTypedTextContent] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const sampleQueries = [
    {
      q: "Draft parent email regarding exam scheduling.",
      reply: "Here is your drafted email template:",
      type: "text",
      content: "Subject: Upcoming Mid-Term Examination Schedule\n\nDear Parents,\n\nPlease find attached the mid-term examination timetable starting June 15th. Exams will run daily from 9:00 AM to 12:00 PM. Please ensure your child arrives at institute 15 minutes before the start time.\n\nWarm regards,\nGrade Coordinator",
    },
    {
      q: "Compare Grade 10 math scores across sections.",
      reply: "Here is the comparison between Sections A, B and C:",
      type: "chart",
      content: [
        { label: "Grade 10A (Math)", val: 84, color: "bg-blue-500" },
        { label: "Grade 10B (Math)", val: 76, color: "bg-cyan-500" },
        { label: "Grade 10C (Math)", val: 89, color: "bg-teal-500" },
      ],
    },
    {
      q: "Summarize pending library fees & late returns.",
      reply: "Pending library late fees for this term totals $1,240. Here is the list of top overdue books:",
      type: "list",
      content: [
        { title: "Introduction to Calculus", student: "Sarah Jenkins", overdue: "12 Days" },
        { title: "Organic Chemistry Vol II", student: "Michael Vance", overdue: "8 Days" },
        { title: "A Brief History of Time", student: "Liam O'Connor", overdue: "5 Days" },
      ],
    },
  ];

  // Typing & simulation cycle
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const activeQueryIdx = Math.floor(currentStep / 5);
    const stepWithinQuery = currentStep % 5;
    
    if (activeQueryIdx >= sampleQueries.length) {
      setCurrentStep(0);
      return;
    }

    const queryData = sampleQueries[activeQueryIdx];
    const fullQuestion = queryData.q;
    const fullReply = queryData.reply;
    const isTextType = queryData.type === "text";
    const fullTextContent = isTextType ? (queryData.content as string) : "";

    if (stepWithinQuery === 0) {
      // Typing Question
      let qCharIdx = typedQuestion.length;
      if (qCharIdx < fullQuestion.length) {
        timer = setTimeout(() => {
          setTypedQuestion(fullQuestion.substring(0, qCharIdx + 1));
        }, 20); // 20ms per char
      } else {
        // Pause briefly before starting to think
        timer = setTimeout(() => {
          setCurrentStep(currentStep + 1);
        }, 300);
      }
    } else if (stepWithinQuery === 1) {
      // Thinking
      timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 1200); // 1.2s thinking indicator
    } else if (stepWithinQuery === 2) {
      // Typing Reply
      let rCharIdx = typedReply.length;
      if (rCharIdx < fullReply.length) {
        timer = setTimeout(() => {
          setTypedReply(fullReply.substring(0, rCharIdx + 1));
        }, 15);
      } else {
        timer = setTimeout(() => {
          setCurrentStep(currentStep + 1);
        }, 300);
      }
    } else if (stepWithinQuery === 3) {
      // Typing / rendering Content
      if (isTextType) {
        let tCharIdx = typedTextContent.length;
        if (tCharIdx < fullTextContent.length) {
          timer = setTimeout(() => {
            // Type 2 characters at a time for speed, keeping it smooth
            setTypedTextContent(fullTextContent.substring(0, tCharIdx + 2));
          }, 8);
        } else {
          timer = setTimeout(() => {
            setCurrentStep(currentStep + 1);
          }, 500);
        }
      } else {
        // Chart / List render. Just wait 800ms to let animations complete
        timer = setTimeout(() => {
          setCurrentStep(currentStep + 1);
        }, 800);
      }
    } else if (stepWithinQuery === 4) {
      // Idle delay before next question
      if (!isHovered) {
        const waitTime = activeQueryIdx === sampleQueries.length - 1 ? 3500 : 1500; // 3.5s at the very end, 1.5s between questions
        timer = setTimeout(() => {
          if (activeQueryIdx === sampleQueries.length - 1) {
            // Reset everything and start over
            setTypedQuestion("");
            setTypedReply("");
            setTypedTextContent("");
            setCurrentStep(0);
          } else {
            // Reset typewriter states for next query
            setTypedQuestion("");
            setTypedReply("");
            setTypedTextContent("");
            setCurrentStep(currentStep + 1);
          }
        }, waitTime);
      }
    }

    return () => clearTimeout(timer);
  }, [currentStep, typedQuestion, typedReply, typedTextContent, isHovered]);

  // Chat container scrolling ref
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [typedQuestion, typedReply, typedTextContent, currentStep]);

  return (
    <section id="ai-assistant" className="py-24 bg-zinc-950 text-white relative overflow-hidden border-b border-zinc-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Chat Window Simulation */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="neu-card-dark rounded-2xl p-4 sm:p-6 relative"
            >
              <div className="absolute top-3 left-4 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-800 inline-block"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-800 inline-block"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-800 inline-block"></span>
              </div>
              
              <div className="text-center text-xs font-mono text-zinc-500 mb-6 border-b border-zinc-800/80 pb-3">
                EDBA Assistant Terminal
              </div>

              {/* Chat Thread */}
              <div 
                ref={chatContainerRef}
                className="h-[400px] overflow-y-auto pr-2 flex flex-col gap-6 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent"
              >
                {sampleQueries.map((query, i) => {
                  const currentQueryIdx = Math.floor(currentStep / 5);
                  const stepWithinQuery = currentStep % 5;

                  // If this query hasn't started yet, don't render it
                  if (i > currentQueryIdx) return null;

                  const isCompleted = i < currentQueryIdx;

                  if (isCompleted) {
                    return (
                      <div key={i} className="space-y-4">
                        {/* User Bubble */}
                        <div className="flex justify-end">
                          <div className="bg-zinc-800 border border-zinc-700 rounded-2xl px-4 py-3 text-xs max-w-[85%] font-medium text-zinc-200">
                            {query.q}
                          </div>
                        </div>

                        {/* AI Assistant Bubble */}
                        <div className="flex gap-3 items-start">
                          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white text-xs font-bold font-display shadow-md flex-shrink-0">
                            AI
                          </div>
                          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 text-xs max-w-[85%] text-zinc-300 space-y-4 w-full">
                            <p className="text-zinc-400 font-medium font-sans">
                              {query.reply}
                            </p>

                            {/* Output Renderers */}
                            <div>
                              {query.type === "text" && (
                                <pre className="font-mono text-[11px] bg-zinc-950 p-3 rounded-lg border border-zinc-800 overflow-x-auto text-zinc-300 leading-relaxed whitespace-pre-wrap">
                                  {query.content as string}
                                </pre>
                              )}

                              {query.type === "chart" && (
                                <div className="space-y-3 bg-zinc-950 p-4 rounded-lg border border-zinc-800">
                                  {(query.content as any[]).map((item, idx) => (
                                    <div key={idx}>
                                      <div className="flex justify-between text-[10px] text-zinc-400 font-semibold mb-1">
                                        <span>{item.label}</span>
                                        <span>{item.val}% GPA Average</span>
                                      </div>
                                      <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden">
                                        <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.val}%` }}></div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {query.type === "list" && (
                                <div className="bg-zinc-950 rounded-lg border border-zinc-800 overflow-hidden text-[11px]">
                                  <div className="grid grid-cols-3 gap-2 p-2 bg-zinc-900 border-b border-zinc-800 font-semibold text-zinc-400">
                                    <span>Book Title</span>
                                    <span>Student</span>
                                    <span className="text-right">Overdue</span>
                                  </div>
                                  <div className="divide-y divide-zinc-800/60">
                                    {(query.content as any[]).map((item, idx) => (
                                      <div key={idx} className="grid grid-cols-3 gap-2 p-2 text-zinc-300">
                                        <span className="font-medium truncate">{item.title}</span>
                                        <span className="text-zinc-400">{item.student}</span>
                                        <span className="text-right text-red-400 font-semibold">{item.overdue}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // Active query animation
                  return (
                    <div key={i} className="space-y-4">
                      {/* User Bubble */}
                      {typedQuestion && (
                        <div className="flex justify-end">
                          <div className="bg-zinc-800 border border-zinc-700 rounded-2xl px-4 py-3 text-xs max-w-[85%] font-medium text-zinc-200 relative">
                            {typedQuestion}
                            {stepWithinQuery === 0 && (
                              <span className="inline-block w-1 h-3 bg-blue-400 ml-1 animate-pulse align-middle"></span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* AI Assistant Bubble */}
                      {stepWithinQuery !== 0 && (
                        <div className="flex gap-3 items-start">
                          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white text-xs font-bold font-display shadow-md flex-shrink-0">
                            AI
                          </div>
                          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-3 text-xs max-w-[85%] text-zinc-300 space-y-4 w-full">
                            {stepWithinQuery === 1 ? (
                              <div className="flex items-center gap-2 py-1 text-zinc-500 font-mono text-[10px]">
                                <span className="flex gap-1">
                                  <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                                  <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                                  <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                                </span>
                                <span>EDBA AI is compiling...</span>
                              </div>
                            ) : (
                              <>
                                <p className="text-zinc-400 font-medium font-sans">
                                  {typedReply}
                                  {stepWithinQuery === 2 && (
                                    <span className="inline-block w-1.5 h-3 bg-cyan-400 ml-1 animate-pulse align-middle"></span>
                                  )}
                                </p>

                                {/* Output Renderers */}
                                {stepWithinQuery >= 3 && (
                                  <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    {query.type === "text" && (
                                      <pre className="font-mono text-[11px] bg-zinc-950 p-3 rounded-lg border border-zinc-800 overflow-x-auto text-zinc-300 leading-relaxed whitespace-pre-wrap relative">
                                        {typedTextContent}
                                        {typedTextContent.length < (query.content as string).length && (
                                          <span className="inline-block w-1 h-3 bg-cyan-400 ml-0.5 animate-pulse align-middle"></span>
                                        )}
                                      </pre>
                                    )}

                                    {query.type === "chart" && (
                                      <div className="space-y-3 bg-zinc-950 p-4 rounded-lg border border-zinc-800">
                                        {(query.content as any[]).map((item, idx) => (
                                          <div key={idx}>
                                            <div className="flex justify-between text-[10px] text-zinc-400 font-semibold mb-1">
                                              <span>{item.label}</span>
                                              <span>{item.val}% GPA Average</span>
                                            </div>
                                            <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden">
                                              <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${item.val}%` }}
                                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                                className={`h-full rounded-full ${item.color}`}
                                              ></motion.div>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    )}

                                    {query.type === "list" && (
                                      <div className="bg-zinc-950 rounded-lg border border-zinc-800 overflow-hidden text-[11px]">
                                        <div className="grid grid-cols-3 gap-2 p-2 bg-zinc-900 border-b border-zinc-800 font-semibold text-zinc-400">
                                          <span>Book Title</span>
                                          <span>Student</span>
                                          <span className="text-right">Overdue</span>
                                        </div>
                                        <div className="divide-y divide-zinc-800/60">
                                          {(query.content as any[]).map((item, idx) => (
                                            <motion.div 
                                              key={idx} 
                                              initial={{ opacity: 0, x: -5 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                                              className="grid grid-cols-3 gap-2 p-2 text-zinc-300"
                                            >
                                              <span className="font-medium truncate">{item.title}</span>
                                              <span className="text-zinc-400">{item.student}</span>
                                              <span className="text-right text-red-400 font-semibold">{item.overdue}</span>
                                            </motion.div>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </motion.div>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Text Description */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start text-left">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-950/40 border border-cyan-900/50 mb-6"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Next-Gen Copilot
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-6"
            >
              Meet EDBA AI Assistant: The Ultimate Institute Admin Copilot
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-zinc-400 text-lg leading-relaxed mb-8"
            >
              Empower your staff to gather metrics, write emails, and review student risks instantly through secure natural language querying.
            </motion.p>

            <motion.ul 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300 text-sm">
                  <strong>Instant Reports:</strong> Query grading averages or attendance metrics in natural language.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300 text-sm">
                  <strong>AI grading suggestions:</strong> Speed up writing comments and identifying student weaknesses.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300 text-sm">
                  <strong>Parent Writer:</strong> Instantly draft letters regarding fee notifications, warnings, and schedules.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-300 text-sm">
                  <strong>Academic risk prediction:</strong> Spot early signs of GPA drops or absenteeism.
                </span>
              </li>
            </motion.ul>
          </div>

        </div>
      </div>
    </section>
  );
}
