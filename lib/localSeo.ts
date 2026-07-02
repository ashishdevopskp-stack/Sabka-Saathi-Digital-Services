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

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string;
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
  industries: string[];
}

// Fill in your real business details once here — every generated page pulls from this.
// NOTE: address should be your one real, physical HQ address. Schema markup
// below uses this single real address plus an "areaServed" field per page,
// instead of pretending to have a branch office in every city — claiming a
// local presence you don't have violates Google's spam policies and risks a
// site-wide ranking penalty.
export const contactInfo: ContactInfo = {
  phone: "+91-9431673018",
  email: "TODO: your email address",
  address: "TODO: your real business address (single HQ)",
  hours: "TODO: your business hours"
};

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
    idealFor: ["Retail chains", "Service businesses", "Delivery & logistics", "Local marketplaces"],
    industries: ["Education", "Healthcare", "E-commerce & retail", "Real estate", "Local services & field teams"]
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
    idealFor: ["Local businesses", "Startups", "Retailers", "Service providers"],
    industries: ["Local services", "Retail & e-commerce", "Hospitality & tourism", "Education", "Professional services"]
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
    idealFor: ["Growing businesses", "Multi-branch operations", "Agencies", "Distributors & wholesalers"],
    industries: ["Distribution & wholesale", "Agencies", "Multi-branch retail", "Manufacturing", "Professional services"]
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
   JHARKHAND
══════════════════════════════════════════════ */
const jharkhandCities: CityInfo[] = [
  { name: "Ranchi", slug: "ranchi", state: "Jharkhand", type: "major", tagline: "the capital city of Jharkhand and the state's administrative and business center", context: "the government contractor networks, private hospitals, and expanding retail chains", nearby: ["jamshedpur", "bokaro", "hazaribagh", "ramgarh"] },
  { name: "Jamshedpur", slug: "jamshedpur", state: "Jharkhand", type: "major", tagline: "India's first planned industrial city and steel manufacturing capital", context: "the steel plant ancillary units, engineering firms, and corporate townships", nearby: ["ranchi", "chaibasa", "bokaro", "dhanbad"] },
  { name: "Dhanbad", slug: "dhanbad", state: "Jharkhand", type: "major", tagline: "the coal capital of India and a major mining and engineering hub", context: "the coal trading firms, mining equipment suppliers, and engineering colleges", nearby: ["bokaro", "ranchi", "jamshedpur", "giridih"] },
  { name: "Bokaro", slug: "bokaro", state: "Jharkhand", type: "headquarters", tagline: "a planned steel city built around one of Asia's largest steel plants", context: "the steel ancillary units, township retailers, and engineering suppliers", nearby: ["dhanbad", "ranchi", "ramgarh", "jamshedpur"] },
  { name: "Deoghar", slug: "deoghar", state: "Jharkhand", type: "headquarters", tagline: "a major pilgrimage city centered on the Baidyanath Jyotirlinga temple", context: "the pilgrimage tourism trade, hospitality businesses, and local retailers", nearby: ["hazaribagh", "ranchi", "giridih", "dumka"] },
  { name: "Hazaribagh", slug: "hazaribagh", state: "Jharkhand", type: "headquarters", tagline: "a scenic plateau city known for wildlife tourism and coal-belt trade", context: "the tourism operators, coal supply chains, and local educational institutions", nearby: ["ranchi", "bokaro", "giridih", "deoghar"] },
  { name: "Giridih", slug: "giridih", state: "Jharkhand", type: "growing", tagline: "a mica and coal mining town with an expanding local trading economy", context: "the mica export traders, coal depots, and regional wholesalers", nearby: ["dhanbad", "hazaribagh", "deoghar", "bokaro"] },
  { name: "Ramgarh", slug: "ramgarh", state: "Jharkhand", type: "growing", tagline: "an industrial cantonment town with growing coal and cement trade", context: "the cement dealerships, coal transporters, and local manufacturing units", nearby: ["ranchi", "bokaro", "hazaribagh", "dhanbad"] },
  { name: "Chaibasa", slug: "chaibasa", state: "Jharkhand", type: "district", tagline: "a mineral-rich district headquarters at the heart of the Kolhan region", context: "the iron ore trading firms, tribal cooperative businesses, and local markets", nearby: ["jamshedpur", "ranchi", "bokaro", "dhanbad"] },
  { name: "Dumka", slug: "dumka", state: "Jharkhand", type: "district", tagline: "the sub-capital of Jharkhand and administrative center of the Santhal Pargana", context: "the government offices, agricultural traders, and local retail markets", nearby: ["deoghar", "giridih", "hazaribagh", "ranchi"] }
];

/* ══════════════════════════════════════════════
   UTTAR PRADESH
══════════════════════════════════════════════ */
const upCities: CityInfo[] = [
  { name: "Lucknow", slug: "lucknow", state: "Uttar Pradesh", type: "major", tagline: "the capital city of Uttar Pradesh and a major North Indian business hub", context: "the state government ecosystem, ed-tech startups, and expanding retail chains", nearby: ["kanpur", "noida", "gorakhpur", "bareilly"] },
  { name: "Kanpur", slug: "kanpur", state: "Uttar Pradesh", type: "major", tagline: "the leather and textile manufacturing capital of North India", context: "the leather export houses, textile mills, and industrial trading firms", nearby: ["lucknow", "jhansi", "aligarh", "prayagraj"] },
  { name: "Noida", slug: "noida", state: "Uttar Pradesh", type: "major", tagline: "a planned satellite city of Delhi NCR and a major IT and startup hub", context: "the IT parks, corporate offices, and fast-growing D2C brands", nearby: ["ghaziabad", "delhi", "gurugram", "meerut"] },
  { name: "Ghaziabad", slug: "ghaziabad", state: "Uttar Pradesh", type: "major", tagline: "an industrial gateway city bordering Delhi with strong manufacturing trade", context: "the manufacturing units, logistics hubs, and wholesale markets", nearby: ["noida", "meerut", "delhi", "moradabad"] },
  { name: "Agra", slug: "agra", state: "Uttar Pradesh", type: "major", tagline: "the home of the Taj Mahal and a major global tourism destination", context: "the tourism and hospitality trade, leather footwear exporters, and handicraft businesses", nearby: ["mathura", "aligarh", "firozabad", "kanpur"] },
  { name: "Varanasi", slug: "varanasi", state: "Uttar Pradesh", type: "major", tagline: "one of the world's oldest living cities and a major pilgrimage and silk trade center", context: "the silk weaving cooperatives, pilgrimage tourism operators, and local retailers", nearby: ["prayagraj", "gorakhpur", "faizabad", "lucknow"] },
  { name: "Prayagraj", slug: "prayagraj", state: "Uttar Pradesh", type: "major", tagline: "a historic administrative and educational center on the Ganges-Yamuna confluence", context: "the coaching institute networks, legal and administrative services, and local retail", nearby: ["varanasi", "kanpur", "faizabad", "lucknow"] },
  { name: "Meerut", slug: "meerut", state: "Uttar Pradesh", type: "headquarters", tagline: "a sports goods manufacturing hub and gateway city of Western UP", context: "the sports goods exporters, scissor and instrument manufacturers, and local traders", nearby: ["ghaziabad", "noida", "muzaffarnagar", "saharanpur"] },
  { name: "Gorakhpur", slug: "gorakhpur", state: "Uttar Pradesh", type: "headquarters", tagline: "a major railway junction and trade gateway to the Nepal border", context: "the cross-border trade firms, railway ancillary businesses, and local retail", nearby: ["lucknow", "varanasi", "faizabad", "prayagraj"] },
  { name: "Bareilly", slug: "bareilly", state: "Uttar Pradesh", type: "headquarters", tagline: "a furniture and zari-craft manufacturing hub of Rohilkhand", context: "the furniture manufacturers, zari craft exporters, and local wholesalers", nearby: ["moradabad", "lucknow", "rampur", "shahjahanpur"] },
  { name: "Aligarh", slug: "aligarh", state: "Uttar Pradesh", type: "headquarters", tagline: "the lock manufacturing capital of India and a prominent educational city", context: "the lock and hardware manufacturers, brass industries, and university-linked businesses", nearby: ["agra", "mathura", "kanpur", "noida"] },
  { name: "Moradabad", slug: "moradabad", state: "Uttar Pradesh", type: "headquarters", tagline: "the brassware export capital of India, known globally as Pital Nagri", context: "the brassware export houses, metal craft units, and local trading firms", nearby: ["bareilly", "rampur", "ghaziabad", "meerut"] },
  { name: "Saharanpur", slug: "saharanpur", state: "Uttar Pradesh", type: "growing", tagline: "a wood-carving and furniture export hub bordering Uttarakhand", context: "the wood-carving export units, furniture workshops, and local traders", nearby: ["meerut", "muzaffarnagar", "ghaziabad", "bareilly"] },
  { name: "Jhansi", slug: "jhansi", state: "Uttar Pradesh", type: "growing", tagline: "a historic fort city and railway junction gateway to Bundelkhand", context: "the railway ancillary trade, agricultural markets, and local retail businesses", nearby: ["kanpur", "agra", "lucknow", "prayagraj"] },
  { name: "Muzaffarnagar", slug: "muzaffarnagar", state: "Uttar Pradesh", type: "growing", tagline: "a sugar mill hub and major agricultural trading town of Western UP", context: "the sugar mills, jaggery traders, and agricultural equipment dealers", nearby: ["meerut", "saharanpur", "ghaziabad", "noida"] },
  { name: "Firozabad", slug: "firozabad", state: "Uttar Pradesh", type: "growing", tagline: "the glass and bangle manufacturing capital of India", context: "the glass bangle factories, export houses, and local wholesalers", nearby: ["agra", "aligarh", "mathura", "kanpur"] },
  { name: "Faizabad", slug: "faizabad", state: "Uttar Pradesh", type: "district", tagline: "the twin city of Ayodhya and a rapidly growing pilgrimage trade center", context: "the pilgrimage tourism operators, hospitality businesses, and local retailers", nearby: ["gorakhpur", "varanasi", "prayagraj", "lucknow"] },
  { name: "Mathura", slug: "mathura", state: "Uttar Pradesh", type: "district", tagline: "a major pilgrimage city and processed-food trading hub on the Delhi-Agra corridor", context: "the pilgrimage tourism trade, dairy processing units, and local wholesalers", nearby: ["agra", "aligarh", "firozabad", "noida"] },
  { name: "Rampur", slug: "rampur", state: "Uttar Pradesh", type: "district", tagline: "a heritage city known for its patchwork craft and agricultural trade", context: "the patchwork and craft export units, agricultural traders, and local markets", nearby: ["moradabad", "bareilly", "meerut", "ghaziabad"] },
  { name: "Shahjahanpur", slug: "shahjahanpur", state: "Uttar Pradesh", type: "district", tagline: "a Rohilkhand agricultural town known for perfume and menthol trade", context: "the menthol and essential oil traders, agricultural mills, and local retail", nearby: ["bareilly", "lucknow", "kanpur", "moradabad"] }
];

/* ══════════════════════════════════════════════
   WEST BENGAL
══════════════════════════════════════════════ */
const wbCities: CityInfo[] = [
  { name: "Kolkata", slug: "kolkata", state: "West Bengal", type: "major", tagline: "the capital of West Bengal and the primary commercial hub of Eastern India", context: "the corporate headquarters, trading houses, and expanding D2C and retail brands", nearby: ["howrah", "durgapur", "asansol", "siliguri"] },
  { name: "Howrah", slug: "howrah", state: "West Bengal", type: "major", tagline: "the twin city of Kolkata and a major railway and manufacturing hub", context: "the engineering workshops, railway ancillary firms, and wholesale markets", nearby: ["kolkata", "durgapur", "asansol", "bardhaman"] },
  { name: "Durgapur", slug: "durgapur", state: "West Bengal", type: "major", tagline: "a major steel and industrial township of West Bengal", context: "the steel plant ancillary units, engineering firms, and township retailers", nearby: ["asansol", "kolkata", "howrah", "bardhaman"] },
  { name: "Asansol", slug: "asansol", state: "West Bengal", type: "major", tagline: "a coal-belt industrial city and second-largest urban center in West Bengal", context: "the coal trading firms, steel ancillary businesses, and local wholesalers", nearby: ["durgapur", "kolkata", "howrah", "bardhaman"] },
  { name: "Siliguri", slug: "siliguri", state: "West Bengal", type: "major", tagline: "the gateway to Northeast India and a major trade corridor city", context: "the cross-border trade firms, tea and timber traders, and logistics operators", nearby: ["kolkata", "malda", "kishanganj", "darbhanga"] },
  { name: "Bardhaman", slug: "bardhaman", state: "West Bengal", type: "headquarters", tagline: "a major rice-milling hub and agricultural trade center of West Bengal", context: "the rice mills, agricultural traders, and local wholesale markets", nearby: ["durgapur", "asansol", "kolkata", "howrah"] },
  { name: "Kharagpur", slug: "kharagpur", state: "West Bengal", type: "headquarters", tagline: "a major railway township and technical education hub", context: "the railway ancillary trade, engineering colleges, and local retailers", nearby: ["kolkata", "howrah", "durgapur", "bardhaman"] },
  { name: "Malda", slug: "malda", state: "West Bengal", type: "headquarters", tagline: "the mango orchard capital and a growing trade town of North Bengal", context: "the mango export traders, silk businesses, and local wholesalers", nearby: ["siliguri", "kishanganj", "katihar", "kolkata"] },
  { name: "Baharampur", slug: "baharampur", state: "West Bengal", type: "growing", tagline: "a silk trading town and administrative center of Murshidabad district", context: "the silk trading houses, handicraft businesses, and local markets", nearby: ["malda", "bardhaman", "kolkata", "krishnanagar"] },
  { name: "Krishnanagar", slug: "krishnanagar", state: "West Bengal", type: "growing", tagline: "a heritage town known for clay art craftsmanship and local trade", context: "the clay art export units, local handicraft shops, and regional traders", nearby: ["kolkata", "baharampur", "bardhaman", "howrah"] }
];

/* ══════════════════════════════════════════════
   DELHI NCR (Delhi + Haryana satellite cities)
══════════════════════════════════════════════ */
const delhiNcrCities: CityInfo[] = [
  { name: "Delhi", slug: "delhi", state: "Delhi", type: "major", tagline: "the national capital and one of the largest business and consumer markets in India", context: "the corporate headquarters, government-linked enterprises, and fast-scaling D2C brands", nearby: ["gurugram", "noida", "faridabad", "ghaziabad"] },
  { name: "Gurugram", slug: "gurugram", state: "Haryana", type: "major", tagline: "a major corporate and IT hub bordering Delhi, home to Fortune 500 offices", context: "the corporate parks, IT consulting firms, and fast-growing startups", nearby: ["delhi", "faridabad", "noida", "panipat"] },
  { name: "Faridabad", slug: "faridabad", state: "Haryana", type: "major", tagline: "a major industrial city in Delhi NCR with a strong manufacturing base", context: "the manufacturing units, ancillary suppliers, and wholesale trading firms", nearby: ["delhi", "gurugram", "noida", "panipat"] },
  { name: "Panipat", slug: "panipat", state: "Haryana", type: "headquarters", tagline: "the textile and handloom export capital of North India", context: "the textile export houses, handloom weavers, and local wholesalers", nearby: ["karnal", "delhi", "faridabad", "hisar"] },
  { name: "Karnal", slug: "karnal", state: "Haryana", type: "headquarters", tagline: "the rice bowl of India and an agricultural research and trade hub", context: "the rice mills, agricultural research institutions, and local traders", nearby: ["panipat", "hisar", "delhi", "gurugram"] },
  { name: "Hisar", slug: "hisar", state: "Haryana", type: "growing", tagline: "a growing steel and agricultural trading center of Western Haryana", context: "the steel rolling mills, agricultural traders, and local wholesalers", nearby: ["karnal", "panipat", "delhi", "gurugram"] }
];

/* ══════════════════════════════════════════════
   KARNATAKA
══════════════════════════════════════════════ */
const karnatakaCities: CityInfo[] = [
  { name: "Bengaluru", slug: "bengaluru", state: "Karnataka", type: "major", tagline: "India's Silicon Valley and the country's largest technology and startup hub", context: "the IT parks, venture-backed startups, and enterprise SaaS companies", nearby: ["mysuru", "hubballi-dharwad", "mangaluru", "davanagere"] },
  { name: "Mysuru", slug: "mysuru", state: "Karnataka", type: "major", tagline: "a heritage city and growing IT and tourism hub of South Karnataka", context: "the tourism operators, IT ancillary firms, and heritage retail businesses", nearby: ["bengaluru", "davanagere", "shivamogga", "mangaluru"] },
  { name: "Hubballi-Dharwad", slug: "hubballi-dharwad", state: "Karnataka", type: "major", tagline: "the commercial and educational twin-city hub of North Karnataka", context: "the cotton and grain trading firms, educational institutions, and local retail", nearby: ["ballari", "belagavi", "davanagere", "bengaluru"] },
  { name: "Mangaluru", slug: "mangaluru", state: "Karnataka", type: "major", tagline: "a major port city and banking hub on the Karnataka coast", context: "the port logistics firms, banking institutions, and cashew and spice exporters", nearby: ["bengaluru", "mysuru", "shivamogga", "hubballi-dharwad"] },
  { name: "Belagavi", slug: "belagavi", state: "Karnataka", type: "headquarters", tagline: "a border trade city linking Karnataka and Maharashtra with strong manufacturing", context: "the foundry industries, sugar cooperatives, and cross-border trading firms", nearby: ["hubballi-dharwad", "davanagere", "ballari", "bengaluru"] },
  { name: "Davanagere", slug: "davanagere", state: "Karnataka", type: "headquarters", tagline: "a central Karnataka trade hub known for its cotton and edible oil mills", context: "the cotton ginning mills, edible oil traders, and local wholesalers", nearby: ["bengaluru", "hubballi-dharwad", "shivamogga", "ballari"] },
  { name: "Ballari", slug: "ballari", state: "Karnataka", type: "growing", tagline: "an iron-ore mining hub and industrial trade center of North Karnataka", context: "the iron ore mining firms, steel ancillary units, and regional traders", nearby: ["hubballi-dharwad", "davanagere", "belagavi", "bengaluru"] },
  { name: "Shivamogga", slug: "shivamogga", state: "Karnataka", type: "growing", tagline: "the gateway to the Western Ghats and an areca nut trading center", context: "the areca nut traders, agro-processing units, and local wholesalers", nearby: ["mysuru", "mangaluru", "davanagere", "bengaluru"] }
];

export const cities: CityInfo[] = [
  ...biharCities,
  ...jharkhandCities,
  ...upCities,
  ...wbCities,
  ...delhiNcrCities,
  ...karnatakaCities
];

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
  whyThisCity: string;
  whyChooseUs: { title: string; desc: string }[];
  benefits: string[];
  features: string[];
  process: ProcessStep[];
  techStack: string[];
  useCases: string[];
  deliverables: string[];
  timeline: string;
  idealFor: string[];
  industries: string[];
  contactInfo: ContactInfo;
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

  const aboutContent = `Sabka Saathi provides remote ${serviceName.toLowerCase()} services to businesses in ${cityName}, ${state}. As ${city.tagline}, ${cityName} is witnessing a rapid transition to digital-first business operations. Our technical team studies the specific opportunities within ${city.context}, allowing us to design highly customized platforms that streamline workflows, reduce administrative overhead, and build solid customer relationships — all delivered through remote discovery calls, design reviews, and weekly builds.`;

  // A second, distinct paragraph that leads with the city's own economic
  // identity rather than repeating the service name — this is what gives
  // each page unique substance instead of reading like a keyword template.
  const whyThisCity = `${cityName} is ${city.tagline}. That identity shapes what businesses here actually need from technology: teams built around ${city.context} are usually solving for reliability, local trust, and fast turnaround — not generic software. We design every ${serviceName.toLowerCase()} project around that reality, so what we ship fits how ${cityName} businesses already operate rather than forcing a one-size-fits-all system onto them.`;

  const whyChooseUs = [
    {
      title: `Remote Delivery, Local Understanding of ${state}`,
      desc: `We work with clients across ${cityName} and ${state} entirely through remote discovery calls, design reviews, and weekly builds — no travel overhead passed on to you.`
    },
    {
      title: "Next.js Speed & Performance",
      desc: "Our web platforms are built using React and Next.js, targeting page load times under 1 second to improve conversions."
    },
    {
      title: "Customized Automation Systems",
      desc: "No boilerplate templates. We build custom admin dashboards, automated payment structures, and databases designed for you."
    },
    {
      title: "Unified WhatsApp API Integration",
      desc: `Connect directly with customers in ${cityName} by sending automated receipts, lead updates, and notifications via WhatsApp.`
    },
    {
      title: "Predictable, Fast Turnaround",
      desc: `Most ${serviceName.toLowerCase()} projects for ${cityName} clients are scoped, built, and launched within ${service.timeline}, with weekly progress you can review yourself.`
    }
  ];

  const faqs = [
    {
      q: `Why should I choose Sabka Saathi for ${serviceName} in ${cityName}?`,
      a: `Sabka Saathi is a digital services agency serving businesses across India, including ${cityName}, ${state}. We study the specific trade patterns and requirements of local businesses. We don't just write code; we design CRM systems, local payment setups, and fast web layers that directly support your growth.`
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
      q: `Do you provide support and maintenance for clients in ${cityName}?`,
      a: `Yes! Every client gets 1 year of complimentary high-speed hosting and 1 year of active software maintenance to apply security updates, resolve minor bugs, and keep systems online.`
    },
    {
      q: `Can you integrate local payment processors like Razorpay for ${cityName} projects?`,
      a: `Absolutely. We integrate Razorpay, Stripe, and custom UPI gateway systems. This allows your customers in ${cityName} to make payments via credit cards, net banking, or UPI apps safely and securely.`
    },
    {
      q: `How do we get started?`,
      a: `Simply fill out our contact form or click Get Started. We will schedule a free discovery call to analyze your business goals, draft a system requirement plan, and outline a detailed development path.`
    },
    {
      q: `What technologies do you use for ${serviceName.toLowerCase()} projects in ${cityName}?`,
      a: `We build on ${service.techStack.slice(0, 4).join(", ")}, among other tools chosen for the specific project. Our stack is picked for performance and long-term maintainability, not just what's trendy.`
    },
    {
      q: `Which industries in ${cityName} do you typically work with?`,
      a: `We've delivered ${serviceName.toLowerCase()} projects for businesses across ${service.industries.slice(0, 3).join(", ")}, and other sectors. If your business doesn't fit neatly into a category, we still start with the same discovery process to understand what you actually need.`
    },
    {
      q: `Do you have a physical office in ${cityName}?`,
      a: `No — we run one HQ and serve clients across India, including ${cityName}, remotely. Discovery calls, design reviews, and weekly builds all happen online, so you get the same close working process regardless of location.`
    },
    {
      q: `What happens after the support window ends?`,
      a: `You're never locked out. You keep full source code and documentation, and you can renew a maintenance plan, bring in your own developer, or move to a different provider — the system is built to be maintainable by anyone, not just us.`
    },
    {
      q: `What does the ${serviceName.toLowerCase()} package for ${cityName} businesses include?`,
      a: `Every project includes ${service.deliverables.slice(0, 3).join(", ").toLowerCase()}, and more — see the deliverables list on this page for the full scope.`
    },
    {
      q: `Is ${serviceName} in ${cityName} suitable for a small or early-stage business?`,
      a: `Yes. We scope every project to the client's stage — ${service.idealFor.slice(0, 2).join(" and ").toLowerCase()} are among the businesses we work with most, and we're happy to start small and grow the system with you.`
    }
  ];

  // Defensive: filter out any `nearby` slug that doesn't resolve to a real
  // city, instead of crashing the whole static build if the data drifts
  // out of sync (e.g. a nearby slug referencing a city that was never
  // added to the `cities` array).
  const nearbySlugs = city.nearby
    .map((nearbySlug) => cities.find((c) => c.slug === nearbySlug))
    .filter((c): c is CityInfo => Boolean(c))
    .map((nearbyCity) => ({
      title: `${serviceName} in ${nearbyCity.name}`,
      url: `/${generateSlug(page.serviceSlug, nearbyCity.slug)}`
    }));

  const relatedServices = Object.keys(services)
    .filter((sSlug) => sSlug !== page.serviceSlug)
    .map((sSlug) => {
      const relService = services[sSlug]!;
      return {
        title: `${relService.name} in ${cityName}`,
        url: `/${generateSlug(sSlug, page.citySlug)}`
      };
    });

  // Honest schema: a single real Organization/HQ, with the page's relevance
  // to this city expressed through "areaServed" rather than a fabricated
  // LocalBusiness address per city. This matches how Google expects
  // service-area businesses (no branch office in every city) to mark up
  // location-targeted pages, and avoids the doorway-page / fake-listing
  // spam pattern that risks a manual action against the whole domain.
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://sabkasathi.com/#organization",
    "name": "Sabka Saathi",
    "url": "https://sabkasathi.com",
    "telephone": contactInfo.phone,
    "email": contactInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": contactInfo.address,
      "addressCountry": "IN"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://sabkasathi.com/${slug}#service`,
    "name": `${serviceName} in ${cityName}`,
    "description": metaDescription,
    "provider": { "@id": "https://sabkasathi.com/#organization" },
    "areaServed": {
      "@type": "City",
      "name": cityName,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": state
      }
    },
    "serviceType": serviceName
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
    whyThisCity,
    whyChooseUs,
    benefits: service.benefits,
    features: service.features,
    process: service.process,
    techStack: service.techStack,
    useCases: service.useCases,
    deliverables: service.deliverables,
    timeline: service.timeline,
    idealFor: service.idealFor,
    industries: service.industries,
    contactInfo,
    faqs,
    nearbySlugs,
    relatedServices,
    schemas: [organizationSchema, serviceSchema, breadcrumbSchema, faqSchema]
  };
}