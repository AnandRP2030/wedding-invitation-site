import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import SplashScreen from './components/SplashScreen';
import MusicPlayer from './components/MusicPlayer';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import WeddingCardSection from './components/WeddingCardSection';
import StorySection from './components/StorySection';
import VenueLocation from './components/VenueLocation';
import Footer from './components/Footer';

import songUrl from './assets/song.mp3';

function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(songUrl);
    audio.loop = true;
    audio.volume = 0.65;
    audio.preload = 'auto';

    audio.onplay = () => setIsPlaying(true);
    audio.onpause = () => setIsPlaying(false);
    audio.onerror = (e) => console.warn('Audio playback error:', e);

    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Synchronously triggered inside the user's "Open Invitation" click gesture
  const handleSplashOpen = () => {
    setSplashDone(true);

    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn('Audio autoplay policy:', err);
      });
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play().catch((err) => {
        console.warn('Playback toggle error:', err);
      });
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#FAF8F5] text-charcoal-800 flex flex-col font-sans">
      {/* Opening Splash Screen */}
      <AnimatePresence mode="wait">
        {!splashDone && <SplashScreen onOpen={handleSplashOpen} />}
      </AnimatePresence>

      {/* Main Wedding Invitation Website */}
      {splashDone && (
        <motion.main
          className="relative w-full flex flex-col flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
        >
          {/* Floating Music Controller */}
          <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />

          {/* Hero Section */}
          <Hero />

          {/* Countdown Section */}
          <Countdown />

          {/* Interactive Wedding Card Section */}
          <WeddingCardSection />

          {/* Couples Story & Photo Moments */}
          <StorySection />

          {/* Venue & Location Map */}
          <VenueLocation />

          {/* Footer & Wishes */}
          <Footer />
        </motion.main>
      )}
    </div>
  );
}

export default App;

