import React, { useState } from 'react';
import { ArrowUpRight, Check, Search, DollarSign, Code, Share2, ShoppingBag, FileText } from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForAudit: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForAudit }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedServiceId, setExpandedServiceId] = useState<string>('seo');

  const categories = ['All', 'SEO', 'Paid Ads', 'Engineering', 'Growth', 'Content'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'seo': return Search;
      case 'ppc': return DollarSign;
      case 'web-dev': return Code;
      case 'social-media': return Share2;
      case 'ecommerce': return ShoppingBag;
      case 'content-marketing': return FileText;
      default: return Search;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#07090E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
              Capabilities & Growth Services
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Best Digital Marketing Services in Delhi for Sustainable Growth
            </h2>
            <p className="mt-4 text-base text-slate-300">
              We deploy full-funnel digital marketing strategies and web technology solutions engineered to lower customer acquisition costs and build resilient brand equity.
            </p>
          </div>

          {/* Interactive Category Segmented Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Bento-Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem, idx: number) => {
            const Icon = getServiceIcon(service.id);
            const isFeatured = idx === 0 || idx === 1;

            return (
              <div
                key={service.id}
                className={`group rounded-2xl border transition-all duration-200 flex flex-col justify-between p-6 sm:p-7 relative overflow-hidden ${
                  isFeatured
                    ? 'bg-slate-900/60 border-slate-800 hover:border-blue-500/60'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Top Row: Editorial Number + Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono-num text-xs font-bold text-slate-400">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Key Metric Spotlight */}
                  <div className="mb-6 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
                    <div>
                      <div className="font-display font-bold text-lg text-emerald-400 font-mono-num">
                        {service.keyMetrics}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {service.metricsLabel}
                      </div>
                    </div>
                    <span className="text-[11px] font-mono-num text-blue-400 uppercase tracking-wider">
                      Verified Impact
                    </span>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Core Deliverables
                    </div>
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Unboxed Tools & Action */}
                <div className="pt-5 border-t border-slate-800/80 flex flex-col gap-3">
                  {/* Clean unboxed tool tags */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400">
                    <span className="text-slate-500">Stack:</span>
                    {service.toolsUsed.map((tool, tIdx) => (
                      <React.Fragment key={tool}>
                        <span>{tool}</span>
                        {tIdx < service.toolsUsed.length - 1 && (
                          <span aria-hidden="true" className="text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForAudit(service.title)}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-blue-600 rounded-lg transition-all duration-150"
                  >
                    <span>Request Audit for {service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
