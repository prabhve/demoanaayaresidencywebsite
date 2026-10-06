import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { RoomsSection } from './components/RoomsSection';
import { OfferBanner } from './components/OfferBanner';
import { GallerySection } from './components/GallerySection';
import { CtaBanner } from './components/CtaBanner';
import { ServicesSection } from './components/ServicesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { FaqSection } from './components/FaqSection';
import { ContactBookingSection } from './components/ContactBookingSection';
import { AboutPage } from './components/AboutPage';
import { RoomDetailPage } from './components/RoomDetailPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ROOMS, Room } from './data/hotelData';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'rooms' | 'room-detail' | 'contact'>('home');
  const [activeRoomSlug, setActiveRoomSlug] = useState<string>('super-delux-room');
  const [preselectedRoomForBooking, setPreselectedRoomForBooking] = useState<string>('');

  // Handle URL hash if any
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'about') setCurrentView('about');
      else if (hash === 'contact') setCurrentView('contact');
      else if (hash === 'rooms') setCurrentView('home');
      else if (hash.startsWith('room/')) {
        const slug = hash.replace('room/', '');
        setActiveRoomSlug(slug);
        setCurrentView('room-detail');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (view: string, roomSlug?: string) => {
    if (view === 'room-detail' && roomSlug) {
      setActiveRoomSlug(roomSlug);
      setCurrentView('room-detail');
      window.location.hash = `room/${roomSlug}`;
    } else if (view === 'about') {
      setCurrentView('about');
      window.location.hash = 'about';
    } else if (view === 'contact') {
      setCurrentView('contact');
      window.location.hash = 'contact';
    } else if (view === 'rooms') {
      if (currentView !== 'home') {
        setCurrentView('home');
        window.location.hash = '';
        setTimeout(() => {
          document.getElementById('rooms-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById('rooms-section')?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setCurrentView('home');
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookNowScroll = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        document.getElementById('contact-booking')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('contact-booking')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookRoom = (room: Room) => {
    setPreselectedRoomForBooking(room.name);
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        document.getElementById('contact-booking')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('contact-booking')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeRoom = ROOMS.find((r) => r.slug === activeRoomSlug) || ROOMS[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F4F1] font-sans antialiased text-[#636363]">
      {/* Scroll Progress Bar at the very top */}
      <ScrollProgressBar />

      {/* Primary Sticky Navigation Header */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onBookNowClick={handleBookNowScroll}
      />

      {/* Main View Router with AnimatePresence */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* 1. Hero Section */}
              <HeroSection onBookNowClick={handleBookNowScroll} />

              {/* 2. Serving Guests / About Section with Video */}
              <AboutSection onReadMore={() => handleNavigate('about')} />

              {/* 3. Rooms & Suites Section */}
              <RoomsSection
                onSelectRoom={(slug) => handleNavigate('room-detail', slug)}
                onBookRoom={handleBookRoom}
              />

              {/* 4. Todays Offer Banner */}
              <OfferBanner onBookClick={handleBookNowScroll} />

              {/* 5. Photo Gallery Section (with Lightbox) */}
              <GallerySection />

              {/* 6. Ready for a comfortable stay banner */}
              <CtaBanner onReserveClick={handleBookNowScroll} />

              {/* 7. Our Quality Services */}
              <ServicesSection onInquire={handleBookNowScroll} />

              {/* 8. Google Reviews (Trustindex) */}
              <ReviewsSection />

              {/* 9. Why Guests Choose Anaaya Residency */}
              <WhyChooseSection />

              {/* 10. FAQs Accordion */}
              <FaqSection />

              {/* 11. Contact & Booking Inquiry Section with Map */}
              <ContactBookingSection preselectedRoom={preselectedRoomForBooking} />
            </motion.div>
          )}

          {currentView === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <AboutPage
                onNavigateHome={() => handleNavigate('home')}
                onSelectRoom={(slug) => handleNavigate('room-detail', slug)}
                onBookNow={handleBookNowScroll}
              />
            </motion.div>
          )}

          {currentView === 'room-detail' && (
            <motion.div
              key={`room-${activeRoom.slug}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <RoomDetailPage
                room={activeRoom}
                onNavigateHome={() => handleNavigate('home')}
                onSelectOtherRoom={(slug) => handleNavigate('room-detail', slug)}
              />
            </motion.div>
          )}

          {currentView === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <ContactPage onNavigateHome={() => handleNavigate('home')} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <div className="pb-14 sm:pb-0">
        <Footer onNavigate={handleNavigate} />
      </div>

      {/* Floating WhatsApp and Mobile Bottom Bar */}
      <FloatingActions onBookNowClick={handleBookNowScroll} />
    </div>
  );
}
