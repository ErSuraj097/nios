import DashboardLayout from '@/components/DashboardLayout';
import Link from 'next/link';

const stats = [
  { icon: '📚', label: 'Enrolled Courses', value: '8', change: '+2 this month', up: true, color: '#3771f8' },
  { icon: '✅', label: 'Completed', value: '5', change: '62% completion', up: true, color: '#22c55e' },
  { icon: '📝', label: 'Pending Tests', value: '3', change: '2 due this week', up: false, color: '#f59e0b' },
  { icon: '🏅', label: 'Badges Earned', value: '14', change: '+1 new badge', up: true, color: '#ff8c00' },
];

const courses = [
  { id: 1, icon: '🔬', title: 'Science: Physics & Chemistry', progress: 72, subject: 'Science', lessons: 24, nextLesson: 'Motion & Laws' },
  { id: 2, icon: '📐', title: 'Mathematics: Algebra & Geometry', progress: 55, subject: 'Maths', lessons: 32, nextLesson: 'Quadratic Equations' },
  { id: 3, icon: '📖', title: 'English: Literature & Grammar', progress: 88, subject: 'English', lessons: 18, nextLesson: 'Poetry Analysis' },
  { id: 4, icon: '🌍', title: 'Social Science: History & Civics', progress: 40, subject: 'SST', lessons: 28, nextLesson: 'Modern India' },
];

const upcomingClasses = [
  { subject: '🔬 Physics', teacher: 'Dr. Mehta', time: 'Today, 4:00 PM', platform: 'Zoom', live: true },
  { subject: '📐 Maths', teacher: 'Ms. Verma', time: 'Tomorrow, 10:00 AM', platform: 'Google Meet', live: false },
  { subject: '🌍 Social Science', teacher: 'Mr. Iyer', time: 'Thu, 2:00 PM', platform: 'MS Teams', live: false },
];

const achievements = [
  { icon: '🔥', label: '12 Day Streak', desc: 'Keep it up!' },
  { icon: '⭐', label: 'Top Performer', desc: 'Top 10% in Science' },
  { icon: '🏆', label: 'Quiz Master', desc: '10 perfect scores' },
  { icon: '📖', label: 'Bookworm', desc: '50+ hours reading' },
];

const aiNudges = [
  { icon: '💡', message: 'You\'re close to completing Physics! Just 3 more lessons to go.', type: 'primary' },
  { icon: '⚠️', message: 'TMA submission for English is due in 2 days.', type: 'warning' },
  { icon: '🎯', message: 'Try the Maths practice quiz to strengthen Quadratic Equations.', type: 'accent' },
];

export default function LearnerDashboard() {
  return (
    <DashboardLayout title="Learner Dashboard" subtitle="Welcome back, Arjun 👋 — Wednesday, 2 April 2026">
      {/* AI Nudges */}
  <div className="flex flex-col gap-3 mb-8 stagger">
        {aiNudges.map((n, i) => (
          <div key={i} className="card bg-gradient-to-r from-primary/5 to-slate-50 border-primary/20 rounded-2xl p-4 flex items-center gap-4 hover:shadow-md transition-all animate-slide-up">
            <span className={`text-xl ${n.type === 'warning' ? 'text-warning' : n.type === 'accent' ? 'text-accent-500' : 'text-primary'}`}>{n.icon}</span>
            <span className="text-sm text-text-secondary flex-1">{n.message}</span>
            <button className="btn btn-ghost btn-sm">Dismiss</button>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-4 gap-4 mb-6 stagger">
        {stats.map((s) => (
          <div key={s.label} className="stat-card animate-slide-up">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-sm bg-[color-mix(in_srgb,theme(colors.primary.500),transparent_82)]">
              <span className="text-xl">{s.icon}</span>
            </div>
            <div>
              <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
            <div className={`stat-change ${s.up ? 'up' : 'down'}`}>
              {s.up ? '↑' : '↓'} {s.change}
            </div>
          </div>
        ))}
      </div>

      {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">

        {/* Courses */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3>My Courses</h3>
            <Link href="/courses"><button className="btn btn-ghost btn-sm">View All →</button></Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} className="stagger">
            {courses.map((c) => (
              <div key={c.id} className="course-card animate-slide-up" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.25rem' }}>
                <div className="flex-none w-[52px] h-[52px] rounded-md bg-bg-hover flex items-center justify-center text-2xl">
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="course-title font-semibold text-text-primary mb-1 truncate">{c.title}</div>
                  <div className="course-meta flex flex-wrap gap-2 text-xs text-text-muted mb-3">
                    <span className="badge badge-primary">{c.subject}</span>
                    <span>📖 {c.lessons} lessons</span>
                    <span>▶ Next: {c.nextLesson}</span>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2 text-xs">
                      <span className="text-text-muted">Progress</span>
                      <span className="font-semibold text-primary-400">{c.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${c.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
                <Link href={`/courses/${c.id}`}>
                  <button className="btn btn-primary btn-sm" id={`continue-course-${c.id}`}>Continue →</button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
          <div className="flex flex-col gap-6">

          {/* Upcoming Classes */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h4>Live Classes</h4>
              <Link href="/live"><button className="btn btn-ghost btn-sm">Schedule →</button></Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {upcomingClasses.map((cls, i) => (
              <div className={`flex items-center gap-3.5 p-3 rounded-lg bg-bg-hover border ${cls.live ? 'border-danger/30' : 'border-transparent'}`}>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-text-primary mb-1">{cls.subject}</div>
                    <div className="text-xs text-text-muted">{cls.teacher} · {cls.platform}</div>
                    <div className="text-xs text-accent mt-1">🕐 {cls.time}</div>
                  </div>
                  {cls.live ? (
                    <span className="badge badge-danger" style={{ background: 'rgba(239,68,68,0.15)', color: '#f87171' }}>
                      <span className="animate-pulse">●</span> LIVE
                    </span>
                  ) : (
                    <button className="btn btn-ghost btn-sm">Join</button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h4>Achievements</h4>
              <Link href="/achievements"><button className="btn btn-ghost btn-sm">All →</button></Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {achievements.map((a, i) => (
                <div className="bg-bg-hover rounded-md p-4 text-center border border-border">
                  <div className="text-2xl mb-2">{a.icon}</div>
                  <div className="text-xs font-semibold text-text-primary mb-1">{a.label}</div>
                  <div className="text-xs text-text-muted">{a.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Tutor CTA */}
            <div className="card bg-gradient-to-br from-primary/10 to-slate-900/20 border-primary/30 text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h4 className="mb-2">AI Tutor</h4>
              <p className="text-sm text-text-secondary mb-4">Ask anything — get instant explanations, hints, and guidance.</p>
              <Link href="/ai-tutor">
                <button className="w-full btn btn-primary" id="open-ai-tutor">Chat with AI →</button>
              </Link>
            </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
