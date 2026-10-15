# EDBA Web Application (React.js SPA)

Modern, high-performance web application for **EDBA Software LLP**, engineered with React 19, Vite 8, Tailwind CSS v4, and React Router 7. Fully responsive across smartphones, tablets, desktop workstations, and smart displays (Google Nest Hub 1024x600 and Nest Hub Max 1280x800).

---

## 🚀 Technology Stack

- **Framework**: [React 19](https://react.dev) (SPA)
- **Bundler & Dev Server**: [Vite 8](https://vite.dev) with manual chunk splitting & ES2020 target
- **Routing**: [React Router 7](https://reactrouter.com) with route-level code splitting & suspense
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with `@tailwindcss/vite`
- **Typography**: Plus Jakarta Sans & Inter with font display swap & CDN preconnect
- **Icons**: [Lucide React](https://lucide.dev)

---

## 📁 Enterprise Folder Structure

```
├── index.html                   # HTML entry point with preconnects, meta tags, and root container
├── vite.config.ts               # Vite configuration with chunk splitting & path aliases
├── tsconfig.json                # Strict TypeScript configuration
├── package.json                 # Scripts and modern dependencies
├── public/                      # Static assets, logos, screenshots, and favicon
└── src/
    ├── main.tsx                 # React DOM root initialization with BrowserRouter
    ├── App.tsx                  # Root application component
    ├── routes/
    │   └── AppRoutes.tsx        # Client-side routes (/, /privacy, 404) with lazy loading
    ├── pages/
    │   ├── HomePage.tsx         # Assembles high-converting marketing & feature sections
    │   ├── PrivacyPage.tsx      # Comprehensive privacy policy
    │   └── NotFoundPage.tsx     # Custom 404 page with return link
    ├── components/
    │   ├── index.ts             # Barrel export for all components
    │   ├── layout/              # Persistent structural components
    │   │   ├── Navbar.tsx       # Sticky navigation with mobile drawer & quick links
    │   │   ├── Footer.tsx       # Comprehensive footer with copyright and privacy route
    │   │   ├── FloatingCta.tsx  # Accessible floating lead trigger
    │   │   └── index.ts
    │   ├── modals/              # Interactive dialog overlays
    │   │   ├── DemoModal.tsx    # Accessible lead capture dialog with real-time feedback
    │   │   └── index.ts
    │   └── sections/            # Feature and marketing showcase modules
    │       ├── Hero.tsx         # 3D interactive preview & smart display compact mode
    │       ├── TrustMetrics.tsx # Live metrics with infinite ticker
    │       ├── Pioneers.tsx     # Trusted institution badges
    │       ├── FeaturesGrid.tsx # Core feature pillars
    │       ├── WhyChooseUs.tsx  # Dynamic tabs comparing workflows
    │       ├── LmsSolutions.tsx # Blueprint solution cards
    │       ├── AiAssistant.tsx  # Dynamic interactive prompt simulation & preview
    │       ├── Academics.tsx    # Curriculum and performance architecture
    │       ├── Assessment.tsx   # Modern exam and test management
    │       ├── Community.tsx    # Communication hub with live chat mockup
    │       ├── MobileApps.tsx   # App Store / Play Store links with OS detection
    │       ├── Cta.tsx          # High-converting conversion banner
    │       ├── Faq.tsx          # Accordion FAQ
    │       ├── Safety.tsx       # Real-time RFID and GPS tracking
    │       ├── Testimonials.tsx # Educator reviews and endorsements
    │       └── index.ts
    └── styles/
        └── index.css            # Tailwind v4 import, font tokens, and smart-display queries
```

---

## ⚡ Multi-Screen & Smart Display Optimization

The application has been engineered to adhere to strict UI/UX guidelines:
- **Smart Displays (Google Nest Hub 1024x600 & Nest Hub Max 1280x800)**:
  - Custom media queries (`@media (max-height: 720px) and (orientation: landscape)`) prevent content clipping and vertical scrolling bottlenecks.
  - Section vertical padding automatically adjusts via `.smart-display-tight:py-12` and `.hero-compact`.
- **Mobile (375px - 640px)**:
  - Accessible 44px minimum touch targets on all interactive elements.
  - Smooth mobile slide-out navigation drawer with focus management.
  - Single column reflow for complex comparison tables and blueprint cards.
- **Tablet (768px - 1024px)**:
  - Balanced 2-column grid arrangements for features, assessments, and solutions.
- **Desktop (1280px - 1920px)**:
  - 1440px max-width container with crisp typography and subtle micro-interactions.

---

## 🛠️ Development & Production Scripts

```bash
# Start Vite development server on http://localhost:3000
npm run dev

# Compile TypeScript and generate optimized production bundle
npm run build

# Preview production build locally
npm run preview
```
