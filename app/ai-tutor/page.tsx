'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import AICallInterface from '@/components/AICallInterface';
import { 
  Send, 
  Sparkles, 
  Brain, 
  Lightbulb, 
  MessageSquare,
  Mic,
  Paperclip,
  History,
  Zap,
  ArrowRight,
  FileText,
  Video as VideoIcon,
  Phone
} from 'lucide-react';

export default function AITutorPage() {
  const { user } = useAuth();
  const [input, setInput] = useState('');
  const [isCalling, setIsCalling] = useState(false);

  if (!user) return null;

  const suggestions = [
    { title: 'Explain Gravitation', sub: 'Simplified with examples', icon: Lightbulb, color: 'text-amber-500 bg-amber-50' },
    { title: 'Practice Quiz', sub: 'Chapter 4: Cell Biology', icon: Zap, color: 'text-purple-500 bg-purple-50' },
    { title: 'Review My Essay', sub: 'Grammar & Tone check', icon: Brain, color: 'text-emerald-500 bg-emerald-50' },
  ];

  return (
    <DashboardLayout 
      title="Personal AI Tutor" 
      subtitle="Your 24/7 Academic companion for NIOS Curriculum"
    >
      <div className="grid lg:grid-cols-[1fr_320px] gap-8 h-[calc(100vh-210px)] max-h-[800px]">
        {/* Chat Interface */}
        <div className="flex flex-col bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden animate-fade-in relative">
          <div className="absolute top-0 inset-0 bg-gradient-to-b from-orange-50/20 to-transparent pointer-events-none" />
          
          <div className="p-6 border-b border-slate-50 bg-white/50 backdrop-blur-md z-10 flex items-center justify-between">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange ring-4 ring-orange-50">
                 <Sparkles size={20} />
               </div>
               <div>
                 <div className="text-sm font-black text-slate-900 uppercase tracking-tight">NIOS Intelligent Assistant</div>
                 <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-1">
                   <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Optimizing for Class {user.details.class || 'Secondary'}
                 </div>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <button 
                onClick={() => setIsCalling(true)}
                className="px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-brand-orange hover:text-white transition-all"
               >
                 <VideoIcon size={14} /> Start AI Video Call
               </button>
               <button className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-400">
                 <History size={20} />
               </button>
             </div>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
            <div className="max-w-xl mx-auto space-y-8">
              <div className="flex gap-4 animate-slide-up">
                 <div className="w-8 h-8 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                   <Sparkles size={16} />
                 </div>
                 <div className="p-6 bg-slate-50 text-slate-900 rounded-[2rem] rounded-tl-none border border-slate-100 text-sm leading-relaxed font-medium shadow-sm">
                   Hello {user.name}! I'm your NIOS AI Tutor. How can I help you excel in your studies today? I can explain complex concepts, help with TMAs, or generate practice quizzes.
                 </div>
              </div>

              {input === '' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 animate-fade-in">
                  {suggestions.map((s, i) => (
                    <button key={i} className="p-6 text-left rounded-3xl bg-white border border-slate-100 hover:border-brand-orange/30 hover:shadow-xl transition-all group">
                      <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <s.icon size={20} />
                      </div>
                      <div className="text-xs font-black text-slate-900 mb-1 uppercase tracking-tight">{s.title}</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase leading-tight">{s.sub}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="p-6 bg-white z-10">
            <div className="max-w-2xl mx-auto relative group">
               <textarea 
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 placeholder="Message your AI Tutor..." 
                 className="w-full bg-slate-50 border border-slate-100 rounded-[2.5rem] py-5 px-8 pr-32 text-sm focus:outline-none focus:ring-4 focus:ring-brand-orange/5 focus:border-brand-orange/20 transition-all resize-none shadow-sm min-h-[64px]"
                 rows={1}
               />
               <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                 <button 
                  onClick={() => setIsCalling(true)}
                  className="p-2 text-slate-400 hover:text-brand-orange transition-colors"
                 >
                   <Mic size={20} />
                 </button>
                 <button className="p-2 text-slate-400 hover:text-brand-orange transition-colors">
                   <Paperclip size={20} />
                 </button>
                 <button className={`p-2.5 rounded-2xl bg-brand-orange text-white shadow-lg shadow-orange-500/20 active:scale-95 transition-all ${input ? 'opacity-100' : 'opacity-50 grayscale cursor-not-allowed'}`}>
                   <Send size={18} fill="currentColor" />
                 </button>
               </div>
            </div>
            <div className="text-center mt-4">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">AI can make mistakes. Check important academic info.</span>
            </div>
          </div>
        </div>

        {/* Knowledge Context */}
        <div className="space-y-6">
           <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl" />
              <h3 className="font-black uppercase tracking-tight mb-6 flex items-center gap-2">
                <Brain size={20} className="text-brand-orange" /> Learning Context
              </h3>
              <div className="space-y-4">
                 <div>
                   <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Current Subject</div>
                   <div className="text-sm font-black text-white">Advanced Physics</div>
                 </div>
                 <div>
                   <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Focus Area</div>
                   <div className="text-sm font-black text-white">Quantum Mechanics</div>
                 </div>
                 <div className="pt-4 mt-4 border-t border-white/10">
                    <button className="flex items-center justify-between w-full p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all">
                       <span className="text-[10px] font-black uppercase tracking-widest">View Concept Map</span>
                       <ArrowRight size={14} />
                    </button>
                 </div>
              </div>
           </div>

           <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm overflow-hidden relative">
              <h3 className="font-black uppercase tracking-tight mb-6">Recent Resources</h3>
              <div className="space-y-4">
                 {[
                   { type: 'SLM', title: 'Chapter 4: Cell Structure', icon: FileText },
                   { type: 'VIDEO', title: 'Calculus Intro', icon: MessageSquare },
                   { type: 'QUIZ', title: 'English Mock Test', icon: Lightbulb },
                 ].map((r, i) => (
                   <button key={i} className="flex items-center gap-4 w-full p-4 hover:bg-slate-50 transition-colors text-left group rounded-2xl border border-transparent hover:border-slate-100">
                     <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:text-brand-orange transition-colors">
                       <r.icon size={18} />
                     </div>
                     <div className="flex-1 min-w-0">
                       <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{r.type}</div>
                       <div className="text-xs font-black text-slate-900 truncate">{r.title}</div>
                     </div>
                   </button>
                 ))}
              </div>
           </div>
        </div>
      </div>
      <AnimatePresence>
        {isCalling && (
          <AICallInterface 
            userName={user.name} 
            onEndCall={() => setIsCalling(false)} 
          />
        )}
      </AnimatePresence>
    </DashboardLayout>
  );
}
