'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function OurServices() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    { title: t('service1'), desc: 'Maximize your presence. We create custom, attention-grabbing exhibition booths from concept to construction. Specializing in strategic layout and high-quality materials, we ensure your brand message is delivered effectively. Our seamless, end-to-end service guarantees a stress-free experience and a successful, impactful presence at any trade show. Expert craftsmanship, unforgettable results.' },
    { title: t('service2'), desc: 'Transform spaces into experiences. We provide comprehensive interior design and build services for commercial, retail, and office environments. Our approach blends innovative aesthetics with practical functionality, ensuring every space is optimized for flow and purpose. From initial sketches to final fit-out, we deliver premium quality and timely project completion. Design excellence, built with precision.' },
    { title: t('service3'), desc: 'Launch with impact. Capture fleeting attention with a dynamic and highly marketable pop-up store. We design and construct temporary retail spaces that perfectly embody your brand\'s style and maximize sales opportunities. Our focus is on quick turnaround, creative use of space, and durable, eye-catching fabrication. Fast, functional, and fabulous temporary retail solutions.' },
    { title: t('service4'), desc: 'Professional visuals, instantly. Choose from our extensive inventory of high-resolution, versatile backdrops perfect for press conferences, photo booths, or corporate events. We offer easy setup and takedown, ensuring a polished and professional look with minimal effort. Our quality guarantee means crisp graphics and a wrinkle-free presentation every time. Elevate your event aesthetics effortlessly.' },
    { title: t('service5'), desc: 'Your one-stop event solution. We offer a wide range of essential, high-quality event equipment, including lighting, sound systems, cctv, furniture, and temporary walling. All items are meticulously maintained and delivered with reliable technical support. Focus on your guests while we ensure your event runs smoothly and looks flawless. Reliable gear for a perfect event execution.' },
    { title: t('service6'), desc: 'Versatile modular structures. Rent the highly adaptable System Maxima/R8 for professional-grade shell schemes, gallery partitioning, and custom displays. This modular system offers exceptional flexibility, rapid assembly, and a clean, sophisticated finish. Ideal for large-scale exhibitions and complex spatial requirements. The foundation for superior event structuring.' },
    { title: t('service7'), desc: 'Set the scene for success. We provide safe, sturdy, and visually appealing stages for all event types, from concerts and speeches to product launches. Our stages are customizable in size and height, and we include professional installation and skirting. We prioritize safety and flawless presentation. Solid construction for an elevated performance.' },
    { title: t('service8'), desc: 'Precision cutting for any project. Utilize our advanced CNC technology for highly accurate and intricate cutting of various materials, including wood, acrylic, and foam. Perfect for signage, decorative panels, complex exhibition components, or unique prototypes. We deliver exceptional precision and fast, reliable service for your bespoke fabrication needs. Accuracy, speed, and complex design capabilities.' },
    { title: t('service9'), desc: 'Bring your mascot to life! We design and fabricate stunning, large-format 3D standing characters and figures. Ideal for retail displays, event photo opportunities, and brand promotions. Using durable, lightweight materials, we capture your design with high-quality paint finishes and structural integrity. High-impact, photogenic branding tools.' }
  ];

  return (
    <section id="our-services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center font-display">
          {t('ourServices')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setSelectedService(index)}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-gray-400 transition-all bg-white hover:bg-gray-50 cursor-pointer"
            >
              <p className="text-gray-800 font-medium text-center">{service.title}</p>
            </button>
          ))}
        </div>

        {selectedService !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedService(null)}>
            <div className="bg-white rounded-lg max-w-4xl w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedService(null)} className="absolute top-4 right-4 text-4xl text-gray-600 hover:text-gray-900">
                &times;
              </button>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{services[selectedService].title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{services[selectedService].desc}</p>
            </div>
          </div>
        )}
      </div>
      <div className="border-b border-gray-200 mt-12"></div>
    </section>
  );
}
