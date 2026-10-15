import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Search } from "lucide-react";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-between font-sans selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 group cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md p-1 min-h-[44px]"
          >
            <ArrowLeft className="h-4 w-4 text-slate-500 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold text-slate-600 group-hover:text-slate-950 transition-colors">
              Back to Home
            </span>
          </Link>
          <img src="/logo.png" alt="EDBA Logo" className="h-7 w-auto" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-16 flex-grow flex flex-col items-center justify-center text-center">
        <div className="h-20 w-20 rounded-3xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-blue-600 mb-6 shadow-sm">
          <Search className="h-10 w-10" aria-hidden="true" />
        </div>

        <span className="text-xs font-bold tracking-wider uppercase text-blue-700 bg-blue-50/90 px-3.5 py-1.5 rounded-full border border-blue-200/70 mb-4 inline-block">
          Error 404
        </span>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 tracking-tight">
          Page Not Found
        </h1>

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
          The page you are looking for doesn&apos;t exist or has been moved to another location.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md shadow-blue-500/20 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          <span>Return to Homepage</span>
        </Link>
      </main>

      {/* Footer */}
      <footer className="w-full bg-slate-900 py-6 text-center text-slate-400 text-xs font-medium tracking-wide border-t border-slate-800">
        © Copyright 2026 EDBA Software LLP. All Rights Reserved.
      </footer>
    </div>
  );
};

export default NotFoundPage;
