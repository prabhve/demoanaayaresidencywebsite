import React from 'react';
import { CalendarCheck, PhoneCall } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { motion } from 'motion/react';

interface CtaBannerProps {
  onReserveClick: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onReserveClick }) => {
  return (
    <section className="relative py-16 bg-[#F0F4F1] border-y border-[#DEECDF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#100909] mb-3">
              Ready for a Comfortable Stay in Guwahati?
            </h2>
            <p className="text-[#636363] text-base leading-relaxed">
              Enjoy a peaceful stay with clean rooms, scenic views, and easy access to Kamakhya Temple.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={onReserveClick}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-md bg-[#E29600] hover:bg-[#c98400] text-white font-semibold text-base shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Reserve Now</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${HOTEL_INFO.phonePrimaryRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#100909] hover:bg-black text-white font-medium text-base transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#F8BB13]" />
              <span>Call Us</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

