import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import deskChartsImg from '../assets/images/desk_financial_charts_1791359349661.jpg';
import strategyMeetingImg from '../assets/images/corporate_strategy_meeting_1791349975257.jpg';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#061814] relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Eyebrow label, heading, supporting paragraph, 3 key statistics, CTA */}
          <div className="lg:col-span-6 space-y-6 text-left max-w-xl">
            
            {/* Eyebrow Label */}
            <div className="inline-block px-3 py-1 rounded-sm bg-[#0a2721] border border-emerald-800/60 shadow-sm">
              <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-slate-200 font-display">
                ABOUT OUR ADVICX
              </span>
            </div>

            {/* Large Multi-line Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.14] font-display">
              Innovative Solutions For<br className="hidden sm:inline" />
              Modern Financial Needs
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              In today&apos;s rapidly evolving financial landscape, businesses and individuals face unprecedented challenges and opportunities.
            </p>

            {/* Three Key Statistics Row */}
            <div className="pt-2 grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums tracking-tight">
                  99%
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium leading-tight">
                  Increase Profitability
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums tracking-tight">
                  5%
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium leading-tight">
                  Cost Savings
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums tracking-tight">
                  15+
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium leading-tight">
                  Years Experience
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-sm text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#a3e635] hover:bg-[#bef264] transition-all duration-200 shadow-md shadow-lime-500/15 inline-flex items-center justify-center cursor-pointer active:scale-95"
              >
                GET STARTED NOW
              </button>
            </div>

          </div>

          {/* Right Column: Overlapping multi-image circular composition & decorative badge */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[460px] min-h-[420px] sm:min-h-[460px]">
              
              {/* Stepped Vector Arrow with Dollar Graphic on Top-Right */}
              <div className="absolute top-2 right-4 sm:right-6 z-20 pointer-events-none flex items-start gap-1">
                {/* Stepped Vector Arrow */}
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
                {/* Dollar Badge */}
                <div className="text-white/90 text-lg font-light flex items-center justify-center pt-2">
                  <span className="text-base font-semibold tracking-tighter text-white/90 font-mono">$</span>
                </div>
              </div>

              {/* Top-Left Circular Photo: Desk & Analytics Charts */}
              <div className="w-[58%] aspect-square rounded-full overflow-hidden shadow-2xl border border-emerald-800/40 relative z-0 bg-emerald-950">
                <img 
                  src={deskChartsImg} 
                  alt="Financial analytics and document review" 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-950/10 pointer-events-none" />
              </div>

              {/* Bottom-Right Circular Photo: Collaborating Executives */}
              <div className="w-[66%] aspect-square rounded-full overflow-hidden shadow-2xl border border-emerald-800/40 -mt-16 sm:-mt-20 ml-auto relative z-10 bg-emerald-950">
                <img 
                  src={strategyMeetingImg} 
                  alt="Executive consulting team" 
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
                  <text className="text-[7.5px] font-bold uppercase fill-emerald-200 tracking-[0.24em]">
                    <textPath href="#aboutCirclePath" startOffset="0%">
                      BUILD A SUCCESSFUL BRAND · WITH DEMOUI ·
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
