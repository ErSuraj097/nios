'use client';
import DashboardLayout from '@/components/DashboardLayout';
import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'ai' | 'user';
  timestamp: string;
}

export default function AITutorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello Arjun! I'm your AI Tutor. I can help you with your lessons, explain complex topics, or help you prepare for your assessments. What would you like to learn today?",
      sender: 'ai',
      timestamp: '10:00 AM',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text: input,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMsg: Message = {
        id: Date.now() + 1,
        text: `That's a great question about "${input}". Based on your current progress in Physics Chapter 4, I recommend focusing on Newton's Second Law (F=ma). Would you like me to explain the concept with an example or provide a practice problem?`,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <DashboardLayout title="AI Tutor & Assistant" subtitle="24/7 Personalized Academic Support">
      <div style={{ height: 'calc(100vh - 180px)', display: 'flex', gap: '1.5rem' }}>
        
        {/* Chat Main Area */}
        <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
          {/* Chat Header */}
          <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--border)', background: 'rgba(55,113,248,0.05)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="avatar" style={{ background: 'linear-gradient(135deg, var(--primary-500), var(--primary-800))' }}>🤖</div>
            <div>
              <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>Personal AI Co-pilot</div>
              <div className="text-xs text-success">● Online & Ready to help</div>
            </div>
            <div className="ml-auto flex gap-2">
              <button className="btn btn-ghost btn-sm">🌐 Translate</button>
              <button className="btn btn-ghost btn-sm">🔊 Read Aloud</button>
            </div>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {messages.map((m) => (
              <div 
                key={m.id} 
                className={`animate-fade-in`}
                style={{ 
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '80%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: m.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div style={{ 
                  padding: '1rem 1.25rem', 
                  borderRadius: 'var(--radius-lg)',
                  background: m.sender === 'user' ? 'var(--primary-600)' : 'var(--bg-hover)',
                  color: m.sender === 'user' ? '#fff' : 'var(--text-primary)',
                  boxShadow: m.sender === 'user' ? 'var(--shadow-md)' : 'none',
                  border: m.sender === 'ai' ? '1px solid var(--border)' : 'none',
                  borderBottomRightRadius: m.sender === 'user' ? '4px' : 'var(--radius-lg)',
                  borderBottomLeftRadius: m.sender === 'ai' ? '4px' : 'var(--radius-lg)',
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                }}>
                  {m.text}
                </div>
                <div className="text-xs text-muted" style={{ marginTop: '0.4rem' }}>{m.timestamp}</div>
              </div>
            ))}
            {isTyping && (
              <div style={{ alignSelf: 'flex-start', background: 'var(--bg-hover)', padding: '0.75rem 1.25rem', borderRadius: 'var(--radius-lg)', borderBottomLeftRadius: '4px' }}>
                <div className="animate-pulse flex gap-1">
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--text-muted)' }} />
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--text-muted)' }} />
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--text-muted)' }} />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form 
            onSubmit={handleSend}
            style={{ padding: '1.25rem', borderTop: '1px solid var(--border)', background: 'var(--bg-card)' }}
          >
            <div className="flex gap-3">
              <button type="button" className="btn btn-ghost btn-icon">📎</button>
              <input 
                id="ai-tutor-input"
                className="form-input" 
                placeholder="Ask me anything about your courses..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ flex: 1 }}
              />
              <button id="ai-tutor-mic" type="button" className="btn btn-ghost btn-icon">🎤</button>
              <button id="ai-tutor-send" type="submit" className="btn btn-primary" style={{ padding: '0 1.5rem' }}>Send</button>
            </div>
            <div className="text-xs text-muted mt-2" style={{ textAlign: 'center' }}>
              Explainable AI: I provide references to your SLM for every answer.
            </div>
          </form>
        </div>

        {/* Knowledge Context Sidebar */}
        <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Quick Tasks */}
          <div className="card">
            <h4 style={{ marginBottom: '1rem' }}>Personalized Nudges</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { icon: '📝', text: 'Stuck on Chapter 4 Quiz? Let\'s review.' },
                { icon: '📅', text: 'TMA submission due in 2 days.' },
                { icon: '📈', text: 'You\'re doing great in Math!' },
              ].map((n, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded" style={{ background: 'var(--bg-hover)', border: '1px solid var(--border)', cursor: 'pointer' }}>
                  <span style={{ fontSize: '1.2rem' }}>{n.icon}</span>
                  <p className="text-xs" style={{ margin: 0 }}>{n.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Resources */}
          <div className="card" style={{ flex: 1 }}>
            <h4 style={{ marginBottom: '1rem' }}>Smart Context</h4>
            <p className="text-xs text-muted mb-4">I am currently analyzing your content for <strong>Physics Chapter 4</strong>.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { title: 'Newton\'s Laws Overview', type: 'Video', dur: '12m' },
                { title: 'Summary Flashcards', type: 'Interactive', dur: '5m' },
                { title: 'Concept Map: Force', type: 'PDF', dur: 'Rec' },
              ].map((r, i) => (
                <div key={i}>
                  <div className="font-semibold text-sm mb-1">{r.title}</div>
                  <div className="flex items-center justify-between">
                    <span className="badge badge-muted">{r.type}</span>
                    <span className="text-xs text-muted">{r.dur}</span>
                  </div>
                  {i < 2 && <div className="divider" style={{ margin: '0.75rem 0' }} />}
                </div>
              ))}
            </div>
            <button className="btn btn-ghost btn-sm w-full mt-6">See All Recommendations</button>
          </div>

          {/* Emotional Support */}
          <div className="card" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(26,34,54,0.9))', border: '1px solid rgba(34,197,94,0.2)' }}>
            <div className="flex items-center gap-2 mb-2">
              <span style={{ fontSize: '1.25rem' }}>🧘</span>
              <h4 style={{ fontSize: '0.9rem' }}>Mindful Break</h4>
            </div>
            <p className="text-xs mb-3">You've been studying for 45 minutes. How about a 2-minute breathing exercise?</p>
            <button id="start-wellbeing" className="btn btn-primary btn-sm w-full" style={{ background: 'var(--success)' }}>Start Session</button>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
