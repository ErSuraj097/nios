'use client';
import DashboardLayout from '@/components/DashboardLayout';

const achievements = [
  { icon: '🎓', title: 'Top Performer', date: 'Mar 2026', subject: 'Science' },
  { icon: '🔥', title: '12-Day Streak', date: 'Apr 2026', subject: 'Platform' },
  { icon: '📚', title: 'Reading Rocket', date: 'Feb 2026', subject: 'English' },
  { icon: '✅', title: 'Quiz Whiz', date: 'Mar 2026', subject: 'Maths' },
  { icon: '🏅', label: '100% Attendance', date: 'Jan 2026' }
];

const certificates = [
  { title: 'Mathematics: Algebra Mastery', status: 'Issued', date: 'Mar 15, 2026', id: 'NIOS-MAT-23948' },
  { title: 'Digital Literacy Workshop', status: 'Issued', date: 'Feb 2, 2026', id: 'NIOS-DIG-10294' },
];

const projects = [
  { title: 'Friction in Daily Life', type: 'Exhibition Project', grade: 'A+' },
  { title: 'Modern India Timeline', type: 'Subject Project', grade: 'A' },
  { title: 'Community Awareness Poster', type: 'Creativity', grade: 'A+' },
];

export default function ProfilePage() {
  return (
    <DashboardLayout title="Digital Portfolio" subtitle="Your holistic academic record and achievements">
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '2.5rem', alignItems: 'start' }}>
        
        {/* Left Column - User Info & Aadhaar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* User Profile Card */}
          <div className="card" style={{ textAlign: 'center', padding: '2.5rem 1.5rem' }}>
             <div className="avatar-lg" style={{ width: '100px', height: '100px', fontSize: '2.5rem', margin: '0 auto 1.5rem' }}>A</div>
             <h3 style={{ marginBottom: '0.25rem' }}>Arjun Sharma</h3>
             <p className="text-sm text-muted mb-4">Enrollment: 10023 · Class 10</p>
             <div className="flex justify-center gap-2 mb-6">
                <span className="badge badge-primary">Student</span>
                <span className="badge badge-success">Verified</span>
             </div>
             <button id="edit-profile-btn" className="btn btn-ghost btn-sm w-full">Edit Profile Settings</button>
          </div>

          {/* Aadhaar Verification Card */}
          <div className="card" style={{ background: 'var(--bg-hover)', border: '1px solid var(--border)' }}>
             <div className="flex items-center gap-3 mb-4">
               <div style={{ fontSize: '1.5rem' }}>🇮🇳</div>
               <h4 style={{ fontSize: '0.85rem' }}>Aadhaar Identity</h4>
             </div>
             <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs mb-1">
                   <span className="text-muted">Aadhaar No.</span>
                   <span className="font-semibold text-primary">XXXX-XXXX-2394</span>
                </div>
                <div className="flex justify-between text-xs mb-1">
                   <span className="text-muted">DOB</span>
                   <span className="font-semibold">12 May 2010</span>
                </div>
                <div className="flex justify-between text-xs mb-1">
                   <span className="text-muted">Region</span>
                   <span className="font-semibold">Delhi</span>
                </div>
                <button className="btn btn-ghost btn-sm w-full mt-2" style={{ fontSize: '0.75rem', background: 'rgba(55,113,248,0.1)' }}>Update Aadhaar Link</button>
             </div>
          </div>

          {/* Institutional Links */}
          <div className="card" style={{ padding: '1rem' }}>
             <h4 style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>Linked Platforms</h4>
             <div className="flex flex-col gap-3">
                {[
                  { name: 'DigiLocker', icon: '📁', status: 'Synced' },
                  { name: 'Academic Bank Credits', icon: '🏦', status: 'Active' },
                  { name: 'SWAYAM', icon: '🎓', status: 'Linked' },
                ].map((p, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded hover:bg-hover transition-all">
                    <div className="flex items-center gap-2">
                       <span style={{ fontSize: '1.25rem' }}>{p.icon}</span>
                       <span className="text-xs font-semibold">{p.name}</span>
                    </div>
                    <span className="text-xs text-success">{p.status}</span>
                  </div>
                ))}
             </div>
          </div>

        </div>

        {/* Right Column - Results, Achievements, Projects */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Certificates Section */}
          <div>
             <div className="flex items-center justify-between mb-4">
                <h3>Issued Certificates</h3>
                <button className="btn btn-ghost btn-sm">View All</button>
             </div>
             <div className="grid grid-2 gap-4">
                {certificates.map((c, i) => (
                  <div key={i} className="card animate-slide-up" style={{ display: 'flex', gap: '1rem', border: '1px solid rgba(168,85,247,0.3)', background: 'rgba(168,85,247,0.05)' }}>
                    <div style={{ fontSize: '2rem' }}>📜</div>
                    <div style={{ flex: 1 }}>
                       <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{c.title}</div>
                       <div className="text-xs text-muted mb-3">{c.date} · {c.id}</div>
                       <button className="btn btn-ghost btn-sm" style={{ background: 'rgba(255,255,255,0.05)' }}>Download</button>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Holistic Digital Portfolio - Projects & Creativity */}
          <div>
             <div className="flex items-center justify-between mb-4">
                <h3>Holistic Creative Portfolio</h3>
                <button className="btn btn-primary btn-sm">+ Add Project</button>
             </div>
             <div className="grid grid-3 gap-4">
                {projects.map((p, i) => (
                  <div key={i} className="card animate-slide-up" style={{ textAlign: 'center', background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                     <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🎨</div>
                     <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{p.title}</div>
                     <div className="text-xs text-muted mb-3">{p.type}</div>
                     <span className="badge badge-success">{p.grade} Grade</span>
                  </div>
                ))}
             </div>
          </div>

          {/* Achievements Grid */}
          <div>
             <div className="flex items-center justify-between mb-4">
                <h3>Achievements & Badges</h3>
             </div>
             <div className="card" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', padding: '1.5rem' }}>
                {achievements.map((a, i) => (
                  <div key={i} className="flex flex-col items-center gap-1" style={{ width: '100px', cursor: 'pointer' }}>
                    <div style={{ 
                        width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--bg-hover), var(--bg-card))',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem',
                        border: '2px solid var(--border)', transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary-400)'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                    >
                      {a.icon}
                    </div>
                    <span className="text-xs font-semibold" style={{ color: 'var(--text-primary)', textAlign: 'center' }}>{a.title || a.label}</span>
                    <span className="text-xs text-muted">{a.date}</span>
                  </div>
                ))}
             </div>
          </div>

          {/* Address & Certification Record */}
          <div className="card">
             <div className="flex items-center justify-between mb-4">
                <h4>Official Record Details</h4>
                <button className="btn btn-ghost btn-sm" id="edit-address-btn">Edit Address</button>
             </div>
             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                   <div className="text-xs text-muted mb-1">Billing & Delivery Address</div>
                   <div className="text-sm">B-12, Green Park Extension, New Delhi - 110016</div>
                   <div className="text-xs text-muted mt-2">Verified via Aadhaar sync</div>
                </div>
                <div>
                   <div className="text-xs text-muted mb-1">Certification Delivery</div>
                   <div className="text-sm text-primary font-medium">Digital (DigiLocker) + Hardcopy Requested</div>
                   <div className="text-xs text-muted mt-2">Tracking ID: NIOS-TRK-938210</div>
                </div>
             </div>
          </div>

          {/* Preferences & Accessibility */}
          <div className="grid grid-2 gap-4">
             <div className="card">
                <h4 className="mb-4">Language Preferences</h4>
                <div className="flex flex-col gap-2">
                   {['English (US)', 'Hindi (Native)', 'Sanskrit', 'Telugu'].map((lang) => (
                      <label key={lang} className="flex items-center gap-3 p-2 rounded hover:bg-hover cursor-pointer transition-all">
                         <input type="radio" name="lang" defaultChecked={lang === 'Hindi (Native)'} />
                         <span className="text-sm">{lang}</span>
                      </label>
                   ))}
                </div>
             </div>
             <div className="card">
                <h4 className="mb-4">Accessibility Settings</h4>
                <div className="flex flex-col gap-3">
                   <div className="flex items-center justify-between">
                      <span className="text-sm">High Contrast Mode</span>
                      <input type="checkbox" id="acc-contrast" />
                   </div>
                   <div className="flex items-center justify-between">
                      <span className="text-sm">Screen Reader Optimized</span>
                      <input type="checkbox" id="acc-screenreader" />
                   </div>
                   <div className="flex items-center justify-between">
                      <span className="text-sm">Font Size</span>
                      <select className="form-input" style={{ width: 'auto', padding: '2px 8px', fontSize: '12px' }}>
                         <option>Standard</option>
                         <option>Large</option>
                         <option>Extra Large</option>
                      </select>
                   </div>
                   <div className="flex items-center justify-between">
                      <span className="text-sm">Dyslexic Friendly Font</span>
                      <input type="checkbox" id="acc-dyslexic" />
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
