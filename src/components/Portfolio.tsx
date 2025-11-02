'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

interface PortfolioFolder {
  folder: string;
  images: string[];
}

export default function Portfolio() {
  const { t } = useLanguage();
  const [portfolioData, setPortfolioData] = useState<PortfolioFolder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/portfolio')
      .then(res => res.json())
      .then(data => {
        setPortfolioData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('ourPortfolio')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('portfolioDesc')}
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading portfolio...</p>
          </div>
        ) : (
          <div className="space-y-16">
            {portfolioData.map((folder, folderIndex) => (
              <div key={folderIndex}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{folder.folder}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {folder.images.map((image, imageIndex) => (
                    <div key={imageIndex} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                      <div className="relative h-64">
                        <Image
                          src={image}
                          alt={`${folder.folder} ${imageIndex + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}