'use client';
import DashboardLayout from '@/components/DashboardLayout';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import {
   Award,
   Flame,
   Star,
   Crown,
   Trophy,
   Users,
   TrendingUp,
   GraduationCap,
   Zap,
   Target,
   Medal,
   Calendar,
   Share2,
   Download,
   ChevronRight,
   Eye,
   Shield,
   Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const stats = [
   { icon: Award, label: 'Total Badges', value: '28', color: 'text-brand-orange bg-brand-orange/10' },
   { icon: Flame, label: 'Streak', value: '47 Days', color: 'text-red-500 bg-red-50' },
   { icon: Users, label: 'Global Rank', value: '#127', color: 'text-blue-500 bg-blue-50' },
   { icon: TrendingUp, label: 'Avg Accuracy', value: '94.2%', color: 'text-emerald-500 bg-emerald-50' },
];

const badges = [
   { icon: Trophy, title: 'Physics Master', subtitle: 'Top 1% in Class 12 Physics', date: 'Mar 15, 2026', subject: 'Science', tier: 'Gold' },
   { icon: Crown, title: 'Streak Legend', subtitle: '47 consecutive days', date: 'Today', subject: 'All', tier: 'Gold' },
   { icon: Star, title: 'Perfect Score', subtitle: 'Mathematics TMA', date: 'Mar 10', subject: 'Maths', tier: 'Silver' },
   { icon: Medal, title: 'Weekly Leader', subtitle: 'Science category', date: 'Mar 8', subject: 'Science', tier: 'Silver' },
   { icon: GraduationCap, title: 'Course Complete', subtitle: 'English Literature', date: 'Feb 28', subject: 'English', tier: 'Bronze' },
   { icon: Zap, title: 'Lightning Quiz', subtitle: '<1 min average', date: 'Mar 12', subject: 'All', tier: 'Bronze' },
];

const milestones = [
   { icon: Target, title: 'First Lesson', date: 'Jan 5, 2026', desc: 'Started NIOS journey' },
   { icon: Award, title: 'First Badge', date: 'Jan 12', desc: 'Earned bronze achievement' },
   { icon: Flame, title: '7-Day Streak', date: 'Jan 20', desc: 'Consistency milestone' },
   { icon: Star, title: 'Top Performer', date: 'Feb 15', desc: 'Monthly leaderboard' },
];

const leaderboard = [
   { rank: 1, name: 'Priya Nair', score: 98.4, change: '+2', avatar: 'PN' },
   { rank: 2, name: 'Arjun Sharma', score: 95.2, change: '+1', isUser: true, avatar: 'AS' },
   { rank: 3, name: 'Rahul Das', score: 92.8, change: '0', avatar: 'RD' },
   { rank: 4, name: 'Sonal Mehta', score: 89.1, change: '-1', avatar: 'SM' },
   { rank: 5, name: 'Kavita Rao', score: 87.5, change: '+3', avatar: 'KR' },
];

export default function AchievementsPage() {
   const { user } = useAuth();
   const router = useRouter();

   if (!user) return null;

   // Role based access - Guests shouldn't be here
   if (user.role === 'guest') {
      router.push('/dashboard/guest');
      return null;
   }

   return (
      <DashboardLayout title="Achievements" subtitle="Monitor your academic excellence and milestones">
         
         {/* Premium Hero Stats */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((s, i) => {
               const Icon = s.icon;
               return (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-brand-orange/20 transition-all duration-500 relative overflow-hidden"
                  >
                     <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-700" />
                     <div className={`w-12 h-12 rounded-2xl ${s.color} flex items-center justify-center mb-6`}>
                        <Icon size={24} />
                     </div>
                     <div className="text-3xl font-black text-slate-900 mb-1">{s.value}</div>
                     <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{s.label}</div>
                  </motion.div>
               );
            })}
         </div>

         <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">
            
            <div className="space-y-12">
               {/* Medallion Badges */}
               <section>
                  <div className="flex items-center justify-between mb-8">
                     <div>
                        <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Merit Badges</h2>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Recognizing specialized excellence</p>
                     </div>
                     <button className="px-6 py-3 bg-slate-50 text-slate-500 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                        Library View
                     </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {badges.map((badge, i) => {
                        const Icon = badge.icon;
                        const tierColor = badge.tier === 'Gold' ? 'from-amber-200 to-yellow-500' : badge.tier === 'Silver' ? 'from-slate-200 to-slate-400' : 'from-orange-200 to-orange-400';
                        return (
                           <motion.div 
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                              key={i} 
                              className="group relative"
                           >
                              <div className="relative z-10 p-8 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 text-center space-y-4">
                                 <div className="relative mx-auto w-24 h-24">
                                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${tierColor} opacity-20 blur-xl group-hover:scale-150 transition-transform duration-700`} />
                                    <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${tierColor} p-0.5 shadow-xl`}>
                                       <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-slate-900">
                                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${tierColor} flex items-center justify-center text-white shadow-inner`}>
                                             <Icon size={32} />
                                          </div>
                                       </div>
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center">
                                       <Sparkles size={14} className="text-brand-orange" />
                                    </div>
                                 </div>
                                 
                                 <div>
                                    <h3 className="text-sm font-black text-slate-900 leading-tight uppercase tracking-tight">{badge.title}</h3>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{badge.subtitle}</p>
                                 </div>

                                 <div className="flex items-center justify-center gap-2 pt-2">
                                    <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange text-[8px] font-black uppercase tracking-widest rounded-full">{badge.subject}</span>
                                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">{badge.date}</span>
                                 </div>
                              </div>
                           </motion.div>
                        );
                     })}
                  </div>
               </section>

               {/* Journey Timeline */}
               <section className="p-10 bg-slate-50 rounded-[4rem] border border-slate-100">
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-10 flex items-center gap-3">
                     <TrendingUp className="text-brand-orange" size={24} /> Journey Path
                  </h3>
                  <div className="relative space-y-12">
                     <div className="absolute left-[23px] top-4 bottom-4 w-px bg-slate-200 border-dashed border-l-2" />
                     {milestones.map((m, i) => {
                        const Icon = m.icon;
                        return (
                           <div key={i} className="relative flex items-start gap-8 group">
                              <div className="relative z-10 w-12 h-12 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center text-slate-400 group-hover:border-brand-orange group-hover:text-brand-orange transition-all duration-300 shadow-sm">
                                 <Icon size={20} />
                              </div>
                              <div className="flex-1 pt-1">
                                 <div className="flex items-center gap-3 mb-1">
                                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{m.title}</h4>
                                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{m.date}</span>
                                 </div>
                                 <p className="text-xs text-slate-500 font-medium leading-relaxed">{m.desc}</p>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </section>
            </div>

            {/* Sidebar Column */}
            <aside className="space-y-8 lg:sticky lg:top-8">
               {/* World Leaderboard Podium */}
               <div className="p-8 bg-slate-900 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 rounded-full blur-3xl" />
                  <div className="flex items-center justify-between mb-8">
                     <h4 className="text-sm font-black uppercase tracking-tight flex items-center gap-3">
                        <Trophy size={20} className="text-brand-orange" /> World Rank
                     </h4>
                     <button className="text-[10px] font-black text-white/40 uppercase tracking-widest hover:text-white transition-colors">By Subject</button>
                  </div>

                  <div className="space-y-4">
                     {leaderboard.map((u, i) => {
                        const isUser = u.isUser;
                        const isPodium = u.rank <= 3;
                        return (
                           <div key={i} className={`group flex items-center justify-between p-4 rounded-3xl transition-all ${isUser ? 'bg-white text-slate-900 shadow-[0_0_30px_rgba(255,107,0,0.3)] scale-105' : 'hover:bg-white/5'}`}>
                              <div className="flex items-center gap-4">
                                 <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-[10px] font-black ${
                                    isUser ? 'bg-brand-orange text-white' : 
                                    u.rank === 1 ? 'bg-yellow-500/20 text-yellow-500' : 
                                    u.rank === 2 ? 'bg-slate-400/20 text-slate-400' :
                                    u.rank === 3 ? 'bg-orange-400/20 text-orange-400' :
                                    'bg-white/5 text-white/40'
                                 }`}>
                                    {isPodium ? <Crown size={14} /> : `#${u.rank}`}
                                 </div>
                                 <div>
                                    <div className="text-xs font-black uppercase tracking-tight flex items-center gap-2">
                                       {u.name} {isUser && <Shield size={10} className="text-brand-orange" />}
                                    </div>
                                    <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Growth {u.change}</div>
                                 </div>
                              </div>
                              <div className="text-right">
                                 <div className={`text-xs font-black ${isUser ? 'text-slate-900' : 'text-white'}`}>{u.score}%</div>
                                 <div className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Avg Accuracy</div>
                              </div>
                           </div>
                        );
                     })}
                  </div>

                  <button className="w-full mt-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                     View Regional Board
                  </button>
               </div>

               {/* Share & Showcase */}
               <div className="p-10 bg-white rounded-[3.5rem] border border-slate-100 shadow-sm text-center space-y-6">
                  <div className="w-16 h-16 bg-slate-50 rounded-[2rem] flex items-center justify-center text-slate-400 mx-auto shadow-inner">
                     <Share2 size={24} />
                  </div>
                  <div>
                     <h5 className="text-sm font-black text-slate-900 uppercase tracking-tight">Showcase Success</h5>
                     <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1 leading-relaxed">Publish your achievements to your portfolio</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <button className="py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-2">
                        <Share2 size={12} /> Share
                     </button>
                     <button className="py-4 bg-slate-50 text-slate-500 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2">
                        <Download size={12} /> Save
                     </button>
                  </div>
               </div>
            </aside>
         </div>
      </DashboardLayout>
   );
}
