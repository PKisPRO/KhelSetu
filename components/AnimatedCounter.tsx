'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2.2,
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!inView) return;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const id = setInterval(() => {
      frame++;
      const progress = easeOut(frame / totalFrames);
      setCount(Math.round(progress * target));
      if (frame >= totalFrames) clearInterval(id);
    }, 1000 / 60);
    return () => clearInterval(id);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString('en-IN')}{suffix}
    </span>
  );
}
