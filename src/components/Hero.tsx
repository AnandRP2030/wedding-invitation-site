import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles, Heart, ChevronDown } from 'lucide-react';

import frontPhoto from '../assets/front-view.jpg';
import backPhoto from '../assets/back-view.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F7F2E8] to-[#FAF8F5] pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Background Subtle Organic Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 opacity-30 pointer-events-none filter blur-3xl">
        <div className="w-full h-full bg-gradient-to-r from-sunshine-200 via-botanical-100 to-sunshine-200" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        {/* Top Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 border border-sunshine-400/40 shadow-sm mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-sunshine-500" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-botanical-900">
            Together With Their Families
          </span>
          <Sparkles className="w-3.5 h-3.5 text-sunshine-500" />
        </motion.div>

        {/* Couple Names */}
        <motion.div
          className="space-y-1 mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-normal text-charcoal-900 tracking-tight leading-tight">
            Manu <span className="font-script text-sunshine-500 text-4xl sm:text-5xl md:text-6xl mx-1">&</span> Lakshmi
          </h1>
          <p className="font-script text-2xl sm:text-3xl text-sunshine-600 mt-2">
            Beginning Our Forever Together
          </p>
        </motion.div>

        {/* Couple Photos Composition — Overlapping Modern Portraits */}
        <motion.div
          className="relative mx-auto my-8 sm:my-12 flex items-center justify-center max-w-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
        >
          {/* Main Front Photo (Embracing in Lush Garden) */}
          <motion.div
            className="relative z-20 rounded-2xl overflow-hidden bg-white p-2.5 sm:p-3 shadow-2xl border border-sunshine-400/30 transform -rotate-1 hover:rotate-0 transition-transform duration-500"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-[200px] h-[280px] sm:w-[250px] sm:h-[350px] md:w-[280px] md:h-[390px] overflow-hidden rounded-xl">
              <img
                src={frontPhoto}
                alt="Manu and Lakshmi"
                className="w-full h-full object-cover object-top filter contrast-[1.03]"
              />
            </div>
            <div className="pt-2.5 pb-1 text-center">
              <p className="font-script text-base sm:text-lg text-sunshine-700">Two hearts, one soul</p>
            </div>
          </motion.div>

          {/* Secondary Back Photo (Sunset Beach Promenade) */}
          <motion.div
            className="absolute -right-4 sm:-right-8 md:-right-12 -bottom-6 sm:-bottom-8 z-30 rounded-2xl overflow-hidden bg-white p-2 sm:p-2.5 shadow-2xl border border-sunshine-400/30 transform rotate-3 hover:rotate-0 transition-transform duration-500"
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            whileHover={{ scale: 1.04 }}
          >
            <div className="w-[125px] h-[175px] sm:w-[160px] sm:h-[220px] md:w-[185px] md:h-[255px] overflow-hidden rounded-xl">
              <img
                src={backPhoto}
                alt="Manu and Lakshmi seaside"
                className="w-full h-full object-cover object-center filter contrast-[1.03]"
              />
            </div>
            <div className="pt-2 text-center">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-charcoal-800 font-medium">To Eternity ✨</p>
            </div>
          </motion.div>

          {/* Golden Corner Floral / Glow Accents */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-sunshine-500/50 rounded-tl-2xl pointer-events-none" />
          <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-sunshine-500/50 rounded-bl-2xl pointer-events-none" />
        </motion.div>

        {/* Wedding Reception Details Banner */}
        <motion.div
          className="mt-14 max-w-2xl mx-auto luxury-card rounded-2xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-sunshine-100 text-sunshine-700 text-xs font-semibold tracking-wider uppercase mb-3">
            Cordially Invited to the
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-charcoal-900 font-medium mb-4">
            Wedding Reception
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-sunshine-200/80">
            {/* Date */}
            <div className="flex flex-col items-center p-2">
              <div className="w-9 h-9 rounded-full bg-sunshine-500/10 flex items-center justify-center text-sunshine-600 mb-2">
                <Calendar className="w-4 h-4" />
              </div>
              <p className="text-xs uppercase tracking-wider text-charcoal-800 font-medium">Date</p>
              <p className="text-sm font-semibold text-charcoal-900 mt-0.5">22 Nov 2026</p>
              <p className="text-[11px] text-charcoal-800">Sunday</p>
            </div>

            {/* Time */}
            <div className="flex flex-col items-center p-2 border-y sm:border-y-0 sm:border-x border-sunshine-200/80">
              <div className="w-9 h-9 rounded-full bg-sunshine-500/10 flex items-center justify-center text-sunshine-600 mb-2">
                <Clock className="w-4 h-4" />
              </div>
              <p className="text-xs uppercase tracking-wider text-charcoal-800 font-medium">Time</p>
              <p className="text-sm font-semibold text-charcoal-900 mt-0.5">5:00 PM – 10:00 PM</p>
              <p className="text-[11px] text-charcoal-800">Evening</p>
            </div>

            {/* Venue */}
            <div className="flex flex-col items-center p-2">
              <div className="w-9 h-9 rounded-full bg-sunshine-500/10 flex items-center justify-center text-sunshine-600 mb-2">
                <MapPin className="w-4 h-4" />
              </div>
              <p className="text-xs uppercase tracking-wider text-charcoal-800 font-medium">Venue</p>
              <p className="text-sm font-semibold text-charcoal-900 mt-0.5 leading-snug">Punitha Vinorpu Annai Hall</p>
              <p className="text-[11px] text-charcoal-800">Pilankalai</p>
            </div>
          </div>
        </motion.div>

        {/* Action Shortcut Buttons */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          <a
            href="#wedding-card"
            className="px-6 py-3 rounded-full bg-sunshine-500 hover:bg-sunshine-600 text-charcoal-950 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-lg hover:shadow-sunshine-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Open Wedding Card
          </a>
          <a
            href="#location"
            className="px-6 py-3 rounded-full bg-white hover:bg-cream-100 text-charcoal-800 border border-sunshine-300 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Venue & Map
          </a>
          <a
            href="#countdown"
            className="px-6 py-3 rounded-full bg-botanical-900 hover:bg-botanical-950 text-sunshine-200 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Countdown
          </a>
        </motion.div>

        {/* Scroll down indicator */}
        <div className="mt-12 flex justify-center">
          <a href="#countdown" className="text-charcoal-800 hover:text-sunshine-600 transition-colors animate-bounce">
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

