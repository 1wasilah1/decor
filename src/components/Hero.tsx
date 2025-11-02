import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image.png"
          alt="Exhibition Design"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Designer and Contractor for Exhibitions and Interior
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Built with Precision, Color, and Speed
        </p>
        <button className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          Discover Now
        </button>
      </div>
    </section>
  );
}