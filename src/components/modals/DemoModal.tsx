import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Building2, Mail, Phone, User, Users, UsersRound, MapPin, ArrowRight, Shield, Zap } from "lucide-react";
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
    if (!formData.name.trim()) e.name = "Full name is required";
    if (!formData.contactNo.trim()) e.contactNo = "Contact number is required";
    if (!formData.email.trim()) e.email = "Work email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Please enter a valid email address";
    if (!formData.instituteName.trim()) e.instituteName = "Institute name is required";
    if (!formData.studentsCount.trim()) e.studentsCount = "Student count is required";
    if (!formData.employeesCount.trim()) e.employeesCount = "Employee count is required";
    if (!formData.address.trim()) e.address = "Address is required";
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
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(15,23,42,0.35)] flex flex-col lg:flex-row border border-slate-200/80 max-h-[94vh] sm:max-h-[92vh] modal-nest-hub"
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
                  className="h-9 w-9 rounded-full flex items-center justify-center border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors flex-shrink-0 focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
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
                          error={errors.name}
                          icon={<User className="h-4 w-4" aria-hidden="true" />}
                        />
                        <Field
                          id="demo-contact"
                          label="Contact Number"
                          name="contactNo"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.contactNo}
                          onChange={handleChange}
                          error={errors.contactNo}
                          icon={<Phone className="h-4 w-4" aria-hidden="true" />}
                        />
                      </div>

                      {/* Email */}
                      <Field
                        id="demo-email"
                        label="Work Email"
                        name="email"
                        type="email"
                        placeholder="principal@institute.edu"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
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
                        error={errors.instituteName}
                        icon={<Building2 className="h-4 w-4" aria-hidden="true" />}
                      />

                      {/* Row 2: Students + Employees */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                        <Field
                          id="demo-students"
                          label="Number of Students"
                          name="studentsCount"
                          placeholder="e.g. 1,500"
                          value={formData.studentsCount}
                          onChange={handleChange}
                          error={errors.studentsCount}
                          icon={<Users className="h-4 w-4" aria-hidden="true" />}
                        />
                        <Field
                          id="demo-employees"
                          label="Number of Employees"
                          name="employeesCount"
                          placeholder="e.g. 120"
                          value={formData.employeesCount}
                          onChange={handleChange}
                          error={errors.employeesCount}
                          icon={<UsersRound className="h-4 w-4" aria-hidden="true" />}
                        />
                      </div>

                      {/* Address */}
                      <div>
                        <label htmlFor="demo-address" className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Institute Address
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" aria-hidden="true" />
                          <textarea
                            id="demo-address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            rows={2}
                            placeholder="Block C, Connaught Place, New Delhi, India"
                            aria-invalid={!!errors.address}
                            aria-describedby={errors.address ? "demo-address-error" : undefined}
                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border transition-all resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-slate-50 placeholder:text-slate-400 text-slate-900 ${
                              errors.address ? "border-red-300 bg-red-50/30" : "border-slate-200 hover:border-slate-300"
                            }`}
                          />
                        </div>
                        {errors.address && <p id="demo-address-error" className="text-xs text-red-600 mt-1 font-medium">{errors.address}</p>}
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
  error,
  icon,
}: {
  id: string;
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
      <label htmlFor={id} className="block text-xs font-semibold text-slate-700 mb-1.5">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">{icon}</span>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 bg-slate-50 placeholder:text-slate-400 text-slate-900 ${
            error ? "border-red-300 bg-red-50/30" : "border-slate-200 hover:border-slate-300"
          }`}
        />
      </div>
      {error && <p id={`${id}-error`} className="text-xs text-red-600 mt-1 font-medium">{error}</p>}
    </div>
  );
}
