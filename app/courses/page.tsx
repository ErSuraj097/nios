'use client';

<<<<<<< HEAD
import DashboardLayout from '@/components/DashboardLayout';
import Link from 'next/link';
import { 
  Search, 
  Filter, 
  Clock, 
  Star, 
  ArrowRight,
  Sparkles,
  Layers,
  Microscope
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
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-brand-orange/5 focus:border-brand-orange/20 transition-all shadow-sm"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex items-center gap-2 px-6 py-4 bg-white border border-slate-100 rounded-xl text-xs font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all">
            <Filter size={16} /> Filters
          </button>
          {!isLearner && (
            <button className="flex items-center gap-2 px-6 py-4 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-900/10">
              Create New Course
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_COURSES.map((course) => (
          <div key={course.id} className="group bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
            <div className="relative h-48 bg-slate-100 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 to-transparent z-10" />
               <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                 {/* <course.icon size={64} className="text-slate-200 group-hover:text-brand-orange/20 transition-colors" /> */}

                 <img src="/book.jpg" alt="" />
               </div>
               <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                 <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-900 border border-white/20">
                   {course.subject}
                 </span>
                 <span className={`px-3 py-1 backdrop-blur-md rounded-lg text-[10px] font-black uppercase tracking-widest text-white border border-white/20 ${
                    course.level === 'Advanced' ? 'bg-red-500/80' : 'bg-orange-500/80'
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
                    className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-orange transition-all shadow-lg active:scale-95"
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

      <div className="mt-16 p-12 rounded-xl bg-amber-50 border border-slate-200 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-1000" />
              <div className="absolute -bottom-20 -right-20 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Microscope size={320} className="text-orange-800" />
              </div>
         <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:scale-125 transition-transform duration-1000 border border-brand-orange/5" />
         <div className="relative  z-10 max-w-2xl">
          
          
           <div className="w-16 h-16 rounded-xl bg-brand-orange/20 flex items-center justify-center text-brand-orange mb-8 group-hover:scale-110 transition-transform">
             <Sparkles size={32} />
           </div>
           <h2 className="text-4xl font-black mb-6 leading-tight">Can't find what you're looking for?</h2>
           <p className="text-slate-400 text-lg mb-8 leading-relaxed font-medium">Use our AI-assisted search or contact an academic counselor for personalized course guidance.</p>
           
           
           
           <div className="flex flex-wrap gap-4">
             <button className="px-8 py-4 bg-brand-orange text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 active:scale-95">
               Ask AI Assistant
             </button>
             <button className="px-8 py-4 bg-white/5 border border-white/10 text-white  rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
               Talk to Expert
             </button>
           </div>
         </div>
      </div>
      
=======
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Clock,
  ArrowRight,
  Sparkles,
  Layers,
  Globe,
  X,
  Languages,
  CheckCircle2
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { MOCK_COURSES } from '@/lib/mock-data';
import { ALL_484_PATHWAYS } from '@/lib/multilingual-data';

export default function CoursesPage() {
  const { user, updateLinguisticProfile } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');

  const motherLang = user?.motherLang || null;

  if (!user) return null;

  const handleSetMotherLang = (lang: string | null) => {
    updateLinguisticProfile(lang);
  };

  const isLearner = user.role === 'learner';

  const LANGUAGES = [
    'Hindi', 'English', 'Bengali', 'Tamil', 'Telugu', 'Marathi', 'Gujarati', 'Kannada', 
    'Malayalam', 'Punjabi', 'Odia', 'Assamese', 'Urdu', 'Sanskrit', 'Kashmiri', 'Konkani', 
    'Maithili', 'Manipuri', 'Nepali', 'Bodo', 'Santali', 'Dogri'
  ];

  // Show all pathways by default, but prioritize the selected mother tongue if set
  const relevantPathways = ALL_484_PATHWAYS
    .filter(p => !motherLang || p.source === motherLang)
    .map(p => ({
        ...p,
        subject: `${p.source} → ${p.target}`,
        enrolled: false,
        rating: 4.8 + (Math.random() * 0.2),
        modules: [1, 2, 3, 4, 5, 6, 7, 8],
        currentStage: 'preview',
        overallProgress: 0,
        description: `Master the transition from ${p.source} to ${p.target} with our AI-powered curriculum.`,
        image: `https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=60`
    }));

  const allDisplayCourses = [...MOCK_COURSES, ...relevantPathways];

  const filteredCourses = allDisplayCourses.filter(course => {
    const searchStr = searchQuery.toLowerCase();
    const matchesSearch = 
      course.title.toLowerCase().includes(searchStr) || 
      course.subject.toLowerCase().includes(searchStr) ||
      (course.description && course.description.toLowerCase().includes(searchStr));
    
    // If a mother language is selected, prioritize courses that mention it or are part of that pathway
    const matchesLang = !motherLang || 
                       course.subject.includes(motherLang) || 
                       course.title.includes(motherLang) ||
                       (course.source === motherLang);
                       
    return matchesSearch && matchesLang;
  }).slice(0, 48); // Limit to 48 courses for performance

  return (
    <DashboardLayout
      title={isLearner ? "Course Catalog" : "Course Management"}
      subtitle={motherLang ? `Hyper-personalized pathways for ${motherLang} speakers` : "Explore 484+ AI-generated learning pathways"}
    >
      <div className="space-y-12 pb-20">
        {/* Search & Global Context */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="relative w-full md:max-w-xl group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-900 transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search by subject, language, or concept..."
              className="w-full pl-16 pr-8 py-5 bg-white border-2 border-slate-50 rounded-[24px] text-sm font-medium focus:outline-none focus:border-blue-900 focus:ring-8 focus:ring-blue-900/5 transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {motherLang && (
            <div className="flex items-center gap-4 p-2 pl-6 pr-2 bg-blue-900 text-white rounded-2xl shadow-xl shadow-blue-900/20">
               <div className="flex items-center gap-2">
                  <Globe size={16} className="text-blue-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Speaker Context: {motherLang}</span>
               </div>
               <button 
                  onClick={() => handleSetMotherLang(null)}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-all"
               >
                  <X size={14} />
               </button>
            </div>
          )}
        </div>

        <AnimatePresence>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Catalog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div key={course.id} className="group bg-white rounded-[32px] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col h-full relative">
                  <div className="relative h-48 bg-slate-50 overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-transparent to-transparent z-10" />
                    
                    {course.image ? (
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700 opacity-20">
                        <Globe size={120} className="text-blue-900" />
                      </div>
                    )}
                    
                    <div className="absolute top-6 left-6 z-20">
                      <div className="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[9px] font-black uppercase tracking-[0.2em] shadow-xl">
                        ID: {course.id}
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 z-20 flex gap-2">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-900 border border-white/20">
                        {course.subject}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight group-hover:text-blue-900 transition-colors">
                      {course.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-1.5 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        <Clock size={12} className="text-blue-900" /> 12h 45m
                      </div>
                      <div className="flex items-center gap-1.5 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        <Layers size={12} className="text-blue-900" /> {course.modules.length} Stages
                      </div>
                    </div>

                    <p className="text-slate-500 text-xs font-medium leading-relaxed mb-8 line-clamp-2">
                      {course.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                       <div className="flex -space-x-2">
                          {[1, 2, 3].map(i => (
                             <div key={i} className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px]">👤</div>
                          ))}
                       </div>
                       <Link href={`/courses/${course.id}`}>
                          <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-900 transition-all shadow-xl shadow-slate-900/10 active:scale-[0.98]">
                            Enroll Pathway
                          </button>
                       </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {filteredCourses.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-[32px] border border-dashed border-slate-200">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Search className="text-slate-300" size={24} />
            </div>
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">No Pathways Found</h3>
            <p className="text-slate-400 text-sm font-medium italic mt-2">Try adjusting your search or reset your language preference.</p>
          </div>
        )}

        <div className="mt-16 p-12 rounded-[40px] bg-blue-50 border border-blue-100 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/5 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:scale-125 transition-transform duration-1000" />
          <div className="relative z-10 max-w-2xl">
            <div className="w-16 h-16 rounded-2xl bg-blue-900 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-xl">
              <Sparkles size={32} />
            </div>
            <h2 className="text-4xl font-black mb-6 leading-tight">AI-Powered Multilingual Support</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed font-medium italic">Our platform automatically generates learning pathways for 484 language pair combinations using Gemini Flash AI.</p>
            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-900 transition-all shadow-2xl shadow-slate-900/30 active:scale-95">
                Request New Pair
              </button>
            </div>
          </div>
        </div>
      </div>
>>>>>>> main
    </DashboardLayout>
  );
}
