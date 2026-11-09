import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Copy, Check, Clock, ExternalLink } from 'lucide-react';

const VenueLocation: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [copied, setCopied] = useState(false);

  // Pilankalai / Mekkamandapam, Kanyakumari District coordinates (approx: 8.272° N, 77.305° E)
  const venueLat = 8.2720;
  const venueLng = 77.3050;
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Punitha+Vinorpu+Annai+Community+Hall+Pilankalai';

  useEffect(() => {
    let isMounted = true;

    const initMap = async () => {
      try {
        const L = await import('leaflet');
        if (!isMounted || !mapContainerRef.current) return;

        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        }

        const map = L.map(mapContainerRef.current, {
          center: [venueLat, venueLng],
          zoom: 14,
          scrollWheelZoom: false,
        });

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
          maxZoom: 19,
        }).addTo(map);

        // Custom Golden Flower Marker
        const customIcon = L.divIcon({
          className: 'custom-venue-marker',
          html: `
            <div style="
              width: 40px;
              height: 48px;
              display: flex;
              flex-direction: column;
              align-items: center;
              filter: drop-shadow(0 6px 10px rgba(0,0,0,0.3));
            ">
              <div style="
                width: 38px;
                height: 38px;
                border-radius: 50% 50% 50% 0;
                background: linear-gradient(135deg, #F59E0B, #B45309);
                transform: rotate(-45deg);
                border: 2.5px solid white;
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                <span style="transform: rotate(45deg); font-size: 18px;">💍</span>
              </div>
            </div>
          `,
          iconSize: [40, 48],
          iconAnchor: [20, 48],
          popupAnchor: [0, -46],
        });

        const marker = L.marker([venueLat, venueLng], { icon: customIcon }).addTo(map);

        marker.bindPopup(`
          <div style="text-align: center; font-family: 'Plus Jakarta Sans', sans-serif; padding: 6px;">
            <p style="color: #D97706; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 700; margin-bottom: 2px;">Wedding Reception Venue</p>
            <h4 style="font-size: 14px; font-weight: 700; color: #111827; margin: 0 0 4px;">Punitha Vinorpu Annai Community Hall</h4>
            <p style="font-size: 12px; color: #4B5563; margin: 0;">Pilankalai, Mekkamandapam P.O</p>
          </div>
        `).openPopup();

        mapInstanceRef.current = map;

        setTimeout(() => {
          if (map) map.invalidateSize();
        }, 400);
      } catch (err) {
        console.warn('Map initialization:', err);
      }
    };

    initMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const handleCopyAddress = () => {
    const address = 'Punitha Vinorpu Annai Community Hall, Pilankalai, Mekkamandapam P.O, Kanyakumari District';
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="relative w-full py-20 md:py-32 bg-gradient-to-b from-[#FAF8F5] via-[#F6F0E4] to-[#FAF8F5] overflow-hidden">
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sunshine-100 text-sunshine-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Venue & Directions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal-900 font-medium">
            Join Us at the Reception
          </h2>
          <p className="mt-3 text-sm sm:text-base text-charcoal-800 font-light max-w-lg mx-auto">
            We can&apos;t wait to celebrate this joyful evening with all our dear friends and family!
          </p>
        </motion.div>

        {/* Venue Info Card */}
        <motion.div
          className="luxury-card rounded-3xl p-6 sm:p-10 mb-8 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-14 h-14 rounded-full bg-sunshine-500/10 border border-sunshine-400/40 mx-auto flex items-center justify-center text-sunshine-600 mb-4">
            <MapPin className="w-6 h-6" />
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-charcoal-900 font-medium mb-2">
            Punitha Vinorpu Annai Community Hall
          </h3>

          <p className="text-base sm:text-lg text-charcoal-800 max-w-md mx-auto leading-relaxed mb-6 font-light">
            Pilankalai, Mekkamandapam P.O, Kanyakumari District
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-charcoal-800">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cream-100 border border-sunshine-300">
              <Clock className="w-4 h-4 text-sunshine-600" />
              <span>5:00 PM – 10:00 PM</span>
            </div>
            <button
              onClick={handleCopyAddress}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-cream-100 border border-charcoal-200 text-charcoal-800 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-botanical-700" />
                  <span className="text-botanical-700 font-medium">Address Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-sunshine-600" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Interactive Map */}
        <motion.div
          className="luxury-card rounded-3xl overflow-hidden p-2 sm:p-3 shadow-xl"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            ref={mapContainerRef}
            className="w-full h-80 sm:h-96 md:h-[400px] rounded-2xl overflow-hidden relative z-0"
            style={{ background: '#F2E8D5' }}
          />
        </motion.div>

        {/* Google Maps External Action Button */}
        <div className="mt-8 text-center">
          <motion.a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-botanical-900 via-botanical-950 to-charcoal-900 text-sunshine-300 hover:text-white border border-sunshine-400/50 text-xs sm:text-sm uppercase tracking-widest font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Navigation className="w-4 h-4 text-sunshine-400" />
            <span>Open in Google Maps / Directions</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default VenueLocation;

