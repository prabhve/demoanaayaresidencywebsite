import React from 'react';
import { Bed, Bath, Users, Eye, ArrowRight } from 'lucide-react';
import { ROOMS, Room } from '../data/hotelData';
import { motion } from 'motion/react';

interface RoomsSectionProps {
  onSelectRoom: (slug: string) => void;
  onBookRoom: (room: Room) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onSelectRoom, onBookRoom }) => {
  return (
    <section id="rooms-section" className="py-20 bg-[#F0F4F1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header with scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-[#E29600] font-semibold tracking-wider uppercase text-xs sm:text-sm block mb-2">
              Rooms &amp; Suites
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#100909] leading-tight">
              Thoughtfully Designed Rooms for Every Traveler
            </h2>
            <p className="mt-3 text-[#636363] text-base leading-relaxed">
              Experience comfort, cleanliness, and scenic surroundings in our well-furnished rooms, designed for a relaxed and comfortable city stay in Guwahati.
            </p>
          </div>

          <motion.button
            whileHover={{ x: 5 }}
            onClick={() => onSelectRoom(ROOMS[0].slug)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#100909] hover:text-[#E29600] transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>View All Rooms</span>
            <ArrowRight className="w-4 h-4 text-[#E29600]" />
          </motion.button>
        </motion.div>

        {/* Room Cards Grid with staggered viewport reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col group"
            >
              {/* Image Container with view badge */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={room.mainImage}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01086-scaled.jpg";
                  }}
                />
                <div className="absolute top-3 left-3 bg-[#100909]/80 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-medium">
                  {room.view}
                </div>

                <div className="absolute bottom-3 right-3 bg-[#E29600] text-white px-3 py-1.5 rounded-md shadow-md text-xs font-semibold">
                  <span>{room.price}</span>
                  <span className="text-white/80 font-normal ml-0.5">{room.priceNote}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => onSelectRoom(room.slug)}
                    className="text-xl font-serif font-bold text-[#100909] hover:text-[#E29600] transition-colors cursor-pointer mb-2.5"
                  >
                    {room.name}
                  </h3>
                  <p className="text-sm text-[#636363] leading-relaxed line-clamp-3 mb-5">
                    {room.shortDesc}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2.5 py-3 border-y border-gray-100 text-xs text-[#100909] mb-5">
                    <div className="flex items-center gap-2">
                      <Bed className="w-3.5 h-3.5 text-[#E29600]" />
                      <span>{room.beds}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-3.5 h-3.5 text-[#E29600]" />
                      <span>{room.baths}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#E29600]" />
                      <span>{room.guests}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-3.5 h-3.5 text-[#E29600]" />
                      <span className="truncate">{room.view}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => onBookRoom(room)}
                    className="flex-1 py-2.5 px-4 bg-[#E29600] hover:bg-[#c98400] text-white text-sm font-semibold rounded-md shadow-sm transition-colors text-center cursor-pointer"
                  >
                    Book Now
                  </motion.button>

                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => onSelectRoom(room.slug)}
                    className="py-2.5 px-3 border border-gray-300 hover:border-[#100909] text-[#100909] text-sm font-medium rounded-md transition-colors cursor-pointer"
                  >
                    Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

