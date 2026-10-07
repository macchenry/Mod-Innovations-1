import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Wrench, ShieldCheck, Send } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Printer Mainboard and Control Board Repairs'
}) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    serviceId: initialService,
    serviceType: 'Hardware Repair & Technical Service',
    fullName: '',
    email: '',
    phone: '',
    details: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#061814] border border-emerald-800/80 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 shadow-2xl text-slate-100 my-auto max-h-[90vh] overflow-y-auto"
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
            <div className="w-16 h-16 rounded-full bg-[#84cc16] text-slate-950 mx-auto flex items-center justify-center shadow-xl shadow-lime-500/20">
              <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white font-display">
                Service Request Received
              </h3>
              <p className="text-sm text-slate-300">
                Thank you, <span className="text-[#84cc16] font-semibold">{formData.fullName || 'Valued Client'}</span>. A technical specialist from MOD Innovations has been notified.
              </p>
            </div>

            <div className="bg-emerald-950/70 border border-emerald-900/60 rounded-2xl p-4 text-left space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-500">Service Focus:</span>
                <span className="text-white font-medium">{formData.serviceId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact Email:</span>
                <span className="text-white font-medium">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Status:</span>
                <span className="text-emerald-400 font-semibold">In Review by Technical Team</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="w-full py-3.5 rounded-[50px] text-xs uppercase tracking-wider font-bold text-slate-950 bg-[#84cc16] hover:bg-[#bef264] transition-all cursor-pointer active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          /* Form */
          <div>
            <div className="mb-6 space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-[#84cc16] text-xs font-bold uppercase tracking-widest">
                <Wrench className="w-3.5 h-3.5" />
                <span>MOD Innovations Service Request</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Connect With Our Specialists
              </h3>
              <p className="text-xs text-slate-400">
                Get technical repair support, equipment sales details, digital print estimates, or 3D signage quotes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Select */}
              <div>
                <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-1.5">
                  Select Service Area
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full bg-[#04110e] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#84cc16] transition-colors"
                >
                  <option value="Large-Format Printer Sales, Repair and Maintenance">Large-Format Printer Sales, Repair and Maintenance</option>
                  <option value="Printer Mainboard and Control Board Repairs">Printer Mainboard and Control Board Repairs</option>
                  <option value="DTF Printer Sales and Repairs">DTF Printer Sales and Repairs</option>
                  <option value="UV Printer Sales and Repairs">UV Printer Sales and Repairs</option>
                  <option value="Fabric/Textile Printer Sales and Repairs">Fabric/Textile Printer Sales and Repairs</option>
                  <option value="Printer Accessories Sales">Printer Accessories Sales</option>
                  <option value="Graphic Design and Branding">Graphic Design and Branding</option>
                  <option value="Digital and Large-Format Printing">Digital and Large-Format Printing</option>
                  <option value="3D Signage Fabrication and Installation">3D Signage Fabrication and Installation</option>
                  <option value="General IT & Printing Inquiry">General IT & Printing Inquiry</option>
                </select>
              </div>

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
                  className="w-full bg-[#04110e] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84cc16] transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. jonathan@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#04110e] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84cc16] transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +1 (555) 234-5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#04110e] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84cc16] transition-colors"
                />
              </div>

              {/* Specific Objectives Notes */}
              <div>
                <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-1">
                  Equipment Model / Requirement Details
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Mainboard diagnostic for UV flatbed, 3D channel letters quote..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-[#04110e] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84cc16] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-[50px] text-xs uppercase tracking-wider font-bold text-slate-950 bg-[#84cc16] hover:bg-[#bef264] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-lime-500/20 active:scale-98"
                >
                  <span>Submit Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
