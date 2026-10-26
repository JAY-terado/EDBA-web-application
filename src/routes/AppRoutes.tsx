import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";

// Lazy load non-landing pages for optimal initial load speed
const PrivacyPage = lazy(() => import("@/pages/PrivacyPage"));
const FaqPage = lazy(() => import("@/pages/FaqPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

const RouteFallback: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
    <div className="h-10 w-10 rounded-full border-4 border-blue-600/20 border-t-blue-600 animate-spin" />
  </div>
);

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
