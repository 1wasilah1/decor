'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

interface ImageData {
  thumbnail: string;
  fullsize: string;
}

interface PortfolioFolder {
  folder: string;
  images: (string | ImageData)[];
  serviceType: string;
}

// Dynamic portfolio - automatically syncs with Google Drive folders

const serviceMapping: Record<string, string[]> = {
  'Exhibition Booth Design and Build': ['GHFORCE', 'MINI BOOTH', 'NETCUT', 'PANCKOO', 'SAN GROUP', 'XIANGJUN', 'ZANRAY', 'MIHO Filler', 'REESEE', 'Veraclara'],
  'Interior Design and Build': ['Belleza Office MHM', 'Medom Kpop Merch'],
  'Pop-up Store Design and Build': ['Blackpink Pop Up Store', 'Ppulbatu TXT Pop Up Store', 'Zero Base One'],
  'Event Equipment Rental': ['EDDR'],
  'Backdrop Rental': ['Backdrop Rental'],
  'Custom CNC Cutting Service': ['CNC Cutting'],
  'Custom Standing Character Maker': ['3d Design']
};

export default function Portfolio() {
  const { t } = useLanguage();
  const [portfolioData, setPortfolioData] = useState<PortfolioFolder[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const getImageUrl = (image: string | ImageData, type: 'thumbnail' | 'fullsize' = 'thumbnail'): string => {
    if (typeof image === 'string') return image;
    return type === 'thumbnail' ? image.thumbnail : image.fullsize;
  };

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
    // Fetch dynamic portfolio data from API
    fetch('/api/drive-portfolio')
      .then(res => res.json())
      .then(data => {
        const enrichedData = data.map((folderData: any) => {
          let serviceType = 'Other';
          for (const [service, folderList] of Object.entries(serviceMapping)) {
            if (folderList.includes(folderData.folder)) {
              serviceType = service;
              break;
            }
          }
          
          return {
            folder: folderData.folder,
            serviceType,
            images: folderData.images
          };
        });
        
        setPortfolioData(enrichedData);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  
  useEffect(() => {
    // Listen for filter events from OurServices
    const handleFilterPortfolio = (event: CustomEvent) => {
      const { serviceTitle } = event.detail;
      const mappedFolders = serviceMapping[serviceTitle] || [];
      
      if (mappedFolders.length > 0) {
        const folderIndex = portfolioData.findIndex(folder => 
          mappedFolders.includes(folder.folder)
        );
        if (folderIndex !== -1) {
          setActiveTab(folderIndex);
          setShowAll(false);
        }
      }
    };
    
    window.addEventListener('filterPortfolio', handleFilterPortfolio as EventListener);
    
    return () => {
      window.removeEventListener('filterPortfolio', handleFilterPortfolio as EventListener);
    };
  }, [portfolioData]);

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
                  onClick={() => {
                    setActiveTab(index);
                    setShowAll(false);
                  }}
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
              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {(showAll ? portfolioData[activeTab].images : portfolioData[activeTab].images.slice(0, 8)).map((image, imageIndex) => (
                    <div 
                      key={imageIndex} 
                      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-gray-200"
                      onClick={() => openModal(getImageUrl(image, 'fullsize'), imageIndex)}
                    >
                      <div className="relative h-64">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400"></div>
                        </div>
                        <Image
                          src={getImageUrl(image, 'thumbnail')}
                          alt={`${portfolioData[activeTab].folder} ${imageIndex + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          quality={10}
                          sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
                          loading="lazy"
                          priority={imageIndex < 4}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rj9v/2Q=="
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {portfolioData[activeTab].images.length > 8 && (
                  <div className="text-center mt-8">
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                      {showAll ? 'Show Less' : `Show More (${portfolioData[activeTab].images.length - 8} more)`}
                    </button>
                  </div>
                )}
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
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-white"></div>
              </div>
              <Image
                src={selectedImage}
                alt="Portfolio"
                fill
                className="object-contain"
                quality={60}
                priority
                sizes="90vw"
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