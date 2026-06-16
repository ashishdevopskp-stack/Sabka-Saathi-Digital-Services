export interface CityInfo {
  name: string;
  slug: string;
  type: 'major' | 'headquarters' | 'growing' | 'district';
  tagline: string;
  context: string;
  nearby: string[];
}

export interface ServiceInfo {
  name: string;
  slug: string;
  subtitle: string;
  tagline: string;
  features: string[];
  benefits: string[];
  description: string;
}

export const services: Record<string, ServiceInfo> = {
  "mobile-app-development": {
    name: "Mobile App Development",
    slug: "mobile-app-development",
    subtitle: "Custom iOS & Android App Development",
    tagline: "High-performance native and cross-platform apps built with React Native and Flutter.",
    description: "Get your business into your customers' pockets. We design and build secure, fast, and feature-rich mobile applications that scale seamlessly with your growing user base.",
    features: [
      "Cross-Platform Android & iOS App Development",
      "Native Animations & Fluid User Interface UX",
      "Real-time Push Notifications & Deep Linking",
      "Offline Database Synchronization Support",
      "Secure Razorpay API Payment Gateways Integration"
    ],
    benefits: [
      "Reach millions of mobile users directly",
      "Create direct, high-converting marketing channels",
      "Deliver smooth app experiences that drive brand loyalty",
      "Keep users engaged with intelligent automated alerts"
    ]
  },
  "website-development": {
    name: "Website Development",
    slug: "website-development",
    subtitle: "Premium Next.js Web Applications",
    tagline: "Superfast websites optimized for Google search rankings and business leads.",
    description: "Your website is your digital storefront. We construct lightning-fast web applications using Next.js 15, ensuring complete responsive design and top search engine ranks from day one.",
    features: [
      "Next.js 15 React Server Components Framework",
      "100% Responsive Mobile-First CSS Fluid Layouts",
      "Clean, Semantic HTML Coding for Technical SEO",
      "Advanced Dynamic Framer Motion Page Animations",
      "Free Enterprise SSL & Managed High-Speed Edge Hosting"
    ],
    benefits: [
      "Rank on search results for competitive keywords",
      "Load pages in milliseconds to prevent user drop-off",
      "Turn casual website visitors into qualified paying leads",
      "Establish visual credibility with high-fidelity UI design"
    ]
  },
  "software-development": {
    name: "Software Development",
    slug: "software-development",
    subtitle: "Custom CRM & Business SaaS Systems",
    tagline: "Custom admin dashboards, databases, and workflow automation tools.",
    description: "Optimize operations and eliminate manual errors. We build customized software systems, CRM pipelines, and backend APIs tailored to automate your specific business workflows.",
    features: [
      "Custom ERP & SaaS Systems Engineering",
      "Automated Sales Lead Funnels & Management",
      "Unified WhatsApp API & SMS Notifications",
      "Secure Node.js Backends & MongoDB Databases",
      "Role-Based Administrative Access Control Panels"
    ],
    benefits: [
      "Eliminate repetitive manual data entry tasks",
      "Get real-time business performance analytics",
      "Automate lead follow-ups and client billing pipelines",
      "Secure corporate databases with cloud encryption"
    ]
  }
};

export const cities: CityInfo[] = [
  {
    name: "Patna",
    slug: "patna",
    type: "major",
    tagline: "the capital city and largest commercial hub of Bihar",
    context: "the city's expanding SaaS ecosystems, startup accelerators, and retail chains",
    nearby: ["gaya", "hajipur", "nalanda", "jehanabad"]
  },
  {
    name: "Gaya",
    slug: "gaya",
    type: "major",
    tagline: "the historical, cultural, and spiritual hub of South Bihar",
    context: "the region's international hotels, tourism operators, and educational networks",
    nearby: ["patna", "nawada", "jehanabad", "aurangabad"]
  },
  {
    name: "Muzaffarpur",
    slug: "muzaffarpur",
    type: "major",
    tagline: "the commercial hub of North Bihar and the sweet litchi capital",
    context: "the local agricultural processing plants, wholesale traders, and local enterprises",
    nearby: ["darbhanga", "samastipur", "hajipur", "sitamarhi"]
  },
  {
    name: "Darbhanga",
    slug: "darbhanga",
    type: "major",
    tagline: "the cultural capital of Mithilanchal and a growing medical hub",
    context: "the local Mithila art platforms, educational trusts, and retail networks",
    nearby: ["madhubani", "samastipur", "muzaffarpur", "saharsa"]
  },
  {
    name: "Bhagalpur",
    slug: "bhagalpur",
    type: "major",
    tagline: "the famous Silk City on the banks of the holy Ganges",
    context: "the silk handloom cooperative webs, retail brands, and education groups",
    nearby: ["munger", "banka", "khagaria", "purnia"]
  },
  {
    name: "Purnia",
    slug: "purnia",
    type: "major",
    tagline: "the gateway to Northeast India and the commercial hub of Seemanchal",
    context: "the regional logistics operations, grain merchants, and retail businesses",
    nearby: ["katihar", "araria", "kishanganj", "saharsa"]
  },
  {
    name: "Katihar",
    slug: "katihar",
    type: "major",
    tagline: "the prominent railway junction and growing trade center in Seemanchal",
    context: "the transportation sectors, warehouse facilities, and local wholesalers",
    nearby: ["purnia", "araria", "kishanganj", "munger"]
  },
  {
    name: "Begusarai",
    slug: "begusarai",
    type: "major",
    tagline: "the industrial capital of Bihar with active commercial sectors",
    context: "the manufacturing businesses, petroleum trade, and agricultural companies",
    nearby: ["khagaria", "samastipur", "lakhisarai", "patna"]
  },
  {
    name: "Ara",
    slug: "ara",
    type: "major",
    tagline: "the historical hub of Bhojpur and center of educational excellence",
    context: "the educational startups, coaching institutes, and local contractors",
    nearby: ["buxar", "patna", "sasaram", "siwan"]
  },
  {
    name: "Buxar",
    slug: "buxar",
    type: "headquarters",
    tagline: "the historic gateway city of Western Bihar on the Ganges border",
    context: "the border logistics operations, tourism startups, and agricultural traders",
    nearby: ["ara", "sasaram", "siwan", "buxar"]
  },
  {
    name: "Samastipur",
    slug: "samastipur",
    type: "headquarters",
    tagline: "the agricultural research hub and active business junction",
    context: "the regional crop trading markets, agricultural tech, and local transport networks",
    nearby: ["darbhanga", "muzaffarpur", "begusarai", "lakhisarai"]
  },
  {
    name: "Madhubani",
    slug: "madhubani",
    type: "headquarters",
    tagline: "the world-renowned center of Mithila art and heritage",
    context: "the handicraft stores, art export agencies, and rural cooperative businesses",
    nearby: ["darbhanga", "supaul", "sitamarhi", "saharsa"]
  },
  {
    name: "Siwan",
    slug: "siwan",
    type: "headquarters",
    tagline: "the growing commercial city of Saran division with strong remittance economy",
    context: "the real estate agencies, financial services, and retail showrooms",
    nearby: ["chapra", "ara", "siwan", "buxar"]
  },
  {
    name: "Chapra",
    slug: "chapra",
    type: "headquarters",
    tagline: "the prominent administrative hub on the confluence of Ghaghara and Ganges",
    context: "the administrative platforms, trade networks, and local service providers",
    nearby: ["siwan", "hajipur", "patna", "ara"]
  },
  {
    name: "Nalanda",
    slug: "nalanda",
    type: "headquarters",
    tagline: "the ancient seat of learning and world heritage tourism center",
    context: "the heritage tour agencies, private schools, and local handicraft shops",
    nearby: ["patna", "nawada", "sheikhpura", "jehanabad"]
  },
  {
    name: "Jehanabad",
    slug: "jehanabad",
    type: "headquarters",
    tagline: "the central district hub bridging Patna and Gaya business corridors",
    context: "the local retail marketplaces, clinics, and regional services centers",
    nearby: ["patna", "gaya", "nawada", "nalanda"]
  },
  {
    name: "Nawada",
    slug: "nawada",
    type: "headquarters",
    tagline: "the growing industrial and agricultural hub of South Bihar",
    context: "the building supply traders, milling businesses, and local retail stores",
    nearby: ["gaya", "nalanda", "jehanabad", "sheikhpura"]
  },
  {
    name: "Aurangabad",
    slug: "aurangabad",
    type: "headquarters",
    tagline: "the gateway of tourism and industry in South-Western Bihar",
    context: "the cement operations, local power line utilities, and retail stores",
    nearby: ["gaya", "sasaram", "jehanabad", "buxar"]
  },
  {
    name: "Sasaram",
    slug: "sasaram",
    type: "growing",
    tagline: "the historic city of Sher Shah Suri tomb and trade center in Rohtas",
    context: "the stone quarry networks, monument tourism agencies, and agro-retailers",
    nearby: ["buxar", "aurangabad", "ara", "gaya"]
  },
  {
    name: "Sheikhpura",
    slug: "sheikhpura",
    type: "growing",
    tagline: "the active stone-mining and growing retail hub of South-East Bihar",
    context: "the stone crushers, mineral suppliers, and local commercial shops",
    nearby: ["lakhisarai", "nalanda", "nawada", "jamui"]
  },
  {
    name: "Lakhisarai",
    slug: "lakhisarai",
    type: "growing",
    tagline: "the historic city on the banks of Kiul river, rich in agricultural trade",
    context: "the clay bricks kilns, grain merchants, and regional transport firms",
    nearby: ["sheikhpura", "munger", "begusarai", "jamui"]
  },
  {
    name: "Jamui",
    slug: "jamui",
    type: "growing",
    tagline: "the mineral-rich district hub of South-Eastern Bihar with growing business reach",
    context: "the sand supply networks, local hardware shops, and regional contractors",
    nearby: ["lakhisarai", "banka", "munger", "sheikhpura"]
  },
  {
    name: "Kishanganj",
    slug: "kishanganj",
    type: "growing",
    tagline: "the tea-growing capital of Bihar bordering West Bengal and Nepal",
    context: "the tea plantations, processing centers, and cross-border trade firms",
    nearby: ["araria", "purnia", "katihar", "supaul"]
  },
  {
    name: "Araria",
    slug: "araria",
    type: "growing",
    tagline: "the active border district trade hub in Seemanchal division",
    context: "the import-export companies, local retail networks, and crop traders",
    nearby: ["kishanganj", "purnia", "supaul", "madhepura"]
  },
  {
    name: "Munger",
    slug: "munger",
    type: "growing",
    tagline: "the twin city of Bhagalpur and the historic yoga capital on the Ganges",
    context: "the engineering workshops, yoga retreats, and local manufacturing firms",
    nearby: ["bhagalpur", "khagaria", "lakhisarai", "begusarai"]
  },
  {
    name: "Khagaria",
    slug: "khagaria",
    type: "growing",
    tagline: "the land of seven rivers with rich agricultural and dairy industry",
    context: "the dairy farms, food processing mills, and river transport firms",
    nearby: ["begusarai", "munger", "saharsa", "bhagalpur"]
  },
  {
    name: "Saharsa",
    slug: "saharsa",
    type: "growing",
    tagline: "the heart of Kosi division and active commercial hub of North-East Bihar",
    context: "the regional logistics offices, consumer goods firms, and local showrooms",
    nearby: ["supaul", "madhepura", "darbhanga", "khagaria"]
  },
  {
    name: "Supaul",
    slug: "supaul",
    type: "district",
    tagline: "the growing Kosi region center focused on flood-resilient agriculture and trade",
    context: "the local farming initiatives, crop trading, and development projects",
    nearby: ["saharsa", "madhepura", "madhubani", "araria"]
  },
  {
    name: "Madhepura",
    slug: "madhepura",
    type: "district",
    tagline: "the educational center and home of electric locomotive factory",
    context: "the industrial workshops, education groups, and local markets",
    nearby: ["saharsa", "supaul", "araria", "purnia"]
  },
  {
    name: "Vaishali",
    slug: "vaishali",
    type: "district",
    tagline: "the ancient republic and tourist hub of historical prominence",
    context: "the local tourism agencies, educational groups, and retail firms",
    nearby: ["hajipur", "muzaffarpur", "patna", "samastipur"]
  },
  {
    name: "Hajipur",
    slug: "hajipur",
    type: "district",
    tagline: "the twin city of Patna, active industrial park, and banana trade center",
    context: "the industrial warehouses, fruit trade companies, and local factories",
    nearby: ["patna", "vaishali", "muzaffarpur", "chapra"]
  },
  {
    name: "Bettiah",
    slug: "bettiah",
    type: "district",
    tagline: "the historic headquarters of West Champaran, rich in agricultural trading",
    context: "the agro-mills, sugarcane supply chains, and local wholesalers",
    nearby: ["motihari", "sitamarhi", "vaishali", "muzaffarpur"]
  },
  {
    name: "Motihari",
    slug: "motihari",
    type: "district",
    tagline: "the land of Satyagraha and active trade center of East Champaran",
    context: "the local colleges, retail showrooms, and crop trading agencies",
    nearby: ["bettiah", "sitamarhi", "vaishali", "muzaffarpur"]
  },
  {
    name: "Sitamarhi",
    slug: "sitamarhi",
    type: "district",
    tagline: "the sacred birthplace of Goddess Sita and Mithila trade node",
    context: "the religious tour operators, textile wholesalers, and local markets",
    nearby: ["shivhar", "madhubani", "muzaffarpur", "motihari"]
  },
  {
    name: "Shivhar",
    slug: "shivhar",
    type: "district",
    tagline: "the smallest district hub of Bihar, expanding its local retail economy",
    context: "the local retail outlets, rural services hubs, and farming trade",
    nearby: ["sitamarhi", "muzaffarpur", "motihari", "vaishali"]
  },
  {
    name: "Banka",
    slug: "banka",
    type: "district",
    tagline: "the scenic hill-border district of South Bihar with active granite sectors",
    context: "the granite mines, local tourist sites, and agricultural suppliers",
    nearby: ["bhagalpur", "jamui", "munger", "lakhisarai"]
  }
];

export function generateSlug(serviceSlug: string, citySlug: string): string {
  return `${serviceSlug}-company-in-${citySlug}`;
}

export interface LocalPageData {
  slug: string;
  serviceSlug: string;
  citySlug: string;
  cityName: string;
  serviceName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  aboutContent: string;
  whyChooseUs: { title: string; desc: string }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  nearbySlugs: { title: string; url: string }[];
  relatedServices: { title: string; url: string }[];
  schemas: any[];
}

export function getPagesList() {
  const list: { slug: string; serviceSlug: string; citySlug: string }[] = [];
  cities.forEach((city) => {
    Object.keys(services).forEach((serviceSlug) => {
      list.push({
        slug: generateSlug(serviceSlug, city.slug),
        serviceSlug,
        citySlug: city.slug
      });
    });
  });
  return list;
}

export function getContentBySlug(slug: string): LocalPageData | null {
  const page = getPagesList().find((p) => p.slug === slug);
  if (!page) return null;

  const city = cities.find((c) => c.slug === page.citySlug)!;
  const service = services[page.serviceSlug]!;

  const serviceName = service.name;
  const cityName = city.name;

  const h1 = `${serviceName} Company in ${cityName}`;
  const metaTitle = `${serviceName} Company in ${cityName} | Sabka Saathi`;
  const metaDescription = `Looking for the best ${serviceName} company in ${cityName}, Bihar? Sabka Saathi builds custom, high-performance digital systems for businesses in ${cityName}. Contact us today!`;

  const tagline = `Empowering ${cityName} with premium, scale-ready digital solutions. Based locally in Bihar, we help businesses in ${cityName} automate operations, drive client leads, and stand out.`;

  const aboutContent = `Sabka Saathi is the leading provider of custom ${serviceName} in ${cityName}, Bihar. As ${city.tagline}, ${cityName} is witnessing a massive transition to digital-first business operations. Our specialized technical team understands the specific opportunities within ${city.context}, allowing us to design highly customized platforms that streamline workflows, reduce administrative overhead, and build solid customer relationships. By combining local support with high-performance Next.js and cloud engineering, we ensure that businesses across ${cityName} get world-class software that performs flawlessly.`;

  const whyChooseUs = [
    {
      title: "Local Bihar Presence",
      desc: `We operate locally inside Bihar, meaning we understand the exact business landscape in ${cityName} and provide prompt support.`
    },
    {
      title: "Next.js Speed & Performance",
      desc: "Our web platforms are built using React and Next.js, achieving page load times under 1 second to improve conversions."
    },
    {
      title: "Customized Automation Systems",
      desc: "No boilerplate templates. We build custom admin dashboards, automated payment structures, and databases designed for you."
    },
    {
      title: "Unified WhatsApp API Integration",
      desc: `Connect directly with customers in ${cityName} by sending automated receipts, lead updates, and notifications via WhatsApp.`
    }
  ];

  const benefits = service.benefits;

  const faqs = [
    {
      q: `Why should I choose Sabka Saathi for ${serviceName} in ${cityName}?`,
      a: `Sabka Saathi is a Bihar-focused software development agency. We know the specific trade patterns and requirements of businesses in ${cityName}. We don't just write code; we design CRM systems, local payment setups, and fast web layers that directly support your local growth.`
    },
    {
      q: `What is the estimated cost of ${serviceName} in ${cityName}?`,
      a: `Our pricing is transparent and based on project scope. We construct custom minimum viable products (MVPs) designed for ${cityName} businesses, ensuring you only pay for features that add business value. Get in touch with us for a free technical estimation.`
    },
    {
      q: `How long will it take to build a ${serviceName} system?`,
      a: `Most custom projects are designed, built, and launched in 4 to 6 weeks. We work in agile development sprints, providing weekly progress updates and interactive preview builds so you are always in control.`
    },
    {
      q: `Do you provide support and maintenance in ${cityName}?`,
      a: `Yes! Every client gets 1 year of complimentary high-speed Vercel/AWS hosting and 1 year of active software maintenance to apply security updates, resolve minor bugs, and keep systems online.`
    },
    {
      q: `Can you integrate local payment processors like Razorpay for ${cityName} projects?`,
      a: `Absolutely. We integrate Razorpay, Stripe, and custom UPI gateway systems. This allows your customers in ${cityName} to make payments via credit cards, net banking, or UPI apps safely and securely.`
    },
    {
      q: `How do we get started?`,
      a: `Simply fill out our contact form or click Get Started. We will schedule a free discovery call to analyze your business goals, draft a system requirement plan, and outline a detailed development path.`
    }
  ];

  // Dynamic cross-linking (nearby cities and other services)
  const nearbySlugs = city.nearby.map((nearbySlug) => {
    const nearbyCity = cities.find((c) => c.slug === nearbySlug)!;
    return {
      title: `${serviceName} in ${nearbyCity.name}`,
      url: `/${generateSlug(page.serviceSlug, nearbySlug)}`
    };
  });

  const relatedServices = Object.keys(services)
    .filter((sSlug) => sSlug !== page.serviceSlug)
    .map((sSlug) => {
      const relService = services[sSlug]!;
      return {
        title: `${relService.name} in ${cityName}`,
        url: `/${generateSlug(sSlug, page.citySlug)}`
      };
    });

  // Schema generation
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://sabkasathi.com/${slug}#localbusiness`,
    "name": `Sabka Saathi - ${cityName} Software Hub`,
    "description": `${serviceName} services in ${cityName}, Bihar.`,
    "url": `https://sabkasathi.com/${slug}`,
    "telephone": "+91-9431673018",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressRegion": "Bihar",
      "addressCountry": "IN"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://sabkasathi.com/${slug}#service`,
    "name": `${serviceName} in ${cityName}`,
    "provider": {
      "@type": "Organization",
      "name": "Sabka Saathi",
      "url": "https://sabkasathi.com"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": cityName
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sabkasathi.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": `${serviceName} in ${cityName}`,
        "item": `https://sabkasathi.com/${slug}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return {
    slug,
    serviceSlug: page.serviceSlug,
    citySlug: page.citySlug,
    cityName,
    serviceName,
    metaTitle,
    metaDescription,
    h1,
    tagline,
    aboutContent,
    whyChooseUs,
    benefits,
    faqs,
    nearbySlugs,
    relatedServices,
    schemas: [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema]
  };
}
