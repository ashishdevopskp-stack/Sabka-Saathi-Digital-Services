"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <InteractiveBackground />
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center pt-32 pb-24 relative z-10 px-4">
        <div className="max-w-xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-orange-100 text-orange-600 text-6xl shadow-xl shadow-orange-500/10 mb-8 mx-auto">
              🔍
            </div>
            <h1 className="text-7xl md:text-9xl font-black text-slate-900 mb-6 tracking-tighter">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-6 uppercase tracking-wider">
              Page Not Found
            </h2>
            <p className="text-lg text-slate-500 font-medium mb-10 leading-relaxed max-w-md mx-auto">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/">
                <Button size="lg" className="rounded-2xl px-12 py-7 text-lg font-bold shadow-2xl shadow-orange-500/20">
                  Return Home →
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="rounded-2xl px-12 py-7 text-lg font-bold border-slate-200">
                  Contact Support
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4 mt-16 max-w-md mx-auto opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="p-4 rounded-2xl bg-white/30 border border-white/50 backdrop-blur-sm">
              <span className="block text-xl mb-2">🏗️</span>
              <span className="text-[10px] font-black uppercase text-slate-400">Architectural Error</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/30 border border-white/50 backdrop-blur-sm">
              <span className="block text-xl mb-2">🛰️</span>
              <span className="text-[10px] font-black uppercase text-slate-400">Broken Link Found</span>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
