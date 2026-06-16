"use client";

import Link from "next/link";
import { cities, services, generateSlug } from "@/lib/localSeo";

export function BiharServicesSEO() {
  const majorCities = cities.filter((c) => c.type === "major");
  const hqCities = cities.filter((c) => c.type === "headquarters");
  const growingCities = cities.filter((c) => c.type === "growing");
  const districtCities = cities.filter((c) => c.type === "district");

  const categories = [
    { title: "Major Cities", list: majorCities },
    { title: "District Capitals", list: hqCities },
    { title: "Other Important Cities", list: growingCities },
    { title: "Nearby Districts", list: districtCities }
  ];

  return (
    <section className="bg-slate-50/70 border-t border-slate-100/50 py-16 md:py-24 relative overflow-hidden select-none">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/5 blur-3xl rounded-full -mr-40 -mb-40 pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-rose-500/5 blur-3xl rounded-full -ml-40 -mt-40 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="mb-12 text-center">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-500 block mb-2">Local Reach</span>
          <h2 className="text-3xl font-black text-slate-900 mb-4">Our Services Across <span className="text-orange-500">Bihar</span></h2>
          <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full mb-4" />
          <p className="text-xs md:text-sm text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            We provide premium website development, mobile app development, and custom software automation across all 36 major cities and districts of Bihar, driving regional digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div 
              key={cat.title} 
              className="bg-white border border-slate-100 p-6 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-fit"
            >
              <div className="text-center mb-6">
                <h3 className="text-xs md:text-sm font-black text-orange-500 tracking-wider uppercase inline-block pb-1">
                  {cat.title}
                </h3>
                <div className="w-8 h-0.5 bg-orange-500 mx-auto mt-1" />
              </div>
              <div className="flex flex-col gap-6">
                {cat.list.map((city) => (
                  <div key={city.slug} className="flex flex-col gap-2">
                    {Object.keys(services).map((sKey) => {
                      const service = services[sKey]!;
                      const slug = generateSlug(sKey, city.slug);
                      return (
                        <Link 
                          key={sKey} 
                          href={`/${slug}`}
                          className="w-full text-center py-2.5 px-3 rounded-xl border border-slate-200/80 text-[11px] font-semibold text-slate-700 seo-liquid-btn bg-white block"
                          title={`${service.name} Company in ${city.name}`}
                        >
                          {service.name} in {city.name}
                        </Link>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
