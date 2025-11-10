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
  const [activeTab, setActiveTab] = useState(0);

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
          <div>
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {portfolioData.map((folder, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === index
                      ? 'bg-black text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {folder.folder}
                </button>
              ))}
            </div>

            {/* Images */}
            {portfolioData[activeTab] && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {portfolioData[activeTab].images.map((image, imageIndex) => (
                  <div key={imageIndex} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="relative h-64">
                      <Image
                        src={image}
                        alt={`${portfolioData[activeTab].folder} ${imageIndex + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}