'use client';
import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';

const subjects = [
  { name: 'Science', score: 72, progress: 85, time: '14.5 hrs', avg: 68 },
  { name: 'Mathematics', score: 55, progress: 60, time: '22 hrs', avg: 52 },
  { name: 'English', score: 88, progress: 95, time: '9 hrs', avg: 74 },
  { name: 'Social Science', score: 40, progress: 45, time: '11 hrs', avg: 58 },
];

const weeklyActivity = [
  { day: 'Mon', hours: 4.5 },
  { day: 'Tue', hours: 2.8 },
  { day: 'Wed', hours: 3.2 },
  { day: 'Thu', hours: 1.5 },
  { day: 'Fri', hours: 4.0 },
  { day: 'Sat', hours: 5.5 },
  { day: 'Sun', hours: 0.5 },
];

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <DashboardLayout title="My Learning Analytics" subtitle="Data-driven insights into your academic progress and engagement">
      
      {/* Stats Summary */}
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mb-6">
        {[
          { icon: '⏱️', label: 'Time on Task', value: '62.5 hrs', change: '+12% this week', up: true, color: 'primary' },
          { icon: '🎯', label: 'Overall Progress', value: '74%', change: 'On Track', up: true, color: 'success' },
          { icon: '🧠', label: 'Course Mastery', value: 'Level 4', change: 'Advanced', up: true, color: 'accent' },
          { icon: '📉', label: 'Dropout Risk', value: 'Low', change: 'Stable', up: false, color: 'purple' },
        ].map((s) => (
          <div key={s.label} className="stat-card">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-sm bg-[color-mix(in_srgb,theme(colors.${s.color}.500),transparent_82)]">
              {s.icon}
            </div>
            <div>
              <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
              <div className="text-text-secondary text-sm font-medium">{s.label}</div>
            </div>
            <div className={`text-sm font-semibold flex items-center gap-1 ${s.up ? 'text-success' : 'text-warning'} ${s.color}`}>
              {s.change}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
        
        {/* Main Content - Performance Charts */}
        <div className="flex flex-col gap-6">
          
          {/* Weekly Engagement Chart (Simplified CSS Bar Chart) */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-semibold text-text-primary">Weekly Engagement (Hours)</h4>
              <button className="px-3 py-1.5 border border-border-light rounded-lg text-sm font-medium text-text-secondary hover:bg-bg-hover hover:text-text-primary transition-all">Last 7 Days</button>
            </div>
            <div className="flex items-end justify-between h-[200px] px-4">
              {weeklyActivity.map((d, i) => (
                <div key={i} className="flex flex-col items-center flex-1 gap-3">
                  <div className="text-xs text-text-muted">{(d.hours).toFixed(1)}h</div>
                  <div 
                    title={`${d.hours} hrs`}
                    className="animate-slide-up w-8 h-[${d.hours * 30}px] bg-gradient-to-t from-primary-700 to-primary-400 rounded-t-sm [animation-delay:${i*0.1}s]"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                  <div className="text-xs font-bold text-text-secondary">{d.day}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Subject Performance Breakdown */}
          <div className="card p-0">
            <div className="p-5 border-b border-border">
              <h4>Subject Mastery Breakdown</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-bg-hover">
                    <th className="p-4 text-left text-xs font-bold text-text-muted uppercase tracking-wider border-b border-border">Subject</th>
                    <th className="p-4 text-left text-xs font-bold text-text-muted uppercase tracking-wider border-b border-border">Engagement</th>
                    <th className="p-4 text-left text-xs font-bold text-text-muted uppercase tracking-wider border-b border-border">My Score</th>
                    <th className="p-4 text-left text-xs font-bold text-text-muted uppercase tracking-wider border-b border-border">Avg. Score</th>
                    <th className="p-4 text-left text-xs font-bold text-text-muted uppercase tracking-wider border-b border-border">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((s, i) => (
                    <tr key={i} className="hover:bg-bg-hover transition-colors border-b border-border last:border-b-0">
                      <td className="p-4 font-semibold text-text-primary">{s.name}</td>
                      <td className="p-4 text-text-muted">{s.time}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                        <span className={`font-bold ${s.score >= s.avg ? 'text-success' : 'text-danger'}`}>{s.score}%</span>
                          <div className="progress-bar w-10 flex-shrink-0">
                            <div className={`h-full rounded-full transition-all ${s.score >= s.avg ? 'bg-success' : 'bg-danger'}`} style={{ width: `${s.score}%` }} />
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-text-muted">{s.avg}%</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${s.score >= s.avg ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>
                          {s.score >= s.avg ? 'Above Avg' : 'Review Req'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Sidebar - Insights and Employability */}
        <div className="flex flex-col gap-6">
          
          {/* AI Success Predictor */}
          <div className="card bg-gradient-to-br from-purple-500/10 to-slate-900/95 border-purple-500/30 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-primary-300 font-semibold">AI Success Predictor</h4>
              <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">Beta</span>
            </div>
            <div className="text-center py-4">
              <div className="text-5xl font-black text-white mb-2">84%</div>
              <p className="text-xs text-text-muted">Probability of Grade A in Finals</p>
            </div>
            <p className="text-xs text-text-secondary mt-4 pt-4 border-t border-border">
              Focus more on <strong>Social Science</strong> and complete the remaining TMAs to reach 90+%.
            </p>
          </div>

          {/* Employability Mapping */}
          <div className="card">
            <h4>Employability Mapping</h4>
            <p className="text-xs text-muted mb-4">Skills aligned with your current curriculum.</p>
            <div className="flex flex-col gap-3.5">
              {[
                { skill: 'Critical Thinking', level: 65 },
                { skill: 'Digital Literacy', level: 82 },
                { skill: 'Communication', level: 45 },
                { skill: 'Problem Solving', level: 78 },
              ].map((s, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span>{s.skill}</span>
                    <span className="text-text-muted">{s.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill-accent" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 px-4 py-2 border border-border rounded-lg text-sm font-medium text-text-secondary hover:bg-bg-hover hover:text-text-primary transition-all">View Career Pathways</button>
          </div>

          {/* Export Report CTA */}
          <div className="bg-card border border-border rounded-xl p-6 text-center shadow-sm">
             <h4 className="text-sm font-semibold mb-2 text-text-primary">Holistic Progress Card</h4>
             <p className="text-xs text-text-muted mb-4">Download your NEP 360° Assessment Report.</p>
             <button id="download-report-btn" className="w-full bg-primary hover:bg-primary-600 text-white px-4 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-primary transition-all">
               📄 Download PDF
             </button>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
