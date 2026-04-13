import { Metadata } from "next";
import { IndustriesSection } from "@/components/IndustriesSection";
import { Navbar } from "@/components/Navbar";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Industries We Serve | Complete Business Directory - Sabka Saathi",
  description: "Browse 50+ industries served by Sabka Saathi Digital Services, from Medical and Education to E-commerce and Manufacturing.",
};

export default function IndustriesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <InteractiveBackground />
      <Navbar />
      <main className="flex-1 pt-32">
        {/* Header Section */}
        <section className="py-16 text-center container mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4">
            Market Expertise
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Our <span className="text-orange-500 italic">Reach</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            Explore 50+ industry-specific digital solutions designed to help your business unlock its full potential.
          </p>
        </section>

        <IndustriesSection />
        
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
