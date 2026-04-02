'use client';

import DashboardLayout from '@/components/DashboardLayout';
import Link from 'next/link';

const stats = [
  { icon: '👥', label: 'Total Learners', value: '2,847', change: '+124 this month', up: true, color: 'var(--primary-600)' },
  { icon: '📚', label: 'Active Courses', value: '6', change: '3 pending review', up: true, color: 'var(--success)' },
  { icon: '📝', label: 'Pending TMAs', value: '38', change: '12 overdue', up: false, color: 'var(--accent-600)' },
  { icon: '⭐', label: 'Avg. Score', value: '74%', change: '+3% vs last term', up: true, color: 'var(--primary-500)' },
];

const learners = [
  { name: 'Priya Nair', roll: '10041', course: 'Science', progress: 88, risk: 'low' },
  { name: 'Rahul Das', roll: '10042', course: 'Maths', progress: 32, risk: 'high' },
  { name: 'Sonal Mehta', roll: '10043', course: 'English', progress: 67, risk: 'medium' },
  { name: 'Arjun Sharma', roll: '10023', course: 'Science', progress: 72, risk: 'low' },
  { name: 'Kavita Rao', roll: '10044', course: 'SST', progress: 21, risk: 'high' },
  { name: 'Mohit Singh', roll: '10045', course: 'Maths', progress: 55, risk: 'medium' },
];

const tmaQueue = [
  { student: 'Priya Nair', subject: 'Science', submitted: '1 Apr, 2026', status: 'pending' },
  { student: 'Rahul Das', subject: 'Maths', submitted: '31 Mar, 2026', status: 'pending' },
  { student: 'Sonal Mehta', subject: 'English', submitted: '30 Mar, 2026', status: 'graded' },
];

const quickActions = [
  { icon: '📋', label: 'Create Quiz', href: '/assessments/create', color: 'var(--primary-600)' },
  { icon: '📢', label: 'Announcement', href: '/discussion', color: 'var(--primary-500)' },
  { icon: '📊', label: 'Class Report', href: '/analytics', color: 'var(--success)' },
  { icon: '🎥', label: 'Start Live Class', href: '/live', color: 'var(--danger)' },
];

const riskColors: Record<string, string> = { low: 'badge-success', medium: 'badge-warning', high: 'badge-danger' };

export default function TeacherDashboard() {
  return (
    <DashboardLayout 
      title="Teacher Dashboard" 
      subtitle="Welcome, Dr. Mehta 👋 — Physics · NIOS Delhi Region"
    >
      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {quickActions.map((a) => (
          <Link href={a.href} key={a.label} className="group">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-orange/30 transition-all duration-300 text-center flex flex-col items-center">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {a.icon}
              </div>
              <div className="text-sm font-bold text-slate-800 tracking-tight">{a.label}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 stagger">
        {stats.map((s) => (
          <div key={s.label} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm animate-slide-up hover:shadow-md transition-all">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 bg-slate-50 text-brand-orange border border-orange-50`}>
              {s.icon}
            </div>
            <div>
              <div className="text-3xl font-black text-slate-900 tracking-tighter mb-1">{s.value}</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{s.label}</div>
            </div>
            <div className={`mt-4 flex items-center gap-1.5 text-xs font-bold ${s.up ? 'text-green-600' : 'text-red-500'}`}>
              {s.up ? '↗' : '↘'} {s.change}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Learner Table Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Learner Progress</h3>
            <div className="flex gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-none">
                <input 
                  className="w-full sm:w-64 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-brand-orange outline-none transition-all" 
                  id="teacher-search-learner" 
                  placeholder="Search learner..." 
                />
              </div>
              <button className="bg-slate-900 hover:bg-black text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95 shadow-sm">
                Export
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <th className="px-6 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Learner</th>
                    <th className="px-6 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Course</th>
                    <th className="px-6 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Progress</th>
                    <th className="px-6 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Risk</th>
                    <th className="px-6 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {learners.map((l) => (
                    <tr key={l.roll} className="hover:bg-slate-50/80 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-orange to-brand-red flex items-center justify-center text-xs font-bold text-white shadow-sm">
                            {l.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900">{l.name}</div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">ROLL: {l.roll}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="px-3 py-1 bg-orange-50 text-brand-orange rounded-full text-[10px] font-black uppercase tracking-widest">
                          {l.course}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden min-w-[60px]">
                            <div 
                              className={`h-full rounded-full transition-all duration-1000 ${
                                l.risk === 'high' ? 'bg-brand-red' : l.risk === 'medium' ? 'bg-brand-orange' : 'bg-green-500'
                              }`}
                              style={{ width: `${l.progress}%` }} 
                            />
                          </div>
                          <span className="text-xs font-black text-slate-900">{l.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-black tracking-widest uppercase ${
                          l.risk === 'high' ? 'bg-red-50 text-brand-red' : l.risk === 'medium' ? 'bg-amber-50 text-amber-600' : 'bg-green-50 text-green-600'
                        }`}>
                          {l.risk}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="text-xs font-bold text-slate-400 hover:text-brand-orange transition-colors">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Intelligence Sidebar */}
        <div className="space-y-8">
          
          {/* AI Insights Card */}
          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 rounded-full blur-3xl" />
            <h4 className="text-lg font-black mb-6 flex items-center gap-2">
              <span className="text-2xl">🤖</span> AI Insights
            </h4>
            <div className="space-y-4 relative z-10">
              {[
                '2 learners haven\'t logged in for 7+ days — send a nudge.',
                'Rahul Das & Kavita Rao are high dropout risk. Consider 1-on-1.',
                'Chapter 4 has low scores — add more resources.',
              ].map((tip, i) => (
                <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-2xl text-xs leading-relaxed font-medium text-slate-300 hover:bg-white/10 transition-colors">
                  <span className="text-brand-orange mr-2">💡</span> {tip}
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all transform active:scale-95">
              Review Predictions
            </button>
          </div>

          {/* TMA Queue */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm min-h-[300px]">
             <div className="flex items-center justify-between mb-8">
               <h4 className="text-lg font-black text-slate-900 tracking-tight">TMA Queue</h4>
               <span className="px-3 py-1 bg-red-50 text-brand-red rounded-full text-[10px] font-black uppercase tracking-widest">38 PENDING</span>
             </div>
             <div className="space-y-4">
               {tmaQueue.map((t, i) => (
                 <div key={i} className="p-4 bg-slate-50/50 hover:bg-slate-50 border border-transparent hover:border-slate-100 rounded-2xl transition-all group">
                   <div className="flex items-center justify-between mb-2">
                     <div className="font-bold text-slate-900 text-sm group-hover:text-brand-orange transition-colors">{t.student}</div>
                     <div className={`text-[10px] font-black uppercase tracking-tighter ${t.status === 'graded' ? 'text-green-600' : 'text-amber-500'}`}>
                       {t.status}
                     </div>
                   </div>
                   <div className="text-[11px] text-slate-500 font-medium">📚 {t.subject} · 📅 {t.submitted}</div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
