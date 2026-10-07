import React, { useState } from 'react';
import { TrendingUp, ArrowRight, ShieldCheck, Mail, Check, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
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

  return (
    <footer className="bg-[#030e0c] text-slate-400 text-xs border-t border-emerald-950 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Tier */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/30">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block">
              <img 
                src="https://i.ibb.co/60dH7n7H/MOD-Innovations-Transparent-Logo-Light-Version.png" 
                alt="MOD Innovations Logo" 
                className="h-[52px] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Strategic financial consulting, custom portfolio architecture, and risk hedging for high-net-worth individuals, institutional clients, and growth enterprises.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-xs">
              <ShieldCheck className="w-4 h-4 text-[#a3e635]" />
              <span>Fiduciary Standard · Quantitative Precision</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider">
              Practices
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={onOpenConsultation} className="hover:text-[#a3e635] transition-colors">WealthWise Consulting</button></li>
              <li><button onClick={onOpenConsultation} className="hover:text-[#a3e635] transition-colors">Invest Management</button></li>
              <li><button onClick={onOpenConsultation} className="hover:text-[#a3e635] transition-colors">Financial Navigators</button></li>
              <li><button onClick={onOpenConsultation} className="hover:text-[#a3e635] transition-colors">Financial Growing</button></li>
              <li><button onClick={onOpenConsultation} className="hover:text-[#a3e635] transition-colors">Horizon Wealth</button></li>
            </ul>
          </div>

          {/* Tools & Resources */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-[#a3e635] transition-colors">Advisory Methodology</a></li>
              <li><a href="#services" className="hover:text-[#a3e635] transition-colors">Performance Benchmarks</a></li>
              <li><a href="#hero" className="hover:text-[#a3e635] transition-colors">Asset Allocation Philosophy</a></li>
            </ul>
          </div>

          {/* Newsletter / Briefing */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider">
              Executive Market Briefing
            </h4>
            <p className="text-xs text-slate-400">
              Receive our bi-weekly confidential market outlook on macroeconomic rate cycles and portfolio hedging.
            </p>

            {newsletterSuccess ? (
              <div className="flex items-center gap-2 p-2.5 bg-emerald-950 border border-emerald-800 rounded-lg text-emerald-300 text-xs">
                <Check className="w-4 h-4 text-[#a3e635]" />
                <span>Subscribed to Executive Market Briefing.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter executive email..."
                  value={subscribedEmail}
                  onChange={(e) => setSubscribedEmail(e.target.value)}
                  className="bg-[#061814] border border-emerald-900 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-[#a3e635] flex-1"
                />
                <button
                  type="submit"
                  className="px-3 py-2 rounded-lg bg-[#a3e635] hover:bg-[#bef264] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Global Hubs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-400">
          <div>
            <div className="font-semibold text-white">New York (HQ)</div>
            <div className="text-[11px] text-slate-500">452 5th Avenue, Fl 28</div>
          </div>
          <div>
            <div className="font-semibold text-white">London</div>
            <div className="text-[11px] text-slate-500">100 Bishopsgate, Level 19</div>
          </div>
          <div>
            <div className="font-semibold text-white">Zurich</div>
            <div className="text-[11px] text-slate-500">Bahnhofstrasse 42</div>
          </div>
          <div>
            <div className="font-semibold text-white">Singapore</div>
            <div className="text-[11px] text-slate-500">Marina Bay Financial Tower 2</div>
          </div>
        </div>

        {/* Bottom Tier / Regulatory & Copyright */}
        <div className="pt-6 border-t border-emerald-950/60 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} Advicx Financial Advisory LLC. All rights reserved. Past performance is not indicative of future returns.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Advisory</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Form ADV Part 2A</a>
            <span>·</span>
            <button onClick={scrollToTop} className="hover:text-[#a3e635] transition-colors cursor-pointer">Back to top ↑</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
