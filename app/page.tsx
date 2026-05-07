'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Package, Sparkles, Heart, Users, Trophy, Zap, RotateCcw, ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import MagneticButton from '@/components/MagneticButton';

const steps = [
  { num: '01', icon: Package,   title: 'Collect',      desc: 'Unused sports equipment is collected from schools, clubs, and individuals across Jaipur — via school drop-off or Porter pickup.',               color: 'from-[#1B3A6B] to-[#2F5FA8]' },
  { num: '02', icon: Sparkles,  title: 'Clean & Sort', desc: 'Every item is cleaned, sanitised, and sorted by sport and condition to make sure it is genuinely usable before redistribution.',              color: 'from-violet-500 to-purple-400' },
  { num: '03', icon: Heart,     title: 'Redistribute', desc: 'Sorted equipment is handed directly to underprivileged children through schools, NGO partners, and community centres — completely free.',     color: 'from-[#2D9944] to-[#3DBB5A]' },
];

const reasons = [
  { icon: Users,     title: 'Student-Led',  desc: 'Built and run by students from Jaipur who believe every child deserves a chance to play.' },
  { icon: Trophy,    title: 'Zero Cost',    desc: 'Every piece of equipment is given completely free. No child is charged anything.' },
  { icon: Zap,       title: 'Zero Waste',   desc: 'Good sports gear should not gather dust. We give it a second life where it matters most.' },
  { icon: RotateCcw, title: 'Direct Impact',desc: 'Equipment goes straight from donor to child — no unnecessary middlemen or delays.' },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">

        {/* Full-bleed photo background */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-football.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.92)' }}
          />
          {/* Brand-coloured gradient overlay — heavier left where text lives */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(105deg, rgba(11,24,50,0.92) 0%, rgba(27,58,107,0.82) 45%, rgba(15,40,70,0.70) 75%, rgba(10,22,45,0.55) 100%)'
          }} />
          {/* Subtle bottom vignette */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to top, rgba(11,24,50,0.6) 0%, transparent 40%)'
          }} />
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-10" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-24">
          <div className="max-w-3xl">

            {/* Location pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-7 backdrop-blur-sm"
              style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#3DBB5A] ping-slow inline-block" />
              <span className="text-white/90 text-sm font-medium">Student-led initiative · Jaipur, India</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title text-white mb-5 leading-none"
            >
              Bridging the Gap{' '}
              <span className="gradient-text-light">Through Sport</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.38 }}
              className="text-xl text-white/75 mb-9 max-w-xl leading-relaxed"
            >
              Collecting unused sports equipment and giving it to those who need it most.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.52 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton>
                <Link href="/donate">
                  <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                    className="btn-primary text-base px-8 py-4 gap-2">
                    Donate Equipment <ArrowRight size={18} />
                  </motion.button>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/about">
                  <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                    className="btn-outline-white text-base px-8 py-4">
                    Learn More
                  </motion.button>
                </Link>
              </MagneticButton>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── WHAT WE DO ───────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-stretch">

            {/* Left: copy */}
            <div className="flex flex-col justify-center">
              <SectionHeading
                eyebrow="What We Do"
                title="Equipment for "
                highlight="Every Child"
                description="Millions of children dream of playing sport but cannot afford the equipment. At the same time, perfectly good gear sits unused in closets. KhelSetu bridges that gap."
              />
              <div className="mt-8 space-y-4">
                {[
                  'We collect unused sports equipment from donors across Jaipur.',
                  'We clean, sort, and verify every item before redistribution.',
                  'We give it — completely free — to children who cannot afford it.',
                ].map((point, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#1B3A6B] to-[#2D9944] flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-8">
                <Link href="/about">
                  <button className="btn-secondary text-sm px-6 py-3 inline-flex items-center gap-2">
                    Our Story <ArrowRight size={15} />
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Right: photo card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden min-h-[460px] lg:min-h-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-cricket-4.jpg"
                alt="Children playing street cricket at sunset"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* Bottom-up gradient so text overlay is readable */}
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to top, rgba(11,24,50,0.96) 0%, rgba(11,24,50,0.60) 40%, rgba(11,24,50,0.08) 75%, transparent 100%)'
              }} />

              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex items-center gap-2 backdrop-blur-sm rounded-full px-3 py-1.5 mb-4"
                     style={{ background: 'rgba(61,187,90,0.2)', border: '1px solid rgba(61,187,90,0.35)' }}>
                  <span className="w-2 h-2 rounded-full bg-[#3DBB5A] ping-slow inline-block" />
                  <span className="text-[#3DBB5A] text-xs font-semibold uppercase tracking-wide">Just Launched · Jaipur</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">We&apos;re just getting started.</h3>
                <p className="text-white/65 text-sm leading-relaxed mb-4">
                  Our first collection drive launches soon. Be one of the first to donate.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="backdrop-blur-sm rounded-xl p-3 text-center"
                       style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.15)' }}>
                    <div className="text-xl font-black text-white mb-0.5">₹0</div>
                    <div className="text-white/55 text-xs">Cost to recipients</div>
                  </div>
                  <div className="backdrop-blur-sm rounded-xl p-3 text-center"
                       style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.15)' }}>
                    <div className="text-xl font-black text-white mb-0.5">100%</div>
                    <div className="text-white/55 text-xs">Equipment reused</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="py-24 relative animated-gradient">
        <div className="absolute inset-0 grid-pattern-fine opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="mb-14 text-center">
            <SectionHeading eyebrow="The Process" title="How It " highlight="Works"
              description="Simple and transparent — from your doorstep to a child's hands." centered />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <GlassCard key={i} delay={i * 0.15} className="relative overflow-hidden">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md`}>
                    <step.icon size={20} className="text-white" />
                  </div>
                  <span className="text-gray-200 font-black text-3xl">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </GlassCard>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
            className="text-center mt-10">
            <Link href="/donate">
              <button className="btn-primary text-sm px-8 py-4 inline-flex items-center gap-2">
                Donate Your Equipment <ArrowRight size={16} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHY KHELSETU ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14 text-center">
            <SectionHeading eyebrow="Why It Matters" title="Why We " highlight="Do This" centered />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((r, i) => (
              <GlassCard key={i} delay={i * 0.1} glow="blue" className="group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors"
                     style={{ background: 'rgba(27,58,107,0.08)', border: '1px solid rgba(27,58,107,0.14)' }}>
                  <r.icon size={22} className="text-[#1B3A6B]" />
                </div>
                <h3 className="text-gray-800 font-bold mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ──────────────────────────────────────────────── */}
      <section className="py-0 overflow-hidden">
        <div className="flex gap-1">
          {[
            { src: '/images/about-cricket-2.jpg', alt: 'Boys playing cricket with brick wicket' },
            { src: '/images/about-cricket-3.jpg', alt: 'Children carrying makeshift cricket bats' },
            { src: '/images/about-cricket-1.jpg', alt: 'Boy batting cricket at sunset' },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative flex-1 overflow-hidden"
              style={{ height: 260 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              {/* Subtle brand tint */}
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(135deg, rgba(27,58,107,0.25) 0%, rgba(45,153,68,0.10) 100%)'
              }} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── DONATE CTA ───────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #1E4577 50%, #2D9944 100%)' }} />
            <div className="absolute inset-0 grid-pattern opacity-15" />
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px]" style={{ background: 'rgba(255,255,255,0.07)' }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[80px]" style={{ background: 'rgba(255,255,255,0.05)' }} />
            <div className="relative z-10 p-12 md:p-16 text-center">
              <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto"
                style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}>
                <Package size={28} className="text-white" />
              </motion.div>
              <h2 className="section-title text-white mb-4">
                Got unused gear? <span className="text-[#3DBB5A]">Pass it on.</span>
              </h2>
              <p className="text-white/75 text-lg mb-10 max-w-2xl mx-auto">
                Your cricket bat or tennis racket could be the spark that ignites a child&apos;s love for sport. It takes just 2 minutes to list it.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <MagneticButton>
                  <Link href="/donate">
                    <button className="inline-flex items-center gap-2 font-bold rounded-full px-10 py-4 text-base transition-all cursor-pointer hover:shadow-lg"
                      style={{ background: 'white', color: '#1B3A6B' }}>
                      List My Equipment <ArrowRight size={18} />
                    </button>
                  </Link>
                </MagneticButton>
                <Link href="/browse">
                  <button className="btn-outline-white text-base px-10 py-4">Browse Listings</button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA — photo background ─────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">

        {/* Photo background */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-football.jpg"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, rgba(11,24,50,0.95) 0%, rgba(27,58,107,0.90) 50%, rgba(15,40,70,0.92) 100%)'
          }} />
        </div>

        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[#3DBB5A] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Join the Movement</p>
            <h2 className="section-title text-white mb-6">
              Be the reason a child <span className="gradient-text-light">plays today</span>
            </h2>
            <p className="text-white/65 text-lg mb-10">
              Whether you donate equipment, spread the word, or simply believe in what we&apos;re doing — every action counts.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton>
                <Link href="/donate">
                  <button className="btn-primary text-base px-10 py-4 inline-flex items-center gap-2">
                    Donate Equipment <ArrowRight size={18} />
                  </button>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/contact">
                  <button className="btn-outline-white text-base px-10 py-4">Get In Touch</button>
                </Link>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
