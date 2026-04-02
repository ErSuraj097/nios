'use client';
import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';

export default function SettingsPage() {
  const [fontSize, setFontSize] = useState(16);
  const [contrast, setContrast] = useState('Standard');
  const [language, setLanguage] = useState('English');
  const [theme, setTheme] = useState('Dark');

  return (
    <DashboardLayout title="Account & Accessibility" subtitle="Customize your learning environment to suit your preferences">
      <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Appearance & Theme */}
        <section>
          <h3 style={{ marginBottom: '1.25rem' }}>🎨 Appearance</h3>
          <div className="card" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', padding: '1.5rem' }}>
             {[
               { name: 'Dark', desc: 'Eye comfort (Default)', active: theme === 'Dark' },
               { name: 'Light', desc: 'Standard clarity', active: theme === 'Light' },
               { name: 'High Contrast', desc: 'Maximum visibility', active: theme === 'High Contrast' },
             ].map((t) => (
                <div 
                  key={t.name}
                  onClick={() => setTheme(t.name)}
                  style={{ 
                     background: t.active ? 'rgba(55,113,248,0.1)' : 'var(--bg-hover)',
                     border: t.active ? '1.5px solid var(--primary-400)' : '1px solid var(--border)',
                     padding: '1.25rem', borderRadius: 'var(--radius-lg)', cursor: 'pointer', transition: 'all 0.2s ease'
                   }}
                >
                   <div className="font-semibold text-sm mb-1">{t.name}</div>
                   <div className="text-xs text-muted">{t.desc}</div>
                </div>
             ))}
          </div>
        </section>

        {/* Accessibility Features */}
        <section>
          <h3 style={{ marginBottom: '1.25rem' }}>♿ Accessibility Settings</h3>
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
             
             {/* Font Size */}
             <div className="flex items-center justify-between">
                <div>
                   <div className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>Text Size</div>
                   <div className="text-xs text-muted">Adjust readability for your comfort.</div>
                </div>
                <div className="flex items-center gap-4">
                   <button className="btn btn-ghost btn-sm" onClick={() => setFontSize(Math.max(12, fontSize - 2))}>A-</button>
                   <span className="font-bold">{fontSize}px</span>
                   <button className="btn btn-ghost btn-sm" onClick={() => setFontSize(Math.min(24, fontSize + 2))}>A+</button>
                </div>
             </div>

             <div className="divider" style={{ margin: 0 }} />

             {/* Multilingual Support */}
             <div className="flex items-center justify-between">
                <div>
                   <div className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>Interface Language</div>
                   <div className="text-xs text-muted">Choose your preferred Indian language.</div>
                </div>
                <select className="form-select" style={{ width: '180px' }} value={language} onChange={(e) => setLanguage(e.target.value)}>
                   {['English', 'Hindi', 'Marathi', 'Tamil', 'Malayalam', 'Bengali', 'Sanskrit'].map(l => (
                     <option key={l}>{l}</option>
                   ))}
                </select>
             </div>

             <div className="divider" style={{ margin: 0 }} />

             {/* Sign Language / ISL */}
             <div className="flex items-center justify-between">
                <div>
                   <div className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>Indian Sign Language (ISL) Icons</div>
                   <div className="text-xs text-muted">Show sign language interpretations for key visual navigation.</div>
                </div>
                <button className="btn btn-primary btn-sm">Enable ISL Aids</button>
             </div>

             <div className="divider" style={{ margin: 0 }} />

             {/* Gesture Navigation */}
             <div className="flex items-center justify-between">
                <div>
                   <div className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>Gesture-based Navigation</div>
                   <div className="text-xs text-muted">Use mouse or hand gestures for non-tactile interaction.</div>
                </div>
                <span className="badge badge-muted">Experimental</span>
             </div>

          </div>
        </section>

        {/* Security / Privacy (GDPR & NIOS Policy) */}
        <section>
           <h3 style={{ marginBottom: '1.25rem' }}>🔐 Security & Privacy</h3>
           <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2rem' }}>
              <div className="flex items-center justify-between">
                 <div>
                    <div className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>IP Protection (DRM)</div>
                    <div className="text-xs text-muted">Enable Digital Rights Management for course materials.</div>
                 </div>
                 <button className="btn btn-primary btn-sm">Manage IP Keys</button>
              </div>
              <div className="divider" style={{ margin: 0 }} />
              <div className="flex items-center justify-between">
                 <div>
                    <div className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>Data Sovereignty (Personal Info)</div>
                    <div className="text-xs text-muted">Download or request deletion of your academic data.</div>
                 </div>
                 <div className="flex gap-2">
                    <button className="btn btn-ghost btn-sm">Download My Data</button>
                    <button className="btn btn-ghost btn-sm" style={{ color: 'var(--danger)' }}>Request Deletion</button>
                 </div>
              </div>
              <div className="divider" style={{ margin: 0 }} />
              <div className="flex items-center justify-between">
                 <div>
                    <div className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>Privacy Mode</div>
                    <div className="text-xs text-muted">Hide your profile from regional peer search.</div>
                 </div>
                 <input type="checkbox" id="privacy-peer" defaultChecked />
              </div>
           </div>
        </section>

        {/* Support & Tickets */}
        <section>
           <h3 style={{ marginBottom: '1.25rem' }}>❓ Support</h3>
           <div className="card" style={{ padding: '1.5rem' }}>
              <p className="text-sm text-muted mb-4">Facing technical issues? Raise a ticket or chat with support.</p>
              <div className="flex gap-3">
                 <button className="btn btn-primary btn-sm">Raise Grievance Ticket</button>
                 <button className="btn btn-ghost btn-sm">Help Docs & Tutorials</button>
              </div>
           </div>
        </section>

      </div>
    </DashboardLayout>
  );
}
