import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

import frontPhoto from '../assets/front-view.jpg';
import backPhoto from '../assets/back-view.jpg';

const StorySection: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#FAF8F5] overflow-hidden">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-botanical-50 border border-botanical-200 text-botanical-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-sunshine-600 fill-sunshine-600" />
            <span>Our Moments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal-900 font-medium">
            Two Hearts, One Journey
          </h2>
          <p className="mt-3 text-sm sm:text-base text-charcoal-800 font-light max-w-lg mx-auto">
            From quiet glances to endless laughter, every step has brought us here to this beautiful day.
          </p>
        </motion.div>

        {/* Two Balanced Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Moment 1: Front Photo */}
          <motion.div
            className="luxury-card rounded-3xl p-4 sm:p-6 group overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-cream-100 shadow-inner">
              <img
                src={frontPhoto}
                alt="Manu & Lakshmi embracing"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] uppercase tracking-widest text-sunshine-300 font-semibold">
                  A Love in Bloom
                </span>
                <p className="text-sm sm:text-base font-serif italic mt-1 text-white/95">
                  &ldquo;In your embrace, I found my forever home.&rdquo;
                </p>
              </div>
            </div>
            <div className="mt-4 px-2 text-center">
              <h3 className="font-serif text-lg text-charcoal-900 font-medium">Where Love Found Us</h3>
              <p className="text-xs text-charcoal-800 mt-1">Surrounded by warmth, joy, and laughter</p>
            </div>
          </motion.div>

          {/* Moment 2: Back Photo */}
          <motion.div
            className="luxury-card rounded-3xl p-4 sm:p-6 group overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-cream-100 shadow-inner">
              <img
                src={backPhoto}
                alt="Manu & Lakshmi gazing at the sea"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] uppercase tracking-widest text-sunshine-300 font-semibold">
                  Seaside Sunset
                </span>
                <p className="text-sm sm:text-base font-serif italic mt-1 text-white/95">
                  &ldquo;Looking towards an endless horizon, together as one.&rdquo;
                </p>
              </div>
            </div>
            <div className="mt-4 px-2 text-center">
              <h3 className="font-serif text-lg text-charcoal-900 font-medium">Gazing Toward Forever</h3>
              <p className="text-xs text-charcoal-800 mt-1">Every tomorrow is brighter by your side</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

