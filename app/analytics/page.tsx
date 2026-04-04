'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { 
  Clock, 
  Target, 
  Brain, 
  TrendingUp, 
  BarChart3, 
  Download,
  Zap,
  ArrowUpRight,
  PieChart,
  Activity,
  Award
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const analyticsStats = [
  { label: 'Avg. Engagement', value: '62.5h', change: '+12%', up: true, icon: Clock, color: 'from-blue-500 to-indigo-600' },
  { label: 'Syllabus Coverage', value: '74%', change: 'On Track', up: true, icon: Target, color: 'from-emerald-500 to-teal-600' },
  { label: 'Course Mastery', value: 'Lvl 4', change: 'Advanced', up: true, icon: Brain, color: 'from-purple-500 to-pink-600' },
  { label: 'Avg. Assessment', value: '82%', change: '+5%', up: true, icon: Award, color: 'from-orange-500 to-red-600' },
];

const performanceData = [
  { subject: 'Science', score: 88, progress: 92, status: 'Excellence' },
  { subject: 'Maths', score: 72, progress: 65, status: 'Needs Focus' },
  { subject: 'English', score: 94, progress: 98, status: 'Mastered' },
  { subject: 'Social', score: 65, progress: 40, status: 'Under-prepared' },
];

const weeklyActivity = [
  { day: 'Mon', hours: 4.5 },
  { day: 'Tue', hours: 6.2 },
  { day: 'Wed', hours: 3.8 },
  { day: 'Thu', hours: 5.5 },
  { day: 'Fri', hours: 4.0 },
  { day: 'Sat', hours: 7.2 },
  { day: 'Sun', hours: 2.5 },
];

export default function AnalyticsPage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <DashboardLayout 
      title="Intelligence & Analytics" 
      subtitle="Comprehensive insights into academic performance and growth trajectories"
    >
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {analyticsStats.map((s, i) => (
          <div key={i} className="p-6 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm group hover:shadow-xl transition-all">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center mb-4 shadow-lg opacity-80 group-hover:opacity-100 transition-opacity`}>
              <s.icon size={20} />
            </div>
            <div className="text-2xl font-black text-slate-900 tracking-tighter mb-1">{s.value}</div>
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</div>
            <div className="mt-4 flex items-center gap-1 text-[10px] font-black text-emerald-600 uppercase">
              <TrendingUp size={12} /> {s.change}
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_350px] gap-8">
        <div className="space-y-8">
          {/* Weekly Engagement Chart */}
          <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm overflow-hidden relative">
             <div className="flex items-center justify-between mb-8">
               <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Weekly Focus Hours</h3>
               <div className="flex gap-2">
                 <button className="px-4 py-2 bg-slate-50 text-[10px] font-black rounded-xl text-slate-500 uppercase tracking-widest">7 Days</button>
                 <button className="px-4 py-2 text-[10px] font-black rounded-xl text-slate-300 uppercase tracking-widest">30 Days</button>
               </div>
             </div>
             <div className="flex items-end justify-between h-64 gap-2 pt-8">
               {weeklyActivity.map((d, i) => (
                 <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                    <div className="relative w-full flex flex-col items-center">
                       <div className="absolute -top-8 px-2 py-1 bg-slate-900 text-white text-[10px] font-black rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                         {d.hours} hrs
                       </div>
                       <div 
                         className="w-full max-w-[40px] bg-gradient-to-t from-brand-orange to-orange-400 rounded-t-2xl group-hover:from-orange-400 group-hover:to-orange-300 transition-all duration-700 shadow-lg shadow-orange-500/10"
                         style={{ height: `${(d.hours / 8) * 100}%` }}
                       />
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{d.day}</span>
                 </div>
               ))}
             </div>
          </div>

          {/* Performance Table */}
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
             <div className="p-8 border-b border-slate-50">
               <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Subject Proficiency</h3>
             </div>
             <table className="w-full text-left">
               <thead>
                 <tr className="bg-slate-50/50">
                   <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Subject</th>
                   <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Score</th>
                   <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Progress</th>
                   <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Insight</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-50 text-sm">
                 {performanceData.map((p, i) => (
                   <tr key={i} className="hover:bg-slate-50/30 transition-colors group">
                     <td className="px-8 py-6 font-black text-slate-900">{p.subject}</td>
                     <td className="px-8 py-6 text-center">
                       <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full font-black text-xs border-4 ${
                         p.score >= 80 ? 'border-emerald-500 text-emerald-600 bg-emerald-50' : 'border-orange-500 text-orange-600 bg-orange-50'
                       }`}>
                         {p.score}%
                       </span>
                     </td>
                     <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                           <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden min-w-[100px]">
                              <div 
                                className="h-full bg-brand-orange rounded-full transition-all duration-1000"
                                style={{ width: `${p.progress}%` }}
                              />
                           </div>
                           <span className="text-[10px] font-black text-slate-900">{p.progress}%</span>
                        </div>
                     </td>
                     <td className="px-8 py-6 text-right">
                        <span className={`text-[10px] font-black uppercase tracking-widest ${
                          p.status === 'Excellence' || p.status === 'Mastered' ? 'text-emerald-500' : 'text-orange-500'
                        }`}>{p.status}</span>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
        </div>

        {/* Sidebar Insights */}
        <div className="space-y-8">
           <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-10 h-10 rounded-2xl bg-brand-orange/20 flex items-center justify-center text-brand-orange">
                   <Activity size={20} />
                 </div>
                 <h3 className="font-black uppercase tracking-tight">AI Predictions</h3>
              </div>
              <div className="space-y-6">
                 <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Success Probability</div>
                    <div className="flex items-center justify-center p-8 rounded-[2rem] bg-white/5 border border-white/10 relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent" />
                       <div className="text-6xl font-black text-white relative z-10">84%</div>
                    </div>
                 </div>
                 <p className="text-xs font-medium text-slate-400 leading-relaxed italic">
                   "Focusing on Social Science module 2 could boost your grade by 12%."
                 </p>
                 <button className="w-full py-4 bg-brand-orange hover:bg-orange-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-orange-500/20 active:scale-95">
                   Optimize Study Plan
                 </button>
              </div>
           </div>

           <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm overflow-hidden">
             <h3 className="font-black uppercase tracking-tight mb-8">Skills Mapping</h3>
             <div className="space-y-6">
                {[
                  { skill: 'Critical Thinking', lvl: 75, color: 'bg-blue-500' },
                  { skill: 'Digital Literacy', lvl: 92, color: 'bg-emerald-500' },
                  { skill: 'Problem Solving', lvl: 60, color: 'bg-orange-500' },
                  { skill: 'Communication', lvl: 45, color: 'bg-purple-500' },
                ].map((s, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                       <span className="text-slate-900">{s.skill}</span>
                       <span className="text-slate-400">{s.lvl}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                       <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.lvl}%` }} />
                    </div>
                  </div>
                ))}
             </div>
             <button className="w-full mt-10 py-4 bg-slate-50 border border-slate-100 text-slate-500 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-100 transition-all text-center">
                Career Roadmap
             </button>
           </div>

           <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm text-center">
              <Download className="mx-auto mb-4 text-slate-300" size={32} />
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-2">Holistic Progress Card</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 leading-relaxed">Download NEP 2020 Compliant 360° Report Card</p>
              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-black transition-all shadow-xl active:scale-95">
                Generate PDF
              </button>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

