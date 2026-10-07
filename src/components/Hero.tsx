import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Sparkles } from 'lucide-react';
import { AGENCY_ASSETS, AGENCY_STATS } from '../data/agencyData';

interface HeroProps {
  onOpenAudit: () => void;
  onAuditSubmitted: (data: { name: string; email: string; phone: string; service: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit, onAuditSubmitted }) => {
  const [heroForm, setHeroForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'SEO & Organic Growth'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroForm.name || !heroForm.email) return;
    setSubmitted(true);
    onAuditSubmitted(heroForm);
    setTimeout(() => {
      setSubmitted(false);
      setHeroForm({ name: '', email: '', phone: '', service: 'SEO & Organic Growth' });
    }, 4000);
  };

  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#07090E]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-[350px] h-[300px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Zero-Pill Unboxed Metadata Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-4">
              <span>Delhi NCR Premier Growth Agency</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Performance & Web Engineering</span>
            </div>

            {/* Dominant Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Scale Your Business With The Best Digital Marketing Agency in Delhi
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              At Xntrova Technologies, we fuse data-driven performance marketing with modern web engineering. Turn search clicks into paying customers with guaranteed attribution, technical SEO, and compounding ROI.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                type="button"
                onClick={onOpenAudit}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-200 group"
              >
                <span>Request Free Digital Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all duration-200"
              >
                <span>View Proven Case Studies</span>
              </a>
            </div>

            {/* Trust Signals */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Lock-In Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Verified 4.9/5 Clutch & GoodFirms</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span>Dedicated Growth Strategists</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & High-Conversion Audit Card */}
          <div className="lg:col-span-5 relative">
            {/* Visual Studio Background Card with Contrast Scrim */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl backdrop-blur-xl p-6 sm:p-8">
              {/* Image banner preview with subtle scrim */}
              <div className="relative h-44 rounded-xl overflow-hidden mb-6 border border-slate-800/80">
                <img
                  src={AGENCY_ASSETS.hero}
                  alt="Xntrova Technologies Creative Agency Studio in New Delhi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">Xntrova Growth Lab</span>
                  <span className="text-emerald-400 font-mono-num flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Accepting Q4 Growth Clients
                  </span>
                </div>
              </div>

              {/* Instant Audit Lead Capture Form */}
              <div className="mb-2">
                <h3 className="font-display text-lg font-bold text-white mb-1">
                  Get a Free Digital Audit
                </h3>
                <p className="text-xs text-slate-400">
                  Tell us about your business and we'll analyze your search visibility & ad waste within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="mt-4 p-5 rounded-xl bg-emerald-950/40 border border-emerald-800/80 text-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-emerald-200">Audit Request Received!</p>
                  <p className="text-xs text-emerald-300/80 mt-1">
                    Our lead strategist will review your domain and email your custom growth roadmap.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={heroForm.name}
                        onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3 py-2 text-xs text-white bg-slate-950/70 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-300 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={heroForm.email}
                        onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-3 py-2 text-xs text-white bg-slate-950/70 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-slate-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={heroForm.phone}
                        onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 text-xs text-white bg-slate-950/70 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-slate-300 mb-1">
                        Priority Service
                      </label>
                      <select
                        value={heroForm.service}
                        onChange={(e) => setHeroForm({ ...heroForm, service: e.target.value })}
                        className="w-full px-3 py-2 text-xs text-white bg-slate-950/70 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      >
                        <option value="SEO & Organic Growth">Search Engine Optimization</option>
                        <option value="Performance PPC Ads">Paid Advertising (PPC)</option>
                        <option value="Web Engineering">Web App & UI/UX Development</option>
                        <option value="Social & Creative">Social Media & Brand Strategy</option>
                        <option value="Full Omnichannel Growth">Full Omnichannel Growth</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 mt-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 active:from-blue-700 active:to-cyan-700 rounded-lg shadow-md transition-all duration-150"
                  >
                    Submit for Instant 24h Review
                  </button>

                  <p className="text-[10px] text-center text-slate-500">
                    Strict privacy. We never spam or sell client information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Quantitative Stats Bar */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {AGENCY_STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-display font-bold text-3xl sm:text-4xl text-white font-mono-num tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-200 mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-slate-500 mt-0.5">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
