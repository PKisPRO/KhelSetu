'use client';

import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const reduced = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left pointer-events-none"
      style={{
        scaleX: reduced ? scrollYProgress : scaleX,
        background: 'linear-gradient(90deg, #1B3A6B, #2D9944, #3DBB5A)',
      }}
    />
  );
}
