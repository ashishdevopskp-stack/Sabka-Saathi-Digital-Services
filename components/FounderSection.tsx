"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";

export function FounderSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white/50 border-t border-slate-100">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/30 blur-[100px] rounded-full -mr-48 -mt-48" />
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500/20 to-rose-500/20 blur-2xl rounded-[3rem] -rotate-3" />
            <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-[3rem] bg-slate-900 border-8 border-white shadow-2xl overflow-hidden group flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent z-10" />
              <Image
                src="/team/ashish-kumar.jpeg"
                alt="Ashish Kumar - Founder"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
                onError={(e) => {
                  (e.target as any).style.display = 'none';
                }}
              />
              <User className="w-24 h-24 text-slate-700" />
              <div className="absolute bottom-8 left-8 z-20">
                <h4 className="text-2xl font-black text-white mb-1">Ashish Kumar</h4>
                <p className="text-orange-400 font-bold uppercase tracking-widest text-xs">Founder, Sabka Saathi</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest mb-6">Our Vision</div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Making Digital Growth <span className="text-orange-500 italic">Accessible</span></h2>
              <div className="space-y-6 text-slate-600 font-medium text-lg leading-relaxed">
                <p>
                  &quot;Sabka Saathi Digital Services was started with a simple vision — to make digital growth accessible for every business, especially those in small towns and local markets.&quot;
                </p>
                <p>
                  <strong>Ashish Kumar</strong>&nbsp;recognized that many businesses &amp; Startups have the potential to grow but lack the right digital support. This platform was built to bridge that gap and provide simple, effective, and practical digital solutions.
                </p>
                <p className="text-slate-900 font-bold">
                  The goal is clear — to empower thousands of businesses to build a strong online presence and unlock new growth opportunities.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Link href="/trust">
                <Button variant="outline" className="rounded-2xl px-8 border-slate-200 hover:bg-slate-50">Legal & Trust Info</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
