import React, { useState } from 'react';
import { Search, Compass, Rocket, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onOpenAudit: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenAudit }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Discovery & Deep Technical Audit',
      duration: 'Days 1 - 5',
      summary: 'We diagnose your digital footprint, audit your tracking infrastructure, and uncover hidden revenue leaks before spending marketing capital.',
      deliverables: [
        '40-point technical SEO & Core Web Vitals audit',
        'Competitor ad spend & keyword gap intelligence',
        'Conversion funnel drop-off analysis',
        'Google Analytics 4 & pixel attribution verification'
      ],
      icon: Search,
    },
    {
      number: '02',
      title: 'Growth Architecture & Sprint Roadmap',
      duration: 'Days 6 - 10',
      summary: 'We formulate a bespoke 90-day omnichannel growth blueprint tailored to your unit economics, margins, and target customer profiles.',
      deliverables: [
        'Target ICP persona journey & commercial keyword mapping',
        'Channel allocation strategy (SEO vs. PPC vs. Social)',
        'Landing page wireframes & conversion messaging hooks',
        'Granular campaign budgeting & target CAC benchmarks'
      ],
      icon: Compass,
    },
    {
      number: '03',
      title: 'High-Velocity Multi-Channel Launch',
      duration: 'Days 11 - 25',
      summary: 'We roll out production-grade landing pages, launch segmented ad campaigns, and publish authoritative editorial content clusters.',
      deliverables: [
        'Sub-second React/Next.js landing pages deployment',
        'Full-funnel Google Search, Meta & LinkedIn campaigns',
        'High-converting ad creatives & video motion hooks',
        'Schema markup injection & technical indexation requests'
      ],
      icon: Rocket,
    },
    {
      number: '04',
      title: 'Optimization & Compounding Scale',
      duration: 'Ongoing Cadence',
      summary: 'We review cohort metrics weekly, kill underperforming creative variations, and scale ad budgets aggressively into winning conversion paths.',
      deliverables: [
        'Weekly 14-day growth sprints and sprint reports',
        'Multivariate A/B testing on headline & checkout offers',
        'Algorithmic bid adjustments & negative keyword pruning',
        'Continuous organic backlink & digital PR acquisition'
      ],
      icon: TrendingUp,
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#07090E] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
            How We Work · The Growth Methodology
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            A Predictable 4-Step Process Engineered for Results
          </h2>
          <p className="mt-4 text-base text-slate-300">
            We replace random marketing experiments with a disciplined execution framework refined over 120+ client engagements.
          </p>
        </div>

        {/* Step Selector Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={s.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? 'bg-blue-950/40 border-blue-500 shadow-md shadow-blue-950/50'
                    : 'bg-slate-900/30 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono-num text-xs font-bold ${isActive ? 'text-blue-400' : 'text-slate-500'}`}>
                    STEP {s.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
                </div>
                <div>
                  <div className={`text-xs font-semibold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {s.title}
                  </div>
                  <div className="text-[11px] font-mono-num text-slate-500 mt-1">
                    {s.duration}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/40 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-mono-num text-blue-400 font-semibold mb-2">
                <span>PHASE {steps[activeStep].number}</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">{steps[activeStep].duration}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                {steps[activeStep].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                {steps[activeStep].summary}
              </p>

              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Sprint Deliverables & Milestones
                </div>
                {steps[activeStep].deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between h-full">
              <div>
                <span className="text-[11px] font-mono-num uppercase tracking-wider text-cyan-400">
                  Client Accountability Standard
                </span>
                <h4 className="font-display text-base font-bold text-white mt-2 mb-2">
                  Weekly Sprint Reviews
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Every step in this process is documented in your dedicated client workspace. You receive transparent weekly video walkthroughs and sprint progress dashboards.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={onOpenAudit}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-sm transition-colors"
                >
                  <span>Initiate Step 01 Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
