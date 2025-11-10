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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (image: string, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (portfolioData[activeTab]) {
      const nextIndex = (selectedIndex + 1) % portfolioData[activeTab].images.length;
      setSelectedIndex(nextIndex);
      setSelectedImage(portfolioData[activeTab].images[nextIndex]);
    }
  };

  const prevImage = () => {
    if (portfolioData[activeTab]) {
      const prevIndex = (selectedIndex - 1 + portfolioData[activeTab].images.length) % portfolioData[activeTab].images.length;
      setSelectedIndex(prevIndex);
      setSelectedImage(portfolioData[activeTab].images[prevIndex]);
    }
  };

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
                  <div 
                    key={imageIndex} 
                    className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => openModal(image, imageIndex)}
                  >
                    <div className="relative h-64">
                      <Image
                        src={image}
                        alt={`${portfolioData[activeTab].folder} ${imageIndex + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        quality={15}
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <button 
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
              onClick={closeModal}
            >
              &times;
            </button>
            
            {/* Previous Button */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 z-10"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              &#8249;
            </button>

            {/* Next Button */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 z-10"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              &#8250;
            </button>

            <div className="relative max-w-7xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage}
                alt="Portfolio"
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {selectedIndex + 1} / {portfolioData[activeTab]?.images.length || 0}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}