'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { 
  Download, 
  Printer, 
  Search, 
  Filter, 
  CheckCircle2, 
  GraduationCap, 
  Award, 
  Calendar, 
  User, 
  ShieldCheck, 
  Eye, 
  Share2, 
  QrCode, 
  FileText,
  ChevronRight,
  MoreVertical,
  Zap,
  Sparkles
} from "lucide-react";
import { useState } from "react";
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

interface Certificate {
  id: string;
  title: string;
  type: "Secondary" | "Senior Secondary" | "TMA" | "Course" | "Diploma";
  issueDate: string;
  rollNumber: string;
  certificateNumber: string;
  status: "Verified" | "Active";
  image: string;
}

const mockCertificates: Certificate[] = [
  {
    id: "cert-001",
    title: "Secondary School Certificate - Science Stream",
    type: "Secondary",
    issueDate: "April 15, 2026",
    rollNumber: "NIOS/2026/100001",
    certificateNumber: "NIOS/SSC/2026/0001",
    status: "Verified",
    image: "/xx.jpg",
  },
  {
    id: "cert-002", 
    title: "Tutor Marked Assignment - Mathematics (Class 10)",
    type: "TMA",
    issueDate: "March 20, 2026",
    rollNumber: "NIOS/2026/100001", 
    certificateNumber: "NIOS/TMA/MATH10/2026/01",
    status: "Verified",
    image: "/xx.jpg",
  },
];

export default function CertificatesPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  if (!user) return null;

  // Role based access - Guests shouldn't be here
  if (user.role === 'guest') {
    router.push('/dashboard/guest');
    return null;
  }

  return (
    <DashboardLayout 
      title="Credentials & Certification" 
      subtitle="Official NIOS digital certificates and blockchain-verified academic transcripts"
    >
      <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start animate-fade-in pb-20">
        
        {/* Main Certificate Feed */}
        <div className="space-y-10">
           {/* Actions & Filters */}
           <div className="flex flex-col md:flex-row gap-4 items-center justify-between px-4">
              <div className="relative w-full max-w-lg">
                 <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                 <input 
                    placeholder="Search certificates by title or ID..."
                    className="w-full pl-12 pr-4 py-4 bg-white rounded-[2rem] border border-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all font-medium text-slate-600 placeholder:text-slate-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                 />
              </div>
              <div className="flex gap-2">
                 <button className="px-6 py-4 bg-white border border-slate-100 rounded-[2rem] text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors flex items-center gap-2">
                    <Filter size={16} /> Filter Types
                 </button>
                 <button className="px-8 py-4 bg-slate-900 text-white rounded-[2rem] font-black text-[10px] uppercase tracking-widest hover:bg-black transition-all shadow-xl">
                    Verification Tools
                 </button>
              </div>
           </div>

           {/* Certificates Grid */}
           <div className="grid md:grid-cols-2 gap-8">
              {mockCertificates.map((cert) => (
                <div key={cert.id} className="group p-8 rounded-[3rem] bg-white border border-slate-100 hover:border-brand-orange/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all relative overflow-hidden">
                   <div className="flex items-start justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all shadow-sm">
                         <GraduationCap size={24} />
                      </div>
                      <div className="text-right">
                         <div className={`text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-lg border ${
                           cert.status === 'Verified' ? 'bg-emerald-50 text-emerald-500 border-emerald-100' : 'bg-blue-50 text-blue-500 border-blue-100'
                         }`}>
                           {cert.status}
                         </div>
                      </div>
                   </div>

                   <h3 className="text-lg font-black text-slate-900 leading-tight mb-8 h-12 flex items-center group-hover:text-brand-orange transition-colors">
                      {cert.title}
                   </h3>

                   <div className="grid grid-cols-2 gap-6 mb-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      <div>
                         <div className="mb-1 opacity-50">Issued On</div>
                         <div className="text-slate-900">{cert.issueDate}</div>
                      </div>
                      <div>
                         <div className="mb-1 opacity-50">Roll Number</div>
                         <div className="text-slate-900">{cert.rollNumber}</div>
                      </div>
                   </div>

                   <div className="flex items-center gap-2 mb-8 p-4 bg-slate-50 rounded-2xl border border-slate-100 border-dashed">
                      <QrCode size={42} className="text-slate-400 opacity-50" />
                      <div className="flex-1 text-[8px] font-bold text-slate-400 leading-relaxed uppercase tracking-tighter">
                         Blockchain Registry ID: {cert.certificateNumber}
                      </div>
                   </div>

                   <div className="flex gap-2">
                      <button className="flex-[2] py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-orange transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2">
                         Certificate <ChevronRight size={14} />
                      </button>
                      <button className="p-4 bg-slate-50 text-slate-400 hover:text-slate-900 rounded-2xl transition-all">
                         <Download size={18} />
                      </button>
                      <button className="p-4 bg-slate-50 text-slate-400 hover:text-slate-900 rounded-2xl transition-all">
                         <MoreVertical size={18} />
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Sidebar Support */}
        <div className="space-y-8">
           {/* Profile Summary Card */}
           <div className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-[2rem] bg-gradient-to-br from-brand-orange to-red-500 text-white font-black text-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                 {user.name.charAt(0)}
              </div>
              <h4 className="text-lg font-black text-slate-900">{user.name}</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1 mb-8">{user.role} · ID: {user.id}</p>
              <div className="grid grid-cols-2 gap-4 border-t border-slate-50 pt-8">
                 <div className="text-center">
                    <div className="text-[20px] font-black text-slate-900 tracking-tighter">02</div>
                    <div className="text-[8px] font-black text-slate-400 uppercase">Issued</div>
                 </div>
                 <div className="text-center">
                    <div className="text-[20px] font-black text-emerald-500 tracking-tighter">100%</div>
                    <div className="text-[8px] font-black text-slate-400 uppercase">Verified</div>
                 </div>
              </div>
           </div>

           {/* Sync DigiLocker CTA */}
           <div className="p-10 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-all duration-1000" />
              <div className="flex items-center gap-3 mb-8">
                 <ShieldCheck className="text-brand-orange" size={24} />
                 <h3 className="font-black uppercase tracking-tight text-white">Trust Network</h3>
              </div>
              <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest leading-relaxed mb-8">
                 Automatically sync your NIOS credentials with DigiLocker, ABC Bank, and SWAYAM platforms for seamless academic verification.
              </p>
              <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all shadow-xl">
                 Connect DigiLocker
              </button>
           </div>

           {/* Quick Verify */}
           <div className="p-10 rounded-[3rem] bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm text-center group">
              <Sparkles className="w-10 h-10 mx-auto mb-6 text-blue-500 opacity-50 group-hover:rotate-12 transition-transform" />
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-2">QR Authentication</h4>
              <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest leading-relaxed mb-8">Verification for employers and educational institutions nationwide.</p>
              <button className="w-full py-4 bg-white border border-blue-100 text-blue-600 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-50 transition-all shadow-lg shadow-blue-500/10">
                 Platform Registry
              </button>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
