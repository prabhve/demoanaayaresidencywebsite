import React from 'react';
import { Tag, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface OfferBannerProps {
  onBookClick: () => void;
}

export const OfferBanner: React.FC<OfferBannerProps> = ({ onBookClick }) => {
  return (
    <section className="relative py-16 bg-[#100909] text-white overflow-hidden">
      {/* Background imagery */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01086-scaled.jpg"
          alt="Luxury Stay Guwahati"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#100909] via-[#100909]/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 bg-gradient-to-r from-[#1c1515] to-[#251d1d] p-8 sm:p-12 rounded-2xl border border-[#E29600]/30 shadow-2xl"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E29600]/20 border border-[#E29600]/40 text-[#F8BB13] text-xs font-semibold uppercase tracking-wider mb-3">
              <Tag className="w-3.5 h-3.5" />
              <span>Todays Offers • Limited Time</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-3">
              Exclusive Rates on Comfortable City Stays
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              Browse photos of our rooms and interiors designed for a comfortable stay. Experience the warm Assamese hospitality at best prices available online.
            </p>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-300">
              <span className="flex items-center gap-1.5 text-[#F8BB13]">
                <Sparkles className="w-4 h-4" /> Best Price Available Directly
              </span>
              <span>•</span>
              <span>Free Wi-Fi Included</span>
              <span>•</span>
              <span>24x7 Inhouse Kitchen</span>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={onBookClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-[#E29600] hover:bg-[#c98400] text-white font-semibold text-base shadow-xl transition-all cursor-pointer"
            >
              <span>Book Today</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

