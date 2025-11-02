'use client';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PopUpStore() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-display">
            {t('popUpStoreTitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-sans leading-relaxed">
            {t('popUpStoreDesc')}
          </p>
        </div>
      </div>
    </section>
  );
}
