import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

interface ChartItem {
  label: string;
  val: number;
  color: string;
}

interface ListItem {
  title: string;
  student: string;
  overdue: string;
}

const sampleQueries = [
  {
    q: "Draft parent email regarding exam scheduling.",
    reply: "Here is your drafted email template:",
    type: "text",
    content: "Subject: Upcoming Mid-Term Examination Schedule\n\nDear Parents,\n\nPlease find attached the mid-term examination timetable starting June 15th. Exams will run daily from 9:00 AM to 12:00 PM. Please ensure your child arrives at school 15 minutes before the start time.\n\nWarm regards,\nGrade Coordinator",
  },
  {
    q: "Create a lesson outline for introducing Photosynthesis.",
    reply: "Here is a 45-minute lesson plan outline:",
    type: "text",
    content: "Topic: Light-Dependent Reactions\n\n1. Hook (5 min): Show a wilted vs. healthy plant. Ask what they consume.\n2. Concept (15 min): Explain chloroplasts, chlorophyll, and light absorption.\n3. Activity (15 min): Hands-on microscopic leaf cell observation.\n4. Wrap-up (10 min): Exit slip asking students to define the role of water.",
  },
  {
    q: "Generate a biology MCQ quiz on cell structures.",
    reply: "Here is your generated classroom MCQ quiz:",
    type: "text",
    content: "Quiz: Cell Biology (Grade 9)\n\nQ1: Which organelle is primarily responsible for generating cellular energy (ATP)?\nA) Ribosome\nB) Golgi apparatus\nC) Mitochondria [Correct]\nD) Vacuole\n\nQ2: What is the main structural component of the plant cell wall?\nA) Cellulose [Correct]\nB) Chitin\nC) Peptidoglycan\nD) Keratin",
  },
];

export default function AiAssistant() {
  const [currentStep, setCurrentStep] = useState(0);
  const [typedQuestion, setTypedQuestion] = useState("");
  const [typedReply, setTypedReply] = useState("");
  const [typedTextContent, setTypedTextContent] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  // Typing & simulation cycle
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const activeQueryIdx = Math.floor(currentStep / 5);
    const stepWithinQuery = currentStep % 5;
    
    if (activeQueryIdx >= sampleQueries.length) {
      timer = setTimeout(() => {
        setCurrentStep(0);
      }, 0);
      return () => clearTimeout(timer);
    }

    const queryData = sampleQueries[activeQueryIdx];
    const fullQuestion = queryData.q;
    const fullReply = queryData.reply;
    const isTextType = queryData.type === "text";
    const fullTextContent = isTextType ? (queryData.content as string) : "";

    if (stepWithinQuery === 0) {
      // Typing Question
      const qCharIdx = typedQuestion.length;
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
      const rCharIdx = typedReply.length;
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
        const tCharIdx = typedTextContent.length;
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
      // Reading state: Display completely for 2.5s, unless user hovers
      if (!isHovered) {
        timer = setTimeout(() => {
          setTypedQuestion("");
          setTypedReply("");
          setTypedTextContent("");
          setCurrentStep(currentStep + 1);
        }, 2500);
      }
    }

    return () => clearTimeout(timer);
  }, [currentStep, typedQuestion, typedReply, typedTextContent, isHovered]);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [typedQuestion, typedReply, typedTextContent, currentStep]);

  return (
    <section id="ai-assistant" className="py-20 sm:py-28 smart-display-tight:py-12 bg-slate-950 text-white relative overflow-hidden border-b border-slate-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-center">
          
          {/* Left Chat Window Simulation */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 relative shadow-2xl"
            >
              <div className="absolute top-3 left-4 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-800 inline-block"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-slate-800 inline-block"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-slate-800 inline-block"></span>
              </div>
              
              <div className="text-center text-xs font-mono text-slate-500 mb-6 border-b border-slate-800/80 pb-3">
                EDBA Nexus
              </div>

              {/* Chat Thread */}
              <div 
                ref={chatContainerRef}
                className="h-[340px] sm:h-[400px] overflow-y-auto pr-2 flex flex-col gap-5 sm:gap-6 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent"
              >
                {sampleQueries.map((query, i) => {
                  const currentQueryIdx = Math.floor(currentStep / 5);
                  const stepWithinQuery = currentStep % 5;

                  if (i > currentQueryIdx) return null;

                  const isCompleted = i < currentQueryIdx;

                  if (isCompleted) {
                    return (
                      <div key={i} className="space-y-4">
                        {/* User Bubble */}
                        <div className="flex justify-end">
                          <div className="bg-slate-800 border border-slate-700 rounded-2xl px-4 py-3 text-sm max-w-[85%] font-medium text-slate-200">
                            {query.q}
                          </div>
                        </div>

                        {/* AI Assistant Bubble */}
                        <div className="flex gap-3 items-start">
                          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white text-xs font-bold shadow-md flex-shrink-0">
                            AI
                          </div>
                          <div className="bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3 text-sm max-w-[85%] text-slate-300 space-y-4 w-full">
                            <p className="text-slate-400 font-medium text-sm">
                              {query.reply}
                            </p>

                            <div>
                              {query.type === "text" && (
                                <pre className="font-mono text-xs bg-slate-950 p-3 rounded-lg border border-slate-800 overflow-x-auto text-slate-300 leading-relaxed whitespace-pre-wrap">
                                  {query.content as string}
                                </pre>
                              )}

                              {query.type === "chart" && (
                                <div className="space-y-3 bg-slate-950 p-4 rounded-lg border border-slate-800">
                                  {((query.content as unknown) as ChartItem[]).map((item, idx) => (
                                    <div key={idx}>
                                      <div className="flex justify-between text-xs text-slate-400 font-semibold mb-1">
                                        <span>{item.label}</span>
                                        <span>{item.val}% GPA Average</span>
                                      </div>
                                      <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                                        <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.val}%` }}></div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {query.type === "list" && (
                                <div className="bg-slate-950 rounded-lg border border-slate-800 overflow-hidden text-xs">
                                  <div className="grid grid-cols-3 gap-2 p-2 bg-slate-900 border-b border-slate-800 font-semibold text-slate-400">
                                    <span>Academic Course</span>
                                    <span>Student</span>
                                    <span className="text-right">Pending Work</span>
                                  </div>
                                  <div className="divide-y divide-slate-800/60">
                                    {((query.content as unknown) as ListItem[]).map((item, idx) => (
                                      <div key={idx} className="grid grid-cols-3 gap-2 p-2 text-slate-300">
                                        <span className="font-medium truncate">{item.title}</span>
                                        <span className="text-slate-400">{item.student}</span>
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

                  // Active Query
                  return (
                    <div key={i} className="space-y-4">
                      {/* Active User Bubble */}
                      <div className="flex justify-end">
                        <div className="bg-slate-800 border border-slate-700 rounded-2xl px-4 py-3 text-sm max-w-[85%] font-medium text-slate-200">
                          {typedQuestion}
                          {stepWithinQuery === 0 && <span className="animate-pulse ml-0.5">|</span>}
                        </div>
                      </div>

                      {/* Active AI Assistant Reply */}
                      {stepWithinQuery >= 1 && (
                        <div className="flex gap-3 items-start">
                          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white text-xs font-bold shadow-md flex-shrink-0">
                            AI
                          </div>
                          <div className="bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3 text-sm max-w-[85%] text-slate-300 space-y-4 w-full">
                            {stepWithinQuery === 1 ? (
                              <div className="flex items-center gap-1.5 py-1 text-slate-500">
                                <span className="h-1.5 w-1.5 rounded-full bg-slate-500 animate-bounce"></span>
                                <span className="h-1.5 w-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:0.2s]"></span>
                                <span className="h-1.5 w-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:0.4s]"></span>
                                <span className="text-xs ml-1">Analyzing campus data...</span>
                              </div>
                            ) : (
                              <>
                                <p className="text-slate-400 font-medium text-sm">
                                  {typedReply}
                                  {stepWithinQuery === 2 && <span className="animate-pulse ml-0.5">|</span>}
                                </p>

                                {stepWithinQuery >= 3 && (
                                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                    {query.type === "text" && (
                                      <pre className="font-mono text-xs bg-slate-950 p-3 rounded-lg border border-slate-800 overflow-x-auto text-slate-300 leading-relaxed whitespace-pre-wrap">
                                        {typedTextContent}
                                        {stepWithinQuery === 3 && <span className="animate-pulse ml-0.5">|</span>}
                                      </pre>
                                    )}

                                    {query.type === "chart" && (
                                      <div className="space-y-3 bg-slate-950 p-4 rounded-lg border border-slate-800">
                                        {((query.content as unknown) as ChartItem[]).map((item, idx) => (
                                          <div key={idx}>
                                            <div className="flex justify-between text-xs text-slate-400 font-semibold mb-1">
                                              <span>{item.label}</span>
                                              <span>{item.val}% GPA Average</span>
                                            </div>
                                            <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
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
                                      <div className="bg-slate-950 rounded-lg border border-slate-800 overflow-hidden text-xs">
                                        <div className="grid grid-cols-3 gap-2 p-2 bg-slate-900 border-b border-slate-800 font-semibold text-slate-400">
                                          <span>Academic Course</span>
                                          <span>Student</span>
                                          <span className="text-right">Pending Work</span>
                                        </div>
                                        <div className="divide-y divide-slate-800/60">
                                          {((query.content as unknown) as ListItem[]).map((item, idx) => (
                                            <motion.div 
                                              key={idx} 
                                              initial={{ opacity: 0, x: -5 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                                              className="grid grid-cols-3 gap-2 p-2 text-slate-300"
                                            >
                                              <span className="font-medium truncate">{item.title}</span>
                                              <span className="text-slate-400">{item.student}</span>
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
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-800/70 mb-3 sm:mb-4 shadow-2xs"
            >
              <Sparkles className="h-3 w-3 text-cyan-400" aria-hidden="true" />
              <span>EDBA Autopilot</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display font-extrabold text-2xl sm:text-4xl lg:text-[42px] text-white mb-4 sm:mb-5 tracking-tight leading-tight"
            >
              Enter the EDBA Nexus: <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">Operations on Absolute Autopilot</span>.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate-400 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 font-normal"
            >
              Command your campus infrastructure using simple language. Surface deep operational telemetry, draft contextual updates, and isolate student risk profiles instantly via a secure conversational interface.
            </motion.p>

            <motion.ul 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  <strong className="text-white">Instant Reports:</strong> Surface academic performance curves and real-time campus presence data instantly via simple language prompts.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  <strong className="text-white">Intelligent Evaluation Assistance:</strong> Accelerate report card commentary and detect student performance vulnerabilities seamlessly.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  <strong className="text-white">Stakeholder Alignment Hub:</strong> Deliver high-touch, data-driven parent communications. Instantly draft hyper-personalized notices.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  <strong className="text-white">Predictive Risk Telemetry:</strong> Preempt institutional attrition before it occurs by continuously scanning performance datasets.
                </span>
              </li>
            </motion.ul>
          </div>

        </div>
      </div>
    </section>
  );
}
