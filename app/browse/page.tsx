'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Package } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

export default function BrowsePage() {
  return (
    <PageTransition>
      <div className="overflow-hidden">

        {/* HERO */}
        <section className="relative py-24 animated-gradient grid-pattern overflow-hidden">
          <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full glow-pulse pointer-events-none"
               style={{ background: 'rgba(27,58,107,0.07)', filter: 'blur(120px)' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="text-[#2D9944] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Browse Equipment</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title text-[#0F1F3D] mb-4 max-w-3xl">
              Available <span className="gradient-text">Equipment</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-500 text-lg max-w-xl">
              All equipment listed here is approved, cleaned, and available free of charge to children in need.
            </motion.p>
          </div>
        </section>

        {/* EMPTY STATE */}
        <section className="py-24 bg-white relative">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-14 text-center">

              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1B3A6B] to-[#2D9944] flex items-center justify-center mx-auto mb-7 shadow-lg">
                <Package size={36} className="text-white" />
              </div>

              <h2 className="text-2xl font-bold text-[#0F1F3D] mb-3">No Equipment Listed Yet</h2>
              <p className="text-gray-500 text-base leading-relaxed mb-2 max-w-md mx-auto">
                We are currently setting up our first collection drive in Jaipur.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
                As soon as donations come in and are verified, they will appear here — ready to reach children who need them most.
              </p>

              {/* Divider */}
              <div className="w-16 h-px bg-gray-200 mx-auto mb-8" />

              <p className="text-[#1B3A6B] font-semibold text-sm mb-5">Have sports equipment you don&apos;t use?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/donate">
                  <button className="btn-primary text-sm px-8 py-3 inline-flex items-center gap-2">
                    Donate Equipment <ArrowRight size={15} />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="btn-secondary text-sm px-8 py-3">Ask a Question</button>
                </Link>
              </div>
            </motion.div>

            {/* Info note */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="mt-8 bg-[#F4F8FF] border border-[#1B3A6B]/10 rounded-xl p-5 text-center">
              <p className="text-gray-500 text-sm leading-relaxed">
                <span className="text-[#1B3A6B] font-medium">How it works:</span> Once you donate equipment, our team reviews and approves it. Approved items then appear on this page so schools and community centres can request them directly.
              </p>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
