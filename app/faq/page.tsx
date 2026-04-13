import { Metadata } from "next";
import { FAQSection } from "@/components/FAQSection";
import { Navbar } from "@/components/Navbar";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) - Sabka Saathi Digital Services",
  description: "Find answers to the most common questions about web development, mobile apps, and digital growth with Sabka Saathi.",
};

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <InteractiveBackground />
      <Navbar />
      <main className="flex-1 pt-32">
        {/* Header Section */}
        <section className="py-16 text-center container mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest mb-4">
            Help Center
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Frequently Asked <span className="text-orange-500 italic">Questions</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
             We understand that starting a digital journey can raise many questions. Here are answers to some of the most common queries.
          </p>
        </section>

        <section className="py-16 container mx-auto px-4 pb-24">
            <FAQSection />
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
