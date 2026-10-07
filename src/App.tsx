/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { Footer } from './components/Footer';
import { ServiceItem } from './types';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedConsultationService, setSelectedConsultationService] = useState<string>('WealthWise Consulting');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

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
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Content Layout matching Reference Hierarchy */}
      <main>
        {/* Section 1: Hero with Advisor Portrait */}
        <HeroSection 
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Section 2: About Advisory / Innovative Solutions */}
        <AboutSection 
          onOpenConsultation={() => handleOpenConsultation('Comprehensive Advisory Retainer')}
        />

        {/* Section 3: Finance Services Matrix */}
        <ServicesSection 
          onSelectService={handleSelectServiceCard}
          onOpenConsultation={(service) => handleOpenConsultation(service)}
        />
      </main>

      {/* Comprehensive Corporate Footer */}
      <Footer 
        onOpenConsultation={() => handleOpenConsultation()}
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
