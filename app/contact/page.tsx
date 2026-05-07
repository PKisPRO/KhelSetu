'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from '@/components/SocialIcons';
import PageTransition from '@/components/PageTransition';
import GlassCard from '@/components/GlassCard';

export default function ContactPage() {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'khelsetu177@gmail.com',
      href: 'mailto:khelsetu177@gmail.com',
      color: 'from-[#1B3A6B] to-[#2F5FA8]',
      external: false,
    },
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: '+91 92516 81626',
      href: 'tel:+919251681626',
      color: 'from-[#2D9944] to-[#3DBB5A]',
      external: false,
    },
    {
      icon: InstagramIcon,
      label: 'Instagram',
      value: '@khelsetu_',
      href: 'https://instagram.com/khelsetu_',
      color: 'from-violet-500 to-purple-400',
      external: true,
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'KhelSetu',
      href: 'https://www.linkedin.com/company/khelsetu-in',
      color: 'from-[#0077B5] to-[#005885]',
      external: true,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jaipur, Rajasthan, India',
      href: '#',
      color: 'from-amber-500 to-orange-400',
      external: false,
    },
  ];

  return (
    <PageTransition>
      <div className="overflow-hidden">

        {/* HERO */}
        <section className="relative py-28 animated-gradient grid-pattern overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full glow-pulse"
                 style={{ background: 'rgba(27,58,107,0.07)', filter: 'blur(120px)' }} />
            <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] rounded-full glow-pulse"
                 style={{ background: 'rgba(45,153,68,0.06)', filter: 'blur(100px)', animationDelay: '1.5s' }} />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="text-[#2D9944] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Get In Touch</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title text-[#0F1F3D] mb-4 max-w-3xl">
              We&apos;d love to <span className="gradient-text">hear from you</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-500 text-lg max-w-xl">
              Questions, partnerships, volunteering, media inquiries — reach out anytime. We typically respond within 24 hours.
            </motion.p>
            {/* Location badge */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }}
              className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-full px-4 py-2 mt-6">
              <MapPin size={14} className="text-[#1B3A6B]" />
              <span className="text-gray-600 text-sm font-medium">Based in Jaipur, Rajasthan, India</span>
            </motion.div>
          </div>
        </section>

        {/* MAIN */}
        <section className="py-16 relative bg-white">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12">

              {/* Contact form */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F1F3D] mb-7">Send a Message</h2>
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div key="done" initial={{ opacity: 0, scale: 0.93 }} animate={{ opacity: 1, scale: 1 }}
                      className="glass-card p-10 text-center">
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }}
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B3A6B] to-[#2D9944] flex items-center justify-center mx-auto mb-5">
                        <CheckCircle size={28} className="text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-[#0F1F3D] mb-2">Message Sent!</h3>
                      <p className="text-gray-500 text-sm mb-6">
                        Thanks {name}! We&apos;ll get back to you at <span className="text-[#1B3A6B] font-medium">{email}</span> within 24 hours.
                      </p>
                      <button onClick={() => { setSent(false); setName(''); setEmail(''); setSubject(''); setMessage(''); }}
                        className="btn-secondary text-sm px-6 py-3">Send Another</button>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Your Name *</label>
                          <input required value={name} onChange={e => setName(e.target.value)} placeholder="Full name" className="input-field" />
                        </div>
                        <div>
                          <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Email *</label>
                          <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" className="input-field" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Subject</label>
                        <input value={subject} onChange={e => setSubject(e.target.value)} placeholder="What's this about?" className="input-field" />
                      </div>
                      <div>
                        <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Message *</label>
                        <textarea required value={message} onChange={e => setMessage(e.target.value)} placeholder="Your message…"
                          rows={5} className="input-field resize-none" />
                      </div>
                      <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        disabled={loading} className="btn-primary w-full py-4 text-base justify-center gap-2 disabled:opacity-60">
                        {loading ? (
                          <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 rounded-full border-2 border-white/40 border-t-white" />Sending…</>
                        ) : (
                          <><Send size={17} />Send Message</>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact info */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#0F1F3D] mb-7">Contact Details</h2>

                {contacts.map((c, i) => (
                  <motion.a
                    key={i}
                    href={c.href}
                    target={c.external ? '_blank' : undefined}
                    rel={c.external ? 'noreferrer' : undefined}
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }} whileHover={{ x: 4 }}
                    className="flex items-center gap-4 glass-card p-5 group cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                      <c.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">{c.label}</p>
                      <p className="text-[#0F1F3D] font-semibold text-sm">{c.value}</p>
                    </div>
                  </motion.a>
                ))}

                <GlassCard delay={0.4} className="p-5 flex gap-3">
                  <MessageSquare size={18} className="text-[#1B3A6B] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#0F1F3D] font-semibold text-sm mb-1">Quick Responses</p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      We aim to respond within 24 hours on weekdays. Instagram DMs typically get the fastest response. We are based in Jaipur (IST).
                    </p>
                  </div>
                </GlassCard>

              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL CTA */}
        <section className="py-20 animated-gradient">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-[#0F1F3D] mb-4">
                Follow our journey on <span className="gradient-text">Instagram</span>
              </h2>
              <p className="text-gray-500 text-base mb-7">
                @khelsetu_ — behind-the-scenes, drive updates, and the story as it unfolds.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="https://instagram.com/khelsetu_" target="_blank" rel="noreferrer">
                  <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                    className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2">
                    <InstagramIcon size={18} /> Follow @khelsetu_
                  </motion.button>
                </a>
                <a href="https://www.linkedin.com/company/khelsetu-in" target="_blank" rel="noreferrer">
                  <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                    className="btn-secondary text-base px-8 py-4 inline-flex items-center gap-2">
                    <LinkedinIcon size={18} /> LinkedIn
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
