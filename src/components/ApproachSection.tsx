import React from 'react';
import { Award, ShieldCheck, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

interface ApproachSectionProps {
  onOpenConsultation: (service?: string) => void;
}

export const ApproachSection: React.FC<ApproachSectionProps> = ({ onOpenConsultation }) => {
  const pillars = [
    {
      title: 'Quality Service',
      description: 'Dedicated client support, thorough quality checks on all prints and repairs, and high attention to detail across every hardware and design deliverable.',
      icon: Award
    },
    {
      title: 'Reliable Solutions',
      description: 'Dependable troubleshooting, authentic components, and tested methods designed to prevent recurring faults and minimize equipment downtime.',
      icon: ShieldCheck
    },
    {
      title: 'Technical Expertise',
      description: 'Deep technical proficiency in printer mainboard micro-circuitry, motion control boards, firmware calibration, and large-format printing mechanics.',
      icon: Cpu
    },
    {
      title: 'Professional Results',
      description: 'Vibrant color reproduction, durable print finishes, precision structural signage fabrication, and equipment performance you can trust.',
      icon: CheckCircle2
    }
  ];

  return (
    <section id="approach" className="py-20 md:py-28 bg-[#061814] relative overflow-hidden border-t border-emerald-950">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#84cc16]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-3">
          <div className="inline-block">
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-slate-200 font-display">
              WHY CHOOSE MOD INNOVATIONS · OUR APPROACH
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight font-display">
            Built On Precision, Reliability & Expertise
          </h2>

          <p className="text-sm text-slate-300 font-normal leading-relaxed">
            Our approach centers on providing dependable technology support and printing excellence that keeps your commercial equipment operational and your visual identity sharp.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="group relative bg-[#04110e] hover:bg-emerald-950/50 border border-emerald-900/40 hover:border-[#84cc16]/40 p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-4">
                  {/* Icon & Index Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-emerald-900/50 group-hover:bg-[#84cc16] text-[#84cc16] group-hover:text-slate-950 transition-colors flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-emerald-300 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-[#EFDFBD] transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-emerald-900/30">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#84cc16] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    <span>Our Standard</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Banner / Quick Callout */}
        <div className="mt-12 bg-gradient-to-r from-emerald-950/80 via-[#07241d]/90 to-emerald-950/80 border border-emerald-800/60 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white font-display">
              Have Equipment in Need of Diagnosis or Looking for Production Support?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with our technical team about board repairs, printer sales, digital printing, or custom signage.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('Technical Consultation & Inquiry')}
            className="shrink-0 px-6 py-3 rounded-[50px] text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#a3e635] hover:bg-[#bef264] transition-all duration-200 shadow-md shadow-lime-500/15 cursor-pointer active:scale-95 flex items-center gap-2"
          >
            <span>Request Assistance</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
