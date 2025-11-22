'use client';
import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let currentSection = 'home';
        
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            currentSection = entry.target.id;
          }
        });
        
        if (maxRatio > 0.3) {
          setActiveSection(currentSection);
        }
      },
      { threshold: [0, 0.1, 0.3, 0.5, 0.7, 1] }
    );

    // Delay untuk memastikan DOM sudah siap
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return activeSection;
}