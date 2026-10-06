import React from 'react';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, roomSlug?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#100909] text-white pt-16 pb-8 border-t-4 border-[#E29600]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="block cursor-pointer focus:outline-none"
            >
              <img
                src={HOTEL_INFO.logo}
                alt="Anaaya Residency Logo"
                className="h-14 w-auto object-contain bg-white/5 p-2 rounded-lg"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </button>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              {HOTEL_INFO.subDescription}
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-[#F8BB13] font-semibold block mb-2">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E29600] flex items-center justify-center text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E29600] flex items-center justify-center text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* Twitter / X */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E29600] flex items-center justify-center text-white transition-colors"
                  aria-label="X Twitter"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#E29600] flex items-center justify-center text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-lg text-white">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#E29600] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#E29600] transition-colors cursor-pointer"
                >
                  About us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#E29600] transition-colors cursor-pointer"
                >
                  Contact us
                </button>
              </li>
              <li>
                <a href="#gallery-section" className="hover:text-[#E29600] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#services-section" className="hover:text-[#E29600] transition-colors">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Rooms Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-lg text-white">Our Rooms</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button
                  onClick={() => onNavigate('room-detail', 'double-bed-room-with-hill-view')}
                  className="hover:text-[#E29600] transition-colors text-left cursor-pointer"
                >
                  Delux Room
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('room-detail', 'super-delux-room')}
                  className="hover:text-[#E29600] transition-colors text-left cursor-pointer"
                >
                  Super Delux room
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('room-detail', 'suite-room')}
                  className="hover:text-[#E29600] transition-colors text-left cursor-pointer"
                >
                  Suite Room With Mountain View
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-lg text-white">Visit Us</h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E29600] shrink-0 mt-0.5" />
                <span>
                  3rd &amp; 4th Floor, HG Tower, Near Kamakhya Temple Main Gate, Assam Trunk Road, Opp. LCB College Bus Stop, Maligaon, Guwahati – 781011
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E29600] shrink-0" />
                <a href={`tel:${HOTEL_INFO.phonePrimaryRaw}`} className="hover:text-[#E29600]">
                  {HOTEL_INFO.phonePrimary}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E29600] shrink-0" />
                <span>{HOTEL_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Anaaya Residency. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Guwahati, Assam</span>
            <span>•</span>
            <span className="text-[#E29600]">Comfort &amp; Convenience</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
