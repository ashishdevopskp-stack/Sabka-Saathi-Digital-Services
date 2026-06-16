import { getContentBySlug, getPagesList } from "@/lib/localSeo";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Button } from "@/components/ui/Button";
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
          <ol className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-slate-400">
            <li>
              <Link href="/" className="hover:text-orange-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="text-slate-600 capitalize">
              {data.cityName}
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="text-orange-500 font-extrabold truncate max-w-[160px] md:max-w-none">
              {data.serviceName}
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="pt-10 pb-16 md:pt-14 md:pb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 blur-3xl rounded-full -mr-40 -mt-40 pointer-events-none" />
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Local SEO Excellence
              </div>
              <h1 className="text-3xl md:text-5.5xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl mb-6">
                {data.serviceName} Company in <span className="text-orange-500 italic">{data.cityName}</span>
              </h1>
              <p className="text-slate-500 font-medium text-xs md:text-base max-w-2xl leading-relaxed mb-8">
                {data.tagline}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg" className="rounded-2xl shadow-xl shadow-orange-500/15">
                    Get Started Now
                  </Button>
                </Link>
                <Link href="#about" className="scroll-smooth">
                  <Button variant="outline" size="lg" className="rounded-2xl border-slate-200">
                    Explore Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-slate-50/40 border-y border-slate-100/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-1.5 text-orange-500 text-[10px] font-black uppercase tracking-widest mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  Service Overview
                </div>
                <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 mb-6">
                  Driving Digital Growth in {data.cityName}
                </h2>
                <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed mb-6">
                  {data.aboutContent}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-bold text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[280px] aspect-square rounded-[2rem] bg-gradient-to-br from-orange-500 to-rose-500 p-6 flex flex-col justify-between text-white shadow-xl shadow-orange-500/10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <ServiceIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider opacity-80">Local Expertise</span>
                    <h3 className="text-lg font-black mt-1 leading-tight">{data.cityName} Software Branch</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-500 block mb-2">Our Advantage</span>
              <h2 className="text-2xl md:text-4xl font-black text-slate-900">Why Partner with Sabka Saathi?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.whyChooseUs.map((item, idx) => (
                <Card key={idx} className="p-6 bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-sm font-black text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed pl-3.5">
                    {item.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic FAQ Accordion */}
        <section className="py-16 md:py-24 bg-slate-50/40 border-t border-slate-100/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-500 block mb-2">Support & FAQ</span>
              <h2 className="text-2xl md:text-4xl font-black text-slate-900">Common Questions in {data.cityName}</h2>
            </div>
            <div className="max-w-3xl mx-auto flex flex-col gap-4">
              {data.faqs.map((faq, idx) => (
                <Card 
                  key={idx} 
                  className="p-5 bg-white border border-slate-100 shadow-sm hover:border-orange-200/50 transition-colors"
                >
                  <h3 className="text-xs md:text-sm font-black text-slate-900 mb-2 flex items-start gap-2.5 leading-snug">
                    <HelpCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed pl-6.5">
                    {faq.a}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Lead/Contact CTA */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-gradient-to-br from-slate-950 to-slate-900 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden text-center border border-white/5 shadow-2xl">
              <div 
                className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                style={{
                  backgroundImage: "radial-gradient(#ff9500 1px, transparent 1px)",
                  backgroundSize: "20px 20px"
                }} 
              />
              <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 blur-[120px] rounded-full -mr-40 -mt-40 pointer-events-none" />
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                Ready to Grow Your Business in {data.cityName}?
              </h2>
              <p className="text-slate-300 max-w-lg mx-auto mb-8 text-xs sm:text-sm leading-relaxed px-4">
                Partner with Bihar's premium software agency. Get a high-speed custom platform optimized to increase leads, automate operations, and scale.
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg" className="rounded-2xl shadow-xl shadow-orange-500/20 px-10 py-4 text-base font-black">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Semantic Internal Linking Hub */}
        <section className="py-12 bg-slate-50/50 border-t border-slate-100/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Other services in same city */}
              <div>
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2 mb-3">
                  Other Services in {data.cityName}
                </h4>
                <div className="flex flex-col gap-2">
                  {data.relatedServices.map((rel, idx) => (
                    <Link 
                      key={idx} 
                      href={rel.url}
                      className="text-[11px] font-bold text-slate-500 hover:text-orange-500 transition-colors flex items-center gap-1.5"
                    >
                      <ArrowRight className="w-3 h-3 text-orange-400" />
                      {rel.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Same service in adjacent regions */}
              <div>
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider border-b border-slate-100 pb-2 mb-3">
                  Related Locations in Bihar
                </h4>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {data.nearbySlugs.map((rel, idx) => (
                    <Link 
                      key={idx} 
                      href={rel.url}
                      className="text-[11px] font-bold text-slate-500 hover:text-orange-500 transition-colors flex items-center gap-1"
                    >
                      <span className="w-1 h-1 rounded-full bg-orange-400" />
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
