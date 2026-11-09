import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Calendar, Clock, MapPin, Users, Heart, Sparkles, ZoomIn, X, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

import cardImage from '../assets/wedding-card.png';

const WeddingCardSection: React.FC = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

  const handleToggleCard = () => {
    if (!isCardOpen) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#F59E0B', '#FBBF24', '#047857', '#E5C378'],
        });
      } catch {
        // ignore
      }
    }
    setIsCardOpen(!isCardOpen);
  };

  return (
    <section id="wedding-card" className="relative w-full py-20 md:py-32 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#FAF8F5] overflow-hidden">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sunshine-100 text-sunshine-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Formal Invitation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal-900 font-medium">
            The Wedding Card
          </h2>
          <p className="mt-3 text-sm sm:text-base text-charcoal-800 font-light max-w-lg mx-auto">
            Tap the envelope to unfold the formal invitation card and view complete event details.
          </p>
        </motion.div>

        {/* 3D Envelope & Card Open Animation */}
        <div className="max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <motion.div
            className="w-full max-w-md relative cursor-pointer select-none"
            onClick={handleToggleCard}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* The Envelope Outer Box */}
            <div
              className="relative w-full rounded-2xl overflow-hidden p-6 sm:p-8 text-center shadow-2xl transition-all duration-500"
              style={{
                background: isCardOpen
                  ? 'linear-gradient(145deg, #0F2D22 0%, #061B14 100%)'
                  : 'linear-gradient(145deg, #1A3E31 0%, #0B251D 100%)',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                boxShadow: '0 20px 45px -10px rgba(0,0,0,0.4), 0 0 30px rgba(245, 158, 11, 0.2)',
              }}
            >
              {/* Gold border filigree */}
              <div className="absolute inset-2 border border-sunshine-400/30 rounded-xl pointer-events-none" />

              {/* Envelope Flap Simulation */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Wax Seal Badge */}
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-tr from-sunshine-600 via-sunshine-400 to-yellow-200 p-0.5 shadow-xl flex items-center justify-center mb-4"
                  animate={{ rotate: isCardOpen ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-full h-full rounded-full bg-[#0F291E] flex flex-col items-center justify-center text-sunshine-300">
                    <Heart className="w-5 h-5 fill-sunshine-400 text-sunshine-400" />
                    <span className="text-[9px] font-serif font-bold tracking-wider mt-0.5">M & L</span>
                  </div>
                </motion.div>

                <p className="text-xs tracking-[0.25em] uppercase text-sunshine-300 font-semibold mb-1">
                  {isCardOpen ? 'Invitation Card Unfolded' : 'Wedding Reception Card'}
                </p>
                <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
                  Manu & Lakshmi
                </h3>
                <p className="text-xs text-emerald-200/80 mt-1">
                  Sunday, 22 November 2026 · Pilankalai
                </p>

                {/* Open / Close Button */}
                <div className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sunshine-500 hover:bg-sunshine-400 text-charcoal-950 text-xs font-semibold uppercase tracking-wider shadow-lg transition-colors">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{isCardOpen ? 'Click to Fold Card' : 'Click to Open Card'}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Animated Card Unfolding Section */}
          <AnimatePresence>
            {isCardOpen && (
              <motion.div
                initial={{ opacity: 0, y: -40, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -30, height: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="w-full mt-6"
              >
                {/* The Wedding Card Image Presentation */}
                <div className="relative max-w-lg mx-auto bg-white p-3 sm:p-5 rounded-2xl shadow-2xl border-2 border-sunshine-400/40 group">
                  <div className="relative rounded-xl overflow-hidden bg-[#FEFBF6] border border-sunshine-200">
                    <img
                      src={cardImage}
                      alt="Official Wedding Reception Card - Manu weds Lakshmi"
                      className="w-full h-auto object-contain filter contrast-[1.01]"
                    />

                    {/* Hover Fullscreen Overlay */}
                    <div
                      onClick={() => setIsZoomModalOpen(true)}
                      className="absolute inset-0 bg-charcoal-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer p-4"
                    >
                      <button className="px-5 py-2.5 rounded-full bg-white text-charcoal-900 font-semibold text-xs uppercase tracking-wider shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <ZoomIn className="w-4 h-4 text-sunshine-600" />
                        <span>View Full Screen & Zoom</span>
                      </button>
                    </div>
                  </div>

                  {/* Quick Card Controls */}
                  <div className="mt-4 flex items-center justify-between px-2">
                    <button
                      onClick={() => setIsZoomModalOpen(true)}
                      className="inline-flex items-center gap-1.5 text-xs text-sunshine-700 hover:text-sunshine-800 font-semibold uppercase tracking-wider"
                    >
                      <ZoomIn className="w-4 h-4" />
                      <span>Click to Enlarge</span>
                    </button>
                    <a
                      href={cardImage}
                      download="Manu-Lakshmi-Wedding-Card.png"
                      className="inline-flex items-center gap-1.5 text-xs text-botanical-800 hover:text-botanical-950 font-semibold uppercase tracking-wider"
                    >
                      <Download className="w-4 h-4" />
                      <span>Save Card</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Detailed Extracted Wedding Card Information */}
        <motion.div
          className="luxury-card rounded-3xl p-6 sm:p-10 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Card Header text */}
          <div className="text-center max-w-2xl mx-auto pb-8 border-b border-sunshine-200/80">
            <span className="text-xs uppercase tracking-[0.3em] text-sunshine-700 font-semibold">
              Auspicious Invitation
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-charcoal-900 font-medium mt-2">
              Wedding Reception
            </h3>
            <p className="mt-3 text-sm sm:text-base text-charcoal-800 italic leading-relaxed">
              &ldquo;We cordially invite your esteemed presence and blessings with family and friends on the auspicious occasion of the marriage reception of our son&rdquo;
            </p>
          </div>

          {/* Couple & Parents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            {/* Groom Details */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/80 border border-sunshine-300/60 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-sunshine-100 rounded-bl-full -z-0 opacity-50" />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-sunshine-100 text-sunshine-700 text-xs font-semibold uppercase tracking-wider mb-2">
                  The Groom
                </span>
                <h4 className="text-3xl font-serif text-charcoal-900 font-medium">
                  Manu <span className="text-sunshine-600">A</span>
                </h4>
                <div className="mt-4 space-y-1 text-sm text-charcoal-800">
                  <p className="font-semibold text-charcoal-900">
                    Son of Mr. P. Azhagappan & Mrs. T. Maheswari
                  </p>
                  <p className="text-charcoal-800 leading-snug">
                    Zion Malai, South Kaisalavilai, Mekkamandapam P.O
                  </p>
                </div>
              </div>
            </div>

            {/* Bride Details */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/80 border border-sunshine-300/60 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-sunshine-100 rounded-bl-full -z-0 opacity-50" />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-sunshine-100 text-sunshine-700 text-xs font-semibold uppercase tracking-wider mb-2">
                  The Bride
                </span>
                <h4 className="text-3xl font-serif text-charcoal-900 font-medium">
                  Lakshmi <span className="text-sunshine-600">S</span>
                </h4>
                <div className="mt-4 space-y-1 text-sm text-charcoal-800">
                  <p className="font-semibold text-charcoal-900">
                    D/o. Mr. R. Saju & Mrs. Aswathy
                  </p>
                  <p className="text-charcoal-800 leading-snug">
                    Ilichira, Purakkad, Alappuzha
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Event Schedule & Venue Highlight Banner */}
          <div className="rounded-2xl bg-gradient-to-br from-botanical-900 via-botanical-950 to-charcoal-900 p-6 sm:p-8 text-white shadow-xl mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-sunshine-500/20">
              {/* Date */}
              <div className="pt-2 sm:pt-0">
                <div className="w-10 h-10 rounded-full bg-sunshine-500/20 text-sunshine-300 mx-auto flex items-center justify-center mb-2">
                  <Calendar className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase tracking-widest text-sunshine-300 font-medium">Date</p>
                <p className="text-xl sm:text-2xl font-serif font-semibold mt-1">22 November 2026</p>
                <p className="text-xs text-white font-medium mt-0.5">Sunday</p>
              </div>

              {/* Time */}
              <div className="pt-4 sm:pt-0">
                <div className="w-10 h-10 rounded-full bg-sunshine-500/20 text-sunshine-300 mx-auto flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase tracking-widest text-sunshine-300 font-medium">Reception Timing</p>
                <p className="text-xl sm:text-2xl font-serif font-semibold mt-1">5:00 PM to 10:00 PM</p>
                <p className="text-xs text-white font-medium mt-0.5">Evening Celebration</p>
              </div>

              {/* Venue */}
              <div className="pt-4 sm:pt-0">
                <div className="w-10 h-10 rounded-full bg-sunshine-500/20 text-sunshine-300 mx-auto flex items-center justify-center mb-2">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase tracking-widest text-sunshine-300 font-medium">Venue</p>
                <p className="text-base sm:text-lg font-serif font-semibold mt-1 leading-snug">
                  Punitha Vinorpu Annai Community Hall
                </p>
                <p className="text-xs text-white font-medium mt-0.5">Pilankalai</p>
              </div>
            </div>
          </div>

          {/* Compliments Section */}
          <div className="p-6 rounded-2xl bg-cream-100/70 border border-sunshine-200 text-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sunshine-700 font-semibold mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>With Best Compliments From</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-2">
              <div>
                <p className="text-xs text-charcoal-800 uppercase tracking-wider">Brother in Law</p>
                <p className="text-base font-serif font-semibold text-charcoal-900 mt-0.5">A. Vignesh</p>
              </div>
              <div className="hidden sm:block w-px bg-sunshine-300" />
              <div>
                <p className="text-xs text-charcoal-800 uppercase tracking-wider">Sister</p>
                <p className="text-base font-serif font-semibold text-charcoal-900 mt-0.5">A. Anusha</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Card Zoom Lightbox Modal */}
      <AnimatePresence>
        {isZoomModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomModalOpen(false)}
          >
            <motion.div
              className="relative max-w-3xl max-h-[92vh] rounded-2xl overflow-hidden p-2 sm:p-4 bg-gradient-to-b from-sunshine-400 to-sunshine-600 shadow-2xl flex flex-col items-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={cardImage}
                alt="Full Wedding Invitation Card"
                className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain bg-white shadow-2xl"
              />

              {/* Close Button */}
              <button
                onClick={() => setIsZoomModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/75 hover:bg-black text-white flex items-center justify-center cursor-pointer shadow-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WeddingCardSection;

