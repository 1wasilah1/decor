'use client';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

export default function Hero() {
  const { t, language } = useLanguage();
  const [settings, setSettings] = useState<any>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8700/api'}/section-settings/hero`)
      .then(res => res.json())
      .then(data => {
        console.log('Hero settings:', data);
        setSettings(data);
      })
      .catch(err => console.error('Failed to load hero settings:', err));
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
        onLoadedData={() => {
          console.log('Video loaded');
          setVideoLoaded(true);
        }}
        onError={(e) => console.error('Video error:', e)}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-30" style={{ zIndex: 1 }} />
      <div className="relative max-w-4xl mx-auto px-4" style={{ zIndex: 10 }}>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {settings?.title?.[language] || settings?.title || t('heroTitle')}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          {settings?.subtitle?.[language] || settings?.subtitle || t('heroSubtitle')}
        </p>
        <button className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          {settings?.buttonText?.[language] || settings?.buttonText || t('discoverNow')}
        </button>
      </div>
    </section>
  );
}