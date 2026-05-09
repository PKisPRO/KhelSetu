'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, LogOut, Package, Users, Clock, RefreshCw, Trash2, Eye, Shield, Phone, Mail, MapPin, ImageIcon } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Logo from '@/components/Logo';

const ADMIN_PASS = 'khelsetu2024';

interface Donation {
  id:              string;
  name:            string;
  phone:           string;
  email:           string;
  equipment_type:  string;
  sport:           string;
  condition:       string;
  description:     string;
  location:        string;
  donation_method: string;
  photo_url:       string | null;
  created_at:      string;
}

export default function AdminPage() {
  const [password, setPassword]   = useState('');
  const [loggedIn, setLoggedIn]   = useState(false);
  const [loginError, setLoginError] = useState('');

  const [donations, setDonations]   = useState<Donation[]>([]);
  const [loading, setLoading]       = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [selected, setSelected]     = useState<Donation | null>(null);

  const fetchDonations = useCallback(async () => {
    setLoading(true);
    setFetchError(null);
    try {
      const res = await fetch('/api/admin/donations');
      const json = await res.json();
      if (!res.ok) { setFetchError(json.error ?? 'Failed to load donations.'); return; }
      setDonations(json.data ?? []);
    } catch {
      setFetchError('Network error — could not reach the server.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { if (loggedIn) fetchDonations(); }, [loggedIn, fetchDonations]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASS) { setLoggedIn(true); setLoginError(''); }
    else setLoginError('Incorrect password.');
  };

  const deleteDonation = async (id: string) => {
    if (!confirm('Delete this submission?')) return;
    const res = await fetch('/api/admin/donations', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setDonations(prev => prev.filter(d => d.id !== id));
      if (selected?.id === id) setSelected(null);
    }
  };

  const stats = [
    { icon: Package, label: 'Total Submissions', value: donations.length,                                              color: 'from-[#1B3A6B] to-[#2F5FA8]' },
    { icon: Clock,   label: 'This Week',          value: donations.filter(d => {
        const week = new Date(); week.setDate(week.getDate() - 7);
        return new Date(d.created_at) > week;
      }).length,                                                                                                        color: 'from-[#2D9944] to-[#3DBB5A]' },
    { icon: Users,   label: 'Drop Off',            value: donations.filter(d => d.donation_method === 'school').length, color: 'from-amber-500 to-amber-400' },
    { icon: Package, label: 'Via Porter',           value: donations.filter(d => d.donation_method === 'porter').length, color: 'from-violet-500 to-violet-400' },
  ];

  return (
    <PageTransition>
      <div className="overflow-hidden min-h-screen bg-[#F4F8FF]">
        <AnimatePresence mode="wait">

          {/* LOGIN */}
          {!loggedIn ? (
            <motion.div key="login" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
              <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ duration: 0.4 }}
                className="glass-card p-10 w-full max-w-md">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-5"><Logo height={60} /></div>
                  <h1 className="text-2xl font-bold text-[#0F1F3D]">Admin Panel</h1>
                  <p className="text-gray-400 text-sm mt-1">KhelSetu Internal Dashboard</p>
                </div>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Admin Password</label>
                    <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
                      placeholder="Enter admin password" className="input-field" />
                  </div>
                  {loginError && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs">{loginError}</motion.p>
                  )}
                  <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full py-4 text-base justify-center gap-2">
                    <Lock size={16} /> Sign In
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>

          ) : (

            /* DASHBOARD */
            <motion.div key="dashboard" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <p className="text-[#2D9944] text-sm font-semibold uppercase tracking-[0.2em] mb-1">Admin Dashboard</p>
                    <h1 className="text-3xl font-black text-[#0F1F3D]">KhelSetu Control Panel</h1>
                  </div>
                  <div className="flex items-center gap-3">
                    <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                      onClick={fetchDonations} disabled={loading}
                      className="btn-secondary text-sm px-4 py-2.5 flex items-center gap-2 disabled:opacity-50">
                      <RefreshCw size={14} className={loading ? 'animate-spin' : ''} /> Refresh
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                      onClick={() => { setLoggedIn(false); setDonations([]); }}
                      className="btn-secondary text-sm px-5 py-2.5 flex items-center gap-2">
                      <LogOut size={14} /> Sign Out
                    </motion.button>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                  {stats.map((s, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                      className="glass-card p-5">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-3 shadow-md`}>
                        <s.icon size={18} className="text-white" />
                      </div>
                      <div className="text-3xl font-black text-[#0F1F3D] mb-1">{s.value}</div>
                      <div className="text-gray-400 text-xs">{s.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Error */}
                {fetchError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm flex items-start gap-2">
                    <Shield size={15} className="flex-shrink-0 mt-0.5" />
                    <span>{fetchError}</span>
                  </div>
                )}

                {/* Table + Detail */}
                <div className="grid lg:grid-cols-3 gap-6">

                  {/* Table */}
                  <div className="lg:col-span-2 glass-card overflow-hidden">
                    {loading ? (
                      <div className="py-24 text-center">
                        <RefreshCw size={28} className="animate-spin text-[#1B3A6B] mx-auto mb-3" />
                        <p className="text-gray-400 text-sm">Loading donations…</p>
                      </div>
                    ) : donations.length === 0 ? (
                      <div className="py-24 text-center">
                        <Package size={36} className="text-gray-200 mx-auto mb-3" />
                        <p className="text-gray-700 font-semibold mb-1">No donations yet</p>
                        <p className="text-gray-400 text-sm">Submissions from the donate form will appear here.</p>
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-100 bg-gray-50">
                              <th className="text-left px-4 py-3 text-gray-400 text-xs uppercase tracking-wide">Donor</th>
                              <th className="text-left px-4 py-3 text-gray-400 text-xs uppercase tracking-wide">Equipment</th>
                              <th className="text-left px-4 py-3 text-gray-400 text-xs uppercase tracking-wide">Method</th>
                              <th className="text-left px-4 py-3 text-gray-400 text-xs uppercase tracking-wide">Date</th>
                              <th className="text-right px-4 py-3 text-gray-400 text-xs uppercase tracking-wide">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {donations.map((d, i) => (
                              <motion.tr key={d.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }}
                                onClick={() => setSelected(d)}
                                className={`border-b border-gray-50 cursor-pointer transition-colors ${
                                  selected?.id === d.id ? 'bg-[#F0F6FF]' : 'hover:bg-gray-50'
                                }`}>
                                <td className="px-4 py-3">
                                  <p className="text-gray-800 font-medium">{d.name}</p>
                                  <p className="text-gray-400 text-xs">{d.phone}</p>
                                </td>
                                <td className="px-4 py-3">
                                  <p className="text-gray-700">{d.equipment_type}</p>
                                  <p className="text-gray-400 text-xs">{d.sport}</p>
                                </td>
                                <td className="px-4 py-3">
                                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                    d.donation_method === 'school'
                                      ? 'bg-[#F0F6FF] text-[#1B3A6B]'
                                      : 'bg-[#F0FDF4] text-[#2D9944]'
                                  }`}>
                                    {d.donation_method === 'school' ? 'Drop Off' : 'Porter'}
                                  </span>
                                </td>
                                <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">
                                  {new Date(d.created_at).toLocaleDateString('en-IN')}
                                </td>
                                <td className="px-4 py-3">
                                  <div className="flex justify-end gap-2">
                                    <button onClick={e => { e.stopPropagation(); setSelected(d); }}
                                      className="p-1.5 rounded-lg bg-[#F0F6FF] text-[#1B3A6B] hover:bg-[#1B3A6B]/15 transition-colors">
                                      <Eye size={13} />
                                    </button>
                                    <button onClick={e => { e.stopPropagation(); deleteDonation(d.id); }}
                                      className="p-1.5 rounded-lg bg-red-50 text-red-400 hover:bg-red-100 transition-colors">
                                      <Trash2 size={13} />
                                    </button>
                                  </div>
                                </td>
                              </motion.tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>

                  {/* Detail panel */}
                  <div className="glass-card p-6">
                    {selected ? (
                      <AnimatePresence mode="wait">
                        <motion.div key={selected.id} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
                          <div className="flex items-center justify-between mb-5">
                            <h3 className="text-gray-800 font-bold">Details</h3>
                            <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-600 text-xs">✕ Close</button>
                          </div>

                          {selected.photo_url && (
                            <div className="mb-4 rounded-xl overflow-hidden">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={selected.photo_url} alt="Equipment" className="w-full h-40 object-cover" />
                            </div>
                          )}

                          <div className="space-y-3">
                            <Row icon={<Users size={13} />}   label="Name"      value={selected.name} />
                            <Row icon={<Phone size={13} />}   label="Phone"     value={selected.phone} />
                            {selected.email     && <Row icon={<Mail size={13} />}    label="Email"     value={selected.email} />}
                            <Row icon={<Package size={13} />} label="Equipment" value={selected.equipment_type} />
                            {selected.sport     && <Row icon={<Package size={13} />} label="Sport"     value={selected.sport} />}
                            {selected.condition && <Row icon={<Package size={13} />} label="Condition" value={selected.condition} />}
                            {selected.location  && <Row icon={<MapPin size={13} />}  label="Location"  value={selected.location} />}
                            <Row icon={<Package size={13} />} label="Method"
                              value={selected.donation_method === 'school' ? 'Drop Off at School' : 'Send via Porter'} />
                            {selected.description && (
                              <div className="pt-2 border-t border-gray-100">
                                <p className="text-gray-400 text-xs mb-1">Notes</p>
                                <p className="text-gray-600 text-sm leading-relaxed">{selected.description}</p>
                              </div>
                            )}
                            {selected.photo_url && (
                              <a href={selected.photo_url} target="_blank" rel="noreferrer"
                                className="flex items-center gap-2 text-[#1B3A6B] text-xs hover:underline">
                                <ImageIcon size={12} /> View full photo
                              </a>
                            )}
                          </div>

                          <button onClick={() => deleteDonation(selected.id)}
                            className="mt-5 w-full py-2.5 rounded-xl text-sm font-medium text-red-500 bg-red-50 border border-red-100 hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
                            <Trash2 size={14} /> Delete Submission
                          </button>
                        </motion.div>
                      </AnimatePresence>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-center py-10">
                        <Eye size={28} className="text-gray-200 mb-3" />
                        <p className="text-gray-400 text-sm">Click any row to see full details</p>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="text-gray-400 mt-0.5 flex-shrink-0">{icon}</span>
      <div>
        <p className="text-gray-400 text-xs">{label}</p>
        <p className="text-gray-700 text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}
