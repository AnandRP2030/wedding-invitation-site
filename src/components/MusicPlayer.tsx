import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Volume2, VolumeX, Pause, Play } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, onToggle }) => {
  return (
    <aside aria-label="Music player controls" className="fixed bottom-5 right-5 z-40">
      <motion.button
        onClick={onToggle}
        aria-label={isPlaying ? 'Pause wedding music' : 'Play wedding music'}
        className={`group relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-full shadow-xl transition-all duration-300 border backdrop-blur-md cursor-pointer ${
          isPlaying
            ? 'bg-charcoal-900/90 text-sunshine-300 border-sunshine-400/50 shadow-sunshine-500/20'
            : 'bg-white/90 text-charcoal-800 border-charcoal-200 shadow-black/10 hover:border-sunshine-400'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Equalizer Wave / Disc */}
        <div className="relative flex items-center justify-center w-6 h-6 rounded-full bg-sunshine-500/20 text-sunshine-500">
          {isPlaying ? (
            <div className="flex items-end justify-center gap-[2px] h-3.5 w-3.5">
              <span className="w-[2px] bg-sunshine-400 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-full" />
              <span className="w-[2px] bg-sunshine-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-2/3" />
              <span className="w-[2px] bg-sunshine-400 rounded-full animate-[pulse_0.75s_ease-in-out_infinite] h-4/5" />
            </div>
          ) : (
            <Music className="w-3.5 h-3.5" />
          )}
        </div>

        <span className="text-xs font-medium tracking-wider uppercase hidden sm:inline-block pr-1">
          {isPlaying ? 'Music Playing' : 'Play Music'}
        </span>

        {/* Small icon toggle */}
        <div className="w-4 h-4 flex items-center justify-center text-xs opacity-75">
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </div>
      </motion.button>
    </aside>
  );
};

export default MusicPlayer;

