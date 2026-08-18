export const HERO_MOCKUP_IMAGE = "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80";
export const MAP_FOOTER_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCNKtP20T6Ns-evCiNSzCEvkPWSiLehZfzhPX8C55wzBAuR3e2Yh3zXTkZhCvEIWt4kPsq30X1RJJmtkbiWmEjzcCJ0WTlUGodH6A56EuHNvovUMDKt7BXaRZtd4SqXKBM6cC96uPFEa6RAX0GMCB0VeF73J7TpEgAMtjwrAV2OzBnfCnaz9O1d5ZOpgEZ1tRO697XPzcL709mHgDghIA0_J6YLdvHBCElLbzyU-J_UFtDNvWba-DSopHUK01LcCaJ0ByXlei-C5LcT";

export const SERVICES_DATA = [
  {
    id: 'ai-automation',
    title: 'AI Automation',
    subtitle: 'Autonomous Intelligent Workflows',
    icon: 'psychology',
    badge: '99.9% Accuracy',
    description: 'Intelligent agent workflows that handle repetitive operations with 99.9% accuracy and zero latency delays.',
    features: [
      'Multi-agent LLM orchestration & routing',
      'Autonomous document & data extraction',
      'Real-time automated decision engines',
      'Custom fine-tuned Gemini & OpenAI pipelines'
    ],
    deliverables: ['Production Agent APIs', 'Monitoring Dashboard', 'Fallback Error Handling'],
    startingPrice: '₹2,50,000'
  },
  {
    id: 'web-systems',
    title: 'Web Systems',
    subtitle: 'High-Performance React Architectures',
    icon: 'code',
    badge: 'Sub-Second Latency',
    description: 'High-performance React architectures built for security, accessibility, and global scale.',
    features: [
      'Vite & React 19 micro-frontend systems',
      'Serverless edge routing & SSR optimization',
      'Tailwind CSS design system execution',
      'Type-safe Express & Node.js backend services'
    ],
    deliverables: ['Full-stack Repository', 'Design System Spec', 'CI/CD Pipeline'],
    startingPrice: '₹3,00,000'
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    subtitle: 'Bespoke Enterprise SaaS',
    icon: 'terminal',
    badge: 'Enterprise Grade',
    description: 'Bespoke SaaS solutions tailored to your unique business logic, security constraints, and KPIs.',
    features: [
      'Complex multi-tenant database design',
      'Role-based access control & compliance',
      'Real-time WebSockets & telemetry streaming',
      'Custom analytics engines & data visualization'
    ],
    deliverables: ['Architecture Blueprint', 'Tested Source Code', 'SLA Support'],
    startingPrice: '₹5,00,000'
  },
  {
    id: 'mobile-first',
    title: 'Mobile First',
    subtitle: 'Cross-Platform iOS & Android',
    icon: 'smartphone',
    badge: 'Fluid 60fps UI',
    description: 'Native performance cross-platform apps for iOS and Android with fluid UI and offline-first capabilities.',
    features: [
      'React Native & Flutter high-performance apps',
      'Biometric access & secure hardware integration',
      'Offline sync with local SQLite/Realm engines',
      'App Store & Play Store publishing pipelines'
    ],
    deliverables: ['iOS / Android Bundles', 'Store Assets', 'Push Notification Engine'],
    startingPrice: '₹4,00,000'
  }
];

export const CASE_STUDIES_DATA = [
  {
    id: 'cafe-management-os',
    title: 'Cafe Management System',
    subtitle: 'Automated POS, Kitchen Display & QR Table Ordering',
    category: 'web',
    categoryLabel: 'SaaS / Hospitality Tech',
    badge: 'Cafe OS',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    tabletImage: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80',
    challenge: 'When modern cafes face peak rush hours, traditional billing systems and manual kitchen tokens slow down order fulfillment and create revenue leakages.',
    solution: 'JSRM Labs engineered an all-in-one Cafe Management System featuring contactless QR table ordering, sub-second POS billing, live kitchen display sync (KDS), and predictive inventory alerts.',
    results: 'Eliminated order bottlenecks during peak rush hours, reduced order prep time by 45%, and increased daily table turnover across 250+ active outlets.',
    metrics: [
      { value: '45%', label: 'FASTER ORDER PREP' },
      { value: '250+', label: 'ACTIVE CAFES' },
      { value: '< 100ms', label: 'POS BILLING LATENCY' }
    ],
    techStack: ['React 19', 'JavaScript', 'Node.js', 'Express', 'Tailwind CSS', 'WebSockets'],
    clientQuote: {
      text: "The Cafe Management System by JSRM Labs completely transformed our multi-outlet operations. Table billing is instant and kitchen orders sync flawlessly.",
      author: "Rohan Sharma",
      role: "Founder & CEO, Brew & Co. Cafes"
    },
    featured: true
  },
  {
    id: 'palate-pro',
    title: 'Palate Pro',
    subtitle: 'AI Inventory & Supply Chain Optimization',
    category: 'marketplace',
    categoryLabel: 'Marketplace',
    badge: 'Marketplace',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYh251rrC_uMMOrBx_0KneA5WEX7EncgnYQN_ZDs81bmaCXEsNiJ04gLPCPxy_4lqT206BmBAPEI3Jnkb5fGDZ6EHRTypGv86Snq5d8aVOZCG5RxIUPX6G6deGIbNabBc6D56Kw1wuVRvhwZ3yf_F5IrT8Ybu6WPPrDxmb4jCh0bkMXdEstMGCU3nInHqGwKlQJOdRc0IBJXNu2Hew6ecOougTAgzx-1kPSuNxsGkTYR2B7T4_sYf8RuC4b49dEZjP5xHf_08feQHi',
    challenge: 'High-end restaurants lost up to 18% of margin due to perishable food waste, volatile vendor prices, and unpredictable guest demand.',
    solution: 'We built Palate Pro, an AI-driven inventory and supply chain hub that connects kitchen point-of-sale directly to wholesale vendor pricing with automated reordering.',
    results: 'Cut food waste by 28% across 120 restaurant groups and automated 85% of weekly ingredient procurement.',
    metrics: [
      { value: '28%', label: 'WASTE REDUCTION' },
      { value: '120+', label: 'RESTAURANT GROUPS' },
      { value: '₹3.5 Cr', label: 'SAVED IN 2025' }
    ],
    techStack: ['React', 'Express', 'OpenAI API', 'Python Analytics', 'PostgreSQL'],
    clientQuote: {
      text: "Palate Pro gave our chefs an intuitive interface and gave our CFO full visibility into perishable inventory in real time.",
      author: "Chef Elena Rostova",
      role: "Culinary Director, The Grand Bistro"
    }
  },
  {
    id: 'medreport-intelligence',
    title: 'MedReport Intelligence',
    subtitle: 'LLM Clinical Report Synthesis',
    category: 'ai',
    categoryLabel: 'AI / Health',
    badge: 'AI / Health',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjBpQf2QJuDy_-G7rpoesngTP91QZWxdGLQTXHw9bJ_jJsXKaf7XhgblDHzfteSjBjUVgPTZxSeTHSt1zzUatnTR0NOUUM4dUNhE_XSRtVjpE3dTTXGsTQQS4tMYNQR4wq-sreqjkvSWfoQqS6GtPjOeL7BKhiQjm3FQDnb23cHnzVLVSISmpHcX43pMGSA1kpnmIWGO3bTnbFiYJscKCPmA43PwlXHlWKBs1BwZ2z4rHq9Tpc54A4L2X0fpiBl4O47s_FuINOYrbq',
    challenge: 'Radiology and clinical labs faced massive backlogs, taking 48+ hours to generate structured synthesis reports from raw patient diagnostic scans.',
    solution: 'Developed an automated clinical report synthesis pipeline utilizing custom LLM architectures with HIPAA-compliant secure enclave processing.',
    results: 'Reduced report synthesis time from hours to under 45 seconds while maintaining 99.8% medical term accuracy confirmed by panel physicians.',
    metrics: [
      { value: '45s', label: 'SYNTHESIS SPEED' },
      { value: '99.8%', label: 'CLINICAL ACCURACY' },
      { value: '1.2M', label: 'REPORTS PROCESSED' }
    ],
    techStack: ['Gemini 2.5 Flash', 'Python', 'FastAPI', 'React', 'AWS HealthLake'],
    clientQuote: {
      text: "The speed and accuracy of MedReport Intelligence allowed our diagnostic network to eliminate backlogs entirely.",
      author: "Dr. Aris Thorne",
      role: "Head of Digital Health, Apex Health"
    }
  },
  {
    id: 'hospital-report-system',
    title: 'Hospital Report System',
    subtitle: 'Automatic Patient Vitals & Alert System',
    category: 'healthcare',
    categoryLabel: 'Healthcare',
    badge: 'Healthcare',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvSLjdQ4mu9GaSDyJfxZ32KEg79NufChzo54ImRMqGdu_2Nd0BnHV5XZ-515UtelZdoKI3C4kKeFWIY_cMJTi97uTSmUlRR6fxSGRRYF4GgMt2esMftPgpuvmbinNJBaYHNgS4VXIIzc0Ttw9kFgYY2K0snOV4BVdUJGhAJtSVZjhis2yPkcgErU8ZO45H6xkXyUZaBUaNAVKBN09WJUMTIV68OYiHOM1C57-fDk1NrZkXGTKjk3mAyyiIK0xFhChm5DsQJQ7dkv8X',
    challenge: 'Hospital floor staff suffered from notification fatigue and delayed escalation when ICU vitals drifted toward critical limits.',
    solution: 'Created an intelligent patient dashboard with real-time vitals monitoring, instant color-coded alert prioritization, and staff shift synchronization.',
    results: 'Decreased response time for emergency vital alerts by 62% and improved nurse satisfaction scores.',
    metrics: [
      { value: '62%', label: 'FASTER ALERT RESPONSE' },
      { value: '24/7', label: 'ZERO-DOWNTIME UPTIME' },
      { value: '850+', label: 'BEDS MONITORED' }
    ],
    techStack: ['React', 'WebSockets', 'Node.js', 'Tailwind', 'Docker'],
    clientQuote: {
      text: "The clinical UI is so crisp and clear that staff required zero onboarding time to start monitoring critical beds effectively.",
      author: "Sarah Jenkins, RN",
      role: "Clinical Lead, St. Jude Medical"
    }
  },
  {
    id: 'restaurant-ordering',
    title: 'Restaurant Ordering System',
    subtitle: 'Contactless QR Menu & Live Kitchen Sync',
    category: 'mobile',
    categoryLabel: 'Hospitality',
    badge: 'Hospitality',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdbwMUYJXC3tmUjYhXjK8HnnA_1UxTrtxfcDMAhJUuejDwdXyIdArp50pDR-eiNvV3sgarZglDT8ctZ9V6IILXAwCoI38jAKpEezefgV51lqYcgcMVJM08sNaOrvGB7rj6ulAGINRUmVp4xcKPBib96Lm9icbmYqO-yWeWvmnHKhgIb0e3puyhgsCH3Hhh8xIZ1ra3QD7KzFgjG5lOLLtEBkTcXJ8WaM3pkixzwnixxUhV4LHSNuL9DQTU-AimfmkCgb78uLZKeMWA',
    challenge: 'High turnover venues struggled with long waiter wait times, incorrect guest orders, and slow check settlement during peak hours.',
    solution: 'Designed a ultra-fast PWA QR Menu and instant guest checkout web application linked directly to a real-time kitchen display system (KDS).',
    results: 'Increased table turnover speed by 22% and boosted average guest tip percentage by 18%.',
    metrics: [
      { value: '22%', label: 'FASTER TURNOVER' },
      { value: '+18%', label: 'TIP AVERAGE' },
      { value: '3.5M', label: 'ORDERS SERVED' }
    ],
    techStack: ['React Native Web', 'Express', 'Payment Gateway API', 'Tailwind CSS'],
    clientQuote: {
      text: "Customers love ordering directly from their phone with instant image previews. It revolutionized our peak dinner service.",
      author: "David Choi",
      role: "Operations Director, Bite & Co"
    }
  }
];

export const PRICING_TIERS_DATA = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹4999 K',
    period: '/ project min',
    description: 'Perfect for early-stage startups and targeted single-feature MVPs that need rapid market validation.',
    features: [
      'MVP Development (4-6 weeks)',
      'UI/UX Design System',
      '30-Day Post-Launch Support',
      'Core API Integration',
      'Mobile-Responsive Layout'
    ],
    highlighted: false,
    ctaText: 'Select Starter'
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '₹4.5 Lakh',
    period: '/ project min',
    badge: 'MOST POPULAR',
    description: 'Engineered for scaling businesses needing intelligent AI workflows, robust architecture, and priority infrastructure.',
    features: [
      'Full AI Agent & LLM Integration',
      'Scalable Web App & Custom SaaS',
      'Priority Cloud Infrastructure',
      'Post-Launch Growth & Analytics',
      'Dedicated Tech Lead & Weekly Sprints',
      '60-Day SLA Guarantee'
    ],
    highlighted: true,
    ctaText: 'Accelerate Now'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored engagement',
    description: 'Complete dedicated software engineering lab team for large organizations, legacy migrations, and strict compliance.',
    features: [
      'Dedicated Senior Engineering Team',
      'Advanced Security Readiness',
      'Legacy System & Database Migration',
      'Custom Fine-Tuned AI Models',
      '24/7 Guaranteed Uptime SLA',
      'Continuous DevOps & Monitoring'
    ],
    highlighted: false,
    ctaText: 'Contact Enterprise'
  }
];

export const PROCESS_STEPS_DATA = [
  {
    stepNumber: '01',
    title: 'Discovery & AI Architecture Blueprint',
    duration: 'Week 1 - 2',
    description: 'We audit your business logic, map data workflows, and draft a high-contrast UI/UX blueprint alongside system architecture diagrams.',
    deliverables: ['System Architecture Spec', 'Figma Design System', 'Fixed Scope & Sprint Schedule']
  },
  {
    stepNumber: '02',
    title: 'Agile Sprint Engineering',
    duration: 'Week 3 - 5',
    description: 'We execute bi-weekly engineering sprints with continuous staging deployments so you test features as they are built.',
    deliverables: ['Live Staging App', 'Clean Codebase', 'Bi-Weekly Demo Video']
  },
  {
    stepNumber: '03',
    title: 'AI Logic & Performance Benchmarking',
    duration: 'Week 6',
    description: 'We stress-test AI agent routing, perform load testing up to 10,000 concurrent requests, and optimize database indexing for sub-second responses.',
    deliverables: ['Load Test Report', 'Security Audit Certificate', 'AI Term Accuracy Validation']
  },
  {
    stepNumber: '04',
    title: 'Deployment & Managed Scalability',
    duration: 'Week 7 - 8+',
    description: 'Zero-downtime deployment to production cloud infrastructure with automated monitoring, telemetry alerts, and post-launch support.',
    deliverables: ['Production Release', 'Automated CI/CD', 'Documentation & Training']
  }
];

export const FAQ_DATA = [
  {
    id: 'faq-1',
    question: 'How fast can we build an MVP?',
    answer: 'Most MVPs at JSRM Labs go from discovery to production launch in 6–8 weeks. We focus on core high-value features first to get you to market fast and gather real user data.',
    category: 'Timeline'
  },
  {
    id: 'faq-2',
    question: 'Do you handle infrastructure and hosting?',
    answer: 'Yes. We specialize in AWS serverless, Cloud Run, and high-performance edge architectures, ensuring your application is scalable, secure, and cost-effective from the very first line of code.',
    category: 'Infrastructure'
  },
  {
    id: 'faq-3',
    question: 'Can you integrate AI into my existing app?',
    answer: 'Absolutely. We perform deep audits of existing tech stacks and build seamless REST/GraphQL API layers to introduce LLMs, multi-agent workflows, computer vision, or predictive analytics without disrupting current operations.',
    category: 'AI Integration'
  },
  {
    id: 'faq-4',
    question: 'Who owns the intellectual property and source code?',
    answer: 'You own 100% of all intellectual property, source code, design assets, and custom AI prompt logic upon project completion. We transfer complete repository ownership to your team.',
    category: 'Ownership'
  },
  {
    id: 'faq-5',
    question: 'What happens after project launch?',
    answer: 'All projects include 30 to 60 days of post-launch warranty and SLA support. We also offer ongoing growth retainers for continuous feature iterations, DevOps management, and AI model performance tuning.',
    category: 'Support'
  }
];

export const TECH_STACK = [
  { name: 'React.js', icon: 'code', category: 'Frontend' },
  { name: 'AWS', icon: 'cloud', category: 'Cloud' },
  { name: 'OpenAI', icon: 'psychology', category: 'AI' },
  { name: 'Node.js', icon: 'terminal', category: 'Backend' },
  { name: 'Python', icon: 'data_object', category: 'Data & AI' },
  { name: 'Gemini AI', icon: 'auto_awesome', category: 'LLM' },
  { name: 'Tailwind CSS', icon: 'style', category: 'UI System' },
  { name: 'JavaScript', icon: 'integration_instructions', category: 'Language' }
];
export const DIGITAL_PRODUCTS_DATA = [
  {
    id: 'ai-architecture-blueprint-2026',
    title: '2026 AI & SaaS Architecture Blueprint',
    category: 'Architecture & Engineering',
    type: 'Downloadable PDF & Notion Template',
    badge: 'FREE DOWNLOAD',
    icon: 'account_tree',
    description: 'Comprehensive 28-page guide covering server-side Gemini LLM integration, Express API proxies, database schema design, and zero-downtime deployment specs.',
    fileSize: '4.2 MB',
    downloadsCount: '3,420+',
    includedContents: [
      'Complete React 19 + Express full-stack folder structure',
      'API Key Security & Lazy SDK Initialization patterns',
      'Firestore & PostgreSQL database schema templates',
      'Production deployment checklist for Cloud Run & Vercel'
    ]
  },
  {
    id: 'saas-growth-pricing-playbook',
    title: 'SaaS Pricing & MRR Growth Playbook',
    category: 'Business & Revenue',
    type: 'Interactive Spreadsheet & Guide',
    badge: 'POPULAR RESOURCE',
    icon: 'payments',
    description: 'Financial forecasting model and packaging cheat-sheet for B2B software products, including tier feature breakdown & localized Indian Rupee pricing.',
    fileSize: '1.8 MB',
    downloadsCount: '2,180+',
    includedContents: [
      'Excel/Google Sheets 12-month MRR projection model',
      'SaaS tier feature packaging matrix',
      'Enterprise SLA & custom contract checklist',
      'Value-based vs usage-based pricing decision tree'
    ]
  },
  {
    id: 'hospitality-cafe-pos-checklist',
    title: 'Cafe & Hospitality POS Operations Checklist',
    category: 'Hospitality Tech',
    type: 'PDF & Process Spec',
    badge: 'INDUSTRY SPECIFIC',
    icon: 'restaurant',
    description: 'Step-by-step audit guide for multi-outlet cafes and restaurants wanting to streamline kitchen displays, QR table billing, and inventory tracking.',
    fileSize: '2.5 MB',
    downloadsCount: '1,890+',
    includedContents: [
      'Peak-hour order bottleneck identification framework',
      'Kitchen Display System (KDS) layout blueprint',
      'Perishable ingredient waste calculation formula',
      'Staff onboarding quick reference manual'
    ]
  },
  {
    id: 'b2b-lead-funnel-framework',
    title: 'High-Converting B2B Lead Funnel Framework',
    category: 'Marketing & Sales',
    type: 'Figma & PDF Wireframe',
    badge: 'FREE TEMPLATE',
    icon: 'filter_alt',
    description: 'Wireframe templates and copywriting structures for high-converting agency and SaaS landing pages engineered for maximum lead inquiries.',
    fileSize: '6.1 MB',
    downloadsCount: '4,100+',
    includedContents: [
      'Figma wireframe components for high-converting Hero sections',
      'Lead inquiry form validation copy guide',
      'Trust badges & client proof layout patterns',
      'Automated email lead response sequence'
    ]
  }
];

export const TEMPLATES_SERVICES_DATA = [
  // --- WEBSITE TEMPLATES ---
  {
    id: 'tpl-agency-pro-v2',
    name: 'Nexus Agency & Portfolio React Template',
    category: 'website-templates',
    categoryLabel: 'React / Tailwind Template',
    badge: 'BESTSELLER ⚡',
    type: 'Digital Template',
    price: 2999,
    originalPrice: 5999,
    currency: 'INR',
    rating: 4.9,
    salesCount: '480+',
    icon: 'web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Ultra-fast, responsive React + Tailwind CSS landing page template designed for software labs, agencies, and tech consultants.',
    techStack: ['React 18', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons'],
    features: [
      'Dark & High-Contrast Light Mode Support',
      'Interactive Case Study Modal & Portfolio Filter',
      'Contact Lead Form with Express / Nodemailer integration',
      '100/100 Lighthouse Performance & SEO Optimized',
      'Includes Full Figma Source Files'
    ],
    demoUrl: '#demo-nexus',
    includedFiles: ['Full Source Code (Zip)', 'Figma Design Tokens', 'Setup Documentation (PDF)', 'Commercial License']
  },
  {
    id: 'tpl-cafe-restaurant-pos',
    name: 'Aura Cafe & Restaurant Web + QR Menu Kit',
    category: 'website-templates',
    categoryLabel: 'Hospitality Web Template',
    badge: 'POPULAR 🍕',
    type: 'Digital Template',
    price: 3499,
    originalPrice: 6999,
    currency: 'INR',
    rating: 4.8,
    salesCount: '320+',
    icon: 'restaurant_menu',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Modern restaurant website template featuring digital QR code menus, table reservation forms, and online takeaway order manager.',
    techStack: ['React', 'Tailwind CSS', 'Local State Cart', 'WhatsApp Order Integration'],
    features: [
      'Interactive Food & Beverage Menu with Filter Tabs',
      'One-click WhatsApp Takeaway & Table Booking',
      'Mobile-first QR Code Scanner Ready UI',
      'Admin Dashboard UI for Menu Item Management',
      'Multi-currency & GST Tax Calculator Included'
    ],
    demoUrl: '#demo-aura-cafe',
    includedFiles: ['React Source Code', 'Admin UI Template', 'QR Generator Script', 'Setup Guide']
  },
  {
    id: 'tpl-ecommerce-minimal',
    name: 'Vogue Minimalist E-Commerce Storefront',
    category: 'website-templates',
    categoryLabel: 'E-Commerce Storefront',
    badge: 'TRENDING 🛍',
    type: 'Digital Template',
    price: 3999,
    originalPrice: 7999,
    currency: 'INR',
    rating: 5.0,
    salesCount: '610+',
    icon: 'shopping_bag',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Sleek, high-converting React storefront template with instant product filtering, slide-over cart, and Razorpay/Stripe checkout support.',
    techStack: ['React', 'Tailwind CSS', 'Razorpay & Stripe SDK', 'Zustand State'],
    features: [
      'Instant Category & Price Range Filter',
      'Slide-over Shopping Cart & Express Checkout UI',
      'Product Zoom & Variant Selector (Colors/Sizes)',
      'Customer Review & Rating Stars Component',
      'SEO Schema.org Structured Product Markup'
    ],
    demoUrl: '#demo-vogue-ecom',
    includedFiles: ['Frontend Codebase', 'API Proxy Routes', 'Figma Wireframe', 'License Key']
  },

  // --- APP BOILERPLATES ---
  {
    id: 'tpl-ai-agent-saas-kit',
    name: 'OmniAI Agent & SaaS Express Starter Kit',
    category: 'app-boilerplates',
    categoryLabel: 'SaaS & AI Boilerplate',
    badge: 'HOT AI BOILERPLATE 🤖',
    type: 'Full-Stack Starter Kit',
    price: 4999,
    originalPrice: 9999,
    currency: 'INR',
    rating: 4.9,
    salesCount: '530+',
    icon: 'psychology',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Production-ready full-stack boilerplate with Gemini 2.5 API integration, Express server, user authentication, and subscription billing.',
    techStack: ['React 18', 'Node/Express', 'Gemini AI API', 'MongoDB / Postgres', 'Razorpay'],
    features: [
      'Pre-configured Gemini 2.5 Flash & GPT-4 API routes',
      'JWT User Authentication & Role Management',
      'Usage-based Token Metering & Subscription Billing UI',
      'Markdown Chat Component with Streaming Answers',
      'Docker & Cloud Run Deployment Scripts'
    ],
    demoUrl: '#demo-omniai',
    includedFiles: ['Full Stack Repo (Client + Server)', 'Postman API Collection', 'Docker Compose', 'Deployment Checklist']
  },
  {
    id: 'tpl-multi-vendor-pos-app',
    name: 'RetailOps Multi-Outlet Billing & Inventory System',
    category: 'app-boilerplates',
    categoryLabel: 'Full-Stack Software System',
    badge: 'ENTERPRISE READY 🏢',
    type: 'Full-Stack Software System',
    price: 6999,
    originalPrice: 12999,
    currency: 'INR',
    rating: 4.9,
    salesCount: '210+',
    icon: 'point_of_sale',
    image: 'https://images.unsplash.com/photo-1556742049-0a67dd369d72?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Comprehensive POS & Inventory management dashboard boilerplate with thermal invoice printing, stock alerts, and sales analytics charts.',
    techStack: ['React', 'Express.js', 'Recharts', 'PostgreSQL / SQLite', 'PDF Printer Engine'],
    features: [
      'Barcode Scanner & Quick Touch Cashier Interface',
      'Thermal Receipt Generation & WhatsApp Invoice Dispatch',
      'Low Stock Alerts & Supplier Order Automation',
      'Daily GST Tax Reports & Sales Revenue Analytics',
      'Offline Local Backup Sync Logic'
    ],
    demoUrl: '#demo-retailops',
    includedFiles: ['Client App', 'Server Engine', 'DB Migration Scripts', 'User Training Guide']
  },

  // --- FIGMA UI KITS ---
  {
    id: 'tpl-figma-fintech-design-system',
    name: 'Apex Fintech & Banking Figma Design System',
    category: 'figma-kits',
    categoryLabel: 'Figma UI/UX Kit',
    badge: '300+ COMPONENTS 🎨',
    type: 'Figma Digital Asset',
    price: 1999,
    originalPrice: 3999,
    currency: 'INR',
    rating: 4.8,
    salesCount: '390+',
    icon: 'dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Complete Figma design system with Auto-Layout 5.0, variables, dark mode tokens, and 40+ pre-assembled mobile & desktop screens.',
    techStack: ['Figma Auto-Layout', 'Design Tokens', 'Variables & Component Variants'],
    features: [
      '40+ Mobile & Desktop Financial Screens',
      'Strict WCAG AA Color Contrast Palette',
      'Custom SVG Vector Icon Set & Chart Components',
      'Interactive Prototype Animations in Figma',
      'Free Lifetime Updates & New Screen Drops'
    ],
    demoUrl: '#demo-apex-figma',
    includedFiles: ['.FIG Source File', 'UI Style Guide (PDF)', 'Design System Tokens (JSON)']
  },

  // --- WEBSITE SERVICES ---
  {
    id: 'srv-48h-express-website',
    name: '48-Hour Express Custom Website Launch',
    category: 'website-services',
    categoryLabel: 'Done-For-You Service',
    badge: 'GUARANTEED 48H LAUNCH 🚀',
    type: 'Custom Service Package',
    price: 14999,
    originalPrice: 24999,
    currency: 'INR',
    rating: 5.0,
    salesCount: '180+ Completed',
    icon: 'rocket_launch',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Get a fully custom, high-converting 5-page business website built, coded, and deployed live in 48 hours by JSRM Labs engineers.',
    techStack: ['Custom React / Tailwind', 'SEO Optimization', 'Domain & Cloud Hosting Setup'],
    features: [
      'Up to 5 Custom Pages (Home, About, Services, Contact, Blog/Portfolio)',
      'Custom Domain & SSL Hosting Setup on High-Speed CDN',
      'Mobile Responsive & Fast 95+ PageSpeed Score',
      'Lead Collection Inquiry Form & WhatsApp Chat Integration',
      '1 Year Free Maintenance & Security Updates'
    ],
    demoUrl: '#service-express-website',
    includedFiles: ['Full Code Ownership', 'Admin CMS Training', '1 Year Hosting Config']
  },
  {
    id: 'srv-custom-ecommerce-build',
    name: 'Full-Scale Custom E-Commerce Store & Mobile App',
    category: 'website-services',
    categoryLabel: 'Done-For-You Service',
    badge: 'HIGH GROWER CHOICE 🛍',
    type: 'Custom Service Package',
    price: 34999,
    originalPrice: 49999,
    currency: 'INR',
    rating: 4.9,
    salesCount: '95+ Completed',
    icon: 'storefront',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Complete custom online store engineering with payment gateways (Razorpay, PhonePe, Stripe), inventory engine, and mobile app build.',
    techStack: ['React / Next.js', 'Node.js Backend', 'Razorpay Gateway', 'Android PWA / App'],
    features: [
      'Unlimited Products & Category Catalog Setup',
      'Seamless Payment Gateway Integration (0% extra commission)',
      'Automated Order Invoice PDF Generation & SMS/WhatsApp Alerts',
      'Inventory Control Dashboard & Sales Analytics',
      'PWA Mobile App Conversion for Android Users'
    ],
    demoUrl: '#service-ecommerce-custom',
    includedFiles: ['Production Codebase', 'Backend API', 'Admin Dashboard Access', 'SLA Warranty']
  },
  {
    id: 'srv-ai-agent-integration-package',
    name: 'Custom AI Agent & Workflow Automation Setup',
    category: 'website-services',
    categoryLabel: 'Done-For-You Service',
    badge: 'AI SPECIALTY 🤖',
    type: 'Custom Service Package',
    price: 24999,
    originalPrice: 39999,
    currency: 'INR',
    rating: 5.0,
    salesCount: '140+ Completed',
    icon: 'auto_awesome',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'We integrate autonomous AI customer support, document parsing, lead qualification, or internal process bots directly into your existing site.',
    techStack: ['Gemini 2.5 API', 'LangChain / Python', 'REST API Connectors', 'WhatsApp/Slack Bots'],
    features: [
      'Custom trained on your business FAQs, product catalog & documentation',
      'Multilingual AI Chatbot embedded on your website or WhatsApp',
      'Automated Lead Qualification & CRM Sync (HubSpot / Sheets / Email)',
      'Sub-second response time with fallback human escalation',
      '30 Days Dedicated Model Tuning & Accuracy Monitoring'
    ],
    demoUrl: '#service-ai-agent',
    includedFiles: ['AI Pipeline Architecture', 'API Keys Config', 'Staff Training Session']
  }
];

