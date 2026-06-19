import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { blogPosts, BlogPost } from "@/lib/blogs";
import { BlogCard } from "@/components/BlogCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Insights & Strategy | Sabka Saathi Digital Blog",
  description: "Expert insights on web development, software architecture, ERP systems, and digital marketing strategies for Indian businesses.",
  keywords: ["Digital Marketing Blog Bihar", "Web Development Trends India", "ERP System Guide", "Software Architecture Insights"],
};

const categoryAssets: Record<string, { gradient: string; icon: string }> = {
  Development: { gradient: "from-blue-600 to-indigo-500", icon: "🌐" },
  Enterprise: { gradient: "from-purple-600 to-pink-500", icon: "⚙️" },
  Marketing: { gradient: "from-orange-500 to-rose-500", icon: "🚀" },
  Strategy: { gradient: "from-slate-700 to-slate-900", icon: "💻" },
};

async function getFirestoreBlogs(): Promise<BlogPost[]> {
  try {
    const q = query(collection(db, "blogs"), where("status", "==", "published"));
    const snapshot = await getDocs(q);
    const posts: BlogPost[] = [];
    
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      const cat = data.category || "Development";
      const assets = categoryAssets[cat] || { gradient: "from-orange-500 to-rose-500", icon: "📄" };
      
      const wordCount = (data.content || "").split(/\s+/).length;
      const readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;
      
      const dateFormatted = data.createdAt 
        ? new Date(data.createdAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
          })
        : "Recent";

      posts.push({
        slug: data.slug || docSnap.id,
        title: data.title || "",
        subtitle: data.metaTitle || "",
        category: cat as any,
        date: dateFormatted,
        readTime,
        author: {
          name: data.author?.name || "Ashish Kumar",
          role: data.author?.role || "Founder & CEO",
          image: data.author?.image || "/team/ashish-kumar.jpeg",
        },
        excerpt: data.excerpt || "",
        content: data.content || "",
        keywords: data.tags || [],
        gradient: assets.gradient,
        icon: assets.icon,
      });
    });

    return posts;
  } catch (err) {
    console.error("Error fetching published blogs from Firestore:", err);
    return [];
  }
}

export default async function BlogListingPage() {
  const firestorePosts = await getFirestoreBlogs();
  const staticPosts = Object.values(blogPosts);

  // Filter out any static posts that have already been uploaded to Firestore
  const firestoreSlugs = new Set(firestorePosts.map((p) => p.slug));
  const uniqueStaticPosts = staticPosts.filter((p) => !firestoreSlugs.has(p.slug));

  // Combine both sources
  const allPosts = [...firestorePosts, ...uniqueStaticPosts];

  // Sort descending by publication date
  allPosts.sort((a, b) => {
    const timeA = a.date === "Recent" ? Date.now() : new Date(a.date).getTime();
    const timeB = b.date === "Recent" ? Date.now() : new Date(b.date).getTime();
    const validA = isNaN(timeA) ? 0 : timeA;
    const validB = isNaN(timeB) ? 0 : timeB;
    return validB - validA;
  });
  
  return (
    <div className="flex min-h-screen flex-col selection:bg-orange-100 selection:text-orange-900">
      <InteractiveBackground />
      <Navbar />
      
      <main className="flex-1 pt-6 pb-24 relative z-10">
        <section className="container mx-auto px-4 max-w-7xl">
          {/* Redesigned Premium Hero Section */}
          <div className="relative py-12 md:py-20 mb-16 rounded-[2.5rem] bg-gradient-to-br from-white/70 to-white/30 backdrop-blur-xl border border-white/60 p-8 md:p-12 shadow-[0_10px_30px_rgba(255,237,213,0.02)] overflow-hidden">
            {/* Soft decorative background highlight */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-orange-200/10 to-amber-200/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100/50 text-orange-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-sm">
                Sabka Saathi Knowledge Hub
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-950 mb-6 tracking-tight leading-[1.1]">
                Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Digital Strategy</span>
              </h1>
              <p className="text-base md:text-lg text-slate-600 font-semibold max-w-2xl leading-relaxed">
                Expert analysis, technical deep-dives, and strategic guides on modern web development, business automation, and digital marketing to scale your enterprise in India.
              </p>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-24">
            {allPosts.map((post, index) => (
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
