import React from 'react';
import { 
  Home, 
  Info, 
  Layers, 
  PhoneCall, 
  MapPin, 
  ArrowRight, 
  Printer, 
  Cpu, 
  Sparkles, 
  ChevronRight,
  ShieldCheck,
  FileText
} from 'lucide-react';

interface SitemapPageProps {
  onNavigateHome?: () => void;
  onNavigatePage: (page: 'home' | 'about' | 'services' | 'contact' | 'sitemap', sectionId?: string) => void;
  onOpenConsultation?: (serviceName?: string) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({
  onNavigateHome,
  onNavigatePage,
  onOpenConsultation
}) => {
  const printerServices = [
    {
      name: 'Large-Format Printer Sales, Repair and Maintenance',
      description: 'Comprehensive sales, emergency repairs, periodic servicing, and performance optimization for commercial wide-format printing equipment.',
      badge: 'Hardware & Maintenance'
    },
    {
      name: 'Printer Mainboard and Control Board Repairs',
      description: 'Specialized diagnosis and component-level circuit repair for printer motherboards, power boards, and head drive electronics.',
      badge: 'Electronics Engineering'
    },
    {
      name: 'DTF Printer Sales and Repairs',
      description: 'Direct-to-Film printing machine acquisition, ink system maintenance, printhead calibration, and diagnostics for apparel production.',
      badge: 'Direct-to-Film'
    },
    {
      name: 'UV Printer Sales and Repairs',
      description: 'Flatbed and roll UV printer sales, UV curing lamp replacement, ink channel purges, and precise multi-substrate alignment.',
      badge: 'UV Technology'
    },
    {
      name: 'Fabric/Textile Printer Sales and Repairs',
      description: 'Direct-to-garment and roll-to-roll textile printer solutions, fabric feed calibration, and high-volume garment production support.',
      badge: 'Textile Printing'
    },
    {
      name: 'Printer Accessories Sales',
      description: 'Genuine spare parts, dampers, ink tubes, printheads, capping stations, wiper blades, encoder strips, and consumables.',
      badge: 'OEM Components'
    }
  ];

  const creativeServices = [
    {
      name: 'Graphic Design and Branding',
      description: 'Professional visual identity systems, corporate branding, high-resolution vector artwork, and print-ready production files.',
      badge: 'Design & Identity'
    },
    {
      name: 'Digital and Large-Format Printing',
      description: 'High-definition banners, vinyl graphics, promotional backdrops, vehicle wraps, and architectural display printing.',
      badge: 'Print Production'
    },
    {
      name: '3D Signage Fabrication and Installation',
      description: 'Custom illuminated channel letters, dimensional acrylic logos, architectural storefront lettering, and secure on-site installation.',
      badge: '3D Fabrication'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#051512] min-h-screen text-slate-100 selection:bg-[#a3e635] selection:text-slate-950">
      
      {/* 1. Page Header & Breadcrumb */}
      <section className="relative overflow-hidden border-b border-emerald-900/40 bg-gradient-to-b from-[#030e0c] via-[#051512] to-[#061814] py-14 sm:py-20">
        {/* Glow ambient background elements */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-lime-500/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
            <button 
              onClick={() => onNavigatePage('home')}
              className="hover:text-[#84CC16] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-800" />
            <span className="text-[#84CC16]">Sitemap</span>
          </nav>

          {/* Eyebrow and Headline */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-[#84CC16] text-xs font-bold uppercase tracking-widest">
              <FileText className="w-3.5 h-3.5" />
              <span>Complete Website Directory</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              MOD Innovations <span className="text-[#84CC16]">Sitemap</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Explore the complete hierarchy of MOD Innovations. Navigate directly to any core page or browse our full range of professional IT and commercial printing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Sitemap Structure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Top-Level Website Hierarchy Overview Cards */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-4 w-1 bg-[#84CC16] rounded-full" />
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#84CC16]">
              Core Website Navigation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* 1. Home */}
            <button
              onClick={() => onNavigatePage('home')}
              className="group text-left p-5 rounded-xl bg-[#061814] border border-emerald-900/50 hover:border-[#84CC16]/60 hover:bg-[#071d18] transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-[#84CC16] group-hover:scale-110 transition-transform mb-4">
                  <Home className="w-5 h-5" />
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">01 / Main</div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#84CC16] transition-colors">
                  Home
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Interactive service slider, overview of capabilities, quality approach, and quick inquiry.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-900/30 flex items-center text-xs font-bold text-[#84CC16] gap-1 group-hover:gap-2 transition-all">
                <span>Visit Home</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            {/* 2. About Us */}
            <button
              onClick={() => onNavigatePage('about')}
              className="group text-left p-5 rounded-xl bg-[#061814] border border-emerald-900/50 hover:border-[#84CC16]/60 hover:bg-[#071d18] transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-[#84CC16] group-hover:scale-110 transition-transform mb-4">
                  <Info className="w-5 h-5" />
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">02 / Company</div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#84CC16] transition-colors">
                  About Us
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Learn about our focus on quality service, reliable solutions, technical expertise, and professional results.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-900/30 flex items-center text-xs font-bold text-[#84CC16] gap-1 group-hover:gap-2 transition-all">
                <span>View About Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            {/* 3. Services */}
            <button
              onClick={() => onNavigatePage('services')}
              className="group text-left p-5 rounded-xl bg-[#071d18] border-2 border-emerald-800/80 hover:border-[#84CC16] transition-all duration-200 cursor-pointer flex flex-col justify-between shadow-lg shadow-emerald-950/40"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-900/80 border border-[#84CC16]/40 flex items-center justify-center text-[#84CC16] group-hover:scale-110 transition-transform mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="text-xs uppercase tracking-wider text-[#84CC16] font-semibold mb-1">03 / Solutions</div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#84CC16] transition-colors">
                  Services
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  All 9 specialized services across printer hardware, mainboard repairs, and creative signage.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-900/30 flex items-center text-xs font-bold text-[#84CC16] gap-1 group-hover:gap-2 transition-all">
                <span>Browse Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            {/* 4. Contact Us */}
            <button
              onClick={() => onNavigatePage('contact')}
              className="group text-left p-5 rounded-xl bg-[#061814] border border-emerald-900/50 hover:border-[#84CC16]/60 hover:bg-[#071d18] transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-[#84CC16] group-hover:scale-110 transition-transform mb-4">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">04 / Reach Out</div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#84CC16] transition-colors">
                  Contact Us
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Direct Phone & WhatsApp (0207004123), Email, Website, and online service request form.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-900/30 flex items-center text-xs font-bold text-[#84CC16] gap-1 group-hover:gap-2 transition-all">
                <span>Contact Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            {/* 5. Sitemap */}
            <div className="p-5 rounded-xl bg-[#051512] border border-[#84CC16]/40 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-2 right-2 px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-emerald-900/80 text-[#84CC16]">
                Current
              </div>
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-800/40 flex items-center justify-center text-[#84CC16] mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">05 / Index</div>
                <h3 className="text-lg font-bold text-white">
                  Sitemap
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Complete directory listing all 5 pages and 9 specialized services with direct links.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-900/30 text-xs font-bold text-emerald-400">
                You are here
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Services Breakdown Hierarchical View */}
        <div className="bg-[#061814] rounded-2xl border border-emerald-900/50 p-6 sm:p-8 lg:p-10 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-emerald-900/40">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#84CC16] mb-1">
                Hierarchy Detail
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Under Services: Complete 9 Services Directory
              </h2>
            </div>
            
            <button
              onClick={() => onNavigatePage('services')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-[50px] bg-emerald-950 border border-emerald-800/60 text-xs font-bold text-[#84CC16] hover:bg-emerald-900 transition-colors w-fit cursor-pointer"
            >
              <span>Go to Main Services Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Category A: Printer Sales, Repair and Maintenance (6 services) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-[#84CC16]">
                <Printer className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Category A: Printer Sales, Repair and Maintenance
                </h3>
                <p className="text-xs text-slate-400">
                  Industrial hardware diagnosis, control board engineering, and equipment supply
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {printerServices.map((service, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-[#051512] border border-emerald-900/60 hover:border-[#84CC16]/60 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#84CC16]">
                        0{idx + 1}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-slate-300 border border-emerald-900/50">
                        {service.badge}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white group-hover:text-[#84CC16] transition-colors leading-snug">
                      {service.name}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-emerald-900/40 flex items-center justify-between">
                    <button
                      onClick={() => onNavigatePage('services')}
                      className="text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      View in Services →
                    </button>
                    {onOpenConsultation && (
                      <button
                        onClick={() => onOpenConsultation(service.name)}
                        className="text-xs font-bold text-[#84CC16] hover:underline cursor-pointer"
                      >
                        Inquire
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category B: Creative and Printing Services (3 services) */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-800/60 flex items-center justify-center text-[#84CC16]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Category B: Creative and Printing Services
                </h3>
                <p className="text-xs text-slate-400">
                  Branding, large-format production, and architectural 3D signage fabrication
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {creativeServices.map((service, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-[#051512] border border-emerald-900/60 hover:border-[#84CC16]/60 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#84CC16]">
                        0{idx + 7}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-slate-300 border border-emerald-900/50">
                        {service.badge}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white group-hover:text-[#84CC16] transition-colors leading-snug">
                      {service.name}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-emerald-900/40 flex items-center justify-between">
                    <button
                      onClick={() => onNavigatePage('services')}
                      className="text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      View in Services →
                    </button>
                    {onOpenConsultation && (
                      <button
                        onClick={() => onOpenConsultation(service.name)}
                        className="text-xs font-bold text-[#84CC16] hover:underline cursor-pointer"
                      >
                        Inquire
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 3. Bottom Direct Navigation CTA Box */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-emerald-950 via-[#061814] to-[#030e0c] border border-emerald-800/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              Looking for Immediate Assistance or Hardware Diagnostics?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Connect directly with our technical team via Phone, WhatsApp, or through our online request portal.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:0207004123"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[50px] bg-emerald-900/80 hover:bg-emerald-800 border border-emerald-700/60 text-xs font-bold text-white transition-all shadow-md"
            >
              <PhoneCall className="w-4 h-4 text-[#84CC16]" />
              <span>Call 0207004123</span>
            </a>

            <button
              onClick={() => onNavigatePage('contact')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[50px] bg-[#84CC16] hover:bg-[#bef264] text-xs uppercase font-bold tracking-wider text-slate-950 transition-all shadow-lg shadow-lime-500/10 cursor-pointer"
            >
              <span>Go to Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </section>

    </div>
  );
};
