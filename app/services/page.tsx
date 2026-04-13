import { Metadata } from "next";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { Navbar } from "@/components/Navbar";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { expertiseContent } from "@/lib/content";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Our Services | Software & Digital Solutions - Sabka Saathi",
  description: "Explore our full range of digital services, from Web & Mobile development to Cloud solutions and SEO. Built for growth.",
};

export default function ServicesPage() {
  const expertiseAreas = Object.values(expertiseContent);
  return (
    <div className="flex min-h-screen flex-col">
      <InteractiveBackground />
      <Navbar />
      <main className="flex-1 pt-32">
        {/* Header Section */}
        <section className="py-16 text-center container mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-4">
            Capabilities
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Our <span className="text-orange-500 italic">Expertise</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            High-performance digital products built with modern stacks to drive real-world business outcomes.
          </p>
        </section>

        <section className="py-16 container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expertiseAreas.map((area) => (
                    <Link key={area.slug} href={`/expertise/${area.slug}`}>
                        <Card className="p-8 h-full bg-white hover:border-orange-500 transition-all hover:shadow-2xl hover:shadow-orange-500/10 group rounded-3xl group">
                            <div className="text-4xl mb-6 p-4 rounded-2xl bg-slate-50 group-hover:bg-orange-50 w-fit transition-colors">
                                {area.icon}
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">{area.title}</h3>
                            <p className="text-slate-500 font-medium mb-6 leading-relaxed">
                                {area.description}
                            </p>
                            <span className="text-orange-500 font-black text-sm uppercase tracking-widest flex items-center gap-2">
                                Learn More <span className="translate-x-0 group-hover:translate-x-2 transition-transform">→</span>
                            </span>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>

        <FeaturesSection />
        
        <div className="container mx-auto px-4">
            <ProcessSection />
        </div>
        
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
