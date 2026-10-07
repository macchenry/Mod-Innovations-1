import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import darkBgImg from '../assets/images/hero_dark_bg_1791350497284.jpg';

interface SlideItem {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  image: string;
}

const slidesData: SlideItem[] = [
  {
    id: 1,
    title: 'Printer Mainboard and Control Board Repairs',
    subtitle: 'Professional diagnosis and repair of printer mainboards and control boards to restore reliable printer performance.',
    buttonText: 'Get Repair Service',
    image: 'https://i.ibb.co/C3v8BH35/003-Printer-Mainboard-and-Control-Board-Repairs.jpg'
  },
  {
    id: 2,
    title: 'Printer Mainboard and Control Board Repairs',
    subtitle: 'Expert printer electronics repairs for faulty mainboards and control boards, helping get your equipment back in operation.',
    buttonText: 'Get Repair Service',
    image: 'https://i.ibb.co/mr7sZ7cr/005-Printer-Mainboard-and-Control-Board-Repairs.jpg'
  },
  {
    id: 3,
    title: 'UV Printer Sales and Repairs',
    subtitle: 'Quality UV printer solutions with professional repair and technical support for dependable printing performance.',
    buttonText: 'Explore UV Printers',
    image: 'https://i.ibb.co/7JrBkgVG/001-UV-Printer-Sales-and-Repairs.jpg'
  },
  {
    id: 4,
    title: 'Fabric and Textile Printer Sales and Repairs',
    subtitle: 'Reliable fabric and textile printing equipment with professional repair and technical support.',
    buttonText: 'Explore Textile Printers',
    image: 'https://i.ibb.co/MkjwjDjH/003-Fabric-and-Textile-Printer-Sales-and-Repairs.jpg'
  },
  {
    id: 5,
    title: 'Printer Accessories Sales',
    subtitle: 'Find essential printer accessories and components to support smooth and efficient printing operations.',
    buttonText: 'View Accessories',
    image: 'https://i.ibb.co/ZRg3P9Bg/001-Printer-Accessories-Sales.jpg'
  },
  {
    id: 6,
    title: 'Digital and Large Format Printing',
    subtitle: 'Professional printing for T-shirts, mugs, caps, signage, promotional materials, and other custom applications.',
    buttonText: 'Get Printing Service',
    image: 'https://i.ibb.co/pjjL65ZH/002-Digital-and-Large-Format-Printing-T-Shirt-Mug-and-Cap.jpg'
  },
  {
    id: 7,
    title: '3D Signage Installation and Fabrication',
    subtitle: 'Custom 3D signage fabrication and professional installation for businesses, brands, and commercial spaces.',
    buttonText: 'Get Signage Service',
    image: 'https://i.ibb.co/TqMybcdt/002-3-D-Signage-Installation-and-Fabrication.jpg'
  }
];

interface HeroSectionProps {
  onOpenConsultation?: (serviceName?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Autoplay timer with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section 
      id="hero" 
      aria-label="Interactive Service Showcase"
      className="relative min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] flex items-center pt-24 sm:pt-28 pb-14 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#071915]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Full-width dark photographic background with deep green atmospheric tint */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={darkBgImg} 
          alt="Atmospheric technical background" 
          className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Deep dark green gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051613] via-[#071a16]/95 to-[#04120f]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(16,185,129,0.12),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full">
        {/* Carousel Viewport: text and image belong to the same slide and transition in sync */}
        <div className="overflow-hidden w-full">
          <div 
            className="flex w-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slidesData.map((slide, idx) => (
              <div 
                key={slide.id}
                className="w-full flex-shrink-0 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center"
                aria-hidden={currentSlide !== idx}
              >
                {/* Left Column: Service title, subtitle/description, and CTA button */}
                <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left max-w-xl">
                  {/* Subtle Service Counter Tag */}
                  <div className="inline-flex items-center gap-2">
                    <span className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#84cc16] font-display">
                      Service {String(idx + 1).padStart(2, '0')} / {String(slidesData.length).padStart(2, '0')}
                    </span>
                    <span className="w-8 h-[1px] bg-[#84cc16]/40" />
                  </div>

                  {/* Service Title */}
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.15] font-display break-words">
                    {slide.title}
                  </h1>

                  {/* Subtitle / Description */}
                  <p className="text-xs sm:text-sm md:text-base text-slate-300 font-normal leading-relaxed max-w-lg">
                    {slide.subtitle}
                  </p>

                  {/* Prominent CTA Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => onOpenConsultation?.(slide.title)}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-[50px] text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#a3e635] hover:bg-[#bef264] transition-all duration-200 shadow-md shadow-lime-500/15 inline-flex items-center justify-center cursor-pointer active:scale-95 text-center"
                    >
                      {slide.buttonText}
                    </button>
                  </div>
                </div>

                {/* Right Column: Service Image belonging to this slide */}
                <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end mt-2 lg:mt-0 w-full">
                  <div className="relative w-full max-w-[360px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[500px] aspect-[4/3] flex items-center justify-center mx-auto lg:mx-0">
                    <div className="relative w-full h-full rounded-none overflow-hidden shadow-2xl bg-emerald-950 border-none group">
                      <img 
                        src={slide.image} 
                        alt={slide.title} 
                        className="w-full h-full object-cover object-center rounded-none transition-transform duration-700 hover:scale-105 border-none"
                        referrerPolicy="no-referrer"
                        loading={idx === 0 ? 'eager' : 'lazy'}
                      />
                      {/* Ambient gradient overlay at bottom edge */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#051613]/90 via-[#051613]/30 to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Slider Navigation Controls & Indicators */}
        <div className="mt-8 sm:mt-10 lg:mt-12 pt-4 border-t border-emerald-900/30 flex flex-wrap items-center justify-between gap-4">
          {/* Indicators / Progress Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {slidesData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                  currentSlide === idx 
                    ? 'w-6 sm:w-8 bg-[#a3e635]' 
                    : 'w-2 bg-emerald-800/60 hover:bg-emerald-600'
                }`}
              />
            ))}
          </div>

          {/* Slide Navigation Arrows and Counter */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="text-xs font-mono text-slate-400 mr-1 sm:mr-2">
              <span className="text-white font-semibold">{String(currentSlide + 1).padStart(2, '0')}</span>
              <span className="text-slate-600 mx-1">/</span>
              <span>{String(slidesData.length).padStart(2, '0')}</span>
            </span>

            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-emerald-800/60 bg-[#061814]/80 text-slate-300 hover:text-slate-950 hover:bg-[#a3e635] hover:border-[#a3e635] flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-emerald-800/60 bg-[#061814]/80 text-slate-300 hover:text-slate-950 hover:bg-[#a3e635] hover:border-[#a3e635] flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
