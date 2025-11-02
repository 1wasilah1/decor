'use client';
import { useLanguage } from '@/contexts/LanguageContext';

export default function OnlineOrder() {
  const { t } = useLanguage();

  return (
    <section id="order" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-display">
            Online Order
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-sans leading-relaxed">
            Order our services online easily and quickly
          </p>
        </div>
      </div>
    </section>
  );
}
