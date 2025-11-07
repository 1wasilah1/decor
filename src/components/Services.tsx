'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

export default function Services() {
  const { t } = useLanguage();
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8700/api'}/section-settings/services`)
      .then(res => res.json())
      .then(data => setSettings(data))
      .catch(() => {});
  }, []);

  const brands = settings?.brands || [];

  return (
    <section id="jasa" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
            {settings?.title || t('trustedBrands')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-sans">
            {settings?.description || t('trustedBrandsDesc')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {brands.map((brand: string, index: number) => (
            <div key={index} className="flex items-center justify-center h-16 w-32">
              <span className="text-gray-700 font-medium text-sm md:text-base text-center">
                {brand}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 italic font-sans">
            {t('andMore')}
          </p>
        </div>
      </div>
    </section>
  );
}