# Sabka Saathi | Modern Software Agency Platform

**Sabka Saathi** is a premium, 3D-enhanced software agency landing page built for high conversion and brand authority. It features a custom WebGL liquid orb, real-time performance metrics, and a business-first interactive roadmap.

## 🚀 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org)
- **3D Engine**: [Three.js](https://threejs.org/) via [`@react-three/fiber`](https://github.com/pmndrs/react-three-fiber)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Forms**: [Formspree](https://formspree.io/)
- **Typography**: [Poppins](https://fonts.google.com/specimen/Poppins)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm / pnpm / yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd sabka-sathi
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env.local` file in the root directory and add your Formspree ID:
   ```env
   NEXT_PUBLIC_FORMSPREE_ID=xlgoknzw
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open the site**:
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

- `/app`: Next.js App Router pages and dynamic subpages (`/process`, `/expertise`, `/location`).
- `/components`: Custom UI components organized by section.
  - `/ui`: Reusable atomic components (Button, Card, etc.).
- `/lib`: Utility functions and **centralized content management** (`content.ts`).
- `/public`: Static assets (Logos, SVGs).

## 🎨 Key Features

- **Liquid Orbital Shader**: A custom Fresnel shader implemented in `LiquidOrb3D.tsx` to provide a premium glass-like 3D centerpiece.
- **Dynamic Multi-Page Expansion**: Using Next.js dynamic routes (`[slug]`) to generate 20+ detailed pages from a single template, powered by a centralized content engine in `lib/content.ts`.
- **Interactive Roadmap**: A logic-driven 10-step process section that adapts its grid based on screen size.
- **Micro-interactions**: Subtle hover effects and scroll animations using Framer Motion.
- **GST-Ready Business Profile**: Integrated legal and transparency details for Bihar and Gujarat offices.

## 📝 Adding New Content

To add a new process step, expertise area, or location:

1. Open `lib/content.ts`.
2. Add a new entry to the corresponding `Record` object (e.g., `processContent`, `expertiseContent`).
3. Ensure the `slug` matches the key used in the record.
4. The page will be automatically generated at build time via `generateStaticParams`.

## 📦 Production & Deployment

### Build

To create an optimized production build:
```bash
npm run build
```

### Deployment

The project is optimized for [Vercel](https://vercel.com) but can be hosted on any provider that supports Next.js. Ensure you set the `NEXT_PUBLIC_FORMSPREE_ID` environment variable in your production dashboard.

---

Built with ❤️ by Sabka Saathi Team
