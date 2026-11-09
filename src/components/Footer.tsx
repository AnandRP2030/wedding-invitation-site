import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full py-16 sm:py-20 bg-gradient-to-b from-[#FAF8F5] via-[#0D281E] to-[#061A13] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        {/* Celebration Wishes Card */}
        <motion.div
          className="luxury-card-dark rounded-3xl p-8 sm:p-12 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-12 h-12 rounded-full bg-sunshine-500/20 border border-sunshine-400/40 mx-auto flex items-center justify-center text-sunshine-300 mb-4">
            <Heart className="w-5 h-5 fill-sunshine-400 text-sunshine-400" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-normal text-sunshine-100 mb-2">
            Celebrate With Us
          </h3>
          <p className="text-sm sm:text-base text-emerald-100/90 max-w-md mx-auto font-light leading-relaxed">
            Your presence, warm blessings, and love mean the world to us as we begin this new chapter together!
          </p>
        </motion.div>

        {/* Closing Signature */}
        <div className="space-y-2">
          <p className="font-script text-3xl sm:text-4xl text-sunshine-300">
            Manu & Lakshmi
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/70 font-light">
            Sunday, 22 November 2026 · Pilankalai
          </p>
          <p className="text-[11px] text-emerald-300/40 pt-4">
            With love & gratitude from both families
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
