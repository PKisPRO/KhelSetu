'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Users } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from '@/components/SocialIcons';
import { founder, leadership, coreTeam, logisticsTeam } from '@/data/team';
import PageTransition from '@/components/PageTransition';
import SectionHeading from '@/components/SectionHeading';
import Link from 'next/link';

/* ─── Photo component with onError fallback ─── */
function TeamPhoto({
  src,
  name,
  size,
}: {
  src: string;
  name: string;
  size: 'xl' | 'lg' | 'md';
}) {
  const [failed, setFailed] = useState(false);
  const dim = size === 'xl' ? 160 : size === 'lg' ? 120 : 96;
  const initials = name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();

  return (
    <div
      className="relative rounded-full overflow-hidden flex-shrink-0 mx-auto"
      style={{ width: dim, height: dim }}
    >
      {failed ? (
        <div
          className="w-full h-full flex items-center justify-center text-white font-black"
          style={{
            background: 'linear-gradient(135deg, #1B3A6B, #2D9944)',
            fontSize: Math.round(dim * 0.3),
          }}
        >
          {initials}
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover object-top"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

/* ─── Social icon link ─── */
function SocialBtn({ href, icon: Icon, label }: { href?: string; icon: React.ElementType; label: string }) {
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}
       className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#1B3A6B] hover:border-[#1B3A6B]/25 transition-colors">
      <Icon size={13} />
    </a>
  );
}

function Socials({ socials }: { socials: { instagram?: string; linkedin?: string; email?: string } }) {
  const hasAny = socials.instagram || socials.linkedin || socials.email;
  if (!hasAny) return null;
  return (
    <div className="flex justify-center gap-2 mt-3">
      {socials.instagram && <SocialBtn href={socials.instagram} icon={InstagramIcon} label="Instagram" />}
      {socials.linkedin  && <SocialBtn href={socials.linkedin}  icon={LinkedinIcon}  label="LinkedIn" />}
      {socials.email     && <SocialBtn href={`mailto:${socials.email}`} icon={Mail}  label="Email" />}
    </div>
  );
}

/* ─── Role badge colours ─── */
function RoleBadge({ role }: { role: string }) {
  const colours: Record<string, string> = {
    'Founder':           'bg-[#1B3A6B] text-white',
    'Co-Founder':        'bg-[#1B3A6B]/10 text-[#1B3A6B] border border-[#1B3A6B]/25',
    'Vice President':    'bg-[#2D9944]/10 text-[#2D9944] border border-[#2D9944]/25',
    'Outreach Head':     'bg-violet-50 text-violet-600 border border-violet-200',
    'Operations Head':   'bg-amber-50 text-amber-600 border border-amber-200',
    'Finance Head':      'bg-emerald-50 text-emerald-600 border border-emerald-200',
    'Logistics Head':    'bg-blue-50 text-blue-600 border border-blue-200',
  };
  return (
    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide ${colours[role] ?? 'bg-gray-100 text-gray-500'}`}>
      {role}
    </span>
  );
}

/* ─── Section label ─── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="h-px flex-1 bg-gray-100" />
      <span className="text-gray-400 text-xs font-semibold uppercase tracking-[0.22em] flex-shrink-0">{children}</span>
      <div className="h-px flex-1 bg-gray-100" />
    </div>
  );
}

export default function TeamPage() {
  return (
    <PageTransition>
      <div className="overflow-hidden">

        {/* ── HERO ──────────────────────────────────────────── */}
        <section className="relative py-28 animated-gradient grid-pattern overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full glow-pulse"
                 style={{ background: 'rgba(27,58,107,0.07)', filter: 'blur(120px)' }} />
            <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] rounded-full glow-pulse"
                 style={{ background: 'rgba(45,153,68,0.06)', filter: 'blur(100px)', animationDelay: '1.5s' }} />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1B3A6B] to-[#2D9944] flex items-center justify-center shadow-md">
                <Users size={18} className="text-white" />
              </div>
              <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                className="text-[#2D9944] text-sm font-semibold uppercase tracking-[0.2em]">Our Team</motion.p>
            </div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title text-[#0F1F3D] mb-4 max-w-3xl">
              Meet the <span className="gradient-text">Team</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-500 text-lg max-w-2xl">
              A passionate group of students from Jaipur, driven by the belief that every child deserves the joy of sport.
            </motion.p>
          </div>
        </section>

        {/* ── TEAM HIERARCHY ────────────────────────────────── */}
        <section className="py-20 bg-white relative">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-20">

            {/* ── FOUNDER ──────────────────────────────────── */}
            <div>
              <SectionLabel>Founder</SectionLabel>

              <motion.div
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-3xl overflow-hidden"
              >
                {/* Gradient background for founder card */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0F1F3D 0%, #1B3A6B 55%, #1A4D30 100%)' }} />
                <div className="absolute inset-0 grid-pattern opacity-10" />
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl" style={{ background: 'rgba(45,153,68,0.15)' }} />

                <div className="relative z-10 p-10 md:p-14 flex flex-col sm:flex-row items-center gap-10">
                  {/* Photo with decorative ring */}
                  <div className="flex-shrink-0 relative">
                    <div className="absolute inset-[-10px] rounded-full border border-white/15 spin-slow" />
                    <div className="absolute inset-[-20px] rounded-full border border-[#3DBB5A]/10 spin-rev" />
                    <div className="relative rounded-full p-1"
                         style={{ background: 'linear-gradient(135deg, #3DBB5A, #1B3A6B)' }}>
                      <div className="rounded-full overflow-hidden" style={{ width: 156, height: 156 }}>
                        <TeamPhoto src={founder.image} name={founder.name} size="xl" />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center sm:text-left">
                    <RoleBadge role={founder.role} />
                    <h2 className="text-3xl font-black text-white mt-3 mb-3">{founder.name}</h2>
                    <p className="text-white/65 leading-relaxed max-w-xl">{founder.bio}</p>

                    <div className="mt-5 pl-4 border-l-2 border-[#3DBB5A]/40">
                      <p className="text-white/45 text-sm italic">
                        &ldquo;I started KhelSetu because I believed the gap between too much and too little could be closed by just caring enough to try.&rdquo;
                      </p>
                    </div>

                    {/* Socials — light version */}
                    <div className="flex justify-center sm:justify-start gap-2 mt-5">
                      {founder.socials.instagram && (
                        <a href={founder.socials.instagram} target="_blank" rel="noreferrer"
                           className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                           style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)' }}>
                          <InstagramIcon size={14} className="text-white/70" />
                        </a>
                      )}
                      {founder.socials.email && (
                        <a href={`mailto:${founder.socials.email}`}
                           className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                           style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)' }}>
                          <Mail size={14} className="text-white/70" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ── CORE LEADERSHIP ──────────────────────────── */}
            <div>
              <SectionLabel>Core Leadership</SectionLabel>

              <div className="grid sm:grid-cols-2 gap-6">
                {leadership.map((member, i) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="glass-card p-8 text-center group"
                  >
                    {/* Gradient ring around photo */}
                    <div className="relative inline-block mb-5">
                      <div className="absolute inset-[-3px] rounded-full"
                           style={{ background: 'linear-gradient(135deg, #1B3A6B, #2D9944)', padding: 3 }} />
                      <div className="relative rounded-full overflow-hidden border-2 border-white"
                           style={{ width: 120, height: 120 }}>
                        <TeamPhoto src={member.image} name={member.name} size="lg" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#0F1F3D] mb-1">{member.name}</h3>
                    <div className="mb-3"><RoleBadge role={member.role} /></div>
                    <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                    <Socials socials={member.socials} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── CORE TEAM ────────────────────────────────── */}
            <div>
              <SectionLabel>Core Team</SectionLabel>

              <div className="grid sm:grid-cols-3 gap-5">
                {coreTeam.map((member, i) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="glass-card p-7 text-center"
                  >
                    <div className="relative inline-block mb-4">
                      <div className="absolute inset-[-2px] rounded-full opacity-60"
                           style={{ background: 'linear-gradient(135deg, #1B3A6B, #2D9944)' }} />
                      <div className="relative rounded-full overflow-hidden border-2 border-white"
                           style={{ width: 96, height: 96 }}>
                        <TeamPhoto src={member.image} name={member.name} size="md" />
                      </div>
                    </div>

                    <h3 className="text-gray-800 font-bold mb-1">{member.name}</h3>
                    <div className="mb-3"><RoleBadge role={member.role} /></div>
                    <p className="text-gray-400 text-xs leading-relaxed">{member.bio}</p>
                    <Socials socials={member.socials} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── LOGISTICS TEAM ───────────────────────────── */}
            <div>
              <SectionLabel>Logistics Team</SectionLabel>

              <div className="grid sm:grid-cols-2 max-w-2xl mx-auto gap-5">
                {logisticsTeam.map((member, i) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="glass-card p-7 text-center"
                  >
                    <div className="relative inline-block mb-4">
                      <div className="absolute inset-[-2px] rounded-full opacity-60"
                           style={{ background: 'linear-gradient(135deg, #1B3A6B, #2D9944)' }} />
                      <div className="relative rounded-full overflow-hidden border-2 border-white"
                           style={{ width: 96, height: 96 }}>
                        <TeamPhoto src={member.image} name={member.name} size="md" />
                      </div>
                    </div>

                    <h3 className="text-gray-800 font-bold mb-1">{member.name}</h3>
                    <div className="mb-3"><RoleBadge role={member.role} /></div>
                    <p className="text-gray-400 text-xs leading-relaxed">{member.bio}</p>
                    <Socials socials={member.socials} />
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── JOIN CTA ──────────────────────────────────────── */}
        <section className="py-20 section-dark relative">
          <div className="absolute inset-0 grid-pattern opacity-15" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-white mb-4">
                Want to <span className="gradient-text-light">join the team?</span>
              </h2>
              <p className="text-white/65 text-base mb-8">
                We are always looking for passionate students from Jaipur to volunteer, co-lead drives, or take on operational roles.
              </p>
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                  className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2">
                  <Mail size={18} /> Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
