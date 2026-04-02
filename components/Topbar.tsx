
'use client';

interface TopbarProps {
  title: string;
  subtitle?: string;
}

export default function Topbar({ title, subtitle }: TopbarProps) {
  return (
    <div className="sticky top-0 bg-black/85 backdrop-blur-xl border-b border-border z-50 p-4 flex items-center gap-4">
      <div className="flex-1">
        <h5 className="m-0 text-text-primary font-[Plus_Jakarta_Sans] font-bold text-lg">
          {title}
        </h5>
        {subtitle && (
          <div className="text-xs text-text-muted mt-px">{subtitle}</div>
        )}
      </div>

      {/* Search */}
      <div className="relative flex-shrink-0">
        <input
          className="w-[280px] pl-4 pr-12 py-2.5 bg-bg-input border border-border rounded-lg text-text-primary text-sm focus:border-orange-600 focus:ring-1 focus:ring-orange-600/20 transition-all"
          placeholder="🔍  Search courses, materials..."
          id="topbar-search"
        />
      </div>

      {/* Streak */}
      <div className="flex items-center gap-1 bg-gradient-to-r from-accent-500/15 to-gold-500/10 border border-accent-500/25 rounded-full px-3 py-1.5 text-xs font-bold text-accent-500">
        🔥 12 Day Streak
      </div>

      {/* Notifications */}
      <div className="relative">
        <button className="w-10 h-10 rounded-lg flex items-center justify-center text-lg hover:bg-bg-hover transition-all" id="topbar-notifications" title="Notifications">
          🔔
        </button>
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-danger rounded-full" />
      </div>

      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center font-bold text-white text-sm cursor-pointer" title="Profile">
        A
      </div>
    </div>
  );
}
