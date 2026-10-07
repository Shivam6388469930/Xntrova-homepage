import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Clock, ShieldCheck, ArrowRight, Download, Sparkles } from 'lucide-react';
import { AuditFormData } from '../types';

interface ContactSectionProps {
  initialService?: string;
  initialBudget?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService, initialBudget }) => {
  const [formData, setFormData] = useState<AuditFormData>({
    fullName: '',
    workEmail: '',
    phone: '',
    companyName: '',
    websiteUrl: '',
    serviceInterested: initialService || 'Search Engine Optimization (SEO)',
    monthlyBudget: initialBudget || '₹1.0 Lakh - ₹2.5 Lakhs',
    businessGoals: '',
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceInterested: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialBudget) {
      setFormData((prev) => ({ ...prev, monthlyBudget: initialBudget }));
    }
  }, [initialBudget]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Please enter your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = 'Please enter a valid work email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your contact phone number';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Simulate audit generation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleDownloadChecklist = () => {
    const auditText = `=========================================
XNTROVA TECHNOLOGIES - DIGITAL AUDIT REPORT
=========================================
Client: ${formData.fullName}
Company: ${formData.companyName || 'Not Specified'}
Email: ${formData.workEmail}
Website: ${formData.websiteUrl || 'Pending URL'}
Focus Service: ${formData.serviceInterested}
Budget Tier: ${formData.monthlyBudget}

AUDIT CHECKLIST COHORT:
1. Technical Core Web Vitals (LCP < 2.5s, CLS < 0.1)
2. Semantic Keyword Ranking Opportunities & Search Gaps
3. Paid Ad Account Structure & Negative Keyword Waste
4. Mobile Landing Page Conversion Rate Optimization (CRO)
5. Server-Side Attribution & GA4 / Meta CAPI Tracking

Our principal strategist in New Delhi has received your brief and will connect within 24 hours.
Direct Office: A107, 2nd Floor, Sector 8, Dwarka, New Delhi - 110077
Direct Phone: +91 868-382-8646
Email: info@xntrova.com
=========================================`;

    const blob = new Blob([auditText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Xntrova-Audit-Brief-${formData.companyName || 'Company'}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="contact" className="py-24 bg-[#07090E] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Agency Information & Audit Assurance */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
                Direct Contact · New Delhi Agency HQ
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Scale Your Revenue With Xntrova
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Ready to stop burning ad spend on unverified clicks? Connect with our senior digital growth team to get an actionable, 40-point technical audit of your marketing engine.
              </p>

              {/* Agency Direct Details */}
              <div className="mt-8 space-y-4">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-950 border border-blue-800/50 flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Agency Headquarters
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-white block mt-0.5">
                      A107, 2nd Floor, Sector 8, Dwarka, New Delhi - 110077
                    </span>
                    <span className="text-[11px] text-slate-500 mt-0.5 block">
                      Delhi NCR, India
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-800/50 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Direct Growth Desk
                    </span>
                    <a
                      href="tel:+918683828646"
                      className="text-xs sm:text-sm font-medium text-white hover:text-blue-400 transition-colors block mt-0.5 font-mono-num"
                    >
                      +91 868-382-8646
                    </a>
                    <span className="text-[11px] text-slate-500 mt-0.5 block">
                      Mon – Fri, 9:30 AM to 7:00 PM IST
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Official Inquiries
                    </span>
                    <a
                      href="mailto:info@xntrova.com"
                      className="text-xs sm:text-sm font-medium text-white hover:text-blue-400 transition-colors block mt-0.5"
                    >
                      info@xntrova.com
                    </a>
                    <span className="text-[11px] text-slate-500 mt-0.5 block">
                      Typical response time &lt; 4 hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Callout */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>24-Hour Fast Audit Turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>Strict NDA & Data Confidentiality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form Card */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-2xl backdrop-blur-xl">
              <div className="pb-6 border-b border-slate-800 mb-6">
                <h3 className="font-display text-2xl font-bold text-white">
                  Get a Free Digital Audit
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Tell us about your business goals and we will conduct a deep technical audit of your search footprint and advertising efficiency.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-white">
                    Audit Request Confirmed!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. Our growth team in New Delhi has queued your domain for a comprehensive 40-point technical & ad efficiency audit.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left max-w-md mx-auto text-xs space-y-2">
                    <div className="flex justify-between text-slate-400">
                      <span>Target Service:</span>
                      <span className="text-white font-medium">{formData.serviceInterested}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Budget Tier:</span>
                      <span className="text-white font-medium">{formData.monthlyBudget}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Assigned Office:</span>
                      <span className="text-white font-medium">Dwarka Sector 8, New Delhi</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleDownloadChecklist}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
                    >
                      <Download className="w-4 h-4 text-blue-400" />
                      <span>Download Audit Request Brief (.txt)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          workEmail: '',
                          phone: '',
                          companyName: '',
                          websiteUrl: '',
                          serviceInterested: 'Search Engine Optimization (SEO)',
                          monthlyBudget: '₹1.0 Lakh - ₹2.5 Lakhs',
                          businessGoals: '',
                        });
                      }}
                      className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm text-white bg-slate-950/70 border rounded-xl focus:outline-none focus:ring-1 transition-colors placeholder:text-slate-600 ${
                          errors.fullName
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="you@company.com"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm text-white bg-slate-950/70 border rounded-xl focus:outline-none focus:ring-1 transition-colors placeholder:text-slate-600 ${
                          errors.workEmail
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500'
                        }`}
                      />
                      {errors.workEmail && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.workEmail}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone and Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm text-white bg-slate-950/70 border rounded-xl focus:outline-none focus:ring-1 transition-colors placeholder:text-slate-600 ${
                          errors.phone
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Acme Tech Pvt Ltd"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-white bg-slate-950/70 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Row 3: Website URL and Priority Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Website URL
                      </label>
                      <input
                        type="url"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        placeholder="https://yourcompany.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-white bg-slate-950/70 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Which service are you interested in?
                      </label>
                      <select
                        value={formData.serviceInterested}
                        onChange={(e) => setFormData({ ...formData, serviceInterested: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-white bg-slate-950/70 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      >
                        <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                        <option value="Paid Advertising (Google & Meta PPC)">Paid Advertising (Google & Meta PPC)</option>
                        <option value="High-Converting Web Development">High-Converting Web Development</option>
                        <option value="E-Commerce Revenue Scaling">E-Commerce Revenue Scaling</option>
                        <option value="Social Media & Creative Brand Strategy">Social Media & Creative Brand Strategy</option>
                        <option value="Comprehensive Omnichannel Growth">Comprehensive Omnichannel Growth</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Budget Tier */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Estimated Monthly Marketing Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        '₹50K - ₹1.0 Lakh',
                        '₹1.0 Lakh - ₹2.5 Lakhs',
                        '₹2.5 Lakhs - ₹5.0 Lakhs',
                        '₹5.0+ Lakhs (Scale)',
                      ].map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setFormData({ ...formData, monthlyBudget: tier })}
                          className={`py-2 px-2 text-center text-[11px] rounded-lg border transition-all ${
                            formData.monthlyBudget === tier
                              ? 'bg-blue-950/80 border-blue-500 text-white font-semibold'
                              : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Row 5: Business Goals */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Tell us about your business goals & target milestones
                    </label>
                    <textarea
                      rows={3}
                      value={formData.businessGoals}
                      onChange={(e) => setFormData({ ...formData, businessGoals: e.target.value })}
                      placeholder="e.g. Looking to rank for commercial keywords across Delhi NCR and scale qualified enterprise inbound leads..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-white bg-slate-950/70 border border-slate-800 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 active:from-blue-700 active:to-cyan-700 rounded-xl shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Analyzing Domain Parameters...</span>
                    ) : (
                      <>
                        <span>Submit for Free Digital Audit</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    🔒 Strictly confidential. 100% free audit with zero obligation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
