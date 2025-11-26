'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function OurClient() {
  const { t } = useLanguage();
  const [logos, setLogos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/client-logos')
      .then(res => res.json())
      .then(data => {
        setLogos(data.logos || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="our-client" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('ourClient') || 'Our Client'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('clientDesc') || 'Trusted by leading companies'}
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading...</p>
          </div>
        ) : logos.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow w-48 h-32">
                <div className="relative w-full h-24">
                  <Image
                    src={logo}
                    alt={`Client ${index + 1}`}
                    fill
                    className="object-contain transition-all"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No client logos available</p>
          </div>
        )}
      </div>
    </section>
  );
}
