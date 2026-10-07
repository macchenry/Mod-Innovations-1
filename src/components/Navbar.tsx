import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  PhoneCall, 
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'about' | 'services' | 'contact' | 'sitemap';
  onNavigate: (page: 'home' | 'about' | 'services' | 'contact' | 'sitemap', sectionId?: string) => void;
  onOpenConsultation: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage,
  onNavigate,
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

  const handleNavClick = (page: 'home' | 'about' | 'services' | 'contact' | 'sitemap', sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, sectionId);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#051512]/95 backdrop-blur-md border-b border-emerald-900/30 py-3.5 shadow-xl shadow-black/20' 
          : 'bg-[#051512]/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark / Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center group py-0.5 cursor-pointer text-left shrink-0"
        >
          <img 
            src="https://i.ibb.co/60dH7n7H/MOD-Innovations-Transparent-Logo-Light-Version.png" 
            alt="MOD Innovations Logo" 
            className="h-9 sm:h-11 lg:h-[50px] w-auto max-w-[170px] sm:max-w-none object-contain transition-transform group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center md:gap-3.5 lg:gap-6 xl:gap-7 text-xs lg:text-sm font-medium text-slate-300">
          <button 
            onClick={() => handleNavClick('home')} 
            className={`transition-colors cursor-pointer py-1 ${
              currentPage === 'home' ? 'text-[#84CC16] font-semibold' : 'hover:text-[#84CC16]'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('about')} 
            className={`transition-colors cursor-pointer py-1 ${
              currentPage === 'about' ? 'text-[#84CC16] font-semibold' : 'hover:text-[#84CC16]'
            }`}
          >
            About Us
          </button>
          <button 
            onClick={() => handleNavClick('services')} 
            className={`transition-colors cursor-pointer py-1 ${
              currentPage === 'services' ? 'text-[#84CC16] font-semibold' : 'hover:text-[#84CC16]'
            }`}
          >
            Services
          </button>
          <button 
            onClick={() => handleNavClick('home', 'approach')} 
            className="hover:text-[#84CC16] transition-colors cursor-pointer py-1 whitespace-nowrap"
          >
            Why Choose Us
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className={`transition-colors cursor-pointer py-1 ${
              currentPage === 'contact' ? 'text-[#84CC16] font-semibold' : 'hover:text-[#84CC16]'
            }`}
          >
            Contact
          </button>
          <button 
            onClick={() => handleNavClick('sitemap')} 
            className={`transition-colors cursor-pointer py-1 ${
              currentPage === 'sitemap' ? 'text-[#84CC16] font-semibold' : 'hover:text-[#84CC16]'
            }`}
          >
            Sitemap
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
          <a 
            href="tel:0207004123" 
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors py-1"
          >
            <div className="w-7 h-7 rounded-full bg-emerald-900/50 flex items-center justify-center text-[#84CC16] shrink-0">
              <PhoneCall className="w-3.5 h-3.5" />
            </div>
            <span className="whitespace-nowrap">0207004123</span>
          </a>

          <button
            onClick={() => onOpenConsultation('General IT & Printing Inquiry')}
            className="inline-flex items-center gap-2 px-4 xl:px-5 py-2 text-xs uppercase tracking-wider font-bold text-slate-950 bg-[#84CC16] hover:bg-[#bef264] rounded-[50px] transition-all duration-200 shadow-md shadow-lime-500/10 cursor-pointer active:scale-95 whitespace-nowrap"
          >
            <span>Request Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => onOpenConsultation('Quick Mobile Inquiry')}
            className="px-2.5 sm:px-3 py-1.5 text-xs font-bold text-slate-950 bg-[#84CC16] hover:bg-[#bef264] rounded-[50px] transition-colors whitespace-nowrap"
          >
            Inquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-emerald-950/50 rounded-lg border border-emerald-800/30 touch-manipulation cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#071d18] border-b border-emerald-900/40 px-5 sm:px-6 py-4 sm:py-5 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[calc(100vh-70px)] overflow-y-auto">
          <div className="flex flex-col space-y-2.5 text-sm font-medium text-slate-200">
            <button 
              onClick={() => handleNavClick('home')} 
              className={`text-left py-2 px-1 rounded-md transition-colors ${currentPage === 'home' ? 'text-[#84CC16] font-bold bg-emerald-950/60' : 'hover:text-[#84CC16]'}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className={`text-left py-2 px-1 rounded-md transition-colors ${currentPage === 'about' ? 'text-[#84CC16] font-bold bg-emerald-950/60' : 'hover:text-[#84CC16]'}`}
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavClick('services')} 
              className={`text-left py-2 px-1 rounded-md transition-colors ${currentPage === 'services' ? 'text-[#84CC16] font-bold bg-emerald-950/60' : 'hover:text-[#84CC16]'}`}
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick('home', 'approach')} 
              className="text-left py-2 px-1 rounded-md hover:text-[#84CC16] transition-colors"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className={`text-left py-2 px-1 rounded-md transition-colors ${currentPage === 'contact' ? 'text-[#84CC16] font-bold bg-emerald-950/60' : 'hover:text-[#84CC16]'}`}
            >
              Contact
            </button>
            <button 
              onClick={() => handleNavClick('sitemap')} 
              className={`text-left py-2 px-1 rounded-md transition-colors ${currentPage === 'sitemap' ? 'text-[#84CC16] font-bold bg-emerald-950/60' : 'hover:text-[#84CC16]'}`}
            >
              Sitemap
            </button>
          </div>

          <div className="pt-3 border-t border-emerald-900/40 flex flex-col gap-3">
            <a
              href="tel:0207004123"
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 py-1 px-1 hover:text-white"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#84cc16]" />
              <span>Direct Phone: 0207004123</span>
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenConsultation('Mobile Service Request'); }}
              className="w-full py-2.5 text-center text-xs uppercase tracking-wider font-bold text-slate-950 bg-[#84CC16] hover:bg-[#bef264] rounded-[50px] transition-colors cursor-pointer active:scale-95 shadow-md"
            >
              Request Service
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
