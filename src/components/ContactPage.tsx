import React from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { ContactBookingSection } from './ContactBookingSection';

interface ContactPageProps {
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative py-20 bg-[#100909] text-white">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://anaayaresidency.com/wp-content/uploads/2025/12/Hero-04.webp"
            alt="Contact Anaaya Residency"
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
            <span>Contact Us</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="max-w-2xl text-gray-300 text-base sm:text-lg">
            Connect &amp; Book Your Experience. Get in touch with our team for reservations and travel inquiries.
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <ContactBookingSection />
    </div>
  );
};
