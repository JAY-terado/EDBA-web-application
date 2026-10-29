import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  RotateCcw,
  Send,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  Building2,
  User,
  ShieldCheck,
  AlertCircle,
  Compass,
  ChevronDown,
} from "lucide-react";
import { submitDemoRequest } from "@/services/api";

// ============================================================================
// QUESTION TRAILS DATABASE
// ============================================================================

interface QuestionNode {
  answer: string;
  followUps: string[];
}

const QUESTION_DATA: Record<string, QuestionNode> = {
  // Trail 1: About EDBA
  "What is EDBA?": {
    answer:
      "EDBA is an all-in-one, AI-powered education management platform designed for schools, junior colleges, universities, and specialized institutions. It unifies student records, academics, smart attendance, examinations, fee management, live classes, and parent communication into one connected digital workspace.",
    followUps: [
      "Who can use EDBA?",
      "Which modules does EDBA have?",
      "Why should we choose EDBA?",
    ],
  },
  "Who can use EDBA?": {
    answer:
      "EDBA is purpose-built for the entire educational ecosystem: School & College Administrators, Principals, Educators & Faculty, Students, and Parents. Each user role enjoys a dedicated, secure portal and mobile app tailored to their exact daily workflows.",
    followUps: [
      "Does EDBA support different boards?",
      "Can we start with only some modules?",
      "How do we get started?",
    ],
  },
  "Why should we choose EDBA?": {
    answer:
      "EDBA replaces paper registers and disjointed third-party software with a unified, real-time platform. It brings AI evaluation tools, 99.98% cloud uptime, automated parent notifications, instant fee reconciliation, and bank-grade data security with complete audit logs.",
    followUps: [
      "What is AI evaluation?",
      "What are student insights?",
      "Can I see a demo?",
    ],
  },

  // Trail 2: Admissions
  "Can EDBA manage admission enquiries?": {
    answer:
      "Yes! EDBA provides a full digital admission pipeline. You can capture online enquiries from your website, manage walk-in leads, track status stages, collect digital documents, schedule entrance exams, and auto-convert selected applicants into enrolled students.",
    followUps: [
      "Does EDBA handle the full admission process?",
      "Does EDBA support different boards?",
      "Can I see a demo?",
    ],
  },
  "Does EDBA handle the full admission process?": {
    answer:
      "Yes, from start to finish. From online application forms and merit list generation to digital seat allotment, document verification, dynamic student ID creation, and first-term fee collection, the entire workflow is completely paperless.",
    followUps: [
      "Can EDBA generate student ID cards?",
      "Can parents be informed through EDBA?",
      "How do we get started?",
    ],
  },

  // Trail 3: Academics
  "Can we manage timetables on EDBA?": {
    answer:
      "Yes! EDBA includes an intelligent timetable engine that automatically allocates subject hours, prevents teacher and classroom clashes, handles live substitutions, and pushes instant schedule alerts to faculty and student mobile apps.",
    followUps: [
      "How does attendance work?",
      "Can parents be informed through EDBA?",
      "Do you provide training and support?",
    ],
  },
  "How does attendance work?": {
    answer:
      "Attendance can be recorded in seconds by teachers via the mobile app or web, or automated through RFID smart campus gates and biometric hardware. Absentee notices are automatically dispatched to parents via SMS, WhatsApp, and app push alerts.",
    followUps: [
      "Can parents be informed through EDBA?",
      "What are student insights?",
      "Do you provide training and support?",
    ],
  },
  "Can EDBA generate student ID cards?": {
    answer:
      "Yes! EDBA includes an integrated ID card designer with customizable institutional templates. You can batch-generate high-resolution student and staff ID cards with dynamic barcodes, QR codes, student photos, and blood groups ready for instant printing.",
    followUps: [
      "How does attendance work?",
      "Does EDBA handle the full admission process?",
      "How do we get started?",
    ],
  },

  // Trail 4: Parents and Safety
  "Can parents be informed through EDBA?": {
    answer:
      "Yes! Parents receive a dedicated mobile app that keeps them actively engaged in their child's education: live attendance status, daily homework, exam marks, fee receipts, circulars, event photos, and direct two-way messaging with teachers.",
    followUps: [
      "What does real-time safety mean?",
      "How does attendance work?",
      "Can I see a demo?",
    ],
  },
  "What does real-time safety mean?": {
    answer:
      "Real-time safety integrates live GPS tracking for institute buses, speed monitoring, geofencing pick-up/drop-off alerts, and RFID gate entry/exit logs so administrators and parents always know students are safe during campus transit.",
    followUps: [
      "What are student insights?",
      "Do you provide training and support?",
      "Talk to our team",
    ],
  },

  // Trail 5: Getting Started
  "How do we get started?": {
    answer:
      "Onboarding with EDBA is smooth and rapid. A dedicated implementation specialist assists your team with student data migration, master timetable configuration, and staff training. Most campuses go live within 48 to 72 hours.",
    followUps: [
      "Can we start with only some modules?",
      "Do you provide training and support?",
      "Book a demo",
    ],
  },
  "Can we start with only some modules?": {
    answer:
      "Absolutely. EDBA is modular and flexible. Many institutions start with core Student Information, Attendance, and Fees, and later activate LMS, Live Classes, or Transport as their digital needs evolve.",
    followUps: [
      "Which modules does EDBA have?",
      "Do you provide training and support?",
      "Book a demo",
    ],
  },
  "Do you provide training and support?": {
    answer:
      "Yes. Every institution receives comprehensive hands-on training for teachers, administrative staff, and accountants, along with 24/7 dedicated support desk, video tutorials, and free platform feature updates.",
    followUps: [
      "How do we get started?",
      "Book a demo",
      "How can I contact EDBA?",
    ],
  },

  // Supplemental Nodes
  "Which modules does EDBA have?": {
    answer:
      "EDBA includes 8 core modular platforms: Student Information System, Classroom & Academic Management, Live Classes & Video Library, Attendance & Timetables, Online Exams & Gradebook, Fees & Accounting, Parent & Community Hub, and Bus GPS Safety.",
    followUps: [
      "Can we start with only some modules?",
      "Does EDBA support different boards?",
      "Book a demo",
    ],
  },
  "Does EDBA support different boards?": {
    answer:
      "Yes! EDBA natively accommodates CBSE, ICSE, State Boards, IB, Cambridge IGCSE, and autonomous higher education university semester frameworks with customizable grading rules.",
    followUps: [
      "Can we start with only some modules?",
      "How do we get started?",
      "Book a demo",
    ],
  },
  "What is AI evaluation?": {
    answer:
      "Our AI evaluation features assist teachers in drafting constructive student report card comments, detecting individual performance drop-offs early, and analyzing class-wide subject benchmarks in real time.",
    followUps: [
      "What are student insights?",
      "Can I see a demo?",
      "Talk to our team",
    ],
  },
  "What are student insights?": {
    answer:
      "Student insights surface actionable learning metrics: attendance patterns, exam score trajectory graphs, fee history, and holistic behavioral tracking to support informed academic interventions.",
    followUps: [
      "How does attendance work?",
      "Do you provide training and support?",
      "Book a demo",
    ],
  },
  "How can I contact EDBA?": {
    answer:
      "You can connect directly with our advisory team at +91 8956734701 or support@edba.io. You can also submit the quick form below to request a tailored demonstration for your campus.",
    followUps: [
      "Book a demo",
      "Talk to our team",
      "What is EDBA?",
    ],
  },
};

const STARTING_QUESTIONS = [
  "What is EDBA?",
  "Why should we choose EDBA?",
  "How do we get started?",
  "Talk to our team",
];

export interface TrailCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  startingQuestions: string[];
}

const TRAIL_CATEGORIES: TrailCategory[] = [
  {
    id: "about",
    name: "About EDBA",
    icon: "🌟",
    description: "Overview, modules & platform benefits",
    startingQuestions: [
      "What is EDBA?",
      "Who can use EDBA?",
      "Why should we choose EDBA?",
    ],
  },
  {
    id: "admissions",
    name: "Admissions",
    icon: "🎓",
    description: "Enquiries, documents & full digital pipeline",
    startingQuestions: [
      "Can EDBA manage admission enquiries?",
      "Does EDBA handle the full admission process?",
    ],
  },
  {
    id: "academics",
    name: "Academics",
    icon: "📚",
    description: "Timetables, smart attendance & student ID cards",
    startingQuestions: [
      "Can we manage timetables on EDBA?",
      "How does attendance work?",
      "Can EDBA generate student ID cards?",
    ],
  },
  {
    id: "parents",
    name: "Parents & Safety",
    icon: "🛡️",
    description: "Parent portal, notifications & bus GPS safety",
    startingQuestions: [
      "Can parents be informed through EDBA?",
      "What does real-time safety mean?",
    ],
  },
  {
    id: "getting-started",
    name: "Getting Started",
    icon: "🚀",
    description: "Modular onboarding, training & deployment",
    startingQuestions: [
      "How do we get started?",
      "Can we start with only some modules?",
      "Do you provide training and support?",
    ],
  },
];

const LEAD_FORM_TRIGGERS = [
  "Book a demo",
  "Talk to our team",
  "Can I see a demo?",
  "Request a demo",
];

// ============================================================================
// FUZZY & SEMANTIC QUERY ANALYSIS ENGINE
// ============================================================================

function levenshteinDistance(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
}

function isFuzzyMatch(w1: string, w2: string): boolean {
  if (w1 === w2) return true;
  if (w1.length >= 3 && w2.length >= 3 && (w1.includes(w2) || w2.includes(w1))) return true;
  const maxLen = Math.max(w1.length, w2.length);
  const allowed = maxLen <= 4 ? 1 : maxLen <= 8 ? 2 : 3;
  return levenshteinDistance(w1, w2) <= allowed;
}

interface MatchResult {
  questionKey?: string;
  answer?: string;
  followUps?: string[];
  isLeadTrigger?: boolean;
}

const INTENT_TOPICS: { keywords: string[]; targetQuestion: string }[] = [
  {
    keywords: ["start", "started", "staerted", "startd", "strt", "get started", "getting started", "onboard", "setup", "begin", "signup", "register", "join", "implementation"],
    targetQuestion: "How do we get started?",
  },
  {
    keywords: ["price", "pricing", "cost", "charge", "fees structure", "subscription", "plan", "quote"],
    targetQuestion: "How do we get started?",
  },
  {
    keywords: ["demo", "trial", "free trial", "test", "preview", "show demo", "see demo"],
    targetQuestion: "Can I see a demo?",
  },
  {
    keywords: ["talk", "team", "sales", "call", "contact", "support", "speak", "phone", "representative", "agent", "human"],
    targetQuestion: "Talk to our team",
  },
  {
    keywords: ["what is edba", "about edba", "explain edba", "who are you", "overview", "what edba does"],
    targetQuestion: "What is EDBA?",
  },
  {
    keywords: ["why edba", "why choose", "benefits", "advantage", "why better", "compare", "differentiator"],
    targetQuestion: "Why should we choose EDBA?",
  },
  {
    keywords: ["module", "modules", "features", "capabilities", "what modules", "all modules", "erp", "sis", "lms"],
    targetQuestion: "Which modules does EDBA have?",
  },
  {
    keywords: ["admission", "admissions", "admision", "admisson", "enquiry", "enquiries", "leads", "lead", "apply", "applicant", "enroll", "enrollment", "registration"],
    targetQuestion: "Can EDBA manage admission enquiries?",
  },
  {
    keywords: ["full admission", "admission process", "seat allotment", "merit list"],
    targetQuestion: "Does EDBA handle the full admission process?",
  },
  {
    keywords: ["attendance", "atendance", "attendence", "absent", "present", "biometric", "rfid", "smart gates", "leaves"],
    targetQuestion: "How does attendance work?",
  },
  {
    keywords: ["timetable", "timetables", "timtable", "schedule", "routine", "periods", "substitution", "faculty schedule"],
    targetQuestion: "Can we manage timetables on EDBA?",
  },
  {
    keywords: ["id card", "id cards", "identity card", "student card", "barcode", "qr code", "blood group card"],
    targetQuestion: "Can EDBA generate student ID cards?",
  },
  {
    keywords: ["parents", "parent", "mother", "father", "guardian", "parent app", "notices", "homework", "circulars", "whatsapp", "sms"],
    targetQuestion: "Can parents be informed through EDBA?",
  },
  {
    keywords: ["safety", "safty", "bus", "transport", "gps", "tracking", "geofencing", "speed", "van", "pickup", "drop"],
    targetQuestion: "What does real-time safety mean?",
  },
  {
    keywords: ["ai", "ai evaluation", "report card comments", "automated remarks", "grading", "marks analysis"],
    targetQuestion: "What is AI evaluation?",
  },
  {
    keywords: ["insights", "student insights", "analytics", "performance graphs", "scores", "marks", "drop off"],
    targetQuestion: "What are student insights?",
  },
  {
    keywords: ["boards", "cbse", "icse", "ib", "igcse", "state board", "cambridge", "university", "higher education"],
    targetQuestion: "Does EDBA support different boards?",
  },
  {
    keywords: ["training", "support", "help", "staff training", "tutorial", "videos", "hand holding"],
    targetQuestion: "Do you provide training and support?",
  },
  {
    keywords: ["partial", "some modules", "only some", "start small", "few modules", "basic modules"],
    targetQuestion: "Can we start with only some modules?",
  },
];

function analyzeAndFindBestMatch(rawQuery: string): MatchResult {
  const cleanQuery = rawQuery.toLowerCase().trim();
  const queryTokens = cleanQuery
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length >= 2);

  if (queryTokens.length === 0) {
    return {
      answer: QUESTION_DATA["What is EDBA?"].answer,
      followUps: QUESTION_DATA["What is EDBA?"].followUps,
    };
  }

  // 1. Direct lead form intent check
  for (const trigger of LEAD_FORM_TRIGGERS) {
    const triggerLower = trigger.toLowerCase();
    if (cleanQuery.includes(triggerLower) || triggerLower.includes(cleanQuery)) {
      return { isLeadTrigger: true };
    }
  }

  // 2. Check Intent Topics with fuzzy keyword matching
  let bestIntent: { question: string; score: number } | null = null;
  for (const topic of INTENT_TOPICS) {
    let score = 0;
    for (const kw of topic.keywords) {
      const kwTokens = kw.split(/\s+/);
      if (kwTokens.length === 1) {
        for (const token of queryTokens) {
          if (token === kw) {
            score += 2.5;
          } else if (isFuzzyMatch(token, kw)) {
            score += 1.8;
          }
        }
      } else {
        // Multi-word phrase check (e.g. "get started", "why choose")
        if (cleanQuery.includes(kw)) {
          score += 4.0;
        } else {
          // Check if all phrase tokens match
          const allMatch = kwTokens.every((kwt) => queryTokens.some((qt) => isFuzzyMatch(qt, kwt)));
          if (allMatch) score += 3.0;
        }
      }
    }
    if (score > 0 && (!bestIntent || score > bestIntent.score)) {
      bestIntent = { question: topic.targetQuestion, score };
    }
  }

  if (bestIntent && bestIntent.score >= 1.6) {
    const target = bestIntent.question;
    if (LEAD_FORM_TRIGGERS.some((t) => t.toLowerCase() === target.toLowerCase())) {
      return { isLeadTrigger: true };
    }
    if (QUESTION_DATA[target]) {
      return {
        questionKey: target,
        answer: QUESTION_DATA[target].answer,
        followUps: QUESTION_DATA[target].followUps,
      };
    }
  }

  // 3. Deep search across all QUESTION_DATA keys and answer contents
  let topMatch: { key: string; score: number } | null = null;
  for (const [key, node] of Object.entries(QUESTION_DATA)) {
    let score = 0;
    const keyTokens = key.toLowerCase().replace(/[^\w\s]/g, " ").split(/\s+/).filter((t) => t.length >= 2);
    const answerTokens = node.answer.toLowerCase().replace(/[^\w\s]/g, " ").split(/\s+/).filter((t) => t.length >= 3);

    // Score against question title
    for (const qToken of queryTokens) {
      for (const kToken of keyTokens) {
        if (qToken === kToken) {
          score += 2.0;
        } else if (isFuzzyMatch(qToken, kToken)) {
          score += 1.4;
        }
      }
    }

    // Score against answer body (word includes in our answer)
    for (const qToken of queryTokens) {
      if (qToken.length >= 3) {
        let answerHit = false;
        for (const aToken of answerTokens) {
          if (qToken === aToken) {
            score += 1.0;
            answerHit = true;
            break;
          } else if (isFuzzyMatch(qToken, aToken)) {
            score += 0.7;
            answerHit = true;
            break;
          }
        }
        if (answerHit) {
          score += 0.5;
        }
      }
    }

    if (score > 0 && (!topMatch || score > topMatch.score)) {
      topMatch = { key, score };
    }
  }

  if (topMatch && topMatch.score >= 1.2 && QUESTION_DATA[topMatch.key]) {
    return {
      questionKey: topMatch.key,
      answer: QUESTION_DATA[topMatch.key].answer,
      followUps: QUESTION_DATA[topMatch.key].followUps,
    };
  }

  // 4. Default intelligent fallback with recommended exploration options
  return {
    answer:
      "EDBA provides connected digital solutions for schools, colleges, and educational institutions. Here are the most helpful topics to get you started:",
    followUps: [
      "What is EDBA?",
      "How do we get started?",
      "Which modules does EDBA have?",
      "Talk to our team",
    ],
  };
}

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text?: string;
  isLeadForm?: boolean;
  followUps?: string[];
  timestamp: string;
  isStreaming?: boolean;
}

// ── Streaming Text Component (Word-by-word reveal) ──
const StreamingText: React.FC<{
  text: string;
  onComplete: () => void;
}> = ({ text, onComplete }) => {
  const words = text.split(" ");
  const [count, setCount] = useState(1);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      index++;
      setCount(index);
      if (index >= words.length) {
        clearInterval(interval);
        setTimeout(() => {
          onCompleteRef.current();
        }, 100);
      }
    }, 28); // 28ms per word gives a smooth, fluid reading stream

    return () => clearInterval(interval);
  }, [text, words.length]);

  return (
    <p>
      {words.slice(0, count).map((w, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.08 }}
          className="inline-block mr-1"
        >
          {w}
        </motion.span>
      ))}
      {count < words.length && (
        <span className="inline-block w-1.5 h-3.5 bg-blue-600 rounded-xs animate-pulse ml-0.5 align-middle" />
      )}
    </p>
  );
};

export const ChatbotModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeTrailId, setActiveTrailId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Lead Form State
  const [formData, setFormData] = useState({
    name: "",
    institute: "",
    phone: "",
    email: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const resetChat = () => {
    setActiveTrailId(null);
    setFormSubmitted(false);
    setIsSubmitting(false);
    setFormError("");
    setFormData({ name: "", institute: "", phone: "", email: "" });
    setMessages([
      {
        id: "msg-welcome",
        sender: "bot",
        text: "Hi there! 👋 Welcome to EDBA. I'm your interactive assistant. Choose a starting question below or browse by topic:",
        followUps: STARTING_QUESTIONS,
        timestamp: "Just now",
      },
    ]);
    requestAnimationFrame(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = 0;
      }
    });
  };

  // Listen to open-chatbot and close-chatbot events
  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      resetChat();
      // Ensure the box always opens from the very top (welcome greeting), not from the bottom/last
      requestAnimationFrame(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = 0;
        }
      });
      setTimeout(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = 0;
        }
      }, 80);
      setTimeout(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = 0;
        }
      }, 260);
    };

    const handleClose = () => setIsOpen(false);

    window.addEventListener("open-chatbot", handleOpen);
    window.addEventListener("close-chatbot", handleClose);

    return () => {
      window.removeEventListener("open-chatbot", handleOpen);
      window.removeEventListener("close-chatbot", handleClose);
    };
  }, []);

  // Initialize starting messages if empty
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      resetChat();
    }
  }, [isOpen]);

  // Scroll to bottom ONLY on new interactions (user messages, bot replies, typing, or lead form submitted)
  useEffect(() => {
    if (!isOpen) return;

    if (messages.length > 1 || isTyping || formSubmitted) {
      const timer = setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return () => clearTimeout(timer);
    } else {
      // Keep scroll at top for initial welcome view so the greeting is never skipped
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = 0;
      }
    }
  }, [messages, isTyping, formSubmitted, isOpen]);

  // Lock body scroll on small screens when chat is open
  useEffect(() => {
    if (isOpen && window.innerWidth < 640) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleToggleTrail = (trailId: string) => {
    setActiveTrailId((prev) => (prev === trailId ? null : trailId));
  };

  const handleStreamingComplete = (msgId: string) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === msgId ? { ...m, isStreaming: false } : m))
    );
  };

  const handleSelectQuestion = (question: string) => {
    setActiveTrailId(null);
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: question,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Realistic human-feeling AI thinking delay (1.2s to 1.4s)
    const thinkingDelay = Math.floor(Math.random() * 200) + 1200;

    setTimeout(() => {
      setIsTyping(false);

      // Check if this triggers the closing trail / lead form
      const isLeadTrigger = LEAD_FORM_TRIGGERS.some(
        (trigger) => trigger.toLowerCase() === question.toLowerCase()
      );

      if (isLeadTrigger) {
        const leadMsg: ChatMessage = {
          id: `bot-lead-${Date.now()}`,
          sender: "bot",
          text: "We'd love to connect with your team! Please enter your details below and an education specialist will reach out to you within 2 business hours:",
          isLeadForm: true,
          isStreaming: true,
          timestamp: "Just now",
        };
        setMessages((prev) => [...prev, leadMsg]);
        return;
      }

      // Check question in data dictionary
      const node = QUESTION_DATA[question];
      if (node) {
        const botMsg: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: node.answer,
          followUps: node.followUps,
          isStreaming: true,
          timestamp: "Just now",
        };
        setMessages((prev) => [...prev, botMsg]);
      } else {
        // Fallback matching
        const botMsg: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: "EDBA provides connected digital solutions for schools, colleges, and educational institutions. Would you like to explore our platform or connect directly with our team?",
          followUps: [
            "What is EDBA?",
            "Why should we choose EDBA?",
            "Talk to our team",
          ],
          isStreaming: true,
          timestamp: "Just now",
        };
        setMessages((prev) => [...prev, botMsg]);
      }
    }, thinkingDelay);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.institute.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setFormError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setFormError("");

    try {
      const res = await submitDemoRequest({
        fullName: formData.name,
        contactNumber: formData.phone,
        workEmail: formData.email,
        instituteName: formData.institute,
      });

      if (res.errCode === 1) {
        setIsSubmitting(false);
        setFormError(res.errMsg || "Submission failed. Please check your details.");
        return;
      }

      setIsSubmitting(false);
      setFormSubmitted(true);
      const confirmationMsg: ChatMessage = {
        id: `bot-confirmed-${Date.now()}`,
        sender: "bot",
        text:
          res.errMsg ||
          `Thank you, ${formData.name}! Your demo request for ${formData.institute} has been received. Our team will contact you shortly.`,
        followUps: ["What is EDBA?", "Which modules does EDBA have?"],
        timestamp: "Just now",
      };
      setMessages((prev) => [...prev, confirmationMsg]);
    } catch (err: unknown) {
      setIsSubmitting(false);
      let msg = "Unable to submit your demo request right now. Please try again.";
      if (err && typeof err === "object" && "response" in err) {
        const responseData = (err as { response?: { data?: { errMsg?: string } } }).response?.data;
        if (responseData?.errMsg) msg = responseData.errMsg;
      } else if (err instanceof Error && err.message) {
        msg = err.message;
      }
      setFormError(msg);
    }
  };

  const handleCustomInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputValue.trim();
    if (!query) return;
    setActiveTrailId(null);
    setInputValue("");

    // 1. Post user's typed message in chat
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // 2. Intelligent fuzzy & semantic search across questions and answers (with realistic thinking time)
    const thinkingDelay = Math.floor(Math.random() * 250) + 1250;

    setTimeout(() => {
      setIsTyping(false);
      const match = analyzeAndFindBestMatch(query);

      if (match.isLeadTrigger) {
        const leadMsg: ChatMessage = {
          id: `bot-lead-${Date.now()}`,
          sender: "bot",
          text: "We'd love to connect with your team! Please enter your details below and an education specialist will reach out to you within 2 business hours:",
          isLeadForm: true,
          isStreaming: true,
          timestamp: "Just now",
        };
        setMessages((prev) => [...prev, leadMsg]);
        return;
      }

      if (match.answer) {
        const botMsg: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text: match.answer,
          followUps: match.followUps || STARTING_QUESTIONS,
          isStreaming: true,
          timestamp: "Just now",
        };
        setMessages((prev) => [...prev, botMsg]);
      }
    }, thinkingDelay);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="EDBA Chatbot Assistant"
          className="fixed bottom-[92px] right-3 sm:bottom-[106px] sm:right-6 z-[100] flex flex-col items-end pointer-events-auto select-none"
        >
          {/* Subtle Mobile Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsOpen(false);
              window.dispatchEvent(new CustomEvent("close-chatbot"));
            }}
            className="fixed inset-0 bg-slate-950/20 backdrop-blur-[2px] sm:hidden -z-10"
          />

          {/* Thought Bubble Connector (Staggered Pop-Out Entrance from Bot Mascot) */}
          <div className="absolute -bottom-6.5 right-7 sm:right-9 flex flex-col items-center gap-1.5 pointer-events-none z-10">
            {/* Top Bubble (Largest, connects to bottom-right of thinking box) */}
            <motion.div
              initial={{ scale: 0, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 15, transition: { duration: 0.15 } }}
              transition={{ type: "spring", stiffness: 440, damping: 16, delay: 0.16 }}
              className="-translate-x-[2px]"
            >
              <motion.div
                animate={{
                  y: [0, -3, 0],
                  scale: [1, 1.1, 1],
                  opacity: [0.92, 1, 0.92],
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="w-4.5 h-4.5 rounded-full bg-white/95 border-2 border-blue-400 shadow-[0_2px_10px_rgba(37,99,235,0.3)] backdrop-blur-xs"
              />
            </motion.div>

            {/* Middle Bubble */}
            <motion.div
              initial={{ scale: 0, opacity: 0, y: 18 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 18, transition: { duration: 0.14, delay: 0.04 } }}
              transition={{ type: "spring", stiffness: 460, damping: 16, delay: 0.09 }}
            >
              <motion.div
                animate={{
                  y: [0, -2.5, 0],
                  scale: [1, 1.14, 1],
                  opacity: [0.85, 1, 0.85],
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                className="w-3 h-3 rounded-full bg-white/90 border-2 border-blue-300 shadow-[0_2px_8px_rgba(37,99,235,0.22)] backdrop-blur-xs"
              />
            </motion.div>

            {/* Bottom Bubble (Smallest, pops out first from the mascot antenna) */}
            <motion.div
              initial={{ scale: 0, opacity: 0, y: 22 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 22, transition: { duration: 0.14, delay: 0.08 } }}
              transition={{ type: "spring", stiffness: 480, damping: 16, delay: 0.02 }}
              className="translate-x-[2px]"
            >
              <motion.div
                animate={{
                  y: [0, -2, 0],
                  scale: [1, 1.18, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="w-2 h-2 rounded-full bg-white border-1.5 border-blue-400 shadow-xs"
              />
            </motion.div>
          </div>

          {/* Thinking Box Container (Arriving from Bot with Spring expansion) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.04, y: 40, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.04, y: 40, x: 20, transition: { duration: 0.22 } }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 24,
              mass: 0.8,
              delay: 0.22,
            }}
            style={{ transformOrigin: "bottom right" }}
            onWheel={(e) => e.stopPropagation()}
            className="w-[calc(100vw-24px)] xs:w-[390px] sm:w-[410px] md:w-[430px] h-[540px] sm:h-[580px] max-h-[calc(100dvh-115px)] bg-white rounded-3xl rounded-br-lg shadow-[0_25px_70px_rgba(15,23,42,0.25)] border border-blue-100 flex flex-col overflow-hidden relative select-auto overscroll-contain"
          >
            {/* ── TOP HEADER (Minimal & Ultra-Premium Thinking Box Header) ── */}
            <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-4 sm:px-5 py-3.5 flex items-center justify-between shadow-xs flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-2xl bg-white/20 p-1 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-xs">
                    <img
                      src="/robo.gif"
                      alt="EDBA Bot Mascot"
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "/Pause%20GIF%20image.gif";
                      }}
                    />
                  </div>
                  {/* Live Status Green Dot */}
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-blue-700 shadow-xs" />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-display font-bold text-sm tracking-tight text-white">
                      EDBA Assistant
                    </span>
                    <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-md font-medium text-blue-100 border border-white/20">
                      AI
                    </span>
                  </div>
                  <p className="text-[11px] text-blue-100/90 mt-0.5">
                    Connected to EDBA Bot
                  </p>
                </div>
              </div>

              {/* Header Actions */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={resetChat}
                  title="Reset conversation"
                  aria-label="Restart chat"
                  className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    window.dispatchEvent(new CustomEvent("close-chatbot"));
                  }}
                  title="Close chat"
                  aria-label="Close assistant"
                  className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* ── TOPIC NAVIGATION BAR (Sticky Quick Access to all Topics, only shown after 1st question) ── */}
            <AnimatePresence>
              {messages.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.22 }}
                  className="bg-slate-100/95 backdrop-blur-md px-3 py-2 border-b border-slate-200/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar flex-shrink-0"
                >
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pl-0.5 flex-shrink-0">
                    Explore:
                  </span>
                  {TRAIL_CATEGORIES.map((trail) => {
                    const isActive = activeTrailId === trail.id;
                    return (
                      <button
                        key={trail.id}
                        type="button"
                        onClick={() => handleToggleTrail(trail.id)}
                        className={`px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all duration-150 flex items-center gap-1 cursor-pointer flex-shrink-0 ${
                          isActive
                            ? "bg-blue-600 text-white shadow-xs"
                            : "bg-white text-slate-600 border border-slate-200/90 hover:border-blue-300 hover:text-blue-600 hover:bg-slate-50"
                        }`}
                      >
                        <span>{trail.icon}</span>
                        <span>{trail.name}</span>
                        <ChevronDown
                          className={`w-3 h-3 transition-transform ${
                            isActive ? "rotate-180 text-white" : "text-slate-400"
                          }`}
                        />
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── ACTIVE TRAIL FLYOUT DRAWER ── */}
            <AnimatePresence>
              {activeTrailId && (
                (() => {
                  const activeTrail = TRAIL_CATEGORIES.find((t) => t.id === activeTrailId);
                  if (!activeTrail) return null;
                  return (
                    <motion.div
                      key={activeTrail.id}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-blue-50/95 border-b border-blue-200/80 px-3.5 py-2.5 overflow-hidden flex-shrink-0 z-10"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900">
                          <span>{activeTrail.icon}</span>
                          <span>{activeTrail.name}</span>
                          <span className="text-[10.5px] font-normal text-blue-600 hidden sm:inline">
                            • {activeTrail.description}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setActiveTrailId(null)}
                          className="text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-blue-100 transition-colors cursor-pointer"
                          title="Close"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {activeTrail.startingQuestions.map((q) => (
                          <button
                            key={q}
                            type="button"
                            onClick={() => {
                              setActiveTrailId(null);
                              handleSelectQuestion(q);
                            }}
                            className="text-left text-xs bg-white text-blue-900 hover:bg-blue-600 hover:text-white border border-blue-200/90 rounded-xl px-3 py-1.5 transition-all shadow-3xs hover:shadow-xs font-medium cursor-pointer flex items-center gap-1.5 group"
                          >
                            <span>{q}</span>
                            <ArrowRight className="w-3 h-3 text-blue-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  );
                })()
              )}
            </AnimatePresence>

            {/* ── CHAT MESSAGE STREAM (Scrollable & Scroll-Contained) ── */}
            <div
              ref={chatContainerRef}
              onWheel={(e) => e.stopPropagation()}
              className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-4 bg-slate-50/70 text-sm"
            >
              {messages.map((msg) => (
                <div key={msg.id} className="space-y-2.5">
                  {/* Message Bubble */}
                  <div
                    className={`flex items-start gap-2 ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.sender === "bot" && (
                      <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-200/90 flex items-center justify-center flex-shrink-0 mt-0.5 overflow-hidden shadow-2xs">
                        <img
                          src="/robo.gif"
                          alt="EDBA AI Bot"
                          className="w-full h-full object-contain p-0.5"
                          onError={(e) => {
                            e.currentTarget.src = "/Pause%20GIF%20image.gif";
                          }}
                        />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed text-[13.5px] shadow-2xs ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-xs"
                          : "bg-white text-slate-800 border border-slate-200/80 rounded-tl-xs"
                      }`}
                    >
                      {msg.sender === "bot" && msg.isStreaming && msg.text ? (
                        <StreamingText
                          text={msg.text}
                          onComplete={() => handleStreamingComplete(msg.id)}
                        />
                      ) : (
                        <p>{msg.text}</p>
                      )}

                      {/* 5 Topic Cards inside Welcome Message */}
                      {msg.id === "msg-welcome" && (
                        <div className="mt-3 pt-3 border-t border-slate-100">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10.5px] font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1">
                              <Compass className="w-3.5 h-3.5 text-blue-600" />
                              <span>Explore by Topic</span>
                            </span>
                            <span className="text-[10px] text-blue-600 font-semibold bg-blue-50 px-1.5 py-0.5 rounded-full border border-blue-100">
                              Quick Guide
                            </span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            {TRAIL_CATEGORIES.map((trail) => (
                              <button
                                key={trail.id}
                                type="button"
                                onClick={() => handleToggleTrail(trail.id)}
                                className={`text-left p-2 rounded-xl border transition-all cursor-pointer group shadow-3xs ${
                                  activeTrailId === trail.id
                                    ? "bg-blue-50/90 border-blue-300 ring-1 ring-blue-400"
                                    : "bg-slate-50/90 hover:bg-blue-50/70 border-slate-200/80 hover:border-blue-300"
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-sm">{trail.icon}</span>
                                    <span className="text-xs font-bold text-slate-800 group-hover:text-blue-700">
                                      {trail.name}
                                    </span>
                                  </div>
                                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5" />
                                </div>
                                <p className="text-[10.5px] text-slate-500 mt-0.5 line-clamp-1">
                                  {trail.description}
                                </p>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Embedded Lead Form if triggered */}
                  {msg.isLeadForm && !formSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="ml-9 mr-2 p-4 bg-white rounded-2xl border border-blue-200 shadow-md space-y-3"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>Book a Personalized Demo</span>
                      </div>

                      <form onSubmit={handleFormSubmit} className="space-y-2.5">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                            Your Name *
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
                            <input
                              type="text"
                              required
                              placeholder="e.g. Rajesh Sharma"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }
                              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none bg-slate-50/50"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                            Institute Name *
                          </label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
                            <input
                              type="text"
                              required
                              placeholder="e.g. Sterling International School"
                              value={formData.institute}
                              onChange={(e) =>
                                setFormData({ ...formData, institute: e.target.value })
                              }
                              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none bg-slate-50/50"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                              Phone *
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
                              <input
                                type="tel"
                                required
                                placeholder="+91 98765 43210"
                                value={formData.phone}
                                onChange={(e) =>
                                  setFormData({ ...formData, phone: e.target.value })
                                }
                                className="w-full pl-8 pr-2.5 py-1.5 text-xs rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none bg-slate-50/50"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                              Work Email *
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
                              <input
                                type="email"
                                required
                                placeholder="name@institute.edu"
                                value={formData.email}
                                onChange={(e) =>
                                  setFormData({ ...formData, email: e.target.value })
                                }
                                className="w-full pl-8 pr-2.5 py-1.5 text-xs rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none bg-slate-50/50"
                              />
                            </div>
                          </div>
                        </div>

                        {formError && (
                          <div className="p-2 rounded-lg bg-red-50 border border-red-200 text-red-600 text-[11px] font-medium flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 text-red-500" />
                            <span>{formError}</span>
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <span>Scheduling Demo...</span>
                          ) : (
                            <>
                              <span>Submit Demo Request</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      </form>
                    </motion.div>
                  )}

                  {/* Follow-up Question Buttons (Question Trails) */}
                  {msg.followUps && msg.followUps.length > 0 && !msg.isStreaming && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="ml-9 flex flex-col items-start gap-1.5 pt-1"
                    >
                      <span className="text-[10.5px] font-semibold text-slate-400 uppercase tracking-wider">
                        Suggested Follow-ups
                      </span>
                      <div className="flex flex-wrap gap-1.5 w-full">
                        {msg.followUps.map((q, idx) => {
                          const isCta =
                            q === "Book a demo" ||
                            q === "Talk to our team" ||
                            q === "Can I see a demo?";
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleSelectQuestion(q)}
                              className={`text-left text-xs font-medium px-3 py-2 rounded-xl transition-all duration-150 cursor-pointer flex items-center gap-1.5 border ${
                                isCta
                                  ? "bg-blue-50 text-blue-700 border-blue-300 hover:bg-blue-100 hover:border-blue-400 font-semibold shadow-2xs"
                                  : "bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-slate-50 shadow-2xs hover:shadow-xs hover:text-blue-600"
                              }`}
                            >
                              <span>{q}</span>
                              <ArrowRight className="w-3 h-3 opacity-60 flex-shrink-0" />
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* Exploration shortcuts alongside or after Lead Form */}
                  {msg.isLeadForm && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="ml-9 mr-2 p-3 bg-white rounded-2xl border border-slate-200/90 shadow-2xs"
                    >
                      <p className="text-[11px] font-semibold text-slate-700 mb-2 flex items-center gap-1">
                        <Compass className="w-3.5 h-3.5 text-blue-600" />
                        <span>Continue exploring platform solutions:</span>
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {TRAIL_CATEGORIES.map((trail) => (
                          <button
                            key={trail.id}
                            type="button"
                            onClick={() => handleToggleTrail(trail.id)}
                            className="text-left text-xs bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 hover:border-blue-300 border border-slate-200 rounded-lg px-2.5 py-1.5 transition-colors font-medium cursor-pointer flex items-center gap-1 shadow-3xs"
                          >
                            <span>{trail.icon}</span>
                            <span>{trail.name}</span>
                            <ArrowRight className="w-3 h-3 opacity-60 text-slate-400" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Bot Thinking / Typing Indicator (EDBA Bot + Wavy Dots) */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.95 }}
                  className="flex items-start gap-2 my-1"
                >
                  <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-200/90 flex items-center justify-center flex-shrink-0 mt-0.5 overflow-hidden shadow-2xs">
                    <img
                      src="/robo.gif"
                      alt="EDBA AI Bot"
                      className="w-full h-full object-contain p-0.5"
                      onError={(e) => {
                        e.currentTarget.src = "/Pause%20GIF%20image.gif";
                      }}
                    />
                  </div>
                  <div className="bg-white border border-slate-200/90 rounded-2xl rounded-tl-xs px-3.5 py-3 flex items-center gap-1.5 shadow-2xs">
                    <motion.span
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.85, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                      className="w-2 h-2 rounded-full bg-blue-600"
                    />
                    <motion.span
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.85, repeat: Infinity, ease: "easeInOut", delay: 0.16 }}
                      className="w-2 h-2 rounded-full bg-blue-600"
                    />
                    <motion.span
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.85, repeat: Infinity, ease: "easeInOut", delay: 0.32 }}
                      className="w-2 h-2 rounded-full bg-blue-600"
                    />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* ── BOTTOM TEXT INPUT BAR ── */}
            <div className="p-3 bg-white border-t border-slate-100 flex-shrink-0">
              <form
                onSubmit={handleCustomInputSubmit}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Ask a question about EDBA..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 px-3.5 py-2 text-xs rounded-full border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none bg-slate-50 placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="h-8 w-8 rounded-full bg-blue-600 hover:bg-blue-700 disabled:opacity-30 disabled:hover:bg-blue-600 text-white flex items-center justify-center flex-shrink-0 transition-colors cursor-pointer"
                  aria-label="Send query"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Security & Bot Footnote */}
              <div className="flex items-center justify-center gap-1.5 mt-2 text-[10.5px] text-slate-400">
                <span>Chat automated via EDBA AI Bot • Institutional Privacy Protected</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ChatbotModal;
