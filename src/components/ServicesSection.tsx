import React from 'react';
import { 
  ArrowUpRight, 
  Landmark, 
  Compass, 
  ShieldCheck, 
  Sprout, 
  Building2 
} from 'lucide-react';
import consultationCardImg from '../assets/images/executive_consultation_card_1791349987924.jpg';
import darkBgImg from '../assets/images/hero_dark_bg_1791350497284.jpg';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: (serviceName?: string) => void;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'invest-management',
    title: 'Invest Management',
    tagline: 'Active portfolio architecture and asset allocation',
    description: 'We are understand that navigating on the complexities finances daunting. Our team seasoned financial advisors is dedicated.',
    iconName: 'briefcase',
    typicalClient: 'High-Net-Worth Individuals & Family Offices',
    deliverables: [
      'Multi-Asset Class Allocation Strategy',
      'Direct Indexing & Tax-Loss Harvesting',
      'Quarterly Rebalancing & Liquidity Management',
      'Alternative Asset Integration'
    ],
    caseStudy: {
      client: 'Multi-Generational Estate',
      result: '+14.2% Net Annualized Yield with 35% reduced volatility',
      duration: '36 Months'
    }
  },
  {
    id: 'wealthwise-consulting',
    title: 'WealthWise Consulting',
    tagline: 'Comprehensive risk mitigation and multi-tier wealth planning',
    description: 'We developed a comprehensive risk and management plan, including financial best hedging strategies and scenario planning.',
    featured: true,
    iconName: 'compass',
    typicalClient: 'Corporate Executives & Tech Founders',
    deliverables: [
      'Scenario-Based Macro Stress Testing',
      'Advanced Trust & Estate Structural Design',
      'Executive Equity Compensation Optimization',
      'Cross-Border Asset Protection Protocols'
    ],
    caseStudy: {
      client: 'Fintech Series C Founder',
      result: '$3.8M in tax savings preserved post-liquidity event',
      duration: '18 Months'
    }
  },
  {
    id: 'financial-navigators',
    title: 'Financial Navigators',
    tagline: 'Strategic advisory for evolving corporate capital requirements',
    description: "At Advicx, we've helped businesses an individuals across industries achieve on financial success through best solution.",
    iconName: 'trending-up',
    typicalClient: 'Mid-Market Enterprises ($10M–$250M Revenue)',
    deliverables: [
      'Working Capital Cycle Optimization',
      'Commercial Debt Refinancing & Restructuring',
      'Capital Expenditure Scenario Planning',
      'Fractional CFO Strategy & Board Guidance'
    ],
    caseStudy: {
      client: 'Specialty Healthcare Network',
      result: 'Lowered cost of capital by 190bps, releasing $4.2M in annual cashflow',
      duration: '12 Months'
    }
  },
  {
    id: 'financial-growing',
    title: 'Financial Growing',
    tagline: 'Venture capital readiness, growth equity & tax alpha',
    description: 'We are guided startups in securing $1.5 million in funding, optimized tax strategies for high-net-worth individuals, and even.',
    iconName: 'coins',
    typicalClient: 'High-Growth Startups & Growth Stage Ventures',
    deliverables: [
      'Series A/B Institutional Readiness Audits',
      'Cap Table Modeling & Waterfall Projections',
      'R&D Tax Credit Maximization',
      'Strategic Debt Facility Syndication'
    ],
    caseStudy: {
      client: 'B2B Enterprise SaaS',
      result: 'Structured $15M non-dilutive credit facility with minimal equity dilution',
      duration: '9 Months'
    }
  },
  {
    id: 'executive-photo-card',
    title: 'Executive Session',
    tagline: 'Confidential strategic advisory review with senior partners',
    description: 'Our senior partners conduct confidential financial diagnostics to audit your total balance sheet and establish an unshakeable growth trajectory.',
    isImageCard: true,
    iconName: 'shield-check',
    typicalClient: 'Accredited Investors & Institutional Decision Makers',
    deliverables: [
      'Holistic Balance Sheet Deep-Dive Diagnostic',
      'Stress-Testing Under Stagflation & Rate Volatility',
      'Direct Access to Senior Managing Directors'
    ],
    caseStudy: {
      client: 'Private Holding Co.',
      result: 'Identified $1.1M in dormant asset yield leakage within 30 days',
      duration: '4 Weeks'
    }
  },
  {
    id: 'horizon-wealth-advisors',
    title: 'Horizon Wealth Advisors',
    tagline: 'Corporate succession, M&A advisory, and long-term liquidity',
    description: 'Whether you&apos;re looking to reduce debt, optimize investments, or navigate best on complex merger, we have the experience.',
    iconName: 'globe',
    typicalClient: 'Business Owners Planning Succession or Sale',
    deliverables: [
      'Sell-Side & Buy-Side Financial Due Diligence',
      'Owner Exit & Transition Structuring',
      'Post-Sale Wealth Reinvestment Architecture',
      'Philanthropic & Legacy Endowment Setup'
    ],
    caseStudy: {
      client: 'Industrial Logistics Firm',
      result: 'Completed 100% equity transition to next generation with zero business disruption',
      duration: '24 Months'
    }
  }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectService, 
  onOpenConsultation 
}) => {
  return (
    <section id="services" className="relative py-20 md:py-28 bg-[#051512] overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Centered Eyebrow Label & Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-block px-3 py-1 rounded-sm bg-[#0a2721] border border-emerald-800/60 shadow-sm">
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-slate-200 font-display">
              OUR FINANCE SERVICES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight font-display">
            Unlock Financial Potential
          </h2>
        </div>

        {/* Structured Three-Column Service-Card Layout (3 cols x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          
          {/* Card 1: Invest Management (White Card) */}
          <div 
            onClick={() => onSelectService(servicesData[0])}
            className="group relative bg-white text-slate-900 p-7 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl flex flex-col justify-between items-center text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-slate-100 min-h-[340px]"
          >
            <div className="space-y-4 flex flex-col items-center">
              {/* Concentric Circular Icon Badge */}
              <div className="w-16 h-16 rounded-full bg-emerald-100/70 p-1 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#84cc16] flex items-center justify-center text-slate-950 shadow-sm">
                  <Landmark className="w-6 h-6 stroke-[2]" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 font-display">
                {servicesData[0].title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xs">
                {servicesData[0].description}
              </p>
            </div>

            {/* Bottom Circular Arrow Button */}
            <div className="pt-6">
              <div className="w-9 h-9 rounded-full bg-[#84cc16] text-slate-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>
          </div>

          {/* Card 2: WealthWise Consulting (Green Highlighted Middle Card) */}
          <div 
            onClick={() => onSelectService(servicesData[1])}
            className="group relative bg-[#84cc16] text-slate-950 p-7 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col justify-between items-center text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-lime-300/40 min-h-[340px]"
          >
            <div className="space-y-4 flex flex-col items-center">
              {/* Concentric Circular Icon Badge (White on Green) */}
              <div className="w-16 h-16 rounded-full bg-white/25 p-1 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-emerald-800 shadow-sm">
                  <Compass className="w-6 h-6 stroke-[2]" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-950 font-display">
                {servicesData[1].title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-normal max-w-xs">
                {servicesData[1].description}
              </p>
            </div>

            {/* Bottom Circular Arrow Button */}
            <div className="pt-6">
              <div className="w-9 h-9 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>
          </div>

          {/* Card 3: Financial Navigators (White Card) */}
          <div 
            onClick={() => onSelectService(servicesData[2])}
            className="group relative bg-white text-slate-900 p-7 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl flex flex-col justify-between items-center text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-slate-100 min-h-[340px]"
          >
            <div className="space-y-4 flex flex-col items-center">
              {/* Concentric Circular Icon Badge */}
              <div className="w-16 h-16 rounded-full bg-emerald-100/70 p-1 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#84cc16] flex items-center justify-center text-slate-950 shadow-sm">
                  <ShieldCheck className="w-6 h-6 stroke-[2]" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 font-display">
                {servicesData[2].title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xs">
                {servicesData[2].description}
              </p>
            </div>

            {/* Bottom Circular Arrow Button */}
            <div className="pt-6">
              <div className="w-9 h-9 rounded-full bg-[#84cc16] text-slate-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>
          </div>

          {/* Card 4: Financial Growing (White Card) */}
          <div 
            onClick={() => onSelectService(servicesData[3])}
            className="group relative bg-white text-slate-900 p-7 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl flex flex-col justify-between items-center text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-slate-100 min-h-[340px]"
          >
            <div className="space-y-4 flex flex-col items-center">
              {/* Concentric Circular Icon Badge */}
              <div className="w-16 h-16 rounded-full bg-emerald-100/70 p-1 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#84cc16] flex items-center justify-center text-slate-950 shadow-sm">
                  <Sprout className="w-6 h-6 stroke-[2]" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 font-display">
                {servicesData[3].title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xs">
                {servicesData[3].description}
              </p>
            </div>

            {/* Bottom Circular Arrow Button */}
            <div className="pt-6">
              <div className="w-9 h-9 rounded-full bg-[#84cc16] text-slate-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>
          </div>

          {/* Card 5: Executive Image Card (Middle Photo Card) */}
          <div 
            onClick={() => onOpenConsultation('Private Executive Advisory Session')}
            className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-emerald-950 min-h-[340px] flex flex-col justify-end p-6 cursor-pointer border border-emerald-800/40 hover:border-[#a3e635] transition-all duration-300"
          >
            <img 
              src={consultationCardImg} 
              alt="Executive financial consultation meeting" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Ambient Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#051512]/90 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Circular Arrow Button on Photo Card */}
            <div className="relative z-10 flex justify-center pt-4">
              <div className="w-9 h-9 rounded-full bg-[#84cc16] text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>
          </div>

          {/* Card 6: Horizon Wealth Advisors (White Card) */}
          <div 
            onClick={() => onSelectService(servicesData[5])}
            className="group relative bg-white text-slate-900 p-7 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl flex flex-col justify-between items-center text-center transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-slate-100 min-h-[340px]"
          >
            <div className="space-y-4 flex flex-col items-center">
              {/* Concentric Circular Icon Badge */}
              <div className="w-16 h-16 rounded-full bg-emerald-100/70 p-1 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#84cc16] flex items-center justify-center text-slate-950 shadow-sm">
                  <Building2 className="w-6 h-6 stroke-[2]" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 font-display">
                {servicesData[5].title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xs">
                {servicesData[5].description}
              </p>
            </div>

            {/* Bottom Circular Arrow Button */}
            <div className="pt-6">
              <div className="w-9 h-9 rounded-full bg-[#84cc16] text-slate-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
