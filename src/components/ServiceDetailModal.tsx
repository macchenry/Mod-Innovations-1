import React from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building2, Clock, Trophy } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#061814] border border-emerald-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-emerald-950 text-slate-400 hover:text-white hover:bg-emerald-900 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/90 border border-emerald-800/70 text-xs font-bold uppercase tracking-wider text-[#a3e635]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Advisory Pillar</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
            {service.title}
          </h3>

          <p className="text-sm text-slate-300">
            {service.tagline}
          </p>
        </div>

        {/* Body Overview */}
        <div className="space-y-6">
          <p className="text-sm text-slate-200 leading-relaxed bg-emerald-950/40 p-4 rounded-2xl border border-emerald-900/50">
            {service.description}
          </p>

          {/* Deliverables List */}
          <div>
            <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">
              Core Strategic Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 bg-[#04110e] p-2.5 rounded-xl border border-emerald-900/40">
                  <CheckCircle2 className="w-4 h-4 text-[#a3e635] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Proof */}
          <div className="bg-gradient-to-r from-emerald-950 to-[#04110e] p-4 rounded-2xl border border-emerald-800/60 flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#a3e635] text-slate-950 flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#a3e635]">
                <span>Proven Outcome · {service.caseStudy.client}</span>
              </div>
              <div className="text-sm font-semibold text-white">
                {service.caseStudy.result}
              </div>
              <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                <span>Execution Horizon: {service.caseStudy.duration}</span>
              </div>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="w-full py-3.5 rounded-md text-xs uppercase tracking-wider font-bold text-slate-950 bg-[#a3e635] hover:bg-[#bef264] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-lime-500/20"
            >
              <span>Consult On {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
