import React from 'react';
import { Check, X, ShieldCheck, Zap, Database, TrendingUp, Sparkles } from 'lucide-react';

interface WhyChooseUsSectionProps {
  onOpenAudit: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onOpenAudit }) => {
  const comparisons = [
    {
      feature: 'Performance Attribution',
      traditional: 'Vanity impressions, clicks & unverified reach',
      xntrova: 'Closed pipeline, direct revenue & blended ROAS',
    },
    {
      feature: 'Technical Competence',
      traditional: 'Outsourced developers or basic WordPress templates',
      xntrova: 'Full-stack React / Next.js web engineers in-house',
    },
    {
      feature: 'Reporting Transparency',
      traditional: 'Monthly PDF screenshots with delayed data',
      xntrova: '24/7 Live Looker Studio & CRM conversion dashboards',
    },
    {
      feature: 'Account Management',
      traditional: 'Handoff to junior account coordinators',
      xntrova: 'Direct access to senior growth & creative principals',
    },
    {
      feature: 'Speed of Execution',
      traditional: 'Weeks of bureaucratic approval back-and-forth',
      xntrova: 'Rapid 14-day sprint cycles with rapid A/B testing',
    },
  ];

  return (
    <section className="py-24 bg-[#090D14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
            Why Choose Xntrova Technologies
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered Different. Built for Real Commercial Impact.
          </h2>
          <p className="mt-4 text-base text-slate-300">
            We operate as an embedded growth engineering partner rather than a detached service vendor. See how our model contrasts with traditional agency practices.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 mb-5">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-white mb-2">
              Integrated Tech & Ad Ops
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We fix site speed bottlenecks, implement server-side tracking (CAPI), and redesign checkout funnels before scaling media budgets.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-5">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-white mb-2">
              Uncompromising Attribution
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every rupee is tracked against actual bottom-line revenue. We eliminate wasted spend on underperforming keywords and irrelevant audiences.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/50 transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 mb-5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-white mb-2">
              No Hostage Accounts
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              You own 100% of your Google Ads, Meta ad accounts, code repositories, and analytics properties. Full client autonomy at all times.
            </p>
          </div>
        </div>

        {/* Agency Comparison Table */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 overflow-hidden shadow-xl">
          <div className="p-5 sm:p-6 bg-slate-900/80 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-lg font-bold text-white">
                Traditional Digital Agencies vs. Xntrova Technologies
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                A transparent breakdown of operating models, accountability, and technical velocity.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenAudit}
              className="self-start sm:self-auto px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap"
            >
              Get Free Growth Roadmap
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/40 text-slate-400 uppercase text-[11px] tracking-wider font-semibold">
                  <th className="py-4 px-6 w-1/4">Evaluation Dimension</th>
                  <th className="py-4 px-6 w-3/8 text-slate-500">Traditional Agency Model</th>
                  <th className="py-4 px-6 w-3/8 text-blue-400">The Xntrova Growth Engine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500/80 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-200">
                      <div className="flex items-start gap-2 font-medium">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-emerald-300/90">{row.xntrova}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
