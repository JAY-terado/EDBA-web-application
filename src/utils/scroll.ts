/**
 * Smoothly scrolls to a page section by element ID without adding '#' to the browser URL bar.
 * If currently on another page, navigates to home ('/') first.
 */
export const scrollToSection = (
  targetId: string,
  pathname: string,
  navigate?: (path: string) => void
) => {
  const cleanId = targetId.replace(/^#/, "");

  if (pathname !== "/" && navigate) {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(cleanId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 120);
  } else {
    const el = document.getElementById(cleanId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Ensure browser address bar never contains '#'
  if (window.location.hash) {
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
  }
};
