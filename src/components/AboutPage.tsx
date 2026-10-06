import React from 'react';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';
import { Target, Eye, HeartHandshake, Phone, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

interface AboutPageProps {
  onNavigateHome: () => void;
  onSelectRoom: (slug: string) => void;
  onBookNow: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome, onSelectRoom, onBookNow }) => {
  const { scrollY } = useScroll();
  const bannerY = useTransform(scrollY, [0, 400], [0, 100]);
  const bannerOpacity = useTransform(scrollY, [0, 350], [1, 0.3]);

  return (
    <div className="bg-white overflow-hidden">
      {/* Page Header Banner with Parallax */}
      <div className="relative py-24 bg-[#100909] text-white overflow-hidden">
        <motion.div
          style={{ y: bannerY, opacity: bannerOpacity }}
          className="absolute -top-12 -bottom-12 inset-x-0"
        >
          <img
            src="https://anaayaresidency.com/wp-content/uploads/2025/12/Hero-04.webp"
            alt="About Anaaya Residency"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#F8BB13] mb-3"
          >
            <button onClick={onNavigateHome} className="hover:underline cursor-pointer">
              Home
            </button>
            <span>/</span>
            <span>About Us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            About Anaaya Residency
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-gray-300 text-base sm:text-lg"
          >
            A peaceful and well-maintained stay located minutes from Kamakhya Temple in Guwahati.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-20">
        {/* Welcome Section with Scroll Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DEECDF] text-[#100909] text-xs font-semibold uppercase">
              <span>🌿</span>
              <span>Welcome to Anaaya Residency</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#100909] leading-tight">
              Comfort &amp; Warm Hospitality in Maligaon, Guwahati
            </h2>

            <p className="text-[#636363] text-base leading-relaxed">
              <strong className="text-[#100909]">Anaaya Residency</strong> is a comfortable and welcoming hotel located in <span className="text-[#100909] font-medium">Maligaon, Guwahati</span>, near the sacred <span className="text-[#100909] font-medium">Kamakhya Temple</span>. We are dedicated to offering a peaceful, clean, and convenient stay for pilgrims, families, and travelers visiting the city.
            </p>

            <p className="text-[#636363] text-base leading-relaxed">
              Our prime location, warm hospitality, and well-maintained rooms make Anaaya Residency an ideal choice for guests seeking comfort and ease during their visit to Guwahati.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onBookNow}
                className="px-6 py-3 rounded-md bg-[#E29600] hover:bg-[#c98400] text-white font-medium text-sm transition-colors cursor-pointer shadow-md"
              >
                Book Your Stay
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${HOTEL_INFO.phonePrimaryRaw}`}
                className="flex items-center gap-2 px-6 py-3 rounded-md border border-gray-300 text-[#100909] hover:bg-gray-50 text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E29600]" />
                <span>{HOTEL_INFO.phonePrimary}</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Video / Photo Preview with Slide-in */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black">
              <video
                src={HOTEL_INFO.videoUrl}
                controls
                className="w-full h-auto object-cover"
                poster="https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01086-scaled.jpg"
              />
            </div>
          </motion.div>
        </div>

        {/* Comfortable Rooms for Every Guest with Staggered Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#F0F4F1] p-8 sm:p-12 rounded-2xl border border-[#DEECDF]"
        >
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#100909] mb-3 flex items-center gap-2">
              <span>🛏️</span>
              <span>Comfortable Rooms for Every Guest</span>
            </h3>
            <p className="text-[#636363] text-sm sm:text-base leading-relaxed">
              We offer thoughtfully designed rooms to suit different travel needs. Each room is designed to provide a relaxing atmosphere with essential amenities, cleanliness, and scenic surroundings:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ROOMS.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => onSelectRoom(room.slug)}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-xl transition-shadow cursor-pointer border border-gray-100 flex flex-col justify-between group"
              >
                <div>
                  <div className="overflow-hidden rounded-lg mb-4 aspect-[16/10] bg-gray-100">
                    <img
                      src={room.mainImage}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-serif font-bold text-[#100909] text-lg mb-2 group-hover:text-[#E29600] transition-colors">
                    {room.name}
                  </h4>
                  <p className="text-xs text-[#636363] line-clamp-2 mb-4 leading-relaxed">
                    {room.shortDesc}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs font-semibold text-[#E29600]">
                  <span>{room.price} /Night</span>
                  <span className="group-hover:translate-x-1 transition-transform">View Details →</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission, Vision, Values 3-Grid with Staggered Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              emoji: '🎯',
              title: 'Our Mission',
              desc: HOTEL_INFO.mission,
            },
            {
              icon: Eye,
              emoji: '👁️',
              title: 'Our Vision',
              desc: HOTEL_INFO.vision,
            },
            {
              icon: HeartHandshake,
              emoji: '🤝',
              title: 'Our Values',
              desc: HOTEL_INFO.values,
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-[#E29600]/20 text-[#E29600] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#100909] mb-3">
                  {item.emoji} {item.title}
                </h3>
                <p className="text-[#636363] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Prime Location Advantage Banner with Fade Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#100909] text-white p-8 sm:p-12 rounded-2xl shadow-xl overflow-hidden relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#F8BB13] font-semibold block mb-2">
                📍 Prime Location Advantage
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
                Stay Close to Kamakhya Temple &amp; Guwahati Hubs
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Situated right on Assam Trunk Road, HG Tower, opposite LCB College bus stop in Maligaon, guests enjoy seamless access to local transit, Kamakhya Railway Station, hospitals, and temple darshan gates.
              </p>

              <div className="space-y-2.5 text-sm text-gray-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F8BB13] shrink-0" />
                  <span>5-10 minutes drive to Kamakhya Temple Main Gate</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F8BB13] shrink-0" />
                  <span>Kamakhya Junction Railway Station easily accessible</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F8BB13] shrink-0" />
                  <span>Near Sanjeevani Hospital and local markets</span>
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-md"
            >
              <h4 className="font-serif font-bold text-lg mb-2 text-[#F8BB13]">📞 Get in Touch</h4>
              <p className="text-xs text-gray-300 mb-4">
                Have questions about your upcoming trip or pilgrimage to Kamakhya? Our friendly team is here to assist 24 hours a day.
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${HOTEL_INFO.phonePrimaryRaw}`}
                  className="flex items-center gap-3 p-3 bg-[#E29600] rounded-lg text-white font-bold text-sm hover:bg-[#c98400] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {HOTEL_INFO.phonePrimary}</span>
                </a>
                <a
                  href={HOTEL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#25D366] rounded-lg text-white font-bold text-sm hover:bg-[#20b858] transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
