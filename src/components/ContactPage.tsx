import React from 'react';
import { ContactBookingSection } from './ContactBookingSection';
import { motion, useScroll, useTransform } from 'motion/react';

interface ContactPageProps {
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  const { scrollY } = useScroll();
  const bannerY = useTransform(scrollY, [0, 400], [0, 90]);
  const bannerOpacity = useTransform(scrollY, [0, 350], [1, 0.3]);

  return (
    <div className="bg-white overflow-hidden">
      {/* Banner with Parallax */}
      <div className="relative py-24 bg-[#100909] text-white overflow-hidden">
        <motion.div
          style={{ y: bannerY, opacity: bannerOpacity }}
          className="absolute -top-10 -bottom-10 inset-x-0"
        >
          <img
            src="https://anaayaresidency.com/wp-content/uploads/2025/12/Hero-04.webp"
            alt="Contact Anaaya Residency"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#F8BB13] mb-3"
          >
            <button onClick={onNavigateHome} className="hover:underline cursor-pointer">
              Home
            </button>
            <span>/</span>
            <span>Contact Us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-gray-300 text-base sm:text-lg"
          >
            Connect &amp; Book Your Experience. Get in touch with our team for reservations and travel inquiries.
          </motion.p>
        </div>
      </div>

      {/* Main Contact Section */}
      <ContactBookingSection />
    </div>
  );
};
