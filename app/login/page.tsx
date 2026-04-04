'use client';

import Link from 'next/link';
import { useState } from 'react';
import { GraduationCap, Users, Shield, User, Fingerprint, UserCheck, UserCog } from 'lucide-react';


export default function LoginPage() {
  const [role, setRole] = useState<'learner' | 'teacher' | 'parent' | 'admin' | 'guest'>('learner');
  const [loading, setLoading] = useState(false);
  const [biometricAuth, setBiometricAuth] = useState(false);

  const roles = [

    { id: 'learner', label: 'Learner', icon: <GraduationCap className="w-6 h-6" /> },
    { id: 'teacher', label: 'Teacher', icon: <UserCog className="w-6 h-6" /> },
    { id: 'parent', label: 'Parent', icon: <Users className="w-6 h-6" /> },
    { id: 'admin', label: 'Admin', icon: <Shield className="w-6 h-6" /> },
    { id: 'guest', label: 'Guest', icon: <User className="w-6 h-6" /> },

  ] as const;

  const dashMap = { 
    learner: '/dashboard/learner', 
    teacher: '/dashboard/teacher', 
    parent: '/dashboard/parent', 
    admin: '/dashboard/admin',
    guest: '/courses' 
  };

  function handleLogin(e?: React.FormEvent) {
    if (e) e.preventDefault();
    setLoading(true);
    setTimeout(() => { window.location.href = dashMap[role]; }, 1200);
  }

  function handleBiometric() {
    setBiometricAuth(true);
    setTimeout(() => {
      handleLogin();
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 relative overflow-hidden bg-radial from-orange-50/50 to-white">
      {/* Decorative blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-red-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md animate-fade-in z-10">
        {/* Logo */}
        <div className="flex flex-col items-center gap-4 mb-10 text-center">
          
          
            <img src="/sb_logo.png" alt="NIOS Logo" className="w-40 rounded-full from-primary-500 to-primary-700 p-1" />
              <div className="text-xs pt-2 text-center text-slate-500 tracking-tight">
        AI-Powered Learning Management System
      </div>
          
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)] relative overflow-hidden">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">Welcome Back</h2>
          <p className="text-slate-500 text-center mb-8 text-sm">Sign in to continue your learning journey</p>

          {/* Role switcher */}
          <div className="grid grid-cols-5 gap-2 mb-8 bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
            {roles.map((r) => (
              <button
                key={r.id}
                id={`role-${r.id}`}
                onClick={() => setRole(r.id)}
                className={`flex flex-col items-center gap-1.5 py-3 rounded-xl transition-all duration-300 ${
                  role === r.id 
                  ? 'bg-white text-brand-orange shadow-md border border-orange-100' 
                  : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                }`}
              >

  <div className="p-1 rounded-lg bg-slate-50">{r.icon}</div>

                <span className="text-[10px] font-bold uppercase tracking-tight">{r.label}</span>
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="login-id">
                {role === 'learner' ? 'Enrollment No. / Aadhaar' : role === 'teacher' ? 'Faculty ID / Email' : 'Admin ID / Email ' }
              </label>
              <input 
                id="login-id" 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-orange-500/10 transition-all outline-none" 
                placeholder="Enter your ID" 
                required 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="login-password">Password</label>
              <input 
                id="login-password" 
                type="password" 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-brand-orange focus:ring-4 focus:ring-orange-500/10 transition-all outline-none" 
                placeholder="Enter password" 
                required 
              />
            </div>

            <div className="flex items-center justify-between px-1">
              <label className="flex items-center gap-2 text-sm text-slate-500 cursor-pointer hover:text-slate-700 transition-colors">
                <input type="checkbox" id="login-remember" className="w-4 h-4 rounded-md border-slate-300 text-brand-orange focus:ring-brand-orange" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-sm font-semibold text-brand-orange hover:text-brand-red transition-colors">Forgot password?</a>
            </div>

            <button
              type="submit"
              id="login-submit"
              className={`w-full py-4.5 bg-brand-orange hover:bg-orange-700 text-white rounded-2xl font-bold text-lg shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all disabled:opacity-50 mt-4`}
              disabled={loading}
            >
              {loading ? '⏳ Signing in...' : 'Sign In →'}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-4 text-slate-400 font-bold tracking-widest">Or secure login with</span></div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <button id="login-aadhaar" className="flex items-center justify-center gap-3 py-4 border-2 border-slate-100 rounded-2xl text-slate-600 font-bold hover:bg-slate-50 hover:border-slate-200 transition-all">
              🇮🇳 Aadhaar SSO
            </button>
            <button id="login-biometric" onClick={handleBiometric} className="flex items-center justify-center gap-3 py-4 border-2 border-slate-100 rounded-2xl text-slate-600 font-bold hover:bg-slate-50 hover:border-slate-200 transition-all">
              <Fingerprint className="w-5 h-5" /> Biometric Login
            </button>
          </div>

          {biometricAuth && (
            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md flex flex-col items-center justify-center text-white z-50 animate-fade-in">
              <Fingerprint className="w-24 h-24 mx-auto mb-6 animate-pulse text-orange-400" />
              <div className="text-xl font-bold">Authenticating...</div>
              <p className="text-slate-400 text-sm mt-2">Verifying Fingerprint/Face ID</p>
            </div>
          )}
        </div>

        <p className="text-center mt-10 text-slate-500 text-sm">
          New learner?{' '}
          <a href="#" className="text-brand-orange font-bold hover:text-brand-red transition-colors">Register on NIOS Portal →</a>
        </p>
      </div>
    </div>
  );
}
