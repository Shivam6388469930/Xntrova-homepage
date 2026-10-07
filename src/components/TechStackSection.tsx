import React, { useState } from 'react';
import { TOOLS_DATA } from '../data/agencyData';
import { Wrench, CheckCircle } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'SEO & Search', 'Paid Media', 'Analytics', 'Design & Dev'];

  const filteredTools = activeTab === 'All'
    ? TOOLS_DATA
    : TOOLS_DATA.filter((t) => t.category === activeTab);

  return (
    <section className="py-20 bg-[#090D14] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
              Enterprise Tooling Stack
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tools & Platforms We Work With
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              We leverage modern search intelligence, programmatic ad bidding engines, and developer frameworks to maximize digital leverage.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex flex-wrap gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 ${
                  activeTab === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              className="p-4 sm:p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono-num text-slate-500 font-medium">
                    {tool.badge}
                  </span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400/80" />
                </div>
                <h3 className="font-display text-sm font-bold text-white mb-1">
                  {tool.name}
                </h3>
                <p className="text-[11px] text-slate-400 leading-snug">
                  {tool.purpose}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
