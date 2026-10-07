import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  Globe, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  Wrench, 
  Send, 
  Check, 
  Copy, 
  Printer, 
  Cpu, 
  ChevronRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

const contactHeroImg = 'https://i.ibb.co/GhPK6bm/002-Printer-Mainboard-and-Control-Board-Repairs.jpg';

interface ContactPageProps {
  onNavigateHome: () => void;
  onOpenConsultation?: (service?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ 
  onNavigateHome,
  onOpenConsultation 
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceRequested: 'Printer Mainboard and Control Board Repairs',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const contactDetails = {
    phone: '0207004123',
    whatsapp: '0207004123',
    email: 'nanadjan5050@gmail.com',
    website: 'www.modinnovations.net',
    websiteUrl: 'https://www.modinnovations.net'
  };

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

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

  const servicesList = [
    'Large-Format Printer Sales, Repair and Maintenance',
    'Printer Mainboard and Control Board Repairs',
    'DTF Printer Sales and Repairs',
    'UV Printer Sales and Repairs',
    'Fabric/Textile Printer Sales and Repairs',
    'Printer Accessories Sales',
    'Graphic Design and Branding',
    'Digital and Large-Format Printing',
    '3D Signage Fabrication and Installation',
    'General Technical & IT Consultation'
  ];

  return (
    <div className="pt-24 pb-20 bg-[#051512] min-h-screen text-slate-100">
      
      {/* 1. Page Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-emerald-950 overflow-hidden bg-gradient-to-b from-[#030e0c] to-[#051512]">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#84cc16]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6 uppercase tracking-wider">
            <button 
              onClick={onNavigateHome}
              className="hover:text-[#84cc16] transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#84cc16]">Contact Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-[#84cc16] text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>MOD Innovations Direct Contact</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-display">
                Get in Touch with <br className="hidden sm:inline" />
                <span className="text-[#EFDEBC]">MOD Innovations</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Connect directly with our team for professional IT and printing solutions, printer mainboard diagnostics, equipment sales, accessories, custom branding, digital printing, and 3D signage fabrication.
              </p>

              {/* Quick Action Badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`tel:${contactDetails.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/40 border border-emerald-700/50 text-xs font-semibold text-slate-200 hover:text-white hover:border-[#84cc16] transition-all cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#84cc16]" />
                  <span>Call: {contactDetails.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${contactDetails.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/40 border border-emerald-700/50 text-xs font-semibold text-slate-200 hover:text-white hover:border-[#84cc16] transition-all cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#84cc16]" />
                  <span>WhatsApp: {contactDetails.whatsapp}</span>
                </a>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/40 border border-emerald-700/50 text-xs font-semibold text-slate-200 hover:text-white hover:border-[#84cc16] transition-all cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5 text-[#84cc16]" />
                  <span>{contactDetails.email}</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual Banner */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-emerald-800/60 shadow-2xl bg-[#061814] group">
                <img 
                  src={contactHeroImg} 
                  alt="MOD Innovations Technical Support Desk" 
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051512] via-[#051512]/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#051512]/90 backdrop-blur-md border border-emerald-800/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#84cc16]">Professional Support</p>
                      <p className="text-sm font-bold text-white font-display">Prompt Technical Diagnostics & Service</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#84cc16] text-slate-950 flex items-center justify-center font-bold">
                      <Wrench className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Prominent Contact Channels Cards */}
      <section className="py-14 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#84cc16]">
            DIRECT REACH
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Fast, Direct Communication Channels
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Reach out via phone, WhatsApp, email, or our official website for immediate technical assistance and project estimates.
          </p>
        </div>

        {/* 4 Prominent Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Phone (High-Priority CTA) */}
          <div className="bg-[#061814] border-2 border-[#84cc16]/60 rounded-2xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between group hover:border-[#84cc16] transition-all">
            <div className="absolute top-0 right-0 bg-[#84cc16] text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              Primary
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-900/60 border border-emerald-700/50 text-[#84cc16] flex items-center justify-center mb-4 group-hover:bg-[#84cc16] group-hover:text-slate-950 transition-colors">
                <PhoneCall className="w-6 h-6 stroke-[2.2]" />
              </div>
              <span className="text-[11px] font-bold text-[#84cc16] uppercase tracking-wider block mb-1">
                Direct Line
              </span>
              <h3 className="text-lg font-bold text-white font-display mb-1">
                Phone Call
              </h3>
              <p className="text-xl font-extrabold text-[#EFDEBC] font-mono tracking-tight my-2">
                {contactDetails.phone}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Call directly for technical diagnostics, repair inquiries, and urgent equipment assistance.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-emerald-900/40">
              <a
                href={`tel:${contactDetails.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-[50px] bg-[#84cc16] hover:bg-[#bef264] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-lime-500/10 active:scale-98"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
              <button
                onClick={() => handleCopy(contactDetails.phone, 'phone')}
                className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-[50px] bg-emerald-950/70 border border-emerald-800/50 hover:border-slate-400 text-slate-300 text-xs transition-colors cursor-pointer"
              >
                {copiedField === 'phone' ? (
                  <>
                    <Check className="w-3 h-3 text-[#84cc16]" />
                    <span className="text-[#84cc16] font-semibold">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-slate-400" />
                    <span>Copy Phone Number</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: WhatsApp (High-Priority CTA) */}
          <div className="bg-[#061814] border-2 border-emerald-700/60 rounded-2xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between group hover:border-[#84cc16] transition-all">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              Instant Chat
            </div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-900/60 border border-emerald-700/50 text-[#84cc16] flex items-center justify-center mb-4 group-hover:bg-[#84cc16] group-hover:text-slate-950 transition-colors">
                <MessageSquare className="w-6 h-6 stroke-[2.2]" />
              </div>
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                Direct Messaging
              </span>
              <h3 className="text-lg font-bold text-white font-display mb-1">
                WhatsApp
              </h3>
              <p className="text-xl font-extrabold text-[#EFDEBC] font-mono tracking-tight my-2">
                {contactDetails.whatsapp}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Send photos of faulty mainboards or request instant quotes on printers, parts, and signage.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-emerald-900/40">
              <a
                href={`https://wa.me/${contactDetails.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-[50px] bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-emerald-500/10 active:scale-98"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
              <button
                onClick={() => handleCopy(contactDetails.whatsapp, 'whatsapp')}
                className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-[50px] bg-emerald-950/70 border border-emerald-800/50 hover:border-slate-400 text-slate-300 text-xs transition-colors cursor-pointer"
              >
                {copiedField === 'whatsapp' ? (
                  <>
                    <Check className="w-3 h-3 text-[#84cc16]" />
                    <span className="text-[#84cc16] font-semibold">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-slate-400" />
                    <span>Copy WhatsApp Number</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-[#061814] border border-emerald-900/70 rounded-2xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between group hover:border-emerald-700 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-900/60 border border-emerald-700/50 text-[#84cc16] flex items-center justify-center mb-4 group-hover:bg-[#84cc16] group-hover:text-slate-950 transition-colors">
                <Mail className="w-6 h-6 stroke-[2.2]" />
              </div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Official Email
              </span>
              <h3 className="text-lg font-bold text-white font-display mb-1">
                Email Dispatch
              </h3>
              <p className="text-sm font-semibold text-[#EFDEBC] font-mono break-all my-2">
                {contactDetails.email}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Submit formal service RFPs, artwork files, branding briefs, or hardware maintenance requests.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-emerald-900/40">
              <a
                href={`mailto:${contactDetails.email}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-[50px] bg-emerald-900/60 hover:bg-emerald-800 border border-emerald-700/60 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#84cc16]" />
                <span>Send Email</span>
              </a>
              <button
                onClick={() => handleCopy(contactDetails.email, 'email')}
                className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-[50px] bg-emerald-950/70 border border-emerald-800/50 hover:border-slate-400 text-slate-300 text-xs transition-colors cursor-pointer"
              >
                {copiedField === 'email' ? (
                  <>
                    <Check className="w-3 h-3 text-[#84cc16]" />
                    <span className="text-[#84cc16] font-semibold">Copied Email</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-slate-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 4: Official Website */}
          <div className="bg-[#061814] border border-emerald-900/70 rounded-2xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between group hover:border-emerald-700 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-900/60 border border-emerald-700/50 text-[#84cc16] flex items-center justify-center mb-4 group-hover:bg-[#84cc16] group-hover:text-slate-950 transition-colors">
                <Globe className="w-6 h-6 stroke-[2.2]" />
              </div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Online Portal
              </span>
              <h3 className="text-lg font-bold text-white font-display mb-1">
                Official Website
              </h3>
              <p className="text-base font-bold text-[#EFDEBC] font-mono break-all my-2">
                {contactDetails.website}
              </p>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Explore our full suite of professional IT solutions, printer services, accessories, and signage.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-emerald-900/40">
              <a
                href={contactDetails.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-[50px] bg-emerald-900/60 hover:bg-emerald-800 border border-emerald-700/60 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-[#84cc16]" />
                <span>Visit Portal</span>
              </a>
              <button
                onClick={() => handleCopy(contactDetails.website, 'website')}
                className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-[50px] bg-emerald-950/70 border border-emerald-800/50 hover:border-slate-400 text-slate-300 text-xs transition-colors cursor-pointer"
              >
                {copiedField === 'website' ? (
                  <>
                    <Check className="w-3 h-3 text-[#84cc16]" />
                    <span className="text-[#84cc16] font-semibold">Copied URL</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-slate-400" />
                    <span>Copy Web Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Main Form & Service Selection Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Context & Overview */}
          <div className="lg:col-span-5 bg-[#061814] border border-emerald-900/60 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#84cc16]">
                  Service & Technical Inquiries
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  Send a Direct Request to Our Specialists
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Fill in the form to request diagnostics, maintenance quotes, equipment pricing, or design consultations. Our technical team handles all inquiries promptly.
                </p>
              </div>

              {/* Service Capabilities Bullet Points */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Specialized Areas Handled:
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#84cc16] shrink-0 mt-0.5" />
                    <span>Large-Format, DTF, UV & Fabric/Textile Printer Maintenance</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#84cc16] shrink-0 mt-0.5" />
                    <span>Component-level Mainboard & Control Board Diagnosis</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#84cc16] shrink-0 mt-0.5" />
                    <span>Original Printer Accessories & Spare Parts Supply</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#84cc16] shrink-0 mt-0.5" />
                    <span>Commercial Graphic Design, Branding & Digital Large-Format Print</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#84cc16] shrink-0 mt-0.5" />
                    <span>Custom 3D Signage Fabrication & Installation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800/50 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-[#84cc16]" />
                <span>Quality & Technical Reliability</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                MOD Innovations is dedicated to delivering professional results, reliable hardware diagnostics, and quality printing solutions tailored to your operational needs.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Request Form */}
          <div className="lg:col-span-7 bg-[#061814] border border-emerald-900/60 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-5 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#84cc16] text-slate-950 mx-auto flex items-center justify-center shadow-xl shadow-lime-500/20">
                  <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your request regarding <span className="text-[#84cc16] font-semibold">{formData.serviceRequested}</span> has been logged.
                  </p>
                </div>

                <div className="bg-emerald-950/60 border border-emerald-800/60 rounded-2xl p-5 text-left max-w-md mx-auto space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Service Category:</span>
                    <span className="text-white font-medium text-right">{formData.serviceRequested}</span>
                  </div>
                  {formData.email && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">Contact Email:</span>
                      <span className="text-white font-medium">{formData.email}</span>
                    </div>
                  )}
                  {formData.phone && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">Phone / WhatsApp:</span>
                      <span className="text-white font-medium">{formData.phone}</span>
                    </div>
                  )}
                  <div className="flex justify-between pt-1 border-t border-emerald-900/40">
                    <span className="text-slate-500">Official Channel:</span>
                    <span className="text-[#84cc16] font-semibold">{contactDetails.email}</span>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-[50px] text-xs uppercase tracking-wider font-bold text-slate-950 bg-[#84cc16] hover:bg-[#bef264] transition-all cursor-pointer active:scale-95"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    Contact & Request Form
                  </h3>
                  <p className="text-xs text-slate-400">
                    Complete the details below to receive expert assistance from MOD Innovations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Full Name / Business <span className="text-[#84cc16]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Samuel Asante"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#04110e] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84cc16] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Email Address <span className="text-[#84cc16]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. client@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#04110e] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84cc16] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone / WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Phone or WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 0207004123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#04110e] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84cc16] transition-colors"
                    />
                  </div>

                  {/* Service Needed Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Service Category <span className="text-[#84cc16]">*</span>
                    </label>
                    <select
                      value={formData.serviceRequested}
                      onChange={(e) => setFormData({ ...formData, serviceRequested: e.target.value })}
                      className="w-full bg-[#04110e] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#84cc16] transition-colors cursor-pointer"
                    >
                      {servicesList.map((service, idx) => (
                        <option key={idx} value={service} className="bg-[#051512] text-white">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 block">
                    Project or Repair Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your equipment model, issue, printing requirements, or signage specs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#04110e] border border-emerald-900/80 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#84cc16] transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-[50px] bg-[#84cc16] hover:bg-[#bef264] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xl shadow-lime-500/10 cursor-pointer flex items-center justify-center gap-2 active:scale-98"
                  >
                    <span>Send Message & Request Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
