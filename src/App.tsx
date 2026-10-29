import React, { useEffect } from "react";
import AppRoutes from "@/routes/AppRoutes";

export const App: React.FC = () => {
  useEffect(() => {
    // Strip '#' from URL on initial load or if hashchange occurs
    const cleanHash = () => {
      if (window.location.hash) {
        const targetId = window.location.hash.replace("#", "");
        // Remove '#' from browser address bar immediately without reloading
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search
        );
        if (targetId) {
          setTimeout(() => {
            const el = document.getElementById(targetId);
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }, 120);
        }
      }
    };

    cleanHash();
    window.addEventListener("hashchange", cleanHash);
    return () => window.removeEventListener("hashchange", cleanHash);
  }, []);

  return <AppRoutes />;
};

export default App;
