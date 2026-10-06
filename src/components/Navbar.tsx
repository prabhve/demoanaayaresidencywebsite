import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Phone, Mail, MapPin, Menu, X, ChevronDown, Calendar, MessageSquare } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, roomSlug?: string) => void;
  onBookNowClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onBookNowClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roomsDropdownOpen, setRoomsDropdownOpen] = useState(false);
  const [mobileRoomsOpen, setMobileRoomsOpen] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNav = (view: string, roomSlug?: string) => {
    onNavigate(view, roomSlug);
    setMobileMenuOpen(false);
    setRoomsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mobileDrawer = (
    <AnimatePresence>
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden">
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-xs"
          />

          {/* Full Height Slide-out Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm h-dvh bg-white shadow-2xl flex flex-col justify-between overflow-y-auto z-10"
          >
            <div>
              {/* Drawer Top Header */}
              <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-[#F0F4F1] sticky top-0 z-20">
                <img
                  src={HOTEL_INFO.logo}
                  alt="Anaaya Residency"
                  className="h-9 w-auto object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('.mobile-brand-fallback')) {
                      const span = document.createElement('span');
                      span.className = 'mobile-brand-fallback text-base font-serif font-bold text-[#100909]';
                      span.innerText = 'ANAAYA RESIDENCY';
                      parent.appendChild(span);
                    }
                  }}
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-200 text-gray-700 cursor-pointer transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="p-5 flex flex-col space-y-2 font-medium text-base">
                <button
                  onClick={() => handleNav('home')}
                  className={`text-left py-3 px-3.5 rounded-lg transition-colors cursor-pointer ${
                    currentView === 'home'
                      ? 'bg-[#E29600]/15 text-[#E29600] font-bold'
                      : 'text-[#100909] hover:bg-gray-50'
                  }`}
                >
                  Home
                </button>

                <button
                  onClick={() => handleNav('about')}
                  className={`text-left py-3 px-3.5 rounded-lg transition-colors cursor-pointer ${
                    currentView === 'about'
                      ? 'bg-[#E29600]/15 text-[#E29600] font-bold'
                      : 'text-[#100909] hover:bg-gray-50'
                  }`}
                >
                  About us
                </button>

                {/* Mobile Rooms Accordion */}
                <div className="border border-gray-100 rounded-lg overflow-hidden bg-gray-50/50">
                  <button
                    onClick={() => setMobileRoomsOpen(!mobileRoomsOpen)}
                    className="w-full flex items-center justify-between p-3.5 text-left font-semibold text-[#100909] cursor-pointer"
                  >
                    <span>Rooms &amp; Suites</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#E29600] transition-transform ${
                        mobileRoomsOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {mobileRoomsOpen && (
                    <div className="px-3 pb-3 pt-1 flex flex-col space-y-1.5 border-t border-gray-100 bg-white">
                      <button
                        onClick={() => handleNav('room-detail', 'double-bed-room-with-hill-view')}
                        className="text-left text-sm py-2 px-3 rounded text-gray-700 hover:bg-[#F0F4F1] hover:text-[#E29600] cursor-pointer"
                      >
                        • Delux Room (Hill View)
                      </button>
                      <button
                        onClick={() => handleNav('room-detail', 'super-delux-room')}
                        className="text-left text-sm py-2 px-3 rounded text-gray-700 hover:bg-[#F0F4F1] hover:text-[#E29600] cursor-pointer"
                      >
                        • Super Delux Room (City View)
                      </button>
                      <button
                        onClick={() => handleNav('room-detail', 'suite-room')}
                        className="text-left text-sm py-2 px-3 rounded text-gray-700 hover:bg-[#F0F4F1] hover:text-[#E29600] cursor-pointer"
                      >
                        • Suite Room (Mountain View)
                      </button>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleNav('contact')}
                  className={`text-left py-3 px-3.5 rounded-lg transition-colors cursor-pointer ${
                    currentView === 'contact'
                      ? 'bg-[#E29600]/15 text-[#E29600] font-bold'
                      : 'text-[#100909] hover:bg-gray-50'
                  }`}
                >
                  Contact us
                </button>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-5 border-t border-gray-100 bg-gray-50 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookNowClick();
                }}
                className="w-full py-3 rounded-lg bg-[#E29600] hover:bg-[#c98400] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Room / Reservation</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${HOTEL_INFO.phonePrimaryRaw}`}
                  className="py-2.5 px-3 rounded-lg bg-[#100909] text-white text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-[#F8BB13]" />
                  <span>Call Us</span>
                </a>

                <a
                  href={HOTEL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-[#25D366] text-white text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all">
        {/* Top micro bar for quick reservation & contact */}
        <div className="bg-[#100909] text-white/90 text-[11px] sm:text-xs py-1.5 px-3 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 sm:gap-4 font-light truncate">
              <span className="flex items-center gap-1.5 text-gray-300 truncate">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E29600] shrink-0" />
                <span className="hidden md:inline">Near Kamakhya Temple Main Gate, Maligaon, Guwahati</span>
                <span className="md:hidden truncate">Maligaon, Guwahati (Near Kamakhya)</span>
              </span>
              <span className="hidden lg:flex items-center gap-1.5 text-gray-300">
                <Mail className="w-3.5 h-3.5 text-[#E29600]" />
                <span>{HOTEL_INFO.email}</span>
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <span className="text-[#E29600] font-medium hidden sm:inline">24x7:</span>
              <a
                href={`tel:${HOTEL_INFO.phonePrimaryRaw}`}
                className="flex items-center gap-1 text-white hover:text-[#E29600] transition-colors font-medium"
              >
                <Phone className="w-3 h-3 text-[#E29600]" />
                <span>{HOTEL_INFO.phonePrimary}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center text-left focus:outline-none group cursor-pointer"
          >
            <img
              src={HOTEL_INFO.logo}
              alt="Anaaya Residency"
              className="h-9 sm:h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent && !parent.querySelector('.brand-fallback')) {
                  const span = document.createElement('span');
                  span.className = 'brand-fallback text-xl sm:text-2xl font-serif font-bold text-[#100909]';
                  span.innerText = 'ANAAYA RESIDENCY';
                  parent.appendChild(span);
                }
              }}
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-[15px]">
            <button
              onClick={() => handleNav('home')}
              className={`cursor-pointer transition-colors relative py-1 ${
                currentView === 'home'
                  ? 'text-[#E29600] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#E29600]'
                  : 'text-[#100909] hover:text-[#E29600]'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNav('about')}
              className={`cursor-pointer transition-colors relative py-1 ${
                currentView === 'about'
                  ? 'text-[#E29600] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#E29600]'
                  : 'text-[#100909] hover:text-[#E29600]'
              }`}
            >
              About us
            </button>

            {/* Rooms Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setRoomsDropdownOpen(true)}
              onMouseLeave={() => setRoomsDropdownOpen(false)}
            >
              <button
                onClick={() => handleNav('rooms')}
                className={`flex items-center gap-1 cursor-pointer transition-colors py-1 ${
                  currentView === 'rooms' || currentView === 'room-detail'
                    ? 'text-[#E29600] font-semibold'
                    : 'text-[#100909] hover:text-[#E29600]'
                }`}
              >
                <span>Rooms</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu matching Anaaya Residency structure */}
              <div
                className={`absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg border-t-2 border-[#E29600] py-2 z-50 transition-all duration-200 ${
                  roomsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <button
                  onClick={() => handleNav('room-detail', 'double-bed-room-with-hill-view')}
                  className="w-full text-left px-5 py-2.5 text-sm text-[#100909] hover:bg-[#F0F4F1] hover:text-[#E29600] transition-colors cursor-pointer"
                >
                  Double Bed Room with Hill View
                </button>
                <button
                  onClick={() => handleNav('room-detail', 'super-delux-room')}
                  className="w-full text-left px-5 py-2.5 text-sm text-[#100909] hover:bg-[#F0F4F1] hover:text-[#E29600] transition-colors cursor-pointer"
                >
                  Super Delux Room with City View
                </button>
                <button
                  onClick={() => handleNav('room-detail', 'suite-room')}
                  className="w-full text-left px-5 py-2.5 text-sm text-[#100909] hover:bg-[#F0F4F1] hover:text-[#E29600] transition-colors cursor-pointer"
                >
                  Suite Room
                </button>
              </div>
            </div>

            <button
              onClick={() => handleNav('contact')}
              className={`cursor-pointer transition-colors relative py-1 ${
                currentView === 'contact'
                  ? 'text-[#E29600] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#E29600]'
                  : 'text-[#100909] hover:text-[#E29600]'
              }`}
            >
              Contact us
            </button>
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onBookNowClick}
              className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-md bg-[#E29600] hover:bg-[#c98400] text-white font-medium text-xs sm:text-sm tracking-wide shadow-sm hover:shadow transition-all cursor-pointer"
            >
              Contact Now
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-[#100909] hover:bg-gray-100 focus:outline-none cursor-pointer"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Render Mobile Drawer via Portal at document.body level */}
      {mounted && typeof document !== 'undefined' && createPortal(mobileDrawer, document.body)}
    </>
  );
};
