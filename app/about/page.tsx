import { Metadata } from "next";
import { FounderSection } from "@/components/FounderSection";
import { TeamSection } from "@/components/TeamSection";
import { StatsShowcase } from "@/components/StatsShowcase";
import { Navbar } from "@/components/Navbar";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Our Story, Team & Vision - Sabka Saathi Digital Services",
  description: "Learn about the mission of Sabka Saathi Digital Services, meet our founder Ashish Kumar, and our dedicated team of developers and experts.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <InteractiveBackground />
      <Navbar />
      <main className="flex-1 pt-32">
        {/* Header Section */}
        <section className="py-16 text-center container mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest mb-4">
            Our Identity
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Who <span className="text-orange-500 italic">We Are</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            A team of passionate digital experts committed to making growth accessible for businesses of all sizes across India.
          </p>
        </section>

        <FounderSection />
        
        <div className="container mx-auto px-4">
          <StatsShowcase />
        </div>

        <div className="container mx-auto px-4 pb-24">
          <TeamSection />
        </div>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
