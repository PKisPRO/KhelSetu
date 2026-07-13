'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImpactGalleryProps {
  images: { src: string; portrait?: boolean }[];
  initialCount?: number;
}

export default function ImpactGallery({ images, initialCount = 12 }: ImpactGalleryProps) {
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = expanded ? images : images.slice(0, initialCount);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setLightbox(cur => (cur === null ? cur : (cur + dir + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, step]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {visible.map((img, i) => (
          <motion.button
            key={img.src}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: (i % 8) * 0.05, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setLightbox(i)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2D9944]"
            aria-label={`View photo ${i + 1} of ${images.length} full size`}
          >
            <Image
              src={img.src}
              alt={`KhelSetu first donation drive — photo ${i + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        ))}
      </div>

      {!expanded && images.length > initialCount && (
        <div className="text-center mt-10">
          <button onClick={() => setExpanded(true)}
            className="btn-secondary text-sm px-8 py-3 inline-flex items-center gap-2">
            View All {images.length} Photos <ChevronDown size={15} />
          </button>
        </div>
      )}

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
            onClick={close}
          >
            <button onClick={close} aria-label="Close"
              className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
              <X size={20} />
            </button>
            <button onClick={e => { e.stopPropagation(); step(-1); }} aria-label="Previous photo"
              className="absolute left-2 sm:left-5 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
              <ChevronLeft size={22} />
            </button>
            <button onClick={e => { e.stopPropagation(); step(1); }} aria-label="Next photo"
              className="absolute right-2 sm:right-5 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
              <ChevronRight size={22} />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative w-[92vw] h-[82vh]"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={images[lightbox].src}
                alt={`KhelSetu first donation drive — photo ${lightbox + 1}`}
                fill
                sizes="92vw"
                className="object-contain"
                priority
              />
            </motion.div>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
              {lightbox + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
