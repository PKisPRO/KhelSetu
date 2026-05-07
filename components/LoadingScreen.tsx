'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/Logo';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-white"
        >
          {/* Soft ambient orbs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full glow-pulse pointer-events-none"
               style={{ background: 'rgba(27,58,107,0.06)', filter: 'blur(120px)' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full glow-pulse pointer-events-none"
               style={{ background: 'rgba(45,153,68,0.06)', filter: 'blur(100px)', animationDelay: '1s' }} />

          <div className="relative flex flex-col items-center gap-8">
            {/* Actual logo — scales in on load */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <Logo height={120} />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-gray-400 text-sm tracking-[0.22em] uppercase"
            >
              Bridging the Gap Through Sport
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '10rem', opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.75 }}
              className="relative overflow-hidden rounded-full"
              style={{ height: 3 }}
            >
              <div className="absolute inset-0 bg-gray-100 rounded-full" />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.4, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full origin-left"
                style={{ width: '10rem', background: 'linear-gradient(90deg, #1B3A6B, #2D9944)' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
