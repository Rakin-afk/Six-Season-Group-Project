# Six Season Group - Enterprise Full-Stack Web Application

A premium, high-fidelity enterprise web application built using the modern full-stack ecosystem. The platform features an ultra-responsive frontend architecture, glassmorphism UI elements, dynamic intersection-observer driven scroll animations, and interactive data visualization charts.

##  Tech Stack & Core Architecture

### Frontend (Client-Side)
* **Framework:** React.js (with Hooks, `useRef`, `useEffect`, and Functional Components)
* **Styling Ecosystem:** Tailwind CSS (Utility-first CSS, Custom Gradients, Backdrop Filters for Glassmorphism)
* **State Management:** React Context API / Component-level Local State
* **Animation Engine:** Pure Tailwind CSS Transitions integrated with native Web APIs (`IntersectionObserver`)
* **Icons:** Dynamic SVG Integration / Lucide React

### Backend & Operations (Target Infrastructure)
* **Automation Hub:** n8n Workflow Automation / Flowise AI Agent Integration (For handling multi-agent lead parsing and RFQ pipeline automation)
* **Data Layer:** Relational DB (SQL Engine for managing buyer metrics, quote submissions, and user data)

---

##  Key Architectural Features Built In

### 1. Dynamic Performance Scale & Data Visualization
* Implemented a custom, responsive 5-column vertical progress chart displaying enterprise operational metrics (`Quality`, `Delivery`, `Buyer Satisfaction`, etc.).
* Engineered using a bottom-origin scale mechanism driven by standard reactive breakpoints.

### 2. Intersection Observer Driven Scroll Animations
* Rather than bloating the production bundle with heavy external libraries (like Framer Motion or AOS), a lightweight, bulletproof animation lifecycle was implemented using the native **Web Intersection Observer API**.
* **Mechanism:** Tracks viewport entry with a `0.2` threshold, triggers a state-switch (`isAnimated`), and dynamically transitions Tailwind properties (`h-0` to full explicit heights with a `duration-1000 ease-out` curve).

### 3. High-Fidelity Form UI & Glassmorphism Design
* Developed an elegant **"Request a Quote"** section using an asymmetric dual-column grid framework.
* Incorporates floating container cards with deep shadow backing and a custom light-mint input design (`bg-[#EDFAEE]`).
* Contact communication badges are rendered using crisp **Glassmorphism**, leveraging `backdrop-blur-md`, variable opacity border mapping (`border-white/25`), and specular hover highlight reflections (`hover:bg-white/20`).

### 4. Modular Footer Framework
* Designed a clean, semantically structured 4-column corporate footer architecture with responsive grid splitting (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`).
* Includes structured link routing arrays for `Popular Pages`, `Sister Concerns`, and `More Info`, supported by an isolated global copy-wrapper and absolute hover state transitions for social graph indexing.

---

##  Repository Directory Structure

```text
├── public/                 # Static assets (Logos, Web Manifests)
├── src/
│   ├── assets/             # Global media vectors and iconography
│   ├── components/         # Reusable UI Atoms and Molecules (Buttons, Inputs, Badges)
│   ├── pages/
│   │   └── Home.jsx        # Core Hub - Hosts Full-Stack Sections (Hero, Scale Chart, Quote Form, Footer)
│   ├── App.jsx             # Root Routing & Layout Configuration
│   └── main.jsx            # Application Context Initialization
├── package.json            # Dependency Manifest
├── tailwind.config.js      # Custom Token Extend & Design System Configurations
└── README.md               # Architecture Documentation
