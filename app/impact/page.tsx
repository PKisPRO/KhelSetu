'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Camera, Heart, MapPin, Sparkles } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import AnimatedCounter from '@/components/AnimatedCounter';
import ImpactGallery from '@/components/ImpactGallery';
import { driveGalleryImages } from '@/data/donationDrive';

const impactStats = [
  { icon: '🧒', target: 40,  suffix: '+', label: 'Children Reached',    desc: 'Kids who received sports equipment free of charge' },
  { icon: '🎽', target: 170, suffix: '+', label: 'Equipment Collected', desc: 'Items donated, verified and redistributed' },
  { icon: '🏠', target: 1,   suffix: '',  label: 'Orphanage Partnered', desc: 'Partner home where our first drive took place' },
  { icon: '📦', target: 1,   suffix: '',  label: 'Drive Completed',     desc: 'First collection & redistribution event done' },
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
              Our First Drive is <span className="gradient-text">Done</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-500 text-lg max-w-2xl">
              In July 2026 we completed our first donation drive — 170+ pieces of sports equipment collected and delivered to 40+ children at our first partner orphanage home. Every number below is real.
            </motion.p>
          </div>
        </section>

        {/* REAL NUMBERS */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <SectionHeading eyebrow="Verified Numbers" title="Impact so " highlight="far" centered
                description="Counted at the drive itself — no estimates, no guesses. These numbers grow with every drive we run." />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {impactStats.map((s, i) => (
                <GlassCard key={i} delay={i * 0.1} glow="green" className="text-center p-7">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <div className="text-4xl font-black text-[#0F1F3D] mb-2">
                    <AnimatedCounter target={s.target} suffix={s.suffix} />
                  </div>
                  <h3 className="text-gray-800 font-bold text-sm mb-2">{s.label}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* THE STORY */}
        <section className="py-20 animated-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass-card p-10 md:p-14">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1B3A6B] to-[#2D9944] flex items-center justify-center mb-7 shadow-lg">
                <Sparkles size={28} className="text-white" />
              </div>
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-6">
                <MapPin size={14} className="text-[#2D9944]" />
                <span className="text-[#2D9944] text-xs font-semibold uppercase tracking-wide">Drive #1 · Jaipur · July 2026</span>
              </div>
              <h2 className="text-2xl font-bold text-[#0F1F3D] mb-4">The day the bridge was built.</h2>
              <p className="text-gray-500 text-base leading-relaxed mb-3">
                Over weeks of collection, donors across Jaipur handed us more than 170 pieces of sports equipment — bats, balls, rackets, and more. We cleaned, sorted, and verified every single item.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Then we took it where it mattered: our first partner orphanage home, where around 40 children picked up equipment that was theirs to keep. No fees, no conditions — just kids finally getting to play. This page will keep growing, one honest drive at a time.
              </p>
              <Link href="/donate">
                <button className="btn-primary text-sm px-8 py-3 inline-flex items-center gap-2">
                  Fuel the Next Drive <ArrowRight size={15} />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* PHOTO GALLERY */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-5">
                <Camera size={14} className="text-[#1B3A6B]" />
                <span className="text-[#1B3A6B] text-xs font-semibold uppercase tracking-wide">From the Ground</span>
              </div>
              <SectionHeading eyebrow="" title="Moments from our " highlight="first drive" centered
                description="Real photographs from collection day to the smiles at the orphanage. Click any photo to view it full size." />
            </div>
            <ImpactGallery images={driveGalleryImages} initialCount={15} />
          </div>
        </section>

        {/* HOW YOU CAN HELP */}
        <section className="py-20 animated-gradient">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <SectionHeading eyebrow="What's Next" title="Help Us Do It " highlight="Again" centered />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: '🎾',
                  title: 'Donate Equipment',
                  desc: 'Drive #1 reached 40 children. Your unused gear decides how many Drive #2 reaches.',
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
                  desc: 'Are you a school, club, or NGO in Jaipur? We would love to work together on our next drive.',
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
                We never publish inflated numbers or estimates. Every stat on this page is verified, real, and tied to an actual collection or redistribution event — starting with our first drive, documented above.
              </p>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
