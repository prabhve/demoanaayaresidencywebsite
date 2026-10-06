import React, { useState } from 'react';
import { Phone, Target, Eye, HeartHandshake } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { motion, AnimatePresence } from 'motion/react';

interface AboutSectionProps {
  onReadMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onReadMore }) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'value'>('mission');

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DEECDF] text-[#100909] text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#E29600]" />
              <span>Serving Guests with Care & Comfort • About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#100909] leading-tight">
              A Peaceful Stay Designed for <br />
              <span className="text-[#E29600]">Comfort &amp; Convenience</span>
            </h2>

            <p className="text-[#636363] text-base sm:text-lg leading-relaxed">
              {HOTEL_INFO.subDescription}
            </p>

            {/* Mission, Vision, Value Tabs */}
            <div className="pt-2">
              <div className="flex border-b border-gray-200 gap-2 sm:gap-8 overflow-x-auto no-scrollbar pb-0.5">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`flex items-center gap-1.5 pb-2.5 sm:pb-3 text-xs sm:text-sm font-semibold transition-colors relative cursor-pointer shrink-0 ${
                    activeTab === 'mission'
                      ? 'text-[#E29600] after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#E29600]'
                      : 'text-gray-500 hover:text-[#100909]'
                  }`}
                >
                  <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Our Mission</span>
                </button>

                <button
                  onClick={() => setActiveTab('vision')}
                  className={`flex items-center gap-1.5 pb-2.5 sm:pb-3 text-xs sm:text-sm font-semibold transition-colors relative cursor-pointer shrink-0 ${
                    activeTab === 'vision'
                      ? 'text-[#E29600] after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#E29600]'
                      : 'text-gray-500 hover:text-[#100909]'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Our Vision</span>
                </button>

                <button
                  onClick={() => setActiveTab('value')}
                  className={`flex items-center gap-1.5 pb-2.5 sm:pb-3 text-xs sm:text-sm font-semibold transition-colors relative cursor-pointer shrink-0 ${
                    activeTab === 'value'
                      ? 'text-[#E29600] after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#E29600]'
                      : 'text-gray-500 hover:text-[#100909]'
                  }`}
                >
                  <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Our Value</span>
                </button>
              </div>

              {/* Tab Content Box with animated swap */}
              <div className="py-4 bg-[#F0F4F1] p-4 sm:p-5 rounded-lg mt-3 sm:mt-4 border border-[#DEECDF] min-h-[90px] flex items-center">
                <AnimatePresence mode="wait">
                  {activeTab === 'mission' && (
                    <motion.p
                      key="mission"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#100909] text-xs sm:text-base leading-relaxed"
                    >
                      {HOTEL_INFO.mission}
                    </motion.p>
                  )}
                  {activeTab === 'vision' && (
                    <motion.p
                      key="vision"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#100909] text-xs sm:text-base leading-relaxed"
                    >
                      {HOTEL_INFO.vision}
                    </motion.p>
                  )}
                  {activeTab === 'value' && (
                    <motion.p
                      key="value"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#100909] text-xs sm:text-base leading-relaxed"
                    >
                      {HOTEL_INFO.values}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Read More button & Phone support strip */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onReadMore}
                className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#100909] hover:bg-[#E29600] text-white font-medium text-sm transition-colors cursor-pointer text-center"
              >
                Read More
              </motion.button>

              <motion.a
                whileHover={{ x: 3 }}
                href={`tel:${HOTEL_INFO.phonePrimaryRaw}`}
                className="flex items-center gap-3 p-2 group cursor-pointer bg-gray-50 sm:bg-transparent rounded-lg border sm:border-0 border-gray-200"
              >
                <div className="w-10 h-10 rounded-full bg-[#E29600] text-white flex items-center justify-center shadow shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-base font-bold text-[#100909] group-hover:text-[#E29600] transition-colors leading-tight">
                    {HOTEL_INFO.phonePrimary}
                  </p>
                  <p className="text-xs text-gray-500">Contact us for support via phone or email.</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Hotel Video Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black">
              {/* Hotel MP4 Video */}
              <video
                src={HOTEL_INFO.videoUrl}
                controls
                playsInline
                className="w-full h-auto aspect-video lg:aspect-[4/5] object-cover"
                poster="https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01086-scaled.jpg"
              >
                Your browser does not support the video tag.
              </video>

              {/* Floating Overlay Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                <span className="text-xs font-semibold text-[#100909]">Anaaya Residency Video Tour</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

