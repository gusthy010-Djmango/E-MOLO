/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { getWitaStatus, OperatingStatus } from './utils/operatingHours';
import { Header } from './components/Header';
import { ServiceGrid } from './components/ServiceGrid';
import { ApplicationsSection } from './components/ApplicationsSection';
import { AnnouncementSlider } from './components/AnnouncementSlider';
import { FaqAccordion } from './components/FaqAccordion';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ConsultationModal } from './components/ConsultationModal';
import { ComplaintModal } from './components/ComplaintModal';
import { RegulationModal } from './components/RegulationModal';
import { StandaloneHtmlModal } from './components/StandaloneHtmlModal';

export default function App() {
  const [status, setStatus] = useState<OperatingStatus>(getWitaStatus());
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isComplaintOpen, setIsComplaintOpen] = useState(false);
  const [isRegulationsOpen, setIsRegulationsOpen] = useState(false);
  const [isHtmlModalOpen, setIsHtmlModalOpen] = useState(false);

  // Update status every 30 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getWitaStatus());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  const scrollToApps = () => {
    const el = document.getElementById('aplikasi-pbj');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFaq = () => {
    const el = document.getElementById('faq-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-200 selection:text-slate-900">
      {/* 1. Header & Hero Section */}
      <Header
        status={status}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenHtmlModal={() => setIsHtmlModalOpen(true)}
        onOpenRegulations={() => setIsRegulationsOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Kartu Akses Layanan Utama */}
        <ServiceGrid
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onOpenComplaint={() => setIsComplaintOpen(true)}
          onOpenRegulations={() => setIsRegulationsOpen(true)}
          onScrollToApps={scrollToApps}
          onScrollToFaq={scrollToFaq}
        />

        {/* 3. Section Pengumuman & Infografis Singkat */}
        <AnnouncementSlider />

        {/* 4. Aplikasi PBJ Terintegrasi */}
        <ApplicationsSection />

        {/* 5. FAQ Pengadaan (Accordion Interaktif) */}
        <FaqAccordion onOpenConsultation={() => setIsConsultationOpen(true)} />
      </main>

      {/* 6. Footer */}
      <Footer status={status} />

      {/* 7. Floating Action Button (FAB) WhatsApp */}
      <FloatingWhatsApp onOpenFullModal={() => setIsConsultationOpen(true)} />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <ComplaintModal
        isOpen={isComplaintOpen}
        onClose={() => setIsComplaintOpen(false)}
      />

      <RegulationModal
        isOpen={isRegulationsOpen}
        onClose={() => setIsRegulationsOpen(false)}
      />

      <StandaloneHtmlModal
        isOpen={isHtmlModalOpen}
        onClose={() => setIsHtmlModalOpen(false)}
      />
    </div>
  );
}
