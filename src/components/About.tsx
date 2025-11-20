'use client';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/logo.png"
                alt="Save Decor Logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-gray-500 text-sm mb-4 uppercase tracking-wide">
              COMMERCIAL CONTRACTOR & DESIGNER INDONESIA
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('aboutUs')}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t('aboutDesc')}
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('whyUs')}</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                {t('premiumQuality')}
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                {t('fullSupport')}
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                {t('fastPrecise')}
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                {t('service24')}
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                {t('affordablePrice')}
              </li>
            </ul>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {t('servedCountries')}
            </p>

            <a 
              href="/compro.pdf" 
              download="Save-Decor-Company-Profile.pdf"
              className="bg-black text-white px-6 py-3 rounded font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2 inline-flex"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>{t('downloadProfile')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}