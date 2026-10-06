import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { motion } from 'motion/react';

interface ContactBookingSectionProps {
  preselectedRoom?: string;
}

export const ContactBookingSection: React.FC<ContactBookingSectionProps> = ({ preselectedRoom }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    roomType: 'Super Deluxe Room with City View',
    numberOfGuests: '2',
    checkInDate: '',
    checkOutDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (preselectedRoom) {
      if (preselectedRoom.includes('super')) {
        setFormData((prev) => ({ ...prev, roomType: 'Super Deluxe Room with City View' }));
      } else if (preselectedRoom.includes('suite')) {
        setFormData((prev) => ({ ...prev, roomType: 'Suite Room with Mountain View' }));
      } else if (preselectedRoom.includes('delux')) {
        setFormData((prev) => ({ ...prev, roomType: 'Double Bed Room with Hill View' }));
      }
    }
  }, [preselectedRoom]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'AR-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setSubmitted(true);
  };

  const sendViaWhatsApp = () => {
    const text = `*New Reservation Request - Anaaya Residency*%0A
*Booking Reference:* ${bookingRef || 'AR-' + Math.floor(100000 + Math.random() * 900000)}%0A
*Name:* ${formData.fullName}%0A
*Mobile:* ${formData.mobileNumber}%0A
*Email:* ${formData.email || 'N/A'}%0A
*Room:* ${formData.roomType}%0A
*Guests:* ${formData.numberOfGuests}%0A
*Check-in:* ${formData.checkInDate || 'Flexible'}%0A
*Check-out:* ${formData.checkOutDate || 'Flexible'}%0A
*Notes:* ${formData.message || 'None'}`;

    window.open(`https://wa.me/917099070253?text=${text}`, '_blank');
  };

  return (
    <section id="contact-booking" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header with scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#E29600] font-semibold tracking-wider uppercase text-xs sm:text-sm block mb-2">
            Connect &amp; Book Your Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#100909] leading-tight">
            Contact With Us.
          </h2>
          <p className="mt-3 text-[#636363] text-base leading-relaxed">
            Reserve your room directly with Anaaya Residency for guaranteed best rates, complimentary Wi-Fi, and personalized stay assistance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Phone Card */}
            <div className="bg-[#F0F4F1] border border-[#DEECDF] rounded-2xl p-6 sm:p-8">
              <span className="text-xs uppercase tracking-wider text-[#E29600] font-bold block mb-1">
                Need Expert Advice?
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#100909] mb-4">
                Call Our 24x7 Helpdesk
              </h3>
              <div className="space-y-3">
                <a
                  href={`tel:${HOTEL_INFO.phonePrimaryRaw}`}
                  className="flex items-center gap-3 text-lg font-bold text-[#100909] hover:text-[#E29600] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#E29600] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{HOTEL_INFO.phonePrimary}</span>
                </a>

                <a
                  href={`tel:${HOTEL_INFO.phoneSecondaryRaw}`}
                  className="flex items-center gap-3 text-base font-semibold text-gray-700 hover:text-[#E29600] transition-colors pl-1"
                >
                  <span className="w-8 text-center text-xs text-gray-400">Alt:</span>
                  <span>{HOTEL_INFO.phoneSecondary}</span>
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-[#F0F4F1] border border-[#DEECDF] rounded-2xl p-6 sm:p-8">
              <span className="text-xs uppercase tracking-wider text-[#E29600] font-bold block mb-1">
                Visit &amp; Explore
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#100909] mb-4">
                Location Details
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#100909] text-white flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-[#F8BB13]" />
                </div>
                <div className="text-sm text-[#100909] leading-relaxed">
                  <p className="font-semibold">{HOTEL_INFO.address.line1}</p>
                  <p>{HOTEL_INFO.address.line2}</p>
                  <p>{HOTEL_INFO.address.line3}</p>
                  <p className="font-medium text-[#E29600] mt-1">{HOTEL_INFO.address.city} – {HOTEL_INFO.address.pin}</p>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-[#100909]">
                <Clock className="w-5 h-5 text-[#E29600]" />
                <h4 className="font-serif font-bold text-lg">Opening Hours</h4>
              </div>
              <div className="space-y-2.5 text-xs sm:text-sm">
                {HOTEL_INFO.openingHours.map((slot, i) => (
                  <div key={i} className="flex justify-between py-1.5 border-b border-gray-100 last:border-0">
                    <span className="font-medium text-gray-700">{slot.days}</span>
                    <span className="text-gray-500 font-mono">{slot.hours}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-[#E29600] font-semibold">
                * Front desk &amp; kitchen available 24 hours daily for in-house guests.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#F0F4F1] border border-[#DEECDF] rounded-2xl p-5 sm:p-10 shadow-sm">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider text-[#E29600] font-bold block mb-1">
                  Reservation Right Now
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#100909]">
                  Send Booking Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#636363] mt-1">
                  Fill in your details below. Our team will verify room availability and confirm immediately.
                </p>
              </div>

              {submitted ? (
                <div className="bg-white rounded-xl p-5 sm:p-8 border border-emerald-200 text-center space-y-5 animate-fade-in">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>

                  <div>
                    <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#100909]">Inquiry Submitted!</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2">
                      Thank you <span className="font-semibold text-[#100909]">{formData.fullName}</span>. We have recorded your reservation inquiry.
                    </p>
                    <div className="inline-block bg-[#F0F4F1] px-4 py-2 rounded-md font-mono text-xs sm:text-sm text-[#100909] font-bold mt-3 border border-[#DEECDF]">
                      Booking Ref: {bookingRef}
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4 bg-amber-50 rounded-lg text-left text-xs text-amber-900 border border-amber-200 space-y-1">
                    <p className="font-semibold">Selected Room: {formData.roomType}</p>
                    <p>Guests: {formData.numberOfGuests} | Check-in: {formData.checkInDate || 'Upcoming'}</p>
                    <p>Contact Phone: {formData.mobileNumber}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-2">
                    <button
                      onClick={sendViaWhatsApp}
                      className="w-full sm:flex-1 py-3 px-4 rounded-lg bg-[#25D366] hover:bg-[#20b858] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Confirm via WhatsApp Instantly</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto py-3 px-5 rounded-lg border border-gray-300 text-gray-700 text-xs sm:text-sm hover:bg-gray-50 cursor-pointer"
                    >
                      Book Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Row 1: Contact Details Header */}
                  <div className="text-xs uppercase font-bold tracking-wider text-gray-500 border-b border-[#DEECDF] pb-2">
                    Contact Details
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#100909] uppercase mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your Full Name"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white rounded-lg border border-gray-300 focus:border-[#E29600] focus:ring-1 focus:ring-[#E29600] text-base sm:text-sm text-[#100909] outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#100909] uppercase mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@gmail.com"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white rounded-lg border border-gray-300 focus:border-[#E29600] focus:ring-1 focus:ring-[#E29600] text-base sm:text-sm text-[#100909] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#100909] uppercase mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      required
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white rounded-lg border border-gray-300 focus:border-[#E29600] focus:ring-1 focus:ring-[#E29600] text-base sm:text-sm text-[#100909] outline-none transition-all"
                    />
                  </div>

                  {/* Row 2: Stay Details Header */}
                  <div className="text-xs uppercase font-bold tracking-wider text-gray-500 border-b border-[#DEECDF] pb-2 pt-2">
                    Stay Details
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#100909] uppercase mb-1.5">
                        Room Type *
                      </label>
                      <select
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleChange}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white rounded-lg border border-gray-300 focus:border-[#E29600] focus:ring-1 focus:ring-[#E29600] text-base sm:text-sm text-[#100909] outline-none transition-all cursor-pointer"
                      >
                        <option value="Super Deluxe Room with City View">
                          Super Deluxe Room with City View
                        </option>
                        <option value="Suite Room with Mountain View">
                          Suite Room with Mountain View
                        </option>
                        <option value="Double Bed Room with Hill View">
                          Double Bed Room with Hill View
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#100909] uppercase mb-1.5">
                        Number of Guests
                      </label>
                      <select
                        name="numberOfGuests"
                        value={formData.numberOfGuests}
                        onChange={handleChange}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white rounded-lg border border-gray-300 focus:border-[#E29600] focus:ring-1 focus:ring-[#E29600] text-base sm:text-sm text-[#100909] outline-none transition-all cursor-pointer"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5+">5+ Guests (Group Booking)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#100909] uppercase mb-1.5">
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        name="checkInDate"
                        value={formData.checkInDate}
                        onChange={handleChange}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white rounded-lg border border-gray-300 focus:border-[#E29600] focus:ring-1 focus:ring-[#E29600] text-base sm:text-sm text-[#100909] outline-none transition-all cursor-pointer"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#100909] uppercase mb-1.5">
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        name="checkOutDate"
                        value={formData.checkOutDate}
                        onChange={handleChange}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white rounded-lg border border-gray-300 focus:border-[#E29600] focus:ring-1 focus:ring-[#E29600] text-base sm:text-sm text-[#100909] outline-none transition-all cursor-pointer"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#100909] uppercase mb-1.5">
                      Message / Special Requests
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please let us know if you need early check-in, temple darshan guidance, airport pickup, or meal plans..."
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white rounded-lg border border-gray-300 focus:border-[#E29600] focus:ring-1 focus:ring-[#E29600] text-base sm:text-sm text-[#100909] outline-none transition-all"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full sm:flex-1 py-3.5 px-6 sm:px-8 rounded-lg bg-[#E29600] hover:bg-[#c98400] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Reservation Request</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={sendViaWhatsApp}
                      className="w-full sm:w-auto py-3.5 px-5 sm:px-6 rounded-lg bg-[#25D366] hover:bg-[#20b858] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp us</span>
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Google Map Embed with scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 rounded-2xl overflow-hidden border border-gray-200 shadow-md"
        >
          <div className="p-4 bg-[#100909] text-white flex items-center justify-between">
            <span className="text-sm font-semibold flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#E29600]" />
              <span>Anaaya Residency Location - Maligaon, Guwahati</span>
            </span>
            <a
              href="https://maps.google.com/?q=Anaaya+Residency+Maligaon+Guwahati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#F8BB13] hover:underline"
            >
              Open in Google Maps
            </a>
          </div>
          <iframe
            title="Anaaya Residency Map"
            src="https://maps.google.com/maps?q=HG+Tower+Assam+Trunk+Road+Opposite+LCB+College+Bus+Stop+Maligaon+Guwahati+781011&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-80 border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

