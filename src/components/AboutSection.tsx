import React, { useState } from 'react';
import { Lightbulb, Compass, BarChart3, Trophy, ArrowRight, Eye, Users, MousePointerClick, RefreshCw } from 'lucide-react';
import { AGENCY_PILLARS, FLYWHEEL_STEPS, AGENCY_ASSETS } from '../data/agencyData';

interface AboutSectionProps {
  onOpenAudit: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAudit }) => {
  const [activeFlywheelStep, setActiveFlywheelStep] = useState(0);

  const pillarIcons = [Lightbulb, Compass, BarChart3, Trophy];
  const flywheelIcons = [Eye, Users, MousePointerClick, RefreshCw];

  return (
    <section id="about" className="py-24 bg-[#090D14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
            About Xntrova Technologies
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Driven by Ideas. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Focused on Quantifiable Results.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            At Xntrova, we believe that great marketing begins with understanding people. Standing as the leading digital growth & tech agency in Delhi NCR, we merge creative brand intuition with statistical rigor to help ambitious businesses command industry leadership.
          </p>
        </div>

        {/* 4 Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {AGENCY_PILLARS.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            return (
              <div
                key={pillar.number}
                className="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono-num text-xs font-bold text-blue-400 tracking-wider">
                      {pillar.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-medium text-blue-300/90 mb-3 leading-snug">
                    {pillar.tagline}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Growth Flywheel & Agency Studio Showcase */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-950/80 border border-slate-800/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Flywheel Interactive Controls */}
            <div className="lg:col-span-6">
              <div className="text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-2">
                Our Continuous Agency Growth Flywheel
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                Turning Market Potential into Compounding Revenue
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-8 leading-relaxed">
                Marketing fails when channels operate in disconnected silos. Our continuous 4-stage flywheel ensures every impression builds toward measurable conversions and lifelong customer value.
              </p>

              {/* Step Selectors */}
              <div className="space-y-3">
                {FLYWHEEL_STEPS.map((step, idx) => {
                  const Icon = flywheelIcons[idx];
                  const isActive = activeFlywheelStep === idx;
                  return (
                    <button
                      key={step.step}
                      type="button"
                      onClick={() => setActiveFlywheelStep(idx)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-4 ${
                        isActive
                          ? 'bg-blue-950/40 border-blue-500 shadow-md shadow-blue-950/50'
                          : 'bg-slate-900/30 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono-num transition-colors ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4
                            className={`text-sm font-semibold tracking-tight ${
                              isActive ? 'text-white' : 'text-slate-300'
                            }`}
                          >
                            {step.step}. {step.name}
                          </h4>
                          <span className="text-[11px] font-mono-num text-cyan-400 font-medium">
                            {step.highlight}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Visual Team & Studio Collab Asset */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
                <img
                  src={AGENCY_ASSETS.team}
                  alt="Xntrova Technologies Strategy Squad collaborating in Delhi studio"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-slate-950/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-white">Active Stage Deliverables</span>
                    <span className="text-xs text-blue-400 font-mono-num">Sprint Cadence: 14 Days</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Executing {FLYWHEEL_STEPS[activeFlywheelStep].name} with senior Delhi NCR growth engineers, content strategists, and paid ad media buyers.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-400 px-2">
                <span>Based in Dwarka, New Delhi</span>
                <button
                  type="button"
                  onClick={onOpenAudit}
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium transition-colors"
                >
                  <span>Schedule Strategy Discovery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
