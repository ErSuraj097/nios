'use client';
import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';

const assessments = [
  { id: 1, title: 'Physics Unit 4 Quiz', subject: 'Science', type: 'MCQ', questions: 20, duration: '30 min', due: 'Apr 5, 2026', status: 'pending', score: null },
  { id: 2, title: 'Algebra Practice Test', subject: 'Mathematics', type: 'Mixed', questions: 15, duration: '25 min', due: 'Apr 3, 2026', status: 'pending', score: null },
  { id: 3, title: 'English Comprehension', subject: 'English', type: 'Subjective', questions: 5, duration: '40 min', due: 'Mar 28, 2026', status: 'completed', score: 82 },
  { id: 4, title: 'History - Modern India', subject: 'Social Science', type: 'MCQ', questions: 25, duration: '35 min', due: 'Mar 20, 2026', status: 'completed', score: 76 },
  { id: 5, title: 'Final Term Assessment', subject: 'Science', type: 'Mixed', questions: 50, duration: '90 min', due: 'Apr 20, 2026', status: 'upcoming', score: null },
];

const sampleQuiz = {
  title: 'Physics Unit 4 Quiz',
  questions: [
    {
      id: 1,
      q: 'Which of Newton\'s laws states that an object at rest stays at rest unless acted on by an external force?',
      options: ['Newton\'s First Law', 'Newton\'s Second Law', 'Newton\'s Third Law', 'Law of Gravitation'],
      correct: 0,
    },
    {
      id: 2,
      q: 'What is the SI unit of Force?',
      options: ['Joule', 'Newton', 'Pascal', 'Watt'],
      correct: 1,
    },
    {
      id: 3,
      q: 'If mass = 5 kg and acceleration = 3 m/s², what is the force?',
      options: ['8 N', '15 N', '1.67 N', '53 N'],
      correct: 1,
    },
  ],
};

export default function AssessmentsPage() {
  const [activeTab, setActiveTab] = useState<'list' | 'quiz'>('list');
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState('29:45');

  function startQuiz() {
    setActiveTab('quiz');
    setAnswers({});
    setSubmitted(false);
  }

  function selectAnswer(qId: number, optIdx: number) {
    if (!submitted) setAnswers(prev => ({ ...prev, [qId]: optIdx }));
  }

  function submitQuiz() { setSubmitted(true); }

  const score = submitted
    ? Math.round((sampleQuiz.questions.filter(q => answers[q.id] === q.correct).length / sampleQuiz.questions.length) * 100)
    : 0;

  return (
    <DashboardLayout title="Assessments" subtitle="Quizzes, tests, and TMA submissions">

      {activeTab === 'list' ? (
        <>
          {/* Filters */}
          <div className="flex gap-3 mb-5 flex-wrap items-center">
            {['All', 'Pending', 'Completed', 'Upcoming'].map((f) => (
              <button key={f} id={`assessment-filter-${f.toLowerCase()}`} className="btn btn-ghost btn-sm">{f}</button>
            ))}
            <div className="ml-auto">
              <input className="form-input" id="assessment-search" placeholder="🔍 Search assessments..." style={{ width: '220px', fontSize: '0.83rem' }} />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-4 gap-4 mb-6">
            {[
              { label: 'Pending', value: '2', icon: '⏳', color: '#f59e0b' },
              { label: 'Completed', value: '2', icon: '✅', color: '#22c55e' },
              { label: 'Avg. Score', value: '79%', icon: '📊', color: '#3771f8' },
              { label: 'Upcoming', value: '1', icon: '📅', color: '#a855f7' },
            ].map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-icon" style={{ background: `${s.color}15` }}>
                  <span style={{ fontSize: '1.2rem' }}>{s.icon}</span>
                </div>
                <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Assessments list */}
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Assessment</th>
                    <th>Type</th>
                    <th>Questions</th>
                    <th>Duration</th>
                    <th>Due Date</th>
                    <th>Status / Score</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {assessments.map((a) => (
                    <tr key={a.id}>
                      <td>
                        <div className="font-semibold" style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>{a.title}</div>
                        <div className="text-xs text-muted">{a.subject}</div>
                      </td>
                      <td><span className="badge badge-muted">{a.type}</span></td>
                      <td className="text-muted">{a.questions} Qs</td>
                      <td className="text-muted">{a.duration}</td>
                      <td>
                        <span style={{
                          fontSize: '0.83rem',
                          color: a.status === 'pending' ? 'var(--warning)' : 'var(--text-muted)',
                        }}>
                          {a.due}
                        </span>
                      </td>
                      <td>
                        {a.status === 'completed'
                          ? <span className="badge badge-success">✅ {a.score}%</span>
                          : a.status === 'upcoming'
                            ? <span className="badge badge-muted">📅 Upcoming</span>
                            : <span className="badge badge-warning">⏳ Pending</span>
                        }
                      </td>
                      <td>
                        {a.status === 'pending' ? (
                          <button id={`start-quiz-${a.id}`} className="btn btn-primary btn-sm" onClick={startQuiz}>Start →</button>
                        ) : a.status === 'completed' ? (
                          <button className="btn btn-ghost btn-sm">Review</button>
                        ) : (
                          <button className="btn btn-ghost btn-sm" disabled>Locked</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        /* Quiz View */
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {!submitted ? (
            <>
              {/* Quiz Header */}
              <div className="card" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '1rem 1.5rem', marginBottom: '1.5rem',
                background: 'rgba(55,113,248,0.08)', borderColor: 'rgba(55,113,248,0.3)',
              }}>
                <div>
                  <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>{sampleQuiz.title}</div>
                  <div className="text-xs text-muted">{sampleQuiz.questions.length} questions · Browser locked mode</div>
                </div>
                <div style={{
                  background: 'var(--bg-card)', borderRadius: 'var(--radius-md)',
                  padding: '0.5rem 1rem', fontFamily: 'monospace',
                  color: parseInt(timeLeft) < 5 ? 'var(--danger)' : 'var(--warning)',
                  fontWeight: 700, fontSize: '1.1rem',
                }}>
                  ⏱ {timeLeft}
                </div>
              </div>

              {/* Questions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {sampleQuiz.questions.map((q, qi) => (
                  <div key={q.id} className="card animate-slide-up">
                    <div className="flex items-start gap-3 mb-4">
                      <div style={{
                        width: '30px', height: '30px', borderRadius: '50%', flexShrink: 0,
                        background: answers[q.id] !== undefined ? 'rgba(55,113,248,0.2)' : 'var(--bg-hover)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 700, fontSize: '0.85rem',
                        color: answers[q.id] !== undefined ? 'var(--primary-300)' : 'var(--text-muted)',
                      }}>
                        {qi + 1}
                      </div>
                      <h4 style={{ flex: 1, fontWeight: 500, fontSize: '1rem', color: 'var(--text-primary)' }}>{q.q}</h4>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', paddingLeft: '2.5rem' }}>
                      {q.options.map((opt, oi) => (
                        <button
                          key={oi}
                          id={`q${q.id}-opt${oi}`}
                          onClick={() => selectAnswer(q.id, oi)}
                          style={{
                            display: 'flex', alignItems: 'center', gap: '0.875rem',
                            padding: '0.875rem 1rem',
                            borderRadius: 'var(--radius-md)',
                            border: answers[q.id] === oi
                              ? '1.5px solid var(--primary-400)'
                              : '1px solid var(--border)',
                            background: answers[q.id] === oi ? 'rgba(55,113,248,0.1)' : 'var(--bg-hover)',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            textAlign: 'left',
                          }}
                        >
                          <div style={{
                            width: '22px', height: '22px', borderRadius: '50%', flexShrink: 0,
                            border: `2px solid ${answers[q.id] === oi ? 'var(--primary-400)' : 'var(--border-light)'}`,
                            background: answers[q.id] === oi ? 'var(--primary-500)' : 'transparent',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}>
                            {answers[q.id] === oi && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff' }} />}
                          </div>
                          <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{opt}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                <button id="save-quiz-draft" className="btn btn-ghost">Save Draft</button>
                <button
                  id="submit-quiz"
                  className="btn btn-primary btn-lg"
                  style={{ flex: 1 }}
                  onClick={submitQuiz}
                  disabled={Object.keys(answers).length < sampleQuiz.questions.length}
                >
                  Submit Quiz →
                </button>
              </div>
            </>
          ) : (
            /* Result */
            <div className="card animate-slide-up" style={{ textAlign: 'center', padding: '3rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{score >= 70 ? '🎉' : '📚'}</div>
              <h2 style={{ marginBottom: '0.5rem' }}>Quiz Submitted!</h2>
              <div style={{
                fontSize: '4rem', fontWeight: 900, fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: score >= 70 ? 'var(--success)' : 'var(--warning)',
                margin: '1.5rem 0',
              }}>
                {score}%
              </div>
              <p className="text-sm" style={{ marginBottom: '2rem' }}>
                You answered {sampleQuiz.questions.filter(q => answers[q.id] === q.correct).length} out of {sampleQuiz.questions.length} questions correctly.
              </p>
              <div className="flex gap-3 justify-center">
                <button id="review-quiz-answers" className="btn btn-ghost">Review Answers</button>
                <button id="back-to-assessments" className="btn btn-primary" onClick={() => { setActiveTab('list'); setSubmitted(false); }}>Back to Assessments</button>
              </div>
            </div>
          )}
        </div>
      )}
    </DashboardLayout>
  );
}
