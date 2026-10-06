import React from 'react';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';
import { Target, Eye, HeartHandshake, MapPin, Bed, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigateHome: () => void;
  onSelectRoom: (slug: string) => void;
  onBookNow: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome, onSelectRoom, onBookNow }) => {
  return (
    <div className="bg-white">
      {/* Page Header Banner */}
      <div className="relative py-20 bg-[#100909] text-white">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://anaayaresidency.com/wp-content/uploads/2025/12/Hero-04.webp"
            alt="About Anaaya Residency"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#F8BB13] mb-3">
            <button onClick={onNavigateHome} className="hover:underline cursor-pointer">
              Home
            </button>
            <span>/</span>
            <span>About Us</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            About Anaaya Residency
          </h1>
          <p className="max-w-2xl text-gray-300 text-base sm:text-lg">
            A peaceful and well-maintained stay located minutes from Kamakhya Temple in Guwahati.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-16">
        {/* Welcome Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DEECDF] text-[#100909] text-xs font-semibold uppercase">
              <span>🌿</span>
              <span>Welcome to Anaaya Residency</span>
            </div>

            <h2 className="text-3xl font-serif font-bold text-[#100909] leading-tight">
              Comfort &amp; Warm Hospitality in Maligaon, Guwahati
            </h2>

            <p className="text-[#636363] text-base leading-relaxed">
              <strong className="text-[#100909]">Anaaya Residency</strong> is a comfortable and welcoming hotel located in <span className="text-[#100909] font-medium">Maligaon, Guwahati</span>, near the sacred <span className="text-[#100909] font-medium">Kamakhya Temple</span>. We are dedicated to offering a peaceful, clean, and convenient stay for pilgrims, families, and travelers visiting the city.
            </p>

            <p className="text-[#636363] text-base leading-relaxed">
              Our prime location, warm hospitality, and well-maintained rooms make Anaaya Residency an ideal choice for guests seeking comfort and ease during their visit to Guwahati.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onBookNow}
                className="px-6 py-3 rounded-md bg-[#E29600] hover:bg-[#c98400] text-white font-medium text-sm transition-colors cursor-pointer shadow"
              >
                Book Your Stay
              </button>
              <a
                href={`tel:${HOTEL_INFO.phonePrimaryRaw}`}
                className="flex items-center gap-2 px-6 py-3 rounded-md border border-gray-300 text-[#100909] hover:bg-gray-50 text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-[#E29600]" />
                <span>{HOTEL_INFO.phonePrimary}</span>
              </a>
            </div>
          </div>

          {/* Video / Photo Preview */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-black">
              <video
                src={HOTEL_INFO.videoUrl}
                controls
                className="w-full h-auto object-cover"
                poster="https://anaayaresidency.com/wp-content/uploads/2026/01/DSC01086-scaled.jpg"
              />
            </div>
          </div>
        </div>

        {/* Comfortable Rooms for Every Guest */}
        <div className="bg-[#F0F4F1] p-8 sm:p-12 rounded-2xl border border-[#DEECDF]">
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
            {ROOMS.map((room) => (
              <div
                key={room.id}
                onClick={() => onSelectRoom(room.slug)}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={room.mainImage}
                    alt={room.name}
                    className="w-full h-44 object-cover rounded-lg mb-4"
                  />
                  <h4 className="font-serif font-bold text-[#100909] text-lg mb-2">
                    {room.name}
                  </h4>
                  <p className="text-xs text-[#636363] line-clamp-2 mb-4">
                    {room.shortDesc}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs font-semibold text-[#E29600]">
                  <span>{room.price} /Night</span>
                  <span className="underline">View Details</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission, Vision, Values 3-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#E29600]/20 text-[#E29600] flex items-center justify-center mb-5">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#100909] mb-3">🎯 Our Mission</h3>
            <p className="text-[#636363] text-sm leading-relaxed">
              {HOTEL_INFO.mission}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#E29600]/20 text-[#E29600] flex items-center justify-center mb-5">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#100909] mb-3">👁️ Our Vision</h3>
            <p className="text-[#636363] text-sm leading-relaxed">
              {HOTEL_INFO.vision}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#E29600]/20 text-[#E29600] flex items-center justify-center mb-5">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#100909] mb-3">🤝 Our Values</h3>
            <p className="text-[#636363] text-sm leading-relaxed">
              {HOTEL_INFO.values}
            </p>
          </div>
        </div>

        {/* Prime Location Advantage */}
        <div className="bg-[#100909] text-white p-8 sm:p-12 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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

              <div className="space-y-2 text-sm text-gray-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F8BB13]" />
                  <span>5-10 minutes drive to Kamakhya Temple Main Gate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F8BB13]" />
                  <span>Kamakhya Junction Railway Station easily accessible</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F8BB13]" />
                  <span>Near Sanjeevani Hospital and local markets</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-md">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
