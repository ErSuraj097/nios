'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
// import { Home, HomeIcon } from 'lucide-react';
import {
HomeIcon,
BookOpen,
Video,
FileText,
Calendar,
MessageCircle,
Cpu,
BarChart2,
Award,
User,
Settings,
CreditCard,
LogOut,
} from 'lucide-react';

const navSections = [
{
  label: 'Main',
  items: [
    { icon: <HomeIcon size={18} />, label: 'Dashboard', href: '/dashboard/learner' },
    { icon: <BookOpen size={18} />, label: 'My Courses', href: '/courses' },
    { icon: <Video size={18} />, label: 'Live Classes', href: '/live' },
    { icon: <FileText size={18} />, label: 'Assessments', href: '/assessments' },
  ],
},
{
  label: 'Learning',
  items: [
    { icon: <Calendar size={18} />, label: 'Schedule', href: '/schedule' },
    { icon: <MessageCircle size={18} />, label: 'Discussion', href: '/discussion', badge: '5' },
    { icon: <Cpu size={18} />, label: 'AI Tutor', href: '/ai-tutor' },
  ],
},
{
  label: 'Progress',
  items: [
    { icon: <BarChart2 size={18} />, label: 'Analytics', href: '/analytics' },
    { icon: <Award size={18} />, label: 'Achievements', href: '/achievements' },
    { icon: <CreditCard size={18} />, label: 'Certificates', href: '/certificates' },
  ],
},
{
  label: 'Account',
  items: [
    { icon: <User size={18} />, label: 'Profile', href: '/profile' },
    { icon: <Settings size={18} />, label: 'Settings', href: '/settings' },
  ],
},
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-[280px] bg-white border-r border-slate-100 flex flex-col fixed left-0 top-0 bottom-0 z-50 transition-transform duration-300">
      {/* Brand Header */}
    <Link href="/" className="block border-b border-slate-50">
      <div className="p-8 items-center gap-3.5 border-b border-slate-50">
        <Image
          src="/sb_logo.png"
          alt="NIOS Logo"
          width={200}
          height={40}
          className="rounded-full   from-primary-500 to-primary-700 p-1"
        />
         <div className="text-xs pt-2 text-center text-slate-500 tracking-tight">
        AI-Powered Learning Management System
      </div>
      </div>


     
    </Link>

      <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-8 scrollbar-hide">
        {navSections.map((section) => (
          <div className="space-y-2" key={section.label}>
            <div className="px-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 opacity-70">
              {section.label}
            </div>
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link href={item.href} key={item.href} className="block group">
                    <div className={`
                      flex items-center gap-3.5 px-4 py-2 rounded-2xl text-sm transition-all duration-300
                      ${isActive 
                        ? 'bg-orange-50 text-brand-orange border border-orange-100/50 shadow-sm' 
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'}
                    `}>
                      <span className={`text-lg transition-transform duration-300 group-hover:scale-110 ${isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
                        {item.icon}
                      </span>
                      <span className="flex-1 tracking-tight">{item.label}</span>
                      {item.badge && (
                        <span className="bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* User Session Footer */}
      <div className="p-6 mt-auto border-t border-slate-50">
        <div className="bg-slate-50 p-2 rounded-md flex items-center gap-3.5 hover:bg-slate-100 transition-colors group cursor-pointer border border-transparent hover:border-slate-200">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center font-black text-slate-500 text-sm shadow-inner group-hover:from-brand-orange group-hover:to-brand-red group-hover:text-white transition-all duration-500">
            A
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-black text-slate-900 truncate">Arjun Sharma</div>
            <div className="text-[10px] font-bold text-slate-400 truncate tracking-tight">Class 10 · Roll: 10023</div>
          </div>
          <Link href="/login" className="flex items-center justify-center p-2 text-lg opacity-40 hover:opacity-100 hover:text-brand-red transition-all">
          <LogOut size={18} />
          </Link>
        </div>
      </div>
    </aside>
  );
}
