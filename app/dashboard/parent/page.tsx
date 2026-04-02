'use client';

import DashboardLayout from '@/components/DashboardLayout';
import Link from 'next/link';

const children = [
  { id: '10023', name: 'Arjun Sharma', grade: 'Secondary (Science)', progress: 72, attendance: '92%', lastActive: '2 hours ago' },
];

const stats = [
  { label: 'Overall Progress', value: '72%', icon: '📊', color: '#3771f8' },
  { label: 'Attendance', value: '92%', icon: '📅', color: '#22c55e' },
  { label: 'Upcoming TMAs', value: '3', icon: '📝', color: '#f59e0b' },
  { label: 'Course Rank', value: '#12', icon: '🏆', color: '#ff8c00' },
];

const recentActivity = [
  { student: 'Arjun', activity: 'Completed Quiz: Laws of Motion', time: '10:45 AM', score: '85%' },
  { student: 'Arjun', activity: 'Submitted TMA: English Grammar', time: 'Yesterday', score: 'Pending' },
  { student: 'Arjun', activity: 'Logged in for Live Class (Physics)', time: '31 Mar', score: '-' },
];

export default function ParentDashboard() {
  return (
    <DashboardLayout title="Parental Dashboard" subtitle="Monitoring Progress & Attendance for Arjun Sharma">
      
      {/* Child Selector (If multiple children) */}
      <div className="card mb-6" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.25rem 1.5rem' }}>
        <div className="avatar avatar-md" style={{ background: 'var(--primary-500)', fontSize: '1.2rem' }}>A</div>
        <div style={{ flex: 1 }}>
          <div className="font-semibold" style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>{children[0].name}</div>
          <div className="text-sm text-muted">{children[0].grade} · Roll No: {children[0].id}</div>
        </div>
        <div className="flex gap-2">
          <span className="badge badge-success">Online Now</span>
          <button className="btn btn-ghost btn-sm">Switch Child ▼</button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-4 gap-4 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <div className="stat-icon" style={{ background: `${s.color}18` }}>
              <span style={{ fontSize: '1.25rem' }}>{s.icon}</span>
            </div>
            <div>
              <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '1.5rem' }}>
        
        {/* Performance Graph Placeholder */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h4>Performance Overview</h4>
            <select className="form-input" style={{ width: 'auto', fontSize: '0.8rem', padding: '0.25rem 0.5rem' }}>
              <option>Last 30 Days</option>
              <option>Last Term</option>
            </select>
          </div>
          <div style={{ 
            height: '240px', 
            background: 'var(--bg-hover)', 
            borderRadius: 'var(--radius-md)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            border: '1px dashed var(--border)',
            color: 'var(--text-muted)',
            fontSize: '0.9rem'
          }}>
            [ Interactive Chart Coming Soon ]
          </div>
          <div className="grid grid-3 gap-4 mt-6">
            <div style={{ textAlign: 'center' }}>
              <div className="text-xs text-muted mb-1">Time Spent</div>
              <div className="font-semibold">42h 15m</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="text-xs text-muted mb-1">Avg. Quiz Score</div>
              <div className="font-semibold">78%</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="text-xs text-muted mb-1">Pending Tasks</div>
              <div className="font-semibold text-accent">5</div>
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="card">
          <h4 className="mb-4">Recent Activity</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {recentActivity.map((a, i) => (
              <div key={i} style={{ paddingBottom: '1rem', borderBottom: i === recentActivity.length - 1 ? 'none' : '1px solid var(--border)', display: 'flex', gap: '0.75rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-400)', marginTop: '5px' }} />
                <div style={{ flex: 1 }}>
                  <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{a.activity}</div>
                  <div className="text-xs text-muted">{a.time} · Score: {a.score}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-ghost w-full mt-4 btn-sm">View Full Log</button>
        </div>
      </div>

      {/* Parental Controls/Actions */}
      <div className="card mt-6">
        <h4 className="mb-4">Quick Actions</h4>
        <div className="grid grid-4 gap-4">
          <button className="btn btn-ghost" style={{ flexDirection: 'column', gap: '0.5rem', padding: '1.25rem', border: '1px solid var(--border)' }}>
            <span style={{ fontSize: '1.5rem' }}>💬</span>
            <span style={{ fontSize: '0.85rem' }}>Message Teacher</span>
          </button>
          <button className="btn btn-ghost" style={{ flexDirection: 'column', gap: '0.5rem', padding: '1.25rem', border: '1px solid var(--border)' }}>
            <span style={{ fontSize: '1.5rem' }}>💳</span>
            <span style={{ fontSize: '0.85rem' }}>Fee Payment</span>
          </button>
          <button className="btn btn-ghost" style={{ flexDirection: 'column', gap: '0.5rem', padding: '1.25rem', border: '1px solid var(--border)' }}>
            <span style={{ fontSize: '1.5rem' }}>📝</span>
            <span style={{ fontSize: '0.85rem' }}>TMA Feedback</span>
          </button>
          <button className="btn btn-ghost" style={{ flexDirection: 'column', gap: '0.5rem', padding: '1.25rem', border: '1px solid var(--border)' }}>
            <span style={{ fontSize: '1.5rem' }}>🛡️</span>
            <span style={{ fontSize: '0.85rem' }}>Privacy Settings</span>
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
