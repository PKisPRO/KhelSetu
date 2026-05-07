'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BarChart3, Clock, Heart } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';

const upcomingMetrics = [
  { icon: '🎽', label: 'Equipment Collected',  desc: 'Total items donated and verified' },
  { icon: '🧒', label: 'Children Reached',     desc: 'Kids who received equipment free of charge' },
  { icon: '🏫', label: 'Schools Partnered',    desc: 'Schools participating in our drives' },
  { icon: '📦', label: 'Drives Completed',     desc: 'Successful collection & redistribution events' },
];

export default function ImpactPage() {
  return (
    <PageTransition>
      <div className="overflow-hidden">

        {/* HERO */}
        <section className="relative py-28 animated-gradient grid-pattern overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full glow-pulse"
                 style={{ background: 'rgba(45,153,68,0.07)', filter: 'blur(120px)' }} />
            <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] rounded-full glow-pulse"
                 style={{ background: 'rgba(27,58,107,0.07)', filter: 'blur(100px)', animationDelay: '1.5s' }} />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="text-[#2D9944] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Our Impact</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title text-[#0F1F3D] mb-5 max-w-3xl">
              Impact <span className="gradient-text">Coming Soon</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-500 text-lg max-w-2xl">
              We are just getting started. Every number on this page will represent a real child who got to play because of your donation.
            </motion.p>
          </div>
        </section>

        {/* HONEST STATUS */}
        <section className="py-20 bg-white relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass-card p-10 md:p-14 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1B3A6B] to-[#2D9944] flex items-center justify-center mx-auto mb-7 shadow-lg">
                <BarChart3 size={28} className="text-white" />
              </div>
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-6">
                <Clock size={14} className="text-amber-600" />
                <span className="text-amber-700 text-xs font-semibold uppercase tracking-wide">Launching Soon</span>
              </div>
              <h2 className="text-2xl font-bold text-[#0F1F3D] mb-4">No impact data yet — and that&apos;s honest.</h2>
              <p className="text-gray-500 text-base leading-relaxed mb-3 max-w-xl mx-auto">
                KhelSetu is a brand-new initiative. We have not yet run our first collection drive, so we have no numbers to show — and we will not make them up.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto mb-8">
                When our first drive happens, every item collected, every child reached, and every school partnered will be documented and shared right here — transparently and honestly.
              </p>
              <Link href="/donate">
                <button className="btn-primary text-sm px-8 py-3 inline-flex items-center gap-2">
                  Make the First Donation <ArrowRight size={15} />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* UPCOMING METRICS */}
        <section className="py-20 animated-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <SectionHeading eyebrow="What We Will Track" title="Metrics that " highlight="matter" centered
                description="These are the numbers we will track and publish after every drive. No estimates. No guesses." />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {upcomingMetrics.map((m, i) => (
                <GlassCard key={i} delay={i * 0.1} className="text-center p-7">
                  <div className="text-4xl mb-4">{m.icon}</div>
                  <div className="text-3xl font-black text-gray-200 mb-2">—</div>
                  <h3 className="text-gray-800 font-bold text-sm mb-2">{m.label}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{m.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* HOW YOU CAN HELP */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <SectionHeading eyebrow="Right Now" title="How You Can " highlight="Help" centered />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: '🎾',
                  title: 'Donate Equipment',
                  desc: 'Your unused gear becomes the first entry in our impact record. Be the one who starts it.',
                  cta: 'Donate Now',
                  href: '/donate',
                },
                {
                  icon: '📢',
                  title: 'Spread the Word',
                  desc: 'Tell your school, family, and friends about KhelSetu. Word of mouth is how we grow.',
                  cta: 'Follow Us',
                  href: '/contact',
                },
                {
                  icon: '🤝',
                  title: 'Partner With Us',
                  desc: 'Are you a school, club, or NGO in Jaipur? We would love to work together on our first drive.',
                  cta: 'Get In Touch',
                  href: '/contact',
                },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }} className="glass-card p-7 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-gray-800 font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{item.desc}</p>
                  <Link href={item.href}>
                    <button className="btn-secondary text-sm px-5 py-2.5 inline-flex items-center gap-1.5">
                      {item.cta} <ArrowRight size={13} />
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PLEDGE */}
        <section className="py-16 section-dark relative">
          <div className="absolute inset-0 grid-pattern opacity-15" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Heart size={32} className="text-red-400 mx-auto mb-5" />
              <h2 className="text-2xl font-bold text-white mb-4">Our Transparency Pledge</h2>
              <p className="text-white/65 text-base leading-relaxed">
                We will never publish inflated numbers or estimates. Every stat on this page will be verified, real, and tied to an actual collection or redistribution event. If we have done nothing yet, we will say so.
              </p>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
