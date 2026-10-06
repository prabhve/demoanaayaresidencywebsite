import React from 'react';
import { BedDouble, Users, Sparkles, Award } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyChooseSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#100909] text-white overflow-hidden">
      {/* Background with luxury mood */}
      <div className="absolute inset-0 opacity-25">
        <img
          src="https://anaayaresidency.com/wp-content/uploads/2025/12/Why-Choose-Us-1.webp"
          alt="Why Choose Anaaya Residency"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01086-scaled.jpg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#100909] via-transparent to-[#100909]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E29600]/20 border border-[#E29600]/40 text-[#F8BB13] text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Since 2021 • Why Choose Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
            Why Guests Choose Anaaya Residency?
          </h2>

          <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
            A comfortable 3-star stay with clean rooms, friendly service, and a well-connected Guwahati location.
          </p>
        </motion.div>

        {/* 3 Value Proposition Cards with staggered motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="bg-[#1c1515]/90 border border-white/10 hover:border-[#E29600]/50 rounded-2xl p-8 backdrop-blur-md transition-shadow duration-300 hover:shadow-2xl flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#E29600]/20 text-[#F8BB13] flex items-center justify-center mb-6 border border-[#E29600]/30 group-hover:scale-110 transition-transform">
                <BedDouble className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#F8BB13] transition-colors">
                Premium Rooms &amp; Suites
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                Modern interiors, comfortable bedding, and essential in-room amenities for a restful stay.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#E29600] font-medium">
              City &amp; Mountain View Available
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="bg-[#1c1515]/90 border border-white/10 hover:border-[#E29600]/50 rounded-2xl p-8 backdrop-blur-md transition-shadow duration-300 hover:shadow-2xl flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#E29600]/20 text-[#F8BB13] flex items-center justify-center mb-6 border border-[#E29600]/30 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#F8BB13] transition-colors">
                Professional &amp; Friendly Staff
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                Helpful, responsive service from check-in to checkout. 24x7 front desk and room assistance.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#E29600] font-medium">
              Round-the-clock Hospitality
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="bg-[#1c1515]/90 border border-white/10 hover:border-[#E29600]/50 rounded-2xl p-8 backdrop-blur-md transition-shadow duration-300 hover:shadow-2xl flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#E29600]/20 text-[#F8BB13] flex items-center justify-center mb-6 border border-[#E29600]/30 group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#F8BB13] transition-colors">
                Hygiene &amp; Comfort Standards
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                Thoughtfully maintained spaces for guest comfort, sanitised bathrooms, and daily housekeeping.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#E29600] font-medium">
              Cleanliness &amp; Disinfection First
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

