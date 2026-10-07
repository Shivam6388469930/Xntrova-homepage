import React from 'react';
import { X, ArrowRight, CheckCircle2, TrendingUp, Building2, Calendar } from 'lucide-react';
import { CaseStudyItem } from '../types';

interface CaseStudyDetailModalProps {
  study: CaseStudyItem | null;
  onClose: () => void;
  onOpenAudit: () => void;
}

export const CaseStudyDetailModal: React.FC<CaseStudyDetailModalProps> = ({
  study,
  onClose,
  onOpenAudit,
}) => {
  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#0B0F17] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Top Header Image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
          <img
            src={study.image}
            alt={study.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/60 to-transparent" />
          
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white border border-slate-700/80 transition-colors"
            aria-label="Close case study details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 text-xs font-mono-num text-cyan-400 font-semibold mb-1">
              <span>{study.industry}</span>
              <span aria-hidden="true">·</span>
              <span>{study.service}</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              {study.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div>
              <span className="text-[11px] text-slate-400 block">Client</span>
              <span className="text-xs font-semibold text-white">{study.client}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block">Engagement Period</span>
              <span className="text-xs font-semibold text-white font-mono-num">{study.timeframe}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block">Key Result</span>
              <span className="text-xs font-bold text-emerald-400 font-mono-num">{study.highlightMetric}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 block">Metric Focus</span>
              <span className="text-xs font-semibold text-slate-300">{study.metricLabel}</span>
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-2">
                The Core Challenge
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {study.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
                The Xntrova Growth Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {study.solution}
              </p>
            </div>
          </div>

          {/* Quantified Results Grid */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Verified Business Outcomes
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {study.results.map((res, i) => (
                <div key={i} className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-sm sm:text-base font-bold font-mono-num text-emerald-400">
                    {res.value}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Action */}
        <div className="p-4 sm:p-6 bg-slate-900/80 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            Ready to achieve comparable growth metrics for your business?
          </p>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenAudit();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
          >
            <span>Request Custom Growth Blueprint</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
