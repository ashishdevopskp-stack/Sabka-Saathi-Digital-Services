import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogs";
import { Navbar } from "@/components/Navbar";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  
  if (!post) return { title: "Blog Not Found" };

  return {
    title: `${post.title} | Sabka Saathi Blog`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col selection:bg-orange-100 selection:text-orange-900">
      <InteractiveBackground />
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 relative z-10">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumbs & Back */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-orange-600 transition-colors mb-12 group bg-white/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/50">
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>

          {/* Hero Section */}
          <header className="mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-600 mb-8`}>
              {post.category}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tight">
              {post.title}
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-medium mb-12 leading-relaxed italic">
              "{post.subtitle}"
            </p>

            <div className="flex flex-wrap items-center gap-8 py-8 border-y border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-sm ring-1 ring-slate-100 flex items-center justify-center">
                  <Image 
                    src={post.author.image} 
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900 uppercase tracking-wider">{post.author.name}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">{post.author.role}</p>
                </div>
              </div>

              <div className="flex gap-8 ml-auto">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Published</span>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-orange-500" />
                    {post.date}
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Read Time</span>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                    <Clock className="w-3.5 h-3.5 text-orange-500" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[3rem] p-8 md:p-16 mb-24 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 select-none">
                <span className="text-9xl">{post.icon}</span>
             </div>
             
             <div className="prose prose-slate prose-lg max-w-none 
                prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium
                prose-strong:text-slate-900 prose-strong:font-black
                prose-ul:list-disc prose-li:text-slate-600
                relative z-10">
               {post.content.split('\n').map((line, i) => {
                 const trimmed = line.trim();
                 if (!trimmed) return <br key={i} />;
                 
                 if (trimmed.startsWith('###')) {
                   return <h3 key={i} className="text-2xl font-black text-slate-900 mt-12 mb-6">{trimmed.replace('###', '').trim()}</h3>;
                 }
                 if (trimmed.startsWith('##')) {
                   return <h2 key={i} className="text-3xl font-black text-slate-900 mt-16 mb-8">{trimmed.replace('##', '').trim()}</h2>;
                 }
                 if (trimmed.startsWith('-')) {
                    return <li key={i} className="mb-3 ml-4">{trimmed.replace('-', '').trim()}</li>;
                 }
                 if (trimmed.startsWith('**')) {
                    return <p key={i} className="font-black text-slate-900 text-lg mt-12">{trimmed.replace(/\*\*/g, '').trim()}</p>;
                 }
                 
                 return <p key={i} className="mb-6">{trimmed}</p>;
               })}
             </div>

             <div className="mt-20 pt-12 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Tags:</span>
                  <div className="flex flex-wrap gap-2">
                    {post.keywords.slice(0, 3).map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold text-slate-500 uppercase">{tag}</span>
                    ))}
                  </div>
                </div>
                <Button variant="outline" className="rounded-xl flex items-center gap-2 text-xs font-bold uppercase">
                  <Share2 className="w-3 h-3" /> Share Post
                </Button>
             </div>
          </div>

          <ContactSection />
        </article>
      </main>

      <Footer />
    </div>
  );
}
