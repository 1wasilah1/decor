import Image from 'next/image';

const services = [
  {
    title: "Whole Exhibition",
    description: "Comprehensive solutions from concept to completion. Stunning designs that captivate and engage. Seamless project management for a hassle-free experience.",
    image: "/images/service1.png"
  },
  {
    title: "Visual Merchandising",
    description: "Attract and engage shoppers effortlessly. Customized to highlight your brand's unique appeal.",
    image: "/images/service2.png"
  },
  {
    title: "Commercial",
    description: "Drive business success with our innovative commercial spaces. Designed for functionality and aesthetics.",
    image: "/images/service3.png"
  }
];

export default function ContactForm() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-display">
            We Create Immersive Spaces
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto font-sans leading-relaxed">
            Elevate your brand presence with our premium booth and exhibition design services. Our expert team ensures a seamless, customized experience that captures your brand's essence and engages your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <div className="relative h-96">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-90">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}