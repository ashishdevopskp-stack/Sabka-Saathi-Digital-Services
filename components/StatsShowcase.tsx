"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import CardSwap, { Card } from "./CardSwap";
import { 
  Utensils, 
  GraduationCap, 
  Activity, 
  ShoppingCart, 
  Layers 
} from "lucide-react";

export function StatsShowcase() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50/50 pt-20 md:pt-28 pb-0 lg:pb-0" id="impact">
      {/* Background radial highlights */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/5 blur-3xl rounded-full -ml-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-500/5 blur-3xl rounded-full -mr-36 -mb-36 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Content Area (45% on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-orange-500">OUR IMPACT</p>
            <h2 className="text-3xl md:text-4.5xl font-black text-slate-900 mb-5 tracking-tight leading-tight">
              Empowering Local Businesses Across India
            </h2>
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed mb-8 max-w-lg">
              Helping startups, retailers, service providers, and regional enterprises build scalable websites, mobile apps, and custom software solutions.
            </p>

            {/* Feature Points */}
            <ul className="space-y-3.5 mb-8">
              {[
                "Website Development",
                "Mobile App Development",
                "Custom Software Solutions"
              ].map((point, index) => (
                <li key={index} className="flex items-center text-sm font-bold text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-600 mr-3.5 text-xs font-extrabold select-none">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button variant="primary">Start a Project</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline">View Portfolio</Button>
              </Link>
            </div>
          </div>

          {/* Right Side: CardSwap Showcase (55% on desktop) */}
          <div className="lg:col-span-7 w-full flex justify-center items-center relative h-[420px] sm:h-[480px] md:h-[540px] lg:h-[580px] overflow-visible">
            
            {/* CardSwap Component */}
            <CardSwap
              width={380}
              height={440}
              cardDistance={45}
              verticalDistance={55}
              delay={5000}
              pauseOnHover={true}
              easing="elastic"
            >
              
              {/* Card 1: Restaurant Management Platform */}
              <Card className="flex flex-col h-full w-full overflow-hidden p-0">
                <div className="w-full h-[180px] bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="w-[88%] h-[82%] bg-white/10 backdrop-blur-md border border-white/20 rounded-t-xl mt-7 p-4 flex flex-col justify-start">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center text-white">
                        <Utensils className="w-4 h-4" />
                      </div>
                      <div className="h-3 w-24 bg-white/20 rounded" />
                    </div>
                    <div className="grid grid-cols-3 gap-2.5 mt-2">
                      <div className="h-12 bg-white/15 rounded p-2 flex flex-col justify-between">
                        <span className="text-[9px] text-white/70 font-semibold">Orders</span>
                        <span className="text-[11px] text-white font-black">142</span>
                      </div>
                      <div className="h-12 bg-white/15 rounded p-2 flex flex-col justify-between">
                        <span className="text-[9px] text-white/70 font-semibold">Tables</span>
                        <span className="text-[11px] text-white font-black">12/15</span>
                      </div>
                      <div className="h-12 bg-white/15 rounded p-2 flex flex-col justify-between">
                        <span className="text-[9px] text-white/70 font-semibold">Revenue</span>
                        <span className="text-[11px] text-white font-black">₹48K</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-1 text-left">
                  <div>
                    <span className="rounded bg-orange-500/10 text-orange-600 border border-orange-500/20 text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-md">
                      SaaS Dashboard
                    </span>
                    <h3 className="text-[17px] font-black text-slate-800 tracking-tight mt-3 mb-1.5">
                      Restaurant Management Platform
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                      Modern restaurant ordering, live kitchen tracking, and table reservation solutions.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {["Next.js", "Node.js", "MySQL", "Tailwind"].map((tag) => (
                      <span key={tag} className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Card 2: School ERP System */}
              <Card className="flex flex-col h-full w-full overflow-hidden p-0">
                <div className="w-full h-[180px] bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="w-[88%] h-[82%] bg-white/10 backdrop-blur-md border border-white/20 rounded-t-xl mt-7 p-4 flex flex-col justify-start">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center text-white">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div className="h-3 w-28 bg-white/20 rounded" />
                    </div>
                    <div className="space-y-2.5 mt-2">
                      <div className="flex items-center justify-between bg-white/15 p-2 rounded">
                        <span className="text-[9px] text-white font-bold">Standard 10 - Science</span>
                        <span className="text-[9px] bg-emerald-500/35 text-emerald-300 font-extrabold px-1.5 py-0.5 rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between bg-white/15 p-2 rounded">
                        <span className="text-[9px] text-white font-bold">Total Fees Collected</span>
                        <span className="text-[9px] text-white font-black">₹3.8L</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-1 text-left">
                  <div>
                    <span className="rounded bg-indigo-500/10 text-indigo-600 border border-indigo-500/20 text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-md">
                      Management Software
                    </span>
                    <h3 className="text-[17px] font-black text-slate-800 tracking-tight mt-3 mb-1.5">
                      School ERP System
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                      Comprehensive portal managing student attendance, fees, exams, and staff records.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {["React", "TypeScript", "Node.js", "PostgreSQL"].map((tag) => (
                      <span key={tag} className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Card 3: Healthcare Platform */}
              <Card className="flex flex-col h-full w-full overflow-hidden p-0">
                <div className="w-full h-[180px] bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="w-[88%] h-[82%] bg-white/10 backdrop-blur-md border border-white/20 rounded-t-xl mt-7 p-4 flex flex-col justify-start">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center text-white">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div className="h-3 w-24 bg-white/20 rounded" />
                    </div>
                    <div className="flex gap-3 mt-2">
                      <div className="w-[42%] bg-white/15 rounded p-2 flex flex-col justify-between">
                        <span className="text-[8px] text-white/80">Queue</span>
                        <span className="text-[12px] text-white font-black">4 Patients</span>
                      </div>
                      <div className="w-[58%] bg-white/15 rounded p-2 flex flex-col gap-1.5 justify-center">
                        <div className="h-2 w-full bg-white/20 rounded" />
                        <div className="h-2 w-[80%] bg-white/20 rounded" />
                        <div className="h-2 w-[50%] bg-white/20 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-1 text-left">
                  <div>
                    <span className="rounded bg-rose-500/10 text-rose-600 border border-rose-500/20 text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-md">
                      Medical App
                    </span>
                    <h3 className="text-[17px] font-black text-slate-800 tracking-tight mt-3 mb-1.5">
                      Healthcare Platform
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                      Streamlined appointment scheduling, prescriptions, and digital patient record portals.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {["Next.js", "Flutter", "Supabase", "Serverless"].map((tag) => (
                      <span key={tag} className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Card 4: E-commerce Store */}
              <Card className="flex flex-col h-full w-full overflow-hidden p-0">
                <div className="w-full h-[180px] bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="w-[88%] h-[82%] bg-white/10 backdrop-blur-md border border-white/20 rounded-t-xl mt-7 p-4 flex flex-col justify-start">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center text-white">
                        <ShoppingCart className="w-4 h-4" />
                      </div>
                      <div className="h-3 w-20 bg-white/20 rounded" />
                    </div>
                    <div className="grid grid-cols-2 gap-2.5 mt-2">
                      <div className="bg-white/15 p-2 rounded flex flex-col gap-1.5">
                        <div className="w-full h-5 bg-white/25 rounded" />
                        <div className="h-1.5 w-12 bg-white/20 rounded" />
                      </div>
                      <div className="bg-white/15 p-2 rounded flex flex-col gap-1.5">
                        <div className="w-full h-5 bg-white/25 rounded" />
                        <div className="h-1.5 w-10 bg-white/20 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-1 text-left">
                  <div>
                    <span className="rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-md">
                      E-commerce Web
                    </span>
                    <h3 className="text-[17px] font-black text-slate-800 tracking-tight mt-3 mb-1.5">
                      E-commerce Store
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                      High-converting retail store, digital catalogs, and fast order checkout management.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {["Next.js", "Tailwind CSS", "Vercel", "MongoDB"].map((tag) => (
                      <span key={tag} className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Card 5: Business Automation */}
              <Card className="flex flex-col h-full w-full overflow-hidden p-0">
                <div className="w-full h-[180px] bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="w-[88%] h-[82%] bg-white/10 backdrop-blur-md border border-white/20 rounded-t-xl mt-7 p-4 flex flex-col justify-start">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center text-white">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div className="h-3 w-24 bg-white/20 rounded" />
                    </div>
                    <div className="flex justify-center items-center gap-3 mt-3">
                      <div className="w-10 h-10 rounded bg-white/20 flex items-center justify-center text-white text-[9px] font-bold">Trigger</div>
                      <span className="text-white/60 text-[9px]">→</span>
                      <div className="w-10 h-10 rounded bg-white/25 border border-white/45 flex items-center justify-center text-white text-[9px] font-bold">Action</div>
                      <span className="text-white/60 text-[9px]">→</span>
                      <div className="w-10 h-10 rounded bg-white/20 flex items-center justify-center text-white text-[9px] font-bold">Sync</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-1 text-left">
                  <div>
                    <span className="rounded bg-violet-500/10 text-violet-600 border border-violet-500/20 text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-md">
                      Enterprise Tool
                    </span>
                    <h3 className="text-[17px] font-black text-slate-800 tracking-tight mt-3 mb-1.5">
                      Business Automation
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                      Custom CRM, task workflows, analytics dashboards, and enterprise productivity systems.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {["React", "TypeScript", "Node.js", "Docker"].map((tag) => (
                      <span key={tag} className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>

            </CardSwap>
          </div>

        </div>
      </div>

      {/* Subtle bottom boundary divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent shadow-[0_4px_20px_rgba(255,149,0,0.1)]" />
    </section>
  );
}
