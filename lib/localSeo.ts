export interface CityInfo {
  name: string;
  slug: string;
  state: string;
  type: 'major' | 'headquarters' | 'growing' | 'district';
  tagline: string;
  context: string;
  nearby: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  desc: string;
}

export interface ServiceInfo {
  name: string;
  slug: string;
  subtitle: string;
  tagline: string;
  features: string[];
  benefits: string[];
  description: string;
  process: ProcessStep[];
  techStack: string[];
  useCases: string[];
  deliverables: string[];
  timeline: string;
  idealFor: string[];
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
    ],
    process: [
      { step: 1, title: "Discovery & Wireframing", desc: "We map user flows, screens, and core features against your business goals before any code is written." },
      { step: 2, title: "UI/UX Design", desc: "High-fidelity Figma designs covering both iOS and Android design language, reviewed with you before development starts." },
      { step: 3, title: "App Development", desc: "Cross-platform build in React Native or Flutter, with weekly builds you can install and test on your own device." },
      { step: 4, title: "QA & Device Testing", desc: "Testing across multiple screen sizes, OS versions, and real network conditions to catch issues before launch." },
      { step: 5, title: "Store Submission", desc: "We handle Play Store and App Store listing, screenshots, and submission requirements end-to-end." },
      { step: 6, title: "Launch & Support", desc: "Post-launch monitoring, crash reporting, and a support window to fix issues that surface with real users." }
    ],
    techStack: ["React Native", "Flutter", "Firebase", "Node.js", "MongoDB", "Razorpay SDK", "Expo", "REST & GraphQL APIs"],
    useCases: [
      "On-demand service and booking apps",
      "Local marketplace and delivery apps",
      "Loyalty and rewards apps for retail chains",
      "Field staff and logistics tracking apps",
      "Community and membership apps"
    ],
    deliverables: [
      "Fully functional Android & iOS app",
      "Admin panel to manage app content and users",
      "Source code and documentation",
      "Play Store & App Store listing",
      "1 year of maintenance support"
    ],
    timeline: "4–8 weeks depending on feature scope",
    idealFor: ["Retail chains", "Service businesses", "Delivery & logistics", "Local marketplaces"]
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
    ],
    process: [
      { step: 1, title: "Strategy & Sitemap", desc: "We define pages, user journeys, and the keywords each page needs to rank for before design begins." },
      { step: 2, title: "Visual Design", desc: "A custom visual identity — not a template — designed around your brand and industry." },
      { step: 3, title: "Development", desc: "Built on Next.js for speed and SEO, with clean semantic markup search engines can actually parse." },
      { step: 4, title: "Content & SEO Setup", desc: "On-page SEO, meta tags, schema markup, and structured content baked in from the start." },
      { step: 5, title: "Testing & Launch", desc: "Cross-browser and mobile testing, performance audits, then deployment to production hosting." },
      { step: 6, title: "Post-Launch Support", desc: "Analytics setup, monitoring, and a support window for fixes and small updates." }
    ],
    techStack: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel Hosting", "Firebase / MongoDB"],
    useCases: [
      "Business & corporate websites",
      "Local service landing pages",
      "E-commerce storefronts",
      "Multi-location SEO landing pages",
      "Portfolio & agency sites"
    ],
    deliverables: [
      "Fully responsive, SEO-optimized website",
      "Content management setup",
      "Google Search Console & Analytics setup",
      "SSL, hosting, and domain configuration",
      "1 year of maintenance support"
    ],
    timeline: "1–3 weeks for standard sites, longer for custom builds",
    idealFor: ["Local businesses", "Startups", "Retailers", "Service providers"]
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
    ],
    process: [
      { step: 1, title: "Process Mapping", desc: "We study your current manual workflow to identify exactly what should be automated and how." },
      { step: 2, title: "System Architecture", desc: "Database schema, API structure, and access-control design planned before development." },
      { step: 3, title: "Core Development", desc: "Build of the admin dashboard, automation logic, and integrations (WhatsApp, payments, SMS)." },
      { step: 4, title: "Internal Testing", desc: "Testing with your real data and workflows so the system fits how your team actually works." },
      { step: 5, title: "Team Onboarding", desc: "Training sessions so your staff can use the system confidently from day one." },
      { step: 6, title: "Go-Live & Support", desc: "Production rollout with a support window for adjustments as real usage surfaces edge cases." }
    ],
    techStack: ["Node.js", "Express", "MongoDB", "PostgreSQL", "React", "WhatsApp Business API", "Razorpay", "AWS / Vercel"],
    useCases: [
      "Sales & lead management CRMs",
      "Inventory and billing systems",
      "Staff and attendance tracking tools",
      "Client onboarding automation",
      "Custom internal business dashboards"
    ],
    deliverables: [
      "Custom-built software system",
      "Admin dashboard with role-based access",
      "API documentation",
      "Data migration from existing systems (if any)",
      "1 year of maintenance support"
    ],
    timeline: "4–8 weeks depending on complexity",
    idealFor: ["Growing businesses", "Multi-branch operations", "Agencies", "Distributors & wholesalers"]
  }
};

/* ══════════════════════════════════════════════
   BIHAR
══════════════════════════════════════════════ */
const biharCities: CityInfo[] = [
  { name: "Patna", slug: "patna", state: "Bihar", type: "major", tagline: "the capital city and largest commercial hub of Bihar", context: "the city's expanding SaaS ecosystems, startup accelerators, and retail chains", nearby: ["gaya", "hajipur", "nalanda", "jehanabad"] },
  { name: "Gaya", slug: "gaya", state: "Bihar", type: "major", tagline: "the historical, cultural, and spiritual hub of South Bihar", context: "the region's international hotels, tourism operators, and educational networks", nearby: ["patna", "nawada", "jehanabad", "aurangabad"] },
  { name: "Muzaffarpur", slug: "muzaffarpur", state: "Bihar", type: "major", tagline: "the commercial hub of North Bihar and the sweet litchi capital", context: "the local agricultural processing plants, wholesale traders, and local enterprises", nearby: ["darbhanga", "samastipur", "hajipur", "sitamarhi"] },
  { name: "Darbhanga", slug: "darbhanga", state: "Bihar", type: "major", tagline: "the cultural capital of Mithilanchal and a growing medical hub", context: "the local Mithila art platforms, educational trusts, and retail networks", nearby: ["madhubani", "samastipur", "muzaffarpur", "saharsa"] },
  { name: "Bhagalpur", slug: "bhagalpur", state: "Bihar", type: "major", tagline: "the famous Silk City on the banks of the holy Ganges", context: "the silk handloom cooperative webs, retail brands, and education groups", nearby: ["munger", "banka", "khagaria", "purnia"] },
  { name: "Purnia", slug: "purnia", state: "Bihar", type: "major", tagline: "the gateway to Northeast India and the commercial hub of Seemanchal", context: "the regional logistics operations, grain merchants, and retail businesses", nearby: ["katihar", "araria", "kishanganj", "saharsa"] },
  { name: "Katihar", slug: "katihar", state: "Bihar", type: "major", tagline: "the prominent railway junction and growing trade center in Seemanchal", context: "the transportation sectors, warehouse facilities, and local wholesalers", nearby: ["purnia", "araria", "kishanganj", "munger"] },
  { name: "Begusarai", slug: "begusarai", state: "Bihar", type: "major", tagline: "the industrial capital of Bihar with active commercial sectors", context: "the manufacturing businesses, petroleum trade, and agricultural companies", nearby: ["khagaria", "samastipur", "lakhisarai", "patna"] },
  { name: "Ara", slug: "ara", state: "Bihar", type: "major", tagline: "the historical hub of Bhojpur and center of educational excellence", context: "the educational startups, coaching institutes, and local contractors", nearby: ["buxar", "patna", "sasaram", "siwan"] },
  { name: "Buxar", slug: "buxar", state: "Bihar", type: "headquarters", tagline: "the historic gateway city of Western Bihar on the Ganges border", context: "the border logistics operations, tourism startups, and agricultural traders", nearby: ["ara", "sasaram", "siwan", "buxar"] },
  { name: "Samastipur", slug: "samastipur", state: "Bihar", type: "headquarters", tagline: "the agricultural research hub and active business junction", context: "the regional crop trading markets, agricultural tech, and local transport networks", nearby: ["darbhanga", "muzaffarpur", "begusarai", "lakhisarai"] },
  { name: "Madhubani", slug: "madhubani", state: "Bihar", type: "headquarters", tagline: "the world-renowned center of Mithila art and heritage", context: "the handicraft stores, art export agencies, and rural cooperative businesses", nearby: ["darbhanga", "supaul", "sitamarhi", "saharsa"] },
  { name: "Siwan", slug: "siwan", state: "Bihar", type: "headquarters", tagline: "the growing commercial city of Saran division with strong remittance economy", context: "the real estate agencies, financial services, and retail showrooms", nearby: ["chapra", "ara", "siwan", "buxar"] },
  { name: "Chapra", slug: "chapra", state: "Bihar", type: "headquarters", tagline: "the prominent administrative hub on the confluence of Ghaghara and Ganges", context: "the administrative platforms, trade networks, and local service providers", nearby: ["siwan", "hajipur", "patna", "ara"] },
  { name: "Nalanda", slug: "nalanda", state: "Bihar", type: "headquarters", tagline: "the ancient seat of learning and world heritage tourism center", context: "the heritage tour agencies, private schools, and local handicraft shops", nearby: ["patna", "nawada", "sheikhpura", "jehanabad"] },
  { name: "Jehanabad", slug: "jehanabad", state: "Bihar", type: "headquarters", tagline: "the central district hub bridging Patna and Gaya business corridors", context: "the local retail marketplaces, clinics, and regional services centers", nearby: ["patna", "gaya", "nawada", "nalanda"] },
  { name: "Nawada", slug: "nawada", state: "Bihar", type: "headquarters", tagline: "the growing industrial and agricultural hub of South Bihar", context: "the building supply traders, milling businesses, and local retail stores", nearby: ["gaya", "nalanda", "jehanabad", "sheikhpura"] },
  { name: "Aurangabad", slug: "aurangabad", state: "Bihar", type: "headquarters", tagline: "the gateway of tourism and industry in South-Western Bihar", context: "the cement operations, local power line utilities, and retail stores", nearby: ["gaya", "sasaram", "jehanabad", "buxar"] },
  { name: "Sasaram", slug: "sasaram", state: "Bihar", type: "growing", tagline: "the historic city of Sher Shah Suri tomb and trade center in Rohtas", context: "the stone quarry networks, monument tourism agencies, and agro-retailers", nearby: ["buxar", "aurangabad", "ara", "gaya"] },
  { name: "Sheikhpura", slug: "sheikhpura", state: "Bihar", type: "growing", tagline: "the active stone-mining and growing retail hub of South-East Bihar", context: "the stone crushers, mineral suppliers, and local commercial shops", nearby: ["lakhisarai", "nalanda", "nawada", "jamui"] },
  { name: "Lakhisarai", slug: "lakhisarai", state: "Bihar", type: "growing", tagline: "the historic city on the banks of Kiul river, rich in agricultural trade", context: "the clay bricks kilns, grain merchants, and regional transport firms", nearby: ["sheikhpura", "munger", "begusarai", "jamui"] },
  { name: "Jamui", slug: "jamui", state: "Bihar", type: "growing", tagline: "the mineral-rich district hub of South-Eastern Bihar with growing business reach", context: "the sand supply networks, local hardware shops, and regional contractors", nearby: ["lakhisarai", "banka", "munger", "sheikhpura"] },
  { name: "Kishanganj", slug: "kishanganj", state: "Bihar", type: "growing", tagline: "the tea-growing capital of Bihar bordering West Bengal and Nepal", context: "the tea plantations, processing centers, and cross-border trade firms", nearby: ["araria", "purnia", "katihar", "supaul"] },
  { name: "Araria", slug: "araria", state: "Bihar", type: "growing", tagline: "the active border district trade hub in Seemanchal division", context: "the import-export companies, local retail networks, and crop traders", nearby: ["kishanganj", "purnia", "supaul", "madhepura"] },
  { name: "Munger", slug: "munger", state: "Bihar", type: "growing", tagline: "the twin city of Bhagalpur and the historic yoga capital on the Ganges", context: "the engineering workshops, yoga retreats, and local manufacturing firms", nearby: ["bhagalpur", "khagaria", "lakhisarai", "begusarai"] },
  { name: "Khagaria", slug: "khagaria", state: "Bihar", type: "growing", tagline: "the land of seven rivers with rich agricultural and dairy industry", context: "the dairy farms, food processing mills, and river transport firms", nearby: ["begusarai", "munger", "saharsa", "bhagalpur"] },
  { name: "Saharsa", slug: "saharsa", state: "Bihar", type: "growing", tagline: "the heart of Kosi division and active commercial hub of North-East Bihar", context: "the regional logistics offices, consumer goods firms, and local showrooms", nearby: ["supaul", "madhepura", "darbhanga", "khagaria"] },
  { name: "Supaul", slug: "supaul", state: "Bihar", type: "district", tagline: "the growing Kosi region center focused on flood-resilient agriculture and trade", context: "the local farming initiatives, crop trading, and development projects", nearby: ["saharsa", "madhepura", "madhubani", "araria"] },
  { name: "Madhepura", slug: "madhepura", state: "Bihar", type: "district", tagline: "the educational center and home of electric locomotive factory", context: "the industrial workshops, education groups, and local markets", nearby: ["saharsa", "supaul", "araria", "purnia"] },
  { name: "Vaishali", slug: "vaishali", state: "Bihar", type: "district", tagline: "the ancient republic and tourist hub of historical prominence", context: "the local tourism agencies, educational groups, and retail firms", nearby: ["hajipur", "muzaffarpur", "patna", "samastipur"] },
  { name: "Hajipur", slug: "hajipur", state: "Bihar", type: "district", tagline: "the twin city of Patna, active industrial park, and banana trade center", context: "the industrial warehouses, fruit trade companies, and local factories", nearby: ["patna", "vaishali", "muzaffarpur", "chapra"] },
  { name: "Bettiah", slug: "bettiah", state: "Bihar", type: "district", tagline: "the historic headquarters of West Champaran, rich in agricultural trading", context: "the agro-mills, sugarcane supply chains, and local wholesalers", nearby: ["motihari", "sitamarhi", "vaishali", "muzaffarpur"] },
  { name: "Motihari", slug: "motihari", state: "Bihar", type: "district", tagline: "the land of Satyagraha and active trade center of East Champaran", context: "the local colleges, retail showrooms, and crop trading agencies", nearby: ["bettiah", "sitamarhi", "vaishali", "muzaffarpur"] },
  { name: "Sitamarhi", slug: "sitamarhi", state: "Bihar", type: "district", tagline: "the sacred birthplace of Goddess Sita and Mithila trade node", context: "the religious tour operators, textile wholesalers, and local markets", nearby: ["shivhar", "madhubani", "muzaffarpur", "motihari"] },
  { name: "Shivhar", slug: "shivhar", state: "Bihar", type: "district", tagline: "the smallest district hub of Bihar, expanding its local retail economy", context: "the local retail outlets, rural services hubs, and farming trade", nearby: ["sitamarhi", "muzaffarpur", "motihari", "vaishali"] },
  { name: "Banka", slug: "banka", state: "Bihar", type: "district", tagline: "the scenic hill-border district of South Bihar with active granite sectors", context: "the granite mines, local tourist sites, and agricultural suppliers", nearby: ["bhagalpur", "jamui", "munger", "lakhisarai"] }
];

/* ══════════════════════════════════════════════
   MAHARASHTRA
══════════════════════════════════════════════ */
const maharashtraCities: CityInfo[] = [
  { name: "Mumbai", slug: "mumbai", state: "Maharashtra", type: "major", tagline: "the financial capital of India and largest business ecosystem in the country", context: "the city's fintech startups, D2C brands, and enterprise headquarters", nearby: ["navi-mumbai", "thane", "pune", "bhiwandi"] },
  { name: "Pune", slug: "pune", state: "Maharashtra", type: "major", tagline: "the IT and education hub of Western India", context: "the region's booming SaaS companies, ed-tech firms, and manufacturing units", nearby: ["mumbai", "solapur", "kolhapur", "ahmednagar"] },
  { name: "Nagpur", slug: "nagpur", state: "Maharashtra", type: "major", tagline: "the geographical center of India and a rising logistics hub", context: "the region's warehousing networks, orange trade, and manufacturing sector", nearby: ["amravati", "chandrapur", "akola", "latur"] },
  { name: "Nashik", slug: "nashik", state: "Maharashtra", type: "major", tagline: "the wine capital of India and a fast-growing industrial city", context: "the local vineyards, agro-processing units, and manufacturing clusters", nearby: ["dhule", "jalgaon", "ahmednagar", "mumbai"] },
  { name: "Thane", slug: "thane", state: "Maharashtra", type: "major", tagline: "the lake city and a major extension of the Mumbai business corridor", context: "the growing corporate parks, retail chains, and residential business hubs", nearby: ["mumbai", "navi-mumbai", "bhiwandi", "pune"] },
  { name: "Navi Mumbai", slug: "navi-mumbai", state: "Maharashtra", type: "major", tagline: "the planned business city and logistics gateway near JNPT port", context: "the IT parks, import-export trade, and corporate business centers", nearby: ["mumbai", "thane", "pune", "bhiwandi"] },
  { name: "Chhatrapati Sambhajinagar", slug: "chhatrapati-sambhajinagar", state: "Maharashtra", type: "headquarters", tagline: "a major industrial hub of the Marathwada region, formerly known as Aurangabad", context: "the auto-component manufacturers, tourism operators, and trading firms", nearby: ["jalna", "nashik", "latur", "parbhani"] },
  { name: "Solapur", slug: "solapur", state: "Maharashtra", type: "headquarters", tagline: "the textile and handloom hub of South Maharashtra", context: "the powerloom industries, textile traders, and local wholesalers", nearby: ["pune", "latur", "kolhapur", "ahmednagar"] },
  { name: "Amravati", slug: "amravati", state: "Maharashtra", type: "headquarters", tagline: "the cotton trade center and growing business hub of Vidarbha", context: "the cotton mills, agricultural traders, and regional retailers", nearby: ["nagpur", "akola", "chandrapur", "jalgaon"] },
  { name: "Kolhapur", slug: "kolhapur", state: "Maharashtra", type: "headquarters", tagline: "the industrial and jaggery trade hub of South Maharashtra", context: "the foundry industries, sugar cooperatives, and local manufacturers", nearby: ["sangli", "pune", "ichalkaranji", "solapur"] },
  { name: "Sangli", slug: "sangli", state: "Maharashtra", type: "headquarters", tagline: "the turmeric trading capital and an agricultural business center", context: "the turmeric markets, grape exporters, and local processing units", nearby: ["kolhapur", "ichalkaranji", "solapur", "pune"] },
  { name: "Jalgaon", slug: "jalgaon", state: "Maharashtra", type: "growing", tagline: "the banana and gold trading hub of North Maharashtra", context: "the banana export businesses, gold traders, and agro-processing firms", nearby: ["dhule", "nashik", "amravati", "akola"] },
  { name: "Akola", slug: "akola", state: "Maharashtra", type: "growing", tagline: "the agricultural trading center of the Vidarbha cotton belt", context: "the cotton ginning mills, grain markets, and regional traders", nearby: ["amravati", "nagpur", "jalgaon", "chandrapur"] },
  { name: "Latur", slug: "latur", state: "Maharashtra", type: "growing", tagline: "the soybean and dal milling capital of Maharashtra", context: "the dal mills, seed companies, and agricultural trading firms", nearby: ["nanded", "solapur", "parbhani", "chhatrapati-sambhajinagar"] },
  { name: "Dhule", slug: "dhule", state: "Maharashtra", type: "growing", tagline: "the trade junction city of North Maharashtra bordering Gujarat and MP", context: "the local logistics firms, agro-traders, and retail businesses", nearby: ["nashik", "jalgaon", "malegaon", "ahmednagar"] },
  { name: "Ahmednagar", slug: "ahmednagar", state: "Maharashtra", type: "growing", tagline: "one of India's largest districts with strong sugar and dairy industries", context: "the sugar factories, dairy cooperatives, and agri-business networks", nearby: ["pune", "nashik", "solapur", "chhatrapati-sambhajinagar"] },
  { name: "Chandrapur", slug: "chandrapur", state: "Maharashtra", type: "growing", tagline: "the coal and industrial hub of Eastern Vidarbha", context: "the power plants, coal mining firms, and industrial suppliers", nearby: ["nagpur", "amravati", "akola", "chhatrapati-sambhajinagar"] },
  { name: "Nanded", slug: "nanded", state: "Maharashtra", type: "growing", tagline: "a major pilgrimage city and trade center of Marathwada", context: "the pilgrimage tourism trade, textile shops, and local businesses", nearby: ["latur", "parbhani", "jalna", "chhatrapati-sambhajinagar"] },
  { name: "Malegaon", slug: "malegaon", state: "Maharashtra", type: "district", tagline: "a major powerloom textile town of North Maharashtra", context: "the powerloom clusters, textile traders, and local wholesalers", nearby: ["nashik", "dhule", "jalgaon", "ahmednagar"] },
  { name: "Ichalkaranji", slug: "ichalkaranji", state: "Maharashtra", type: "district", tagline: "a key textile manufacturing town known as the Manchester of Maharashtra", context: "the textile mills, garment exporters, and local trading firms", nearby: ["kolhapur", "sangli", "solapur", "pune"] },
  { name: "Parbhani", slug: "parbhani", state: "Maharashtra", type: "district", tagline: "an agricultural university town and trade center of Marathwada", context: "the agri-research institutions, grain markets, and local retailers", nearby: ["nanded", "latur", "jalna", "chhatrapati-sambhajinagar"] },
  { name: "Jalna", slug: "jalna", state: "Maharashtra", type: "district", tagline: "the steel and seed processing hub of Marathwada", context: "the steel rolling mills, seed companies, and agro-industries", nearby: ["chhatrapati-sambhajinagar", "nanded", "parbhani", "jalgaon"] },
  { name: "Bhiwandi", slug: "bhiwandi", state: "Maharashtra", type: "district", tagline: "the powerloom and logistics warehousing hub near Mumbai", context: "the powerloom units, warehousing companies, and transport firms", nearby: ["mumbai", "thane", "navi-mumbai", "pune"] }
];

export const cities: CityInfo[] = [...biharCities, ...maharashtraCities];

export function generateSlug(serviceSlug: string, citySlug: string): string {
  return `${serviceSlug}-company-in-${citySlug}`;
}

export interface LocalPageData {
  slug: string;
  serviceSlug: string;
  citySlug: string;
  cityName: string;
  state: string;
  serviceName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  aboutContent: string;
  whyChooseUs: { title: string; desc: string }[];
  benefits: string[];
  features: string[];
  process: ProcessStep[];
  techStack: string[];
  useCases: string[];
  deliverables: string[];
  timeline: string;
  idealFor: string[];
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
  const state = city.state;

  const h1 = `${serviceName} Company in ${cityName}`;
  const metaTitle = `${serviceName} Company in ${cityName}, ${state} | Sabka Saathi`;
  const metaDescription = `Looking for the best ${serviceName} company in ${cityName}, ${state}? Sabka Saathi builds custom, high-performance digital systems for businesses in ${cityName}. Contact us today!`;

  const tagline = `Empowering ${cityName} with premium, scale-ready digital solutions. We help businesses across ${state} automate operations, drive client leads, and stand out.`;

  const aboutContent = `Sabka Saathi is a trusted provider of custom ${serviceName} in ${cityName}, ${state}. As ${city.tagline}, ${cityName} is witnessing a rapid transition to digital-first business operations. Our technical team understands the specific opportunities within ${city.context}, allowing us to design highly customized platforms that streamline workflows, reduce administrative overhead, and build solid customer relationships. By combining local market understanding with high-performance Next.js and cloud engineering, we ensure that businesses across ${cityName} get world-class software that performs flawlessly.`;

  const whyChooseUs = [
    {
      title: `Dedicated Support for ${state}`,
      desc: `We understand the business landscape of ${cityName} and ${state} closely, and provide prompt, responsive support throughout your project.`
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

  const faqs = [
    {
      q: `Why should I choose Sabka Saathi for ${serviceName} in ${cityName}?`,
      a: `Sabka Saathi is a digital services agency serving businesses across India, including ${cityName}, ${state}. We know the specific trade patterns and requirements of local businesses. We don't just write code; we design CRM systems, local payment setups, and fast web layers that directly support your growth.`
    },
    {
      q: `What is the estimated cost of ${serviceName} in ${cityName}?`,
      a: `Our pricing is transparent and based on project scope. We construct custom minimum viable products (MVPs) designed for ${cityName} businesses, ensuring you only pay for features that add business value. Get in touch with us for a free technical estimation.`
    },
    {
      q: `How long will it take to build a ${serviceName} system?`,
      a: `Most custom projects are designed, built, and launched in ${service.timeline}. We work in agile development sprints, providing weekly progress updates and interactive preview builds so you are always in control.`
    },
    {
      q: `Do you provide support and maintenance in ${cityName}?`,
      a: `Yes! Every client gets 1 year of complimentary high-speed hosting and 1 year of active software maintenance to apply security updates, resolve minor bugs, and keep systems online.`
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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://sabkasathi.com/${slug}#localbusiness`,
    "name": `Sabka Saathi - ${cityName} Software Hub`,
    "description": `${serviceName} services in ${cityName}, ${state}.`,
    "url": `https://sabkasathi.com/${slug}`,
    "telephone": "+91-9431673018",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressRegion": state,
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
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sabkasathi.com" },
      { "@type": "ListItem", "position": 2, "name": `${serviceName} in ${cityName}`, "item": `https://sabkasathi.com/${slug}` }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  return {
    slug,
    serviceSlug: page.serviceSlug,
    citySlug: page.citySlug,
    cityName,
    state,
    serviceName,
    metaTitle,
    metaDescription,
    h1,
    tagline,
    aboutContent,
    whyChooseUs,
    benefits: service.benefits,
    features: service.features,
    process: service.process,
    techStack: service.techStack,
    useCases: service.useCases,
    deliverables: service.deliverables,
    timeline: service.timeline,
    idealFor: service.idealFor,
    faqs,
    nearbySlugs,
    relatedServices,
    schemas: [localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema]
  };
}