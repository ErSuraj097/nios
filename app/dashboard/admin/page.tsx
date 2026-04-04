import DashboardLayout from '@/components/DashboardLayout';
import { User2Icon } from 'lucide-react';
import Link from 'next/link';

const platformStats = [
  { icon: User2Icon, label: 'Total Learners', value: '1,24,892', change: '+8,421 this month', up: true, color: 'var(--primary-600)' },
  { icon: '👩‍🏫', label: 'Active Teachers', value: '3,208', change: '+112 this month', up: true, color: 'var(--success)' },
  { icon: '📚', label: 'Published Courses', value: '642', change: '24 awaiting review', up: true, color: 'var(--accent-500)' },
  { icon: '💰', label: 'Revenue (INR)', value: '₹48.6L', change: '+12% vs last month', up: true, color: 'var(--primary-500)' },
];

const slaStatus = [
  { label: 'High Impact Issues', response: '30 min', resolution: '1 hour', open: 2, color: '#ef4444' },
  { label: 'Medium Impact Issues', response: '30 min', resolution: '4 hours', open: 7, color: '#f59e0b' },
  { label: 'Low Impact Issues', response: '30 min', resolution: '24 hours', open: 19, color: '#22c55e' },
];

const recentUsers = [
  { name: 'Priya Nair', type: 'Learner', region: 'Kerala', enrolled: '1 Apr 2026', status: 'active' },
  { name: 'Dr. Vikram Mehta', type: 'Teacher', region: 'Delhi', enrolled: '28 Mar 2026', status: 'active' },
  { name: 'Sunita Devi', type: 'Learner', region: 'Bihar', enrolled: '31 Mar 2026', status: 'pending' },
  { name: 'Rajan Pillai', type: 'Admin', region: 'Kerala', enrolled: '25 Mar 2026', status: 'active' },
  { name: 'Arjun Sharma', type: 'Learner', region: 'UP', enrolled: '2 Apr 2026', status: 'active' },
];

const pendingContent = [
  { title: 'Science Chapter 7 – Magnetism', teacher: 'Dr. Mehta', submitted: '1 Apr 2026', type: 'Video Lesson' },
  { title: 'English Grammar Module 5', teacher: 'Ms. Verma', submitted: '31 Mar 2026', type: 'PDF SLM' },
  { title: 'Maths Practice Quiz – Algebra', teacher: 'Mr. Gupta', submitted: '30 Mar 2026', type: 'Quiz' },
];

const integrations = [
  { name: 'DIKSHA', status: 'Connected', icon: '🔗' },
  { name: 'SWAYAM', status: 'Connected', icon: '🔗' },
  { name: 'DigiLocker', status: 'Connected', icon: '📁' },
  { name: 'ABC (Credit)', status: 'Connected', icon: '🏦' },
  { name: 'UDISE+', status: 'Syncing', icon: '🔄' },
  { name: 'ULLAS', status: 'Connected', icon: '🔗' },
];

export default function AdminDashboard() {
  return (
    <DashboardLayout title="Admin Dashboard" subtitle="NIOS Central Operations · System Health: 99.96% Uptime">

      {/* System alerts */}
      <div style={{
        background: 'var(--bg-surface)', border: '1px solid var(--success)',
        borderRadius: 'var(--radius-md)', padding: '0.875rem 1.25rem',
        display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem',
      }}>
        <span style={{ fontSize: '1.25rem' }}>✅</span>
        <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', flex: 1 }}>
          All systems operational · Last security audit: 1 Mar 2026 · Next audit: 1 Jun 2026
        </span>
        <span className="badge badge-success">STQC Compliant</span>
        <span className="badge badge-success">OWASP Top 10</span>
      </div>

      {/* Stats */}
      <div className="grid grid-4 gap-4 mb-6 stagger">
        {platformStats.map((s) => (
          <div key={s.label} className="stat-card animate-slide-up">
            <div className="stat-icon" style={{ background: `${s.color}18` }}>
              <span style={{ fontSize: '1.25rem' }}>{s.icon}</span>
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

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>

        {/* User Management */}
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="flex items-center justify-between" style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
            <h4>Recent Users</h4>
            <Link href="/admin/users"><button className="btn btn-ghost btn-sm">Manage All →</button></Link>
          </div>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Region</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((u) => (
                  <tr key={u.name}>
                    <td>
                      <div className="flex items-center gap-2">
                        <div className="avatar avatar-sm">{u.name.charAt(0)}</div>
                        <span style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.84rem' }}>{u.name}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`badge ${u.type === 'Teacher' ? 'badge-accent' : u.type === 'Admin' ? 'badge-danger' : 'badge-primary'}`}>
                        {u.type}
                      </span>
                    </td>
                    <td className="text-muted" style={{ fontSize: '0.82rem' }}>{u.region}</td>
                    <td><span className={`badge ${u.status === 'active' ? 'badge-success' : 'badge-warning'}`}>{u.status}</span></td>
                    <td>
                      <button className="btn btn-ghost btn-sm">⋯</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Content Review & Bulk Enrollment */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h4>Content Review Queue</h4>
              <span className="badge badge-warning">3 pending</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {pendingContent.map((c, i) => (
                <div key={i} style={{
                  background: 'var(--bg-hover)', borderRadius: 'var(--radius-md)', padding: '1rem',
                }}>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{c.title}</div>
                    <span className="badge badge-muted" style={{ flexShrink: 0 }}>{c.type}</span>
                  </div>
                  <div className="text-xs text-muted mb-3">By {c.teacher} · {c.submitted}</div>
                  <div className="flex gap-2">
                    <button className="btn btn-primary btn-sm" style={{ flex: 1 }}>✅ Approve</button>
                    <button className="btn btn-danger btn-sm" style={{ flex: 1 }}>❌ Reject</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ background: 'var(--primary-50)', border: '1px dashed var(--primary-400)' }}>
            <h4 className="mb-3">Bulk Enrollment</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ 
                border: '1px dashed var(--border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', 
                textAlign: 'center', background: 'var(--bg-base)'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📁</div>
                <div className="text-sm font-semibold">Upload CSV / Excel</div>
                <div className="text-xs text-muted">Aadhaar or Enrollment ID based</div>
                <button className="btn btn-primary btn-sm mt-3" id="bulk-upload-btn">Select Files</button>
              </div>
              <div className="flex items-center justify-between text-xs text-muted">
                <span>Supported: .csv, .xlsx</span>
                <a href="#" style={{ color: 'var(--primary-400)' }}>Download Template</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>

        {/* SLA Status */}
        <div className="card">
          <h4 style={{ marginBottom: '1.25rem' }}>⏱ SLA Status</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {slaStatus.map((s) => (
              <div key={s.label} style={{ padding: '0.875rem', background: 'var(--bg-hover)', borderRadius: 'var(--radius-md)', borderLeft: `3px solid ${s.color}` }}>
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{s.label}</div>
                  <span className="badge" style={{ background: `${s.color}18`, color: s.color }}>{s.open} open</span>
                </div>
                <div className="text-xs text-muted">Response: {s.response} · Resolution: {s.resolution}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Integrations */}
        <div className="card">
          <h4 style={{ marginBottom: '1.25rem' }}>🔌 Integrations</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {integrations.map((int) => (
              <div key={int.name} className="flex items-center justify-between" style={{
                padding: '0.75rem', background: 'var(--bg-hover)', borderRadius: 'var(--radius-md)',
              }}>
                <div className="flex items-center gap-2">
                  <span>{int.icon}</span>
                  <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{int.name}</span>
                </div>
                <span className={`badge ${int.status === 'Connected' ? 'badge-success' : 'badge-warning'}`}>{int.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Admin Actions */}
        <div className="card">
          <h4 style={{ marginBottom: '1.25rem' }}>⚡ Quick Actions</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              { icon: '📢', label: 'System Announcement' },
              { icon: '💾', label: 'Trigger Backup' },
              { icon: '🔐', label: 'Security Audit Log' },
              { icon: '🧾', label: 'Generate Invoice' },
              { icon: '📊', label: 'Full Platform Report' },
              { icon: '👤', label: 'Bulk Enrol Learners' },
              { icon: '🏷️', label: 'Manage Certificates' },
              { icon: '🛡️', label: 'Role Permissions' },
            ].map((a) => (
              <button key={a.label} className="btn btn-ghost w-full" style={{
                justifyContent: 'flex-start', gap: '0.75rem', fontSize: '0.83rem',
              }}>
                <span>{a.icon}</span>{a.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
