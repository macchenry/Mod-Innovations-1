import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import darkBgImg from '../assets/images/hero_dark_bg_1791350497284.jpg';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: (serviceName?: string) => void;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'large-format-printers',
    title: 'Large-Format Printer Sales, Repair and Maintenance',
    tagline: 'High-precision equipment sales, scheduled servicing, and full technical maintenance.',
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
    tagline: 'Expert component-level diagnostics and board repair to restore reliable performance.',
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

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectService, 
  onOpenConsultation 
}) => {
  return (
    <section id="services" className="relative py-16 md:py-24 lg:py-28 bg-[#051512] overflow-hidden">
      {/* Full-width dark photographic background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={darkBgImg} 
          alt="Dark atmospheric background" 
          className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#051512] via-[#051512]/95 to-[#051512]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(16,185,129,0.1),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Centered Eyebrow Label & Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-16 space-y-3">
          <div className="inline-block">
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-slate-200 font-display">
              WHAT WE SPECIALIZE IN · OUR EXPERTISE
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight font-display break-words">
            Comprehensive Printing & Technical Solutions
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
            From component-level mainboard electronics to commercial hardware sales, custom digital printing, and architectural signage.
          </p>
        </div>

        {/* Structured Three-Column Service-Card Layout (3 cols x 3 rows = 9 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group relative rounded-[1px] overflow-hidden shadow-xl bg-emerald-950 min-h-[300px] sm:min-h-[340px] md:min-h-[360px] flex flex-col justify-end items-center text-center p-6 sm:p-7 md:p-8 cursor-pointer border-none transition-all duration-300"
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 border-none"
                referrerPolicy="no-referrer"
              />
              {/* Ambient Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#051512]/95 via-[#051512]/60 to-transparent pointer-events-none" />

              {/* Title positioned just above the round icon shape */}
              <div className="relative z-10 w-full flex flex-col items-center space-y-3">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold font-display text-[#84CC16] group-hover:text-[#EFDFBD] transition-colors tracking-tight drop-shadow-md">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#EFDEBC] leading-relaxed font-normal max-w-xs opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-36 transition-all duration-300 drop-shadow-md px-1">
                  {service.description}
                </p>

                {/* Bottom Circular Arrow Button */}
                <div className="w-9 h-9 rounded-full bg-[#84cc16] group-hover:bg-[#EFDFBD] text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-200">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-slate-950" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
