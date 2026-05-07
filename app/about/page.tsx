'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Heart, Target, Eye, Zap, MapPin, Calendar } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import PageTransition from '@/components/PageTransition';

const values = [
  { icon: Heart,  title: 'Empathy',      desc: 'We see the child who cannot play, not just the equipment that is not being used.' },
  { icon: Target, title: 'Impact-First', desc: 'Every decision we make is measured by real impact on real children, not optics.' },
  { icon: Eye,    title: 'Transparency', desc: 'We share exactly what happens to every item donated — no black boxes, ever.' },
  { icon: Zap,    title: 'Urgency',      desc: 'Children\'s growth windows are short. We move fast because the need is right now.' },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="overflow-hidden">

        {/* ── HERO — full-bleed photo ───────────────────────────────── */}
        <section className="relative py-40 overflow-hidden">

          {/* Photo background */}
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about-cricket-3.jpg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
            />
            {/* Brand-coloured overlay */}
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(135deg, rgba(11,24,50,0.92) 0%, rgba(27,58,107,0.80) 55%, rgba(15,40,70,0.75) 100%)'
            }} />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(11,24,50,0.65) 0%, transparent 50%)'
            }} />
          </div>

          <div className="absolute inset-0 grid-pattern opacity-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="text-[#3DBB5A] text-sm font-semibold uppercase tracking-[0.2em] mb-4">About Us</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title text-white mb-5 max-w-3xl">
              About <span className="gradient-text-light">KhelSetu</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-white/75 max-w-2xl leading-relaxed mb-7">
              A student-led initiative born out of a simple observation — and a desire to do something about it.
            </motion.p>
            {/* Location badge */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm"
              style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <MapPin size={14} className="text-[#3DBB5A]" />
              <span className="text-white/90 text-sm font-medium">Based in Jaipur, Rajasthan, India</span>
            </motion.div>
          </div>
        </section>

        {/* ── PROBLEM & SOLUTION ───────────────────────────────────── */}
        <section className="py-24 relative bg-white">
          <div className="absolute inset-0 grid-pattern opacity-25" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10">

              {/* The Problem — with embedded photo */}
              <GlassCard delay={0} className="relative overflow-hidden p-0">
                {/* Top photo */}
                <div className="relative h-52 overflow-hidden rounded-t-[1.1rem]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/about-cricket-2.jpg"
                    alt="Children playing with improvised cricket equipment"
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0" style={{
                    background: 'linear-gradient(to bottom, transparent 40%, rgba(11,24,50,0.55) 100%)'
                  }} />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-white/80 text-xs font-medium">Children make do with whatever they find.</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                         style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                      <span className="text-red-500 font-black text-base">!</span>
                    </div>
                    <h2 className="text-xl font-bold text-[#0F1F3D]">The Problem</h2>
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-4 text-sm">
                    Millions of children across India — including right here in Jaipur — are passionate about sport but
                    have never touched a proper bat, ball, or racket. Not because they don&apos;t want to. Because they cannot afford it.
                  </p>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    A basic cricket bat costs ₹500–₹3,000. For many families, that is a week of groceries. Sport, which
                    should be a universal right, becomes a privilege.
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="bg-red-50 border border-red-100 rounded-xl p-3 text-center">
                      <div className="text-xl font-black text-red-500 mb-0.5">Millions</div>
                      <div className="text-gray-500 text-xs">Children without access to equipment</div>
                    </div>
                    <div className="bg-orange-50 border border-orange-100 rounded-xl p-3 text-center">
                      <div className="text-xl font-black text-orange-500 mb-0.5">₹500+</div>
                      <div className="text-gray-500 text-xs">Cost of a basic cricket bat</div>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Our Solution */}
              <GlassCard delay={0.15} className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl"
                     style={{ background: 'rgba(45,153,68,0.05)' }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                         style={{ background: 'rgba(45,153,68,0.10)', border: '1px solid rgba(45,153,68,0.2)' }}>
                      <span className="text-[#2D9944] font-black text-base">✓</span>
                    </div>
                    <h2 className="text-xl font-bold text-[#0F1F3D]">Our Solution</h2>
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-4 text-sm">
                    At the same time, thousands of families in Jaipur have sports equipment sitting unused — gathering dust
                    in cupboards, long outgrown, or simply forgotten.
                  </p>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    KhelSetu creates a <span className="text-[#0F1F3D] font-semibold">circular economy for sports gear</span>.
                    We collect it, clean it, and give it — completely free — to the children who need it most.
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="bg-[#F0FDF4] border border-[#2D9944]/15 rounded-xl p-3 text-center">
                      <div className="text-xl font-black text-[#2D9944] mb-0.5">₹0</div>
                      <div className="text-gray-500 text-xs">Cost to recipients, always</div>
                    </div>
                    <div className="bg-[#F0F6FF] border border-[#1B3A6B]/10 rounded-xl p-3 text-center">
                      <div className="text-xl font-black text-[#1B3A6B] mb-0.5">100%</div>
                      <div className="text-gray-500 text-xs">Donated equipment reused</div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mt-6 p-4 rounded-xl relative overflow-hidden"
                       style={{ background: 'rgba(27,58,107,0.04)', border: '1px solid rgba(27,58,107,0.08)' }}>
                    <p className="text-gray-600 text-sm italic leading-relaxed">
                      &ldquo;No child should be stopped from playing just because they cannot afford a bat.&rdquo;
                    </p>
                    <p className="text-[#1B3A6B] text-xs font-semibold mt-2">— KhelSetu, founded in Jaipur</p>
                  </div>
                </div>
              </GlassCard>

            </div>
          </div>
        </section>

        {/* ── WHO WE ARE — split with photo mosaic ─────────────────── */}
        <section className="py-24 animated-gradient relative">
          <div className="absolute inset-0 grid-pattern-fine opacity-40" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-center">

              {/* Left: text content */}
              <div>
                <SectionHeading
                  eyebrow="Who We Are"
                  title="A Student Initiative "
                  highlight="Built With Purpose"
                />
                <div className="mt-8 space-y-5">
                  <p className="text-gray-600 leading-relaxed">
                    KhelSetu is a <span className="text-[#0F1F3D] font-semibold">student-led initiative based in Jaipur, India</span>.
                    We are a group of young people who believe that access to sport should not be determined by how much money a family has.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We are just getting started. Our first collection drive is being organised right here in Jaipur,
                    and we are building the systems, networks, and community needed to make this a lasting movement.
                  </p>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    Every step we take is student-driven — the idea, the execution, the outreach, and the redistribution.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    { icon: MapPin,  label: 'Based in Jaipur, India',                sub: 'Our first drives will run across schools and institutions in Jaipur.' },
                    { icon: null, emoji: '🎓', label: '100% Student-Led',             sub: 'Every role is handled by student volunteers.' },
                    { icon: null, emoji: '🌱', label: 'Just Getting Started',          sub: 'Newly launched — building momentum one drive at a time.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                      {item.icon ? (
                        <item.icon size={16} className="text-[#1B3A6B] flex-shrink-0 mt-0.5" />
                      ) : (
                        <span className="text-base flex-shrink-0">{item.emoji}</span>
                      )}
                      <div>
                        <p className="text-gray-800 font-semibold text-sm">{item.label}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: photo mosaic */}
              <motion.div
                initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-2 gap-2 h-[520px]"
              >
                {/* Tall left image */}
                <div className="relative rounded-2xl overflow-hidden row-span-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/about-cricket-1.jpg"
                    alt="Young boy batting cricket in warm light"
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-2xl" style={{
                    background: 'linear-gradient(to top, rgba(27,58,107,0.30) 0%, transparent 60%)'
                  }} />
                </div>

                {/* Top-right image */}
                <div className="relative rounded-2xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/about-cricket-4.jpg"
                    alt="Children playing street cricket at golden hour"
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-2xl" style={{
                    background: 'linear-gradient(135deg, rgba(27,58,107,0.20) 0%, rgba(45,153,68,0.10) 100%)'
                  }} />
                </div>

                {/* Bottom-right caption tile */}
                <div className="rounded-2xl flex items-center justify-center p-5 text-center"
                     style={{ background: 'linear-gradient(135deg, #1B3A6B, #2D9944)' }}>
                  <div>
                    <div className="text-3xl font-black text-white mb-1">Jaipur</div>
                    <div className="text-white/70 text-xs uppercase tracking-wide">Rajasthan, India</div>
                    <div className="w-8 h-0.5 bg-white/30 mx-auto my-2" />
                    <div className="text-white/60 text-xs">First collection drive<br />launching soon</div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── SPORTS LEAGUE CALLOUT ───────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-amber-50 border border-amber-200 rounded-2xl p-7 flex flex-col sm:flex-row items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center flex-shrink-0">
                <Calendar size={22} className="text-amber-600" />
              </div>
              <div>
                <p className="text-amber-700 text-xs font-semibold uppercase tracking-wide mb-1">Awareness Initiative</p>
                <h3 className="text-gray-800 font-bold text-lg mb-2">Charity Sports League — 22nd May</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  As part of our awareness efforts, we will also be organising a <strong>charity sports league on 22nd May</strong>.
                  The league is designed to spread the word about the donation drive, bring the community together,
                  and create excitement around KhelSetu&apos;s mission.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── VALUES ─────────────────────────────────────────────────── */}
        <section className="py-24 animated-gradient relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <SectionHeading eyebrow="What We Stand For" title="Our " highlight="Values" centered />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v, i) => (
                <GlassCard key={i} delay={i * 0.1} glow="blue" className="group text-center p-7">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors"
                       style={{ background: 'rgba(27,58,107,0.08)', border: '1px solid rgba(27,58,107,0.12)' }}>
                    <v.icon size={20} className="text-[#1B3A6B]" />
                  </div>
                  <h3 className="text-gray-800 font-bold mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA — photo background ──────────────────────────────── */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about-cricket-3.jpg"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(135deg, rgba(11,24,50,0.94) 0%, rgba(27,58,107,0.88) 55%, rgba(15,40,70,0.92) 100%)'
            }} />
          </div>
          <div className="absolute inset-0 grid-pattern opacity-15" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="section-title text-white mb-5">
                Ready to be part of the <span className="gradient-text-light">story?</span>
              </h2>
              <p className="text-white/65 text-lg mb-8">
                Donate your unused equipment, or get in touch to volunteer, partner, or simply learn more.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/donate">
                  <button className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2">
                    Donate Equipment <ArrowRight size={16} />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="btn-outline-white text-base px-8 py-4">Contact Us</button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
