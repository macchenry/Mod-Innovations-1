import React from 'react';
import advisorPortraitImg from '../assets/images/hero_advisor_portrait_1791350510081.jpg';
import darkBgImg from '../assets/images/hero_dark_bg_1791350497284.jpg';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="hero" className="relative min-h-[640px] lg:min-h-[720px] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#071915]">
      {/* Full-width dark photographic background with deep green atmospheric tint */}
      <div className="absolute inset-0 z-0">
        <img 
          src={darkBgImg} 
          alt="Atmospheric financial desk background" 
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Deep dark green gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051613] via-[#071a16]/95 to-[#04120f]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(16,185,129,0.12),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          
          {/* Left Column: Large multi-line headline, supporting paragraph, prominent CTA */}
          <div className="lg:col-span-6 space-y-6 text-left max-w-xl">
            
            {/* Large Multi-line Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12] font-display">
              Proactive Financial<br className="hidden sm:inline" />
              Solutions For Your<br className="hidden sm:inline" />
              Unique Of Goals
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-lg">
              We&apos;re dedicated providing personalized every financial consulting service that empower you to takes control.
            </p>

            {/* Prominent CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-[50px] text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#a3e635] hover:bg-[#bef264] transition-all duration-200 shadow-md shadow-lime-500/15 inline-flex items-center justify-center cursor-pointer active:scale-95"
              >
                START YOUR FINANCIAL JOURNEY
              </button>
            </div>

          </div>

          {/* Right Column: Main professional image */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
            
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] aspect-[4/4.5] flex items-center justify-center">
              
              {/* Main Professional Advisor Portrait */}
              <div className="relative w-[86%] h-[92%] rounded-none overflow-hidden shadow-2xl bg-emerald-950 border-none">
                <img 
                  src={advisorPortraitImg} 
                  alt="Executive Financial Consultant" 
                  className="w-full h-full object-cover object-top rounded-none hover:scale-102 transition-transform duration-500 border-none"
                  referrerPolicy="no-referrer"
                />
                {/* Soft ambient gradient overlay at bottom edge */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#051613]/90 to-transparent pointer-events-none" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
