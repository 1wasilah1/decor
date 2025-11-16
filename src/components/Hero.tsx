'use client';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

export default function Hero() {
  const { t, language } = useLanguage();
  const [settings, setSettings] = useState<any>(null);
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8700/api'}/section-settings/hero`)
      .then(res => res.json())
      .then(data => {
        setSettings(data);
        if (data.videoUrl) {
          const fileId = data.videoUrl.match(/[-\w]{25,}/);
          if (fileId) setVideoUrl(`https://drive.google.com/uc?export=download&id=${fileId[0]}`);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white">
      <div className="absolute inset-0">
        {videoUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/images/hero-image.png"
            alt="Exhibition Design"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
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