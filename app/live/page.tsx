'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';
import { 
  Microscope, 
  Video, 
  MapPin, 
  Users, 
  RefreshCw, 
  Calendar, 
  Mail, 
  FileText, 
  HelpCircle, 
  Play, 
  Scroll,
  Clock,
  Zap,
  MoreVertical,
  ChevronRight,
  Monitor,
  Sparkles
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const schedule = [
  { time: '09:00 AM', event: 'Mathematics: Algebra II (Live)', teacher: 'Ms. S. Verma', status: 'Completed', platform: 'Zoom' },
  { time: '11:00 AM', event: 'Science: Motion (Live)', teacher: 'Dr. V. Mehta', status: 'Live Now', platform: 'Google Meet', live: true },
  { time: '02:00 PM', event: 'English: Grammar & Composition', teacher: 'Mr. R. Iyer', status: 'Upcoming', platform: 'MS Teams' },
  { time: '04:00 PM', event: 'Digital Literacy Workshop', teacher: 'NIOS Official', status: 'Upcoming', platform: 'YouTube' },
];

export default function LiveClassesPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('All Classes');

  if (!user) return null;

  return (
    <DashboardLayout 
      title="Live Virtual Classroom" 
      subtitle="Synchronized interactive sessions with national faculty and peers"
    >
      <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start animate-fade-in pb-20">
        
        {/* Main Feed */}
        <div className="space-y-10">
           {/* Featured Live Now */}
           <div className="p-12 rounded-[4rem] bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-1000" />
              <div className="absolute -bottom-20 -right-20 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Microscope size={320} className="text-white" />
              </div>

              <div className="relative space-y-6">
                 <div className="flex items-center gap-4">
                    <div className="px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-2">
                       <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                       Streaming Live Now
                    </div>
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Started 15 mins ago</div>
                 </div>

                 <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter max-w-2xl leading-none">
                    Science: Advanced Newton's Laws of Motion
                 </h2>

                 <div className="flex flex-wrap items-center gap-8 pt-4">
                    <div className="flex items-center gap-3">
                       <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-white">V</div>
                       <div className="text-left">
                          <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Instructor</div>
                          <div className="text-sm font-black text-white">Dr. Vikram Mehta</div>
                       </div>
                    </div>
                    <div className="flex items-center gap-6">
                       <div className="text-center">
                          <div className="text-[10px] font-black text-slate-500 uppercase mb-1">Participants</div>
                          <div className="text-sm font-black text-white flex items-center gap-2">
                             <Users size={14} className="text-brand-orange" /> 1,240+
                          </div>
                       </div>
                       <div className="text-center">
                          <div className="text-[10px] font-black text-slate-500 uppercase mb-1">Platform</div>
                          <div className="text-sm font-black text-emerald-400 flex items-center gap-2">
                             <Monitor size={14} /> Google Meet
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="flex gap-4 pt-4">
                    <button className="px-10 py-5 bg-brand-orange text-white rounded-[2rem] font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 active:scale-95 flex items-center gap-3">
                       <Video size={18} /> Join Virtual Room
                    </button>
                    <button className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white rounded-[2rem] font-black text-[10px] uppercase tracking-widest transition-all">
                       View Syllabus
                    </button>
                 </div>
              </div>
           </div>

           {/* Schedule Filter & List */}
           <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-slate-50 pb-6">
                 <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Daily Timeline</h3>
                 <div className="flex gap-2">
                    {['All Classes', 'Scientific', 'Humanities'].map((t) => (
                      <button 
                        key={t}
                        onClick={() => setActiveTab(t)}
                        className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-xl ${
                          activeTab === t ? 'text-brand-orange bg-orange-50' : 'text-slate-400 hover:text-slate-900'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                 </div>
              </div>

              <div className="grid gap-4">
                 {schedule.map((item, i) => (
                   <div key={i} className="group p-8 rounded-[3rem] bg-white border border-slate-100 hover:border-brand-orange/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex flex-col lg:flex-row items-center gap-10">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all shadow-sm">
                         <Clock size={24} />
                      </div>
                      
                      <div className="flex-1 text-center lg:text-left min-w-0">
                         <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{item.time} · {item.platform}</div>
                         <h4 className="text-lg font-black text-slate-900 group-hover:text-brand-orange transition-colors truncate">{item.event}</h4>
                         <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Faculty: {item.teacher}</div>
                      </div>

                      <div className="flex items-center gap-6">
                         <span className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${
                           item.status === 'Live Now' ? 'bg-red-50 text-red-500' : item.status === 'Completed' ? 'bg-emerald-50 text-emerald-500' : 'bg-blue-50 text-blue-500'
                         }`}>
                           {item.status}
                         </span>
                         <button className="px-8 py-4 bg-slate-50 text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all shadow-sm flex items-center gap-2">
                           {item.status === 'Completed' ? 'Recording' : 'Room Link'} <ChevronRight size={14} />
                         </button>
                         <button className="p-4 bg-slate-50 text-slate-400 hover:text-slate-900 rounded-2xl transition-all">
                            <MoreVertical size={16} />
                         </button>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Sidebar Tools */}
        <div className="space-y-8">
           {/* Interactive Calendar Preview */}
           <div className="p-8 rounded-[3rem] bg-white border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                 <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">April 2026</h4>
                 <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-lg bg-slate-50 text-slate-400 hover:text-slate-900 flex items-center justify-center transition-all">‹</button>
                    <button className="w-8 h-8 rounded-lg bg-slate-50 text-slate-400 hover:text-slate-900 flex items-center justify-center transition-all">›</button>
                 </div>
              </div>
              <div className="grid grid-cols-7 gap-y-2 text-center">
                 {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
                   <div key={d} className="text-[10px] font-black text-slate-300 uppercase">{d}</div>
                 ))}
                 {Array.from({ length: 31 }, (_, i) => (
                   <div 
                    key={i} 
                    className={`p-2 text-xs font-black rounded-xl transition-all cursor-pointer ${
                      i + 1 === 4 ? 'bg-brand-orange text-white shadow-lg shadow-orange-500/30' : 'text-slate-900 hover:bg-slate-50'
                    }`}
                   >
                     {i + 1}
                   </div>
                 ))}
              </div>
           </div>

           {/* Sync & Tools */}
           <div className="p-8 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-all duration-1000" />
              <div className="flex items-center gap-4 mb-8">
                 <Sparkles className="text-brand-orange" size={20} />
                 <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Faculty Resources</h4>
              </div>
              <div className="space-y-3">
                 {[
                   { icon: <FileText className="w-4 h-4" />, label: 'Session Notes' },
                   { icon: <Play className="w-4 h-4" />, label: 'Archive Hub' },
                   { icon: <HelpCircle className="w-4 h-4" />, label: 'Submit Q&A' },
                   { icon: <Scroll className="w-4 h-4" />, label: 'Attendance' },
                 ].map((tool, i) => (
                   <button key={i} className="w-full p-4 bg-white/5 hover:bg-white/10 rounded-2xl flex items-center gap-3 transition-all">
                      <div className="text-brand-orange">{tool.icon}</div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{tool.label}</span>
                   </button>
                 ))}
              </div>
           </div>

           {/* Quick Support */}
           <div className="p-8 rounded-[3rem] bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm text-center">
              <Mail className="w-10 h-10 mx-auto mb-4 text-blue-500 opacity-50" />
              <h4 className="text-sm font-black text-slate-900 mb-2">Technical Issues?</h4>
              <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest leading-relaxed mb-6">Connect with our support team for platform streaming assistance.</p>
              <button className="w-full py-4 bg-blue-500 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20">
                 Contact Helpdesk
              </button>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
