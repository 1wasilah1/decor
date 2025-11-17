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
    <section id="home" className="h-screen bg-black">
      <div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="flex items-center justify-center px-8 lg:px-16 text-white">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {settings?.title?.[language] || settings?.title || t('heroTitle')}
            </h1>
            <p className="text-lg md:text-xl mb-8">
              {settings?.subtitle?.[language] || settings?.subtitle || t('heroSubtitle')}
            </p>
            <button className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
              {settings?.buttonText?.[language] || settings?.buttonText || t('discoverNow')}
            </button>
          </div>
        </div>

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
