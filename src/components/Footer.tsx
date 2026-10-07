import React, { useState } from 'react';
import { Check, PhoneCall, Mail, Globe, MessageSquare } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: 'home' | 'about' | 'services' | 'contact' | 'sitemap', sectionId?: string) => void;
  onOpenConsultation: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigate,
  onOpenConsultation 
}) => {
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribedEmail) {
      setNewsletterSuccess(true);
      setSubscribedEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (page: 'home' | 'about' | 'services' | 'contact' | 'sitemap', sectionId?: string) => {
    if (onNavigate) {
      onNavigate(page, sectionId);
    } else if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#030e0c] text-slate-400 text-xs border-t border-emerald-950 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Tier */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/30">
          
          {/* Brand & Direct Contact Col */}
          <div className="lg:col-span-4 space-y-4">
            <button 
              onClick={() => handleLinkClick('home')}
              className="inline-block cursor-pointer text-left shrink-0"
            >
              <img 
                src="https://i.ibb.co/60dH7n7H/MOD-Innovations-Transparent-Logo-Light-Version.png" 
                alt="MOD Innovations Logo" 
                className="h-10 sm:h-12 lg:h-[50px] w-auto max-w-[180px] sm:max-w-none object-contain"
                referrerPolicy="no-referrer"
              />
            </button>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              MOD Innovations is your trusted partner for IT and professional printing solutions, printer mainboard repairs, equipment sales, accessories, custom branding, digital printing, and 3D signage.
            </p>

            {/* Direct Contact Links */}
            <div className="pt-2 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-[#84CC16]" />
                <a href="tel:0207004123" className="hover:text-[#84CC16] transition-colors">
                  Phone: 0207004123
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#84CC16]" />
                <a href="https://wa.me/0207004123" target="_blank" rel="noopener noreferrer" className="hover:text-[#84CC16] transition-colors">
                  WhatsApp: 0207004123
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#84CC16]" />
                <a href="mailto:nanadjan5050@gmail.com" className="hover:text-[#84CC16] transition-colors">
                  Email: nanadjan5050@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#84CC16]" />
                <a href="https://www.modinnovations.net" target="_blank" rel="noopener noreferrer" className="hover:text-[#84CC16] transition-colors">
                  Website: www.modinnovations.net
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links / Services Column 1 */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider">
              Printer Sales & Repairs
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onOpenConsultation('Large-Format Printer Repair, Sales and Maintenance')} className="hover:text-[#84CC16] transition-colors text-left cursor-pointer">Large-Format Printer Repair & Sales</button></li>
              <li><button onClick={() => onOpenConsultation('Printer Mainboard and Control Board Repairs')} className="hover:text-[#84CC16] transition-colors text-left cursor-pointer">Mainboard & Control Board Repairs</button></li>
              <li><button onClick={() => onOpenConsultation('DTF Printer Sales and Repairs')} className="hover:text-[#84CC16] transition-colors text-left cursor-pointer">DTF Printer Sales & Repairs</button></li>
              <li><button onClick={() => onOpenConsultation('UV Printer Sales and Repairs')} className="hover:text-[#84CC16] transition-colors text-left cursor-pointer">UV Printer Sales & Repairs</button></li>
              <li><button onClick={() => onOpenConsultation('Fabric/Textile Printer Sales and Repairs')} className="hover:text-[#84CC16] transition-colors text-left cursor-pointer">Fabric & Textile Printer Repairs</button></li>
              <li><button onClick={() => onOpenConsultation('Printer Accessories Sales')} className="hover:text-[#84CC16] transition-colors text-left cursor-pointer">Printer Accessories Sales</button></li>
            </ul>
          </div>

          {/* Quick Links / Services Column 2 */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider">
              Creative & Print
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onOpenConsultation('Graphic Design and Branding')} className="hover:text-[#84CC16] transition-colors text-left cursor-pointer">Graphic Design & Branding</button></li>
              <li><button onClick={() => onOpenConsultation('Digital and Large-Format Printing')} className="hover:text-[#84CC16] transition-colors text-left cursor-pointer">Digital & Large-Format Printing</button></li>
              <li><button onClick={() => onOpenConsultation('3D Signage Installation and Fabrication')} className="hover:text-[#84CC16] transition-colors text-left cursor-pointer">3D Signage Installation & Fabrication</button></li>
              <li><button onClick={() => handleLinkClick('services')} className="hover:text-[#84CC16] transition-colors text-left cursor-pointer text-[#84CC16] font-semibold">View All Services →</button></li>
            </ul>
          </div>

          {/* Newsletter / Service Updates */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider">
              Service Updates & Inquiries
            </h4>
            <p className="text-xs text-slate-400">
              Stay connected for the latest in commercial printing equipment, accessories, and maintenance solutions.
            </p>

            {newsletterSuccess ? (
              <div className="flex items-center gap-2 p-2.5 bg-emerald-950 border border-emerald-800 rounded-none text-emerald-300 text-xs">
                <Check className="w-4 h-4 text-[#84CC16]" />
                <span>Thank you for connecting with MOD Innovations.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  value={subscribedEmail}
                  onChange={(e) => setSubscribedEmail(e.target.value)}
                  className="bg-[#061814] border border-emerald-900 rounded-none px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84CC16] flex-1"
                />
                <button
                  type="submit"
                  className="px-3 py-2 rounded-none bg-[#84CC16] hover:bg-[#bef264] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Tier / Copyright & Full Site Hierarchy Navigation */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} MOD Innovations. All rights reserved. Professional IT & Printing Solutions.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button onClick={() => handleLinkClick('home')} className="hover:text-slate-300 transition-colors cursor-pointer">Home</button>
            <span>·</span>
            <button onClick={() => handleLinkClick('about')} className="hover:text-slate-300 transition-colors cursor-pointer">About Us</button>
            <span>·</span>
            <button onClick={() => handleLinkClick('services')} className="hover:text-slate-300 transition-colors cursor-pointer">Services</button>
            <span>·</span>
            <button onClick={() => handleLinkClick('contact')} className="hover:text-slate-300 transition-colors cursor-pointer">Contact Us</button>
            <span>·</span>
            <button onClick={() => handleLinkClick('sitemap')} className="hover:text-[#84CC16] font-semibold transition-colors cursor-pointer">Sitemap</button>
            <span>·</span>
            <button onClick={scrollToTop} className="hover:text-[#84CC16] transition-colors cursor-pointer">Back to top ↑</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
