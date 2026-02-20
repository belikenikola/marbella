'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryCarouselProps {
  images: string[];
}

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateLightbox = useCallback(
    (direction: 'prev' | 'next') => {
      if (direction === 'prev') {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    },
    [images.length],
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateLightbox('prev');
          break;
        case 'ArrowRight':
          navigateLightbox('next');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, navigateLightbox]);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
      const previouslyFocused = document.activeElement as HTMLElement;

      return () => {
        document.body.style.overflow = '';
        if (previouslyFocused) {
          previouslyFocused.focus();
        }
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [lightboxOpen]);

  return (
    <>
      {/* Masonry Grid */}
      <div className="masonry-grid" role="region" aria-label="Image gallery">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="masonry-item cursor-pointer group block w-full"
            aria-label={`View image ${index + 1} of ${images.length}`}
          >
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={image}
                alt={`Marbella Bay Apartments gallery image ${index + 1}`}
                width={600}
                height={index % 3 === 0 ? 500 : index % 3 === 1 ? 400 : 350}
                className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/20 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
            onClick={closeLightbox}
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 hover:scale-110 transition-transform"
              aria-label="Close lightbox"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('prev');
              }}
              className="absolute left-4 text-white hover:text-gray-300 p-2 hover:scale-110 transition-transform"
              aria-label="Previous image"
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentIndex]}
                alt={`Marbella Bay Apartments gallery image ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('next');
              }}
              className="absolute right-4 text-white hover:text-gray-300 p-2 hover:scale-110 transition-transform"
              aria-label="Next image"
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-4 text-white text-sm"
            >
              {currentIndex + 1} / {images.length}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
