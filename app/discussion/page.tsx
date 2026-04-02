'use client';
import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';

const feeds = [
  { id: 1, user: 'Arjun Sharma', avatar: 'A', text: 'Just finished Chapter 4! The AI Tutor was super helpful for Newton\'s Laws. Highly recommend checking out the practice test.', time: '2h ago', likes: 12, comments: 4, type: 'Achievement' },
  { id: 2, user: 'Dr. Vikram Mehta', avatar: 'V', text: 'Important: I\'ve added a new simulation for Circular Motion. Check it out in the Physics Resource folder!', time: '4h ago', likes: 45, comments: 8, type: 'Announcement', isTeacher: true },
  { id: 3, user: 'Priya Nair', avatar: 'P', text: 'Anyone else struggling with Question 12 on the Algebra quiz? Let\'s discuss in the Maths group.', time: '5h ago', likes: 8, comments: 15, type: 'Help' },
  { id: 4, user: 'NIOS Official', avatar: 'N', text: 'National Science Day Virtual Exhibition starts tomorrow. Register now to showcase your projects!', time: '1d ago', likes: 128, comments: 32, type: 'Event', isOfficial: true },
];

const groups = [
  { id: 1, name: 'Physics Enthusiasts', members: '1.2k', activity: 'High' },
  { id: 2, name: 'Algebra Solvers', members: '840', activity: 'Active' },
  { id: 3, name: 'Delhi Region Learners', members: '15k', activity: 'High' },
  { id: 4, name: 'English Literature Cup', members: '450', activity: 'Medium' },
];

export default function DiscussionHub() {
  const [activeTab, setActiveTab] = useState('Social Feed');

  return (
    <DashboardLayout title="Collaboration & Community" subtitle="Learn together, share achievements, and get help">
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr 300px', gap: '1.5rem', alignItems: 'start' }}>
        
        {/* Left Sidebar - Groups & Topics */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card" style={{ padding: '1rem' }}>
            <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>Groups</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {groups.map((g) => (
                <button 
                  key={g.id} 
                  className="nav-item" 
                  style={{ fontSize: '0.82rem', padding: '0.5rem 0.75rem' }}
                  id={`discussion-group-${g.id}`}
                >
                  <span style={{ flex: 1, textAlign: 'left' }}># {g.name}</span>
                  <span className="badge badge-muted" style={{ padding: '0.1rem 0.4rem', fontSize: '0.65rem' }}>{g.activity}</span>
                </button>
              ))}
            </div>
            <button className="btn btn-ghost btn-sm w-full mt-4">+ Join Group</button>
          </div>

          <div className="card" style={{ padding: '1rem' }}>
            <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>Trending Topics</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {['#ForcesInNature', '#MathsOlympiad', '#FutureSkills', '#NIOSLife'].map((t) => (
                <div key={t} style={{ color: 'var(--primary-300)', fontSize: '0.83rem', fontWeight: 600, cursor: 'pointer' }}>{t}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Center - Main Feed */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Post Box */}
          <div className="card">
            <div className="flex gap-3 mb-3">
              <div className="avatar">A</div>
              <textarea 
                className="form-input" 
                placeholder="Share your learning milestones or ask a question..." 
                style={{ flex: 1, minHeight: '80px', resize: 'none', background: 'var(--bg-hover)' }}
                id="discussion-post-input"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <button className="btn btn-ghost btn-sm">📸 Photo</button>
                <button className="btn btn-ghost btn-sm">🎥 Video</button>
                <button className="btn btn-ghost btn-sm">📊 Poll</button>
              </div>
              <button id="discussion-post-btn" className="btn btn-primary">Post</button>
            </div>
          </div>

          {/* Feed Filter */}
          <div className="tabs">
            {['Social Feed', 'Discussions', 'Blogs', 'Announcements'].map((t) => (
              <button 
                key={t} 
                className={`tab ${activeTab === t ? 'active' : ''}`}
                onClick={() => setActiveTab(t)}
                id={`discussion-tab-${t.toLowerCase().replace(' ', '-')}`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Interaction Feed */}
          <div className="stagger" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {feeds.map((f) => (
              <div key={f.id} className="card animate-slide-up" style={{ padding: '1.25rem' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="avatar" style={{ background: f.isTeacher ? 'var(--accent-600)' : f.isOfficial ? 'var(--primary-900)' : undefined }}>
                    {f.avatar}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{f.user}</span>
                      {f.isTeacher && <span className="badge badge-accent">Teacher</span>}
                      {f.isOfficial && <span className="badge badge-primary">Official</span>}
                      <span className="text-xs text-muted">· {f.time}</span>
                    </div>
                    <div className="text-xs text-muted">{f.type}</div>
                  </div>
                  <button className="btn btn-ghost btn-icon" style={{ fontSize: '1rem' }}>⋯</button>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: '1.5' }}>
                  {f.text}
                </p>
                <div className="divider" style={{ margin: '0 0 1rem 0' }} />
                <div className="flex items-center gap-6">
                  <button className="btn btn-ghost btn-sm" style={{ gap: '0.4rem', color: 'var(--text-secondary)' }}>
                    👍 {f.likes}
                  </button>
                  <button className="btn btn-ghost btn-sm" style={{ gap: '0.4rem', color: 'var(--text-secondary)' }}>
                    💬 {f.comments}
                  </button>
                  <button className="btn btn-ghost btn-sm" style={{ gap: '0.4rem', color: 'var(--text-secondary)' }}>
                    📤 Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar - Social Features */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Faculty Blogs CTA */}
          <div className="card" style={{ background: 'linear-gradient(135deg, rgba(255,140,0,0.1), rgba(26,34,54,0.95))', border: '1px solid rgba(255,140,0,0.2)' }}>
            <h4 style={{ marginBottom: '1rem', color: 'var(--accent-400)' }}>Latest Faculty Blog</h4>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
              <div className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Bridging the Gap: NEP 2020 & Open Schooling</div>
              <div className="text-xs text-muted mb-3">By Dr. Amit Kumar · 15m read</div>
              <button className="btn btn-accent btn-sm w-full">Read Article</button>
            </div>
          </div>

          {/* Gamification - Peer Challenges */}
          <div className="card">
            <h4>Peer Challenges</h4>
            <p className="text-xs text-muted mt-1 mb-4">Competitions to boost critical thinking.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { title: 'The Physics Race', players: 45, prize: '50 XP' },
                { title: 'Maths Duel: Algebra', players: 12, prize: 'Badge' },
              ].map((c, i) => (
                <div key={i} style={{ padding: '0.875rem', background: 'var(--bg-hover)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                  <div className="text-xs font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{c.title}</div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted">{c.players} players</span>
                    <span className="text-xs text-accent font-bold">{c.prize}</span>
                  </div>
                  <button className="btn btn-primary btn-sm w-full mt-3">Join Now</button>
                </div>
              ))}
            </div>
          </div>

          {/* Virtual Orientation Tour */}
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🗺️</div>
            <h4 style={{ fontSize: '0.9rem' }}>New here?</h4>
            <p className="text-xs text-muted mb-3">Take a virtual tour of the NIOS ecosystem.</p>
            <button id="discussion-tour" className="btn btn-ghost btn-sm w-full">Start Tour</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
