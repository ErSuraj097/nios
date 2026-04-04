'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';
import { 
  Clock, 
  CheckCircle2, 
  BarChart3, 
  Calendar, 
  Trophy, 
  BookOpen,
  ChevronRight,
  Timer,
  AlertCircle,
  Undo2,
  Sparkles,
  Zap,
  FileText,
  ArrowRight
} from 'lucide-react';
import { MOCK_ASSESSMENTS } from '@/lib/mock-data';
import { useAuth } from '@/contexts/AuthContext';

export default function AssessmentsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'list' | 'quiz'>('list');
  const [selectedAssessment, setSelectedAssessment] = useState<any>(null);

  if (!user) return null;

  const stats = [
    { label: 'Pending', value: '3', icon: Clock, color: 'text-amber-500 bg-amber-50' },
    { label: 'Completed', value: '12', icon: CheckCircle2, color: 'text-emerald-500 bg-emerald-50' },
    { label: 'Avg. Score', value: '88%', icon: BarChart3, color: 'text-blue-500 bg-blue-50' },
    { label: 'Upcoming', value: '2', icon: Calendar, color: 'text-purple-500 bg-purple-50' },
  ];

  return (
    <DashboardLayout 
      title="Academic Assessments" 
      subtitle="Track your progress through quizzes, exams, and assignments"
    >
      {activeTab === 'list' ? (
        <div className="space-y-10 animate-fade-in">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="p-6 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm transition-all hover:shadow-xl group">
                <div className={`w-12 h-12 rounded-2xl ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <s.icon size={20} />
                </div>
                <div className="text-2xl font-black text-slate-900 tracking-tighter mb-1">{s.value}</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Assessment List */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Active Evaluations</h3>
               <div className="flex gap-2">
                 {['All', 'Quizzes', 'Assignments'].map((f) => (
                   <button key={f} className="px-4 py-2 text-[10px] font-black rounded-xl text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors">{f}</button>
                 ))}
               </div>
            </div>

            <div className="grid gap-4">
               {MOCK_ASSESSMENTS.map((a) => (
                 <div key={a.id} className="group p-6 rounded-[2rem] bg-white border border-slate-100 hover:border-brand-orange/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex flex-col md:flex-row items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                      a.status === 'Completed' ? 'bg-emerald-50 text-emerald-500' : 'bg-orange-50 text-brand-orange'
                    }`}>
                      {a.type === 'Quiz' ? <Zap size={24} /> : a.type === 'Assignment' ? <FileText size={24} /> : <BookOpen size={24} />}
                    </div>
                    <div className="flex-1 text-center md:text-left">
                       <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{a.subject} · {a.type}</div>
                       <h4 className="text-lg font-black text-slate-900 group-hover:text-brand-orange transition-colors">{a.title}</h4>
                    </div>
                    <div className="flex items-center gap-8 px-8 border-x border-slate-50 hidden md:flex">
                       <div className="text-center">
                          <div className="text-[10px] font-black text-slate-400 uppercase mb-1">Due Date</div>
                          <div className="text-xs font-black text-slate-900 uppercase tracking-tighter">{a.dueDate}</div>
                       </div>
                       <div className="text-center min-w-[80px]">
                          <div className="text-[10px] font-black text-slate-400 uppercase mb-1">Status</div>
                          <div className={`text-[10px] font-black uppercase tracking-widest ${
                            a.status === 'Completed' ? 'text-emerald-500' : 'text-orange-500 underline decoration-2'
                          }`}>{a.status}</div>
                       </div>
                    </div>
                    <div>
                       {a.status === 'Completed' ? (
                         <div className="px-6 py-3 bg-slate-50 rounded-xl text-[10px] font-black text-emerald-600 uppercase tracking-widest flex items-center gap-2">
                           <CheckCircle2 size={14} /> SCORE: {a.score}%
                         </div>
                       ) : (
                         <button 
                          onClick={() => { setSelectedAssessment(a); setActiveTab('quiz'); }}
                          className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-orange transition-all shadow-xl active:scale-95 flex items-center gap-2"
                         >
                           Start Module <ChevronRight size={14} />
                         </button>
                       )}
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto animate-slide-up">
           <div className="mb-8 flex items-center justify-between">
              <button 
                onClick={() => setActiveTab('list')}
                className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors"
              >
                <Undo2 size={16} /> Back to List
              </button>
              <div className="px-6 py-3 bg-red-50 text-red-600 rounded-2xl border border-red-100 flex items-center gap-3">
                 <Timer size={18} className="animate-pulse" />
                 <span className="text-lg font-black tracking-tighter">29:45</span>
              </div>
           </div>

           <div className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm space-y-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
                <div className="h-full bg-brand-orange w-1/3 transition-all duration-1000" />
              </div>

              <div className="space-y-4">
                 <div className="flex items-center gap-2">
                   <span className="px-3 py-1 bg-brand-orange text-white text-[10px] font-black uppercase rounded-lg tracking-widest">Question 04 / 20</span>
                   <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">— {selectedAssessment?.subject}</span>
                 </div>
                 <h2 className="text-2xl font-black text-slate-900 leading-tight">Which of Newton's laws states that an object at rest stays at rest unless acted on by an external force?</h2>
              </div>

              <div className="grid gap-4">
                 {[
                   "Newton's First Law of Motion",
                   "Newton's Second Law of Motion",
                   "Newton's Third Law of Motion",
                   "The Law of Universal Gravitation"
                 ].map((opt, i) => (
                   <button key={i} className="group p-6 text-left rounded-3xl border-2 border-slate-50 hover:border-brand-orange/30 hover:bg-orange-50 transition-all flex items-center gap-6">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 font-black text-sm flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                        {String.fromCharCode(65 + i)}
                      </div>
                      <span className="text-sm font-black text-slate-600 flex-1 group-hover:text-slate-900 transition-colors">{opt}</span>
                      <div className="w-6 h-6 rounded-full border-2 border-slate-200 group-hover:border-brand-orange transition-colors" />
                   </button>
                 ))}
              </div>

              <div className="pt-10 flex items-center justify-between border-t border-slate-50">
                 <button className="text-[10px] font-black text-slate-300 uppercase tracking-widest hover:text-slate-500">Skip Question</button>
                 <button 
                  onClick={() => setActiveTab('list')}
                  className="px-12 py-5 bg-brand-orange text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 active:scale-95 flex items-center gap-3"
                 >
                   Confirm & Next <ArrowRight size={16} />
                 </button>
              </div>
           </div>

           <div className="mt-8 flex items-center gap-3 justify-center">
              <AlertCircle size={16} className="text-slate-300" />
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Screen recording and AI proctoring active for this session</span>
           </div>
        </div>
      )}
    </DashboardLayout>
  );
}
