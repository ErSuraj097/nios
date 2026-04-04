'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { 
  Users, 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  Phone, 
  MessageSquare, 
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const students = [
  { 
    id: 'L10023', 
    name: 'Arjun Sharma', 
    class: 'Class 12', 
    progress: 72, 
    attendance: '92%', 
    lastActive: '2h ago',
    performance: 'Above Avg',
    status: 'Online'
  },
  { 
    id: 'L10024', 
    name: 'Priya Nair', 
    class: 'Class 12', 
    progress: 88, 
    attendance: '98%', 
    lastActive: '5h ago',
    performance: 'Excellence',
    status: 'Offline'
  },
  { 
    id: 'L10025', 
    name: 'Rahul Das', 
    class: 'Class 12', 
    progress: 45, 
    attendance: '75%', 
    lastActive: '1d ago',
    performance: 'Needs Focus',
    status: 'Away'
  },
  { 
    id: 'L10026', 
    name: 'Sonal Mehta', 
    class: 'Class 12', 
    progress: 62, 
    attendance: '85%', 
    lastActive: '10m ago',
    performance: 'Average',
    status: 'Online'
  }
];

export default function TeacherStudentsPage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <DashboardLayout 
      title="Student Management" 
      subtitle="Track performance, engagement, and communication for your assigned students"
    >
      <div className="space-y-8 animate-fade-in">
        {/* Stats Summary */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Total Students', value: '42', icon: Users, color: 'text-blue-500 bg-blue-50' },
            { label: 'Avg. Attendance', value: '88%', icon: Clock, color: 'text-emerald-500 bg-emerald-50' },
            { label: 'Performance', value: '+4.2%', icon: TrendingUp, color: 'text-brand-orange bg-orange-50' },
            { label: 'Active Now', value: '18', icon: CheckCircle2, color: 'text-purple-500 bg-purple-50' },
          ].map((s, i) => (
            <div key={i} className="p-6 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className={`w-12 h-12 rounded-2xl ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <s.icon size={20} />
              </div>
              <div className="text-2xl font-black text-slate-900 tracking-tighter mb-1">{s.value}</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filter & Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full max-w-md">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input 
              placeholder="Search by name, ID or class..."
              className="w-full pl-12 pr-4 py-4 bg-white rounded-3xl border border-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all font-medium text-slate-600 placeholder:text-slate-400"
            />
          </div>
          <div className="flex gap-2">
            <button className="px-6 py-4 bg-white border border-slate-100 rounded-3xl flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
              <Filter size={16} /> Filter By Class
            </button>
            <button className="px-8 py-4 bg-slate-900 text-white rounded-3xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-200">
              Bulk Actions
            </button>
          </div>
        </div>

        {/* Student Grid */}
        <div className="grid gap-4">
          {students.map((student) => (
            <div key={student.id} className="group p-6 rounded-[2rem] bg-white border border-slate-100 hover:border-brand-orange/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-xl font-black text-slate-400 uppercase tracking-tighter">
                  {student.name.charAt(0)}
                </div>
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-4 border-white ${
                  student.status === 'Online' ? 'bg-emerald-500' : student.status === 'Away' ? 'bg-amber-500' : 'bg-slate-300'
                }`} />
              </div>

              <div className="flex-1 text-center md:text-left min-w-0">
                <h4 className="text-lg font-black text-slate-900 mb-1 group-hover:text-brand-orange transition-colors truncate">{student.name}</h4>
                <div className="flex items-center justify-center md:justify-start gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <span>ID: {student.id}</span>
                  <span>{student.class}</span>
                </div>
              </div>

              <div className="flex items-center gap-12 px-12 border-x border-slate-50 hidden md:flex">
                <div className="text-center">
                  <div className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Progress</div>
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-1.5 bg-slate-50 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${student.progress > 80 ? 'bg-emerald-500' : student.progress > 50 ? 'bg-brand-orange' : 'bg-red-500'}`} 
                        style={{ width: `${student.progress}%` }} 
                      />
                    </div>
                    <span className="text-[10px] font-black text-slate-900">{student.progress}%</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest">Performance</div>
                  <div className={`text-[10px] font-black uppercase tracking-widest ${
                    student.performance === 'Excellence' ? 'text-emerald-500' : student.performance === 'Needs Focus' ? 'text-red-500' : 'text-slate-600'
                  }`}>{student.performance}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 hover:text-brand-orange hover:bg-orange-50 transition-all flex items-center justify-center">
                  <Mail size={16} />
                </button>
                <button className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 hover:text-brand-orange hover:bg-orange-50 transition-all flex items-center justify-center">
                  <MessageSquare size={16} />
                </button>
                <button className="px-6 py-3 bg-slate-50 rounded-xl text-[10px] font-black text-slate-900 uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center gap-2">
                  View Profile <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
