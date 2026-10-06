import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQS, HOTEL_INFO } from '../data/hotelData';
import { motion, AnimatePresence } from 'motion/react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Header with scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-[#E29600] font-semibold tracking-wider uppercase text-xs sm:text-sm block mb-2">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#100909] leading-tight">
            Details That Matter for Your Comfort.
          </h2>
          <p className="mt-3 text-[#636363] text-sm sm:text-base leading-relaxed">
            Find answers to frequently asked questions about room bookings, amenities, and hotel guidelines.
          </p>
        </motion.div>

        {/* Accordion with smooth height transitions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-[#DEECDF] rounded-xl overflow-hidden bg-[#F0F4F1] transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-serif font-bold text-base sm:text-lg text-[#100909] hover:text-[#E29600] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-[#E29600] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-[#E29600]"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#636363] leading-relaxed border-t border-[#DEECDF]/60 bg-white">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* 24/7 Guest Support Box with motion reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 p-6 rounded-xl bg-gradient-to-r from-[#100909] to-[#251d1d] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-[#E29600] text-white flex items-center justify-center shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#F8BB13] font-semibold">24/7 Guest Support</p>
              <h4 className="text-xl font-bold font-serif">Need Expert Advice or Special Request?</h4>
              <p className="text-xs text-gray-300">Call us anytime for direct instant assistance.</p>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`tel:${HOTEL_INFO.phonePrimaryRaw}`}
            className="px-6 py-3 rounded-lg bg-[#E29600] hover:bg-[#c98400] text-white font-semibold text-sm transition-colors shrink-0 cursor-pointer"
          >
            Call {HOTEL_INFO.phonePrimary}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

