import Link from 'next/link';
import { Mail, Phone, Heart, MapPin } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from '@/components/SocialIcons';
import Logo from '@/components/Logo';

const footerLinks = {
  explore: [
    { href: '/',        label: 'Home' },
    { href: '/about',   label: 'About Us' },
    { href: '/donate',  label: 'Donate Equipment' },
    { href: '/browse',  label: 'Browse Equipment' },
    { href: '/support', label: 'Support Us' },
  ],
  more: [
    { href: '/impact',  label: 'Our Impact' },
    { href: '/team',    label: 'Team' },
    { href: '/contact', label: 'Contact' },
    { href: '/admin',   label: 'Admin' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative mt-auto" style={{ background: '#0F1F3D' }}>
      <div className="h-px bg-gradient-to-r from-transparent via-[#2D9944]/50 to-transparent" />

      {/* CTA strip */}
      <div style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #2D9944 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Ready to make a difference?</h3>
            <p className="text-white/70 text-sm">Your unused gear could be a child&apos;s first step into sport.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/donate">
              <button className="inline-flex items-center justify-center gap-2 font-bold rounded-full px-6 py-3 text-sm transition-all cursor-pointer hover:shadow-lg"
                style={{ background: 'white', color: '#1B3A6B' }}>
                Donate Equipment
              </button>
            </Link>
            <Link href="/contact">
              <button className="btn-outline-white text-sm px-6 py-3">Get In Touch</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Logo height={48} linkToHome />
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-3 max-w-56">
              A student-led initiative collecting unused sports equipment and redistributing it to underprivileged children.
            </p>
            {/* Location */}
            <div className="flex items-center gap-2 text-white/35 text-xs mb-5">
              <MapPin size={12} className="text-[#3DBB5A] flex-shrink-0" />
              Jaipur, Rajasthan, India
            </div>
            {/* Social icons */}
            <div className="flex gap-2.5">
              <a href="https://instagram.com/khelsetu_" target="_blank" rel="noreferrer" aria-label="Instagram"
                 className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-[#3DBB5A] hover:border-[#3DBB5A]/40 transition-all">
                <InstagramIcon size={15} />
              </a>
              <a href="https://www.linkedin.com/company/khelsetu-in" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                 className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-[#3DBB5A] hover:border-[#3DBB5A]/40 transition-all">
                <LinkedinIcon size={15} />
              </a>
              <a href="mailto:khelsetu177@gmail.com" aria-label="Email"
                 className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-[#3DBB5A] hover:border-[#3DBB5A]/40 transition-all">
                <Mail size={15} />
              </a>
              <a href="tel:+919251681626" aria-label="Phone"
                 className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-[#3DBB5A] hover:border-[#3DBB5A]/40 transition-all">
                <Phone size={15} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.18em] mb-5">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/40 hover:text-[#3DBB5A] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.18em] mb-5">More</h4>
            <ul className="space-y-3">
              {footerLinks.more.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/40 hover:text-[#3DBB5A] text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.18em] mb-5">Contact</h4>
            <div className="space-y-3 mb-5">
              <a href="mailto:khelsetu177@gmail.com"
                 className="flex items-center gap-2.5 text-white/40 hover:text-[#3DBB5A] text-sm transition-colors">
                <Mail size={13} />khelsetu177@gmail.com
              </a>
              <a href="tel:+919251681626"
                 className="flex items-center gap-2.5 text-white/40 hover:text-[#3DBB5A] text-sm transition-colors">
                <Phone size={13} />+91 92516 81626
              </a>
              <a href="https://instagram.com/khelsetu_" target="_blank" rel="noreferrer"
                 className="flex items-center gap-2.5 text-white/40 hover:text-[#3DBB5A] text-sm transition-colors">
                <InstagramIcon size={13} />@khelsetu_
              </a>
              <a href="https://www.linkedin.com/company/khelsetu-in" target="_blank" rel="noreferrer"
                 className="flex items-center gap-2.5 text-white/40 hover:text-[#3DBB5A] text-sm transition-colors">
                <LinkedinIcon size={13} />KhelSetu on LinkedIn
              </a>
              <span className="flex items-center gap-2.5 text-white/35 text-sm">
                <MapPin size={13} className="text-[#3DBB5A]" />Jaipur, Rajasthan, India
              </span>
            </div>
            <div className="p-4 rounded-xl border border-white/8 bg-white/4">
              <p className="text-white/70 text-xs font-semibold mb-1">Student-Led · Just Launched</p>
              <p className="text-white/35 text-xs leading-relaxed">First collection drive launching in Jaipur. Be an early donor.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">© 2025 KhelSetu · Jaipur, Rajasthan, India · All rights reserved.</p>
          <p className="text-white/25 text-xs flex items-center gap-1.5">
            Made with <Heart size={11} className="text-red-400 fill-red-400" /> for every child&apos;s right to play
          </p>
        </div>
      </div>
    </footer>
  );
}
