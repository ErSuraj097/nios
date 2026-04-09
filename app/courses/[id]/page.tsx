'use client';
import DashboardLayout from '@/components/DashboardLayout';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, FileText, PenTool, BookOpen, Video, Calendar, Download, 
  ChevronLeft, ChevronRight, Eye, ThumbsUp, Upload, Save, 
  FileOutput, Bot, Languages, Type, Volume2, Moon, Sun, 
  Sparkles, X, MessageSquare, List, Info, Share2 
} from 'lucide-react';
import { MOCK_COURSES } from '@/lib/mock-data';
import { useParams } from 'next/navigation';

const lessons = [
  { id: 1, title: 'Introduction to Motion', type: 'video', duration: '18 min', done: true },
  { id: 2, title: 'Newton\'s Laws of Motion', type: 'video', duration: '24 min', done: true },
  { id: 3, title: 'SLM Reading: Force & Types', type: 'pdf', duration: '15 min', done: true },
  { id: 4, title: 'Practice Quiz – Laws of Motion', type: 'quiz', duration: '10 min', done: false },
  { id: 5, title: 'Friction & Its Applications', type: 'video', duration: '20 min', done: false },
  { id: 6, title: 'Concept Map: Energy Types', type: 'flipbook', duration: '12 min', done: false },
  { id: 7, title: 'Live Q&A Session (Recording)', type: 'live', duration: '45 min', done: false },
  { id: 8, title: 'Unit Assessment', type: 'quiz', duration: '30 min', done: false },
];

const typeIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  video: Play, pdf: FileText, quiz: PenTool, flipbook: BookOpen, live: Video,
};

const typeColor: Record<string, string> = {
  video: 'text-blue-500', pdf: 'text-amber-500', quiz: 'text-green-500', flipbook: 'text-orange-500', live: 'text-red-500',
};

const tabs = ['Overview', 'Notes', 'Resources', 'Discussion', 'TMA'];

const getEmbedUrl = (url: string) => {
  if (!url) return '';
  if (url.includes('youtube.com/embed/')) return url;
  
  let videoId = '';
  if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split(/[?#]/)[0];
  } else if (url.includes('youtube.com/watch')) {
    const urlParams = new URL(url).searchParams;
    videoId = urlParams.get('v') || '';
  }
  
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

export default function CoursePlayerPage() {
  const params = useParams();
  const id = params.id as string;
  const course = MOCK_COURSES.find(c => c.id === id) || MOCK_COURSES[0];

  const [activeTab, setActiveTab] = useState('Overview');
  const [activeLesson, setActiveLesson] = useState(1);
  const [note, setNote] = useState('');
  
  // Accessibility States
  const [fontSize, setFontSize] = useState<'text-sm' | 'text-base' | 'text-lg'>('text-base');
  const [isISLEnabled, setIsISLEnabled] = useState(false);
  const [isSubtitlesEnabled, setIsSubtitlesEnabled] = useState(false);
  const [isReadingAloud, setIsReadingAloud] = useState(false);
  const [language, setLanguage] = useState('English');
  const [showAISummary, setShowAISummary] = useState(false);
  
  const synth = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    synth.current = window.speechSynthesis;
    return () => {
      synth.current?.cancel();
    };
  }, []);

  const handleReadAloud = () => {
    if (isReadingAloud) {
      synth.current?.cancel();
      setIsReadingAloud(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(course.transcript || '');
      utterance.onend = () => setIsReadingAloud(false);
      synth.current?.speak(utterance);
      setIsReadingAloud(true);
    }
  };

  const toggleFontSize = () => {
    const sizes: ('text-sm' | 'text-base' | 'text-lg')[] = ['text-sm', 'text-base', 'text-lg'];
    const nextIndex = (sizes.indexOf(fontSize) + 1) % sizes.length;
    setFontSize(sizes[nextIndex]);
  };

  return (
    <DashboardLayout 
      title={course.title} 
      subtitle={`${course.level} · ${course.teacher} · ${course.lessons} Lessons`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start pb-20">

        {/* Main Player Area */}
        <div className="space-y-6">
          {/* Header Actions */}
          <div className="flex items-center justify-between">
             <div className="flex gap-2">
                <span className="badge bg-brand-orange/10 text-brand-orange border-brand-orange/20 font-black uppercase tracking-widest px-3 py-1 text-[8px]">
                   AI ENHANCED
                </span>
                <span className="badge bg-blue-50 text-blue-600 border-blue-100 font-black uppercase tracking-widest px-3 py-1 text-[8px]">
                   BY-DR. MEHTA
                </span>
             </div>
             <div className="flex gap-2">
                <button className="p-2 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-900 transition-all"><Share2 size={16} /></button>
                <button className="p-2 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-900 transition-all"><Calendar size={16} /></button>
             </div>
          </div>

          {/* Player Hub */}
          <div className="relative group">
            <div className="bg-slate-900 rounded-xl overflow-hidden aspect-video shadow-2xl border border-slate-800 relative ring-8 ring-white/50">
               {activeLesson === 6 ? (
                 <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center p-12">
                   {/* Flipbook specific UI */}
                   <div className="text-white text-center space-y-4">
                      <BookOpen size={48} className="mx-auto text-brand-orange" />
                      <h4 className="font-black uppercase tracking-widest text-sm">Interactive FlipBook Active</h4>
                      <p className="text-slate-500 text-[10px] max-w-xs mx-auto">Open the library to view full 3D interactive version of this SLM.</p>
                      <button className="px-8 py-3 bg-brand-orange text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-orange-500/20">Expand Content</button>
                   </div>
                 </div>
               ) : (
                 <iframe 
                   src={getEmbedUrl(course.videoUrl || '')} 
                   className="w-full h-full border-0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen
                 />
               )}

               {/* ISL Placeholder Overlay */}
               {isISLEnabled && (
                 <div className="absolute bottom-16 right-8 w-40 aspect-video bg-slate-800 rounded-xl border border-slate-700 shadow-2xl overflow-hidden animate-in fade-in zoom-in slide-in-from-right-8">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                       <Video className="text-brand-orange opacity-40" />
                       <div className="absolute top-2 left-2 text-[8px] font-black text-white uppercase tracking-widest bg-brand-orange px-2 py-0.5 rounded-full">ISL FEED</div>
                    </div>
                 </div>
               )}

               {/* Subtitles Overlay */}
               {isSubtitlesEnabled && (
                 <div className="absolute bottom-20 left-10 right-10 p-6 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 animate-in slide-in-from-bottom-4 duration-500">
                    <p className="text-white text-center text-sm font-medium leading-relaxed italic opacity-90">
                       "...{course.transcript?.substring(0, 150)}..."
                    </p>
                 </div>
               )}

               {/* Custom Player Controls Placeholder */}
               <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-4">
                     <button className="text-white hover:text-brand-orange"><Play fill="currentColor" /></button>
                     <div className="text-[10px] font-black text-white/60 tracking-widest">08:24 / 18:40</div>
                  </div>
                  <div className="flex items-center gap-4">
                     <button className="text-xs font-black text-white/60 hover:text-white">1.0X</button>
                     <button className="text-xs font-black text-white/60 hover:text-white uppercase tracking-widest">HD</button>
                  </div>
               </div>
            </div>

            
          </div>

          {/* AI Accessibility Hub */}
          <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex flex-wrap items-center gap-4">
             <div className="flex items-center gap-2 pr-4 border-r border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <Info size={14} /> Tools
             </div>
             <button onClick={() => setIsSubtitlesEnabled(!isSubtitlesEnabled)} className={`btn-pill px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${isSubtitlesEnabled ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}>
                📝 Subtitles
             </button>
             <button onClick={() => setIsISLEnabled(!isISLEnabled)} className={`btn-pill px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${isISLEnabled ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}>
                🤟 ISL (Sign)
             </button>
             <button onClick={handleReadAloud} className={`btn-pill px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${isReadingAloud ? 'bg-emerald-500 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}>
                🔊 {isReadingAloud ? 'Reading...' : 'Read Aloud'}
             </button>
             <div className="h-6 w-px bg-slate-100 mx-2" />
             <div className="relative group">
                <button className="px-6 py-3 bg-slate-50 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-slate-100">
                   <Languages size={14} /> Dub: {language}
                </button>
                <div className="absolute top-full mt-2 left-0 w-40 bg-white rounded-xl shadow-2xl border border-slate-100 p-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all z-30">
                   {['English', 'Hindi', 'Sanskrit', 'Bengali'].map(l => (
                     <button key={l} onClick={() => setLanguage(l)} className="w-full px-4 py-2 text-left text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-brand-orange hover:text-white rounded-xl transition-all">
                        {l}
                     </button>
                   ))}
                </div>
             </div>
             <button onClick={toggleFontSize} className="p-3 bg-slate-50 text-slate-500 rounded-xl hover:bg-slate-100 transition-all">
                <Type size={18} />
             </button>
             <button className="p-3 bg-slate-50 text-slate-500 rounded-xl hover:bg-slate-100 transition-all">
                <Moon size={18} />
             </button>
             {/* AI Summary Widget Button */}
            <button 
              onClick={() => setShowAISummary(!showAISummary)}
              className="p-3 bg-slate-50 text-slate-500 rounded-xl hover:bg-slate-100 transition-all"
            >
              <Sparkles size={24} />
            </button>

             
          </div>

          {/* Bottom Content Tabs */}
          <div className="space-y-6">
             <div className="flex gap-4 border-b border-slate-100">
                {tabs.map((t) => (
                  <button 
                    key={t} 
                    onClick={() => setActiveTab(t)}
                    className={`pb-4 px-2 text-xs font-black uppercase tracking-widest transition-all relative ${
                      activeTab === t ? 'text-brand-orange' : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {t}
                    {activeTab === t && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange" />}
                  </button>
                ))}
             </div>

             <div className={`p-8 bg-white rounded-xl border border-slate-100 shadow-sm animate-in fade-in duration-500 ${fontSize}`}>
                {activeTab === 'Overview' && (
                  <div className="space-y-6">
                     <h3 className="text-2xl font-black text-slate-900 tracking-tight">{course.title}</h3>
                     <p className="text-slate-500 leading-relaxed font-medium">{course.description}</p>
                     <div className="grid grid-cols-2 gap-4">
                        {course.objectives.map((obj, i) => (
                          <div key={i} className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100/50">
                             <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                             <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{obj}</span>
                          </div>
                        ))}
                     </div>
                  </div>
                )}
                
                {activeTab === 'Notes' && (
                  <div className="space-y-6">
                     <textarea
                       className="w-full h-48 p-6 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-brand-orange/5 transition-all text-slate-600 font-medium placeholder:text-slate-400"
                       placeholder="Take your lesson notes here... AI is listening to key points."
                       value={note}
                             onChange={(e) => setNote(e.target.value)}
                     />
                     <div className="flex gap-4">
                        <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-black transition-all shadow-xl">
                           Auto-Save Enabled
                        </button>
                        <button className="px-8 py-4 bg-white border border-slate-100 text-slate-500 rounded-xl font-black text-[10px] uppercase tracking-widest hover:text-slate-900 transition-all">
                           Export (MD)
                        </button>
                     </div>
                  </div>
                )}

                {activeTab === 'Resources' && (
                  <div className="grid md:grid-cols-2 gap-6">
                     {[
                       { name: 'Unit 1 SLM', type: 'PDF', icon: FileText },
                       { name: 'Formula Sheet', type: 'IMG', icon: PenTool },
                     ].map((r, i) => (
                       <div key={i} className="group p-6 bg-slate-50 hover:bg-white border border-slate-100 rounded-xl flex items-center justify-between transition-all hover:shadow-xl">
                          <div className="flex items-center gap-4">
                             <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform">
                                <r.icon size={20} />
                             </div>
                             <div>
                                <div className="text-xs font-black text-slate-900">{r.name}</div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{r.type} · 2.4MB</div>
                             </div>
                          </div>
                          <button className="p-3 bg-white text-slate-400 hover:text-slate-900 rounded-xl shadow-sm"><Download size={18} /></button>
                       </div>
                     ))}
                  </div>
                )}
             </div>
          </div>
        </div>

        {/* Sidebar Space */}
        <aside className="space-y-8 lg:sticky lg:top-8">
           {/* AI Summary Sidebar */}
           {showAISummary && (
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               className="p-8 bg-slate-900 rounded-xl text-white shadow-2xl relative overflow-hidden group"
             >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 rounded-full blur-3xl" />
                <div className="flex items-center justify-between mb-8">
                   <h4 className="text-sm font-black uppercase tracking-tight flex items-center gap-2">
                      <Sparkles size={18} className="text-brand-orange" /> Gemini Summary
                   </h4>
                   <button onClick={() => setShowAISummary(false)} className="text-white/40 hover:text-white transition-colors"><X size={18} /></button>
                </div>
                <div className="space-y-6">
                   <div className="p-5 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-[8px] font-black text-brand-orange uppercase tracking-widest mb-2">Key Concept</div>
                      <p className="text-xs leading-relaxed text-white/80">{course.summary}</p>
                   </div>
                   <div className="flex flex-col gap-3">
                      {['3 Laws Identified', 'Solved Examples included', 'Assignment Help available'].map(t => (
                        <div key={t} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
                           <div className="w-1.5 h-1.5 bg-brand-orange rounded-full shadow-[0_0_8px_rgba(255,107,0,1)]" /> {t}
                        </div>
                      ))}
                   </div>
                   <button className="w-full py-4 bg-brand-orange text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all">
                      Deep Dive with AI
                   </button>
                </div>
             </motion.div>
           )}

           {/* Curriculum Progress */}
           <div className="p-8 bg-white rounded-xl border border-slate-100 shadow-sm space-y-8">
              <div className="space-y-4">
                 <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <span>Course Content</span>
                    <span className="text-slate-900 font-bold">12/24</span>
                 </div>
                 <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-orange w-1/2" />
                 </div>
              </div>

              <div className="space-y-2 overflow-y-auto max-h-[400px] pr-2 scrollbar-hide">
                 {lessons.map((l) => (
                   <button 
                     key={l.id} 
                     onClick={() => setActiveLesson(l.id)}
                     className={`w-full group p-4 flex items-center gap-4 rounded-xl transition-all ${
                       activeLesson === l.id 
                         ? 'bg-slate-900 text-white shadow-xl' 
                         : 'hover:bg-slate-50 text-slate-500'
                     }`}
                   >
                     <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                       activeLesson === l.id 
                         ? 'bg-brand-orange border-brand-orange/20 text-white' 
                         : 'bg-white border-slate-100'
                     }`}>
                        {l.done ? <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" /> : (l.type === 'video' ? <Play size={18} /> : <FileText size={18} />)}
                     </div>
                     <div className="text-left min-w-0">
                        <div className={`text-[10px] font-black uppercase tracking-tight truncate ${activeLesson === l.id ? 'text-white' : 'text-slate-900'}`}>
                           {l.title}
                        </div>
                        <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{l.duration} · {l.type}</div>
                     </div>
                   </button>
                 ))}
              </div>

              <button className="w-full py-5 bg-slate-50 border border-slate-100 text-slate-500 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                 Download Full Syllabus
              </button>
           </div>
        </aside>
      </div>
    </DashboardLayout>
  );
}

