'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [menus, setMenus] = useState<{id: string; href: string; visible: boolean; order: number}[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const anchor = href.substring(2);
      router.push('/');
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8700/api'}/menus`)
      .then(res => res.json())
      .then(data => setMenus(data.menus.filter((m: {visible: boolean}) => m.visible).sort((a: {order: number}, b: {order: number}) => a.order - b.order)))
      .catch(() => {});
  }, []);

  return (
    <header className="bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-white font-bold text-xs sm:text-sm">
            PT. BLUE SKY INDONUSA
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-6 xl:space-x-8">
            {menus.map(menu => {
              if (menu.id === 'aboutUs') {
                return (
                  <a key={menu.id} href="/about" className="text-white hover:text-gray-300 text-xs lg:text-sm font-medium whitespace-nowrap">
                    {t(menu.id)}
                  </a>
                );
              }
              const href = menu.href.startsWith('#') ? `/${menu.href}` : menu.href;
              return (
                <a 
                  key={menu.id} 
                  href={href} 
                  onClick={(e) => handleAnchorClick(e, href)}
                  className="text-white hover:text-gray-300 text-xs lg:text-sm font-medium whitespace-nowrap"
                >
                  {menu.id === 'order' ? 'Online Order' : t(menu.id)}
                </a>
              );
            })}
            <button
              onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
              className="text-white hover:text-gray-300 text-sm font-medium px-3 py-1 border border-white rounded"
            >
              {language === 'en' ? 'ID' : 'EN'}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {menus.map(menu => {
              if (menu.id === 'aboutUs') {
                return (
                  <a key={menu.id} href="/about" className="block text-white hover:text-gray-300 py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                    {t(menu.id)}
                  </a>
                );
              }
              const href = menu.href.startsWith('#') ? `/${menu.href}` : menu.href;
              return (
                <a 
                  key={menu.id} 
                  href={href} 
                  onClick={(e) => { handleAnchorClick(e, href); setMobileMenuOpen(false); }}
                  className="block text-white hover:text-gray-300 py-2 text-sm"
                >
                  {menu.id === 'order' ? 'Online Order' : t(menu.id)}
                </a>
              );
            })}
            <button
              onClick={() => { setLanguage(language === 'en' ? 'id' : 'en'); setMobileMenuOpen(false); }}
              className="text-white hover:text-gray-300 text-sm font-medium px-3 py-2 border border-white rounded mt-2"
            >
              {language === 'en' ? 'ID' : 'EN'}
            </button>
          </div>
        )}
      </div>


    </header>
  );
}
