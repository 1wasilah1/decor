'use client';

import Header from '@/components/Header';
import VisionMission from '@/components/VisionMission';
import WorkingProcess from '@/components/WorkingProcess';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <VisionMission />
      <WorkingProcess />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}