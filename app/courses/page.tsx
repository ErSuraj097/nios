'use client';

import DashboardLayout from '@/components/DashboardLayout';
import Link from 'next/link';
import { 
  Search, 
  Filter, 
  Clock, 
  Star, 
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { MOCK_COURSES } from '@/lib/mock-data';

export default function CoursesPage() {
  const { user } = useAuth();
  
  if (!user) return null;

  const isLearner = user.role === 'learner';

  return (
    <DashboardLayout 
      title={isLearner ? "My Learning" : "Course Management"} 
      subtitle={isLearner ? "Continue where you left off" : "Manage your curriculum and content"}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
        <div className="relative flex-1 w-full max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search courses, subjects, or keywords..." 
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-[1.5rem] text-sm focus:outline-none focus:ring-4 focus:ring-brand-orange/5 focus:border-brand-orange/20 transition-all shadow-sm"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex items-center gap-2 px-6 py-4 bg-white border border-slate-100 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all">
            <Filter size={16} /> Filters
          </button>
          {!isLearner && (
            <button className="flex items-center gap-2 px-6 py-4 bg-slate-900 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-900/10">
              Create New Course
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_COURSES.map((course) => (
          <div key={course.id} className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
            <div className="relative h-48 bg-slate-100 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 to-transparent z-10" />
               <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                 <course.icon size={64} className="text-slate-200 group-hover:text-brand-orange/20 transition-colors" />
               </div>
               <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                 <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-900 border border-white/20">
                   {course.subject}
                 </span>
                 <span className={`px-3 py-1 backdrop-blur-md rounded-lg text-[10px] font-black uppercase tracking-widest text-white border border-white/20 ${
                    course.level === 'Advanced' ? 'bg-red-500/80' : 'bg-blue-500/80'
                 }`}>
                   {course.level}
                 </span>
               </div>
            </div>

            <div className="p-8">
              <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight group-hover:text-brand-orange transition-colors">
                {course.title}
              </h3>
              
              <div className="flex items-center gap-4 mb-6">
                 <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                   <Clock size={14} /> {course.duration}
                 </div>
                 <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                   <Layers size={14} /> {course.modules} Modules
                 </div>
                 {course.rating && (
                   <div className="flex items-center gap-1 text-xs font-black text-amber-500">
                     <Star size={14} fill="currentColor" /> {course.rating}
                   </div>
                 )}
              </div>

              {isLearner && course.enrolled ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <span>Course Progress</span>
                    <span className="text-slate-900">{course.progress}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-400 to-brand-orange transition-all duration-1000"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <Link 
                    href={`/courses/${course.id}`}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-orange transition-all shadow-lg active:scale-95"
                  >
                    Resume Learning <ArrowRight size={14} />
                  </Link>
                </div>
              ) : (
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                   <div className="flex items-center gap-2">
                     <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs">👨‍🏫</div>
                     <span className="text-xs font-bold text-slate-500">NIOS Faculty</span>
                   </div>
                   <button className="px-6 py-3 bg-brand-orange text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 active:scale-95">
                     Enroll Now
                   </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-12 rounded-[3.5rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:scale-125 transition-transform duration-1000 border border-brand-orange/5" />
         <div className="relative z-10 max-w-2xl">
           <div className="w-16 h-16 rounded-3xl bg-brand-orange/20 flex items-center justify-center text-brand-orange mb-8 group-hover:scale-110 transition-transform">
             <Sparkles size={32} />
           </div>
           <h2 className="text-4xl font-black mb-6 leading-tight">Can't find what you're looking for?</h2>
           <p className="text-slate-400 text-lg mb-8 leading-relaxed font-medium">Use our AI-assisted search or contact an academic counselor for personalized course guidance.</p>
           <div className="flex flex-wrap gap-4">
             <button className="px-8 py-4 bg-brand-orange text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 active:scale-95">
               Ask AI Assistant
             </button>
             <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
               Talk to Expert
             </button>
           </div>
         </div>
      </div>
    </DashboardLayout>
  );
}
