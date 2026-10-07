import React from 'react';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: 'Search Engine Optimization (SEO)', href: '#services' },
    { name: 'Pay-Per-Click (PPC) & Google Ads', href: '#services' },
    { name: 'Social Media & Brand Marketing', href: '#services' },
    { name: 'E-Commerce Scaling & CRO', href: '#services' },
    { name: 'B2B Content Marketing & Inbound', href: '#services' },
    { name: 'Custom Web & App Engineering', href: '#services' },
  ];

  const company = [
    { name: 'About Xntrova', href: '#about' },
    { name: 'Our 4-Step Methodology', href: '#process' },
    { name: 'Case Studies & Results', href: '#case-studies' },
    { name: 'Growth ROI Calculator', href: '#roi-calculator' },
    { name: 'Frequently Asked Questions', href: '#faq' },
    { name: 'Contact Agency HQ', href: '#contact' },
  ];

  const legal = [
    'Privacy Policy',
    'Terms & Conditions',
    'Cookie Policy',
    'Disclaimer',
    'Refund Policy',
    'Copyright Policy',
  ];

  return (
    <footer className="bg-[#05070A] border-t border-slate-900 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-display font-extrabold text-white text-base">
                X
              </span>
              <span className="font-display tracking-tight text-xl font-bold text-white">
                Xntrova<span className="text-blue-400">.</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              India’s premier digital marketing and technology agency. Delivering performance-driven SEO, high-yield PPC campaigns, and bespoke web engineering for enterprises across Delhi NCR and globally.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenAudit}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors"
              >
                Claim Free 40-Point Audit
              </button>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-4">
              Growth Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-blue-400 transition-colors block text-xs"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-blue-400 transition-colors block text-xs"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white mb-4">
              Get In Touch
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>A107, 2nd Floor, Sector 8, Dwarka, New Delhi - 110077</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href="tel:+918683828646" className="hover:text-white font-mono-num">
                +91 868-382-8646
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href="mailto:info@xntrova.com" className="hover:text-white">
                info@xntrova.com
              </a>
            </div>

            <div className="pt-2 text-[11px] text-slate-500">
              Office Hours: Monday – Friday, 9:30 AM – 7:00 PM IST
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Xntrova Technologies. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            {legal.map((item, i) => (
              <React.Fragment key={item}>
                <span className="hover:text-slate-400 cursor-pointer transition-colors">
                  {item}
                </span>
                {i < legal.length - 1 && (
                  <span aria-hidden="true" className="text-slate-800">·</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
