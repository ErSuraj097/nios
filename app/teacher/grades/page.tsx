'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { 
  ClipboardList, 
  Search, 
  Filter, 
  ArrowUpRight, 
  CheckCircle2, 
  TrendingUp, 
  FileText, 
  Download,
  MoreVertical,
  ChevronRight,
  AlertCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const assessments = [
  { 
    id: 'A1', 
    title: 'Physics Chapter 4: Motion Quiz', 
    stream: 'Science', 
    dueDate: '2026-04-10', 
    submissions: 38, 
    totalStudents: 42, 
    avgScore: '78%', 
    status: 'Grading Active' 
  },
  { 
    id: 'A2', 
    title: 'Modern Algebra: Linear Equations', 
    stream: 'Science', 
    dueDate: '2026-04-05', 
    submissions: 42, 
    totalStudents: 42, 
    avgScore: '84%', 
    status: 'Completed' 
  },
  { 
    id: 'A3', 
    title: 'English TMA: Creative Writing', 
    stream: 'Arts', 
    dueDate: '2026-04-15', 
    submissions: 12, 
    totalStudents: 24, 
    avgScore: 'Pnd.', 
    status: 'Pending Submission' 
  }
];

export default function TeacherGradesPage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <DashboardLayout 
      title="Gradebook & Evaluation" 
      subtitle="Comprehensive assessment tracking and performance analysis"
    >
      <div className="space-y-10 animate-fade-in">
        {/* Analytics Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl group-hover:scale-150 transition-all duration-1000" />
              <div className="flex flex-col md:flex-row items-center gap-8">
                 <div className="w-20 h-20 rounded-[2rem] bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                    <TrendingUp size={32} />
                 </div>
                 <div className="text-center md:text-left">
                    <h3 className="text-xl font-black text-slate-900 mb-2">Performance Trend</h3>
                    <p className="text-slate-500 font-medium leading-relaxed max-w-sm">
                       Overall average scores have improved by <span className="text-emerald-500 font-bold">14.2%</span> compared to the last academic quarter.
                    </p>
                 </div>
                 <div className="flex-1" />
                 <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-black transition-all shadow-xl">
                    Full Analytics
                 </button>
              </div>
           </div>

           <div className="p-10 rounded-[3rem] bg-slate-900 text-white flex flex-col justify-between group">
              <div className="flex items-center justify-between mb-8">
                 <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-brand-orange">
                    <AlertCircle size={20} />
                 </div>
                 <div className="text-[10px] font-black text-brand-orange uppercase tracking-widest">Action Required</div>
              </div>
              <div className="space-y-2">
                 <div className="text-2xl font-black text-white tracking-tighter">03 PENDING</div>
                 <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Grading Assignments</div>
              </div>
           </div>
        </div>

        {/* Gradebook List */}
        <div className="space-y-8">
           <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Active Assessments</h3>
              <div className="flex gap-3">
                 <button className="px-6 py-4 bg-white border border-slate-100 rounded-[2rem] shadow-sm text-slate-400 font-black text-[10px] uppercase tracking-widest hover:text-slate-900 transition-colors flex items-center gap-2">
                    <Download size={16} /> Export CSV
                 </button>
                 <button className="px-8 py-4 bg-brand-orange text-white rounded-[2rem] font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
                    Add New Entry
                 </button>
              </div>
           </div>

           <div className="grid gap-4">
              {assessments.map((a) => (
                <div key={a.id} className="group p-8 rounded-[3rem] bg-white border border-slate-100 hover:border-brand-orange/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex flex-col lg:flex-row items-center gap-10">
                   <div className="w-16 h-16 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center shrink-0">
                      <FileText size={28} />
                   </div>
                   
                   <div className="flex-1 text-center lg:text-left">
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{a.stream}</div>
                      <h4 className="text-lg font-black text-slate-900 group-hover:text-brand-orange transition-colors">{a.title}</h4>
                   </div>

                   <div className="flex items-center gap-12 px-12 border-x border-slate-50 hidden lg:flex">
                      <div className="text-center min-w-[80px]">
                         <div className="text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest">Graded</div>
                         <div className="text-sm font-black text-slate-900">{a.submissions} / {a.totalStudents}</div>
                      </div>
                      <div className="text-center">
                         <div className="text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest">Avg. Score</div>
                         <div className="text-sm font-black text-brand-orange">{a.avgScore}</div>
                      </div>
                   </div>

                   <div className="flex items-center gap-6">
                      <div className="text-center min-w-[120px] hidden lg:block">
                         <div className="text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest">Status</div>
                         <div className={`text-[10px] font-black uppercase tracking-widest ${
                           a.status === 'Grading Active' ? 'text-amber-500' : a.status === 'Completed' ? 'text-emerald-500' : 'text-slate-400'
                         }`}>{a.status}</div>
                      </div>
                      <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-orange transition-all shadow-xl active:scale-95 flex items-center gap-2">
                         Open Gradebook <ChevronRight size={14} />
                      </button>
                      <button className="p-4 bg-slate-50 text-slate-400 hover:text-slate-900 rounded-2xl transition-all">
                         <MoreVertical size={16} />
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* AI Insight Section */}
        <div className="p-12 rounded-[4rem] bg-gradient-to-br from-brand-orange/5 via-white to-blue-50 border border-brand-orange/10 relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl group-hover:scale-150 transition-all duration-1000" />
           <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-16 h-16 rounded-[2rem] bg-brand-orange text-white flex items-center justify-center shrink-0 shadow-xl shadow-orange-500/20">
                 <Sparkles size={24} />
              </div>
              <div className="flex-1 text-center lg:text-left">
                 <h3 className="text-2xl font-black text-slate-900 mb-2">AI Success Predictor</h3>
                 <p className="text-slate-500 font-medium leading-relaxed">
                    Based on recent grades, <span className="text-emerald-600 font-bold">12 students</span> are likely to achieve distinction in the upcoming national exams. <span className="text-red-500 font-bold">03 students</span> may need immediate intervention.
                 </p>
              </div>
              <button className="px-10 py-5 bg-white border border-slate-100 rounded-3xl font-black text-slate-900 text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all shadow-xl shadow-slate-200/50">
                 Identify At-Risk Students
              </button>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
