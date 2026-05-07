'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, CheckCircle, XCircle, Eye, LogOut, Package, Users, BarChart3, Shield } from 'lucide-react';
import { equipmentData } from '@/data/equipment';
import PageTransition from '@/components/PageTransition';
import Logo from '@/components/Logo';

const ADMIN_PASS = 'khelsetu2024';

export default function AdminPage() {
  const [password, setPassword]   = useState('');
  const [loggedIn, setLoggedIn]   = useState(false);
  const [error, setError]         = useState('');
  const [activeTab, setActiveTab] = useState<'equipment' | 'overview'>('overview');
  const [items, setItems]         = useState(equipmentData.map(e => ({ ...e, approved: true })));

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASS) { setLoggedIn(true); setError(''); }
    else setError('Incorrect password. (Hint: use Supabase Auth in production)');
  };

  const toggleApproval = (id: string) => {
    setItems(prev => prev.map(e => e.id === id ? { ...e, approved: !e.approved } : e));
  };

  const stats = [
    { icon: Package,     label: 'Total Listings',  value: items.length,                                              color: 'from-[#1B3A6B] to-[#2F5FA8]' },
    { icon: CheckCircle, label: 'Approved',         value: items.filter(e => e.approved).length,                     color: 'from-[#2D9944] to-[#3DBB5A]' },
    { icon: XCircle,     label: 'Pending Review',   value: items.filter(e => !e.approved).length,                    color: 'from-amber-500 to-amber-400' },
    { icon: Users,       label: 'Available',        value: items.filter(e => e.availability === 'Available').length,  color: 'from-violet-500 to-violet-400' },
  ];

  return (
    <PageTransition>
      <div className="overflow-hidden min-h-screen bg-[#F4F8FF]">
        <AnimatePresence mode="wait">
          {!loggedIn ? (
            <motion.div key="login" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
              <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ duration: 0.4 }}
                className="glass-card p-10 w-full max-w-md">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-5">
                    <Logo height={60} />
                  </div>
                  <h1 className="text-2xl font-bold text-[#0F1F3D]">Admin Panel</h1>
                  <p className="text-gray-400 text-sm mt-1">KhelSetu Internal Dashboard</p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                  <Lock size={15} className="text-amber-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-500 text-xs leading-relaxed">
                    <span className="text-amber-600 font-medium">Dev note:</span> Replace with{' '}
                    <span className="text-[#1B3A6B] font-medium">Supabase Auth</span> or NextAuth for production security.
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Admin Password</label>
                    <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
                      placeholder="Enter admin password" className="input-field" />
                  </div>
                  {error && (
                    <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs">
                      {error}
                    </motion.p>
                  )}
                  <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full py-4 text-base justify-center">
                    <Lock size={16} /> Sign In
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div key="dashboard" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              className="py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <p className="text-[#2D9944] text-sm font-semibold uppercase tracking-[0.2em] mb-1">Admin Dashboard</p>
                    <h1 className="text-3xl font-black text-[#0F1F3D]">KhelSetu Control Panel</h1>
                  </div>
                  <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                    onClick={() => setLoggedIn(false)} className="btn-secondary text-sm px-5 py-2.5 flex items-center gap-2">
                    <LogOut size={14} /> Sign Out
                  </motion.button>
                </div>

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

                <div className="flex gap-2 mb-6">
                  {(['overview', 'equipment'] as const).map(tab => (
                    <button key={tab} onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                        activeTab === tab
                          ? 'bg-[#1B3A6B]/8 text-[#1B3A6B] border border-[#1B3A6B]/20'
                          : 'text-gray-500 hover:text-gray-800 bg-white border border-gray-200'
                      }`}>
                      {tab === 'equipment' ? 'Equipment Listings' : 'Overview'}
                    </button>
                  ))}
                </div>

                {activeTab === 'overview' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-2 gap-6">
                    <div className="glass-card p-6">
                      <div className="flex items-center gap-3 mb-5">
                        <BarChart3 size={20} className="text-[#1B3A6B]" />
                        <h3 className="text-gray-800 font-bold">Quick Actions</h3>
                      </div>
                      <div className="space-y-3">
                        {[
                          { label: 'Review Pending Equipment', dot: 'bg-amber-500' },
                          { label: 'Export Donor List (CSV)',   dot: 'bg-[#1B3A6B]' },
                          { label: 'Send Drive Announcement',  dot: 'bg-[#2D9944]' },
                          { label: 'Update Impact Stats',      dot: 'bg-violet-500' },
                        ].map((a, i) => (
                          <button key={i}
                            className="w-full text-left px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-gray-500 text-sm hover:text-gray-800 hover:bg-gray-100 transition-all flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${a.dot}`} />
                            {a.label}
                          </button>
                        ))}
                      </div>
                      <p className="text-gray-300 text-xs mt-4">📌 Connect to Supabase to enable real actions</p>
                    </div>

                    <div className="glass-card p-6">
                      <div className="flex items-center gap-3 mb-5">
                        <Eye size={20} className="text-[#2D9944]" />
                        <h3 className="text-gray-800 font-bold">Recent Activity</h3>
                      </div>
                      <div className="space-y-4">
                        {[
                          { action: 'New donation listed',  who: 'Rahul M.',  time: '2h ago', dot: 'bg-[#1B3A6B]' },
                          { action: 'Equipment approved',    who: 'Admin',     time: '3h ago', dot: 'bg-[#2D9944]' },
                          { action: 'Drive completed',       who: 'Team Lead', time: '1d ago', dot: 'bg-violet-500' },
                          { action: 'New donor registered', who: 'Sneha T.',  time: '2d ago', dot: 'bg-amber-500' },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full ${item.dot}`} />
                              <div>
                                <span className="text-gray-600">{item.action}</span>
                                <span className="text-gray-400 ml-1.5">by {item.who}</span>
                              </div>
                            </div>
                            <span className="text-gray-300 text-xs">{item.time}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-gray-300 text-xs mt-4">📌 Real-time feed via Supabase Realtime</p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'equipment' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="glass-card overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-100 bg-gray-50">
                              <th className="text-left px-5 py-4 text-gray-400 text-xs uppercase tracking-wide">Item</th>
                              <th className="text-left px-5 py-4 text-gray-400 text-xs uppercase tracking-wide">Sport</th>
                              <th className="text-left px-5 py-4 text-gray-400 text-xs uppercase tracking-wide">Condition</th>
                              <th className="text-left px-5 py-4 text-gray-400 text-xs uppercase tracking-wide">Location</th>
                              <th className="text-left px-5 py-4 text-gray-400 text-xs uppercase tracking-wide">Status</th>
                              <th className="text-right px-5 py-4 text-gray-400 text-xs uppercase tracking-wide">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {items.map((item, i) => (
                              <motion.tr key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }}
                                className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                <td className="px-5 py-4 text-gray-700 font-medium max-w-[200px] truncate">{item.name}</td>
                                <td className="px-5 py-4 text-gray-500">{item.sport}</td>
                                <td className="px-5 py-4 text-gray-500">{item.condition}</td>
                                <td className="px-5 py-4 text-gray-400 text-xs max-w-[140px] truncate">{item.location}</td>
                                <td className="px-5 py-4">
                                  <span className={`badge ${item.approved ? 'badge-available' : 'badge-reserved'}`}>
                                    {item.approved ? 'Approved' : 'Pending'}
                                  </span>
                                </td>
                                <td className="px-5 py-4">
                                  <div className="flex justify-end">
                                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                      onClick={() => toggleApproval(item.id)}
                                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                                        item.approved
                                          ? 'bg-red-50 text-red-500 border-red-100 hover:bg-red-100'
                                          : 'bg-[#F0FDF4] text-[#2D9944] border-[#2D9944]/20 hover:bg-[#DCFCE7]'
                                      }`}>
                                      {item.approved ? 'Revoke' : 'Approve'}
                                    </motion.button>
                                  </div>
                                </td>
                              </motion.tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="mt-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                      <p className="text-gray-400 text-xs text-center flex items-center justify-center gap-1.5">
                        <Shield size={11} className="text-[#1B3A6B]" />
                        Connect to Supabase to persist approval state. Use RLS for role-based access control.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
