'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

export default function Hero() {
  const { t, language } = useLanguage();
  const [settings, setSettings] = useState<any>(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = ['/videos/hero.mp4', '/videos/hero1.mp4', '/videos/hero2.mp4'];

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8700/api'}/section-settings/hero`)
      .then(res => res.json())
      .then(data => setSettings(data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="h-screen bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
        {/* Left Content */}
        <div className="flex items-center justify-center px-8 lg:px-16 text-white relative">
          {/* Company Names */}
          <div className="absolute top-8 left-8 text-sm">
            <div className="text-white opacity-80">PT. Multi Tritama Persada</div>
            <div className="text-blue-400 font-semibold">PT. Blue Sky Indonusa</div>
          </div>



          {/* Arrow and Addition Text */}
          <div className="absolute top-20 left-32 flex items-center text-white">
            <svg className="w-16 h-8 mr-4" viewBox="0 0 64 32" fill="none">
              <path d="M2 16H62M62 16L46 2M62 16L46 30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-lg font-bold">TAMBAHAN</span>
          </div>

          {/* Main Content */}
          <div className="max-w-xl mt-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Designer and Contractor for Exhibitions and Interior
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Built with Precision, Color, and Speed
            </p>
            <button className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
              Discover Now
            </button>
          </div>


        </div>

        {/* Right Content - Video */}
        <div className="relative h-full">
          {videos.map((video, index) => (
            <video
              key={video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              style={{ opacity: currentVideo === index ? 1 : 0 }}
            >
              <source src={video} type="video/mp4" />
            </video>
          ))}
          

        </div>
      </div>
    </section>
  );
}
