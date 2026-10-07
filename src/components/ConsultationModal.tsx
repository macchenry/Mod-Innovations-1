import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, UserCheck, Calendar, Lock } from 'lucide-react';
import { ConsultationRequest } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = 'WealthWise Consulting'
}) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<ConsultationRequest>({
    serviceId: initialService,
    portfolioSize: '$500k – $2M',
    timeframe: 'Immediate (Next 1–2 Weeks)',
    fullName: '',
    email: '',
    phone: '',
    preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    notes: ''
  });

  if (!isOpen) return null;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setSubmitted(true);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#061814] border border-emerald-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-emerald-950 text-slate-400 hover:text-white hover:bg-emerald-900 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation Success State */
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#a3e635] text-slate-950 mx-auto flex items-center justify-center shadow-xl shadow-lime-500/20">
              <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white font-display">
                Consultation Confirmed
              </h3>
              <p className="text-sm text-slate-300">
                Thank you, <span className="text-[#a3e635] font-semibold">{formData.fullName || 'Client'}</span>. A Senior Managing Director has been assigned to your case.
              </p>
            </div>

            <div className="bg-emerald-950/70 border border-emerald-900/60 rounded-2xl p-4 text-left space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-500">Advisory Practice:</span>
                <span className="text-white font-medium">{formData.serviceId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Portfolio Scale:</span>
                <span className="text-white font-medium">{formData.portfolioSize}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Scheduled Date:</span>
                <span className="text-[#a3e635] font-medium">{formData.preferredDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Status:</span>
                <span className="text-emerald-400 font-semibold">Priority Diagnostic Confirmed</span>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              A calendar invite and encrypted briefing checklist have been sent to <span className="text-slate-200">{formData.email || 'your email'}</span>.
            </p>

            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="w-full py-3 rounded-md text-xs uppercase tracking-wider font-bold text-slate-950 bg-[#a3e635] hover:bg-[#bef264] transition-all cursor-pointer"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        ) : (
          /* Multi-step Form */
          <div>
            <div className="mb-6 space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a3e635]">
                <span>Step {step} of 2</span>
                <span className="text-slate-600">·</span>
                <span>{step === 1 ? 'Advisory Focus' : 'Executive Details'}</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Request A Confidential Consultation
              </h3>
              <p className="text-xs text-slate-400">
                Partner directly with seasoned financial architects to review and optimize your financial posture.
              </p>
            </div>

            <form onSubmit={handleNextStep} className="space-y-4">
              {step === 1 ? (
                <>
                  {/* Service Pillar Select */}
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-1.5">
                      Primary Advisory Pillar
                    </label>
                    <select
                      value={formData.serviceId}
                      onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                      className="w-full bg-[#04110e] border border-emerald-900 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#a3e635]"
                    >
                      <option value="WealthWise Consulting">WealthWise Consulting & Asset Protection</option>
                      <option value="Invest Management">Invest Management & Portfolio Allocation</option>
                      <option value="Financial Navigators">Financial Navigators & Corporate Advisory</option>
                      <option value="Financial Growing">Financial Growing & Venture Capital</option>
                      <option value="Horizon Wealth Advisors">Horizon Wealth & Succession Planning</option>
                      <option value="Private Executive Advisory Session">Private Executive Diagnostic</option>
                    </select>
                  </div>

                  {/* Portfolio Range */}
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-1.5">
                      Asset / Capital Scale
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        '$250k – $500k',
                        '$500k – $2M',
                        '$2M – $10M',
                        '$10M+ Institutional'
                      ].map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormData({ ...formData, portfolioSize: range })}
                          className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-left cursor-pointer ${
                            formData.portfolioSize === range
                              ? 'bg-emerald-900/90 text-[#a3e635] border-[#a3e635]'
                              : 'bg-emerald-950/40 text-slate-300 border-emerald-900/60 hover:border-emerald-700'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-1.5">
                      Preferred Consultation Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#04110e] border border-emerald-900 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#a3e635]"
                    />
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-md text-xs uppercase tracking-wider font-bold text-slate-950 bg-[#a3e635] hover:bg-[#bef264] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Continue to Contact Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jonathan Reynolds"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#04110e] border border-emerald-900 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#a3e635]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-1">
                      Work / Private Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. jonathan@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#04110e] border border-emerald-900 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#a3e635]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-1">
                      Direct Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +1 (555) 234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#04110e] border border-emerald-900 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#a3e635]"
                    />
                  </div>

                  {/* Specific Objectives Notes */}
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-1">
                      Key Objective / Brief Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Tax sheltering ahead of business sale, multi-family trust rebalancing..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#04110e] border border-emerald-900 rounded-xl px-3.5 py-2 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#a3e635]"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-400 pt-1">
                    <Lock className="w-3.5 h-3.5 text-[#a3e635]" />
                    <span>256-Bit Encrypted & Strictly Confidential NDA Guarantee</span>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 py-3 rounded-md text-xs uppercase tracking-wider font-semibold text-slate-300 bg-emerald-950 hover:bg-emerald-900 transition-all cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 py-3 rounded-md text-xs uppercase tracking-wider font-bold text-slate-950 bg-[#a3e635] hover:bg-[#bef264] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-lime-500/20"
                    >
                      <span>Confirm Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
