"use client";

import { motion } from "motion/react";
import { Card } from "./ui/Card";
import Link from "next/link";

interface ProcessStep {
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  output: string;
  slug: string;
  isImportant?: boolean;
}

const steps: ProcessStep[] = [
  {
    title: "Discovery",
    subtitle: "Requirement Phase",
    icon: "🧠",
    description: "Understand needs, audience, and budget. Output: SRS Document.",
    output: "SRS",
    slug: "discovery"
  },
  {
    title: "Strategy",
    subtitle: "Sitemap & Features",
    icon: "🧩",
    description: "Plan features, tech stack (Next.js), and SEO roadmap.",
    output: "Roadmap",
    slug: "strategy"
  },
  {
    title: "UI/UX",
    subtitle: "High-Fidelity",
    icon: "🎨",
    description: "Figma design with a mobile-first, premium branding approach.",
    output: "Final Design",
    slug: "ui-ux"
  },
  {
    title: "Frontend",
    subtitle: "Interactive UI",
    icon: "⚙️",
    description: "Next.js UI development with smooth animations and UX polish.",
    output: "Live UI",
    slug: "frontend"
  },
  {
    title: "Backend",
    subtitle: "Database & Logic",
    icon: "🔧",
    description: "API build, Authentication, and Database (MongoDB) setup.",
    output: "Full Logic",
    slug: "backend"
  },
  {
    title: "Integration",
    subtitle: "Connection",
    icon: "🔗",
    description: "Payment gateways (Razorpay/Stripe) and Email systems.",
    output: "Connected App",
    slug: "integration"
  },
  {
    title: "Testing",
    subtitle: "Quality Check",
    icon: "🧪",
    description: "Rigorous bug, speed, and security testing for stability.",
    output: "Stable Build",
    slug: "testing"
  },
  {
    title: "Deployment",
    subtitle: "Launch",
    icon: "🚀",
    description: "VPS/Cloud setup with Domain, SSL, and CI/CD pipelines.",
    output: "Live Product",
    slug: "deployment"
  },
  {
    title: "CRM System",
    subtitle: "🔥 REVENUE CORE",
    icon: "📊",
    description: "MOST IMPORTANT: Admin dashboard, Automation, and Analytics.",
    output: "Growth Engine",
    isImportant: true,
    slug: "crm-system"
  },
  {
    title: "Scaling",
    subtitle: "Maintenance",
    icon: "🔄",
    description: "Regular updates, backups, and future scaling upgrades.",
    output: "Long-term Value",
    slug: "maintenance"
  }
];

/**
 * ProcessSection Component
 * ------------------------
 * A logic-driven 10-step roadmap that adapts to different viewports with unique layouts.
 * 
 * Layout Strategy:
 * - Mobile (< lg): Optimized 2-column grid (`grid-cols-2`) for maximum density and readability.
 * - Desktop (lg+): High-fidelity horizontal snapping scroll with discrete phases (1-5 and 6-10).
 * 
 * Key Logic:
 * - `StepCard`: Reusable atomic component that scales its UI based on the `lg` breakpoint.
 * - Animation: Staggered entry animations using Framer Motion constants.
 */
export function ProcessSection() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 mb-20">
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500"
          >
            Epic Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl font-bold text-slate-950 md:text-6xl"
          >
            The Product Roadmap
          </motion.h2>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:gap-12">
        {/* Phase 1: Core Build */}
        <div className="relative">
          <div className="container mx-auto px-6 mb-4 lg:mb-8">
            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex h-7 w-7 lg:h-8 lg:w-8 items-center justify-center rounded-lg bg-orange-500 text-white text-xs lg:text-sm">01</span>
              Phase 01: Core Development
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:flex lg:flex-row lg:overflow-x-auto pb-10 lg:pb-24 pt-12 px-4 md:px-6 lg:px-24 lg:hide-scrollbar gap-2 lg:gap-8 lg:snap-x lg:snap-mandatory">
            {steps.slice(0, 5).map((step, index) => (
              <StepCard key={step.title} step={step} index={index} />
            ))}
            {/* Spacer for right balance (desktop only) */}
            <div className="hidden lg:block flex-shrink-0 w-1 md:w-10" />
          </div>
        </div>

        {/* Phase 2: Success & Scale */}
        <div className="relative">
          <div className="container mx-auto px-6 mb-4 lg:mb-8">
            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex h-7 w-7 lg:h-8 lg:w-8 items-center justify-center rounded-lg bg-orange-500 text-white text-xs lg:text-sm">02</span>
              Phase 02: Growth & Scaling
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:flex lg:flex-row lg:overflow-x-auto pb-10 lg:pb-24 pt-12 px-4 md:px-6 lg:px-24 lg:hide-scrollbar gap-2 lg:gap-8 lg:snap-x lg:snap-mandatory">
            {steps.slice(5, 10).map((step, index) => (
              <StepCard key={step.title} step={step} index={index + 5} />
            ))}
            {/* Spacer for right balance (desktop only) */}
            <div className="hidden lg:block flex-shrink-0 w-1 md:w-10" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

function StepCard({ step, index }: { step: ProcessStep; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index < 5 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 5) * 0.1 }}
      className="flex-shrink-0 w-full lg:w-[245px] snap-center group relative"
    >
      <Link href={`/process/${step.slug}`}>
        {/* Flow arrow indicator (visible on lg+) */}
        {index !== 4 && index !== 9 && (
          <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 items-center justify-center">
            <span className="text-xl text-orange-400 group-hover:text-orange-500 transition-colors animate-pulse">→</span>
          </div>
        )}

        <Card className={`flex flex-col min-h-[160px] lg:h-[240px] rounded-2xl lg:rounded-3xl p-4 lg:p-6 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/10 lg:hover:-translate-y-2 ${
          step.isImportant ? "border-orange-500 bg-orange-50/70" : "bg-white/80 border-white/60"
        } backdrop-blur-xl border`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-xl bg-orange-100 text-lg lg:text-xl group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </span>
              <div>
                <p className="text-[8px] lg:text-[10px] font-bold uppercase tracking-widest text-orange-500">Step {String(index + 1).padStart(2, '0')}</p>
                <h4 className="text-sm lg:text-base font-bold text-slate-900">{step.title}</h4>
              </div>
            </div>
            {step.isImportant && (
              <span className="rounded-full bg-orange-500 px-2 py-0.5 text-[7px] font-bold text-white uppercase tracking-tighter animate-pulse">
                HOT
              </span>
            )}
          </div>

          <div className="mt-3 lg:mt-4 flex-1">
             <p className="text-[8px] lg:text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">{step.subtitle}</p>
             <p className="text-[11px] lg:text-xs leading-relaxed text-slate-600 line-clamp-2 lg:line-clamp-3 group-hover:line-clamp-none transition-all">{step.description}</p>
          </div>

          <div className="mt-3 lg:mt-4 flex items-center justify-between border-t border-slate-100/50 pt-3 lg:pt-4">
             <div className="flex items-center gap-2">
               <span className="text-[8px] lg:text-[9px] font-bold text-orange-600 uppercase tracking-tighter">Deliverable:</span>
               <span className="text-[9px] lg:text-[10px] font-bold text-slate-800">{step.output}</span>
             </div>
             <span className="text-[9px] lg:text-[10px] text-slate-300 font-bold">0{index + 1}</span>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
