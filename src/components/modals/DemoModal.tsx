import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Building2, Mail, Phone, User, Users, UsersRound, MapPin, ArrowRight, Shield, Zap, AlertCircle } from "lucide-react";
import { siteStats } from "@/data/siteStats";

const BENEFITS = [
  "Setup in under 48 hours",
  "Dedicated onboarding specialist",
  "30-day full-feature trial",
];

const TRUST_STATS = [
  { value: siteStats.institutes.display, label: "Institutes" },
  { value: siteStats.students.display, label: "Students" },
  { value: siteStats.uptime.display, label: "Uptime" },
];

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    email: "",
    instituteName: "",
    studentsCount: "",
    employeesCount: "",
    address: "",
  });
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsSuccess(false);
      setLoading(false);
      setHasSubmitted(false);
      setTouched({});
      setFormData({ name: "", contactNo: "", email: "", instituteName: "", studentsCount: "", employeesCount: "", address: "" });
      setErrors({});
    };
    window.addEventListener("open-demo-modal", handleOpen);
    return () => window.removeEventListener("open-demo-modal", handleOpen);
  }, []);

  // Lock body scroll and listen for Escape key down
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  /* ── Contact Number Strict Validation ── */
  const validateContactNo = (value: string, isBlur = false): string => {
    const trimmed = value.trim();
    if (!trimmed) {
      return isBlur || hasSubmitted ? "Contact number is required" : "";
    }

    const cleaned = trimmed.replace(/[\s\-()]/g, "");

    // International starting with +
    if (cleaned.startsWith("+")) {
      if (cleaned.startsWith("+91")) {
        const rest = cleaned.slice(3);
        if (!rest) {
          return isBlur || hasSubmitted ? "Please enter your 10-digit mobile number" : "";
        }
        if (!/^[6-9]/.test(rest)) {
          return "Indian mobile number must start with 6, 7, 8, or 9";
        }
        if (rest.length < 10) {
          return isBlur || hasSubmitted ? "Indian mobile number must be exactly 10 digits" : "";
        }
        if (rest.length === 10) {
          if (/^(\d)\1{9}$/.test(rest)) {
            return "Please enter a valid, non-repetitive phone number";
          }
          return "";
        }
        return "Indian mobile number must be exactly 10 digits";
      } else {
        if (!/^\+[1-9]\d{7,14}$/.test(cleaned)) {
          return isBlur || hasSubmitted || cleaned.length >= 8
            ? "Please enter a valid international phone number with country code"
            : "";
        }
        return "";
      }
    }

    // Standard number without +
    let number = cleaned;
    if (number.length > 10 && number.startsWith("91")) {
      number = number.slice(2);
    } else if (number.length > 10 && number.startsWith("0")) {
      number = number.slice(1);
    }

    // 1. Immediately flag invalid starting digits (Indian mobile numbers start with 6, 7, 8, or 9)
    if (!/^[6-9]/.test(number)) {
      return "Mobile number must start with 6, 7, 8, or 9";
    }

    // 2. Check length
    if (number.length < 10) {
      return isBlur || hasSubmitted ? "Contact number must be exactly 10 digits" : "";
    }

    if (number.length === 10) {
      if (/^(\d)\1{9}$/.test(number)) {
        return "Please enter a valid, non-repetitive phone number";
      }
      return "";
    }

    return "Contact number must be exactly 10 digits";
  };

  /* ── Field Validation ── */
  const validateField = (name: string, value: string): string => {
    const trimmed = value.trim();

    switch (name) {
      case "name": {
        if (!trimmed) return "Full name is required";
        if (trimmed.length < 2) return "Name must be at least 2 characters";
        if (trimmed.length > 60) return "Name cannot exceed 60 characters";
        if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
          return "Name should only contain letters and spaces";
        }
        const letterCount = (trimmed.match(/[a-zA-Z]/g) || []).length;
        if (letterCount < 2) return "Please enter a valid full name";
        return "";
      }

      case "contactNo": {
        return validateContactNo(value, true);
      }

      case "email": {
        if (!trimmed) return "Work email is required";
        if (trimmed.length > 100) return "Email cannot exceed 100 characters";
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(trimmed) || trimmed.includes("..")) {
          return "Please enter a valid email address (e.g. principal@institute.edu)";
        }
        return "";
      }

      case "instituteName": {
        if (!trimmed) return "Institute name is required";
        if (trimmed.length < 3) return "Institute name must be at least 3 characters";
        if (trimmed.length > 120) return "Institute name cannot exceed 120 characters";
        if (!/[a-zA-Z]/.test(trimmed)) return "Institute name must contain letters";
        return "";
      }

      case "studentsCount": {
        if (!trimmed) return "";
        if (!/^\d+$/.test(trimmed)) return "Students count must be digits only";
        const num = parseInt(trimmed, 10);
        if (num < 1) return "Must have at least 1 student";
        if (num > 500000) return "Please enter a realistic student count (max 500,000)";
        return "";
      }

      case "employeesCount": {
        if (!trimmed) return "";
        if (!/^\d+$/.test(trimmed)) return "Employees count must be digits only";
        const num = parseInt(trimmed, 10);
        if (num < 1) return "Must have at least 1 employee";
        if (num > 50000) return "Please enter a realistic employee count (max 500,000)";
        return "";
      }

      case "address": {
        if (!trimmed) return "";
        if (trimmed.length < 8) return "Please enter a valid address (minimum 8 characters)";
        if (trimmed.length > 300) return "Address cannot exceed 300 characters";
        if (!/[a-zA-Z]/.test(trimmed)) return "Address must contain valid location text";
        return "";
      }

      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    // Strict keystroke input sanitization
    if (name === "studentsCount" || name === "employeesCount") {
      sanitizedValue = value.replace(/\D/g, "");
    } else if (name === "contactNo") {
      // Allow +, digits, space, hyphen, parentheses
      sanitizedValue = value.replace(/[^\d+\s\-()]/g, "");

      // If standard number (not starting with +), clamp digits to max 10 (or 11 with 0, 12 with 91)
      if (!sanitizedValue.startsWith("+")) {
        const rawDigits = sanitizedValue.replace(/\D/g, "");
        if (rawDigits.startsWith("91") && rawDigits.length > 10) {
          if (rawDigits.length > 12) sanitizedValue = rawDigits.slice(0, 12);
        } else if (rawDigits.startsWith("0") && rawDigits.length > 10) {
          if (rawDigits.length > 11) sanitizedValue = rawDigits.slice(0, 11);
        } else if (rawDigits.length > 10) {
          sanitizedValue = rawDigits.slice(0, 10);
        }
      } else if (sanitizedValue.length > 16) {
        sanitizedValue = sanitizedValue.slice(0, 16);
      }
    } else if (name === "name") {
      sanitizedValue = value.replace(/[^a-zA-Z\s.'-]/g, "");
    }

    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
    setTouched(prev => ({ ...prev, [name]: true }));

    // Real-time validation for Contact Number (instant warning if prefix is invalid or valid length reached)
    if (name === "contactNo") {
      const err = validateContactNo(sanitizedValue, false);
      setErrors(prev => ({ ...prev, contactNo: err }));
    } else if (touched[name] || hasSubmitted) {
      const err = validateField(name, sanitizedValue);
      setErrors(prev => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const err = name === "contactNo" ? validateContactNo(value, true) : validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: err }));
  };

  const validateAll = (): boolean => {
    const newErrors: { [k: string]: string } = {};
    const allTouched: { [k: string]: boolean } = {};
    let firstErrorField: string | null = null;

    (Object.keys(formData) as Array<keyof typeof formData>).forEach((field) => {
      allTouched[field] = true;
      const err = field === "contactNo" ? validateContactNo(formData.contactNo, true) : validateField(field, formData[field]);
      if (err) {
        newErrors[field] = err;
        if (!firstErrorField) firstErrorField = field;
      }
    });

    setTouched(allTouched);
    setErrors(newErrors);

    if (firstErrorField) {
      const el = document.getElementById(`demo-${firstErrorField === "contactNo" ? "contact" : firstErrorField === "studentsCount" ? "students" : firstErrorField === "employeesCount" ? "employees" : firstErrorField === "instituteName" ? "institute" : firstErrorField}`);
      el?.focus();
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);
    if (!validateAll()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSuccess(true);
      setTimeout(() => setIsOpen(false), 4000);
    }, 1800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
        >
          {/* Backdrop with Apple translucent blur */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-950/65 backdrop-blur-xl"
          />

          {/* Modal Container with Apple critically damped spring */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 14 }}
            transition={{ type: "spring", damping: 28, stiffness: 320, mass: 0.85 }}
            className="modal-container relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-[0_30px_90px_-15px_rgba(0,0,0,0.45)] flex flex-col lg:flex-row border border-slate-200/60 max-h-[94vh] sm:max-h-[92vh] modal-nest-hub"
          >
            {/* ── Left panel ── */}
            <div className="hidden lg:flex lg:w-[42%] flex-col justify-between p-6 xl:p-10 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white relative overflow-y-auto modal-left-nest-hub">
              {/* Decorative blobs */}
              <div className="absolute -top-16 -left-16 h-48 w-48 bg-white/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 h-64 w-64 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

              {/* Brand */}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-sm border border-white/40 mb-4 xl:mb-8">
                  <img src="/logo.png" alt="EDBA" className="h-6 w-auto" />
                </div>

                <div className="mb-4 xl:mb-6">
                  <h2 className="font-display font-extrabold text-xl xl:text-3xl text-white leading-tight mb-2 tracking-tight">
                    See EDBA in action — live, with your data
                  </h2>
                  <p className="text-blue-100 text-xs xl:text-sm leading-relaxed font-normal">
                    Get a personalized walkthrough from our education specialists and see exactly how EDBA transforms institute operations.
                  </p>
                </div>

                {/* Benefits */}
                <ul className="space-y-2.5 xl:space-y-3">
                  {BENEFITS.map((b, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs xl:text-sm text-white/95">
                      <div className="h-4.5 w-4.5 xl:h-5 xl:w-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 border border-white/30">
                        <CheckCircle2 className="h-3 w-3 text-white" aria-hidden="true" />
                      </div>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust stats */}
              <div className="relative z-10 pt-4 xl:pt-6">
                <div className="h-px bg-white/20 mb-3 xl:mb-5" />
                <p className="text-white/60 text-[11px] uppercase tracking-widest font-semibold mb-2">Trusted across India</p>
                <div className="flex gap-5 xl:gap-6">
                  {TRUST_STATS.map((s, i) => (
                    <div key={i}>
                      <div className="text-lg xl:text-2xl font-extrabold text-white font-display tracking-tight">{s.value}</div>
                      <div className="text-[11px] xl:text-xs text-white/70 font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right panel: Form ── */}
            <div className="flex-1 flex flex-col overflow-hidden bg-white">
              {/* Top bar */}
              <div className="flex items-center justify-between px-5 sm:px-7 pt-4 sm:pt-6 pb-3.5 sm:pb-4 border-b border-slate-100 flex-shrink-0">
                <div>
                  <h3 id="demo-modal-title" className="font-display font-bold text-lg sm:text-xl text-slate-900 leading-tight">
                    Book Your Free Demo
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">Typically responds within 2 business hours</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close dialog"
                  className="h-9 w-9 rounded-full flex items-center justify-center border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100 active:scale-95 transition-all flex-shrink-0 focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              {/* Form body / Success */}
              <div className="flex-1 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center h-full py-12 sm:py-16 px-6 sm:px-8 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.15, 1] }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="h-16 sm:h-20 w-16 sm:w-20 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center mb-6"
                      >
                        <CheckCircle2 className="h-8 sm:h-10 w-8 sm:w-10 text-emerald-600 fill-emerald-50" aria-hidden="true" />
                      </motion.div>
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 mb-2">You&apos;re all set!</h3>
                      <p className="text-slate-600 text-xs sm:text-sm max-w-sm leading-relaxed mb-6 sm:mb-8">
                        Our education specialist will reach out on <span className="font-semibold text-slate-800">{formData.contactNo || "your number"}</span> within 2 business hours to schedule your personalized walkthrough.
                      </p>
                      <div className="flex items-center gap-6 text-xs text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <Shield className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                          <span>Your data is secure</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Zap className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
                          <span>No credit card needed</span>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="p-5 sm:p-7 space-y-4"
                    >
                      {/* Row 1: Name + Contact */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                        <Field
                          id="demo-name"
                          label="Full Name"
                          name="name"
                          placeholder="e.g. Rajesh Sharma"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.name}
                          maxLength={60}
                          autoComplete="name"
                          icon={<User className="h-4 w-4" aria-hidden="true" />}
                        />
                        <Field
                          id="demo-contact"
                          label="Contact Number"
                          name="contactNo"
                          type="tel"
                          inputMode="tel"
                          placeholder="+91 98765 43210"
                          value={formData.contactNo}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.contactNo}
                          maxLength={
                            formData.contactNo.startsWith("+")
                              ? 16
                              : formData.contactNo.startsWith("91")
                              ? 12
                              : formData.contactNo.startsWith("0")
                              ? 11
                              : 10
                          }
                          autoComplete="tel"
                          icon={<Phone className="h-4 w-4" aria-hidden="true" />}
                        />
                      </div>

                      {/* Email */}
                      <Field
                        id="demo-email"
                        label="Work Email"
                        name="email"
                        type="email"
                        inputMode="email"
                        placeholder="principal@institute.edu"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.email}
                        maxLength={100}
                        autoComplete="email"
                        icon={<Mail className="h-4 w-4" aria-hidden="true" />}
                      />

                      {/* Institute Name */}
                      <Field
                        id="demo-institute"
                        label="Institute Name"
                        name="instituteName"
                        placeholder="e.g. Sterling International School"
                        value={formData.instituteName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.instituteName}
                        maxLength={120}
                        autoComplete="organization"
                        icon={<Building2 className="h-4 w-4" aria-hidden="true" />}
                      />

                      {/* Row 2: Students + Employees (Optional) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                        <Field
                          id="demo-students"
                          label="Number of Students"
                          name="studentsCount"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          placeholder="e.g. 1500"
                          value={formData.studentsCount}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.studentsCount}
                          maxLength={6}
                          required={false}
                          icon={<Users className="h-4 w-4" aria-hidden="true" />}
                        />
                        <Field
                          id="demo-employees"
                          label="Number of Employees"
                          name="employeesCount"
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          placeholder="e.g. 120"
                          value={formData.employeesCount}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.employeesCount}
                          maxLength={5}
                          required={false}
                          icon={<UsersRound className="h-4 w-4" aria-hidden="true" />}
                        />
                      </div>

                      {/* Address (Optional) */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label htmlFor="demo-address" className="block text-xs font-semibold text-slate-700">
                            Institute Address <span className="text-slate-400 font-normal text-[11px]">(Optional)</span>
                          </label>
                        </div>
                        <div className="relative">
                          <MapPin className={`absolute left-3.5 top-3 h-4 w-4 transition-colors pointer-events-none ${errors.address ? "text-red-400" : "text-slate-400"}`} aria-hidden="true" />
                          <textarea
                            id="demo-address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            maxLength={300}
                            rows={2}
                            placeholder="Block C, Connaught Place, New Delhi, India"
                            aria-invalid={!!errors.address}
                            aria-describedby={errors.address ? "demo-address-error" : undefined}
                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border transition-all resize-none focus:outline-none focus:ring-2 bg-slate-50 placeholder:text-slate-400 text-slate-900 ${
                              errors.address
                                ? "border-red-400 bg-red-50/40 focus:ring-red-500/20 focus:border-red-500"
                                : "border-slate-200 hover:border-slate-300 focus:ring-blue-500/20 focus:border-blue-600"
                            }`}
                          />
                        </div>
                        {errors.address && (
                          <div id="demo-address-error" className="flex items-start gap-1 text-xs text-red-600 mt-1 font-medium">
                            <AlertCircle className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                            <span>{errors.address}</span>
                          </div>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-11 sm:h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 min-h-[44px]"
                      >
                        {loading ? (
                          <>
                            <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" aria-hidden="true" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Request My Free Demo</span>
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </>
                        )}
                      </button>

                      {/* Fine print */}
                      <p className="text-center text-xs text-slate-400 leading-relaxed">
                        By submitting, you agree to our{" "}
                        <Link 
                          to="/privacy" 
                          onClick={() => setIsOpen(false)}
                          className="text-slate-600 underline underline-offset-2 cursor-pointer hover:text-blue-600 transition-colors"
                        >
                          Privacy Policy
                        </Link>
                        . No spam, ever.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/* ── Reusable Field Component ── */
function Field({
  id,
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  icon,
  maxLength,
  inputMode,
  pattern,
  autoComplete,
  required = true,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  icon: React.ReactNode;
  maxLength?: number;
  inputMode?: "text" | "numeric" | "tel" | "email" | "decimal";
  pattern?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label htmlFor={id} className="block text-xs font-semibold text-slate-700">
          {label}{" "}
          {required ? (
            <span className="text-red-500">*</span>
          ) : (
            <span className="text-slate-400 font-normal text-[11px]">(Optional)</span>
          )}
        </label>
      </div>
      <div className="relative">
        <span className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors pointer-events-none ${error ? "text-red-400" : "text-slate-400"}`}>
          {icon}
        </span>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          maxLength={maxLength}
          inputMode={inputMode}
          pattern={pattern}
          autoComplete={autoComplete}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border transition-all focus:outline-none focus:ring-2 bg-slate-50 placeholder:text-slate-400 text-slate-900 ${
            error
              ? "border-red-400 bg-red-50/40 focus:ring-red-500/20 focus:border-red-500"
              : "border-slate-200 hover:border-slate-300 focus:ring-blue-500/20 focus:border-blue-600"
          }`}
        />
      </div>
      {error && (
        <div id={`${id}-error`} className="flex items-start gap-1 text-xs text-red-600 mt-1 font-medium">
          <AlertCircle className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
