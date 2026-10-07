import React from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Wrench, 
  Printer, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Award,
  Settings,
  Flame,
  Palette,
  Eye,
  ChevronRight,
  PhoneCall,
  Mail,
  Send
} from 'lucide-react';
import darkBgImg from '../assets/images/hero_dark_bg_1791350497284.jpg';
import { ServiceItem } from '../types';

const aboutHeroImg = 'https://i.ibb.co/93kpRfct/004-Printer-Mainboard-and-Control-Board-Repairs.jpg';
const workshopImg = 'https://i.ibb.co/C3v8BH35/003-Printer-Mainboard-and-Control-Board-Repairs.jpg';
const technicianImg = 'https://i.ibb.co/GhPK6bm/002-Printer-Mainboard-and-Control-Board-Repairs.jpg';

interface AboutPageProps {
  onNavigateHome: () => void;
  onOpenConsultation: (service?: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

const specializations: ServiceItem[] = [
  {
    id: 'large-format-printers',
    title: 'Large-Format Printer Sales, Repair and Maintenance',
    tagline: 'High-precision commercial printer sales, scheduled maintenance, and on-site servicing.',
    description: 'Comprehensive sales, servicing, and scheduled preventive maintenance for industrial and commercial large-format printing machinery.',
    image: 'https://i.ibb.co/CcQtKS1/001-Large-Format-and-DTF-Printer-Repairs-and-Spare-Parts-Sales.jpg',
    category: 'Hardware & Repairs',
    deliverables: [
      'Commercial Large-Format Printer Sales & Setup',
      'Preventive Maintenance & Calibration',
      'Printhead Alignment & Ink Delivery Servicing',
      'Emergency On-Site & Remote Diagnostics'
    ]
  },
  {
    id: 'mainboard-repairs',
    title: 'Printer Mainboard and Control Board Repairs',
    tagline: 'Specialized component-level circuit board diagnostics and micro-soldering.',
    description: 'Specialized diagnosis and circuit repairs for faulty printer mainboards, power boards, and motion control boards.',
    image: 'https://i.ibb.co/fdmBXvb2/001-Printer-Mainboard-and-Control-Board-Repairs.jpg',
    category: 'Hardware & Repairs',
    deliverables: [
      'Component-Level Diagnostic Testing',
      'Micro-Soldering & IC Chip Replacement',
      'Power Supply & Voltage Regulation Repairs',
      'Post-Repair Quality & Reliability Verification'
    ]
  },
  {
    id: 'dtf-printers',
    title: 'DTF Printer Sales and Repairs',
    tagline: 'Direct-to-Film printing systems sales, setup, parts, and technical troubleshooting.',
    description: 'Reliable direct-to-film printer sales, powder shaker integration, and expert troubleshooting for smooth garment production.',
    image: 'https://i.ibb.co/kg1RWK14/005-Printer-Mainboard-and-Control-Board-Repairs.jpg',
    category: 'Hardware & Repairs',
    deliverables: [
      'Turnkey DTF Printing System Setup',
      'Powder Applicator & Curing Oven Servicing',
      'White Ink Agitation & Circulation Troubleshooting',
      'Film Feed & Tension Alignment'
    ]
  },
  {
    id: 'uv-printers',
    title: 'UV Printer Sales and Repairs',
    tagline: 'UV flatbed and roll-to-roll equipment with dedicated technical repair support.',
    description: 'Quality UV printer solutions with professional repair, UV lamp calibration, and technical support for dependable curing and output.',
    image: 'https://i.ibb.co/7JrBkgVG/001-UV-Printer-Sales-and-Repairs.jpg',
    category: 'Hardware & Repairs',
    deliverables: [
      'UV Flatbed & Roll-to-Roll Hardware Sales',
      'LED UV Curing Lamp Diagnostics & Tuning',
      'Substrate Vacuum Bed Calibration',
      'Multi-Layer White & Varnish Print Optimization'
    ]
  },
  {
    id: 'fabric-textile-printers',
    title: 'Fabric/Textile Printer Sales and Repairs',
    tagline: 'Dye-sublimation and direct-to-fabric production equipment sales and repair.',
    description: 'Reliable fabric and textile printing equipment sales, dye-sublimation setup, and professional repair services.',
    image: 'https://i.ibb.co/MkjwjDjH/003-Fabric-and-Textile-Printer-Sales-and-Repairs.jpg',
    category: 'Hardware & Repairs',
    deliverables: [
      'Dye-Sublimation & Direct Textile Printer Sales',
      'Continuous Ink Supply System (CISS) Servicing',
      'Textile Take-Up Roller & Tension Calibration',
      'Color Profile & Rip Software Calibration'
    ]
  },
  {
    id: 'printer-accessories',
    title: 'Printer Accessories Sales',
    tagline: 'Essential components, dampers, cables, pumps, and maintenance accessories.',
    description: 'Find essential printer accessories, replacement parts, dampers, pumps, and consumables to support efficient operations.',
    image: 'https://i.ibb.co/ZRg3P9Bg/001-Printer-Accessories-Sales.jpg',
    category: 'Hardware & Repairs',
    deliverables: [
      'OEM & Compatible Replacement Dampers & Caps',
      'Peristaltic Inking Pumps & Tubing Lines',
      'Encoder Strips, Sensors & Data Ribbon Cables',
      'Cleaning Swabs, Solvents & Flushing Solutions'
    ]
  },
  {
    id: 'graphic-design-branding',
    title: 'Graphic Design and Branding',
    tagline: 'Impactful visual identity, print-ready prepress artwork, and brand development.',
    description: 'Creative graphic design, corporate branding packages, prepress production setup, and high-impact visual communication.',
    image: 'https://i.ibb.co/pjjL65ZH/002-Digital-and-Large-Format-Printing-T-Shirt-Mug-and-Cap.jpg',
    category: 'Design & Signage',
    deliverables: [
      'Corporate Visual Identity & Logo Systems',
      'Print-Ready Prepress Vector & Raster Layouts',
      'Packaging, Apparel & Merchandise Mockups',
      'Marketing & Promotional Graphics Creation'
    ]
  },
  {
    id: 'digital-large-format-printing',
    title: 'Digital and Large-Format Printing',
    tagline: 'Custom apparel, promotional merchandise, banners, and high-resolution media prints.',
    description: 'Professional digital printing for T-shirts, mugs, caps, signage, promotional materials, and high-resolution custom displays.',
    image: 'https://i.ibb.co/84NzXW71/001-Digital-and-Large-Format-Printing-T-Shirt-Mug-and-Cap.jpg',
    category: 'Printing & Production',
    deliverables: [
      'Custom Apparel Printing (T-Shirts, Caps, Hoodies)',
      'Sublimation Drinkware & Promotional Items',
      'High-Resolution Vinyl Banners & Posters',
      'Adhesive Decals, Stickers & Floor Graphics'
    ]
  },
  {
    id: '3d-signage-fabrication',
    title: '3D Signage Fabrication and Installation',
    tagline: 'Architectural 3D channel letters, illuminated signs, and expert on-site mounting.',
    description: 'Custom 3D signage fabrication, illuminated acrylic channel lettering, and professional on-site commercial installation.',
    image: 'https://i.ibb.co/gb4zkXVJ/001-3-D-Signage-Installation-and-Fabrication.jpg',
    category: 'Design & Signage',
    deliverables: [
      'Custom 3D Channel Lettering & Dimensional Logos',
      'Backlit & Front-Lit LED Signage Fabrication',
      'Durable Exterior & Interior Material Selection',
      'Precision Structural Mounting & Electrical Connection'
    ]
  }
];

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onOpenConsultation,
  onSelectService
}) => {
  const [formState, setFormState] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    serviceRequested: 'Printer Mainboard and Control Board Repairs',
    message: ''
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.fullName && formState.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-[#051512] text-slate-100">
      
      {/* ========================================================================= */}
      {/* SECTION 1: PAGE HERO */}
      {/* ========================================================================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#051512] border-b border-emerald-950/60">
        {/* Ambient Dark Photographic Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutHeroImg} 
            alt="MOD Innovations technical printing facility" 
            className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#051512]/95 via-[#051512]/90 to-[#051512]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(132,204,22,0.08),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
            <button 
              onClick={onNavigateHome} 
              className="hover:text-[#84CC16] transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#84CC16]">About Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-[#84CC16] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ABOUT MOD INNOVATIONS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display">
                Your Trusted Partner for <br />
                <span className="text-[#84CC16]">IT & Professional Printing</span> Solutions
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                MOD Innovations is dedicated to delivering specialized printer hardware sales, precision mainboard and control board repairs, production supplies, creative design, digital printing, and custom 3D signage.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#about-details"
                  className="px-6 py-3.5 rounded-[50px] text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#84cc16] hover:bg-[#bef264] transition-all duration-200 shadow-md shadow-lime-500/15 inline-flex items-center justify-center cursor-pointer active:scale-95"
                >
                  Discover Our Mission
                </a>
                <button
                  onClick={() => onOpenConsultation('Technical Consultation & Inquiry')}
                  className="px-6 py-3.5 rounded-[50px] text-xs font-bold uppercase tracking-wider text-white bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-800/80 transition-all duration-200 inline-flex items-center justify-center cursor-pointer active:scale-95 gap-2"
                >
                  <span>Connect With Specialists</span>
                  <ArrowRight className="w-4 h-4 text-[#84cc16]" />
                </button>
              </div>
            </div>

            {/* Right Stat / Value Quick-Card */}
            <div className="lg:col-span-4">
              <div className="bg-[#061814]/90 border border-emerald-800/70 p-7 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-md space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#84cc16]">Core Focus</span>
                  <h3 className="text-xl font-bold font-display text-white">Full-Spectrum IT & Printing</h3>
                </div>

                <div className="space-y-3.5 text-xs text-slate-300">
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-900/50">
                    <Wrench className="w-4 h-4 text-[#84cc16] shrink-0" />
                    <span>Mainboard & Component Circuit Repairs</span>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-900/50">
                    <Printer className="w-4 h-4 text-[#84cc16] shrink-0" />
                    <span>Large-Format, DTF, UV & Textile Systems</span>
                  </div>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-900/50">
                    <Layers className="w-4 h-4 text-[#84cc16] shrink-0" />
                    <span>Digital Printing & 3D Signage Fabrication</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-emerald-900/50 text-[11px] text-slate-400">
                  Committed to quality service, reliable solutions, and technical excellence.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: ABOUT MOD INNOVATIONS */}
      {/* ========================================================================= */}
      <section id="about-details" className="py-20 md:py-28 bg-[#061814] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Visual Overlapping Composition */}
            <div className="lg:col-span-6 relative flex justify-center order-2 lg:order-1">
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

                {/* Rotating Circular Brand Stamp Badge */}
                <div className="absolute bottom-4 left-0 sm:left-4 z-20 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#07241d] border border-emerald-700/60 shadow-2xl flex items-center justify-center p-1">
                  <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <path
                      id="aboutPageCirclePath"
                      d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                      fill="none"
                    />
                    <text className="text-[7.2px] font-bold uppercase fill-emerald-200 tracking-[0.24em]">
                      <textPath href="#aboutPageCirclePath" startOffset="0%">
                        MOD INNOVATIONS · PRINTING & IT SOLUTIONS ·
                      </textPath>
                    </text>
                  </svg>

                  <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-[#84cc16] text-slate-950 flex items-center justify-center shadow-md">
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Narrative & Presentation */}
            <div className="lg:col-span-6 space-y-6 text-left max-w-xl order-1 lg:order-2">
              <div className="inline-block">
                <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-slate-200 font-display">
                  WHO WE ARE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.14] font-display">
                Dedicated Technical Mastery & Printing Precision
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                MOD Innovations is a trusted partner for IT and professional printing solutions. We provide high-performance hardware, component-level repairs, and custom manufacturing designed to meet commercial print production standards.
              </p>

              <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                Whether diagnosing faulty printer mainboards, supplying specialized accessories, printing custom merchandise, or fabricating architectural 3D signage, we approach every task with rigorous standards and deep technical capability.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#04110e] border border-emerald-900/50">
                  <h4 className="text-sm font-bold text-white font-display flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#84CC16]" />
                    <span>Electronics & Board Level</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">Specialized diagnosis and circuit repairs for mainboards and motion controllers.</p>
                </div>

                <div className="p-4 rounded-xl bg-[#04110e] border border-emerald-900/50">
                  <h4 className="text-sm font-bold text-white font-display flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#84CC16]" />
                    <span>Production & Branding</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">Full-service digital printing, custom apparel, and structural 3D signage.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: WHAT WE SPECIALIZE IN */}
      {/* ========================================================================= */}
      <section id="specialization" className="relative py-20 md:py-28 bg-[#051512] overflow-hidden">
        {/* Full-width dark photographic background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={darkBgImg} 
            alt="Dark atmospheric background" 
            className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#051512] via-[#051512]/95 to-[#051512]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-3">
            <div className="inline-block">
              <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-slate-200 font-display">
                WHAT WE SPECIALIZE IN · OUR EXPERTISE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight font-display">
              Comprehensive Service Capabilities
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
              MOD Innovations covers the full lifecycle of professional printing equipment, technical board repairs, custom production, and signage.
            </p>
          </div>

          {/* 9 Specialization Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {specializations.map((service) => (
              <div 
                key={service.id}
                onClick={() => onSelectService(service)}
                className="group relative rounded-[1px] overflow-hidden shadow-xl bg-emerald-950 min-h-[350px] flex flex-col justify-end items-center text-center p-7 sm:p-8 cursor-pointer border-none transition-all duration-300"
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 border-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051512]/95 via-[#051512]/60 to-transparent pointer-events-none" />

                <div className="relative z-10 w-full flex flex-col items-center space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold font-display text-[#84CC16] group-hover:text-[#EFDFBD] transition-colors tracking-tight drop-shadow-md">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#EFDEBC] leading-relaxed font-normal max-w-xs opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-36 transition-all duration-300 drop-shadow-md px-1">
                    {service.description}
                  </p>

                  <div className="w-9 h-9 rounded-full bg-[#84cc16] group-hover:bg-[#EFDFBD] text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-slate-950" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: OUR APPROACH TO QUALITY AND RELIABILITY */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#061814] relative overflow-hidden border-t border-emerald-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-3">
            <div className="inline-block">
              <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-slate-200 font-display">
                METHODOLOGY & STANDARDS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight font-display">
              Our Approach to Quality and Reliability
            </h2>

            <p className="text-sm text-slate-300 font-normal leading-relaxed">
              We apply rigorous technical procedures to ensure every printer repaired, system deployed, print produced, and sign installed meets exacting operational standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#04110e] border border-emerald-900/50 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-900/60 text-[#84CC16] flex items-center justify-center">
                <Cpu className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h3 className="text-lg font-bold font-display text-white">1. Component Diagnostics</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Systematic signal and power tracing to accurately isolate faults in printer mainboards, servo drives, and control chips before beginning repairs.
              </p>
            </div>

            <div className="bg-[#04110e] border border-emerald-900/50 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-900/60 text-[#84CC16] flex items-center justify-center">
                <Settings className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h3 className="text-lg font-bold font-display text-white">2. Genuine Components</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Using authentic specification dampers, pumps, cables, and electronic components to preserve hardware reliability and equipment lifespan.
              </p>
            </div>

            <div className="bg-[#04110e] border border-emerald-900/50 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-900/60 text-[#84CC16] flex items-center justify-center">
                <Eye className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h3 className="text-lg font-bold font-display text-white">3. Output Calibration</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Precise printhead nozzle alignment, color profiling, and test firing to guarantee razor-sharp detail and consistent color accuracy.
              </p>
            </div>

            <div className="bg-[#04110e] border border-emerald-900/50 p-6 rounded-2xl space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-900/60 text-[#84CC16] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h3 className="text-lg font-bold font-display text-white">4. Post-Service Verification</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Full functional stress testing on repaired boards and machinery under real production loads prior to delivery or sign installation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: WHY CHOOSE US */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#051512] relative overflow-hidden border-t border-emerald-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-3">
            <div className="inline-block">
              <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-slate-200 font-display">
                WHY CHOOSE MOD INNOVATIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight font-display">
              Four Core Pillars of Our Service
            </h2>

            <p className="text-sm text-slate-300 font-normal leading-relaxed">
              We focus squarely on delivering measurable value, reducing equipment downtime, and executing superior print and signage deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1 */}
            <div className="group bg-[#04110e] border border-emerald-900/40 hover:border-[#84cc16]/40 p-7 rounded-2xl transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-900/50 group-hover:bg-[#84cc16] text-[#84cc16] group-hover:text-slate-950 transition-colors flex items-center justify-center shadow-md">
                    <Award className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">01</span>
                </div>
                <h3 className="text-xl font-bold font-display text-white group-hover:text-[#EFDFBD] transition-colors">
                  Quality Service
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Dedicated customer service, clear communication, and comprehensive inspection across every diagnostic, repair, and print run.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group bg-[#04110e] border border-emerald-900/40 hover:border-[#84cc16]/40 p-7 rounded-2xl transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-900/50 group-hover:bg-[#84cc16] text-[#84cc16] group-hover:text-slate-950 transition-colors flex items-center justify-center shadow-md">
                    <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">02</span>
                </div>
                <h3 className="text-xl font-bold font-display text-white group-hover:text-[#EFDFBD] transition-colors">
                  Reliable Solutions
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Practical troubleshooting and durable hardware repairs engineered to eliminate recurring issues and protect productivity.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group bg-[#04110e] border border-emerald-900/40 hover:border-[#84cc16]/40 p-7 rounded-2xl transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-900/50 group-hover:bg-[#84cc16] text-[#84cc16] group-hover:text-slate-950 transition-colors flex items-center justify-center shadow-md">
                    <Cpu className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">03</span>
                </div>
                <h3 className="text-xl font-bold font-display text-white group-hover:text-[#EFDFBD] transition-colors">
                  Technical Expertise
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Deep specialized knowledge of micro-circuitry, motion control boards, firmware calibration, and large-format printer mechanics.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="group bg-[#04110e] border border-emerald-900/40 hover:border-[#84cc16]/40 p-7 rounded-2xl transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-900/50 group-hover:bg-[#84cc16] text-[#84cc16] group-hover:text-slate-950 transition-colors flex items-center justify-center shadow-md">
                    <CheckCircle2 className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-500">04</span>
                </div>
                <h3 className="text-xl font-bold font-display text-white group-hover:text-[#EFDFBD] transition-colors">
                  Professional Results
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Vibrant, high-resolution print deliverables, durable materials, and structurally sound 3D architectural signage.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: CONTACT / CTA SECTION */}
      {/* ========================================================================= */}
      <section id="contact" className="py-20 md:py-28 bg-[#061814] relative overflow-hidden border-t border-emerald-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-3">
            <div className="inline-block">
              <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-slate-200 font-display">
                CONNECT WITH MOD INNOVATIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight font-display">
              Have a Project or Equipment Need?
            </h2>

            <p className="text-sm text-slate-300 font-normal leading-relaxed">
              Contact our team today for prompt diagnosis, printer sales, accessories inquiries, custom branding, or 3D signage fabrication.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-[#04110e] border border-emerald-900/50 rounded-2xl p-7 sm:p-9 shadow-2xl">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#84cc16]">
                    Direct Support
                  </span>
                  <h3 className="text-2xl font-bold font-display text-white">
                    MOD Innovations Technical Desk
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    We respond swiftly to troubleshooting requests, hardware inquiries, and custom production specifications.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <a 
                    href="tel:0207004123" 
                    className="flex items-center gap-4 p-4 rounded-xl bg-emerald-950/50 border border-emerald-900/60 hover:border-[#84cc16]/50 transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-emerald-900/80 text-[#84cc16] group-hover:bg-[#84cc16] group-hover:text-slate-950 transition-colors flex items-center justify-center shrink-0">
                      <PhoneCall className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Call Direct</span>
                      <span className="text-sm font-bold text-white group-hover:text-[#EFDFBD] transition-colors">0207004123</span>
                    </div>
                  </a>

                  <a 
                    href="mailto:nanadjan5050@gmail.com" 
                    className="flex items-center gap-4 p-4 rounded-xl bg-emerald-950/50 border border-emerald-900/60 hover:border-[#84cc16]/50 transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-emerald-900/80 text-[#84cc16] group-hover:bg-[#84cc16] group-hover:text-slate-950 transition-colors flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Email Desk</span>
                      <span className="text-sm font-bold text-white group-hover:text-[#EFDFBD] transition-colors">nanadjan5050@gmail.com</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-emerald-900/40 text-xs text-slate-400">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#84cc16] shrink-0" />
                  <span>Personalized service for print shops, studios & businesses</span>
                </p>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 bg-[#04110e] border border-emerald-900/50 rounded-2xl p-7 sm:p-9 shadow-2xl flex flex-col justify-center">
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#84cc16] text-slate-950 mx-auto flex items-center justify-center shadow-xl shadow-lime-500/20">
                    <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-white font-display">
                      Thank You, {formState.fullName}!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Your message regarding <span className="text-[#84cc16] font-semibold">{formState.serviceRequested}</span> has been received. Our team will contact you promptly.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({
                          fullName: '',
                          email: '',
                          phone: '',
                          serviceRequested: 'Printer Mainboard and Control Board Repairs',
                          message: ''
                        });
                      }}
                      className="px-6 py-2.5 rounded-[50px] text-xs uppercase tracking-wider font-bold text-slate-950 bg-[#84cc16] hover:bg-[#bef264] transition-all cursor-pointer active:scale-95"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-display text-white">
                      Request Information or Service
                    </h3>
                    <p className="text-xs text-slate-400">
                      Submit your service interest and we will get back to you with guidance and technical estimates.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Samantha Vance"
                        value={formState.fullName}
                        onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                        className="w-full bg-[#061814] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84cc16] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. samantha@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-[#061814] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84cc16] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +1 (555) 000-0000"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-[#061814] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84cc16] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-1">
                        Service Area *
                      </label>
                      <select
                        value={formState.serviceRequested}
                        onChange={(e) => setFormState({ ...formState, serviceRequested: e.target.value })}
                        className="w-full bg-[#061814] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#84cc16] transition-colors"
                      >
                        <option value="Large-Format Printer Sales, Repair and Maintenance">Large-Format Printer Sales, Repair and Maintenance</option>
                        <option value="Printer Mainboard and Control Board Repairs">Printer Mainboard and Control Board Repairs</option>
                        <option value="DTF Printer Sales and Repairs">DTF Printer Sales and Repairs</option>
                        <option value="UV Printer Sales and Repairs">UV Printer Sales and Repairs</option>
                        <option value="Fabric/Textile Printer Sales and Repairs">Fabric/Textile Printer Sales and Repairs</option>
                        <option value="Printer Accessories Sales">Printer Accessories Sales</option>
                        <option value="Graphic Design and Branding">Graphic Design and Branding</option>
                        <option value="Digital and Large-Format Printing">Digital and Large-Format Printing</option>
                        <option value="3D Signage Fabrication and Installation">3D Signage Fabrication and Installation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-300 tracking-wider mb-1">
                      Project Specifications or Equipment Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify printer models, symptoms, quantity, print dimensions, or signage criteria..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-[#061814] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84cc16] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-[50px] text-xs uppercase tracking-wider font-bold text-slate-950 bg-[#84cc16] hover:bg-[#bef264] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-lime-500/20 active:scale-98"
                    >
                      <span>Submit Inquiry to MOD Innovations</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
