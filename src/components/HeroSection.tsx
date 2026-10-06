import React, { useRef } from 'react';
import { Phone, Utensils, ShieldCheck, MapPin, Landmark } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { motion, useScroll, useTransform } from 'motion/react';

interface HeroSectionProps {
  onBookNowClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookNowClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax transform for hero background
  const bgY = useTransform(scrollY, [0, 600], [0, 140]);
  const heroContentOpacity = useTransform(scrollY, [0, 450], [1, 0.2]);
  const heroContentY = useTransform(scrollY, [0, 450], [0, 40]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[580px] lg:min-h-[660px] flex flex-col justify-between overflow-hidden"
    >
      {/* Background with luxury parallax effect */}
      <motion.div
        className="absolute -top-10 -bottom-10 inset-x-0 z-0"
        style={{ y: bgY }}
      >
        <img
          src={HOTEL_INFO.heroBg}
          alt="Anaaya Residency Guwahati"
          className="w-full h-full object-cover object-center scale-110"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01086-scaled.jpg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
      </motion.div>

      {/* Main Content with fade & slide */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-16 sm:pt-24 pb-12 my-auto w-full"
        style={{ opacity: heroContentOpacity, y: heroContentY }}
      >
        <div className="max-w-2xl text-white">
          {/* Subtitle tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E29600]/20 border border-[#E29600]/40 text-[#F8BB13] text-sm font-medium tracking-wider uppercase mb-4 backdrop-blur-sm"
          >
            <span>🌿</span>
            <span>Comfortable Stays near</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight tracking-tight mb-5"
          >
            Kamakhya Temple, <br />
            <span className="text-[#F8BB13]">Guwahati</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-light"
          >
            Well-appointed rooms designed for families, business travelers, and city visitors seeking a comfortable and peaceful stay in Guwahati.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onBookNowClick}
              className="w-full sm:w-auto px-7 py-3.5 rounded-md bg-[#E29600] hover:bg-[#c98400] text-white font-medium text-base tracking-wide shadow-lg hover:shadow-xl transition-all cursor-pointer text-center"
            >
              Book Now
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${HOTEL_INFO.phonePrimaryRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium text-base backdrop-blur-md border border-white/20 hover:border-white/40 transition-all cursor-pointer text-center"
            >
              <Phone className="w-4 h-4 text-[#F8BB13]" />
              <span>Reservation: {HOTEL_INFO.phonePrimary}</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Highlights Strip with staggered appearance */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 w-full bg-[#100909]/95 border-t border-white/10 backdrop-blur-md py-3.5 sm:py-4 px-3 sm:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-white text-xs sm:text-sm">
          {/* Item 1 */}
          <motion.div
            whileHover={{ y: -2 }}
            className="flex items-center gap-2.5 sm:gap-3 transition-transform"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E29600]/20 flex items-center justify-center shrink-0 border border-[#E29600]/30">
              <Utensils className="w-4 h-4 sm:w-5 sm:h-5 text-[#E29600]" />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-white truncate">Inhouse Kitchen</p>
              <p className="text-[11px] sm:text-xs text-gray-300">24 x 7 Available</p>
            </div>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            whileHover={{ y: -2 }}
            className="flex items-center gap-2.5 sm:gap-3 transition-transform"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E29600]/20 flex items-center justify-center shrink-0 border border-[#E29600]/30">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#E29600]" />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-white truncate">Parking &amp; Security</p>
              <p className="text-[11px] sm:text-xs text-gray-300">Top Rated &amp; CCTV</p>
            </div>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            whileHover={{ y: -2 }}
            className="flex items-center gap-2.5 sm:gap-3 transition-transform"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E29600]/20 flex items-center justify-center shrink-0 border border-[#E29600]/30">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#E29600]" />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-white truncate">Location Advantage</p>
              <p className="text-[11px] sm:text-xs text-gray-300">Maligaon Main Road</p>
            </div>
          </motion.div>

          {/* Item 4 */}
          <motion.div
            whileHover={{ y: -2 }}
            className="flex items-center gap-2.5 sm:gap-3 transition-transform"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E29600]/20 flex items-center justify-center shrink-0 border border-[#E29600]/30">
              <Landmark className="w-4 h-4 sm:w-5 sm:h-5 text-[#E29600]" />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-white truncate">Kamakhya Temple</p>
              <p className="text-[11px] sm:text-xs text-gray-300">Near Main Gate</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

