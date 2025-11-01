import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920)'}}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Exhibition/Store<br />
            Designer &Contractor<br />
            #1 Indonesia
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Leading the Way in Exhibition Construction & Design Across South East Asia.
          </p>
          <Link href="#about" className="inline-block px-8 py-4 bg-white text-black font-medium rounded hover:bg-gray-100 transition">
            Discover Now
          </Link>
        </div>
      </div>
    </section>
  );
}