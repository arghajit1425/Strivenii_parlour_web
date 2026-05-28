import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { ZoomIn, X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function GalleryView() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        (activeImageIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
      );
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-sans text-xs font-bold text-brand-rose uppercase tracking-[0.3em] block mb-4">
              The Portfolio
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal">
              Stunning Transformations
            </h2>
          </div>
          
          <a
            href="https://instagram.com/strivenii"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs font-bold uppercase tracking-widest text-brand-rose flex items-center space-x-2 group hover:opacity-80 transition-opacity"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow Us @Strivenii</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveImageIndex(index)}
              className="break-inside-avoid relative group overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-[0_10px_30px_rgba(138,72,83,0.1)] transition-all duration-300 border border-brand-rose/5"
            >
              <img
                src={item.imageUrl}
                alt={item.altText}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#8a4853]/45 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 select-none">
                <div className="p-1 max-w-fit rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3 text-white self-end">
                  <ZoomIn className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-sans font-semibold tracking-widest text-brand-pink uppercase block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg text-white font-medium leading-tight">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1b1c1c]/98 backdrop-blur-md">
            {/* Close touch area */}
            <div
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setActiveImageIndex(null)}
            />

            {/* Close Button top-right */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors border border-white/10 hover:border-white/30"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image Container with Title details */}
            <motion.div
              layoutId={`gallery-slug-${GALLERY_ITEMS[activeImageIndex].id}`}
              className="relative max-w-4xl w-full max-h-[80vh] flex flex-col items-center justify-center pointer-events-none"
            >
              <img
                src={GALLERY_ITEMS[activeImageIndex].imageUrl}
                alt={GALLERY_ITEMS[activeImageIndex].altText}
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl pointer-events-auto border border-white/10"
              />
              
              {/* Photo description */}
              <div className="mt-4 text-center select-none">
                <span className="text-xs uppercase font-semibold text-brand-pink tracking-widest">
                  {GALLERY_ITEMS[activeImageIndex].category}
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-white font-medium mt-1">
                  {GALLERY_ITEMS[activeImageIndex].title}
                </h3>
              </div>
            </motion.div>

            {/* Right Nav Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors border border-white/10 hover:border-white/30"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
