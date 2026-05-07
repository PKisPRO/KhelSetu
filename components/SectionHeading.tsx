'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  light?: boolean; // true = white text (for dark background sections)
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={centered ? 'text-center' : ''}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className={`font-semibold text-xs uppercase tracking-[0.22em] mb-3 ${
            light ? 'text-[#3DBB5A]' : 'text-[#2D9944]'
          }`}
        >
          {eyebrow}
        </motion.p>
      )}

      <h2 className={`section-title mb-4 ${light ? 'text-white' : 'text-[#0F1F3D]'}`}>
        {title}
        {highlight && (
          <span className={light ? 'gradient-text-light' : 'gradient-text'}>
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className={`text-lg leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''} ${
          light ? 'text-white/70' : 'text-gray-500'
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
