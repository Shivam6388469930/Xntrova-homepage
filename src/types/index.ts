export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'SEO' | 'Paid Ads' | 'Engineering' | 'Content' | 'Growth';
  keyMetrics: string;
  metricsLabel: string;
  deliverables: string[];
  toolsUsed: string[];
}

export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  image: string;
  highlightMetric: string;
  metricLabel: string;
  timeframe: string;
  summary: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  quote: string;
  rating: number;
  metricOutcome: string;
  platform: 'Google' | 'Clutch' | 'GoodFirms';
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface ToolItem {
  name: string;
  category: 'SEO & Search' | 'Paid Media' | 'Analytics' | 'Design & Dev';
  purpose: string;
  badge: string;
}

export interface AuditFormData {
  fullName: string;
  workEmail: string;
  phone: string;
  companyName: string;
  websiteUrl: string;
  serviceInterested: string;
  monthlyBudget: string;
  businessGoals: string;
}
