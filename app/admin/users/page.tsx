'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { 
  Users, 
  Search, 
  Filter, 
  Shield, 
  UserCheck, 
  UserPlus, 
  MoreVertical, 
  Mail, 
  Lock, 
  Trash2, 
  Edit2, 
  BarChart3,
  ChevronRight,
  UserX
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const users = [
  { id: 'U001', name: 'Dr. Vikram Mehta', email: 'vikram@nios.edu.in', role: 'Teacher', status: 'Active', joins: '2025-09-12' },
  { id: 'U002', name: 'Arjun Sharma', email: 'arjun@gmail.com', role: 'Learner', status: 'Active', joins: '2026-01-05' },
  { id: 'U003', name: 'Priya Nair', email: 'priya@outlook.com', role: 'Learner', status: 'Active', joins: '2026-01-10' },
  { id: 'U004', name: 'Amit Kumar', email: 'amit@admin.nios.in', role: 'Admin', status: 'Active', joins: '2024-05-20' },
  { id: 'U005', name: 'Sonal Mehta', email: 'sonal@parent.com', role: 'Parent', status: 'Revoked', joins: '2026-01-15' },
];

export default function AdminUsersPage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <DashboardLayout 
      title="User Administration" 
      subtitle="Manage platform roles, permissions, and security audit logs"
    >
      <div className="space-y-10 animate-fade-in">
        {/* System Health */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { label: 'Total Users', value: '4.2k', icon: Users, color: 'text-blue-500 bg-blue-50' },
             { label: 'Active Sessions', value: '840', icon: UserCheck, color: 'text-emerald-500 bg-emerald-50' },
             { label: 'Admissions', value: '+124', icon: UserPlus, color: 'text-brand-orange bg-orange-50' },
             { label: 'Revoked Access', value: '12', icon: UserX, color: 'text-red-500 bg-red-50' },
           ].map((s, i) => (
             <div key={i} className="p-6 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm transition-all group">
               <div className={`w-12 h-12 rounded-2xl ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                 <s.icon size={20} />
               </div>
               <div className="text-2xl font-black text-slate-900 tracking-tighter mb-1">{s.value}</div>
               <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</div>
             </div>
           ))}
        </div>

        {/* User Management Toolbar */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
           <div className="relative w-full max-w-xl">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input 
                 placeholder="Search by name, email, role or system ID..."
                 className="w-full pl-12 pr-4 py-5 bg-white rounded-[2rem] border border-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all font-medium text-slate-600 placeholder:text-slate-400"
              />
           </div>
           <div className="flex gap-3">
              <button className="px-6 py-5 bg-white border border-slate-100 rounded-[2rem] shadow-sm text-slate-400 font-black text-[10px] uppercase tracking-widest hover:text-slate-900 transition-colors flex items-center gap-2">
                 <Filter size={16} /> Filter Roles
              </button>
              <button className="px-10 py-5 bg-slate-900 text-white rounded-[2rem] font-black text-[10px] uppercase tracking-widest hover:bg-black transition-all shadow-xl flex items-center gap-2">
                 <UserPlus size={18} /> Provision User
              </button>
           </div>
        </div>

        {/* User List */}
        <div className="grid gap-4">
           {users.map((u) => (
             <div key={u.id} className="group p-6 rounded-[3rem] bg-white border border-slate-100 hover:border-brand-orange/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex flex-col lg:flex-row items-center gap-10">
                <div className="flex items-center gap-6 flex-1 min-w-0">
                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-xl font-black text-slate-400 uppercase tracking-tighter shrink-0">
                      {u.name.charAt(0)}
                   </div>
                   <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-black text-slate-900 mb-1 group-hover:text-brand-orange transition-colors truncate">{u.name}</h4>
                      <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest truncate">
                         <Mail size={12} /> {u.email}
                      </div>
                   </div>
                </div>

                <div className="flex items-center gap-16 px-16 border-x border-slate-50 hidden lg:flex">
                   <div className="text-center min-w-[100px]">
                      <div className="text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest">System Role</div>
                      <div className="flex items-center justify-center gap-2">
                         <Shield size={12} className="text-brand-orange" />
                         <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{u.role}</span>
                      </div>
                   </div>
                   <div className="text-center">
                      <div className="text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest">Join Date</div>
                      <div className="text-xs font-black text-slate-900">{u.joins}</div>
                   </div>
                   <div className="text-center min-w-[80px]">
                      <div className="text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest">Status</div>
                      <div className={`text-[10px] font-black uppercase tracking-widest ${
                        u.status === 'Active' ? 'text-emerald-500' : 'text-red-500 underline'
                      }`}>{u.status}</div>
                   </div>
                </div>

                <div className="flex items-center gap-3">
                   <button className="p-4 bg-slate-50 text-slate-400 hover:text-brand-orange hover:bg-orange-50 rounded-2xl transition-all">
                      <Edit2 size={16} />
                   </button>
                   <button className="p-4 bg-slate-50 text-slate-400 hover:text-brand-orange hover:bg-orange-50 rounded-2xl transition-all">
                      <Lock size={16} />
                   </button>
                   <button className="p-4 bg-slate-50 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all">
                      <Trash2 size={16} />
                   </button>
                   <div className="h-10 w-px bg-slate-50 hidden md:block" />
                   <button className="px-6 py-4 bg-slate-50 text-slate-900 font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-slate-100 transition-all flex items-center gap-2">
                      Logs <ChevronRight size={14} />
                   </button>
                </div>
             </div>
           ))}
        </div>

        {/* System Logs Preview Section */}
        <div className="p-10 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl group-hover:scale-150 transition-all duration-1000" />
           <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="w-16 h-16 rounded-2xl bg-brand-orange flex items-center justify-center shrink-0 shadow-xl shadow-orange-500/20">
                 <BarChart3 size={24} className="text-white" />
              </div>
              <div className="flex-1 text-center lg:text-left">
                 <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">Access Audit Preview</h3>
                 <p className="text-sm font-medium text-slate-400 leading-relaxed max-w-2xl">
                    Detailed system logs showing role escalations, access duration, and critical modifications. Ensure all platform activities are compliant with NIOS cybersecurity standards.
                 </p>
              </div>
              <button className="px-10 py-5 bg-white/10 hover:bg-brand-orange text-white rounded-[2rem] font-black text-[10px] uppercase tracking-widest transition-all shadow-xl">
                 Download Audit Log
              </button>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
