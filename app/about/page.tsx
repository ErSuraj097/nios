'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { 
  History, 
  Target, 
  MapPin, 
  Globe, 
  Award, 
  Users, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  BookOpen,
  PieChart,
  Video,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const stats = [
  { label: 'Cumulative Enrollment', value: '4.1M+', desc: 'World\'s Largest Open School', color: 'text-brand-orange' },
  { label: 'Regional Centres', value: '23', desc: 'Across India', color: 'text-blue-500' },
  { label: 'Accredited Institutions', value: '6,600+', desc: 'Support Network', color: 'text-emerald-500' },
  { label: 'Courses Offered', value: '100+', desc: 'Academic & Vocational', color: 'text-purple-500' },
];

const timeline = [
  { year: '1979', event: 'Open School project started by CBSE' },
  { year: '1989', event: 'Amalgamated into National Open School (NOS)' },
  { year: '2002', event: 'Renamed to National Institute of Open Schooling (NIOS)' },
  { year: '2020', event: 'Migration to NEP 2020 guidelines' },
  { year: '2026', event: 'AI-Native LMS Integration' },
];

export default function AboutPage() {
  return (
    <DashboardLayout 
      title="Institutional Profile" 
      subtitle="Discover the mission, heritage, and visionary future of NIOS"
    >
      <div className="space-y-20 animate-fade-in pb-20 px-4 md:px-0">
        
        {/* Vision & Mission Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-100 rounded-xl text-[10px] font-black text-brand-orange uppercase tracking-[0.3em]">
                 <Target size={14} /> Our Mission
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight tracking-tighter">
                 Reaching the <span className="text-brand-orange">Unreached.</span>
              </h2>
              <p className="text-lg font-medium text-slate-500 leading-relaxed max-w-xl">
                 NIOS is committed to sustainable inclusive learning through open and distance excellence, ensuring "Education for All" under the National Education Policy 2020.
              </p>
              <div className="flex gap-6">
                 <div className="p-8 rounded-xl bg-white border border-slate-100 shadow-sm flex-1">
                    <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-4">Vision</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">To be a leader in the global open schooling movement by providing high-quality, flexible education.</p>
                 </div>
                 <div className="p-8 rounded-xl bg-slate-900 text-white shadow-xl flex-1 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-brand-orange/20 rounded-full blur-2xl group-hover:scale-150 transition-all duration-1000" />
                    <h4 className="text-sm font-black uppercase tracking-widest mb-4">Values</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">Inclusivity, Flexibility, and Excellence in academic outcomes.</p>
                 </div>
              </div>
           </div>

           <div className="relative">
              <div className="aspect-video rounded-xl bg-slate-100 border border-slate-200 overflow-hidden relative shadow-2xl group">
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-center justify-center">
                    <button className="w-20 h-20 rounded-full bg-brand-orange text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl shadow-orange-500/40">
                       <Video size={32} />
                    </button>
                 </div>
                 <div className="absolute top-8 left-8 text-white">
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Featured Presentation</div>
                    <div className="text-xl font-black tracking-tight">Institutional Overview 2026</div>
                 </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl" />
           </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
           {stats.map((s, i) => (
             <motion.div 
               key={i}
               whileHover={{ y: -5 }}
               className="p-10 rounded-xl bg-white border border-slate-100 shadow-sm text-center"
             >
                <div className={`text-4xl lg:text-5xl font-black mb-2 tracking-tighter ${s.color}`}>{s.value}</div>
                <div className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-1">{s.label}</div>
                <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{s.desc}</div>
             </motion.div>
           ))}
        </div>

        {/* Heritage Timeline */}
        <div className="p-12 lg:p-20 rounded-xl bg-slate-50 border border-slate-100">
           <div className="max-w-4xl mx-auto space-y-16">
              <div className="text-center space-y-4">
                 <h3 className="text-[10px] font-black text-brand-orange uppercase tracking-[0.4em]">Our Legacy</h3>
                 <h2 className="text-4xl font-black text-slate-900">Decades of Educational Innovation</h2>
              </div>
              
              <div className="space-y-12">
                 {timeline.map((item, i) => (
                   <div key={i} className="flex gap-12 group">
                      <div className="w-24 shrink-0 text-right">
                         <div className="text-2xl font-black text-slate-900 group-hover:text-brand-orange transition-colors">{item.year}</div>
                      </div>
                      <div className="relative flex flex-col items-center">
                         <div className="w-3 h-3 rounded-full bg-brand-orange relative z-10" />
                         {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-slate-200 my-2" />}
                      </div>
                      <div className="pb-12 text-lg font-bold text-slate-600">
                         {item.event}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Leadership & Network */}
        <div className="grid lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 p-12 rounded-xl bg-white border border-slate-100 shadow-sm space-y-12">
              <div className="flex items-center justify-between">
                 <div>
                    <h3 className="text-2xl font-black text-slate-900">Regional Outreach</h3>
                    <p className="text-sm font-medium text-slate-500">Global network spanning multiple zones</p>
                 </div>
                 <Globe className="text-brand-orange opacity-20" size={48} />
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                 {['North Zone', 'South Zone', 'East Zone', 'West Zone', 'North-East', 'International'].map((zone) => (
                    <div key={zone} className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-orange/20 transition-all cursor-pointer">
                       <MapPin size={16} className="text-brand-orange mb-4" />
                       <div className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{zone}</div>
                    </div>
                 ))}
              </div>
              <button className="w-full py-5 bg-slate-900 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-orange transition-all flex items-center justify-center gap-2">
                 Locate Your Regional Centre <ChevronRight size={14} />
              </button>
           </div>

           <div className="space-y-8">
              <div className="p-10 rounded-xl bg-gradient-to-br from-brand-orange to-red-500 text-white shadow-xl relative overflow-hidden">
                 <Sparkles className="absolute top-8 right-8 opacity-20" size={32} />
                 <h4 className="text-[10px] font-black uppercase tracking-widest mb-8 opacity-60 text-white">Innovation Hub</h4>
                 <h3 className="text-2xl font-black leading-tight mb-6">Pioneering AI Integrated Learning in India.</h3>
                 <p className="text-xs font-medium text-white/80 leading-relaxed mb-8 uppercase tracking-widest font-black">Leading the digital transformation of open schooling.</p>
                 <button className="px-8 py-4 bg-white text-brand-orange rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg">Learn More</button>
              </div>

              <div className="p-10 rounded-xl bg-white border border-slate-100 shadow-sm text-center">
                 <ShieldCheck className="w-12 h-12 mx-auto mb-6 text-emerald-500 opacity-20" />
                 <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-2">Accreditation</h4>
                 <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest leading-relaxed">Fully recognized as an autonomous institution under Ministry of Education, Govt. of India.</p>
              </div>
           </div>
        </div>

        {/* Documents & Portal Links */}
        <div className="flex flex-wrap gap-4 justify-center">
           {[
             { label: 'Citizen\'s Charter', icon: BookOpen },
             { label: 'Annual Reports', icon: PieChart },
             { label: 'Official Gazette', icon: Award },
             { label: 'Academic Council', icon: Users },
           ].map((link, i) => (
             <button key={i} className="px-8 py-5 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-xl hover:border-brand-orange/20 transition-all flex items-center gap-4 group">
                <link.icon size={18} className="text-brand-orange group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{link.label}</span>
                <ExternalLink size={12} className="text-slate-300" />
             </button>
           ))}
        </div>

      </div>
    </DashboardLayout>
  );
}
