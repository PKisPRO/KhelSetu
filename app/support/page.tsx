'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, AlertCircle, CheckCircle, Heart, ImageIcon, Package, Shield, Upload, Users, X, Zap } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SectionHeading from '@/components/SectionHeading';
import GlassCard from '@/components/GlassCard';
import { submitMoneyDonation, uploadMoneyDonationProof } from '@/lib/moneyDonations';

const fundUsage = [
  { icon: Package, label: 'Equipment Logistics', pct: 45, desc: 'Porter pickups, cleaning materials, storage costs',  color: 'from-[#1B3A6B] to-[#2F5FA8]' },
  { icon: Users,   label: 'Outreach & Events',   pct: 30, desc: 'School visits, awareness events, community drives',  color: 'from-[#2D9944] to-[#3DBB5A]' },
  { icon: Zap,     label: 'Tech & Operations',   pct: 15, desc: 'Website, tools, and basic administrative expenses', color: 'from-violet-500 to-violet-400' },
  { icon: Heart,   label: 'Community Programs',  pct: 10, desc: 'Sports coaching and workshops for recipients',       color: 'from-amber-500 to-amber-400' },
];

export default function SupportPage() {
  const [name, setName]     = useState('');
  const [email, setEmail]   = useState('');
  const [phone, setPhone]   = useState('');
  const [amount, setAmount] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [notes, setNotes]   = useState('');
  const [proof, setProof]   = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleProof = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      setError('Proof screenshot must be under 10MB.');
      return;
    }
    setProof(file);
    setPreview(URL.createObjectURL(file));
    setError(null);
  };

  const removeProof = () => {
    setProof(null);
    setPreview(null);
    if (fileRef.current) fileRef.current.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const parsedAmount = Number(amount);
    if (!name.trim() || !phone.trim() || !amount.trim() || !transactionId.trim() || !proof) {
      setError('Please add your name, phone, amount, UPI transaction ID, and payment screenshot.');
      return;
    }
    if (!Number.isFinite(parsedAmount) || parsedAmount <= 0) {
      setError('Please enter a valid donation amount.');
      return;
    }

    setLoading(true);

    const { url, error: uploadError } = await uploadMoneyDonationProof(proof);
    if (uploadError || !url) {
      setLoading(false);
      setError(`Proof upload failed: ${uploadError ?? 'Please try again.'}`);
      return;
    }

    const { error: submitError } = await submitMoneyDonation({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      amount: parsedAmount,
      transaction_id: transactionId.trim(),
      notes: notes.trim(),
      proof_url: url,
    });

    setLoading(false);

    if (submitError) {
      setError(`Submission failed: ${submitError}`);
      return;
    }

    setSubmitted(true);
  };

  return (
    <PageTransition>
      <div className="overflow-hidden">

        {/* HERO */}
        <section className="relative py-24 animated-gradient grid-pattern overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full glow-pulse"
                 style={{ background: 'rgba(45,153,68,0.07)', filter: 'blur(120px)' }} />
            <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] rounded-full glow-pulse"
                 style={{ background: 'rgba(27,58,107,0.07)', filter: 'blur(100px)', animationDelay: '2s' }} />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="text-[#2D9944] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Support Us</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title text-[#0F1F3D] mb-4 max-w-3xl">
              Help Fund the <span className="gradient-text">Mission</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-500 text-lg max-w-2xl">
              Collecting equipment costs us nothing — but logistics, cleaning, and outreach do. Your financial support is what makes redistribution possible.
            </motion.p>
          </div>
        </section>

        {/* MAIN */}
        <section className="py-16 relative bg-white">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* Donation form */}
              <div>
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="glass-card p-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B3A6B] to-[#2D9944] flex items-center justify-center mx-auto mb-5">
                      <Heart size={28} className="text-white fill-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0F1F3D] mb-2">Thank you, {name || 'Supporter'}!</h2>
                    <p className="text-gray-500 text-sm mb-6">
                      Your donation proof has been submitted. Our team will verify it and reach out if we need anything else.
                    </p>
                    <button onClick={() => {
                      setSubmitted(false); setName(''); setEmail(''); setPhone(''); setAmount('');
                      setTransactionId(''); setNotes(''); removeProof();
                    }}
                      className="btn-primary text-sm px-8 py-3">Submit Another Donation</button>
                  </motion.div>
                ) : (
                  <div className="glass-card p-8 space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-[#0F1F3D] mb-1">Donate via UPI</h2>
                      <p className="text-gray-400 text-sm">
                        Scan the QR code, complete your UPI payment, then upload the payment screenshot below.
                      </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-2xl p-5 text-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/upi-qr.jpg" alt="KhelSetu UPI payment QR code" className="w-full max-w-xs mx-auto rounded-xl border border-gray-100" />
                      <p className="text-[#1B3A6B] font-semibold text-sm mt-4">Scan to support KhelSetu directly</p>
                      <p className="text-gray-400 text-xs mt-1">After payment, add your details and screenshot for verification.</p>
                    </div>

                    <div className="bg-[#F0F6FF] border border-[#1B3A6B]/10 rounded-xl p-4 flex items-start gap-3">
                      <Shield size={16} className="text-[#1B3A6B] mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">
                        We are not using Razorpay right now. UPI donations are verified manually using your transaction ID and screenshot.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Your Name *</label>
                          <input required value={name} onChange={e => setName(e.target.value)} placeholder="Full name" className="input-field" />
                        </div>
                        <div>
                          <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Phone Number *</label>
                          <input required value={phone} onChange={e => setPhone(e.target.value)} placeholder="+91 XXXXX XXXXX" className="input-field" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Email Address</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" className="input-field" />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Amount Donated *</label>
                          <input required type="number" min="1" value={amount} onChange={e => setAmount(e.target.value)} placeholder="e.g. 500" className="input-field" />
                        </div>
                        <div>
                          <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">UPI Transaction ID *</label>
                          <input required value={transactionId} onChange={e => setTransactionId(e.target.value)} placeholder="UPI reference number" className="input-field" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Payment Screenshot *</label>
                        {preview ? (
                          <div className="relative rounded-xl overflow-hidden border border-gray-200">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={preview} alt="Payment proof preview" className="w-full h-52 object-cover" />
                            <button type="button" onClick={removeProof}
                              className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:bg-red-50 transition-colors">
                              <X size={15} className="text-gray-500" />
                            </button>
                            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
                              <ImageIcon size={13} className="text-[#1B3A6B]" />
                              <span className="text-gray-700 text-xs font-medium truncate max-w-[180px]">{proof?.name}</span>
                            </div>
                          </div>
                        ) : (
                          <motion.div whileHover={{ borderColor: 'rgba(27,58,107,0.4)' }}
                            onClick={() => fileRef.current?.click()}
                            className="border border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer transition-colors hover:bg-gray-50">
                            <Upload size={24} className="text-gray-300 mx-auto mb-3" />
                            <p className="text-gray-500 text-sm font-medium">Upload payment screenshot</p>
                            <p className="text-gray-300 text-xs mt-1">PNG or JPG — up to 10MB</p>
                          </motion.div>
                        )}
                        <input ref={fileRef} type="file" accept="image/png,image/jpeg,image/jpg" onChange={handleProof} className="hidden" />
                      </div>

                      <div>
                        <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Notes</label>
                        <textarea value={notes} onChange={e => setNotes(e.target.value)}
                          placeholder="Any message or context for the team..."
                          rows={3} className="input-field resize-none" />
                      </div>

                      {error && (
                        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                          className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                          <AlertCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                          <p className="text-red-600 text-sm leading-relaxed">{error}</p>
                        </motion.div>
                      )}

                      <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        disabled={loading} className="btn-primary w-full py-4 text-base justify-center gap-2 disabled:opacity-60">
                        {loading ? (
                          <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 rounded-full border-2 border-white/40 border-t-white" />Submitting proof…</>
                        ) : (
                          <><CheckCircle size={18} />Submit Donation Proof</>
                        )}
                      </motion.button>
                    </form>
                  </div>
                )}
              </div>

              {/* Right column */}
              <div className="space-y-6">
                <div className="glass-card p-7">
                  <h3 className="text-lg font-bold text-[#0F1F3D] mb-5">What Your Donation Covers</h3>
                  <div className="space-y-4">
                    {[
                      { amt: '₹100',   impact: 'Covers Porter pickup cost for one equipment set' },
                      { amt: '₹500',   impact: 'Funds cleaning and sorting supplies for a full drive' },
                      { amt: '₹1,000', impact: 'Sponsors transport to reach one underprivileged school' },
                      { amt: '₹5,000', impact: 'Fully funds a complete redistribution drive end-to-end' },
                    ].map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }} className="flex items-start gap-3">
                        <span className="text-[#1B3A6B] font-bold text-sm flex-shrink-0 w-16">{item.amt}</span>
                        <span className="text-gray-500 text-sm leading-relaxed">{item.impact}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-6 text-center">
                  <div className="text-4xl mb-3">🤝</div>
                  <h3 className="text-gray-800 font-bold mb-2">Entirely Volunteer-Run</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    100% of your contribution goes toward the mission. Every member of KhelSetu is a student volunteer — no salaries, no overheads.
                  </p>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-gray-800 font-semibold mb-3">Other Ways to Help</h3>
                  <div className="space-y-3">
                    {[
                      { emoji: '🎽', text: 'Donate sports equipment you no longer use', href: '/donate' },
                      { emoji: '📢', text: 'Spread the word in your school or community', href: '/contact' },
                      { emoji: '🏫', text: 'Partner your school or club with KhelSetu', href: '/contact' },
                    ].map((item, i) => (
                      <a key={i} href={item.href}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-[#F4F8FF] transition-colors group">
                        <span className="text-xl">{item.emoji}</span>
                        <span className="text-gray-600 text-sm group-hover:text-[#1B3A6B] transition-colors">{item.text}</span>
                        <ArrowRight size={13} className="text-gray-300 ml-auto group-hover:text-[#1B3A6B] transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FUND USAGE */}
        <section className="py-24 animated-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <SectionHeading eyebrow="Transparency" title="Where Your Money " highlight="Goes" centered
                description="We publish a full breakdown after every drive. Every team member is a volunteer." />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {fundUsage.map((item, i) => (
                <GlassCard key={i} delay={i * 0.1} className="text-center p-7">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} mx-auto mb-4 flex items-center justify-center shadow-md`}>
                    <item.icon size={22} className="text-white" />
                  </div>
                  <div className={`text-3xl font-black bg-gradient-to-r ${item.color} text-transparent bg-clip-text mb-1`}>{item.pct}%</div>
                  <h3 className="text-gray-800 font-bold text-sm mb-2">{item.label}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
