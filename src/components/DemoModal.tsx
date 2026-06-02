"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Building2, Mail, Phone, User, Users, UsersRound, MapPin, ArrowRight, Sparkles, Shield, Zap } from "lucide-react";

const BENEFITS = [
  "Setup in under 48 hours",
  "Dedicated onboarding specialist",

  "30-day full-feature trial",
];

const TRUST_STATS = [
  { value: "500+", label: "Institutes" },
  { value: "1.2M+", label: "Students" },
  { value: "98%", label: "Satisfaction" },
];

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    email: "",
    instituteName: "",
    studentsCount: "",
    employeesCount: "",
    address: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setIsSuccess(false);
      setLoading(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const e: { [k: string]: string } = {};
    if (!formData.name.trim()) e.name = "Required";
    if (!formData.contactNo.trim()) e.contactNo = "Required";
    if (!formData.email.trim()) e.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Invalid email";
    if (!formData.instituteName.trim()) e.instituteName = "Required";
    if (!formData.studentsCount.trim()) e.studentsCount = "Required";
    if (!formData.employeesCount.trim()) e.employeesCount = "Required";
    if (!formData.address.trim()) e.address = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
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
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-zinc-950/70 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.35)] flex flex-col lg:flex-row"
            style={{ maxHeight: "92vh" }}
          >
            {/* ── Left panel ── */}
            <div className="hidden lg:flex lg:w-[42%] flex-col justify-between p-10 bg-gradient-to-br from-[#1a56db] via-[#0e7490] to-[#0d9488] relative overflow-hidden">
              {/* Decorative blobs */}
              <div className="absolute -top-16 -left-16 h-48 w-48 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 h-64 w-64 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute top-1/2 -right-8 h-32 w-32 bg-cyan-300/15 rounded-full blur-2xl" />

              {/* Brand */}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-[0_12px_30px_-10px_rgba(0,0,0,0.15)] border border-white/40 mb-10 group transition-all duration-300 hover:bg-white">
                  <img src="/logo.png" alt="EDBA" className="h-6 w-auto" />
                </div>

                <div className="mb-8">
                  <h2 className="font-display font-extrabold text-3xl text-white leading-tight mb-4">
                    See EDBA in action — live, with your data
                  </h2>
                  <p className="text-white/75 text-sm leading-relaxed">
                    Get a personalized walkthrough from our education specialists and see exactly how EDBA transforms institute operations.
                  </p>
                </div>

                {/* Benefits */}
                <ul className="space-y-3">
                  {BENEFITS.map((b, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/90">
                      <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 border border-white/30">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust stats */}
              <div className="relative z-10">
                <div className="h-px bg-white/20 mb-6" />
                <p className="text-white/50 text-[10px] uppercase tracking-widest font-semibold mb-4">Trusted across India</p>
                <div className="flex gap-6">
                  {TRUST_STATS.map((s, i) => (
                    <div key={i}>
                      <div className="text-2xl font-extrabold text-white font-display">{s.value}</div>
                      <div className="text-[11px] text-white/60 font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* ── Right panel: Form ── */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center justify-between px-7 pt-7 pb-5 border-b border-zinc-100 flex-shrink-0">
                <div>
                  <h3 className="font-display font-bold text-xl text-zinc-900 leading-tight">
                    Book Your Free Demo
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">Typically responds within 2 business hours</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 rounded-full flex items-center justify-center border border-zinc-200 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-all flex-shrink-0"
                >
                  <X className="h-4 w-4" />
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
                      className="flex flex-col items-center justify-center h-full py-16 px-8 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.15, 1] }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="h-20 w-20 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center mb-6"
                      >
                        <CheckCircle2 className="h-10 w-10 text-emerald-500 fill-emerald-50" />
                      </motion.div>
                      <h3 className="font-display font-extrabold text-2xl text-zinc-900 mb-2">You&apos;re all set! 🎉</h3>
                      <p className="text-zinc-500 text-sm max-w-sm leading-relaxed mb-8">
                        Our education specialist will reach out on <span className="font-semibold text-zinc-700">{formData.contactNo || "your number"}</span> within 2 business hours to schedule your personalized walkthrough.
                      </p>
                      <div className="flex items-center gap-6 text-xs text-zinc-400">
                        <div className="flex items-center gap-1.5">
                          <Shield className="h-3.5 w-3.5 text-emerald-500" />
                          Your data is secure
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Zap className="h-3.5 w-3.5 text-blue-500" />
                          No credit card needed
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
                      className="p-7 space-y-5"
                    >
                      {/* Row 1: Name + Contact */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field
                          label="Full Name"
                          name="name"
                          placeholder="e.g. Rajesh Sharma"
                          value={formData.name}
                          onChange={handleChange}
                          error={errors.name}
                          icon={<User className="h-4 w-4" />}
                        />
                        <Field
                          label="Contact Number"
                          name="contactNo"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.contactNo}
                          onChange={handleChange}
                          error={errors.contactNo}
                          icon={<Phone className="h-4 w-4" />}
                        />
                      </div>

                      {/* Email */}
                      <Field
                        label="Work Email"
                        name="email"
                        type="email"
                        placeholder="principal@institute.edu"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        icon={<Mail className="h-4 w-4" />}
                      />

                      {/* Institute Name */}
                      <Field
                        label="Institute Name"
                        name="instituteName"
                        placeholder="e.g. Sterling International School"
                        value={formData.instituteName}
                        onChange={handleChange}
                        error={errors.instituteName}
                        icon={<Building2 className="h-4 w-4" />}
                      />

                      {/* Row 2: Students + Employees */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field
                          label="Number of Students"
                          name="studentsCount"
                          placeholder="e.g. 1,500"
                          value={formData.studentsCount}
                          onChange={handleChange}
                          error={errors.studentsCount}
                          icon={<Users className="h-4 w-4" />}
                        />
                        <Field
                          label="Number of Employees"
                          name="employeesCount"
                          placeholder="e.g. 120"
                          value={formData.employeesCount}
                          onChange={handleChange}
                          error={errors.employeesCount}
                          icon={<UsersRound className="h-4 w-4" />}
                        />
                      </div>

                      {/* Address */}
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-1.5">
                          Institute Address
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3.5 top-3 h-4 w-4 text-zinc-400" />
                          <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                const form = e.currentTarget.form;
                                if (form) {
                                  form.requestSubmit();
                                }
                              }
                            }}
                            rows={2}
                            placeholder="Block C, Connaught Place, New Delhi, India"
                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border transition-all resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-zinc-50 placeholder:text-zinc-300 text-zinc-800 ${errors.address ? "border-red-300 bg-red-50/30" : "border-zinc-200 hover:border-zinc-300"}`}
                          />
                        </div>
                        {errors.address && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.address}</p>}
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                      >
                        {loading ? (
                          <>
                            <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Request My Free Demo
                            <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </button>

                      {/* Fine print */}
                      <p className="text-center text-[11px] text-zinc-400 leading-relaxed">
                        By submitting, you agree to our{" "}
                        <a 
                          href="/privacy" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-zinc-600 underline underline-offset-2 cursor-pointer hover:text-blue-600 transition-colors"
                        >
                          Privacy Policy
                        </a>
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
  label, name, type = "text", placeholder, value, onChange, error, icon,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  icon: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-1.5">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400">{icon}</span>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-zinc-50 placeholder:text-zinc-300 text-zinc-800 ${error ? "border-red-300 bg-red-50/30" : "border-zinc-200 hover:border-zinc-300"
            }`}
        />
      </div>
      {error && <p className="text-[11px] text-red-500 mt-1 font-medium">{error}</p>}
    </div>
  );
}
