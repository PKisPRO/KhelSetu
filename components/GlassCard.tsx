'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  glow?: 'blue' | 'green' | 'none';
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  delay = 0,
  glow = 'none',
}: GlassCardProps) {
  const glowClass = glow === 'blue'  ? 'hover:shadow-[0_16px_48px_rgba(27,58,107,0.12)]'
                  : glow === 'green' ? 'hover:shadow-[0_16px_48px_rgba(45,153,68,0.12)]'
                  : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -6, scale: 1.008 } : undefined}
      className={`glass-card p-6 ${glowClass} ${className}`}
    >
      {children}
    </motion.div>
  );
}
