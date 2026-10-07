import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Menu, 
  X, 
  PhoneCall, 
  ArrowRight, 
  Calculator,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenConsultation 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#051512]/90 backdrop-blur-md border-b border-emerald-900/30 py-3.5 shadow-xl shadow-black/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark / Logo */}
        <a 
          href="#" 
          className="flex items-center group py-0.5"
        >
          <img 
            src="https://i.ibb.co/60dH7n7H/MOD-Innovations-Transparent-Logo-Light-Version.png" 
            alt="MOD Innovations Logo" 
            className="h-12 sm:h-14 lg:h-[60px] w-auto object-contain transition-transform group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="hover:text-[#a3e635] transition-colors cursor-pointer"
          >
            Overview
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="hover:text-[#a3e635] transition-colors cursor-pointer"
          >
            About Advisory
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="hover:text-[#a3e635] transition-colors cursor-pointer"
          >
            Services
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="tel:+18005550199" 
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-emerald-900/50 flex items-center justify-center text-[#a3e635]">
              <PhoneCall className="w-3.5 h-3.5" />
            </div>
            <span>+1 (800) 555-0199</span>
          </a>

          <button
            onClick={() => onOpenConsultation()}
            className="inline-flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-wider font-bold text-slate-950 bg-[#a3e635] hover:bg-[#bef264] rounded-[50px] transition-all duration-200 shadow-md shadow-lime-500/10 cursor-pointer active:scale-95"
          >
            <span>Request Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => onOpenConsultation()}
            className="px-3 py-1.5 text-xs font-bold text-slate-950 bg-[#a3e635] rounded-md"
          >
            Consult
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-emerald-950/50 rounded-lg border border-emerald-800/30"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#071d18] border-b border-emerald-900/40 px-6 py-5 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 text-sm font-medium text-slate-200">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-left py-2 hover:text-[#a3e635]"
            >
              Overview
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-left py-2 hover:text-[#a3e635]"
            >
              About Advisory
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-left py-2 hover:text-[#a3e635]"
            >
              Finance Services
            </button>
          </div>

          <div className="pt-3 border-t border-emerald-900/40 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenConsultation(); }}
              className="w-full py-2.5 text-center text-xs uppercase tracking-wider font-bold text-slate-950 bg-[#a3e635] rounded-md"
            >
              Request A Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
