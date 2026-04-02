'use client';
import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';

const schedule = [
  { time: '09:00 AM', event: 'Mathematics: Algebra (Live)', teacher: 'Ms. S. Verma', status: 'Completed', platform: 'Zoom' },
  { time: '11:00 AM', event: 'Science: Motion (Live)', teacher: 'Dr. V. Mehta', status: 'Live Now', platform: 'Google Meet', live: true },
  { time: '02:00 PM', event: 'English: Grammar (Live)', teacher: 'Mr. R. Iyer', status: 'Upcoming', platform: 'MS Teams' },
  { time: '04:00 PM', event: 'Digital Literacy Workshop', teacher: 'NIOS Official', status: 'Upcoming', platform: 'YouTube' },
];

const calendarDays = [
  { day: 'Mon', date: 31, active: false, hasEvent: true },
  { day: 'Tue', date: 1, active: false, hasEvent: true },
  { day: 'Wed', date: 2, active: true, hasEvent: true },
  { day: 'Thu', date: 3, active: false, hasEvent: true },
  { day: 'Fri', date: 4, active: false, hasEvent: true },
  { day: 'Sat', date: 5, active: false, hasEvent: true },
  { day: 'Sun', date: 6, active: false, hasEvent: false },
];

export default function LiveClassesPage() {
  const [activeDay, setActiveDay] = useState(2);

  return (
    <DashboardLayout title="Live Classes & Schedule" subtitle="Join interactive sessions and synchronized learning events">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '1.5rem', alignItems: 'start' }}>
        
        {/* Main Content - Live Events */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Hero - Live Now Card */}
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, rgba(55,113,248,0.2), rgba(11,18,39,0.95))',
            border: '1px solid rgba(55,113,248,0.4)',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="badge badge-danger">
                  <span className="animate-pulse">●</span> LIVE NOW
                </span>
                <span className="text-sm text-muted">Started 15 mins ago</span>
              </div>
              <h2 style={{ color: 'var(--text-primary)' }}>Science: Newton's Laws of Motion</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="avatar avatar-sm">V</div>
                  <span className="text-sm text-secondary">Dr. Vikram Mehta</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <span>👥 1,240 Joiners</span>
                  <span>📍 Google Meet</span>
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                <button id="join-live-btn" className="btn btn-primary btn-lg" style={{ gap: '0.75rem' }}>
                  🎥 Join Live Room
                </button>
                <button id="view-schedule-top" className="btn btn-ghost btn-lg">View Details</button>
              </div>
            </div>
            {/* Decorative background element */}
            <div style={{ position: 'absolute', right: '-40px', top: '-40px', fontSize: '10rem', opacity: 0.1 }}>🔬</div>
          </div>

          {/* Today's Schedule */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3>Today's Timeline</h3>
              <button className="btn btn-ghost btn-sm">Refresh</button>
            </div>
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              {schedule.map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6" style={{ borderBottom: i < schedule.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <div style={{ width: '80px', flexShrink: 0 }}>
                    <div className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{item.time}</div>
                    <div className="text-xs text-muted" style={{ marginTop: '2px' }}>{item.platform}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{item.event}</div>
                    <div className="text-xs text-muted">Teacher: {item.teacher}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`badge ${item.status === 'Live Now' ? 'badge-danger' : item.status === 'Completed' ? 'badge-success' : 'badge-primary'}`}>
                      {item.status}
                    </span>
                    {item.status === 'Upcoming' && <button className="btn btn-ghost btn-sm">Set Reminder</button>}
                    {item.status === 'Completed' && <button className="btn btn-ghost btn-sm">Watch Session</button>}
                    {item.status === 'Live Now' && <button className="btn btn-primary btn-sm">Join Now</button>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Calendar & Reminders */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Minimal Calendar Component */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h4 style={{ fontSize: '0.9rem' }}>April 2026</h4>
              <div className="flex gap-2">
                <button className="btn btn-ghost btn-icon btn-sm">‹</button>
                <button className="btn btn-ghost btn-icon btn-sm">›</button>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.4rem', textAlign: 'center' }}>
              {calendarDays.map((d, i) => (
                <button 
                  key={i} 
                  id={`calendar-day-${d.date}`}
                  onClick={() => setActiveDay(i)}
                  className={`flex flex-col items-center gap-1 p-2 rounded-md transition-all ${d.active ? 'bg-primary-900 border border-primary-500' : 'hover:bg-hover'}`}
                  style={{ 
                    background: d.active ? 'var(--primary-800)' : 'transparent',
                    border: d.active ? '1px solid var(--primary-500)' : 'none',
                    color: d.active ? '#fff' : 'var(--text-secondary)',
                    minWidth: '36px'
                  }}
                >
                  <span style={{ fontSize: '0.65rem', textTransform: 'uppercase' }}>{d.day}</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{d.date}</span>
                  {d.hasEvent && <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-500)' }} />}
                </button>
              ))}
            </div>
          </div>

          {/* Sync Calendar CTA */}
          <div className="card" style={{ background: 'var(--bg-hover)', border: '1px solid var(--border)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div style={{ fontSize: '1.5rem' }}>🔄</div>
              <div>
                <h4 style={{ fontSize: '0.85rem' }}>Sync Calendar</h4>
                <p className="text-xs text-muted">Never miss a class.</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="btn btn-ghost btn-sm w-full" style={{ justifyContent: 'flex-start', gap: '0.5rem' }}>📅 Google Calendar</button>
              <button className="btn btn-ghost btn-sm w-full" style={{ justifyContent: 'flex-start', gap: '0.5rem' }}>📧 MS Outlook</button>
            </div>
          </div>

          {/* Guidelines & Tools */}
          <div className="card">
            <h4 style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>Learning Tools</h4>
            <div className="flex flex-col gap-3">
              {[
                { icon: '📝', label: 'In-Class Notes' },
                { icon: '🙋', label: 'Ask a Question' },
                { icon: '📽️', label: 'Watch Recordings' },
                { icon: '📜', label: 'Attendance Log' },
              ].map((tool, i) => (
                <button key={i} className="nav-item" style={{ padding: '0.5rem 0.75rem', fontSize: '0.82rem' }}>
                  <span className="nav-icon">{tool.icon}</span>
                  <span>{tool.label}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
