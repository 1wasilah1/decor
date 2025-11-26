'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

interface MediaData {
  thumbnail: string;
  fullsize: string;
  type: 'image' | 'video';
  mimeType?: string;
}

interface PortfolioFolder {
  folder: string;
  images: (string | MediaData)[];
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
  const [isVisible, setIsVisible] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState<PortfolioFolder[]>([]);
  const [isMapping, setIsMapping] = useState(false);

  const getImageUrl = (image: string | MediaData, type: 'thumbnail' | 'fullsize' = 'thumbnail'): string => {
    if (typeof image === 'string') return image;
    return type === 'thumbnail' ? image.thumbnail : image.fullsize;
  };

  const isVideo = (image: string | MediaData): boolean => {
    if (typeof image === 'string') return false;
    return image.type === 'video';
  };

  const openModal = (image: string, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (filteredData[activeTab]) {
      const nextIndex = (selectedIndex + 1) % filteredData[activeTab].images.length;
      setSelectedIndex(nextIndex);
      setSelectedImage(getImageUrl(filteredData[activeTab].images[nextIndex], 'fullsize'));
    }
  };

  const prevImage = () => {
    if (filteredData[activeTab]) {
      const prevIndex = (selectedIndex - 1 + filteredData[activeTab].images.length) % filteredData[activeTab].images.length;
      setSelectedIndex(prevIndex);
      setSelectedImage(getImageUrl(filteredData[activeTab].images[prevIndex], 'fullsize'));
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
      
      // Show mapping loading state
      setIsMapping(true);
      setIsVisible(false);
      
      // Map service titles to correct service types
      const serviceMap: Record<string, string> = {
        'Exhibition Booth Design (Custom Design)': 'Exhibition Booth Design and Build',
        'Interior Contractor': 'Interior Design and Build', 
        'Rental Equipment': 'Event Equipment Rental',
        'Rental Backdrop': 'Backdrop Rental',
        'Backdrop Photobooth': 'Backdrop Rental',
        'Special System R8/Maxima Rental': 'System Maxima/R8 Rental',
        'Stage Rental': 'Stage Rental',
        'Custom CNC Cutting': 'Custom CNC Cutting Service',
        'Custom Standing Character': 'Custom Standing Character Maker'
      };
      
      const matchedServiceType = serviceMap[serviceTitle] || serviceTitle;
      
      // Simulate mapping delay
      setTimeout(() => {
        // Filter portfolio data by service type
        const filtered = portfolioData.filter(folder => 
          folder.serviceType === matchedServiceType
        );
        
        if (filtered.length > 0) {
          setSelectedServiceType(matchedServiceType);
          setFilteredData(filtered);
          setIsVisible(true);
          setActiveTab(0);
          setShowAll(false);
        }
        setIsMapping(false);
      }, 800);
    };
    
    window.addEventListener('filterPortfolio', handleFilterPortfolio as EventListener);
    
    return () => {
      window.removeEventListener('filterPortfolio', handleFilterPortfolio as EventListener);
    };
  }, [portfolioData]);

  // Update filtered data when portfolio data changes
  useEffect(() => {
    if (selectedServiceType && portfolioData.length > 0) {
      const filtered = portfolioData.filter(folder => folder.serviceType === selectedServiceType);
      setFilteredData(filtered);
    }
  }, [portfolioData, selectedServiceType]);

  // Show loading animation when mapping or data is loading
  const showLoading = isMapping || (!isVisible && portfolioData.length === 0);
  const sectionClass = isVisible ? "py-20 bg-white" : showLoading ? "py-20 bg-white" : "py-20 bg-white hidden";

  return (
    <section id="portfolio" className={sectionClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('ourPortfolio')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('portfolioDesc')}
          </p>
        </div>

        {showLoading ? (
          <div className="text-center py-20">
            <div className="flex justify-center items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
              <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
              <div className="w-3 h-3 bg-black rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
            </div>
            <div className="flex justify-center items-end space-x-1 mb-6">
              {[...Array(15)].map((_, i) => (
                <div 
                  key={i}
                  className="bg-gradient-to-t from-gray-700 to-black rounded-full animate-pulse"
                  style={{
                    width: '4px',
                    height: `${20 + Math.sin(i * 0.5) * 15}px`,
                    animationDelay: `${i * 100}ms`,
                    animationDuration: '1.5s'
                  }}
                ></div>
              ))}
            </div>
            <p className="text-gray-600">Loading portfolio...</p>
          </div>
        ) : isVisible ? (
          <div>
            {/* Service Type Title */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-800">{selectedServiceType}</h3>
            </div>

            {/* Tabs - Only show filtered folders */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {filteredData.map((folder, index) => (
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
            {filteredData[activeTab] && (
              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {(showAll ? filteredData[activeTab].images : filteredData[activeTab].images.slice(0, 8)).map((image, imageIndex) => (
                    <div 
                      key={imageIndex} 
                      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-gray-200"
                      onClick={() => openModal(getImageUrl(image, 'fullsize'), imageIndex)}
                    >
                      <div className="relative h-64">
                        {isVideo(image) ? (
                          <>
                            <div className="relative w-full h-full">
                              <img 
                                src={getImageUrl(image, 'thumbnail')}
                                alt={`${filteredData[activeTab].folder} video thumbnail`}
                                className="w-full h-full object-cover rounded-lg"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                                <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg">
                                  <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400"></div>
                            </div>
                            <Image
                              src={getImageUrl(image, 'thumbnail')}
                              alt={`${filteredData[activeTab].folder} ${imageIndex + 1}`}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              quality={15}
                              sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
                              loading="lazy"
                              priority={imageIndex < 4}
                              placeholder="blur"
                              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rj9v/2Q=="
                            />
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                {filteredData[activeTab].images.length > 8 && (
                  <div className="text-center mt-8">
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                      {showAll ? 'Show Less' : `Show More (${filteredData[activeTab].images.length - 8} more)`}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : null}

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
              {isVideo(filteredData[activeTab]?.images[selectedIndex]) ? (
                <video
                  src={selectedImage}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  onError={() => console.error('Video failed to load:', selectedImage)}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <>
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
                    onError={(e) => {
                      console.error('Image failed to load:', selectedImage);
                      const currentImage = filteredData[activeTab]?.images[selectedIndex];
                      if (currentImage && typeof currentImage !== 'string') {
                        e.currentTarget.src = currentImage.thumbnail;
                      }
                    }}
                  />
                </>
              )}
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {selectedIndex + 1} / {filteredData[activeTab]?.images.length || 0}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}