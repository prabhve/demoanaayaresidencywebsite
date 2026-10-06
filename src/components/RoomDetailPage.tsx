import React, { useState } from 'react';
import { Room, HOTEL_RULES, HOTEL_INFO } from '../data/hotelData';
import { Bed, Bath, Users, Eye, Maximize, Check, ShieldAlert, ArrowLeft, Phone, Calendar, Send, MessageSquare } from 'lucide-react';

interface RoomDetailPageProps {
  room: Room;
  onNavigateHome: () => void;
  onSelectOtherRoom: (slug: string) => void;
}

export const RoomDetailPage: React.FC<RoomDetailPageProps> = ({ room, onNavigateHome, onSelectOtherRoom }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(room.mainImage);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    numberOfGuests: room.guests.includes('2') ? '2' : '3',
    checkInDate: '',
    checkOutDate: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const sendWhatsApp = () => {
    const text = `*Reservation Request for ${room.name}*%0A
*Name:* ${formData.fullName}%0A
*Mobile:* ${formData.mobileNumber}%0A
*Email:* ${formData.email || 'N/A'}%0A
*Guests:* ${formData.numberOfGuests}%0A
*Check-in:* ${formData.checkInDate || 'Not specified'}%0A
*Check-out:* ${formData.checkOutDate || 'Not specified'}%0A
*Notes:* ${formData.message || 'None'}`;

    window.open(`https://wa.me/917099070253?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="relative py-16 bg-[#100909] text-white">
        <div className="absolute inset-0 opacity-25">
          <img src={room.mainImage} alt={room.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#F8BB13] mb-3">
            <button onClick={onNavigateHome} className="hover:underline cursor-pointer">
              Home
            </button>
            <span>/</span>
            <span>Rooms Details</span>
            <span>/</span>
            <span className="text-white truncate">{room.subtitle}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#E29600] font-semibold block mb-1">
                {room.tagline}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white">
                {room.name}
              </h1>
            </div>

            <div className="bg-[#E29600] text-white px-6 py-3 rounded-xl shadow-lg flex items-baseline gap-2 self-start md:self-auto">
              <span className="text-2xl sm:text-3xl font-bold font-serif">{room.price}</span>
              <span className="text-sm font-medium text-white/90">{room.priceNote}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Details & Gallery */}
          <div className="lg:col-span-7 space-y-10">
            {/* Main Interactive Photo */}
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-gray-900 shadow-md">
                <img
                  src={selectedPhoto}
                  alt={room.name}
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {room.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedPhoto(img)}
                    className={`w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      selectedPhoto === img ? 'border-[#E29600] scale-105' : 'border-transparent opacity-70'
                    }`}
                  >
                    <img src={img} alt="room thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Room Features Specs Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-[#F0F4F1] border border-[#DEECDF] text-sm text-[#100909]">
              <div className="flex items-center gap-2.5">
                <Bed className="w-5 h-5 text-[#E29600]" />
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-semibold">Bedding</p>
                  <p className="font-semibold">{room.beds}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Bath className="w-5 h-5 text-[#E29600]" />
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-semibold">Bathroom</p>
                  <p className="font-semibold">{room.baths}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Users className="w-5 h-5 text-[#E29600]" />
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-semibold">Capacity</p>
                  <p className="font-semibold">{room.guests}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Eye className="w-5 h-5 text-[#E29600]" />
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-semibold">View</p>
                  <p className="font-semibold truncate">{room.view}</p>
                </div>
              </div>
            </div>

            {/* Pricing Tiers (if specified on original site) */}
            {room.pricingTiers && room.pricingTiers.length > 0 && (
              <div className="p-6 rounded-xl border border-[#DEECDF] bg-amber-50/50">
                <h4 className="font-serif font-bold text-lg text-[#100909] mb-3">
                  Pricing &amp; Occupancy Options
                </h4>
                <div className="space-y-2">
                  {room.pricingTiers.map((tier, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0 text-sm"
                    >
                      <span className="font-medium text-gray-800">{tier.label}</span>
                      <span className="font-bold text-[#E29600] font-mono">{tier.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description & Overview */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-[#100909]">
                {room.tagline}
              </h3>
              <p className="text-[#636363] text-base leading-relaxed">
                {room.longDesc}
              </p>
              {room.subParagraph && (
                <p className="text-[#636363] text-base leading-relaxed">
                  {room.subParagraph}
                </p>
              )}
            </div>

            {/* Highlights */}
            {room.highlights && room.highlights.map((h, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-gray-200 space-y-2 shadow-sm">
                <h4 className="font-serif font-bold text-lg text-[#100909]">{h.title}</h4>
                <p className="text-sm text-[#636363] leading-relaxed">{h.desc}</p>
              </div>
            ))}

            {/* Included in This Suite */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#100909] mb-5">
                Included in This Suite
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {room.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-lg bg-[#F0F4F1] text-sm font-medium text-[#100909]"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#DEECDF] text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hotel Rules Section matching site */}
            <div className="p-8 rounded-2xl bg-[#F0F4F1] border border-[#DEECDF] space-y-4">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-6 h-6 text-[#E29600]" />
                <h3 className="text-2xl font-serif font-bold text-[#100909]">
                  Hotel Rules &amp; Guidelines
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#636363]">
                {HOTEL_RULES.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E29600] mt-2 shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Direct Reservation Box */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 bg-[#F0F4F1] border border-[#DEECDF] rounded-2xl p-5 sm:p-8 shadow-lg space-y-5 sm:space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#E29600] font-bold block mb-1">
                  Reservation Right Now
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#100909]">
                  Book This Room
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Guaranteed room reservation with best rate direct from reception.
                </p>
              </div>

              {submitted ? (
                <div className="bg-white p-5 sm:p-6 rounded-xl border border-emerald-300 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#100909]">Request Received!</h4>
                  <p className="text-xs text-gray-600">
                    We have noted your interest for {room.name}.
                  </p>
                  <button
                    onClick={sendWhatsApp}
                    className="w-full py-3 bg-[#25D366] text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirm on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-gray-500 underline cursor-pointer"
                  >
                    Edit details
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#100909] uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-300 text-base sm:text-sm text-[#100909] outline-none focus:border-[#E29600]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#100909] uppercase mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-300 text-base sm:text-sm text-[#100909] outline-none focus:border-[#E29600]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#100909] uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-gray-300 text-base sm:text-sm text-[#100909] outline-none focus:border-[#E29600]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#100909] uppercase mb-1">
                        Check-in
                      </label>
                      <input
                        type="date"
                        value={formData.checkInDate}
                        onChange={(e) => setFormData({ ...formData, checkInDate: e.target.value })}
                        className="w-full px-3 py-2 bg-white rounded-lg border border-gray-300 text-base sm:text-xs text-[#100909] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#100909] uppercase mb-1">
                        Check-out
                      </label>
                      <input
                        type="date"
                        value={formData.checkOutDate}
                        onChange={(e) => setFormData({ ...formData, checkOutDate: e.target.value })}
                        className="w-full px-3 py-2 bg-white rounded-lg border border-gray-300 text-base sm:text-xs text-[#100909] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#100909] uppercase mb-1">
                      Special Request
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Notes or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 bg-white rounded-lg border border-gray-300 text-base sm:text-xs text-[#100909] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#E29600] hover:bg-[#c98400] text-white rounded-lg font-semibold text-sm transition-all shadow cursor-pointer"
                  >
                    Submit Booking Request
                  </button>

                  <button
                    type="button"
                    onClick={sendWhatsApp}
                    className="w-full py-2.5 bg-[#25D366] hover:bg-[#20b858] text-white rounded-lg font-medium text-xs flex items-center justify-center gap-2 cursor-pointer shadow"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Booking Inquiry</span>
                  </button>
                </form>
              )}

              {/* Direct call quick strip */}
              <div className="pt-4 border-t border-[#DEECDF] flex items-center justify-between text-xs">
                <span className="text-gray-500">Need Immediate Help?</span>
                <a
                  href={`tel:${HOTEL_INFO.phonePrimaryRaw}`}
                  className="font-bold text-[#E29600] hover:underline"
                >
                  {HOTEL_INFO.phonePrimary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
