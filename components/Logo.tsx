'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface LogoProps {
  height?: number;
  className?: string;
  linkToHome?: boolean;
  animate?: boolean;
}

function LogoImage({ height, onError }: { height: number; onError: () => void }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo.png"
      alt="KhelSetu"
      style={{ height: `${height}px`, width: 'auto', display: 'block' }}
      onError={onError}
      draggable={false}
    />
  );
}

function TextFallback({ height, light }: { height: number; light?: boolean }) {
  const iconSize = Math.round(height * 0.78);
  const fontSize = Math.round(iconSize * 0.38);
  return (
    <div className="flex items-center gap-2">
      <div
        className="rounded-xl bg-gradient-to-br from-[#1B3A6B] to-[#2D9944] flex items-center justify-center text-white font-black flex-shrink-0"
        style={{ width: iconSize, height: iconSize, fontSize }}
      >
        KS
      </div>
      <span
        className={`font-bold tracking-tight ${light ? 'text-white' : 'text-[#0F1F3D]'}`}
        style={{ fontSize: Math.round(height * 0.45) }}
      >
        Khel<span className="gradient-text">Setu</span>
      </span>
    </div>
  );
}

export default function Logo({
  height = 40,
  className = '',
  linkToHome = false,
  animate = false,
}: LogoProps) {
  const [imgFailed, setImgFailed] = useState(false);

  const inner = (
    <motion.div
      className={`inline-flex items-center select-none ${className}`}
      whileHover={animate ? { scale: 1.04 } : undefined}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
    >
      {imgFailed ? (
        <TextFallback height={height} />
      ) : (
        <LogoImage height={height} onError={() => setImgFailed(true)} />
      )}
    </motion.div>
  );

  if (linkToHome) {
    return (
      <Link href="/" className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3A6B]/40 rounded-lg">
        {inner}
      </Link>
    );
  }
  return inner;
}
