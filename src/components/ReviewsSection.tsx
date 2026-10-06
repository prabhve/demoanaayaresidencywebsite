import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { REVIEWS } from '../data/hotelData';
import { motion, AnimatePresence } from 'motion/react';

export const ReviewsSection: React.FC = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const pageSize = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, REVIEWS.length - pageSize);

  const prevReview = () => {
    setScrollIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextReview = () => {
    setScrollIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F0F4F1] border-t border-[#DEECDF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Trustindex Google Header with scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-[#DEECDF] mb-8 sm:mb-10 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            {/* Google Logo */}
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-[#100909]">Google Reviews</h2>
                <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                  <span className="font-bold text-xs sm:text-sm text-gray-800">EXCELLENT</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] sm:text-xs text-gray-500 font-medium">Based on 30 reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trustindex Symbol of Trust badge */}
          <div className="flex items-center gap-3 bg-[#F0F4F1] p-3 sm:px-4 sm:py-2.5 rounded-lg border border-[#DEECDF] w-full md:max-w-md">
            <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600 shrink-0" />
            <div className="text-[11px] sm:text-xs">
              <span className="font-bold text-[#100909] block">Verified by Trustindex</span>
              <p className="text-gray-500 line-clamp-2">
                Universal Symbol of Trust. Verified score above 4.5 based on genuine customer reviews over the past 12 months.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Reviews Cards Slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {REVIEWS.slice(scrollIndex, scrollIndex + pageSize).map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  {/* Header with avatar, name, and google logo */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-10 h-10 rounded-full object-cover border border-gray-200"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            "https://cdn.trustindex.io/assets/platform/Google/icon.svg";
                        }}
                      />
                      <div>
                        <h4 className="font-semibold text-sm text-[#100909]">{review.name}</h4>
                        <p className="text-xs text-gray-400">{review.date}</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  </div>

                  {/* Stars */}
                  <div className="flex text-amber-400 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-[#636363] leading-relaxed mb-4">
                    "{review.comment}"
                  </p>
                </div>

                {/* Trustindex verification note */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3 text-emerald-600" /> Posted on Google
                  </span>
                  <span>Verified Source</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center justify-center gap-3 mt-6 sm:mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevReview}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 bg-white hover:bg-[#E29600] hover:text-white hover:border-[#E29600] transition-colors flex items-center justify-center cursor-pointer shadow-sm"
            aria-label="Previous Reviews"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <span className="text-xs text-gray-500 font-medium">
            {isMobile
              ? `${scrollIndex + 1} of ${REVIEWS.length}`
              : `Page ${Math.floor(scrollIndex / 3) + 1} of ${Math.ceil(REVIEWS.length / 3)}`}
          </span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextReview}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 bg-white hover:bg-[#E29600] hover:text-white hover:border-[#E29600] transition-colors flex items-center justify-center cursor-pointer shadow-sm"
            aria-label="Next Reviews"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};


