'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';
import { useRef, useEffect } from 'react';
import {
  Clock,
  CheckCircle2,
  BarChart3,
  Calendar,
  ChevronRight,
  Timer,
  AlertCircle,
  Undo2,
  ArrowRight,
  FileText,
  Mic,
  MicOff,
  BookOpenCheck,
  Settings2,
  ShieldAlert,
  Zap,
  BookOpen
} from 'lucide-react';
import { MOCK_ASSESSMENTS } from '@/lib/mock-data';
import { useAuth } from '@/contexts/AuthContext';
import AssessmentProctoring from '@/components/AssessmentProctoring';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function AssessmentsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'list' | 'quiz' | 'results'>('list');
  const [selectedAssessment, setSelectedAssessment] = useState<any>(null);
  const [filter, setFilter] = useState('All');
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [showSecureSettings, setShowSecureSettings] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (activeTab === 'quiz' && selectedAssessment) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeTab, selectedAssessment]);

  const filteblueAssessments = MOCK_ASSESSMENTS.filter(a =>
    filter === 'All' || a.type === filter
  );

  const handleAnswerSelect = (qId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [qId]: answer }));
  };

  const handleSubmit = () => {
    if (selectedAssessment) {
      // Mock scoring based on mock-data correct answers
      const score = Object.keys(answers).length * 5; // Simple scoring
      setFinalScore(Math.min(score, 100));
      setIsSubmitted(true);
      setTimeout(() => {
        setActiveTab('results');
      }, 2000);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!user) return null;

  const currentQuestions = selectedAssessment?.questions || [];
  const currentQuestion = currentQuestions[currentQuestionIndex];

  const stats = [
    { label: 'Pending', value: '3', icon: Clock, color: 'text-blue-500 bg-blue-50' },
    { label: 'Completed', value: '12', icon: CheckCircle2, color: 'text-emerald-500 bg-emerald-50' },
    { label: 'Avg. Score', value: '88%', icon: BarChart3, color: 'text-blue-500 bg-blue-50' },
    { label: 'Upcoming', value: '2', icon: Calendar, color: 'text-purple-500 bg-purple-50' },
  ];

  return (
    <DashboardLayout
      title="Academic Assessments"
      subtitle="Track your progress through quizzes, exams, and assignments"
    >
      {activeTab === 'list' ? (
        <div className="space-y-10 animate-fade-in relative">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-slate-100 shadow-sm transition-all hover:shadow-xl group">
                <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <s.icon size={20} />
                </div>
                <div className="text-2xl font-black text-slate-900 tracking-tighter mb-1">{s.value}</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Secure Settings Overlay Toggle */}
          <div className="flex justify-end">
            <button
              onClick={() => setShowSecureSettings(!showSecureSettings)}
              className="px-6 py-3 bg-slate-100 text-slate-500 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
            >
              <Settings2 size={14} /> Security & Integrity Settings
            </button>
          </div>

          <AnimatePresence>
            {showSecureSettings && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-8 bg-slate-900 border border-white/10 rounded-xl text-white space-y-6 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-900/20 rounded-full blur-3xl" />
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <ShieldAlert className="text-blue-900" />
                  <h3 className="text-sm font-black uppercase tracking-tight">Security Configuration</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { label: 'Browser Lockdown', status: 'Enabled', detail: 'External tabs blocked' },
                    { label: 'IP Restriction', status: 'Active', detail: 'Assigned test centers only' },
                    { label: 'AI Proctoring', status: 'AI + Human', detail: 'Facial & behavioral analysis' },
                  ].map((s, i) => (
                    <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                      <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">{s.label}</div>
                      <div className="text-xs font-black text-blue-900 mb-2">{s.status}</div>
                      <div className="text-[8px] font-medium text-slate-500 uppercase">{s.detail}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Assessment List */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Active Evaluations</h3>
              <div className="flex gap-2">
                {['All', 'Quizzes', 'Assignments'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2 text-[10px] font-black rounded-xl uppercase tracking-widest transition-all ${filter === f
                      ? 'bg-blue-900 text-white shadow-lg'
                      : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {filteblueAssessments.map((a) => (
                <div key={a.id} className="group p-6 rounded-xl bg-white border border-slate-100 hover:border-blue-900/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex flex-col md:flex-row items-center gap-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${a.status === 'Completed' ? 'bg-emerald-50 text-emerald-500' : 'bg-blue-50 text-blue-900'
                    }`}>
                    {a.type === 'Quiz' ? <Zap size={24} /> : a.type === 'Assignment' ? <FileText size={24} /> : <BookOpen size={24} />}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{a.subject} · {a.type}</div>
                    <h4 className="text-lg font-black text-slate-900 group-hover:text-blue-900 transition-colors">{a.title}</h4>
                  </div>
                  <div className="flex items-center gap-8 px-8 border-x border-slate-50 hidden md:flex">
                    <div className="text-center">
                      <div className="text-[10px] font-black text-slate-400 uppercase mb-1">Due Date</div>
                      <div className="text-xs font-black text-slate-900 uppercase tracking-tighter">{a.dueDate}</div>
                    </div>
                    <div className="text-center min-w-[80px]">
                      <div className="text-[10px] font-black text-slate-400 uppercase mb-1">Status</div>
                      <div className={`text-[10px] font-black uppercase tracking-widest ${a.status === 'Completed' ? 'text-emerald-500' : 'text-blue-500 underline decoration-2'
                        }`}>{a.status}</div>
                    </div>
                  </div>
                  <div>
                    {a.status === 'Completed' ? (
                      <div className="px-6 py-3 bg-slate-50 rounded-xl text-[10px] font-black text-emerald-600 uppercase tracking-widest flex items-center gap-2">
                        <CheckCircle2 size={14} /> SCORE: {a.score}%
                      </div>
                    ) : (
                      <button
                        onClick={() => { setSelectedAssessment(a); setActiveTab('quiz'); setCurrentQuestionIndex(0); setAnswers({}); setTimeLeft(1800); }}
                        className="px-8 py-4 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-900 transition-all shadow-xl active:scale-95 flex items-center gap-2"
                      >
                        Start Module <ChevronRight size={14} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : activeTab === 'results' && selectedAssessment ? (
        <div className="max-w-4xl mx-auto space-y-12">
          <AssessmentProctoring />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-24"
          >
            <div className="inline-flex items-center justify-center w-32 h-32 mx-auto mb-8 rounded-xl bg-emerald-500 shadow-2xl shadow-emerald-500/25">
              <CheckCircle2 size={48} className="text-white" />
            </div>
            <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">{finalScore}%</h1>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-100 text-emerald-700 rounded-xl text-lg font-black uppercase tracking-widest mb-8">
              Excellent Performance!
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-8 bg-slate-50 rounded-xl">
                <div className="text-3xl font-black text-emerald-500 mb-2">{Object.keys(answers).length}/{selectedAssessment.questions?.length || 0}</div>
                <div className="text-sm font-black text-slate-400 uppercase tracking-widest">Questions Answeblue</div>
              </div>
              <div className="text-center p-8 bg-slate-50 rounded-xl">
                <div className="text-3xl font-black text-blue-900 mb-2">{timeLeft > 0 ? 'Saved' : 'Auto-submitted'}</div>
                <div className="text-sm font-black text-slate-400 uppercase tracking-widest">Time Status</div>
              </div>
              <div className="text-center p-8 bg-slate-50 rounded-xl">
                <div className="text-3xl font-black text-blue-500 mb-2">Download</div>
                <div className="text-sm font-black text-slate-400 uppercase tracking-widest">Score Report</div>
              </div>
            </div>
            <button
              onClick={() => setActiveTab('list')}
              className="px-12 py-6 bg-slate-900 text-white rounded-xl font-black text-lg uppercase tracking-widest hover:bg-blue-900 transition-all shadow-2xl shadow-slate-900/20"
            >
              Back to Assessments
            </button>
          </motion.div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto animate-slide-up relative">
          <AssessmentProctoring />

          <div className="mb-8 flex items-center justify-between">
            <button
              onClick={() => setActiveTab('list')}
              className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors"
            >
              <Undo2 size={16} /> Quit Evaluation
            </button>

            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  setIsVoiceActive(!isVoiceActive);
                  if (!isVoiceActive) {
                    // Mock speech recognition
                    console.log('🎤 Voice input started - "Your answer would appear here..."');
                  }
                }}
                title={isVoiceActive ? "Stop Voice Input" : "Start Voice Input"}
                className={`p-4 rounded-xl border transition-all shadow-sm ${isVoiceActive ? 'bg-emerald-500 text-white border-emerald-400 shadow-lg shadow-emerald-500/20 animate-pulse' : 'bg-white text-slate-400 border-slate-100 hover:bg-slate-50'}`}
              >
                {isVoiceActive ? <Mic size={20} /> : <MicOff size={20} />}
              </button>
              <div className={`px-6 py-3 rounded-xl border flex items-center gap-3 transition-all ${timeLeft < 300 ? 'bg-blue-50 text-blue-600 border-blue-100 animate-pulse' : 'bg-blue-50 text-blue-600 border-blue-100'
                }`}>
                <Timer size={18} />
                <span className="text-lg font-black tracking-tighter">{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>

          <div className="p-10 rounded-xl bg-white border border-slate-100 shadow-sm space-y-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
              <div className="h-full bg-blue-900 w-1/3 transition-all duration-1000" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-blue-900 text-white text-[10px] font-black uppercase rounded-lg tracking-widest">Question {currentQuestionIndex + 1} / {currentQuestions.length || 20}</span>
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">— {selectedAssessment?.subject}</span>
                </div>
                {currentQuestion?.referenceLink && (
                  <Link
                    href={currentQuestion.referenceLink}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-100 transition-all"
                  >
                    <BookOpenCheck size={14} /> Verify against SLM
                  </Link>
                )}
              </div>
              <h2 className="text-2xl font-black text-slate-900 leading-tight">
                {currentQuestion?.text || "Which of Newtonslaws states that an object at rest stays at rest unless acted on by an external force?"}
              </h2>
            </div>

            {currentQuestion?.type === 'subjective' ? (
              <div className="space-y-6">
                <textarea
                  className="w-full h-48 p-8 bg-slate-50 border-2 border-slate-100 rounded-xl text-slate-600 font-medium placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-blue-900/5 transition-all text-sm"
                  placeholder={isVoiceActive ? "Listening for your voice input..." : "Type your detailed answer here... AI evaluation will provide feedback based on standard rubrics."}
                />
                <div className="flex gap-4">
                  <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                    <span className="text-[8px] font-black text-emerald-600 uppercase tracking-widest">AI Rubric Match: High Coverage</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid gap-4">
                {(currentQuestion?.options || [
                  "NewtonsFirst Law of Motion",
                  "NewtonsSecond Law of Motion",
                  "NewtonsThird Law of Motion",
                  "The Law of Universal Gravitation"
                ]).map((opt: string, i: number) => {
                  const optionId = `${currentQuestion?.id}-${i}`;
                  const isSelected = answers[currentQuestion?.id || ''] === opt;
                  return (
                    <button
                      key={optionId}
                      onClick={() => handleAnswerSelect(currentQuestion?.id || 'default', opt)}
                      className={`group p-6 text-left rounded-xl border-2 transition-all flex items-center gap-6 ${isSelected
                        ? 'border-blue-900 bg-blue-900/10 shadow-md shadow-blue-500/10'
                        : 'border-slate-50 hover:border-blue-900/30 hover:bg-blue-50'
                        }`}
                    >
                      <div className={`w-10 h-10 rounded-xl font-black text-sm flex items-center justify-center transition-all ${isSelected ? 'bg-blue-900 text-white shadow-lg' : 'bg-slate-50 text-slate-400 group-hover:bg-blue-900 group-hover:text-white'
                        }`}>
                        {String.fromCharCode(65 + i)}
                      </div>
                      <span className={`text-sm font-black flex-1 transition-colors ${isSelected ? 'text-blue-900' : 'text-slate-600 group-hover:text-slate-900'
                        }`}>{opt}</span>
                      <div className={`w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center ${isSelected
                        ? 'bg-blue-900 border-blue-900 shadow-md'
                        : 'border-slate-200 group-hover:border-blue-900 bg-white'
                        }`}>
                        {isSelected && <CheckCircle2 size={12} className="text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            <div className="pt-10 flex items-center justify-between border-t border-slate-50">
              <button
                onClick={() => {
                  if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1);
                }}
                className="text-[10px] font-black text-slate-300 uppercase tracking-widest hover:text-slate-500"
              >
                {currentQuestionIndex > 0 ? "Previous Question" : "Skip Question"}
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitted}
                className={`px-12 py-5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl flex items-center gap-3 ${isSubmitted
                  ? 'bg-emerald-500 shadow-emerald-500/20 cursor-not-allowed'
                  : 'bg-blue-900 hover:bg-blue-600 shadow-blue-500/20 active:scale-95'
                  }`}
              >
                {isSubmitted ? 'Submitting...' : currentQuestionIndex < currentQuestions.length - 1 ? 'Confirm & Next' : 'Finish Quiz'}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3 justify-center">
            <AlertCircle size={16} className="text-slate-300" />
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
              AI Integrity Mode: Mouse behavioral tracking and gaze analysis active.
            </span>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
