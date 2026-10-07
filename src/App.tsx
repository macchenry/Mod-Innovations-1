/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ApproachSection } from './components/ApproachSection';
import { ContactSection } from './components/ContactSection';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { ContactPage } from './components/ContactPage';
import { SitemapPage } from './components/SitemapPage';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { Footer } from './components/Footer';
import { ServiceItem } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services' | 'contact' | 'sitemap'>('home');
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedConsultationService, setSelectedConsultationService] = useState<string>('Printer Mainboard and Control Board Repairs');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#/about' || hash === '#about-page') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/services' || hash === '#services-page') {
        setCurrentPage('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/contact' || hash === '#contact-page') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/sitemap' || hash === '#sitemap-page') {
        setCurrentPage('sitemap');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/' || hash === '' || hash === '#home') {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: 'home' | 'about' | 'services' | 'contact' | 'sitemap', sectionId?: string) => {
    setCurrentPage(page);
    if (page === 'about') {
      window.location.hash = '/about';
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (page === 'services') {
      window.location.hash = '/services';
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (page === 'contact') {
      window.location.hash = '/contact';
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (page === 'sitemap') {
      window.location.hash = '/sitemap';
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.location.hash = '/';
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setSelectedConsultationService(serviceName);
    }
    setConsultationOpen(true);
  };

  const handleSelectServiceCard = (service: ServiceItem) => {
    setSelectedServiceDetail(service);
  };

  return (
    <div className="min-h-screen bg-[#051512] text-slate-100 selection:bg-[#a3e635] selection:text-slate-950 font-sans antialiased">
      {/* Fixed Navigation Header */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Dynamic Main View */}
      <main>
        {currentPage === 'home' && (
          <>
            {/* Section 1: Hero Interactive Service Slider (Preserved Exactly) */}
            <HeroSection 
              onOpenConsultation={(serviceName) => handleOpenConsultation(serviceName || 'Printer Mainboard and Control Board Repairs')}
            />

            {/* Section 2: About MOD Innovations / Introduction */}
            <AboutSection 
              onOpenConsultation={(service) => handleOpenConsultation(service || 'General IT & Printing Inquiry')}
            />

            {/* Section 3: What We Specialize In / Our Expertise (9 Services) */}
            <ServicesSection 
              onSelectService={handleSelectServiceCard}
              onOpenConsultation={(service) => handleOpenConsultation(service)}
            />

            {/* Section 4: Why Choose MOD Innovations / Our Approach (4 Pillars) */}
            <ApproachSection 
              onOpenConsultation={(service) => handleOpenConsultation(service)}
            />

            {/* Section 5: Strong Contact / CTA Section */}
            <ContactSection />
          </>
        )}

        {currentPage === 'about' && (
          /* Dedicated MOD Innovations About Us Page */
          <AboutPage 
            onNavigateHome={() => handleNavigate('home')}
            onOpenConsultation={(service) => handleOpenConsultation(service)}
            onSelectService={handleSelectServiceCard}
          />
        )}

        {currentPage === 'services' && (
          /* Dedicated MOD Innovations Services Page */
          <ServicesPage 
            onNavigateHome={() => handleNavigate('home')}
            onOpenConsultation={(service) => handleOpenConsultation(service)}
            onSelectService={handleSelectServiceCard}
          />
        )}

        {currentPage === 'contact' && (
          /* Dedicated MOD Innovations Contact Us Page */
          <ContactPage 
            onNavigateHome={() => handleNavigate('home')}
            onOpenConsultation={(service) => handleOpenConsultation(service)}
          />
        )}

        {currentPage === 'sitemap' && (
          /* Dedicated MOD Innovations Sitemap Page */
          <SitemapPage 
            onNavigateHome={() => handleNavigate('home')}
            onNavigatePage={handleNavigate}
            onOpenConsultation={(service) => handleOpenConsultation(service)}
          />
        )}
      </main>

      {/* Comprehensive MOD Innovations Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenConsultation={(service) => handleOpenConsultation(service)}
      />

      {/* Interactive Modals */}
      <ConsultationModal 
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialService={selectedConsultationService}
      />

      <ServiceDetailModal 
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceDetail(null)}
        onBookService={(serviceName) => {
          setSelectedServiceDetail(null);
          handleOpenConsultation(serviceName);
        }}
      />
    </div>
  );
}
