"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Building, Mail, Phone, User, Users, UsersRound, MapPin } from "lucide-react";

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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
      setFormData({
        name: "",
        contactNo: "",
        email: "",
        instituteName: "",
        studentsCount: "",
        employeesCount: "",
        address: "",
      });
      setErrors({});
    };

    window.addEventListener("open-demo-modal", handleOpen);
    return () => window.removeEventListener("open-demo-modal", handleOpen);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    if (!formData.contactNo.trim()) tempErrors.contactNo = "Contact number is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email";
    }
    if (!formData.instituteName.trim()) tempErrors.instituteName = "Institute name is required";
    if (!formData.studentsCount.trim()) tempErrors.studentsCount = "Number of students is required";
    if (!formData.employeesCount.trim()) tempErrors.employeesCount = "Number of employees is required";
    if (!formData.address.trim()) tempErrors.address = "Institute address is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSuccess(true);
      // Wait for 3.5s then close the modal
      setTimeout(() => {
        setIsOpen(false);
      }, 3500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-zinc-950/60 backdrop-blur-md cursor-pointer"
          ></motion.div>

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-xl bg-[#f1f3f6] rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/60 overflow-hidden"
          >
            {/* Soft backdrop radial highlights matching EDBA branding */}
            <div className="absolute -top-12 -right-12 h-36 w-36 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-12 -left-12 h-36 w-36 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#f1f3f6] border border-white/80 hover:bg-zinc-200/50 shadow-md text-zinc-500 hover:text-zinc-900 transition-all z-10"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            {isSuccess ? (
              /* Success Anim Card */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-10 text-center relative z-10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6 border border-emerald-200"
                >
                  <CheckCircle2 className="h-10 w-10 fill-emerald-50" />
                </motion.div>
                <h3 className="font-display font-extrabold text-2xl text-zinc-900 mb-2">
                  Demo Booked Successfully!
                </h3>
                <p className="text-zinc-500 text-sm max-w-sm leading-relaxed mb-6 font-normal">
                  Thank you for your request. Our education product specialist will contact you on your registered contact number to schedule a personalized walkthrough.
                </p>
                <div className="text-xs font-semibold text-blue-600 px-4 py-2 rounded-full neu-pill-inset">
                  Scheduling EDBA Suite Walkthrough...
                </div>
              </motion.div>
            ) : (
              /* Form State */
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="font-display font-extrabold text-2xl text-zinc-900 mb-1">
                    Book a Free Demo
                  </h3>
                  <p className="text-zinc-500 text-xs font-normal">
                    Experience the next-generation AI LMS for school management. Complete this form to begin.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
                  {/* Grid 2 Columns for Personal Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. John Doe"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-[#f1f3f6] neu-card-inset border border-white/20 focus:outline-none focus:border-blue-500 text-zinc-800 font-semibold"
                        />
                      </div>
                      {errors.name && <p className="text-[10px] text-red-500 mt-1 font-semibold">{errors.name}</p>}
                    </div>

                    {/* Contact No. */}
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-1">
                        Contact Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                        <input
                          type="tel"
                          name="contactNo"
                          value={formData.contactNo}
                          onChange={handleChange}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-[#f1f3f6] neu-card-inset border border-white/20 focus:outline-none focus:border-blue-500 text-zinc-800 font-semibold"
                        />
                      </div>
                      {errors.contactNo && <p className="text-[10px] text-red-500 mt-1 font-semibold">{errors.contactNo}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. administrator@institute.edu"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-[#f1f3f6] neu-card-inset border border-white/20 focus:outline-none focus:border-blue-500 text-zinc-800 font-semibold"
                      />
                    </div>
                    {errors.email && <p className="text-[10px] text-red-500 mt-1 font-semibold">{errors.email}</p>}
                  </div>

                  {/* Institute Name */}
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-1">
                      Institute Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                      <input
                        type="text"
                        name="instituteName"
                        value={formData.instituteName}
                        onChange={handleChange}
                        placeholder="e.g. Sterling Day School"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-[#f1f3f6] neu-card-inset border border-white/20 focus:outline-none focus:border-blue-500 text-zinc-800 font-semibold"
                      />
                    </div>
                    {errors.instituteName && <p className="text-[10px] text-red-500 mt-1 font-semibold">{errors.instituteName}</p>}
                  </div>

                  {/* Grid 2 Columns for Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Number of Students */}
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-1">
                        Number of Students
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                        <input
                          type="text"
                          name="studentsCount"
                          value={formData.studentsCount}
                          onChange={handleChange}
                          placeholder="e.g. 1500+"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-[#f1f3f6] neu-card-inset border border-white/20 focus:outline-none focus:border-blue-500 text-zinc-800 font-semibold"
                        />
                      </div>
                      {errors.studentsCount && <p className="text-[10px] text-red-500 mt-1 font-semibold">{errors.studentsCount}</p>}
                    </div>

                    {/* Number of Employees */}
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-1">
                        Number of Employees
                      </label>
                      <div className="relative">
                        <UsersRound className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                        <input
                          type="text"
                          name="employeesCount"
                          value={formData.employeesCount}
                          onChange={handleChange}
                          placeholder="e.g. 120+"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-[#f1f3f6] neu-card-inset border border-white/20 focus:outline-none focus:border-blue-500 text-zinc-800 font-semibold"
                        />
                      </div>
                      {errors.employeesCount && <p className="text-[10px] text-red-500 mt-1 font-semibold">{errors.employeesCount}</p>}
                    </div>
                  </div>

                  {/* Address of Institute */}
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-1">
                      Address of Institute
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-3 h-4 w-4 text-zinc-400" />
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows={2}
                        placeholder="e.g. Block C, Connaught Place, New Delhi, India"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-[#f1f3f6] neu-card-inset border border-white/20 focus:outline-none focus:border-blue-500 text-zinc-800 font-semibold resize-none"
                      />
                    </div>
                    {errors.address && <p className="text-[10px] text-red-500 mt-1 font-semibold">{errors.address}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all neu-btn-blue text-center block cursor-pointer"
                    >
                      Submit Demo Request
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
