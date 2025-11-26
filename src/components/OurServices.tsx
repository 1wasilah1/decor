'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function OurServices() {
  const { t } = useLanguage();

  const [showAll, setShowAll] = useState(false);

  const services = [
    { 
      title: 'Exhibition Booth Design and Build',
      desc: 'Maximize your presence. We create custom, attention-grabbing exhibition booths from concept to construction. Specializing in strategic layout and high-quality materials, we ensure your brand message is delivered effectively. Our seamless, end-to-end service guarantees a stress-free experience and a successful, impactful presence at any trade show. Expert craftsmanship, unforgettable results.',
      media: '/service/Exhibition.jpeg',
      type: 'image'
    },
    { 
      title: 'Interior Design and Build',
      desc: 'Transform spaces into experiences. We provide comprehensive interior design and build services for commercial, retail, and office environments. Our approach blends innovative aesthetics with practical functionality, ensuring every space is optimized for flow and purpose. From initial sketches to final fit-out, we deliver premium quality and timely project completion. Design excellence, built with precision.',
      media: '/service/Interior.jpeg',
      type: 'image'
    },
    { 
      title: 'Pop-up Store Design and Build',
      desc: 'Launch with impact. Capture fleeting attention with a dynamic and highly marketable pop-up store. We design and construct temporary retail spaces that perfectly embody your brand\'s style and maximize sales opportunities. Our focus is on quick turnaround, creative use of space, and durable, eye-catching fabrication. Fast, functional, and fabulous temporary retail solutions.',
      media: '/service/Rental-Equipment.jpeg',
      type: 'image'
    },
    { 
      title: 'Backdrop Rental',
      desc: 'Professional visuals, instantly. Choose from our extensive inventory of high-resolution, versatile backdrops perfect for press conferences, photo booths, or corporate events. We offer easy setup and takedown, ensuring a polished and professional look with minimal effort. Our quality guarantee means crisp graphics and a wrinkle-free presentation every time. Elevate your event aesthetics effortlessly.',
      media: '/service/Rental-Backdrop.jpeg',
      type: 'image'
    },
    { 
      title: 'Event Equipment Rental',
      desc: 'Your one-stop event solution. We offer a wide range of essential, high-quality event equipment, including lighting, sound systems, cctv, furniture, and temporary walling. All items are meticulously maintained and delivered with reliable technical support. Focus on your guests while we ensure your event runs smoothly and looks flawless. Reliable gear for a perfect event execution.',
      media: '/service/Backdrop-Photobooth.jpeg',
      type: 'image'
    },
    { 
      title: 'System Maxima/R8 Rental',
      desc: 'Versatile modular structures. Rent the highly adaptable System Maxima/R8 for professional-grade shell schemes, gallery partitioning, and custom displays. This modular system offers exceptional flexibility, rapid assembly, and a clean, sophisticated finish. Ideal for large-scale exhibitions and complex spatial requirements. The foundation for superior event structuring.',
      media: '/service/Special-System.jpeg',
      type: 'image'
    },
    { 
      title: 'Stage Rental',
      desc: 'Set the scene for success. We provide safe, sturdy, and visually appealing stages for all event types, from concerts and speeches to product launches. Our stages are customizable in size and height, and we include professional installation and skirting. We prioritize safety and flawless presentation. Solid construction for an elevated performance.',
      media: '/service/Stage-Rental.jpeg',
      type: 'image'
    },
    { 
      title: 'Custom CNC Cutting Service',
      desc: 'Precision cutting for any project. Utilize our advanced CNC technology for highly accurate and intricate cutting of various materials, including wood, acrylic, and foam. Perfect for signage, decorative panels, complex exhibition components, or unique prototypes. We deliver exceptional precision and fast, reliable service for your bespoke fabrication needs. Accuracy, speed, and complex design capabilities.',
      media: '/service/Custom-CNC-Cutting.mp4',
      type: 'video'
    },
    { 
      title: 'Custom Standing Character Maker',
      desc: 'Bring your mascot to life! We design and fabricate stunning, large-format 3D standing characters and figures. Ideal for retail displays, event photo opportunities, and brand promotions. Using durable, lightweight materials, we capture your design with high-quality paint finishes and structural integrity. High-impact, photogenic branding tools.',
      media: '/service/Custom-Standing-Character.jpeg',
      type: 'image'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center font-display">
          OUR SERVICES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: 'smooth' });
                }
                
                // Dispatch custom event to filter portfolio
                window.dispatchEvent(new CustomEvent('filterPortfolio', { 
                  detail: { serviceTitle: service.title } 
                }));
              }}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-gray-400 transition-all bg-white hover:bg-gray-50 cursor-pointer"
            >
              <p className="text-gray-800 font-medium text-center">{service.title}</p>
            </button>
          ))}
        </div>
        
        <div className="flex justify-end mt-8">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="text-gray-600 hover:text-gray-900 font-medium flex items-center space-x-2"
          >
            <span>{showAll ? 'Show Less' : 'Show More'}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showAll ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"} />
            </svg>
          </button>
        </div>

        {showAll && (
          <div className="mt-12 space-y-12">
            {services.map((service, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
                <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                  {service.type === 'video' ? (
                    <video 
                      className="w-full h-64 object-cover rounded-lg" 
                      controls 
                      muted
                    >
                      <source src={service.media} type="video/mp4" />
                    </video>
                  ) : (
                    <img 
                      src={service.media} 
                      alt={service.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}


      </div>
    </section>
  );
}
