import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { StatsShowcase } from "@/components/StatsShowcase";
import { ProcessSection } from "@/components/ProcessSection";
import { TechStack } from "@/components/TechStack";
import { ContactSection } from "@/components/ContactSection";
import { FounderSection } from "@/components/FounderSection";
import { TrustContent } from "@/components/TrustContent";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { DetailLayout } from "@/components/DetailLayout";
import { FAQSection } from "@/components/FAQSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { BiharServicesSEO } from "@/components/BiharServicesSEO";


export const metadata: Metadata = {
  title: "Sabka Saathi - High-Performance Software Development & CRM Automation",
  description:
    "Accelerate your business with Sabka Saathi. We build custom Next.js web applications, mobile apps, and CRM systems for startups and local businesses across India.",
  keywords: [
    "software development company",
    "next.js development",
    "custom software bihar",
    "software agency pune",
    "web development gujarat",
    "CRM automation india",
    "mobile app development",
    "startup website builders",
    "GST registered software agency",
  ],
  openGraph: {
    title: "Sabka Saathi - High-Performance Software Development & CRM Automation",
    description:
      "Accelerate your business with Sabka Saathi. We build custom Next.js web applications, mobile apps, and CRM systems for startups and local businesses across India.",
    url: "https://sabkasathi.com",
    siteName: "Sabka Saathi",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Sabka Saathi Digital Services Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabka Saathi - High-Performance Software Development & CRM Automation",
    description:
      "Accelerate your business with Sabka Saathi. Custom Next.js web applications, mobile apps, and CRM systems.",
    images: ["/logo.png"],
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <StatsShowcase />
      <ProcessSection />
      <TechStack />
      <FounderSection />
      <FeaturesSection />
      
      
      {/* <TrustContent /> */}
      <TestimonialsSection />
      <FAQSection />
    
      
      <ContactSection />
      <Footer />
    </div>
  );
}