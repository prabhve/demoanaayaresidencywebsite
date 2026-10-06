import React from 'react';
import { SERVICES } from '../data/hotelData';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  onInquire: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onInquire }) => {
  return (
    <section id="services-section" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-[#E29600] font-semibold tracking-wider uppercase text-xs sm:text-sm block mb-2">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#100909] leading-tight">
              Quality Services for Guests
            </h2>
            <p className="mt-3 text-[#636363] text-base leading-relaxed">
              Premium services delivering comfort and memorable experiences for all guests.
            </p>
          </div>

          <motion.button
            whileHover={{ x: 5 }}
            onClick={onInquire}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#100909] hover:text-[#E29600] transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4 text-[#E29600]" />
          </motion.button>
        </motion.div>

        {/* Services Cards with Staggered Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`bg-[#F0F4F1] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-[#DEECDF] flex flex-col group ${
                index === 3 || index === 4 ? 'lg:col-span-1' : ''
              }`}
            >
              {/* Image with subtle zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01086-scaled.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-4 text-white font-serif font-bold text-lg">
                  {service.title}
                </div>
              </div>

              {/* Text */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-sm text-[#636363] leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-4 pt-3 border-t border-[#DEECDF] flex items-center justify-between text-xs text-[#E29600] font-semibold">
                  <span>Guest First Hospitality</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

