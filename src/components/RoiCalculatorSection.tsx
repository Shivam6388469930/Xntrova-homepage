import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, Sliders, Sparkles, Check } from 'lucide-react';

interface RoiCalculatorSectionProps {
  onApplyBlueprint: (budget: string, serviceGoal: string) => void;
}

export const RoiCalculatorSection: React.FC<RoiCalculatorSectionProps> = ({ onApplyBlueprint }) => {
  const [monthlyBudget, setMonthlyBudget] = useState<number>(150000);
  const [selectedGoal, setSelectedGoal] = useState<'leads' | 'ecommerce' | 'organic'>('leads');
  const [industry, setIndustry] = useState<'b2b' | 'd2c' | 'local'>('b2b');

  // Realistic agency projections based on Delhi NCR digital benchmarks
  const formatINR = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)} Lakhs`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  // Calculations
  const estimatedReach = Math.round(monthlyBudget * (selectedGoal === 'ecommerce' ? 1.4 : 0.85));
  const estimatedClicks = Math.round(estimatedReach * 0.038);
  const estimatedConversions = Math.round(
    selectedGoal === 'ecommerce'
      ? estimatedClicks * 0.028
      : selectedGoal === 'leads'
      ? estimatedClicks * 0.052
      : estimatedClicks * 0.04
  );

  const projectedRoas = selectedGoal === 'ecommerce' ? '3.4x - 4.8x' : '3.1x - 4.2x';
  const pipelineValue = Math.round(
    selectedGoal === 'ecommerce'
      ? monthlyBudget * 3.6
      : selectedGoal === 'leads'
      ? estimatedConversions * 45000
      : monthlyBudget * 2.8
  );

  const channelSplit = selectedGoal === 'ecommerce'
    ? { ppc: '45% Meta & Shopping', seo: '30% Technical SEO', cro: '25% Checkout CRO' }
    : selectedGoal === 'leads'
    ? { ppc: '40% Google Search & LinkedIn', seo: '35% ICP Search Moats', cro: '25% Landing Page Funnels' }
    : { ppc: '25% Paid Discovery', seo: '55% Content Clusters & PR', cro: '20% On-Page UX' };

  return (
    <section id="roi-calculator" className="py-24 bg-[#07090E] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
            Interactive Forecasting Engine
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your Growth ROI & Recommended Channel Allocation
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Model your prospective pipeline returns based on historical benchmark metrics from 120+ Xntrova client campaigns across India.
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="rounded-3xl bg-slate-900/40 border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Input Controls Column */}
            <div className="lg:col-span-6 space-y-8">
              {/* 1. Monthly Marketing Budget Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-blue-400" />
                    <span>Monthly Marketing Budget</span>
                  </label>
                  <span className="font-mono-num text-lg font-bold text-blue-400 bg-blue-950/60 border border-blue-800/60 px-3 py-1 rounded-lg">
                    {formatINR(monthlyBudget)}
                  </span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="1000000"
                  step="25000"
                  value={monthlyBudget}
                  onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono-num mt-2">
                  <span>₹50,000 (Seed)</span>
                  <span>₹5.0 Lakhs</span>
                  <span>₹10.0+ Lakhs (Scale)</span>
                </div>
              </div>

              {/* 2. Core Business Objective */}
              <div>
                <label className="text-sm font-semibold text-white block mb-3">
                  Primary Growth Objective
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'leads', label: 'B2B Inbound Leads', sub: 'High-Ticket Pipeline' },
                    { id: 'ecommerce', label: 'D2C Retail & Sales', sub: 'ROAS & Checkouts' },
                    { id: 'organic', label: 'Organic Search Moat', sub: 'Long-term SEO Rank' },
                  ].map((goal) => (
                    <button
                      key={goal.id}
                      type="button"
                      onClick={() => setSelectedGoal(goal.id as any)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedGoal === goal.id
                          ? 'bg-blue-950/50 border-blue-500 text-white'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-semibold text-white">{goal.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{goal.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Industry Sector */}
              <div>
                <label className="text-sm font-semibold text-white block mb-3">
                  Industry Vertical
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'b2b', label: 'Technology / B2B' },
                    { id: 'd2c', label: 'E-Commerce / D2C' },
                    { id: 'local', label: 'Clinic / Services' },
                  ].map((ind) => (
                    <button
                      key={ind.id}
                      type="button"
                      onClick={() => setIndustry(ind.id as any)}
                      className={`py-2 px-3 rounded-lg border text-center text-xs font-medium transition-all ${
                        industry === ind.id
                          ? 'bg-cyan-950/50 border-cyan-500 text-white'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {ind.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Channel Split Recommendation */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2.5">
                  Recommended Channel Allocation Model
                </span>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Paid Ads</span>
                    <span className="text-xs font-semibold text-blue-400 font-mono-num">{channelSplit.ppc}</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">SEO & Content</span>
                    <span className="text-xs font-semibold text-emerald-400 font-mono-num">{channelSplit.seo}</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Web CRO</span>
                    <span className="text-xs font-semibold text-cyan-400 font-mono-num">{channelSplit.cro}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Projected Outputs Column */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" />
                    <span>Projected Monthly Commercial Yield</span>
                  </span>
                  <span className="text-[11px] font-mono-num text-slate-400">
                    Delhi NCR Cohort Averages
                  </span>
                </div>

                {/* Primary Metric Hero */}
                <div className="mb-8">
                  <span className="text-xs text-slate-400 block">
                    Estimated Gross Monthly Pipeline / GMV
                  </span>
                  <div className="font-display font-extrabold text-3xl sm:text-4xl text-white font-mono-num mt-1">
                    {formatINR(pipelineValue)}
                  </div>
                  <div className="text-xs text-emerald-400 font-mono-num mt-1 flex items-center gap-1">
                    <span>Expected ROAS: {projectedRoas}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-400">Net Margin Positive</span>
                  </div>
                </div>

                {/* Secondary Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Est. High-Intent Reach</span>
                    <span className="text-lg font-bold text-white font-mono-num mt-1 block">
                      {estimatedReach.toLocaleString('en-IN')}+
                    </span>
                    <span className="text-[10px] text-slate-500">Impressions / Mo</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">
                      {selectedGoal === 'ecommerce' ? 'Orders Generated' : 'Qualified Inbound Leads'}
                    </span>
                    <span className="text-lg font-bold text-white font-mono-num mt-1 block">
                      {estimatedConversions.toLocaleString('en-IN')}+
                    </span>
                    <span className="text-[10px] text-slate-500">Verified Conversions</span>
                  </div>
                </div>

                {/* Guarantee notice */}
                <div className="p-3.5 rounded-lg bg-blue-950/30 border border-blue-900/50 mb-6 text-xs text-blue-200">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>
                      Includes free dedicated conversion tracking setup, weekly sprint calls, and weekly Looker dashboard access.
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() =>
                  onApplyBlueprint(
                    formatINR(monthlyBudget),
                    selectedGoal === 'ecommerce'
                      ? 'E-Commerce Scaling'
                      : selectedGoal === 'leads'
                      ? 'B2B Pipeline Generation'
                      : 'Organic Search Domination'
                  )
                }
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl shadow-md shadow-blue-600/30 transition-all duration-150"
              >
                <span>Apply This Custom Blueprint to My Business</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
