'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

export default function Hero() {
  const { t, language } = useLanguage();
  const [settings, setSettings] = useState<any>(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = ['/videos/hero.mp4', '/videos/hero1.mp4', '/videos/hero2.mp4'];
  const [audioPlaying, setAudioPlaying] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8700/api'}/section-settings/hero`)
      .then(res => res.json())
      .then(data => setSettings(data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="h-screen bg-sky-400 relative overflow-hidden">
      <div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
        {/* Left Content */}
        <div className="flex items-center justify-center px-8 lg:px-16 text-white relative">






          {/* Main Content */}
          <div className="max-w-xl mt-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Designer and Contractor for Exhibitions and Interior
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Built with Precision, Color, and Speed
            </p>
            <button className="bg-white text-black px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
              Discover Now
            </button>
          </div>


        </div>

        {/* Right Content - Video */}
        <div className="relative h-full">
          {videos.map((video, index) => (
            <video
              key={video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              style={{ opacity: currentVideo === index ? 1 : 0 }}
            >
              <source src={video} type="video/mp4" />
            </video>
          ))}
          

        </div>
      </div>
      
      {/* Background Music */}
      <audio 
        autoPlay 
        loop 
        muted={!audioPlaying}
        className="hidden"
      >
        <source src="/musik.mp3" type="audio/mpeg" />
      </audio>
      
      {/* Music Control Button */}
      <button 
        onClick={() => setAudioPlaying(!audioPlaying)}
        className="fixed bottom-6 right-6 z-50 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all"
      >
        {audioPlaying ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 16.5v-9l7 4.5-7 4.5z"/>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 16.5v-9l7 4.5-7 4.5z"/>
          </svg>
        )}
      </button>
    </section>
  );
}
