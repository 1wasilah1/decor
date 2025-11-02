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

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <VisionMission />
        <Team />
        <WorkingProcess />
        <OurServices />
        <PopUpStore />
        <ContactForm />
        <Portfolio />
        <Instagram />
        <OnlineOrder />
        <Consultation />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
