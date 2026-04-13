import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { blogPosts } from "@/lib/blogs";
import { BlogCard } from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Insights & Strategy | Sabka Saathi Digital Blog",
  description: "Expert insights on web development, software architecture, ERP systems, and digital marketing strategies for Indian businesses.",
  keywords: ["Digital Marketing Blog Bihar", "Web Development Trends India", "ERP System Guide", "Software Architecture Insights"],
};

export default function BlogListingPage() {
  const posts = Object.values(blogPosts);
  
  return (
    <div className="flex min-h-screen flex-col selection:bg-orange-100 selection:text-orange-900">
      <InteractiveBackground />
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 relative z-10">
        <section className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Insights & Expertise
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Digital Blog</span>
            </h1>
            <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Strategic knowledge and technical deep-dives to help you navigate the modern business landscape in India.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>

          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
