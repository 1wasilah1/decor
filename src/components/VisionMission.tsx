'use client';
import { useLanguage } from '@/contexts/LanguageContext';

export default function VisionMission() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute bottom-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="none" stroke="url(#gradient)" strokeWidth="1" d="M0,160 Q360,100 720,160 T1440,160" opacity="0.3"/>
          <path fill="none" stroke="url(#gradient)" strokeWidth="1" d="M0,180 Q360,120 720,180 T1440,180" opacity="0.3"/>
          <path fill="none" stroke="url(#gradient)" strokeWidth="1" d="M0,200 Q360,140 720,200 T1440,200" opacity="0.3"/>
          <path fill="none" stroke="url(#gradient)" strokeWidth="1" d="M0,220 Q360,160 720,220 T1440,220" opacity="0.3"/>
          <path fill="none" stroke="url(#gradient)" strokeWidth="1" d="M0,240 Q360,180 720,240 T1440,240" opacity="0.3"/>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-start mb-16">
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold">PT. Multi Tritama Persada</div>
          </div>
          <div className="text-4xl font-light">2025</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center">
            <div className="inline-block bg-sky-400 text-white px-12 py-4 rounded-full mb-8">
              <h3 className="text-3xl font-bold">VISION</h3>
            </div>
            <p className="text-lg leading-relaxed">
              To become one of the reputable company in its field because of the work quality, time accuracy, and good interpersonal relationships with client which will benefit both sides.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block bg-sky-400 text-white px-12 py-4 rounded-full mb-8">
              <h3 className="text-3xl font-bold">MISSION</h3>
            </div>
            <p className="text-lg leading-relaxed">
              To provide the best and appropriate solutions for customers according to their needs which match our field of business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
