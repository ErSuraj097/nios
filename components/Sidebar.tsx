'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navSections = [
  {
    label: 'Main',
    items: [
      { icon: '🏠', label: 'Dashboard', href: '/dashboard/learner' },
      { icon: '📚', label: 'My Courses', href: '/courses' },
      { icon: '🔴', label: 'Live Classes', href: '/live' },
      { icon: '📝', label: 'Assessments', href: '/assessments' },
    ],
  },
  {
    label: 'Learning',
    items: [
      { icon: '🗓️', label: 'Schedule', href: '/schedule' },
      { icon: '💬', label: 'Discussion', href: '/discussion', badge: '5' },
      { icon: '🤖', label: 'AI Tutor', href: '/ai-tutor' },
    ],
  },
  {
    label: 'Progress',
    items: [
      { icon: '📊', label: 'Analytics', href: '/analytics' },
      { icon: '🏅', label: 'Achievements', href: '/achievements' },
      { icon: '📜', label: 'Certificates', href: '/certificates' },
    ],
  },
  {
    label: 'Account',
    items: [
      { icon: '👤', label: 'Profile', href: '/profile' },
      { icon: '⚙️', label: 'Settings', href: '/settings' },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-[280px] bg-white border-r border-slate-100 flex flex-col fixed left-0 top-0 bottom-0 z-50 transition-transform duration-300">
      {/* Brand Header */}
      <div className="p-8 flex items-center gap-3.5 border-b border-slate-50">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-red flex items-center justify-center text-2xl text-white shadow-lg shadow-orange-600/20">
          🎓
        </div>
        <div>
          <div className="text-xl font-black text-slate-900 tracking-tighter leading-tight">NIOS LMS</div>
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">National Institute</div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-8 scrollbar-hide">
        {navSections.map((section) => (
          <div className="space-y-3" key={section.label}>
            <div className="px-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 opacity-70">
              {section.label}
            </div>
            <div className="space-y-1.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link href={item.href} key={item.href} className="block group">
                    <div className={`
                      flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300
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
        <div className="bg-slate-50 p-4 rounded-[2rem] flex items-center gap-3.5 hover:bg-slate-100 transition-colors group cursor-pointer border border-transparent hover:border-slate-200">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center font-black text-slate-500 text-sm shadow-inner group-hover:from-brand-orange group-hover:to-brand-red group-hover:text-white transition-all duration-500">
            A
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-black text-slate-900 truncate">Arjun Sharma</div>
            <div className="text-[10px] font-bold text-slate-400 truncate tracking-tight">Class 10 · Roll: 10023</div>
          </div>
          <Link href="/login" className="flex items-center justify-center p-2 text-lg opacity-40 hover:opacity-100 hover:text-brand-red transition-all">
            🚪
          </Link>
        </div>
      </div>
    </aside>
  );
}
