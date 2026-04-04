'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Lock, 
  ArrowRight, 
  Zap, 
  Fingerprint, 
  ShieldCheck, 
  ArrowLeft, 
  Globe, 
  Users, 
  UserCircle,
  Briefcase,
  User,
  Sparkles,
  Smartphone,
  ScanFace
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { MOCK_USERS, MockUser } from '@/lib/mock-data';

type Role = 'learner' | 'teacher' | 'parent' | 'admin' | 'guest';

const roleConfig: Record<Role, { label: string; icon: any; email: string; id: string; redirect: string }> = {
  learner: { label: 'LEARNER', icon: GraduationCapIcon, email: 'student@nios.edu.in', id: 'L10023', redirect: '/dashboard/learner' },
  teacher: { label: 'TEACHER', icon: TeacherIcon, email: 'teacher@nios.edu.in', id: 'T5001', redirect: '/dashboard/teacher' },
  admin: { label: 'NIOS OFFICIAL', icon: OfficialIcon, email: 'principal@nios.edu.in', id: 'A9001', redirect: '/dashboard/admin' },
  parent: { label: 'PARENT', icon: ParentIcon, email: 'parent@nios.edu.in', id: 'P7001', redirect: '/dashboard/parent' },
  guest: { label: 'GUEST', icon: GuestIcon, email: 'guest@portal.com', id: 'G1001', redirect: '/dashboard/guest' },
};

export default function LoginPage() {
  const [activeRole, setActiveRole] = useState<Role>('learner');
  const [loading, setLoading] = useState(false);
  const [showBiometric, setShowBiometric] = useState(false);
  const [error, setError] = useState('');

  const { login } = useAuth();
  const router = useRouter();

  const handleRoleSelect = (role: Role) => {
    setActiveRole(role);
    setError('');
  };

  const handleSignIn = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError('');

    const loginId = roleConfig[activeRole].id;
    
    setTimeout(() => {
      const success = login(loginId);
      if (success) {
        router.push(roleConfig[activeRole].redirect);
      } else {
        setError('Authentication failed. System integrity check required.');
        setLoading(false);
      }
    }, 1500);
  };

  const handleBiometric = () => {
    setShowBiometric(true);
    setTimeout(() => {
      handleSignIn();
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans relative overflow-hidden flex items-center justify-center">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[80%] h-[80%] bg-brand-orange/5 rounded-full blur-[120px]"
        />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/5 via-transparent to-transparent opacity-50" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side - Brand & Value Prop */}
        <div className="hidden lg:flex flex-col justify-center space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="flex items-center gap-6"
          >
            <Image
              src="/sb_logo.png"
              alt="NIOS Logo"
              width={160}
              height={100}
              className="brightness-110 drop-shadow-2xl"
            />
            <div className="h-10 w-px bg-slate-200" />
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">
              National Institute of <br /> Open Schooling
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full"
            >
              <Zap className="w-4 h-4 text-brand-orange" />
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">AI-Powered Educational Node</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl font-black tracking-tight leading-[0.95] text-slate-900"
            >
              Excellence <br /> <span className="text-brand-orange underline decoration-[12px] decoration-orange-500/20 underline-offset-8">Normalized</span>.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg font-medium text-slate-500 leading-relaxed max-w-md"
            >
              Welcome to the future of Indian education. A secure, decentralized portal for secondary and vocational learning.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-12"
          >
            {[
              { label: 'Active Learners', val: '2.4M+' },
              { label: 'Certificates Sync', val: '100%' },
              { label: 'AI Readiness', val: 'Level 4' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-xl font-black text-slate-900 tracking-tighter">{stat.val}</div>
                <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side - Login Hub */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-xl mx-auto bg-white border border-slate-100 rounded-[4rem] p-12 lg:p-16 shadow-2xl relative overflow-hidden"
          >
            {/* Loading Overlay */}
            <AnimatePresence>
              {(loading || showBiometric) && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/95 z-50 flex flex-col items-center justify-center p-12 text-center"
                >
                  <div className="relative mb-10">
                    {showBiometric ? (
                      <div className="relative">
                         <div className="w-32 h-32 rounded-full border-4 border-brand-orange animate-ping opacity-20 absolute inset-0" />
                         <Fingerprint className="w-24 h-24 text-brand-orange animate-pulse relative z-10" />
                         <motion.div 
                           initial={{ top: '0%' }} 
                           animate={{ top: '100%' }} 
                           transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                           className="absolute left-0 right-0 h-1 bg-brand-orange shadow-[0_0_15px_rgba(249,115,22,0.8)] z-20 pointer-events-none" 
                         />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-4">
                         <div className="w-20 h-20 border-4 border-slate-100 border-t-brand-orange rounded-full animate-spin shadow-xl" />
                         <ShieldCheck className="w-8 h-8 text-brand-orange absolute top-6" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl font-black mb-2 text-slate-900 uppercase tracking-tight">
                    {showBiometric ? 'Verifying Identity' : 'Authenticating Node'}
                  </h3>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest max-w-[200px] mx-auto">
                    {showBiometric ? 'Scanning Global Biometric Registry...' : 'Securing your decentralized learning environment...'}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <header className="mb-12">
              <div className="flex items-center justify-between mb-4">
                 <h2 className="text-3xl font-black tracking-tight text-slate-900">Sign In</h2>
                 <Link href="/" className="text-[10px] font-black text-brand-orange uppercase tracking-widest hover:underline underline-offset-4 decoration-2">Help Portal</Link>
              </div>
              <p className="text-sm font-medium text-slate-500">Access your adaptive academic dashboard.</p>
            </header>

            {/* Role Selection Tabs */}
            <div className="grid grid-cols-5 gap-2 mb-12 p-2 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              {(Object.keys(roleConfig) as Role[]).map((role) => {
                const Icon = roleConfig[role].icon;
                return (
                  <button
                    key={role}
                    onClick={() => handleRoleSelect(role)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-[2rem] transition-all relative ${
                      activeRole === role
                        ? 'bg-white text-brand-orange shadow-xl font-black'
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="text-[8px] font-black uppercase tracking-widest hidden lg:block">{roleConfig[role].label.split(' ')[0]}</span>
                    {activeRole === role && (
                      <motion.div layoutId="tab-underline" className="absolute -bottom-1 w-2 h-2 bg-brand-orange rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            <form onSubmit={handleSignIn} className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Secure Identity ID</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-slate-300 group-focus-within:text-brand-orange transition-colors">
                    <User size={20} />
                  </div>
                  <input
                    type="text"
                    value={roleConfig[activeRole].id}
                    readOnly
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-brand-orange/20 focus:bg-white text-slate-900 rounded-[2rem] py-6 pl-16 pr-6 outline-none transition-all font-black tracking-tight text-lg"
                  />
                </div>
              </div>

              <div className="space-y-3">
                 <div className="flex justify-between items-center px-1">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Security Key</label>
                   <button type="button" className="text-[10px] font-black uppercase tracking-widest text-brand-orange hover:text-orange-400">Forgot?</button>
                 </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-slate-300 group-focus-within:text-brand-orange transition-colors">
                    <Lock size={20} />
                  </div>
                  <input
                    type="password"
                    defaultValue="••••••••••••"
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-brand-orange/20 focus:bg-white text-slate-900 rounded-[2rem] py-6 pl-16 pr-6 outline-none transition-all font-medium"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-[2] py-6 bg-slate-900 hover:bg-black text-white rounded-[2rem] font-black text-[12px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-2xl transition-all active:scale-[0.98]"
                >
                  Authorize Node <ArrowRight size={18} />
                </button>
                <button
                  type="button"
                  onClick={handleBiometric}
                  className="flex-1 py-6 bg-white border border-slate-100 hover:border-brand-orange/20 text-slate-400 hover:text-brand-orange rounded-[2rem] flex items-center justify-center transition-all shadow-sm active:scale-[0.98]"
                >
                  <Fingerprint size={28} />
                </button>
              </div>

              <div className="text-center pt-4">
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                  Not Registered? <Link href="/portal" className="text-brand-orange hover:text-orange-400 ml-1">Start Onboarding →</Link>
                </p>
              </div>
            </form>
          </motion.div>

          {/* Decorative Accents */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-orange/10 rounded-full blur-3xl opacity-50 -z-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl opacity-50 -z-10" />
        </div>
      </div>
    </div>
  );
}

// Custom Role Icons
function GraduationCapIcon({ size }: { size: number }) { return <UserCircle size={size} />; }
function TeacherIcon({ size }: { size: number }) { return <Briefcase size={size} />; }
function OfficialIcon({ size }: { size: number }) { return <ShieldCheck size={size} />; }
function ParentIcon({ size }: { size: number }) { return <Users size={size} />; }
function GuestIcon({ size }: { size: number }) { return <Sparkles size={size} />; }
