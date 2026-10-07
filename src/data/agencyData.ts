import { ServiceItem, CaseStudyItem, TestimonialItem, FaqItem, ToolItem } from '../types';

import heroImg from '../assets/images/hero_marketing_agency_1791348654668.jpg';
import caseStudyEcommerce from '../assets/images/case_study_ecommerce_1791348675277.jpg';
import caseStudySaas from '../assets/images/case_study_saas_1791348693754.jpg';
import caseStudyHealthcare from '../assets/images/case_study_healthcare_1791348710166.jpg';
import teamImg from '../assets/images/agency_team_collaboration_1791348720843.jpg';

export const AGENCY_ASSETS = {
  hero: heroImg,
  team: teamImg,
  caseStudies: {
    ecommerce: caseStudyEcommerce,
    saas: caseStudySaas,
    healthcare: caseStudyHealthcare,
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'seo',
    number: '01',
    title: 'Search Engine Optimization',
    shortDesc: 'Drive predictable organic traffic, dominate competitive search intent, and establish enduring search authority.',
    fullDesc: 'We build enterprise-grade search moats through deep semantic keyword mapping, technical Core Web Vitals remediation, content architecture, and authoritative digital PR link acquisition.',
    category: 'SEO',
    keyMetrics: '+280%',
    metricsLabel: 'Avg. Organic Traffic in 6 Mo',
    deliverables: [
      'Technical SEO & Core Web Vitals audit',
      'High-intent commercial keyword mapping',
      'Editorial content cluster production',
      'Authority backlink acquisition & PR',
      'Local search & Google Business dominance'
    ],
    toolsUsed: ['Ahrefs', 'SEMrush', 'RankMath', 'Google Search Console', 'Screaming Frog']
  },
  {
    id: 'ppc',
    number: '02',
    title: 'Performance PPC & Paid Media',
    shortDesc: 'High-yield paid acquisition across Google Search, YouTube, Meta, and LinkedIn with obsessive ROAS attribution.',
    fullDesc: 'We architect granular ad account structures, continuously split-test ad creatives, and deploy algorithmic bidding strategies focused purely on qualified pipeline generation and blended customer acquisition cost (CAC).',
    category: 'Paid Ads',
    keyMetrics: '3.8x',
    metricsLabel: 'Average Blended ROAS Achieved',
    deliverables: [
      'High-intent Google Search & Shopping campaigns',
      'Meta (Instagram & Facebook) performance ads',
      'LinkedIn B2B decision-maker targeting',
      'Retargeting funnels & dynamic product ads',
      'Conversion API (CAPI) & server-side tracking'
    ],
    toolsUsed: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'GA4']
  },
  {
    id: 'web-dev',
    number: '03',
    title: 'Web Engineering & UI/UX Design',
    shortDesc: 'Bespoke web applications and landing pages engineered for sub-second load times and unmatched conversion rates.',
    fullDesc: 'A beautiful site that does not convert is an expensive brochure. We combine human-centered product design with modern React/Next.js engineering, micro-interactions, and conversion rate optimization (CRO) heuristics.',
    category: 'Engineering',
    keyMetrics: '4.6%',
    metricsLabel: 'Average Landing Page Conversion Rate',
    deliverables: [
      'Custom React / Next.js / Tailwind architectures',
      'High-converting landing page funnels',
      'Shopify Plus & headless e-commerce builds',
      'Mobile-first responsive UX and interaction design',
      '95+ Google PageSpeed performance score'
    ],
    toolsUsed: ['Next.js', 'React', 'Tailwind CSS', 'Figma', 'Vercel']
  },
  {
    id: 'social-media',
    number: '04',
    title: 'Social Media & Brand Identity',
    shortDesc: 'Compelling brand positioning, organic content engines, and thought-leadership that build loyal community advocacy.',
    fullDesc: 'We transform corporate communication into magnetic brand narratives. From viral short-form video strategies to executive LinkedIn personal branding, we keep your brand top-of-mind.',
    category: 'Content',
    keyMetrics: '4.2x',
    metricsLabel: 'Audience Engagement Velocity',
    deliverables: [
      'Multi-channel brand narrative and visual guidelines',
      'Executive thought leadership on LinkedIn',
      'Reels, shorts, and motion graphic assets',
      'Community management and sentiment monitoring',
      'Influencer and creator collaborative partnerships'
    ],
    toolsUsed: ['Figma', 'Adobe Creative Cloud', 'Canva Pro', 'Buffer']
  },
  {
    id: 'ecommerce',
    number: '05',
    title: 'E-Commerce Revenue Scaling',
    shortDesc: 'End-to-end direct-to-consumer and marketplace growth: average order value (AOV) lifting, retention, and funnel optimization.',
    fullDesc: 'We audit every friction point from product detail pages (PDP) to checkout. By integrating automated retention flows, dynamic bundles, and performance media, we scale retail brands sustainably.',
    category: 'Growth',
    keyMetrics: '+165%',
    metricsLabel: 'Direct GMV Growth in 90 Days',
    deliverables: [
      'Checkout optimization and cart abandonment recovery',
      'Klaviyo retention & predictive lifecycle flows',
      'Upsell, cross-sell, and subscription architecture',
      'Catalog feed optimization for Google Shopping',
      'Customer lifetime value (LTV) maximization'
    ],
    toolsUsed: ['Shopify Plus', 'Klaviyo', 'Triple Whale', 'Google Merchant']
  },
  {
    id: 'content-marketing',
    number: '06',
    title: 'B2B Inbound & Content Marketing',
    shortDesc: 'Authoritative whitepapers, case studies, and conversion copywriting that warm up enterprise buyers before the sales call.',
    fullDesc: 'We turn subject matter expertise into an inbound magnet. We research deep customer pain points and deliver authoritative thought leadership that closes high-ticket contracts.',
    category: 'Content',
    keyMetrics: '+140%',
    metricsLabel: 'Qualified Inbound Pipeline Growth',
    deliverables: [
      'B2B ICP persona research and content strategy',
      'Long-form thought leadership and industry teardowns',
      'Lead magnet engineering and email nurturing drips',
      'Sales enablement collateral and product one-pagers',
      'Multi-touch CRM attribution and routing'
    ],
    toolsUsed: ['HubSpot CRM', 'Notion', 'Google Docs', 'Clearscope']
  }
];

export const AGENCY_PILLARS = [
  {
    number: '01',
    title: 'Creative Ideas',
    tagline: 'Fresh thinking that builds authentic, high-recall brand stories.',
    description: 'We reject generic copy templates. Every campaign is built on a distinct conceptual hook that cuts through the noise of oversaturated digital feeds.'
  },
  {
    number: '02',
    title: 'Strategic Planning',
    tagline: 'Deep market intelligence and audience journey mapping.',
    description: 'Before a single ad dollar is spent, we analyze competitive moats, customer intent triggers, and unit economics to ensure every channel produces positive margins.'
  },
  {
    number: '03',
    title: 'Data-Driven Decisions',
    tagline: 'Strict statistical attribution and zero guesswork.',
    description: 'We track real commercial metrics: customer acquisition costs (CAC), lifetime value (LTV), and pipeline contribution—not vanity impressions or accidental clicks.'
  },
  {
    number: '04',
    title: 'Measurable Results',
    tagline: 'Compounding growth that scales your enterprise valuation.',
    description: 'Our work is judged by revenue on your ledger. We provide live transparent dashboards so leadership teams see exact returns on every rupee invested.'
  }
];

export const FLYWHEEL_STEPS = [
  {
    step: '01',
    name: 'Build Visibility',
    description: 'Command prime digital real estate across organic search engine rankings, YouTube, and high-converting paid channels.',
    highlight: 'Capture High Intent'
  },
  {
    step: '02',
    name: 'Engage Audience',
    description: 'Hook prospects with tailored creative, problem-focused messaging, and friction-free user experiences that hold attention.',
    highlight: 'Build Deep Trust'
  },
  {
    step: '03',
    name: 'Drive Conversions',
    description: 'Turn visitors into paying clients through high-velocity landing pages, strategic pricing anchors, and seamless checkouts.',
    highlight: 'Convert Revenue'
  },
  {
    step: '04',
    name: 'Measure & Improve',
    description: 'Continuously iterate campaigns using multivariate testing, cohort analysis, and algorithmic budget reallocations.',
    highlight: 'Compound Margins'
  }
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'velvet-lifestyle',
    title: 'Scaling Luxury D2C Brand to 3.4x ROAS & Multi-Crore GMV',
    client: 'Velvet Lifestyle & Jewels',
    industry: 'E-Commerce & Retail',
    service: 'Performance Media & Meta Ads',
    image: AGENCY_ASSETS.caseStudies.ecommerce,
    highlightMetric: '+340%',
    metricLabel: 'Net ROAS Increase',
    timeframe: '90-Day Campaign Window',
    summary: 'Restructured fragmented ad spend into a unified funnel combining aspirational founder-led video ads with automated dynamic retargeting.',
    challenge: 'Rising CAC on Meta ads and high cart abandonment rate (78%) eroding direct-to-consumer profit margins.',
    solution: 'Engineered a full-funnel paid media strategy, rebuilt the mobile checkout funnel for 1-click buy, and deployed VIP early-access email flows.',
    results: [
      { label: 'Return on Ad Spend (ROAS)', value: '3.4x (Up from 1.1x)' },
      { label: 'Quarterly Revenue Generated', value: '₹3.2+ Crores' },
      { label: 'Cart Abandonment Drop', value: '-31%' },
      { label: 'Average Order Value (AOV)', value: '+28% Increase' }
    ]
  },
  {
    id: 'propel-cloud',
    title: 'B2B Enterprise Pipeline Transformation & 185% SQL Growth',
    client: 'Propel Cloud Solutions',
    industry: 'Enterprise SaaS & Cloud',
    service: 'Technical SEO & LinkedIn Media',
    image: AGENCY_ASSETS.caseStudies.saas,
    highlightMetric: '+185%',
    metricLabel: 'Sales Qualified Leads (SQLs)',
    timeframe: '6-Month Engagement',
    summary: 'Captured high-intent search terms like "enterprise cloud migration consultancy" while driving hyper-targeted ABM campaigns on LinkedIn.',
    challenge: 'Long 9-month sales cycles with low organic inbound volume; dependent on cold outbound calling with declining response rates.',
    solution: 'Designed an interactive Cloud ROI Calculator, published 24 authoritative technical comparison whitepapers, and executed decision-maker account-based marketing (ABM).',
    results: [
      { label: 'Inbound SQL Generation', value: '+185% Increase' },
      { label: 'Customer Acquisition Cost (CAC)', value: '-42% Reduction' },
      { label: 'Closed Deal Pipeline', value: '₹8.4 Crores' },
      { label: 'Core Web Vitals Rating', value: '99/100 Mobile' }
    ]
  },
  {
    id: 'chetan-herbals',
    title: 'Organic Search Domination: 140+ #1 Rankings for Wellness Brand',
    client: 'Chetan Herbals & Clinic',
    industry: 'Healthcare & Ayurveda',
    service: 'Enterprise SEO & Content Hub',
    image: AGENCY_ASSETS.caseStudies.healthcare,
    highlightMetric: '+275%',
    metricLabel: 'Organic Footfall & Consultations',
    timeframe: '5 Months to Peak Growth',
    summary: 'Built a verified Ayurvedic symptom-to-treatment knowledge base that ranks #1 across Delhi NCR for 140+ commercial medical queries.',
    challenge: 'Outranked by generic aggregator portals with zero direct clinic appointment bookings originating from Google search.',
    solution: 'Structured medical schema markup, developed localized Dwarka and Delhi NCR patient landing pages, and launched verified doctor review syndication.',
    results: [
      { label: 'Organic Monthly Sessions', value: '185,000+ Visitors' },
      { label: 'Top 3 Google Positions', value: '142 High-Value Keywords' },
      { label: 'Direct Clinic Consultations', value: '+275% Growth' },
      { label: 'Google Maps Phone Inquiries', value: '+310% Monthly' }
    ]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'neha-kapoor',
    name: 'Neha Kapoor',
    role: 'Marketing Director',
    company: 'Velvet Lifestyle & Jewels',
    quote: 'Xntrova is truly the best digital marketing agency in Delhi NCR. Their team brought fresh creative ideas and razor-sharp execution for our brand. They listened to every nuance of our luxury aesthetic and delivered results that exceeded our quarterly board forecasts.',
    rating: 5,
    metricOutcome: '+340% ROAS in 90 Days',
    platform: 'Clutch'
  },
  {
    id: 'rahul-sharma',
    name: 'Rahul Sharma',
    role: 'Chief Executive Officer',
    company: 'Propel Cloud Solutions',
    quote: 'What sets Xntrova apart is the rare way they combine technical depth with commercial acumen. They celebrate your wins, tackle complex attribution roadblocks alongside you, and obsess over unit economics. It’s the exact partnership every growing tech firm seeks.',
    rating: 5,
    metricOutcome: '₹8.4Cr Enterprise Pipeline',
    platform: 'Google'
  },
  {
    id: 'dr-chetan',
    name: 'Dr. Chetan Aggarwal',
    role: 'Founder & Head Clinician',
    company: 'Chetan Herbals & Clinic',
    quote: 'Our clinic went from barely visible online to the most searched wellness center in South & West Delhi within four months. Xntrova does not rely on empty buzzwords—their SEO and local map strategies delivered actual patients walking through our doors.',
    rating: 5,
    metricOutcome: '140+ #1 Google Rankings',
    platform: 'GoodFirms'
  },
  {
    id: 'priya-mukherjee',
    name: 'Priya Mukherjee',
    role: 'Head of Growth',
    company: 'Sidhe Financial Services',
    quote: 'We vetted six agencies across Gurgaon and Delhi before picking Xntrova. Their transparency, weekly sprint reporting, and web engineering speed made a massive difference to our customer conversion funnel.',
    rating: 5,
    metricOutcome: '-38% Cost Per Acquisition',
    platform: 'Clutch'
  }
];

export const TOOLS_DATA: ToolItem[] = [
  { name: 'Ahrefs', category: 'SEO & Search', purpose: 'Competitor link audits & keyword intent mapping', badge: 'SEO' },
  { name: 'Meta Ads', category: 'Paid Media', purpose: 'Precision audience targeting & dynamic retargeting', badge: 'Paid Media' },
  { name: 'Google Ads', category: 'Paid Media', purpose: 'High-intent search, shopping & display campaigns', badge: 'Paid Media' },
  { name: 'Google Analytics 4', category: 'Analytics', purpose: 'Full-funnel attribution & cohort retention tracking', badge: 'Analytics' },
  { name: 'AWS Cloud', category: 'Design & Dev', purpose: 'High-availability hosting & edge infrastructure', badge: 'Infrastructure' },
  { name: 'Shopify Plus', category: 'Design & Dev', purpose: 'Enterprise headless retail & checkout customization', badge: 'E-Commerce' },
  { name: 'Figma', category: 'Design & Dev', purpose: 'UI/UX wireframing, design systems & micro-interactions', badge: 'Design' },
  { name: 'RankMath Pro', category: 'SEO & Search', purpose: 'On-page schema markup & technical indexation', badge: 'SEO' },
  { name: 'LinkedIn Ads', category: 'Paid Media', purpose: 'B2B enterprise account-based marketing (ABM)', badge: 'B2B' },
  { name: 'Canva Pro', category: 'Design & Dev', purpose: 'High-velocity creative asset testing & social graphics', badge: 'Creative' },
  { name: 'SEMrush', category: 'SEO & Search', purpose: 'Domain authority analysis & SERP volatility alerts', badge: 'SEO' },
  { name: 'HubSpot', category: 'Analytics', purpose: 'CRM lead nurturing & automated sales routing', badge: 'CRM' },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Timeline & ROI',
    question: 'How long does it typically take to see tangible results from digital marketing?',
    answer: 'For Paid Advertising (PPC & Meta Ads), we establish baseline conversion tracking and generate qualified leads within 7 to 14 days of campaign launch. For SEO and Organic Search, high-intent ranking improvements typically emerge within 60 to 90 days, compounding aggressively month-over-month as domain authority and content clusters mature.'
  },
  {
    id: 'faq-2',
    category: 'Strategy & Execution',
    question: 'How do you build customized marketing strategies for individual businesses?',
    answer: 'We do not sell cookie-cutter packages. Every client engagement begins with our proprietary 40-point Growth Audit covering technical site health, competitor backlink profiles, paid ad waste, and conversion funnel friction. Based on these findings, we craft a dedicated 90-day sprint roadmap with specific monthly key performance indicators.'
  },
  {
    id: 'faq-3',
    category: 'Reporting & Transparency',
    question: 'Will I receive regular updates and access to real campaign performance data?',
    answer: 'Yes. You receive 24/7 access to a custom real-time Looker Studio dashboard showing raw spend, cost per lead, click-through rates, and revenue attribution. Additionally, your dedicated growth account manager hosts bi-weekly strategy reviews and provides weekly asynchronous sprint progress summaries.'
  },
  {
    id: 'faq-4',
    category: 'Services & Selection',
    question: 'Which digital marketing service is right for my current business stage?',
    answer: 'If you need immediate customer acquisition and validated market feedback, Paid PPC and Social Ads provide immediate volume. If you are building a sustainable long-term enterprise moat with lowering blended CAC, SEO and content architecture are essential. Most growing businesses benefit from our integrated Omnichannel Growth Model.'
  },
  {
    id: 'faq-5',
    category: 'Differentiators',
    question: 'What makes Xntrova Technologies fundamentally different from other agencies in Delhi NCR?',
    answer: 'Most agencies treat marketing and web development as separate silos. At Xntrova, we are a hybrid technology and growth marketing firm. We optimize the underlying React/Next.js code, server response times, and landing page UX alongside your ad campaigns. Plus, we tie our success to your revenue, not vanity impressions.'
  },
  {
    id: 'faq-6',
    category: 'Contract & Engagement',
    question: 'What are your contract terms and engagement models?',
    answer: 'We offer flexible engagement models tailored to high-growth companies: 3-month initial pilot agreements with subsequent month-to-month retainers, project-based web development sprints, or performance-shared growth retainers for select qualifying enterprises.'
  }
];

export const AGENCY_STATS = [
  { value: '+250%', label: 'Avg. Organic Traffic Lift', sub: 'Across 120+ client engagements' },
  { value: '₹45Cr+', label: 'Client Revenue Generated', sub: 'Attributed directly through our funnels' },
  { value: '120+', label: 'Projects Successfully Delivered', sub: 'Spanning B2B, D2C, Healthcare & Tech' },
  { value: '96.4%', label: 'Client Retention Rate', sub: 'Long-term compounding agency partnerships' },
];
