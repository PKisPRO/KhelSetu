'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, CheckCircle, ArrowRight, School, Truck, ChevronDown, AlertCircle } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SectionHeading from '@/components/SectionHeading';
import { submitDonation } from '@/lib/donations';

const sports         = ['Cricket','Football','Badminton','Basketball','Tennis','Table Tennis','Volleyball','Hockey','Athletics','Swimming','Boxing','Kabaddi','Other'];
const conditions     = ['New','Like New','Good','Fair'];
const equipmentTypes = ['Bat / Racket / Stick','Ball','Protective Gear','Shoes / Spikes','Clothing / Jersey','Goals / Nets','Other Equipment'];

type Method = 'school' | 'porter' | '';

interface FormState {
  name:          string;
  email:         string;
  phone:         string;
  equipmentType: string;
  sport:         string;
  condition:     string;
  location:      string;
  method:        Method;
  notes:         string;
}

const initial: FormState = {
  name: '', email: '', phone: '',
  equipmentType: '', sport: '', condition: '',
  location: '', method: '', notes: '',
};

export default function DonatePage() {
  const [form, setForm]      = useState<FormState>(initial);
  const [submitted, setSubmit] = useState(false);
  const [loading, setLoading]  = useState(false);
  const [error, setError]      = useState<string | null>(null);

  const set = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Client-side required-field guard
    if (!form.name.trim() || !form.phone.trim() || !form.equipmentType || !form.method) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    const { error: submitError } = await submitDonation({
      name:            form.name.trim(),
      phone:           form.phone.trim(),
      email:           form.email.trim(),
      equipment_type:  form.equipmentType,
      sport:           form.sport,
      condition:       form.condition,
      description:     form.notes.trim(),
      location:        form.location.trim(),
      donation_method: form.method,
    });

    setLoading(false);

    if (submitError) {
      setError('Something went wrong. Please try again or email us at khelsetu177@gmail.com.');
      return;
    }

    setSubmit(true);
  };

  return (
    <PageTransition>
      <div className="overflow-hidden">

        {/* HERO */}
        <section className="relative py-24 animated-gradient grid-pattern overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full glow-pulse"
                 style={{ background: 'rgba(27,58,107,0.07)', filter: 'blur(120px)' }} />
            <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] rounded-full glow-pulse"
                 style={{ background: 'rgba(45,153,68,0.06)', filter: 'blur(100px)', animationDelay: '1.5s' }} />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="text-[#2D9944] text-sm font-semibold uppercase tracking-[0.2em] mb-4">Donate Equipment</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title text-[#0F1F3D] mb-4 max-w-3xl">
              Donate Your <span className="gradient-text">Equipment</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-500 text-lg max-w-2xl">
              Fill out the form below and we&apos;ll coordinate pickup or collection. Takes under 3 minutes.
            </motion.p>
          </div>
        </section>

        {/* FORM */}
        <section className="py-16 relative bg-white">
          <div className="absolute inset-0 grid-pattern opacity-25" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
            <AnimatePresence mode="wait">

              {/* ── SUCCESS ── */}
              {submitted ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="glass-card p-12 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1B3A6B] to-[#2D9944] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={36} className="text-white" />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-[#0F1F3D] mb-3">Thank You!</h2>
                  <p className="text-gray-500 mb-6">
                    Thank you, {form.name || 'donor'}! We will contact you soon to coordinate your donation.
                  </p>
                  <button onClick={() => { setForm(initial); setSubmit(false); }} className="btn-primary text-sm px-8 py-3">
                    Submit Another
                  </button>
                </motion.div>

              ) : (

                /* ── FORM ── */
                <motion.form key="form" onSubmit={handleSubmit} className="glass-card p-8 sm:p-10 space-y-6">

                  {/* Section — Your Details */}
                  <div>
                    <h2 className="text-2xl font-bold text-[#0F1F3D] mb-1">Your Details</h2>
                    <p className="text-gray-400 text-sm">We&apos;ll use this to coordinate the donation.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Full Name *</label>
                      <input required value={form.name} onChange={set('name')} placeholder="Your full name" className="input-field" />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Phone Number *</label>
                      <input required value={form.phone} onChange={set('phone')} placeholder="+91 XXXXX XXXXX" className="input-field" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Email Address</label>
                    <input type="email" value={form.email} onChange={set('email')} placeholder="your@email.com" className="input-field" />
                  </div>

                  <div className="gradient-divider" />

                  {/* Section — Equipment Details */}
                  <div>
                    <h3 className="text-lg font-bold text-[#0F1F3D] mb-1">Equipment Details</h3>
                    <p className="text-gray-400 text-sm">Tell us about what you&apos;re donating.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Equipment Type *</label>
                      <select required value={form.equipmentType} onChange={set('equipmentType')} className="select-field">
                        <option value="">Select type…</option>
                        {equipmentTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <ChevronDown size={14} className="absolute right-4 top-[calc(50%+8px)] text-gray-400 pointer-events-none" />
                    </div>
                    <div className="relative">
                      <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Sport</label>
                      <select value={form.sport} onChange={set('sport')} className="select-field">
                        <option value="">Select sport…</option>
                        {sports.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <ChevronDown size={14} className="absolute right-4 top-[calc(50%+8px)] text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Condition</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {conditions.map(c => (
                        <motion.label key={c} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                          className={`flex items-center justify-center py-3 rounded-xl border cursor-pointer text-sm font-medium transition-all ${
                            form.condition === c
                              ? 'border-[#1B3A6B]/50 bg-[#1B3A6B]/8 text-[#1B3A6B]'
                              : 'border-gray-200 bg-gray-50 text-gray-500 hover:border-[#1B3A6B]/25'
                          }`}>
                          <input type="radio" name="condition" value={c} checked={form.condition === c}
                            onChange={set('condition')} className="sr-only" />
                          {c}
                        </motion.label>
                      ))}
                    </div>
                  </div>

                  {/* Photo upload placeholder */}
                  <div>
                    <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Photos (optional)</label>
                    <div className="border border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50">
                      <Upload size={24} className="text-gray-300 mx-auto mb-3" />
                      <p className="text-gray-400 text-sm">Photo upload coming soon</p>
                      <p className="text-gray-300 text-xs mt-1">PNG, JPG — up to 10MB each</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Location / City *</label>
                    <input required value={form.location} onChange={set('location')} placeholder="e.g. Jaipur, Rajasthan" className="input-field" />
                  </div>

                  <div className="gradient-divider" />

                  {/* Section — Donation Method */}
                  <div>
                    <h3 className="text-lg font-bold text-[#0F1F3D] mb-1">How Will You Donate? *</h3>
                    <p className="text-gray-400 text-sm mb-4">Choose what works best for you.</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { val: 'school' as Method, icon: School, title: 'Drop Off at School',  desc: 'Bring your equipment to a designated KhelSetu collection point at your school or a nearby drop-off location.' },
                        { val: 'porter' as Method, icon: Truck,  title: 'Send via Porter',     desc: 'We\'ll share a Porter pickup address. You book the pickup at your convenience.' },
                      ].map(opt => (
                        <motion.label key={opt.val} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                          className={`flex gap-4 p-5 rounded-xl border cursor-pointer transition-all ${
                            form.method === opt.val
                              ? 'border-[#1B3A6B]/50 bg-[#1B3A6B]/6'
                              : 'border-gray-200 bg-white hover:border-[#1B3A6B]/25'
                          }`}>
                          <input type="radio" name="method" value={opt.val} checked={form.method === opt.val}
                            onChange={set('method')} className="sr-only" />
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            form.method === opt.val ? 'bg-[#1B3A6B]/12' : 'bg-gray-100'
                          }`}>
                            <opt.icon size={18} className={form.method === opt.val ? 'text-[#1B3A6B]' : 'text-gray-400'} />
                          </div>
                          <div>
                            <p className="text-gray-800 font-semibold text-sm mb-0.5">{opt.title}</p>
                            <p className="text-gray-400 text-xs leading-relaxed">{opt.desc}</p>
                          </div>
                        </motion.label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Additional Notes</label>
                    <textarea value={form.notes} onChange={set('notes')}
                      placeholder="Any special instructions, quantity, or notes about the equipment…"
                      rows={3} className="input-field resize-none" />
                  </div>

                  {/* Error message */}
                  {error && (
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <AlertCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-600 text-sm leading-relaxed">{error}</p>
                    </motion.div>
                  )}

                  <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    className="btn-primary w-full py-4 text-base justify-center gap-2 disabled:opacity-70">
                    {loading ? (
                      <>
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 rounded-full border-2 border-white/40 border-t-white" />
                        Submitting…
                      </>
                    ) : (
                      <>Submit Donation <ArrowRight size={18} /></>
                    )}
                  </motion.button>

                  <p className="text-gray-300 text-xs text-center">
                    Your data is only used to coordinate the donation. We never share personal info.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* NEXT STEPS */}
        <section className="py-20 animated-gradient">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <SectionHeading eyebrow="What Happens Next" title="The " highlight="Next Steps" centered />
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { step: '01', title: 'We reach out', desc: 'Our team contacts you within 24–48 hours to confirm details and coordinate pickup or drop-off.' },
                { step: '02', title: 'We collect',   desc: 'Equipment is collected from your chosen location — school drop-off or Porter pickup.' },
                { step: '03', title: 'We deliver',   desc: 'After cleaning and sorting, your gear reaches a child who truly needs it.' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="text-3xl font-black text-gray-200 mb-3">{item.step}</div>
                  <h3 className="text-gray-800 font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
