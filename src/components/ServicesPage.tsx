import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Wrench, 
  Printer, 
  Sparkles, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Settings,
  Palette,
  Eye,
  ChevronRight,
  PhoneCall,
  Mail,
  Send,
  HelpCircle,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { ServiceItem } from '../types';

const servicesHeroImg = 'https://i.ibb.co/C3v8BH35/003-Printer-Mainboard-and-Control-Board-Repairs.jpg';

interface ServicesPageProps {
  onNavigateHome: () => void;
  onOpenConsultation: (serviceName?: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigateHome,
  onOpenConsultation,
  onSelectService
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hardware' | 'creative'>('all');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedServiceInForm, setSelectedServiceInForm] = useState('Printer Mainboard and Control Board Repairs');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Complete List of MOD Innovations Services
  const hardwareServices: ServiceItem[] = [
    {
      id: 'large-format-printers',
      title: 'Large-Format Printer Repair, Sales and Maintenance',
      tagline: 'Precision equipment sales, preventive maintenance, and expert technical repairs.',
      description: 'End-to-end commercial solutions for wide-format printing equipment. We handle equipment sales, preventative maintenance, head alignments, mechanical troubleshooting, and complete system calibration to keep your production moving.',
      image: 'https://i.ibb.co/CcQtKS1/001-Large-Format-and-DTF-Printer-Repairs-and-Spare-Parts-Sales.jpg',
      category: 'Hardware & Repairs',
      deliverables: [
        'New & certified wide-format printer sales',
        'Preventive maintenance schedules & inspections',
        'Printhead calibration & carriage alignment',
        'Mechanical drive & feed troubleshooting'
      ]
    },
    {
      id: 'mainboard-repairs',
      title: 'Printer Mainboard and Control Board Repairs',
      tagline: 'Specialized diagnosis and circuit-level repair for faulty printer electronic boards.',
      description: 'Expert component-level electronics diagnostics and repair for damaged printer mainboards, power supply modules, and motor driver control boards, avoiding costly full-board replacements.',
      image: 'https://i.ibb.co/fdmBXvb2/001-Printer-Mainboard-and-Control-Board-Repairs.jpg',
      category: 'Hardware & Repairs',
      featured: true,
      deliverables: [
        'Board-level component diagnostics & testing',
        'Micro-soldering & integrated circuit replacement',
        'Power circuitry & motor driver board repair',
        'Firmware verification & post-repair bench testing'
      ]
    },
    {
      id: 'dtf-printers',
      title: 'DTF Printer Sales and Repairs',
      tagline: 'Direct-to-film system supply, shaker maintenance, and dedicated technical servicing.',
      description: 'Complete sales, technical service, and repair for direct-to-film (DTF) printers, automated powder shakers, and drying units to ensure reliable textile transfer production.',
      image: 'https://i.ibb.co/kg1RWK14/005-Printer-Mainboard-and-Control-Board-Repairs.jpg',
      category: 'Hardware & Repairs',
      deliverables: [
        'Commercial DTF printing system sales',
        'Film feed & vacuum suction troubleshooting',
        'Powder shaker & cure unit maintenance',
        'White ink circulation & printhead servicing'
      ]
    },
    {
      id: 'uv-printers',
      title: 'UV Printer Sales and Repairs',
      tagline: 'Flatbed and roll-to-roll UV printing systems, LED curing repairs, and calibration.',
      description: 'Specialized technical service, maintenance, and hardware sales for UV flatbed and roll-fed printers. We service UV LED curing systems, carriage assemblies, and ink lines.',
      image: 'https://i.ibb.co/7JrBkgVG/001-UV-Printer-Sales-and-Repairs.jpg',
      category: 'Hardware & Repairs',
      deliverables: [
        'UV flatbed & roll printer sales',
        'UV LED lamp curing system troubleshooting',
        'Ink delivery line & sub-tank maintenance',
        'Multi-substrate height sensor & carriage calibration'
      ]
    },
    {
      id: 'fabric-textile-printers',
      title: 'Fabric/Textile Printer Sales and Repairs',
      tagline: 'Direct-to-fabric and sublimation printing equipment maintenance and repairs.',
      description: 'Specialized repair, sales, and servicing for textile and fabric printers. We service dye-sublimation hardware, tension feeding rollers, and high-volume textile print engines.',
      image: 'https://i.ibb.co/MkjwjDjH/003-Fabric-and-Textile-Printer-Sales-and-Repairs.jpg',
      category: 'Hardware & Repairs',
      deliverables: [
        'Direct-to-garment & textile printer sales',
        'Belt drive & tension mechanism calibration',
        'Dye-sublimation printhead recovery',
        'Color density and fabric feed synchronization'
      ]
    },
    {
      id: 'printer-accessories',
      title: 'Printer Accessories Sales',
      tagline: 'Genuine replacement parts, dampers, capping stations, cables, and consumables.',
      description: 'Direct supply of essential commercial printer accessories and replacement components, including ink dampers, wiper blades, capping stations, ribbon cables, and maintenance assemblies.',
      image: 'https://i.ibb.co/ZRg3P9Bg/001-Printer-Accessories-Sales.jpg',
      category: 'Hardware & Repairs',
      deliverables: [
        'Printhead dampers, caps & wiper assemblies',
        'High-grade flex cables & data ribbons',
        'Pumps, tubes & ink delivery components',
        'Encoder strips, sensors & calibration tools'
      ]
    }
  ];

  const creativeServices: ServiceItem[] = [
    {
      id: 'graphic-design-branding',
      title: 'Graphic Design and Branding',
      tagline: 'Professional brand identity development, creative vector design, and print-ready layouts.',
      description: 'Strategic graphic design and brand identity services tailored for commercial applications. We create high-resolution brand assets, corporate collateral, and precision print-ready artwork.',
      image: 'https://i.ibb.co/pjjL65ZH/002-Digital-and-Large-Format-Printing-T-Shirt-Mug-and-Cap.jpg',
      category: 'Design & Signage',
      deliverables: [
        'Brand identity guidelines & vector logos',
        'Marketing collateral & promotional layouts',
        'Large-format layout prep & color profile matching',
        'Packaging & merchandise graphic creation'
      ]
    },
    {
      id: 'digital-large-format-printing',
      title: 'Digital and Large-Format Printing',
      tagline: 'High-definition large-format banners, displays, adhesive vinyl, and architectural graphics.',
      description: 'Vibrant, high-resolution printing services across a wide selection of substrates. From outdoor banners and vehicle wraps to retail point-of-sale displays and trade show graphics.',
      image: 'https://i.ibb.co/84NzXW71/001-Digital-and-Large-Format-Printing-T-Shirt-Mug-and-Cap.jpg',
      category: 'Printing & Production',
      deliverables: [
        'Commercial indoor & outdoor vinyl banners',
        'Backlit films & high-resolution posters',
        'Adhesive vinyl decals & window graphics',
        'Rigid board printing & trade show graphics'
      ]
    },
    {
      id: '3d-signage-fabrication',
      title: '3D Signage Fabrication and Installation',
      tagline: 'Custom dimensional lettering, illuminated signage, and precision structural installation.',
      description: 'End-to-end design, fabrication, and on-site installation of premium 3D dimensional signs, illuminated channel letters, acrylic displays, and metal architectural signage.',
      image: 'https://i.ibb.co/gb4zkXVJ/001-3-D-Signage-Installation-and-Fabrication.jpg',
      category: 'Design & Signage',
      deliverables: [
        'Custom acrylic, metal & wood dimensional lettering',
        'LED-illuminated channel letters & lightboxes',
        'Architectural interior & exterior signage',
        'Professional on-site mounting & installation'
      ]
    }
  ];

  const allServices = [...hardwareServices, ...creativeServices];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : activeCategory === 'hardware' 
      ? hardwareServices 
      : creativeServices;

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="pt-24 pb-20">
      
      {/* 1. Page Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <button 
            onClick={onNavigateHome}
            className="hover:text-[#84CC16] transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-[#84CC16] font-medium">Services</span>
        </div>
      </div>

      {/* 2. Page Hero */}
      <section className="relative overflow-hidden pt-6 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl overflow-hidden border border-emerald-900/40 bg-[#061814] shadow-2xl">
            {/* Background Image with Dark Vignette */}
            <div className="absolute inset-0 z-0">
              <img 
                src={servicesHeroImg} 
                alt="MOD Innovations Services Hero" 
                className="w-full h-full object-cover object-center opacity-30 brightness-75 scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#051512] via-[#051512]/90 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#051512] via-transparent to-transparent" />
            </div>

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-3xl space-y-6">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-[#84CC16] text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse"></span>
                <span>MOD Innovations Services</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Comprehensive IT & Professional <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84CC16] via-[#bef264] to-[#EFDFBD]">
                  Printing Solutions
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                MOD Innovations is your trusted single-source provider for commercial printer hardware, board-level electronics repairs, specialized wide-format systems, creative branding, digital production, and 3D signage fabrication.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenConsultation('General IT & Printing Inquiry')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[50px] bg-[#84CC16] hover:bg-[#bef264] text-slate-950 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-lime-500/20 active:scale-95 cursor-pointer"
                >
                  <span>Request Service Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#service-categories"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[50px] bg-emerald-950/70 hover:bg-emerald-900/60 border border-emerald-800/60 text-slate-200 text-xs font-semibold transition-all duration-200 hover:text-white"
                >
                  <span>Browse Categories</span>
                  <ChevronRight className="w-4 h-4 text-[#84CC16]" />
                </a>
              </div>

              {/* Key Service Badges */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-emerald-900/40 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Cpu className="w-4 h-4 text-[#84CC16] shrink-0" />
                  <span>Board-Level Repairs</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Printer className="w-4 h-4 text-[#84CC16] shrink-0" />
                  <span>Large-Format & UV</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Palette className="w-4 h-4 text-[#84CC16] shrink-0" />
                  <span>Design & Branding</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Layers className="w-4 h-4 text-[#84CC16] shrink-0" />
                  <span>3D Signage Installs</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. Category Filter Tabs */}
      <section id="service-categories" className="py-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-emerald-900/30">
            <div>
              <p className="text-xs font-semibold text-[#84CC16] uppercase tracking-wider">
                Full Service Portfolio
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Explore Our Specialized Capabilities
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="inline-flex p-1.5 rounded-[50px] bg-[#061814] border border-emerald-900/50">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-[50px] text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-[#84CC16] text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                All Services ({allServices.length})
              </button>
              <button
                onClick={() => setActiveCategory('hardware')}
                className={`px-4 py-2 rounded-[50px] text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === 'hardware'
                    ? 'bg-[#84CC16] text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Printer & Hardware ({hardwareServices.length})
              </button>
              <button
                onClick={() => setActiveCategory('creative')}
                className={`px-4 py-2 rounded-[50px] text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === 'creative'
                    ? 'bg-[#84CC16] text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Creative & Signage ({creativeServices.length})
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Category 1: Printer Sales, Repair and Maintenance */}
      {(activeCategory === 'all' || activeCategory === 'hardware') && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-emerald-900/30">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#84CC16]">
                  <Wrench className="w-4 h-4" />
                  <span>Category 01</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Printer Sales, Repair and Maintenance
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  Dedicated commercial hardware engineering, electronics troubleshooting, and ongoing technical support for large-format, DTF, UV, and textile printers.
                </p>
              </div>

              <button
                onClick={() => onOpenConsultation('Printer Sales, Repair and Maintenance')}
                className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-[50px] bg-emerald-950/80 hover:bg-emerald-900/60 border border-emerald-800/60 text-xs font-semibold text-[#84CC16] transition-colors cursor-pointer"
              >
                <span>Inquire Category</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Hardware Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardwareServices.map((service) => (
                <div 
                  key={service.id}
                  className="group relative bg-[#061814] rounded-2xl border border-emerald-900/40 hover:border-[#84CC16]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-lime-950/20"
                >
                  {/* Card Image Header */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061814] via-[#061814]/40 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-950/90 text-[#84CC16] border border-emerald-800/50 backdrop-blur-sm">
                        {service.category}
                      </span>
                    </div>

                    {service.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#84CC16] text-slate-950 shadow-md">
                          Key Specialty
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <h4 className="text-lg font-bold text-white group-hover:text-[#84CC16] transition-colors leading-snug">
                        {service.title}
                      </h4>
                      <p className="text-xs text-[#EFDEBC] font-medium leading-relaxed">
                        {service.tagline}
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>

                      {/* Deliverables / Highlights */}
                      {service.deliverables && (
                        <div className="pt-3 border-t border-emerald-900/30 space-y-1.5">
                          {service.deliverables.slice(0, 3).map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#84CC16] shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-emerald-900/30 flex items-center justify-between gap-3">
                      <button
                        onClick={() => onSelectService(service)}
                        className="text-xs font-semibold text-slate-300 hover:text-white inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#84CC16]" />
                        <span>View Details</span>
                      </button>

                      <button
                        onClick={() => onOpenConsultation(service.title)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[50px] bg-[#84CC16] hover:bg-[#bef264] text-slate-950 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer active:scale-95"
                      >
                        <span>Inquire</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 5. Category 2: Creative and Printing Services */}
      {(activeCategory === 'all' || activeCategory === 'creative') && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-emerald-900/30">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#84CC16]">
                  <Sparkles className="w-4 h-4" />
                  <span>Category 02</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Creative and Printing Services
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  High-impact visual communication, full brand identity design, precision digital large-format printing, and architectural 3D signage fabrication.
                </p>
              </div>

              <button
                onClick={() => onOpenConsultation('Creative and Printing Services')}
                className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-[50px] bg-emerald-950/80 hover:bg-emerald-900/60 border border-emerald-800/60 text-xs font-semibold text-[#84CC16] transition-colors cursor-pointer"
              >
                <span>Inquire Category</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Creative Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {creativeServices.map((service) => (
                <div 
                  key={service.id}
                  className="group relative bg-[#061814] rounded-2xl border border-emerald-900/40 hover:border-[#84CC16]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-lime-950/20"
                >
                  {/* Card Image Header */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061814] via-[#061814]/40 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-950/90 text-[#84CC16] border border-emerald-800/50 backdrop-blur-sm">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <h4 className="text-lg font-bold text-white group-hover:text-[#84CC16] transition-colors leading-snug">
                        {service.title}
                      </h4>
                      <p className="text-xs text-[#EFDEBC] font-medium leading-relaxed">
                        {service.tagline}
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>

                      {/* Deliverables / Highlights */}
                      {service.deliverables && (
                        <div className="pt-3 border-t border-emerald-900/30 space-y-1.5">
                          {service.deliverables.slice(0, 3).map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#84CC16] shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Bar */}
                    <div className="pt-4 border-t border-emerald-900/30 flex items-center justify-between gap-3">
                      <button
                        onClick={() => onSelectService(service)}
                        className="text-xs font-semibold text-slate-300 hover:text-white inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#84CC16]" />
                        <span>View Details</span>
                      </button>

                      <button
                        onClick={() => onOpenConsultation(service.title)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[50px] bg-[#84CC16] hover:bg-[#bef264] text-slate-950 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer active:scale-95"
                      >
                        <span>Inquire</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 6. Technical Process Workflow Highlight */}
      <section className="py-16 bg-[#041210] border-y border-emerald-900/30 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#84CC16]">
              Service Execution
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Our Professional Workflow
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Clear, transparent, and technically rigorous methodology applied to every service engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#061814] border border-emerald-900/40 space-y-3 relative">
              <span className="text-xs font-bold text-[#84CC16] bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-800">
                01. Diagnosis
              </span>
              <h4 className="text-base font-bold text-white pt-2">
                In-Depth Assessment
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Detailed diagnostic testing of hardware, circuitry, or review of creative printing specifications to identify the exact requirement.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#061814] border border-emerald-900/40 space-y-3 relative">
              <span className="text-xs font-bold text-[#84CC16] bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-800">
                02. Proposal
              </span>
              <h4 className="text-base font-bold text-white pt-2">
                Technical Plan
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Clear scope outlining component repairs, genuine part requirements, production timelines, and precise service parameters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#061814] border border-emerald-900/40 space-y-3 relative">
              <span className="text-xs font-bold text-[#84CC16] bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-800">
                03. Execution
              </span>
              <h4 className="text-base font-bold text-white pt-2">
                Precision Work
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Micro-soldering, mechanical repairs, calibration, high-resolution digital printing, or structural signage fabrication.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#061814] border border-emerald-900/40 space-y-3 relative">
              <span className="text-xs font-bold text-[#84CC16] bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-800">
                04. Quality Check
              </span>
              <h4 className="text-base font-bold text-white pt-2">
                Testing & Delivery
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rigorous post-repair bench testing, color accuracy verification, or professional on-site mounting with client sign-off.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Strong Contact / CTA Section */}
      <section id="contact-services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-[#061814] border border-emerald-900/50 p-8 sm:p-12 lg:p-16 shadow-2xl space-y-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Direct Info */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-800/60 text-[#84CC16] text-xs font-semibold uppercase tracking-wider">
                  <span>Get In Touch</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Ready to Service Your Printing Equipment or Start a Project?
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Whether you require immediate printer mainboard repairs, regular maintenance for wide-format machinery, equipment sales, custom graphic design, or 3D architectural signage fabrication, MOD Innovations is here to assist.
                </p>

                {/* Direct Contact Cards */}
                <div className="space-y-3 pt-2">
                  <a 
                    href="tel:0207004123" 
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-900/50 hover:border-[#84CC16]/60 transition-colors text-slate-200 hover:text-white group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#84CC16] flex items-center justify-center text-slate-950 shrink-0">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400">Technical Support & Sales</div>
                      <div className="text-xs font-bold text-white group-hover:text-[#84CC16] transition-colors">0207004123</div>
                    </div>
                  </a>

                  <a 
                    href="mailto:nanadjan5050@gmail.com" 
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-900/50 hover:border-[#84CC16]/60 transition-colors text-slate-200 hover:text-white group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#84CC16] flex items-center justify-center text-slate-950 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400">Email Inquiries</div>
                      <div className="text-xs font-bold text-white group-hover:text-[#84CC16] transition-colors">nanadjan5050@gmail.com</div>
                    </div>
                  </a>
                </div>

              </div>

              {/* Right Column: Service Inquiry Form */}
              <div className="lg:col-span-7 bg-[#051512] p-6 sm:p-8 rounded-2xl border border-emerald-900/40">
                
                {formSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-950 border border-[#84CC16] flex items-center justify-center text-[#84CC16] mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-white">
                      Service Request Received
                    </h4>
                    <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting MOD Innovations. Our technical team has received your inquiry for <strong className="text-[#84CC16]">{selectedServiceInForm}</strong> and will follow up promptly.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', message: '' });
                      }}
                      className="px-5 py-2 rounded-[50px] bg-[#84CC16] text-slate-950 text-xs font-bold uppercase tracking-wider hover:bg-[#bef264] transition-all cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitInquiry} className="space-y-4">
                    
                    <div>
                      <h4 className="text-base font-bold text-white">
                        Direct Service Inquiry
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Select your required service and provide your contact details.
                      </p>
                    </div>

                    {/* Service Selector */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Select Service
                      </label>
                      <select
                        value={selectedServiceInForm}
                        onChange={(e) => setSelectedServiceInForm(e.target.value)}
                        className="w-full bg-[#061814] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#84CC16] transition-colors"
                      >
                        <optgroup label="Printer Sales, Repair and Maintenance">
                          <option value="Large-Format Printer Repair, Sales and Maintenance">Large-Format Printer Repair, Sales and Maintenance</option>
                          <option value="Printer Mainboard and Control Board Repairs">Printer Mainboard and Control Board Repairs</option>
                          <option value="DTF Printer Sales and Repairs">DTF Printer Sales and Repairs</option>
                          <option value="UV Printer Sales and Repairs">UV Printer Sales and Repairs</option>
                          <option value="Fabric/Textile Printer Sales and Repairs">Fabric/Textile Printer Sales and Repairs</option>
                          <option value="Printer Accessories Sales">Printer Accessories Sales</option>
                        </optgroup>
                        <optgroup label="Creative and Printing Services">
                          <option value="Graphic Design and Branding">Graphic Design and Branding</option>
                          <option value="Digital and Large-Format Printing">Digital and Large-Format Printing</option>
                          <option value="3D Signage Installation and Fabrication">3D Signage Installation and Fabrication</option>
                        </optgroup>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#061814] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84CC16] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="your.email@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#061814] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84CC16] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#061814] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84CC16] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Project / Equipment Details
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Please describe your printer model, error symptoms, printing specs, or signage project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#061814] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84CC16] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-[50px] bg-[#84CC16] hover:bg-[#bef264] text-slate-950 text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-lime-500/10 active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Service Inquiry</span>
                    </button>

                  </form>
                )}

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
