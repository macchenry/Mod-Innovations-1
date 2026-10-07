import React from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, Wrench } from 'lucide-react';
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/90 border border-emerald-800/70 text-xs font-bold uppercase tracking-wider text-[#84cc16]">
            <Wrench className="w-3.5 h-3.5" />
            <span>{service.category || 'Specialized Service'}</span>
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
          <div className="relative rounded-2xl overflow-hidden aspect-video border border-emerald-900/60 max-h-56">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061814] via-transparent to-transparent pointer-events-none" />
          </div>

          <p className="text-sm text-slate-200 leading-relaxed bg-emerald-950/40 p-4 rounded-2xl border border-emerald-900/50">
            {service.description}
          </p>

          {/* Deliverables List if available */}
          {service.deliverables && service.deliverables.length > 0 && (
            <div>
              <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-3">
                Service Scope & Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 bg-[#04110e] p-2.5 rounded-xl border border-emerald-900/40">
                    <CheckCircle2 className="w-4 h-4 text-[#84cc16] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="w-full py-3.5 rounded-[50px] text-xs uppercase tracking-wider font-bold text-slate-950 bg-[#84cc16] hover:bg-[#bef264] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-lime-500/20 active:scale-95"
            >
              <span>Inquire About {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
