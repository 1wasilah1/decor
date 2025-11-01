export default function ServicesSection() {
  const services = [
    {
      title: 'Whole Exhibition',
      description: 'Comprehensive solutions from concept to completion. Stunning designs that captivate and engage. Seamless project management for a hassle-free experience.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800'
    },
    {
      title: 'Visual Merchandising',
      description: 'Attract and engage shoppers effortlessly. Customized to highlight your brand\'s unique appeal.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800'
    },
    {
      title: 'Commercial',
      description: 'Drive business success with our innovative commercial spaces. Designed for functionality and aesthetics.',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800'
    },
    {
      title: 'Booth Production',
      description: 'Expert craftsmanship for standout booths. Quality construction that meets your needs.',
      image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800'
    },
    {
      title: 'Back Drop',
      description: 'Transform spaces with stunning backdrops. Perfect for events and exhibitions.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800'
    },
    {
      title: 'Stage',
      description: 'Elevate your event with our premium stage designs. Built for impact and engagement.',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">We Create Immersive Spaces</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Elevate your brand presence with our premium booth and exhibition design services. Our expert team ensures a seamless, customized experience that captures your brand's essence and engages your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="relative h-96 overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${service.image})`}} />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative h-full p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {services.slice(3, 6).map((service, index) => (
            <div key={index} className="relative h-96 overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${service.image})`}} />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative h-full p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}