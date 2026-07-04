import { getContentBySlug, getPagesList } from "@/lib/localSeo";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Button } from "@/components/ui/LiquidButton";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { 
  ChevronRight, MapPin, Sparkles, CheckCircle2, 
  ArrowRight, Smartphone, Laptop, Settings, HelpCircle
} from "lucide-react";
import Script from "next/script";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const pages = getPagesList();
  return pages.map((page) => ({
    slug: page.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getContentBySlug(slug);

  if (!data) return { title: "Not Found" };

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `https://sabkasathi.com/${data.slug}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://sabkasathi.com/${data.slug}`,
      siteName: "Sabka Saathi",
      type: "website",
      locale: "en_IN"
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription
    }
  };
}

export default async function LocalSEOPage({ params }: Props) {
  const { slug } = await params;
  const data = getContentBySlug(slug);

  if (!data) {
    notFound();
  }

  // Get service specific icon
  const ServiceIcon = data.serviceSlug === "mobile-app-development" 
    ? Smartphone 
    : data.serviceSlug === "website-development" 
    ? Laptop 
    : Settings;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <InteractiveBackground />
      <Navbar />

      {/* Schema Injection */}
      {data.schemas.map((schema, idx) => (
        <Script
          key={idx}
          id={`schema-${idx}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="flex-1 select-none">
        {/* Breadcrumbs */}
        <nav className="container mx-auto px-4 max-w-5xl pt-24 md:pt-28">
          <ol className="flex items-center gap-2 text-xs md:text-sm font-bold text-slate-400">
            <li>
              <Link href="/" className="hover:text-orange-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-4 h-4" />
            </li>
            <li className="text-slate-600 capitalize">
              {data.cityName}
            </li>
            <li>
              <ChevronRight className="w-4 h-4" />
            </li>
            <li className="text-orange-500 font-extrabold truncate max-w-[180px] md:max-w-none">
              {data.serviceName}
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="pt-10 pb-16 md:pt-16 md:pb-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 blur-3xl rounded-full -mr-40 -mt-40 pointer-events-none" />
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-black uppercase tracking-widest mb-7">
                <Sparkles className="w-4 h-4" />
                Local SEO Excellence
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.05] max-w-4xl mb-7">
                {data.serviceName} Company in <span className="text-orange-500 italic">{data.cityName}</span>
              </h1>
              <p className="text-slate-500 font-medium text-base md:text-xl max-w-2xl leading-relaxed mb-10">
                {data.tagline}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg" className="rounded-2xl shadow-xl shadow-orange-500/15 text-base px-8 py-4">
                    Get Started Now
                  </Button>
                </Link>
                <Link href="#about" className="scroll-smooth">
                  <Button variant="secondary" size="lg" className="rounded-2xl border-slate-200 text-base px-8 py-4">
                    Explore Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-28 bg-slate-50/40 border-y border-slate-100/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-black uppercase tracking-widest mb-4">
                  <MapPin className="w-4 h-4" />
                  Service Overview
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-7 leading-tight">
                  Driving Digital Growth in {data.cityName}
                </h2>
                <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed mb-8">
                  {data.aboutContent}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {data.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base font-bold text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[340px] aspect-square rounded-[2.5rem] bg-gradient-to-br from-orange-500 to-rose-500 p-8 flex flex-col justify-between text-white shadow-2xl shadow-orange-500/20">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                    <ServiceIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider opacity-80">Local Expertise</span>
                    <h3 className="text-2xl font-black mt-2 leading-tight">{data.cityName} Software Branch</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Core Services — square 1:1 cards */}
        <section className="py-16 md:py-28 bg-slate-50/40 border-y border-slate-100/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <span className="text-sm font-black uppercase tracking-[0.3em] text-orange-500 block mb-3">What We Build</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900">Our Core Services</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  Icon: Laptop,
                  title: "Website Development",
                  desc: "Fast, responsive, SEO-friendly websites — from marketing sites to full web platforms — built to load quickly and convert visitors into customers."
                },
                {
                  Icon: Smartphone,
                  title: "Mobile App Development",
                  desc: "Native and cross-platform apps for iOS and Android, covering design, development, testing, and launch on the App Store and Play Store."
                },
                {
                  Icon: Settings,
                  title: "Software Development",
                  desc: "Custom software and automation tools tailored to your business, replacing manual processes with reliable, scalable systems that save time."
                }
              ].map((service, idx) => (
                <Card
                  key={idx}
                  className="aspect-square p-7 md:p-9 bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center mb-5 md:mb-6 shrink-0">
                    <service.Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-black text-slate-900 mb-3 md:mb-4 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
                    {service.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us — square 1:1 cards */}
        <section className="py-16 md:py-28">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <span className="text-sm font-black uppercase tracking-[0.3em] text-orange-500 block mb-3">Our Advantage</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900">Why Partner with Sabka Saathi?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {data.whyChooseUs.map((item, idx) => (
                <Card
                  key={idx}
                  className="aspect-square p-7 md:p-9 bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center mb-5 md:mb-6 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-black text-slate-900 mb-3 md:mb-4 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — square 1:1 cards */}
        <section className="py-16 md:py-28 bg-slate-50/40 border-t border-slate-100/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <span className="text-sm font-black uppercase tracking-[0.3em] text-orange-500 block mb-3">Support & FAQ</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900">Common Questions in {data.cityName}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {data.faqs.map((faq, idx) => (
                <Card
                  key={idx}
                  className="aspect-square p-7 md:p-9 bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-orange-200/50 transition-all duration-300 flex flex-col"
                >
                  <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center mb-5 md:mb-6 shrink-0">
                    <HelpCircle className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-black text-slate-900 mb-3 md:mb-4 leading-snug">
                    {faq.q}
                  </h3>
                  <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed overflow-y-auto">
                    {faq.a}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Lead/Contact CTA */}
        <section className="py-16 md:py-28 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-gradient-to-br from-slate-950 to-slate-900 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden text-center border border-white/5 shadow-2xl">
              <div 
                className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                style={{
                  backgroundImage: "radial-gradient(#ff9500 1px, transparent 1px)",
                  backgroundSize: "20px 20px"
                }} 
              />
              <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 blur-[120px] rounded-full -mr-40 -mt-40 pointer-events-none" />
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Ready to Grow Your Business in {data.cityName}?
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed px-4">
                Partner with Bihar's premium software agency. Get a high-speed custom platform optimized to increase leads, automate operations, and scale.
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg" className="rounded-2xl shadow-xl shadow-orange-500/20 px-12 py-5 text-lg font-black">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Semantic Internal Linking Hub */}
        <section className="py-14 bg-slate-50/50 border-t border-slate-100/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Other services in same city */}
              <div>
                <h4 className="text-sm font-black text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-3 mb-4">
                  Other Services in {data.cityName}
                </h4>
                <div className="flex flex-col gap-2.5">
                  {data.relatedServices.map((rel, idx) => (
                    <Link 
                      key={idx} 
                      href={rel.url}
                      className="text-sm font-bold text-slate-500 hover:text-orange-500 transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                      {rel.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Same service in adjacent regions */}
              <div>
                <h4 className="text-sm font-black text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-3 mb-4">
                  Related Locations in Bihar
                </h4>
                <div className="flex flex-wrap gap-x-5 gap-y-2.5">
                  {data.nearbySlugs.map((rel, idx) => (
                    <Link 
                      key={idx} 
                      href={rel.url}
                      className="text-sm font-bold text-slate-500 hover:text-orange-500 transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                      {rel.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}