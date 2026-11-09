import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Heart, Sparkles } from 'lucide-react';

// Sunday, 22 November 2026 at 5:00 PM IST (Reception)
const EVENT_DATE = new Date('2026-11-22T17:00:00+05:30');

interface TimeUnit {
  value: number;
  label: string;
}

const CountdownCard: React.FC<{ value: number; label: string; index: number }> = ({ value, label, index }) => {
  const padded = String(Math.max(0, value)).padStart(2, '0');

  return (
    <motion.div
      className="flex flex-col items-center flex-1 min-w-[70px] max-w-[105px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div
        className="relative w-full aspect-[4/5] flex items-center justify-center rounded-2xl overflow-hidden shadow-xl"
        style={{
          background: 'linear-gradient(145deg, #0D281E 0%, #061A13 100%)',
          border: '1px solid rgba(245, 158, 11, 0.45)',
          boxShadow: '0 12px 30px -8px rgba(6, 26, 19, 0.35)',
        }}
      >
        {/* Subtle Gold Corner Accents */}
        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-sunshine-400/60" />
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-sunshine-400/60" />
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-sunshine-400/60" />
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-sunshine-400/60" />

        {/* Center Fold Divider Line */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-black/40 shadow-sm" />

        {/* Value with Golden Sunshine Shimmer */}
        <span className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-sunshine-300">
          {padded}
        </span>
      </div>

      <p className="mt-2.5 text-[11px] sm:text-xs tracking-[0.2em] uppercase text-charcoal-800 font-semibold">
        {label}
      </p>
    </motion.div>
  );
};

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([]);
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diff = EVENT_DATE.getTime() - now.getTime();

      if (diff <= 0) {
        setIsPast(true);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft([
        { value: days, label: 'Days' },
        { value: hours, label: 'Hours' },
        { value: minutes, label: 'Minutes' },
        { value: seconds, label: 'Seconds' },
      ]);
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Wedding Reception of Manu & Lakshmi'
  )}&dates=20261122T113000Z/20261122T163000Z&details=${encodeURIComponent(
    'Celebrating the wedding reception of Manu & Lakshmi. Punitha Vinorpu Annai Community Hall, Pilankalai.'
  )}&location=${encodeURIComponent(
    'Punitha Vinorpu Annai Community Hall, Pilankalai'
  )}`;

  return (
    <section id="countdown" className="relative w-full py-20 md:py-28 bg-[#FAF8F5] border-y border-sunshine-300/40 overflow-hidden">
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sunshine-100 text-sunshine-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Counting Down</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal-900 font-medium">
            {isPast ? 'The Celebration Has Begun! 🎉' : 'Until We Celebrate'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-charcoal-800 font-light">
            Sunday, 22 November 2026 · 5:00 PM Onwards
          </p>
        </motion.div>

        {!isPast ? (
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6">
              {timeLeft.map((unit, i) => (
                <React.Fragment key={unit.label}>
                  <CountdownCard value={unit.value} label={unit.label} index={i} />
                  {i < timeLeft.length - 1 && (
                    <span className="text-2xl sm:text-3xl font-serif text-sunshine-500 pb-6 select-none font-bold">
                      :
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Add to Calendar Button */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <a
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-cream-100 text-charcoal-800 border border-sunshine-400 text-xs sm:text-sm font-medium uppercase tracking-wider shadow-sm hover:shadow transition-all"
              >
                <Calendar className="w-4 h-4 text-sunshine-600" />
                <span>Save to Google Calendar</span>
              </a>
            </motion.div>

            <p className="mt-8 font-script text-xl sm:text-2xl text-sunshine-700">
              Every second brings us closer to a lifetime of joy together ✨
            </p>
          </div>
        ) : (
          <div className="py-8">
            <p className="font-script text-3xl text-sunshine-600">
              Thank you for being part of our special day! ❤️
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Countdown;

