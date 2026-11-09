import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Volume2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

import coupleFrontPhoto from '../assets/front-view.jpg';

interface SplashScreenProps {
  onOpen: () => void;
}

const Petal: React.FC<{ index: number }> = ({ index }) => {
  const size = 10 + (index % 5) * 3;
  const left = (index * 5.3) % 100;
  const delay = (index * 0.22) % 3;
  const duration = 5.5 + (index % 4);
  const drift = (index % 2 === 0 ? 1 : -1) * (25 + (index % 4) * 15);

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${left}%`,
        top: '-30px',
        animation: `petalFall ${duration}s ${delay}s ease-in infinite`,
        ['--drift' as string]: `${drift}px`,
      }}
    >
      <svg width={size} height={size * 1.3} viewBox="0 0 20 26" fill="none">
        <ellipse
          cx="10"
          cy="13"
          rx="7"
          ry="12"
          fill={index % 2 === 0 ? '#FBBF24' : '#F59E0B'}
          fillOpacity="0.45"
          transform={`rotate(${index * 42} 10 13)`}
        />
      </svg>
    </div>
  );
};

const SplashScreen: React.FC<SplashScreenProps> = ({ onOpen }) => {
  const [petals] = useState(() => Array.from({ length: 22 }, (_, i) => i));

  const handleOpenClick = () => {
    // Fire festive celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#F59E0B', '#FBBF24', '#10B981', '#FDFBF7', '#E5C378'],
      });
    } catch {
      // ignore
    }
    onOpen();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#081C15] via-[#0D281E] to-[#04120C] px-6 text-center select-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Falling Golden Flower Petals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {petals.map((i) => (
          <Petal key={i} index={i} />
        ))}
      </div>

      {/* Central Warm Amber Ambient Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[520px] h-[520px] rounded-full opacity-25 filter blur-3xl"
          style={{
            background: 'radial-gradient(circle, #F59E0B 0%, #064E3B 60%, transparent 80%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center">
        {/* Modern Wedding Badge */}
        <motion.div
          className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sunshine-400/40 bg-sunshine-500/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Sparkles className="w-3.5 h-3.5 text-sunshine-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-sunshine-200 font-medium">
            Wedding Reception
          </span>
          <Sparkles className="w-3.5 h-3.5 text-sunshine-400 animate-pulse" />
        </motion.div>

        {/* Modern Couple Photo Frame - Arched with Warm Golden Glow */}
        <motion.div
          className="relative mb-5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          {/* Subtle Outer Glow Accent */}
          <div
            className="p-1 rounded-t-[76px] sm:rounded-t-[88px] rounded-b-2xl shadow-2xl relative"
            style={{
              background: 'linear-gradient(180deg, #FEF3C7 0%, #F59E0B 45%, #B45309 100%)',
              boxShadow: '0 20px 50px -10px rgba(0,0,0,0.7), 0 0 35px rgba(245, 158, 11, 0.3)',
            }}
          >
            {/* Photo Container */}
            <div className="w-44 h-56 sm:w-52 sm:h-68 md:w-56 md:h-72 rounded-t-[72px] sm:rounded-t-[84px] rounded-b-xl overflow-hidden bg-[#0F291E] relative">
              <img
                src={coupleFrontPhoto}
                alt="Manu & Lakshmi"
                className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 hover:scale-105"
              />

              {/* Delicate Gold Inner Border */}
              <div className="absolute inset-1.5 rounded-t-[66px] sm:rounded-t-[78px] rounded-b-lg border border-sunshine-200/40 pointer-events-none" />

              {/* Bottom Vignette */}
              <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#081C15]/90 via-[#081C15]/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Couple Names */}
        <motion.div
          className="my-1 space-y-0.5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#FAF8F5] font-normal tracking-wide">
            Manu
          </h1>
          <div className="flex items-center justify-center gap-3 my-1">
            <span className="h-px w-8 bg-sunshine-400/50" />
            <Heart className="w-4 h-4 text-sunshine-400 fill-sunshine-400 animate-bounce" />
            <span className="h-px w-8 bg-sunshine-400/50" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#FAF8F5] font-normal tracking-wide">
            Lakshmi
          </h1>
        </motion.div>

        {/* Date & Location Line */}
        <motion.p
          className="text-xs sm:text-sm tracking-[0.25em] uppercase text-sunshine-200/90 font-light mt-3 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Sunday, 22 November 2026
        </motion.p>

        {/* Open Invitation CTA Button */}
        <motion.button
          onClick={handleOpenClick}
          className="relative group px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border border-sunshine-400 bg-gradient-to-r from-sunshine-500/25 via-sunshine-400/20 to-sunshine-500/25 hover:from-sunshine-500 hover:to-sunshine-600 text-sunshine-100 hover:text-charcoal-900 text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold shadow-2xl hover:shadow-sunshine-500/40 cursor-pointer transition-all duration-300 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <span className="relative z-10 flex items-center gap-2.5">
            <Volume2 className="w-4 h-4 text-sunshine-300 group-hover:text-charcoal-900 transition-colors" />
            <span>Open Invitation</span>
            <Sparkles className="w-4 h-4 text-sunshine-300 group-hover:text-charcoal-900 transition-colors" />
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SplashScreen;

