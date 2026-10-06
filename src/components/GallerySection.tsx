import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/hotelData';
import { motion, AnimatePresence } from 'motion/react';

export const GallerySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const prevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const nextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1));
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <section id="gallery-section" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header with scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-[#E29600] font-semibold tracking-wider uppercase text-xs sm:text-sm block mb-2">
            Our Gallary
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#100909] leading-tight">
            Experience the Comfort of Anaaya Residency
          </h2>
          <p className="mt-3 text-[#636363] text-base leading-relaxed">
            Explore our comfortable rooms, peaceful interiors, and welcoming spaces designed to offer a relaxing stay near Kamakhya Temple in Guwahati
          </p>
        </motion.div>

        {/* Featured Large View with Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-900 group"
        >
          <div className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[540px] w-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={GALLERY_IMAGES[currentIndex].src}
                alt={GALLERY_IMAGES[currentIndex].title}
                className="w-full h-full object-cover object-center"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

            {/* Caption & Counter */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
              <div>
                <p className="text-sm uppercase tracking-widest text-[#F8BB13] font-semibold mb-1">
                  Photo {currentIndex + 1} of {GALLERY_IMAGES.length}
                </p>
                <h3 className="text-xl sm:text-2xl font-serif font-bold">
                  {GALLERY_IMAGES[currentIndex].title}
                </h3>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openLightbox(currentIndex)}
                className="p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-all cursor-pointer"
                title="View Fullscreen"
              >
                <Maximize2 className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Carousel Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-[#E29600] text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer shadow-lg"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-[#E29600] text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer shadow-lg"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>

        {/* Thumbnail Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 flex gap-3 overflow-x-auto pb-4 pt-2 no-scrollbar scroll-smooth"
        >
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05 }}
              onClick={() => setCurrentIndex(idx)}
              className={`relative shrink-0 w-24 h-16 sm:w-32 sm:h-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                idx === currentIndex
                  ? 'border-[#E29600] scale-105 shadow-md'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Grid Preview with staggered reveal */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {GALLERY_IMAGES.slice(0, 6).map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => openLightbox(idx)}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-all"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Maximize2 className="w-5 h-5 text-[#F8BB13]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8 animate-fade-in"
        >
          {/* Header */}
          <div className="flex items-center justify-between text-white pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-[#F8BB13] font-semibold">
                Anaaya Residency Gallery
              </span>
              <span className="text-gray-400 text-xs">
                {lightboxIndex + 1} / {GALLERY_IMAGES.length}
              </span>
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/30 text-white cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Photo View */}
          <div className="relative flex-1 flex items-center justify-center my-auto max-h-[80vh]">
            <img
              src={GALLERY_IMAGES[lightboxIndex].src}
              alt={GALLERY_IMAGES[lightboxIndex].title}
              className="max-h-full max-w-full object-contain rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Lightbox arrows */}
            <button
              onClick={prevLightbox}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-[#E29600] text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={nextLightbox}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-[#E29600] text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Footer Caption */}
          <div className="text-center text-white pt-4">
            <p className="text-lg font-serif font-bold text-white">
              {GALLERY_IMAGES[lightboxIndex].title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

