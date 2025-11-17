'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [menus, setMenus] = useState<{id: string; href: string; visible: boolean; order: number}[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            PT. Multi Tritama Persada
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-6 xl:space-x-8">
            {menus.map(menu => {
              if (menu.id === 'aboutUs') {
                return (
                  <div key={menu.id} className="relative group">
                    <a href={menu.href} className="text-white hover:text-gray-300 text-xs lg:text-sm font-medium whitespace-nowrap">
                      {t(menu.id)}
                    </a>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-black border border-gray-700 rounded shadow-lg py-2 min-w-[200px]">
                        <a href="#vision-mission" className="block px-4 py-2 text-white hover:bg-gray-800 text-sm whitespace-nowrap">Vision And Mission</a>
                        <a href="#team" className="block px-4 py-2 text-white hover:bg-gray-800 text-sm whitespace-nowrap">Meet The Team</a>
                        <a href="#working-process" className="block px-4 py-2 text-white hover:bg-gray-800 text-sm whitespace-nowrap">Working Process</a>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <a key={menu.id} href={menu.href} className="text-white hover:text-gray-300 text-xs lg:text-sm font-medium whitespace-nowrap">
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
            <a href="https://www.instagram.com/savedecor_id/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
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
                  <div key={menu.id}>
                    <a href={menu.href} className="block text-white hover:text-gray-300 py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                      {t(menu.id)}
                    </a>
                    <div className="pl-4">
                      <a href="#vision-mission" className="block text-gray-300 hover:text-white py-1 text-xs" onClick={() => setMobileMenuOpen(false)}>Vision And Mission</a>
                      <a href="#team" className="block text-gray-300 hover:text-white py-1 text-xs" onClick={() => setMobileMenuOpen(false)}>Meet The Team</a>
                      <a href="#working-process" className="block text-gray-300 hover:text-white py-1 text-xs" onClick={() => setMobileMenuOpen(false)}>Working Process</a>
                    </div>
                  </div>
                );
              }
              return (
                <a key={menu.id} href={menu.href} className="block text-white hover:text-gray-300 py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
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
