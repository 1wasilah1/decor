'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import VisionMission from '@/components/VisionMission';
import Team from '@/components/Team';
import WorkingProcess from '@/components/WorkingProcess';
import OurServices from '@/components/OurServices';
import PopUpStore from '@/components/PopUpStore';
import ContactForm from '@/components/ContactForm';
import Portfolio from '@/components/Portfolio';
import Instagram from '@/components/Instagram';
import OnlineOrder from '@/components/OnlineOrder';
import Consultation from '@/components/Consultation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const components: any = {
  header: Header,
  hero: Hero,
  services: Services,
  about: About,
  visionMission: VisionMission,
  team: Team,
  workingProcess: WorkingProcess,
  ourServices: OurServices,
  popUpStore: PopUpStore,
  contactForm: ContactForm,
  portfolio: Portfolio,
  instagram: Instagram,
  onlineOrder: OnlineOrder,
  consultation: Consultation,
  footer: Footer,
  whatsappButton: WhatsAppButton
};

export default function Home() {
  const [sections, setSections] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:8700/api/sections-public')
      .then(res => res.json())
      .then(data => setSections(data.sections.filter((s: any) => s.visible).sort((a: any, b: any) => a.order - b.order)))
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen">
      {sections.map(section => {
        const Component = components[section.id];
        return Component ? <Component key={section.id} /> : null;
      })}
    </div>
  );
}
