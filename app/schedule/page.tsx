'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';
import Link from 'next/link';
import { 
  CalendarDays, 
  Clock, 
  Video, 
  BookOpen, 
  MapPin, 
  Users, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  Menu, 
  Filter, 
  Search,
  Plus,
  Download,
  MoreVertical,
  Zap
} from 'lucide-react';
import { MOCK_EVENTS } from '@/lib/mock-data';
import { useAuth } from '@/contexts/AuthContext';

export default function SchedulePage() {
  const { user } = useAuth();
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');

  if (!user) return null;

  return (
    <DashboardLayout 
      title="Academic Schedule" 
      subtitle="Synchronized calendar for classes, exams, and milestones"
    >
      <div className="grid lg:grid-cols-[380px_1fr] gap-8 h-[calc(100vh-210px)] max-h-[900px]">
        {/* Left Sidebar - Upcoming & Filters */}
        <div className="space-y-8 flex flex-col overflow-hidden">
           {/* Quick Actions */}
           <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
              <h3 className="text-lg font-black uppercase tracking-tight mb-6">Planning</h3>
              <div className="space-y-3">
                 <button className="w-full py-4 bg-brand-orange hover:bg-orange-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-orange-500/20 active:scale-95 flex items-center justify-center gap-2">
                   <Plus size={16} /> Schedule Class
                 </button>
                 <button className="w-full py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                   <Download size={16} /> Export (ICS)
                 </button>
              </div>
           </div>

           {/* Upcoming Events Feed */}
           <div className="flex-1 p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm overflow-hidden flex flex-col">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-8">Agenda Feed</h3>
              <div className="flex-1 overflow-y-auto space-y-6 pr-2 scrollbar-hide">
                 {MOCK_EVENTS.map((event) => (
                   <div key={event.id} className="group p-5 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl hover:ring-1 hover:ring-slate-100 transition-all cursor-pointer relative overflow-hidden">
                      <div className={`absolute top-0 left-0 w-1.5 h-full ${
                        event.type === 'Class' ? 'bg-blue-500' : event.type === 'Exam' ? 'bg-red-500' : 'bg-orange-500'
                      }`} />
                      <div className="flex items-start justify-between mb-2">
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{event.type}</div>
                        {event.isLive && (
                          <span className="px-2 py-0.5 bg-red-50 text-red-600 text-[8px] font-black uppercase rounded-full animate-pulse border border-red-100">LIVE</span>
                        )}
                      </div>
                      <h4 className="text-sm font-black text-slate-900 mb-4 group-hover:text-brand-orange transition-colors">{event.title}</h4>
                      <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase">
                         <div className="flex items-center gap-1.5"><Clock size={12} /> {event.time}</div>
                         <div className="flex items-center gap-1.5"><MapPin size={12} /> {event.platform || 'Campus'}</div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Right - Interactive Calendar Grid */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col overflow-hidden">
           {/* Calendar Header */}
           <div className="p-8 border-b border-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-6">
                 <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-400"><ChevronLeft size={20} /></button>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tighter">April 2026</h2>
                    <button className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-400"><ChevronRight size={20} /></button>
                 </div>
                 <div className="h-6 w-px bg-slate-100" />
                 <div className="flex items-center gap-1 p-1 bg-slate-50 rounded-2xl">
                    {['Month', 'Week', 'Day'].map((v) => (
                      <button 
                        key={v}
                        onClick={() => setView(v.toLowerCase() as any)}
                        className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                          view === v.toLowerCase() ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                 </div>
              </div>
              <div className="flex items-center gap-4">
                 <Link href="/schedule/interactive" className="px-6 py-3 bg-brand-orange/10 text-brand-orange border border-brand-orange/20 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all flex items-center gap-2">
                    <BookOpen size={16} /> Interactive View
                 </Link>
                 <button className="p-3 bg-slate-50 text-slate-400 rounded-2xl hover:text-slate-900 transition-colors"><Search size={20} /></button>
                 <button className="px-6 py-3 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-black transition-all">Today</button>
              </div>
           </div>

           {/* Calendar Grid */}
           <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-7 border-b border-slate-50">
                 {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                   <div key={d} className="py-4 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest border-r border-slate-50 last:border-r-0">
                     {d}
                   </div>
                 ))}
              </div>
              <div className="grid grid-cols-7 h-full">
                 {Array.from({ length: 35 }, (_, i) => {
                    const day = i - 2; // Simulate starting mid-week
                    const isToday = day === 4;
                    const event = MOCK_EVENTS.find(() => day === 10 || day === 15 || day === 22);

                    return (day < 1 || day > 30) ? (
                      <div key={i} className="aspect-square bg-slate-50/50 border-r border-b border-slate-50 min-h-[120px]" />
                    ) : (
                      <div key={i} className={`aspect-square p-4 border-r border-b border-slate-50 hover:bg-slate-50/80 transition-all relative group cursor-pointer min-h-[120px] ${
                        isToday ? 'bg-orange-50/30' : ''
                      }`}>
                         <span className={`text-sm font-black ${isToday ? 'text-brand-orange w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center -ml-2 -mt-2 shadow-sm' : 'text-slate-400'}`}>
                           {day < 10 ? `0${day}` : day}
                         </span>
                         
                         {day === 10 && (
                           <div className="mt-4 p-2 bg-blue-500 text-white rounded-xl text-[8px] font-black uppercase tracking-tighter truncate ring-4 ring-white shadow-lg">
                             ● Physics Live
                           </div>
                         )}
                         {day === 15 && (
                           <div className="mt-4 p-2 bg-brand-orange text-white rounded-xl text-[8px] font-black uppercase tracking-tighter truncate ring-4 ring-white shadow-lg">
                             ● TMA Hand-in
                           </div>
                         )}
                      </div>
                    );
                 })}
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
