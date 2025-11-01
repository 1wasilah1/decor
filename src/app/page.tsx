import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import Portfolio from '@/components/Portfolio';
import Instagram from '@/components/Instagram';
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
        <ContactForm />
        <Portfolio />
        <Instagram />
        <Consultation />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
