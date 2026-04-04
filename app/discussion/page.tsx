'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';
import { 
  MessageCircle, 
  Users, 
  ThumbsUp, 
  Share2, 
  Image as ImageIcon, 
  Video, 
  PieChart, 
  Map, 
  MoreVertical, 
  BookOpen, 
  Send, 
  ChevronDown, 
  GraduationCap, 
  Award,
  Zap,
  TrendingUp,
  Sparkles,
  Search,
  Filter
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const feeds = [
  { id: 1, user: 'Arjun Sharma', role: 'Learner', avatar: 'A', text: 'Just finished Chapter 4! The AI Tutor was super helpful for Newton\'s Laws. Highly recommend checking out the practice test.', time: '2h ago', likes: 12, comments: 4, type: 'Achievement' },
  { id: 2, user: 'Dr. Vikram Mehta', role: 'Teacher', avatar: 'V', text: 'Important: I\'ve added a new simulation for Circular Motion. Check it out in the Physics Resource folder!', time: '4h ago', likes: 45, comments: 8, type: 'Announcement', isTeacher: true },
  { id: 3, user: 'Priya Nair', role: 'Learner', avatar: 'P', text: 'Anyone else struggling with Question 12 on the Algebra quiz? Let\'s discuss in the Maths group.', time: '5h ago', likes: 8, comments: 15, type: 'Help' },
  { id: 4, user: 'NIOS Official', role: 'Admin', avatar: 'N', text: 'National Science Day Virtual Exhibition starts tomorrow. Register now to showcase your projects!', time: '1d ago', likes: 128, comments: 32, type: 'Event', isOfficial: true },
];

const groups = [
  { id: 1, name: 'Physics Enthusiasts', members: '1.2k', activity: 'High' },
  { id: 2, name: 'Algebra Solvers', members: '840', activity: 'Active' },
  { id: 3, name: 'Delhi Region Learners', members: '15k', activity: 'High' },
  { id: 4, name: 'English Literature Cup', members: '450', activity: 'Medium' },
];

export default function DiscussionHub() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('Social Feed');

  if (!user) return null;

  return (
    <DashboardLayout 
      title="Collaboration Hub" 
      subtitle="Engage with national faculty, join peer groups, and share your academic journey"
    >
      <div className="grid lg:grid-cols-[300px_1fr_340px] gap-8 items-start animate-fade-in pb-20">
        
        {/* Left - Groups & Topics */}
        <div className="space-y-8 flex flex-col items-center">
           <div className="w-full p-8 rounded-[3rem] bg-white border border-slate-100 shadow-sm overflow-hidden group">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Active Communities</h3>
              <div className="space-y-2">
                 {groups.map((g) => (
                   <button key={g.id} className="w-full p-4 rounded-2xl flex items-center gap-4 hover:bg-orange-50 transition-all text-left group">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all shadow-sm">
                         <Users size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                         <div className="text-sm font-black text-slate-900 truncate tracking-tight">{g.name}</div>
                         <div className="text-[10px] font-black text-slate-400 uppercase">{g.members} Members</div>
                      </div>
                   </button>
                 ))}
              </div>
              <button className="w-full mt-6 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-200">Discover More</button>
           </div>

           <div className="w-full p-8 rounded-[3rem] bg-slate-50 border border-slate-100 shadow-sm">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Trending Tags</h3>
              <div className="flex flex-wrap gap-2">
                 {['#NEP2020', '#NIOSSuccess', '#FutureLeaders', '#QuantumBasics', '#ArtsRenaissance'].map((t) => (
                   <span key={t} className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-[10px] font-black text-slate-500 uppercase tracking-widest cursor-pointer hover:border-brand-orange hover:text-brand-orange transition-all">
                      {t}
                   </span>
                 ))}
              </div>
           </div>
        </div>

        {/* Center - Feed */}
        <div className="space-y-8">
           {/* Post Input */}
           <div className="p-8 rounded-[3rem] bg-white border border-slate-100 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-3xl group-hover:scale-150 transition-all duration-1000" />
              <div className="flex gap-6 mb-6">
                 <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center font-black text-white text-lg shrink-0 shadow-lg">
                    {user.name.charAt(0)}
                 </div>
                 <textarea 
                    className="flex-1 p-0 border-none focus:ring-0 text-slate-600 font-medium placeholder:text-slate-300 resize-none min-h-[60px] bg-transparent pt-4"
                    placeholder="Share your academic progress or ask a question..."
                 />
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                 <div className="flex gap-2">
                    {[ImageIcon, Video, PieChart].map((Icon, i) => (
                      <button key={i} className="p-3 bg-slate-50 text-slate-400 hover:text-brand-orange hover:bg-orange-50 rounded-xl transition-all">
                         <Icon size={18} />
                      </button>
                    ))}
                 </div>
                 <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-orange transition-all shadow-xl shadow-slate-200 active:scale-95 flex items-center gap-2">
                    Push to Feed <Send size={14} />
                 </button>
              </div>
           </div>

           {/* Tabs */}
           <div className="flex gap-2 p-2 bg-slate-50 rounded-[2rem] border border-slate-100">
              {['Social Feed', 'Q&A Discussions', 'Faculty Blogs', 'Official'].map((t) => (
                <button 
                  key={t}
                  onClick={() => setActiveTab(t)}
                  className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest rounded-3xl transition-all ${
                    activeTab === t ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {t}
                </button>
              ))}
           </div>

           {/* Feed List */}
           <div className="space-y-6">
              {feeds.map((f) => (
                <div key={f.id} className="group p-8 rounded-[3rem] bg-white border border-slate-100 hover:border-brand-orange/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex flex-col gap-6 relative overflow-hidden">
                   <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                         <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-white text-sm shadow-md ${
                           f.isTeacher ? 'bg-emerald-500' : f.isOfficial ? 'bg-brand-orange' : 'bg-slate-900'
                         }`}>
                           {f.avatar}
                         </div>
                         <div>
                            <div className="flex items-center gap-3">
                               <h4 className="text-sm font-black text-slate-900">{f.user}</h4>
                               <span className={`px-2 py-0.5 rounded-lg text-[8px] font-black uppercase tracking-widest ${
                                 f.isTeacher ? 'bg-emerald-50 text-emerald-500' : f.isOfficial ? 'bg-orange-50 text-brand-orange' : 'bg-slate-50 text-slate-400'
                               }`}>
                                 {f.role}
                               </span>
                            </div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{f.time} · {f.type}</div>
                         </div>
                      </div>
                      <button className="p-2 bg-slate-50 text-slate-400 hover:text-slate-900 rounded-xl transition-all">
                         <MoreVertical size={16} />
                      </button>
                   </div>
                   
                   <p className="text-sm font-medium text-slate-600 leading-relaxed max-w-2xl px-2">
                      {f.text}
                   </p>

                   <div className="flex items-center gap-8 pt-4 border-t border-slate-50">
                      <button className="flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-brand-orange uppercase tracking-widest transition-all">
                         <ThumbsUp size={16} /> {f.likes} Likes
                      </button>
                      <button className="flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-brand-orange uppercase tracking-widest transition-all">
                         <MessageCircle size={16} /> {f.comments} Comments
                      </button>
                      <button className="flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-brand-orange uppercase tracking-widest transition-all">
                         <Share2 size={16} /> Share Activity
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Right - Insights & Blogs */}
        <div className="space-y-8">
           {/* Featured Blog CTA */}
           <div className="p-10 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-all duration-1000" />
              <div className="flex items-center gap-3 mb-8">
                 <BookOpen className="text-brand-orange" size={24} />
                 <h3 className="font-black uppercase tracking-tight text-white">Academic Blogs</h3>
              </div>
              <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
                 <div className="text-[8px] font-black text-brand-orange uppercase tracking-widest mb-2">Editor's Pick</div>
                 <h4 className="text-sm font-black text-white leading-tight mb-4">Bridging the Gap: NEP 2020 & Open Schooling Systems</h4>
                 <div className="flex items-center justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    <span>By Dr. Amit Kumar</span>
                    <span>15m Read</span>
                 </div>
              </div>
              <button className="w-full mt-6 py-4 bg-brand-orange text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">Explore Library</button>
           </div>

           {/* Challenges */}
           <div className="p-8 rounded-[3rem] bg-white border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-8">
                 <Award className="text-brand-orange" size={24} />
                 <h3 className="font-black uppercase tracking-tight text-slate-900">Peer Challenges</h3>
              </div>
              <div className="space-y-4">
                 {[
                   { title: 'The Physics Race', players: 45, prize: '50 XP', color: 'blue' },
                   { title: 'Maths Duel: Algebra', players: 12, prize: 'Silver Badge', color: 'orange' },
                 ].map((c, i) => (
                   <div key={i} className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group/item">
                      <div className="text-xs font-black text-slate-900 mb-2 truncate group-hover/item:text-brand-orange transition-colors">{c.title}</div>
                      <div className="flex justify-between items-center mb-6">
                         <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{c.players} Global Players</div>
                         <div className="text-[10px] font-black text-brand-orange uppercase tracking-widest underline underline-offset-4">{c.prize}</div>
                      </div>
                      <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-orange transition-all shadow-sm flex items-center justify-center gap-2">
                         Enter Challenge <Zap size={14} />
                      </button>
                   </div>
                 ))}
              </div>
           </div>

           {/* Support Map */}
           <div className="p-10 rounded-[3rem] bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm text-center">
              <Map className="w-10 h-10 mx-auto mb-4 text-blue-500 opacity-50" />
              <h4 className="text-sm font-black text-slate-900 mb-2 uppercase tracking-tight">NIOS Ecosystem Map</h4>
              <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest leading-relaxed mb-8">Guided virtual tour of the digital learning infrastructure.</p>
              <button className="w-full py-4 bg-white border border-blue-100 text-blue-600 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-50 transition-all shadow-lg shadow-blue-500/10">Start Orientation</button>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
