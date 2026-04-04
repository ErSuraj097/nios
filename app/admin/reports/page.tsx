'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { 
  BarChart3, 
  Download, 
  Search, 
  Filter, 
  Calendar, 
  FileText, 
  PieChart, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  BookOpen, 
  Activity,
  MoreVertical,
  ChevronRight,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const reports = [
  { id: 'R001', title: 'Monthly Enrollment Report', category: 'Admissions', date: '2026-03-31', size: '2.4 MB', format: 'PDF' },
  { id: 'R002', title: 'Course Completion Analytics', category: 'Academic', date: '2026-03-28', size: '5.8 MB', format: 'XLSX' },
  { id: 'R003', title: 'Platform Security Audit Log', category: 'Security', date: '2026-03-25', size: '12.1 MB', format: 'CSV' },
  { id: 'R004', title: 'Teacher Engagement Metrics', category: 'Faculty', date: '2026-03-20', size: '1.2 MB', format: 'PDF' },
];

export default function AdminReportsPage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <DashboardLayout 
      title="System Intelligence & Reports" 
      subtitle="Comprehensive platform analytics, audit exports, and regulatory compliance logs"
    >
      <div className="space-y-10 animate-fade-in pb-20">
        
        {/* Analytics Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 p-12 rounded-[4rem] bg-white border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl group-hover:scale-150 transition-all duration-1000" />
              <div className="flex flex-col md:flex-row items-center gap-10">
                 <div className="w-20 h-20 rounded-[2.5rem] bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 shadow-sm">
                    <TrendingUp size={32} />
                 </div>
                 <div className="text-center md:text-left">
                    <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Growth Trajectory</h3>
                    <p className="text-slate-500 font-medium leading-relaxed max-w-md">
                       Platform adoption has seen a <span className="text-emerald-500 font-bold">18.5% YoY increase</span>. Regional clusters in North India are showing peak engagement.
                    </p>
                 </div>
                 <div className="flex-1" />
                 <button className="px-8 py-5 bg-slate-900 text-white rounded-[2rem] font-black text-[10px] uppercase tracking-widest hover:bg-black transition-all shadow-xl">
                    Full Analytics Hub
                 </button>
              </div>
           </div>

           <div className="p-10 rounded-[4rem] bg-slate-900 text-white flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-1000" />
              <div className="flex items-center justify-between mb-8">
                 <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-orange shadow-inner">
                    <ShieldCheck size={20} />
                 </div>
                 <div className="text-[10px] font-black text-brand-orange uppercase tracking-widest px-3 py-1 bg-brand-orange/10 rounded-full">Compliance Active</div>
              </div>
              <div className="space-y-4">
                 <div className="text-sm font-black text-white uppercase tracking-widest">Regulatory Export</div>
                 <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest leading-relaxed">Automated platform auditing for Ministry of Education standards.</p>
              </div>
           </div>
        </div>

        {/* Reports List */}
        <div className="space-y-8">
           <div className="flex flex-col md:flex-row gap-6 items-center justify-between px-4">
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Exportable Datasets</h3>
              <div className="flex gap-3">
                 <div className="relative">
                    <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input className="pl-10 pr-4 py-3 bg-white border border-slate-100 rounded-2xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-brand-orange/20" placeholder="Search reports..." />
                 </div>
                 <button className="p-3 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-slate-900 transition-all">
                    <Filter size={18} />
                 </button>
              </div>
           </div>

           <div className="grid gap-4">
              {reports.map((r) => (
                <div key={r.id} className="group p-8 rounded-[3rem] bg-white border border-slate-100 hover:border-brand-orange/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex flex-col lg:flex-row items-center gap-10">
                   <div className="w-16 h-16 rounded-[2rem] bg-slate-50 text-slate-400 flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-all shadow-sm">
                      <FileText size={24} />
                   </div>
                   
                   <div className="flex-1 text-center lg:text-left min-w-0">
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{r.category} · {r.format}</div>
                      <h4 className="text-lg font-black text-slate-900 group-hover:text-brand-orange transition-colors truncate">{r.title}</h4>
                      <div className="flex items-center justify-center lg:justify-start gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                         <Calendar size={12} /> {r.date} · <Download size={12} /> {r.size}
                      </div>
                   </div>

                   <div className="flex items-center gap-4">
                      <button className="px-10 py-4 bg-slate-900 text-white rounded-[2rem] font-black text-[10px] uppercase tracking-widest hover:bg-brand-orange transition-all shadow-xl active:scale-95 flex items-center gap-2">
                         Download File <Download size={14} />
                      </button>
                      <button className="p-4 bg-slate-50 text-slate-400 hover:text-slate-900 rounded-2xl transition-all">
                         <MoreVertical size={16} />
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Global Activity Map Preview */}
        <div className="p-12 rounded-[4rem] bg-white border border-slate-100 shadow-sm relative overflow-hidden group text-center lg:text-left">
           <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl group-hover:scale-150 transition-all duration-1000" />
           <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                 <div className="flex items-center justify-center lg:justify-start gap-3 text-brand-orange">
                    <Globe size={24} />
                    <h3 className="text-xl font-black uppercase tracking-tight">Geographic Engagement</h3>
                 </div>
                 <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-2xl">
                    Visualize the impact of NIOS nationwide. Access real-time heatmaps showing learner activity, resource demand, and regional performance trends to optimize platform scaling.
                 </p>
                 <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    {['Delhi', 'Maharashtra', 'UP', 'Kerala', 'Karnataka'].map((r) => (
                      <span key={r} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-black text-slate-400 uppercase tracking-widest">{r}</span>
                    ))}
                 </div>
              </div>
              <div className="w-full lg:w-72 h-48 bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200 flex flex-col items-center justify-center gap-4 text-slate-400">
                 <PieChart size={32} className="opacity-20 translate-y-2" />
                 <span className="text-[10px] font-black uppercase tracking-widest opacity-50">Map Telemetry...</span>
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
