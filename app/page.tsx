"use client";

import { Button } from "@/components/ui/Button";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Navbar } from "@/components/Navbar";
import { StatsShowcase } from "@/components/StatsShowcase";
import { ProcessSection } from "@/components/ProcessSection";
import { FounderSection } from "@/components/FounderSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <InteractiveBackground />
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* SEO Internal Linking: Regional Success */}
        <section className="bg-orange-50/30 py-16 border-y border-orange-100/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-3xl rounded-full -mr-32 -mt-32" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Premier Software Development in <span className="text-orange-500">Gujarat, Maharashtra & Bihar</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "Gujarat", slug: "gujarat", cities: "Ahmedabad, Surat, Rajkot, Bhavnagar" },
                { name: "Maharashtra", slug: "maharashtra", cities: "Pune, Mumbai, Nagpur" },
                { name: "Bihar", slug: "bihar", cities: "Patna, Muzaffarpur, Gaya, Sheikhpura" }
              ].map((region) => (
                <Link 
                  key={region.name} 
                  href={`/location/${region.slug}`}
                  className="group flex flex-col p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-orange-100 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 min-w-[240px]"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors">{region.name}</span>
                    <span className="text-orange-400 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium text-left">{region.cities}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <StatsShowcase />

        <PortfolioShowcase />

        <div className="py-24 bg-white/30 border-y border-slate-100">
          <div className="container mx-auto px-4">
             <div className="flex flex-col items-center mb-12">
                <h2 className="text-4xl font-black text-slate-900 text-center mb-6">Our <span className="text-orange-500">Process</span></h2>
                <p className="text-slate-600 font-medium text-center max-w-2xl mb-8">Detailed discovery, agile development, and continuous delivery to ensure your project&apos;s success.</p>
                <Link href="/services">
                  <Button className="rounded-full px-10 border-orange-500 text-orange-600" variant="outline">Explore Services →</Button>
                </Link>
             </div>
             <ProcessSection />
          </div>
        </div>

        <div className="py-24">
           <div className="container mx-auto px-4">
              <div className="flex flex-col items-center mb-12">
                <h2 className="text-4xl font-black text-slate-900 text-center mb-4">Industries We <span className="text-orange-500 italic">Empower</span></h2>
                <p className="text-slate-600 font-medium text-center max-w-2xl mb-8">From Healthcare to E-commerce, we serve 50+ business sectors with tailored tech.</p>
                <Link href="/industries">
                  <Button className="rounded-2xl px-12 py-7 text-lg shadow-xl shadow-orange-500/20">View All 50+ Industries →</Button>
                </Link>
              </div>
           </div>
        </div>

        <FounderSection />

        <section className="py-24 bg-slate-50/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-black text-slate-900 mb-6">Common <span className="text-orange-500">Questions</span></h2>
              <p className="text-lg text-slate-600 font-medium">Clear answers to help you start your digital journey with confidence.</p>
            </div>
            <FAQSection limit={4} />
            <div className="mt-12 text-center">
              <Link href="/faq">
                <Button variant="outline" className="rounded-2xl px-10 border-slate-200 hover:bg-slate-50">View All FAQs →</Button>
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
