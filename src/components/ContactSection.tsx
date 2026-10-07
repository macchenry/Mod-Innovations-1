import React, { useState } from 'react';
import { PhoneCall, Mail, MessageSquare, Globe, CheckCircle2, ArrowRight, Wrench, Send } from 'lucide-react';

interface ContactSectionProps {
  onSuccess?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceRequested: 'Printer Mainboard and Control Board Repairs',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && (formData.email || formData.phone)) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceRequested: 'Printer Mainboard and Control Board Repairs',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-28 bg-[#051512] relative overflow-hidden border-t border-emerald-950">
      {/* Subtle radial glow */}
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-[#84cc16]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-16 space-y-3">
          <div className="inline-block">
            <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-slate-200 font-display">
              GET IN TOUCH · CONTACT MOD INNOVATIONS
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight font-display break-words">
            Start Your Project or Request Technical Service
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            Reach out to MOD Innovations for prompt assistance with printer repairs, hardware maintenance, equipment sales, custom branding, digital printing, and 3D signage.
          </p>
        </div>

        {/* Split Contact Form & Direct Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Direct Contact Info & Quick Value Props */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 sm:space-y-8 bg-[#04110e] border border-emerald-900/50 rounded-2xl p-5 sm:p-7 md:p-9 shadow-2xl">
            <div className="space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#84cc16]">
                  Direct Communication
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  We&apos;re Here to Help You Keep Printing
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Whether you have an urgent mainboard repair, need printer parts, or want to produce custom merchandise and commercial signage, our team is ready to assist.
                </p>
              </div>

              {/* Contact Channels */}
              <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                <a 
                  href="tel:0207004123" 
                  className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-emerald-950/50 border border-emerald-900/60 hover:border-[#84cc16]/50 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-emerald-900/80 text-[#84cc16] group-hover:bg-[#84cc16] group-hover:text-slate-950 transition-colors flex items-center justify-center shrink-0">
                    <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Phone & Call Desk</span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#EFDEBC] transition-colors truncate block">0207004123</span>
                  </div>
                </a>

                <a 
                  href="https://wa.me/0207004123" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-emerald-950/50 border border-emerald-900/60 hover:border-[#84cc16]/50 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-emerald-900/80 text-[#84cc16] group-hover:bg-[#84cc16] group-hover:text-slate-950 transition-colors flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">WhatsApp Chat</span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#EFDEBC] transition-colors truncate block">0207004123</span>
                  </div>
                </a>

                <a 
                  href="mailto:nanadjan5050@gmail.com" 
                  className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-emerald-950/50 border border-emerald-900/60 hover:border-[#84cc16]/50 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-emerald-900/80 text-[#84cc16] group-hover:bg-[#84cc16] group-hover:text-slate-950 transition-colors flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Email Inquiries</span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#EFDEBC] transition-colors truncate block">nanadjan5050@gmail.com</span>
                  </div>
                </a>

                <a 
                  href="https://www.modinnovations.net" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-emerald-950/50 border border-emerald-900/60 hover:border-[#84cc16]/50 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-emerald-900/80 text-[#84cc16] group-hover:bg-[#84cc16] group-hover:text-slate-950 transition-colors flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">Official Website</span>
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#EFDEBC] transition-colors truncate block">www.modinnovations.net</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 border-t border-emerald-900/40 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#84cc16] shrink-0" />
                <span>Responsive technical support & custom project estimates</span>
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-[#04110e] border border-emerald-900/50 rounded-2xl p-5 sm:p-7 md:p-9 shadow-2xl flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#84cc16] text-slate-950 mx-auto flex items-center justify-center shadow-xl shadow-lime-500/20">
                  <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white font-display">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your inquiry regarding <span className="text-[#84cc16] font-semibold">{formData.serviceRequested}</span> has been received. Our team will contact you shortly.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-[50px] text-xs uppercase tracking-wider font-bold text-slate-950 bg-[#84cc16] hover:bg-[#bef264] transition-all cursor-pointer active:scale-95"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1 mb-2">
                  <h3 className="text-xl font-bold text-white font-display">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-slate-400">
                    Let us know what printing equipment, hardware repair, or branding service you need.
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 block">
                    Full Name / Business <span className="text-[#84cc16]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name or company"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#061814] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84cc16] transition-colors"
                  />
                </div>

                {/* Grid: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Email Address <span className="text-[#84cc16]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#061814] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84cc16] transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 0207004123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#061814] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84cc16] transition-colors"
                    />
                  </div>
                </div>

                {/* Service Request Selection */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 block">
                    Service of Interest <span className="text-[#84cc16]">*</span>
                  </label>
                  <select
                    value={formData.serviceRequested}
                    onChange={(e) => setFormData({ ...formData, serviceRequested: e.target.value })}
                    className="w-full bg-[#061814] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#84cc16] transition-colors cursor-pointer"
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
                    <option value="General IT & Printing Solutions">General IT & Printing Solutions</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 block">
                    How Can We Help You?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your printer issues, required parts, branding project, or signage requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#061814] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84cc16] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-[50px] bg-[#84cc16] hover:bg-[#bef264] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-lime-500/10 cursor-pointer flex items-center justify-center gap-2 active:scale-98"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
