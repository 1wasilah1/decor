'use client';
import { useState, useEffect, useRef } from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';

export default function MusicController() {
  const activeSection = useActiveSection();
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (activeSection === 'home') {
      audioRef.current.volume = 0.3;
      audioRef.current.play().then(() => {
        setAudioPlaying(true);
      }).catch(() => {});
    } else {
      audioRef.current.pause();
      setAudioPlaying(false);
    }
  }, [activeSection]);

  return (
    <>
      <audio 
        ref={audioRef}
        loop 
        className="hidden"
      >
        <source src="/musik.mp3" type="audio/mpeg" />
      </audio>
      
      <button 
        onClick={() => {
          if (audioRef.current) {
            if (audioPlaying) {
              audioRef.current.pause();
            } else {
              audioRef.current.play();
            }
            setAudioPlaying(!audioPlaying);
          }
        }}
        className="fixed bottom-32 right-6 z-50 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all"
      >
        {audioPlaying ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>
    </>
  );
}