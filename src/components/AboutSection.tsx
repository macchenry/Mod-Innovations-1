import React from 'react';
import { ArrowUpRight, Wrench, Printer, Sparkles, Layers } from 'lucide-react';

const workshopImg = 'https://i.ibb.co/CcQtKS1/001-Large-Format-and-DTF-Printer-Repairs-and-Spare-Parts-Sales.jpg';
const technicianImg = 'https://i.ibb.co/GhPK6bm/002-Printer-Mainboard-and-Control-Board-Repairs.jpg';

interface AboutSectionProps {
  onOpenConsultation: (service?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#061814] relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Eyebrow label, heading, presentation copy, core competencies, CTA */}
          <div className="lg:col-span-6 space-y-6 text-left max-w-xl">
            
            {/* Eyebrow Label */}
            <div className="inline-block">
              <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-slate-200 font-display">
                ABOUT MOD INNOVATIONS
              </span>
            </div>

            {/* Large Multi-line Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.14] font-display">
              Your Trusted Partner for<br className="hidden sm:inline" />
              IT & Professional Printing Solutions
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              MOD Innovations delivers dependable printing equipment, advanced electronics repair, high-grade printer accessories, custom graphic design, digital production, and architectural 3D signage. We combine technical proficiency with hands-on support to keep your operations running smoothly.
            </p>

            {/* Core Competencies Matrix */}
            <div className="pt-2 grid grid-cols-2 gap-4 sm:gap-5">
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-900/60 flex items-center justify-center text-[#84CC16] shrink-0 mt-0.5">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">Technical Repairs</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Mainboards, control boards & equipment servicing</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-900/60 flex items-center justify-center text-[#84CC16] shrink-0 mt-0.5">
                  <Printer className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">Hardware & Sales</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Large-format, DTF, UV, textile printers & accessories</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-900/60 flex items-center justify-center text-[#84CC16] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">Design & Branding</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Creative identity & promotional visual development</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-900/60 flex items-center justify-center text-[#84CC16] shrink-0 mt-0.5">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">Print & 3D Signage</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Large-format printing & custom 3D fabrication</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenConsultation('General IT & Printing Inquiry')}
                className="px-6 py-3.5 rounded-[50px] text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#a3e635] hover:bg-[#bef264] transition-all duration-200 shadow-md shadow-lime-500/15 inline-flex items-center justify-center cursor-pointer active:scale-95"
              >
                CONNECT WITH OUR SPECIALISTS
              </button>
            </div>

          </div>

          {/* Right Column: Overlapping multi-image circular composition & decorative badge */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[460px] min-h-[420px] sm:min-h-[460px]">
              
              {/* Stepped Vector Arrow Graphic on Top-Right */}
              <div className="absolute top-2 right-4 sm:right-6 z-20 pointer-events-none flex items-start gap-1">
                <svg className="w-18 h-18 text-white/80" viewBox="0 0 80 80" fill="none">
                  <path 
                    d="M18 55 L 28 55 L 28 35 L 42 35 L 42 16 L 62 16" 
                    stroke="currentColor" 
                    strokeWidth="1.8" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M54 10 L 64 16 L 54 22" 
                    stroke="currentColor" 
                    strokeWidth="1.8" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Top-Left Circular Photo: Workshop / Large Format Printer */}
              <div className="w-[58%] aspect-square rounded-full overflow-hidden shadow-2xl border border-emerald-800/40 relative z-0 bg-emerald-950">
                <img 
                  src={workshopImg} 
                  alt="MOD Innovations printing equipment workshop" 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-950/10 pointer-events-none" />
              </div>

              {/* Bottom-Right Circular Photo: Mainboard Diagnostic Technician */}
              <div className="w-[66%] aspect-square rounded-full overflow-hidden shadow-2xl border border-emerald-800/40 -mt-16 sm:-mt-20 ml-auto relative z-10 bg-emerald-950">
                <img 
                  src={technicianImg} 
                  alt="MOD Innovations printer mainboard technician" 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-950/10 pointer-events-none" />
              </div>

              {/* Rotating Circular Brand Stamp Badge (positioned at bottom-left overlap) */}
              <div className="absolute bottom-4 left-0 sm:left-4 z-20 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#07241d] border border-emerald-700/60 shadow-2xl flex items-center justify-center p-1">
                {/* Rotating SVG Curved Text */}
                <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                  <path
                    id="aboutCirclePath"
                    d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                    fill="none"
                  />
                  <text className="text-[7.2px] font-bold uppercase fill-emerald-200 tracking-[0.24em]">
                    <textPath href="#aboutCirclePath" startOffset="0%">
                      MOD INNOVATIONS · PRINTING & IT SOLUTIONS ·
                    </textPath>
                  </text>
                </svg>

                {/* Center Static Arrow Badge */}
                <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-[#a3e635] text-slate-950 flex items-center justify-center shadow-md">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
