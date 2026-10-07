import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, Sparkles } from 'lucide-react';
import { CASE_STUDIES_DATA } from '../data/agencyData';
import { CaseStudyItem } from '../types';
import { CaseStudyDetailModal } from './CaseStudyDetailModal';

interface CaseStudiesSectionProps {
  onOpenAudit: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenAudit }) => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudyItem | null>(null);
  const [filterIndustry, setFilterIndustry] = useState<string>('All');

  const industries = ['All', 'E-Commerce & Retail', 'Enterprise SaaS & Cloud', 'Healthcare & Ayurveda'];

  const filteredStudies = filterIndustry === 'All'
    ? CASE_STUDIES_DATA
    : CASE_STUDIES_DATA.filter((cs) => cs.industry === filterIndustry);

  return (
    <>
      <section id="case-studies" className="py-24 bg-[#090D14] border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
                Proven Client Impact · Real Returns
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Case Studies & Documented Growth Outcomes
              </h2>
              <p className="mt-4 text-base text-slate-300">
                Explore how Xntrova transformed conversion funnels, scaled organic search market share, and delivered multi-crore revenue pipelines.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="mt-6 md:mt-0 flex flex-wrap gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
              {industries.map((ind) => (
                <button
                  key={ind}
                  type="button"
                  onClick={() => setFilterIndustry(ind)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 whitespace-nowrap ${
                    filterIndustry === ind
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {ind === 'All' ? 'All Verticals' : ind.split(' & ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                onClick={() => setSelectedStudy(study)}
                className="group cursor-pointer rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/60 overflow-hidden shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Image with Scrim and Fallback container */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-800">
                    <img
                      src={study.image}
                      alt={study.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    {/* Unboxed Meta Tag Overlay */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                      <span className="text-white font-medium bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                        {study.client}
                      </span>
                      <span className="text-cyan-300 font-mono-num text-[11px] bg-slate-900/80 backdrop-blur-sm px-2 py-0.5 rounded border border-cyan-500/20">
                        {study.timeframe}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-baseline gap-2">
                      <span className="font-display font-extrabold text-2xl text-emerald-400 font-mono-num">
                        {study.highlightMetric}
                      </span>
                      <span className="text-xs text-slate-300 font-medium">
                        {study.metricLabel}
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-[11px] text-blue-400 font-medium uppercase tracking-wider mb-2">
                      <span>{study.industry}</span>
                      <span aria-hidden="true">·</span>
                      <span>{study.service}</span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug mb-3">
                      {study.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {study.summary}
                    </p>
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                    Read Breakdown & Data
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-800 group-hover:bg-blue-600 text-slate-400 group-hover:text-white flex items-center justify-center transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <CaseStudyDetailModal
        study={selectedStudy}
        onClose={() => setSelectedStudy(null)}
        onOpenAudit={onOpenAudit}
      />
    </>
  );
};
