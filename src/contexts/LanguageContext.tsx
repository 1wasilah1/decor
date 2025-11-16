'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    services: 'Services',
    portfolio: 'Portfolio',
    contactUs: 'Contact Us',
    onlineOrder: 'Online Order',
    heroTitle: 'Designer and Contractor for Exhibitions and Interior',
    heroSubtitle: 'Built with Precision, Color, and Speed',
    discoverNow: 'Discover Now',
    trustedBrands: 'Trusted by Leading Brands',
    trustedBrandsDesc: 'From global names to local heroes — here are some of the partners who\'ve trusted us:',
    andMore: 'And many more',
    ourServices: 'Our Services',
    aestheticDesigns: 'We create aesthetic and engaging designs',
    aestheticDesc1: 'With our premium booth and exhibition design services, you can increase your brand\'s visibility.',
    aestheticDesc2: 'Our professionals will assist you in developing a welcoming and approachable experience that embodies your brand values and draws in clients.',
    service1: 'Exhibition Booth Design (Custom Design)',
    service2: 'Interior Contractor',
    service3: 'Rental Equipment',
    service4: 'Rental Backdrop',
    service5: 'Backdrop Photobooth',
    service6: 'Special System R8/Maxima Rental',
    service7: 'Stage Rental',
    service8: 'Custom CNC Cutting',
    service9: 'Custom Standing Character',
    wholeExhibition: 'Whole Exhibition',
    wholeExhibitionDesc: 'Comprehensive solutions from concept to completion. Stunning designs that captivate and engage. Seamless project management for a hassle-free experience.',
    visualMerchandising: 'Visual Merchandising',
    visualMerchandisingDesc: 'Attract and engage shoppers effortlessly. Customized to highlight your brand\'s unique appeal.',
    commercial: 'Commercial',
    commercialDesc: 'Drive business success with our innovative commercial spaces. Designed for functionality and aesthetics.',
    popUpStoreTitle: 'Pop Up Store Design and Contractor',
    popUpStoreDesc: 'Transform temporary spaces into memorable brand experiences. Our expert team delivers complete pop-up store solutions from concept to execution, ensuring your brand stands out in any location.',
    aboutUs: 'About Us',
    aboutDesc: 'We were established in 2011 and have experience in various fields, such as retail services, exhibition booths, houses, cafes, restaurants, offices, starting from design, construction, to providing various needs for starting a business.',
    whyUs: 'Why Us:',
    premiumQuality: 'Premium Quality',
    fullSupport: 'Full Support',
    fastPrecise: 'Fast and Precise Result',
    service24: '24 Hours Service',
    affordablePrice: 'Affordable Price',
    servedCountries: 'We have served customers from various countries such as China, Korea, Japan, Thailand, and Indonesia',
    downloadProfile: 'Download Company Profile',
    ourPortfolio: 'Our Portfolio',
    portfolioDesc: 'Discover our latest projects and see how we transform spaces into extraordinary experiences',
    viewAllProjects: 'View All Projects',
    ourInstagram: 'Our Instagram',
    instagramDesc: 'Follow us @savedecor_id for daily inspiration and behind-the-scenes content',
    followInstagram: 'Follow @savedecor_id',
    stayInTouch: 'STAY IN TOUCH',
    freeConsultation: 'Claim You Free Consultation Now!',
    chatNow: 'CHAT NOW',
    footerDesc: 'Leading Exhibition/Store Designer & Contractor #1 Indonesia. Creating immersive spaces across South East Asia.',
    quickLinks: 'Quick Links',
    contact: 'Contact',
    allRights: '© 2024 Save Decor. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    ourClient: 'Our Client',
    clientDesc: 'Trusted by leading companies'
  },
  id: {
    home: 'Beranda',
    services: 'Layanan',
    portfolio: 'Portofolio',
    contactUs: 'Hubungi Kami',
    onlineOrder: 'Pesan Online',
    heroTitle: 'Desainer dan Kontraktor untuk Pameran dan Interior',
    heroSubtitle: 'Dibangun dengan Presisi, Warna, dan Kecepatan',
    discoverNow: 'Temukan Sekarang',
    trustedBrands: 'Dipercaya oleh Brand Terkemuka',
    trustedBrandsDesc: 'Dari nama global hingga lokal — berikut beberapa mitra yang telah mempercayai kami:',
    andMore: 'Dan masih banyak lagi',
    ourServices: 'Layanan Kami',
    aestheticDesigns: 'Kami menciptakan desain yang estetis dan menarik',
    aestheticDesc1: 'Dengan layanan desain booth dan pameran premium kami, Anda dapat meningkatkan visibilitas brand Anda.',
    aestheticDesc2: 'Profesional kami akan membantu Anda mengembangkan pengalaman yang ramah dan mudah didekati yang mewujudkan nilai brand Anda dan menarik klien.',
    service1: 'Desain Booth Pameran (Desain Custom)',
    service2: 'Kontraktor Interior',
    service3: 'Sewa Peralatan',
    service4: 'Sewa Backdrop',
    service5: 'Backdrop Photobooth',
    service6: 'Sewa Sistem Khusus R8/Maxima',
    service7: 'Sewa Panggung',
    service8: 'Custom CNC Cutting',
    service9: 'Custom Standing Character',
    wholeExhibition: 'Pameran Lengkap',
    wholeExhibitionDesc: 'Solusi komprehensif dari konsep hingga penyelesaian. Desain menakjubkan yang memikat dan melibatkan. Manajemen proyek yang mulus untuk pengalaman bebas repot.',
    visualMerchandising: 'Visual Merchandising',
    visualMerchandisingDesc: 'Menarik dan melibatkan pembeli dengan mudah. Disesuaikan untuk menonjolkan daya tarik unik brand Anda.',
    commercial: 'Komersial',
    commercialDesc: 'Dorong kesuksesan bisnis dengan ruang komersial inovatif kami. Dirancang untuk fungsionalitas dan estetika.',
    popUpStoreTitle: 'Desain dan Kontraktor Pop Up Store',
    popUpStoreDesc: 'Ubah ruang sementara menjadi pengalaman brand yang berkesan. Tim ahli kami memberikan solusi pop-up store lengkap dari konsep hingga eksekusi, memastikan brand Anda menonjol di lokasi mana pun.',
    aboutUs: 'Tentang Kami',
    aboutDesc: 'Kami didirikan pada tahun 2011 dan memiliki pengalaman di berbagai bidang, seperti layanan ritel, booth pameran, rumah, kafe, restoran, kantor, mulai dari desain, konstruksi, hingga menyediakan berbagai kebutuhan untuk memulai bisnis.',
    whyUs: 'Mengapa Kami:',
    premiumQuality: 'Kualitas Premium',
    fullSupport: 'Dukungan Penuh',
    fastPrecise: 'Hasil Cepat dan Presisi',
    service24: 'Layanan 24 Jam',
    affordablePrice: 'Harga Terjangkau',
    servedCountries: 'Kami telah melayani pelanggan dari berbagai negara seperti China, Korea, Jepang, Thailand, dan Indonesia',
    downloadProfile: 'Unduh Profil Perusahaan',
    ourPortfolio: 'Portofolio Kami',
    portfolioDesc: 'Temukan proyek terbaru kami dan lihat bagaimana kami mengubah ruang menjadi pengalaman luar biasa',
    viewAllProjects: 'Lihat Semua Proyek',
    ourInstagram: 'Instagram Kami',
    instagramDesc: 'Ikuti kami @savedecor_id untuk inspirasi harian dan konten di balik layar',
    followInstagram: 'Ikuti @savedecor_id',
    stayInTouch: 'TETAP TERHUBUNG',
    freeConsultation: 'Klaim Konsultasi Gratis Anda Sekarang!',
    chatNow: 'CHAT SEKARANG',
    footerDesc: 'Desainer & Kontraktor Exhibition/Store Terkemuka #1 Indonesia. Menciptakan ruang imersif di seluruh Asia Tenggara.',
    quickLinks: 'Tautan Cepat',
    contact: 'Kontak',
    allRights: '© 2024 Save Decor. Hak cipta dilindungi.',
    privacyPolicy: 'Kebijakan Privasi',
    termsOfService: 'Syarat Layanan',
    ourClient: 'Klien Kami',
    clientDesc: 'Dipercaya oleh perusahaan terkemuka'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
