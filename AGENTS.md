# EDBA Web Application Development Guidelines

- **Architecture**: React 19 SPA built with Vite 8, Tailwind CSS v4, and React Router 7.
- **Package Manager**: npm only (`npm run dev`, `npm run build`, `npm run preview`).
- **Folder Structure**:
  - `src/pages/` for route-level page components.
  - `src/routes/` for client-side routing definitions.
  - `src/components/layout/` for structural frames (`Navbar`, `Footer`, `FloatingCta`).
  - `src/components/modals/` for modal dialogs (`DemoModal`).
  - `src/components/sections/` for marketing and feature sections.
  - `src/styles/` for CSS tokens, animations, and smart-display media queries.
