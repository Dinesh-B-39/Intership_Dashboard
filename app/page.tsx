'use client';

import { useState } from 'react';
import Header from '@/src/components/Header';
import Hero from '@/src/components/Hero';
import IntroEmpathy from '@/src/components/IntroEmpathy';
import WhoIHelp from '@/src/components/WhoIHelp';
import EditorialBreather from '@/src/components/EditorialBreather';
import AreasOfFocus from '@/src/components/AreasOfFocus';
import HowIWork from '@/src/components/HowIWork';
import Modalities from '@/src/components/Modalities';
import FAQ from '@/src/components/FAQ';
import OurOffice from '@/src/components/OurOffice';
import CallToAction from '@/src/components/CallToAction';
import Footer from '@/src/components/Footer';
import ConsultationModal from '@/src/components/ConsultationModal';

export default function HomePage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1A2420]">
      {/* 1. Header / Navigation */}
      <Header onOpenConsultation={handleOpenConsultation} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* 3. Intro / Empathy Section */}
        <IntroEmpathy />

        {/* 4. Who I Help (3-Column Cards) */}
        <WhoIHelp onOpenConsultation={handleOpenConsultation} />

        {/* 5. Editorial Quote / Breathing Section */}
        <EditorialBreather />

        {/* 6. Primary Services & Areas of Focus */}
        <AreasOfFocus onOpenConsultation={handleOpenConsultation} />

        {/* 7. How I Work & Transition Banner */}
        <HowIWork onOpenConsultation={handleOpenConsultation} />

        {/* 8. Therapeutic Approaches / Modalities */}
        <Modalities onOpenConsultation={handleOpenConsultation} />

        {/* 9. Frequently Asked Questions */}
        <FAQ onOpenConsultation={handleOpenConsultation} />

        {/* 10. 'Our Office' Section */}
        <OurOffice onOpenConsultation={handleOpenConsultation} />

        {/* 10. Call to Action Banner */}
        <CallToAction onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* 11. Contact / Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />
    </div>
  );
}
