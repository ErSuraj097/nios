'use client';
import DashboardLayout from '@/components/DashboardLayout';
import Link from 'next/link';

const stats = [
  { icon: '📚', label: 'Enrolled Courses', value: '12', change: '+3', color: 'from-blue-500 to-indigo-500', up: true },
  { icon: '✅', label: 'Lessons Complete', value: '187', change: '+24', color: 'from-emerald-500 to-teal-500', up: true },
  { icon: '📝', label: 'Pending Tasks', value: '3', change: '-1', color: 'from-orange-500 to-red-500', up: false },
  { icon: '🏅', label: 'Badges Earned', value: '23', change: '+2', color: 'from-purple-500 to-pink-500', up: true },
];

const courses = [
  { id: 1, icon: '🔬', title: 'Advanced Physics (Class 12)', progress: 82, subject: 'Science', lessons: '28/32', difficulty: 'Medium', next: 'Quantum Mechanics' },
  { id: 2, icon: '📐', title: 'Mathematics Mastery', progress: 67, subject: 'Maths', lessons: '22/35', difficulty: 'Hard', next: 'Calculus Intro' },
  { id: 3, icon: '📖', title: 'English Literature', progress: 94, subject: 'English', lessons: '19/20', difficulty: 'Easy', next: 'Final Review' },
];

const liveClasses = [
  { subject: '🔴 LIVE Physics', teacher: 'Dr. R. Mehta', time: 'Now - 4:30 PM', platform: 'Zoom', status: 'live' },
  { subject: '📐 Mathematics', teacher: 'Prof. A. Verma', time: 'Today 6:00 PM', platform: 'Google Meet', status: 'upcoming' },
];

const achievements = [
  { icon: '🔥', title: '15 Day Streak', subtitle: 'Legendary consistency!' },
  { icon: '⭐', title: 'Top 5% Performer', subtitle: 'Science category' },
];

export default function LearnerDashboard() {
  return (
    <DashboardLayout title="Dashboard" subtitle="Arjun Sharma · Class 10 | Roll: 10023 · 🔥 15 Day Streak">
      
      {/* AI Success Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { icon: '🧠', title: 'AI Study Plan', score: '92%', gradient: 'from-emerald-400 to-green-500', desc: 'Optimized for board exams' },
          { icon: '📈', title: 'Success Prediction', score: '87%', gradient: 'from-blue-400 to-indigo-500', desc: 'Grade A probability' },
          { icon: '⚡', title: 'Focus Score', score: '94%', gradient: 'from-orange-400 to-red-500', desc: 'Peak performance zone' },
        ].map((card, i) => (
          <div key={i} className="glass-card group p-8 rounded-4xl border border-white/20 backdrop-blur-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-5 blur-xl -z-10`}></div>
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{card.icon}</div>
            <h3 className="text-2xl font-black mb-2 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">{card.title}</h3>
            <div className="text-3xl font-black mb-1 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">{card.score}</div>
            <p className="text-slate-500 dark:text-slate-400 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[2.2fr_1fr] gap-8">

        {/* Main Content */}
        <div className="space-y-8">
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="glass-card group p-6 rounded-3xl relative overflow-hidden hover:shadow-xl hover:shadow-{s.color.replace('from-','')} transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-3 blur-xl -z-10`}></div>
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="text-2xl font-black text-slate-900 dark:text-white mb-1">{s.value}</div>
                <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">{s.label}</div>
                <div className={`text-xs font-bold mt-2 px-2 py-1 rounded-full ${s.up ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'}`}>
                  {s.change}
                </div>
              </div>
            ))}
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Active Courses</h2>
              <Link href="/courses" className="btn btn-ghost font-bold">View All →</Link>
            </div>
            <div className="space-y-4">
              {courses.map((course) => (
                <div key={course.id} className="glass-card group p-8 rounded-4xl border hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 opacity-50 -z-10 blur-sm"></div>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center text-3xl font-bold text-white shadow-2xl group-hover:scale-110 transition-transform">
                      {course.icon}
                    </div>
                    <div className="flex-1 min-w-0 pt-2">
                      <h3 className="text-xl font-black mb-1 text-slate-900 dark:text-white line-clamp-1">{course.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-xs font-bold rounded-full">{course.subject}</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">{course.lessons}</span>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2 text-sm">
                          <span className="text-slate-500">Progress</span>
                          <span className="font-bold text-slate-900 dark:text-white">{course.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-200/50 dark:bg-slate-700 rounded-2xl h-3 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 h-full rounded-2xl shadow-inner shimmer" style={{width: `${course.progress}%`, boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)'}}></div>
                        </div>
                      </div>
                    </div>
                    <Link href={`/courses/${course.id}`} className="btn bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black shadow-xl hover:shadow-2xl hover:-translate-y-0.5 whitespace-nowrap px-8 py-4 rounded-3xl transition-all duration-300 group-hover:scale-[1.05]">
                      Continue
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sidebar - Quick Actions */}
        <div className="space-y-6 lg:sticky lg:top-8 lg:h-screen lg:overflow-y-auto">
          
          {/* Live Classes */}
          <div className="glass-card p-6 rounded-4xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-black text-xl text-slate-900 dark:text-white">Live Now</h3>
              <Link href="/live" className="text-orange-500 font-bold hover:underline text-sm">Full Schedule →</Link>
            </div>
            <div className="space-y-3">
              {liveClasses.map((cls, i) => (
                <div key={i} className={`p-4 rounded-2xl flex items-center gap-4 ${cls.status === 'live' ? 'bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-200 border backdrop-blur-sm animate-pulse' : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 border'}`}>
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-400 to-orange-400 shadow-lg animate-ping"></div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm text-slate-900 dark:text-white truncate">{cls.subject}</div>
                    <div className="text-xs text-slate-500">{cls.teacher}</div>
                  </div>
                  <span className="px-3 py-1 bg-white dark:bg-slate-800 text-xs font-bold rounded-full shadow-sm">
                    {cls.time}
                  </span>
                  <Link href="/live" className="btn btn-sm bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl border hover:bg-slate-50 dark:hover:bg-slate-700 text-orange-600 font-bold">
                    Join
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="glass-card p-6 rounded-4xl space-y-4">
            <h3 className="font-black text-xl text-slate-900 dark:text-white mb-4">Recent Achievements</h3>
            <div className="space-y-3">
              {achievements.map((ach, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/50 rounded-2xl group hover:shadow-md transition-all">
                  <div className="text-2xl group-hover:scale-125 transition-transform">{ach.icon}</div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{ach.title}</div>
                    <div className="text-sm text-slate-500">{ach.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Tutor */}
          <div className="glass-card p-8 text-center rounded-4xl group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 opacity-5 blur-xl -z-10"></div>
            <div className="text-6xl animate-bounce mb-6 mx-auto">🤖</div>
            <h4 className="text-2xl font-black mb-3 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">AI Study Assistant</h4>
            <p className="text-slate-600 dark:text-slate-300 mb-8">24/7 explanations, hints, practice problems</p>
            <Link href="/ai-tutor" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-black py-4 px-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 block group-hover:scale-[1.02]">
              Open AI Tutor →
            </Link>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
