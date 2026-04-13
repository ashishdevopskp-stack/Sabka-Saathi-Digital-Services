"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Critical Runtime Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col">
      <InteractiveBackground />
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center pt-32 pb-24 relative z-10 px-4">
        <div className="max-w-xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-rose-100 text-rose-600 text-6xl shadow-xl shadow-rose-500/10 mb-8 mx-auto">
              ⚠️
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Something went <span className="text-rose-500 italic">wrong</span>
            </h1>
            <p className="text-lg text-slate-500 font-medium mb-10 leading-relaxed max-w-md mx-auto">
              A temporary issue prevented us from loading the requested page. Our engineers have been notified.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={() => reset()}
                size="lg" 
                className="rounded-2xl px-12 py-7 text-lg font-bold shadow-2xl shadow-rose-500/10 bg-slate-900 hover:bg-slate-800"
              >
                Try Again
              </Button>
              <LinkWithNoRefresh href="/">
                <Button variant="outline" size="lg" className="rounded-2xl px-12 py-7 text-lg font-bold border-slate-200">
                  Back to Home
                </Button>
              </LinkWithNoRefresh>
            </div>
          </motion.div>
          
          <div className="mt-12 p-6 bg-slate-50/50 border border-slate-200 rounded-3xl text-left font-mono text-[10px] text-slate-400 overflow-hidden">
             <div className="flex items-center gap-2 mb-2 text-slate-500 font-bold uppercase tracking-widest text-[8px]">
               <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
               Debug ID
             </div>
             {error.digest || "ERR_RUNTIME_FATAL"}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

// Helper for resetting state on navigation
function LinkWithNoRefresh({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href}>{children}</a>
  );
}
