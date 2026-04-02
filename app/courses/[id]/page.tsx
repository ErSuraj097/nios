'use client';
import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';

const lessons = [
  { id: 1, title: 'Introduction to Motion', type: 'video', duration: '18 min', done: true },
  { id: 2, title: 'Newton\'s Laws of Motion', type: 'video', duration: '24 min', done: true },
  { id: 3, title: 'SLM Reading: Force & Types', type: 'pdf', duration: '15 min', done: true },
  { id: 4, title: 'Practice Quiz – Laws of Motion', type: 'quiz', duration: '10 min', done: false },
  { id: 5, title: 'Friction & Its Applications', type: 'video', duration: '20 min', done: false },
  { id: 6, title: 'Concept Map: Energy Types', type: 'flipbook', duration: '12 min', done: false },
  { id: 7, title: 'Live Q&A Session (Recording)', type: 'live', duration: '45 min', done: false },
  { id: 8, title: 'Unit Assessment', type: 'quiz', duration: '30 min', done: false },
];

const typeIcon: Record<string, string> = {
  video: '▶', pdf: '📄', quiz: '✏️', flipbook: '📖', live: '🎥',
};

const typeColor: Record<string, string> = {
  video: '#3771f8', pdf: '#f59e0b', quiz: '#22c55e', flipbook: '#ff8c00', live: '#ef4444',
};

const tabs = ['Overview', 'Notes', 'Resources', 'Discussion', 'TMA'];

export default function CoursePlayerPage() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [activeLesson, setActiveLesson] = useState(4);
  const [note, setNote] = useState('');

  return (
    <DashboardLayout title="Physics: Motion, Force & Energy" subtitle="Class 10 · Dr. V. Mehta · 24 Lessons">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '1.5rem', alignItems: 'start' }}>

        {/* Main Player Area */}
        <div>
          {/* Calendar Sync & Export */}
          <div className="flex justify-end gap-2 mb-3">
             <button id="course-calendar-sync" className="btn btn-ghost btn-xs" style={{ gap: '0.4rem', fontSize: '0.75rem' }}>
                📅 Sync to Google/Outlook Calendar
             </button>
             <button id="course-export-slm" className="btn btn-ghost btn-xs" style={{ gap: '0.4rem', fontSize: '0.75rem' }}>
                📥 Offline SLM
             </button>
          </div>

          {/* Video Player / Flipbook Viewer */}
          <div style={{
            background: '#000',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            aspectRatio: '16/9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.25rem',
            position: 'relative',
            border: activeLesson === 6 ? '1px solid var(--primary-500)' : 'none',
          }}>
            {activeLesson === 6 ? (
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, #1a2236 0%, #0b0f1a 100%)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                padding: '2rem',
              }}>
                <div style={{ 
                  width: '80%', height: '80%', background: '#fff', borderRadius: '4px', position: 'relative',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)', display: 'flex'
                }}>
                   {/* mock flipbook */}
                   <div style={{ flex: 1, borderRight: '1px solid #ddd', padding: '1.5rem', color: '#333' }}>
                      <div style={{ height: '10px', width: '60%', background: '#eee', marginBottom: '1rem' }} />
                      <div style={{ height: '8px', width: '90%', background: '#f5f5f5', marginBottom: '0.5rem' }} />
                      <div style={{ height: '8px', width: '85%', background: '#f5f5f5', marginBottom: '0.5rem' }} />
                      <div style={{ height: '8px', width: '40%', background: '#f5f5f5', marginBottom: '2rem' }} />
                      <div style={{ fontSize: '3rem', textAlign: 'center' }}>🔬</div>
                   </div>
                   <div style={{ flex: 1, padding: '1.5rem', color: '#333' }}>
                      <div style={{ height: '10px', width: '40%', background: '#eee', marginBottom: '1rem' }} />
                      <div style={{ height: '8px', width: '90%', background: '#f5f5f5', marginBottom: '0.5rem' }} />
                      <div style={{ height: '120px', width: '100%', background: 'rgba(55,113,248,0.05)', borderRadius: '4px', marginBottom: '0.5rem' }} />
                      <div style={{ height: '8px', width: '80%', background: '#f5f5f5' }} />
                   </div>
                   <div style={{ position: 'absolute', bottom: '1rem', width: '100%', textAlign: 'center', color: '#999', fontSize: '0.7rem' }}>
                      Page 14-15 of 42
                   </div>
                </div>
                <div className="flex gap-4 mt-6">
                   <button className="btn btn-ghost btn-sm" style={{ color: '#fff' }}>← Previous</button>
                   <button className="btn btn-ghost btn-sm" style={{ color: '#fff' }}>Next →</button>
                </div>
              </div>
            ) : (
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, #0b0f1a 0%, #1a2236 100%)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem',
              }}>
                <div style={{ fontSize: '4rem' }}>🎬</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{lessons.find(l => l.id === activeLesson)?.title}</div>
                <button id="play-video-btn" className="btn btn-primary btn-lg" style={{ gap: '0.75rem' }}>
                  ▶  Play Lesson
                </button>
              </div>
            )}

            {/* Player controls bar */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
              padding: '1rem 1.25rem 0.875rem',
              display: 'flex', alignItems: 'center', gap: '0.875rem',
            }}>
              <button id="player-play" className="btn btn-ghost btn-icon" style={{ color: '#fff' }}>▶</button>
              <div className="progress-bar" style={{ flex: 1, height: '4px', cursor: 'pointer' }}>
                <div className="progress-fill" style={{ width: '35%' }} />
              </div>
              <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', whiteSpace: 'nowrap' }}>8:24 / 24:00</span>
              <button id="player-captions" className="btn btn-ghost btn-sm" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>CC</button>
              <button id="player-speed" className="btn btn-ghost btn-sm" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>1x</button>
              <button id="player-fullscreen" className="btn btn-ghost btn-icon" style={{ color: 'rgba(255,255,255,0.7)' }}>⛶</button>
            </div>
          </div>

          {/* Accessibility Bar */}
          <div className="card" style={{ padding: '0.875rem 1.25rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span className="text-xs text-muted font-semibold">ACCESSIBILITY</span>
            {[
              { id: 'acc-subtitles', label: '📝 Subtitles' },
              { id: 'acc-isl', label: '🤟 ISL' },
              { id: 'acc-translate', label: '🌐 Translate' },
              { id: 'acc-tts', label: '🔊 Read Aloud' },
              { id: 'acc-dark', label: '🌙 Dark Mode' },
              { id: 'acc-font', label: 'Aa Font Size' },
            ].map((a) => (
              <button key={a.id} id={a.id} className="btn btn-ghost btn-sm" style={{ fontSize: '0.78rem' }}>{a.label}</button>
            ))}
          </div>

          {/* Tabs */}
          <div className="tabs" style={{ marginBottom: '1.25rem' }}>
            {tabs.map((t) => (
              <button key={t} id={`course-tab-${t.toLowerCase()}`} className={`tab ${activeTab === t ? 'active' : ''}`} onClick={() => setActiveTab(t)}>{t}</button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'Overview' && (
            <div className="card animate-fade-in">
              <h3 style={{ marginBottom: '0.75rem' }}>Newton's Laws of Motion</h3>
              <p style={{ marginBottom: '1rem' }}>This lesson covers all three laws of Newton, their mathematical representations, real-world applications, and solved examples. By the end, learners can predict motion outcomes using force equations.</p>
              <div className="flex gap-3 flex-wrap mb-4">
                <span className="badge badge-primary">📚 NCERT Aligned</span>
                <span className="badge badge-success">✅ SCORM 1.2</span>
                <span className="badge badge-accent">🏆 Competency: L2</span>
              </div>
              <div className="divider" />
              <h4 style={{ marginBottom: '0.75rem' }}>Learning Objectives</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {['State and explain Newton\'s 3 Laws', 'Apply F=ma to solve problems', 'Distinguish between mass and weight', 'Analyze real-world force scenarios'].map((obj) => (
                  <li key={obj} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--success)' }}>✓</span> {obj}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'Notes' && (
            <div className="card animate-fade-in">
              <h4 style={{ marginBottom: '1rem' }}>📝 My Notes</h4>
              <textarea
                id="lesson-notes"
                className="form-input"
                style={{ minHeight: '180px', resize: 'vertical' }}
                placeholder="Take notes here while watching... Notes are auto-saved."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
              <div className="flex gap-2 mt-4">
                <button id="save-notes" className="btn btn-primary btn-sm">💾 Save Notes</button>
                <button id="export-notes" className="btn btn-ghost btn-sm">📤 Export PDF</button>
                <button id="ai-summarize" className="btn btn-ghost btn-sm">🤖 AI Summarize</button>
              </div>
            </div>
          )}

          {activeTab === 'Resources' && (
            <div className="card animate-fade-in">
              <h4 style={{ marginBottom: '1rem' }}>📎 Lesson Resources</h4>
              {[
                { name: 'Chapter 4 SLM PDF', type: 'PDF', size: '2.4 MB' },
                { name: 'Newton\'s Laws Flashcards', type: 'Flipbook', size: '1.1 MB' },
                { name: 'Concept Map – Forces', type: 'Image', size: '340 KB' },
                { name: 'Practice Problems - Set A', type: 'PDF', size: '890 KB' },
              ].map((r, i) => (
                <div key={i} className="flex items-center justify-between" style={{
                  padding: '0.875rem',
                  background: 'var(--bg-hover)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '0.625rem',
                }}>
                  <div>
                    <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{r.name}</div>
                    <div className="text-xs text-muted">{r.type} · {r.size}</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="btn btn-ghost btn-sm">👁 Preview</button>
                    <button className="btn btn-primary btn-sm">⬇ Download</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Discussion' && (
            <div className="card animate-fade-in">
              <h4 style={{ marginBottom: '1rem' }}>💬 Lesson Discussion</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.25rem' }}>
                {[
                  { user: 'Priya N.', msg: 'Can someone explain the difference between static and kinetic friction?', time: '2h ago', likes: 4 },
                  { user: 'Dr. Mehta', msg: 'Great question! Static friction prevents start of motion, kinetic acts during motion. Check slide 14!', time: '1h ago', likes: 12, teacher: true },
                ].map((msg, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.875rem' }}>
                    <div className="avatar avatar-sm" style={{ background: msg.teacher ? 'linear-gradient(135deg, #ff8c00, #c05700)' : undefined }}>
                      {msg.user.charAt(0)}
                    </div>
                    <div style={{ flex: 1, background: 'var(--bg-hover)', borderRadius: 'var(--radius-md)', padding: '0.875rem' }}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{msg.user}</span>
                        {msg.teacher && <span className="badge badge-accent">Teacher</span>}
                        <span className="text-xs text-muted">{msg.time}</span>
                      </div>
                      <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>{msg.msg}</p>
                      <button className="btn btn-ghost btn-sm" style={{ fontSize: '0.75rem' }}>👍 {msg.likes}</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input id="discussion-input" className="form-input" style={{ flex: 1 }} placeholder="Ask your question..." />
                <button id="post-discussion" className="btn btn-primary">Post</button>
              </div>
            </div>
          )}

          {activeTab === 'TMA' && (
            <div className="card animate-fade-in">
              <h4 style={{ marginBottom: '0.5rem' }}>📋 Tutor Marked Assignment</h4>
              <p className="text-sm" style={{ marginBottom: '1.25rem' }}>Submit your TMA for Chapter 4. Must be ≥500 words. Deadline: <strong style={{ color: 'var(--warning)' }}>5 April 2026</strong></p>
              <textarea id="tma-submission" className="form-input" style={{ minHeight: '200px', resize: 'vertical', marginBottom: '1rem' }} placeholder="Write your assignment here..." />
              <div className="flex gap-2">
                <button id="upload-tma-file" className="btn btn-ghost">📎 Upload File</button>
                <button id="submit-tma" className="btn btn-primary" style={{ flex: 1 }}>Submit TMA →</button>
              </div>
              <p className="text-xs text-muted mt-2">Submissions are checked for plagiarism automatically.</p>
            </div>
          )}
        </div>

        {/* Lesson Sidebar */}
        <div>
          <div className="card" style={{ padding: 0, overflow: 'hidden', position: 'sticky', top: '80px' }}>
            <div style={{ padding: '1.25rem', borderBottom: '1px solid var(--border)' }}>
              <div className="flex items-center justify-between mb-2">
                <h4>Course Content</h4>
                <span className="text-xs text-muted">3/8 done</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '37.5%' }} />
              </div>
            </div>
            <div style={{ overflowY: 'auto', maxHeight: '500px' }}>
              {lessons.map((l) => (
                <button
                  key={l.id}
                  id={`lesson-${l.id}`}
                  onClick={() => setActiveLesson(l.id)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'flex-start', gap: '0.875rem',
                    padding: '0.875rem 1.25rem',
                    background: activeLesson === l.id ? 'rgba(55,113,248,0.1)' : 'transparent',
                    borderLeft: activeLesson === l.id ? '3px solid var(--primary)' : '3px solid transparent',
                    borderBottom: '1px solid var(--border)',
                    transition: 'var(--transition)',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{
                    width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                    background: l.done ? 'rgba(34,197,94,0.15)' : `${typeColor[l.type]}15`,
                    color: l.done ? 'var(--success)' : typeColor[l.type],
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.8rem', fontWeight: 700,
                  }}>
                    {l.done ? '✓' : typeIcon[l.type]}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="text-sm" style={{
                      color: activeLesson === l.id ? 'var(--primary-300)' : l.done ? 'var(--text-muted)' : 'var(--text-primary)',
                      fontWeight: 500, lineHeight: 1.4,
                    }}>{l.title}</div>
                    <div className="text-xs text-muted" style={{ marginTop: '2px' }}>{l.duration}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
