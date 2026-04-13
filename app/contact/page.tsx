import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Start Your Project - Sabka Saathi Digital Services",
  description: "Get in touch with Sabka Saathi for web development, app development, and digital marketing services. Based in India, serving globally.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <InteractiveBackground />
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Header Section */}
        <section className="py-16 text-center container mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest mb-4">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Let&apos;s <span className="text-orange-500 italic">Work Together</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            Ready to take your business online? Our team is standing by to help you launch and grow.
          </p>
        </section>

        <ContactSection />

        {/* Global Support info */}
        <section className="py-16 container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
                    <div className="text-4xl mb-4">🏠</div>
                    <h3 className="text-xl font-bold mb-2">Registered Office</h3>
                    <p className="text-slate-500">Sabka Saathi Digital Services<br/>India</p>
                </div>
                <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
                    <div className="text-4xl mb-4">📩</div>
                    <h3 className="text-xl font-bold mb-2">Email Us</h3>
                    <p className="text-slate-500">helpsabkasaathi@gmail.com</p>
                </div>
                <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
                    <div className="text-4xl mb-4">📞</div>
                    <h3 className="text-xl font-bold mb-2">Call/WhatsApp</h3>
                    <p className="text-slate-500">+91 9431673018</p>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
