import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/agencyData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 bg-[#07090E] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
              Client Endorsements · Verified Reviews
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Words From Our Valued Clients
            </h2>
            <p className="mt-4 text-base text-slate-300">
              Read how founders, enterprise CMOs, and clinic directors across Delhi NCR scale with Xntrova as their strategic growth engine.
            </p>
          </div>

          {/* Platform Badges */}
          <div className="mt-6 md:mt-0 flex items-center gap-4 p-3 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto text-xs">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white">Clutch</span>
              <span className="text-amber-400 font-mono-num">4.9/5</span>
            </div>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white">GoodFirms</span>
              <span className="text-amber-400 font-mono-num">5.0/5</span>
            </div>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white">Google</span>
              <span className="text-amber-400 font-mono-num">4.9/5</span>
            </div>
          </div>
        </div>

        {/* Featured Testimonial Spotlight */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/50 border border-slate-800 relative mb-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs text-slate-400 ml-2 font-mono-num">
                  Verified {current.platform} Review
                </span>
              </div>

              {/* Quote Text */}
              <blockquote className="text-base sm:text-xl text-slate-100 font-normal leading-relaxed mb-8 italic">
                "{current.quote}"
              </blockquote>

              {/* Author & Result */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800">
                <div>
                  <h4 className="font-display text-base font-bold text-white">
                    {current.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {current.role} · <span className="text-slate-300">{current.company}</span>
                  </p>
                </div>

                <div className="p-2.5 px-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2 self-start sm:self-auto">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-mono-num font-bold text-emerald-400">
                    {current.metricOutcome}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Switcher */}
            <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end h-full">
              <div className="hidden lg:block text-slate-700">
                <Quote className="w-20 h-20 opacity-30 text-blue-500" />
              </div>

              <div className="flex items-center gap-3 mt-6 lg:mt-0">
                <button
                  type="button"
                  onClick={prev}
                  className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-xs font-mono-num text-slate-400">
                  {currentIndex + 1} / {TESTIMONIALS_DATA.length}
                </div>
                <button
                  type="button"
                  onClick={next}
                  className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Secondary Review Snippets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.slice(0, 3).map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                currentIndex === idx
                  ? 'bg-blue-950/30 border-blue-500 shadow-md'
                  : 'bg-slate-900/30 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono-num text-slate-500">
                    {item.platform}
                  </span>
                </div>
                <p className="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">{item.name}</div>
                  <div className="text-[11px] text-slate-400">{item.company}</div>
                </div>
                <span className="text-[11px] font-mono-num text-emerald-400 font-semibold">
                  {item.metricOutcome}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
