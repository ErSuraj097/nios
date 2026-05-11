'use client';

<<<<<<< HEAD
import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';
import { useRef, useEffect } from 'react';
import { 
  Clock, 
  CheckCircle2, 
  BarChart3, 
  Calendar, 
=======
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardLayout from '@/components/DashboardLayout';
import {
  Clock,
  CheckCircle2,
  BarChart3,
  Calendar,
>>>>>>> main
  ChevronRight,
  Timer,
  AlertCircle,
  Undo2,
  ArrowRight,
  FileText,
<<<<<<< HEAD
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
  const [answers, setAnswers] = useState<{[key: string]: string}>({});
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

  const filteredAssessments = MOCK_ASSESSMENTS.filter(a => 
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
    { label: 'Pending', value: '3', icon: Clock, color: 'text-amber-500 bg-amber-50' },
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
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 rounded-full blur-3xl" />
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <ShieldAlert className="text-brand-orange" />
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
                      <div className="text-xs font-black text-brand-orange mb-2">{s.status}</div>
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
                     className={`px-4 py-2 text-[10px] font-black rounded-xl uppercase tracking-widest transition-all ${
                       filter === f 
                         ? 'bg-brand-orange text-white shadow-lg' 
                         : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
                     }`}
                   >
                     {f}
                   </button>
                 ))}
               </div>
            </div>

            <div className="grid gap-4">
               {filteredAssessments.map((a) => (
                 <div key={a.id} className="group p-6 rounded-xl bg-white border border-slate-100 hover:border-brand-orange/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex flex-col md:flex-row items-center gap-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                      a.status === 'Completed' ? 'bg-emerald-50 text-emerald-500' : 'bg-orange-50 text-brand-orange'
                    }`}>
                      {a.type === 'Quiz' ? <Zap size={24} /> : a.type === 'Assignment' ? <FileText size={24} /> : <BookOpen size={24} />}
                    </div>
                    <div className="flex-1 text-center md:text-left">
                       <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{a.subject} · {a.type}</div>
                       <h4 className="text-lg font-black text-slate-900 group-hover:text-brand-orange transition-colors">{a.title}</h4>
                    </div>
                    <div className="flex items-center gap-8 px-8 border-x border-slate-50 hidden md:flex">
                       <div className="text-center">
                          <div className="text-[10px] font-black text-slate-400 uppercase mb-1">Due Date</div>
                          <div className="text-xs font-black text-slate-900 uppercase tracking-tighter">{a.dueDate}</div>
                       </div>
                       <div className="text-center min-w-[80px]">
                          <div className="text-[10px] font-black text-slate-400 uppercase mb-1">Status</div>
                          <div className={`text-[10px] font-black uppercase tracking-widest ${
                            a.status === 'Completed' ? 'text-emerald-500' : 'text-orange-500 underline decoration-2'
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
                          className="px-8 py-4 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-orange transition-all shadow-xl active:scale-95 flex items-center gap-2"
                         >
                           Start Module <ChevronRight size={14} />
=======
  Mic,
  MicOff,
  BookOpenCheck,
  Settings2,
  ShieldAlert,
  Zap,
  BookOpen,
  Award,
  ChevronLeft,
  LayoutGrid,
  Download,
  Search,
  Filter,
  Target
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import AssessmentProctoring from '@/components/AssessmentProctoring';

// Enhanced Mock Data for ISM Assessments
const NCISM_ASSESSMENTS = [
  {
    id: 'as-001',
    title: 'Mid-term: Basics of Pharmacology',
    subject: 'Dravyaguna',
    type: 'Quiz',
    status: 'Pending',
    dueDate: '15 MAY 2026',
    duration: '45 Mins',
    questions: [
      { id: 'q1', text: "Which of the following is considered 'Agrya' for Deepana and Pachana?", options: ["Chitraka", "Musta", "Shunti", "Pippali"], type: 'mcq' },
      { id: 'q2', text: "Describe the concept of 'Rasa-Panchaka' in Dravya identification.", type: 'subjective' },
      { id: 'q3', text: "According to Ayurveda, 'Virya' is of how many types?", options: ["2", "8", "Both 2 & 8", "4"], type: 'mcq' }
    ]
  },
  {
    id: 'as-002',
    title: 'Final Module: Fundamentals of Ayurveda',
    subject: 'Basic Principles',
    type: 'Quiz',
    status: 'Completed',
    dueDate: '10 MAY 2026',
    score: 92,
    questions: []
  },
  {
    id: 'as-003',
    title: 'Case Study: Unani Medicine History',
    subject: 'History of Medicine',
    type: 'Assignment',
    status: 'In Progress',
    dueDate: '20 MAY 2026',
    questions: []
  },
  {
    id: 'as-004',
    title: 'Quiz: Introduction to Siddha Medicine',
    subject: 'Siddha Basics',
    type: 'Quiz',
    status: 'Pending',
    dueDate: '18 MAY 2026',
    duration: '30 Mins',
    questions: [
      { id: 's1', text: "What are the three humors in Siddha medicine?", options: ["Vatha, Pitha, Kapha", "Vali, Azhal, lya", "Rasa, Rakta, Mamsa", "None of above"], type: 'mcq' }
    ]
  },
  {
    id: 'as-005',
    title: 'Speaking: Sanskrit Pronunciation',
    subject: 'Samskritam',
    type: 'Speaking',
    status: 'Pending',
    dueDate: '22 MAY 2026',
    duration: '15 Mins',
    questions: [
      { id: 'v1', text: "Pronounce the 'Shanti Mantra' clearly focusing on the vowels.", type: 'voice' }
    ]
  },
  {
    id: 'as-006',
    title: 'Reading: Classical Texts Analysis',
    subject: 'Ayurvedic Samhita',
    type: 'Reading',
    status: 'Pending',
    dueDate: '25 MAY 2026',
    duration: '40 Mins',
    questions: [
      { id: 'r1', text: "Read the following passage from Charaka Samhita and identify the main dravya qualities mentioned.", type: 'reading', passage: "अथातो विरेचनशताश्रितीयं विमानं व्याख्यास्याम इति ह स्माह भगवानात्रेयः..." }
    ]
  },
  {
    id: 'as-007',
    title: 'Listening: Patient Consultation Audio',
    subject: 'Clinical Practice',
    type: 'Listening',
    status: 'Pending',
    dueDate: '28 MAY 2026',
    duration: '20 Mins',
    questions: [
      { id: 'l1', text: "Listen to the consultation and identify the dominant Dosha mentioned by the patient.", type: 'audio', audioSrc: '/audio/consultation.mp3' }
    ]
  },
  {
    id: 'as-008',
    title: 'Final Examination: Integrative Medicine',
    subject: 'Holistic Health',
    type: 'Exam',
    status: 'Pending',
    dueDate: '05 JUN 2026',
    duration: '180 Mins',
    questions: [
      { id: 'e1', text: "Compare and contrast the diagnostic methodologies of Ayurveda and Modern Medicine.", type: 'subjective' }
    ]
  },
  {
    id: 'as-009',
    title: 'Viva-Voce: Practical Dravya Identification',
    subject: 'Dravyaguna',
    type: 'Interview',
    status: 'Pending',
    dueDate: '10 JUN 2026',
    duration: '30 Mins',
    questions: [
      { id: 'i1', text: "Oral assessment of herb identification and their therapeutic uses.", type: 'voice' }
    ]
  }
];

export default function AssessmentsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'list' | 'exam' | 'results'>('list');
  const [selectedExam, setSelectedExam] = useState<any>(null);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Exam State
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(2700); // 45 mins
  const [isSecureMode, setIsSecureMode] = useState(true);

  if (!user) return null;

  const filteredAssessments = NCISM_ASSESSMENTS.filter(a => {
    const matchesFilter = filter === 'All' || a.type === filter;
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const stats = [
    { label: 'Modules Pending', value: '03', icon: Clock, color: 'from-blue-600 to-indigo-700' },
    { label: 'Total Completed', value: '14', icon: CheckCircle2, color: 'from-emerald-600 to-teal-700' },
    { label: 'Overall Percentile', value: '94th', icon: Award, color: 'from-orange-600 to-amber-700' },
    { label: 'Avg. Accuracy', value: '88%', icon: BarChart3, color: 'from-blue-600 to-blue-700' },
  ];

  const handleStartExam = (exam: any) => {
    setSelectedExam(exam);
    setActiveTab('exam');
    setCurrentQIndex(0);
    setAnswers({});
    setTimeLeft(parseInt(exam.duration) * 60 || 1800);
  };

  return (
    <DashboardLayout
      title="Examination & Assessments"
      subtitle="Comprehensive evaluation gateway for NCISM specialized electives"
    >
      <AnimatePresence mode="wait">
        {activeTab === 'list' && (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-10"
          >
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="group p-8 rounded-[32px] bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${s.color} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity`} />
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-900/10`}>
                    <s.icon size={20} />
                  </div>
                  <div className="text-3xl font-black text-slate-900 mb-1">{s.value}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm">
               <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto">
                  {['All', 'Quiz', 'Speaking', 'Reading', 'Listening', 'Exam', 'Interview'].map((f) => (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                        filter === f ? 'bg-blue-700 text-white shadow-lg shadow-blue-900/20' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
               </div>
               <div className="relative w-full md:w-[300px]">
                  <input 
                    type="text" 
                    placeholder="Search evaluations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-12 text-xs font-bold focus:outline-none focus:ring-4 focus:ring-blue-700/5 focus:border-blue-700 transition-all"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
               </div>
            </div>

            {/* Assessment Grid */}
            <div className="grid gap-6">
               {filteredAssessments.map((a) => (
                 <div key={a.id} className="group p-8 rounded-[32px] bg-white border border-slate-200 hover:border-blue-300 transition-all flex flex-col lg:flex-row items-center gap-8 shadow-sm hover:shadow-2xl">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${
                      a.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-700'
                    }`}>
                      {a.type === 'Quiz' ? <Zap size={28} /> : 
                       a.type === 'Speaking' || a.type === 'Interview' ? <Mic size={28} /> : 
                       a.type === 'Reading' ? <BookOpen size={28} /> : 
                       a.type === 'Exam' ? <Award size={28} /> : 
                       a.type === 'Listening' ? <Mic size={28} /> : <FileText size={28} />}
                    </div>
                    
                    <div className="flex-1 text-center lg:text-left space-y-1">
                       <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{a.subject} • {a.type}</div>
                       <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{a.title}</h4>
                       <div className="flex items-center justify-center lg:justify-start gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          <span className="flex items-center gap-1.5"><Calendar size={12} /> {a.dueDate}</span>
                          <span className="w-1 h-1 bg-slate-300 rounded-full" />
                          <span className="flex items-center gap-1.5"><Clock size={12} /> {a.duration || 'N/A'}</span>
                       </div>
                    </div>

                    <div className="flex items-center gap-4">
                       {a.status === 'Completed' ? (
                         <div className="px-8 py-4 bg-emerald-50 rounded-2xl flex flex-col items-center">
                            <div className="text-2xl font-black text-emerald-600">{a.score}%</div>
                            <div className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Passed</div>
                         </div>
                       ) : (
                         <button 
                           onClick={() => handleStartExam(a)}
                           className="px-10 py-5 bg-blue-700 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 flex items-center gap-3"
                         >
                            Start Module <ChevronRight size={16} />
>>>>>>> main
                         </button>
                       )}
                    </div>
                 </div>
               ))}
            </div>
<<<<<<< HEAD
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
                <div className="text-sm font-black text-slate-400 uppercase tracking-widest">Questions Answered</div>
              </div>
              <div className="text-center p-8 bg-slate-50 rounded-xl">
                <div className="text-3xl font-black text-brand-orange mb-2">{timeLeft > 0 ? 'Saved' : 'Auto-submitted'}</div>
                <div className="text-sm font-black text-slate-400 uppercase tracking-widest">Time Status</div>
              </div>
              <div className="text-center p-8 bg-slate-50 rounded-xl">
                <div className="text-3xl font-black text-blue-500 mb-2">Download</div>
                <div className="text-sm font-black text-slate-400 uppercase tracking-widest">Score Report</div>
              </div>
            </div>
            <button 
              onClick={() => setActiveTab('list')}
              className="px-12 py-6 bg-slate-900 text-white rounded-xl font-black text-lg uppercase tracking-widest hover:bg-brand-orange transition-all shadow-2xl shadow-slate-900/20"
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
                 <div className={`px-6 py-3 rounded-xl border flex items-center gap-3 transition-all ${
                   timeLeft < 300 ? 'bg-red-50 text-red-600 border-red-100 animate-pulse' : 'bg-blue-50 text-blue-600 border-blue-100'
                 }`}>
                    <Timer size={18} />
                    <span className="text-lg font-black tracking-tighter">{formatTime(timeLeft)}</span>
                 </div>
              </div>
           </div>

           <div className="p-10 rounded-xl bg-white border border-slate-100 shadow-sm space-y-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
                <div className="h-full bg-brand-orange w-1/3 transition-all duration-1000" />
              </div>

              <div className="space-y-4">
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-brand-orange text-white text-[10px] font-black uppercase rounded-lg tracking-widest">Question {currentQuestionIndex + 1} / {currentQuestions.length || 20}</span>
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
                      className="w-full h-48 p-8 bg-slate-50 border-2 border-slate-100 rounded-xl text-slate-600 font-medium placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-brand-orange/5 transition-all text-sm"
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
                       className={`group p-6 text-left rounded-xl border-2 transition-all flex items-center gap-6 ${
                         isSelected 
                           ? 'border-brand-orange bg-brand-orange/10 shadow-md shadow-orange-500/10' 
                           : 'border-slate-50 hover:border-brand-orange/30 hover:bg-orange-50'
                       }`}
                     >
                        <div className={`w-10 h-10 rounded-xl font-black text-sm flex items-center justify-center transition-all ${
                          isSelected ? 'bg-brand-orange text-white shadow-lg' : 'bg-slate-50 text-slate-400 group-hover:bg-brand-orange group-hover:text-white'
                        }`}>
                          {String.fromCharCode(65 + i)}
                        </div>
                        <span className={`text-sm font-black flex-1 transition-colors ${
                          isSelected ? 'text-brand-orange' : 'text-slate-600 group-hover:text-slate-900'
                        }`}>{opt}</span>
                        <div className={`w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center ${
                          isSelected 
                            ? 'bg-brand-orange border-brand-orange shadow-md' 
                            : 'border-slate-200 group-hover:border-brand-orange bg-white'
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
                  className={`px-12 py-5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl flex items-center gap-3 ${
                    isSubmitted 
                      ? 'bg-emerald-500 shadow-emerald-500/20 cursor-not-allowed' 
                      : 'bg-brand-orange hover:bg-orange-600 shadow-orange-500/20 active:scale-95'
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
=======
          </motion.div>
        )}

        {activeTab === 'exam' && selectedExam && (
          <motion.div
            key="exam"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
          >
            <AssessmentProctoring />
            
            {/* Exam Header */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-900 p-8 rounded-[40px] text-white relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
               <div className="flex items-center gap-6 relative z-10">
                  <button 
                    onClick={() => setActiveTab('list')}
                    className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight">{selectedExam.title}</h3>
                    <div className="flex items-center gap-3 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                       <span>{selectedExam.subject}</span>
                       <span className="w-1 h-1 bg-blue-900 rounded-full" />
                       <span>Safe Mode Active</span>
                    </div>
                  </div>
               </div>

               <div className="flex items-center gap-4 relative z-10">
                  <div className={`px-8 py-4 rounded-2xl border-2 flex items-center gap-4 transition-all ${
                    timeLeft < 300 ? 'bg-red-500/10 border-red-500 animate-pulse' : 'bg-white/5 border-white/10'
                  }`}>
                    <Timer size={24} className={timeLeft < 300 ? 'text-red-500' : 'text-blue-400'} />
                    <span className="text-3xl font-black tabular-nums tracking-tighter">
                      {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
                    </span>
                  </div>
               </div>
            </div>

            {/* Main Content Area */}
            <div className="grid lg:grid-cols-12 gap-10">
               {/* Question Section */}
               <div className="lg:col-span-8 space-y-8">
                  <div className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${((currentQIndex + 1) / selectedExam.questions.length) * 100}%` }}
                          className="h-full bg-blue-700" 
                        />
                     </div>
                     
                     <div className="space-y-10">
                        <div className="flex items-center justify-between">
                           <span className="px-4 py-2 bg-blue-50 text-blue-700 text-[10px] font-black uppercase rounded-xl tracking-widest">
                              Question {currentQIndex + 1} of {selectedExam.questions.length}
                           </span>
                           <button className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-700 transition-all">
                              <BookOpenCheck size={16} /> Technical Reference
                           </button>
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 leading-snug">
                           {selectedExam.questions[currentQIndex]?.text}
                        </h2>

                        <div className="space-y-6">
                           {selectedExam.questions[currentQIndex]?.type === 'mcq' ? (
                             selectedExam.questions[currentQIndex].options.map((opt: string, i: number) => {
                               const isSelected = answers[selectedExam.questions[currentQIndex].id] === opt;
                               return (
                                 <button
                                   key={i}
                                   onClick={() => setAnswers({...answers, [selectedExam.questions[currentQIndex].id]: opt})}
                                   className={`w-full p-6 rounded-[24px] border-2 text-left flex items-center gap-6 transition-all ${
                                     isSelected ? 'border-blue-700 bg-blue-50 shadow-lg shadow-blue-900/10' : 'border-slate-100 hover:border-blue-200 hover:bg-slate-50'
                                   }`}
                                 >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm transition-all ${
                                      isSelected ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-500'
                                    }`}>
                                      {String.fromCharCode(65 + i)}
                                    </div>
                                    <span className={`text-sm font-bold flex-1 ${isSelected ? 'text-blue-900' : 'text-slate-600'}`}>{opt}</span>
                                    <div className={`w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center ${
                                      isSelected ? 'border-blue-700 bg-blue-700' : 'border-slate-300'
                                    }`}>
                                      {isSelected && <CheckCircle2 size={12} className="text-white" />}
                                    </div>
                                 </button>
                               );
                             })
                           ) : selectedExam.questions[currentQIndex]?.type === 'voice' ? (
                              <div className="flex flex-col items-center py-10 space-y-8 bg-slate-50 rounded-[32px] border-2 border-dashed border-slate-200">
                                 <div className="w-24 h-24 bg-blue-700 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-900/20 animate-pulse cursor-pointer">
                                    <Mic size={40} />
                                 </div>
                                 <div className="text-center">
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Voice Input Active</div>
                                    <div className="text-sm font-bold text-slate-900 italic">"Listening for your response..."</div>
                                 </div>
                                 <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map(i => (
                                      <div key={i} className="w-1 h-8 bg-blue-500 rounded-full animate-wave" style={{ animationDelay: `${i * 0.1}s` }} />
                                    ))}
                                 </div>
                              </div>
                           ) : selectedExam.questions[currentQIndex]?.type === 'reading' ? (
                              <div className="space-y-6">
                                 <div className="p-8 bg-slate-50 border border-slate-200 rounded-[32px] text-lg font-medium leading-relaxed italic text-slate-700">
                                    {selectedExam.questions[currentQIndex].passage}
                                 </div>
                                 <textarea 
                                   placeholder="Type your analysis here..."
                                   className="w-full h-40 p-8 bg-white border-2 border-slate-100 rounded-[32px] text-sm font-medium focus:border-blue-700 transition-all resize-none"
                                 />
                              </div>
                           ) : selectedExam.questions[currentQIndex]?.type === 'audio' ? (
                              <div className="space-y-8">
                                 <div className="flex items-center gap-6 p-8 bg-blue-900 text-white rounded-[32px] shadow-xl">
                                    <button className="w-16 h-16 bg-white text-blue-900 rounded-2xl flex items-center justify-center hover:scale-105 transition-all">
                                       <Zap size={24} fill="currentColor" />
                                    </button>
                                    <div className="flex-1 space-y-2">
                                       <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                                          <div className="h-full bg-blue-400 w-1/2" />
                                       </div>
                                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                                          <span>01:24</span>
                                          <span>03:50</span>
                                       </div>
                                    </div>
                                 </div>
                                 <textarea 
                                   placeholder="Transcribe or analyze the audio context..."
                                   className="w-full h-40 p-8 bg-slate-50 border-2 border-slate-100 rounded-[32px] text-sm font-medium focus:border-blue-700 transition-all resize-none"
                                 />
                              </div>
                           ) : (
                             <textarea 
                               placeholder="Type your detailed response here..."
                               className="w-full h-48 p-8 bg-slate-50 border-2 border-slate-100 rounded-[32px] text-sm font-medium focus:outline-none focus:ring-4 focus:ring-blue-700/5 focus:border-blue-700 transition-all resize-none"
                             />
                           )}
                        </div>

                        <div className="pt-10 flex items-center justify-between border-t border-slate-100">
                           <button 
                             disabled={currentQIndex === 0}
                             onClick={() => setCurrentQIndex(currentQIndex - 1)}
                             className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 disabled:opacity-30 flex items-center gap-2"
                           >
                              <ChevronLeft size={16} /> Previous
                           </button>
                           <button 
                             onClick={() => {
                               if (currentQIndex < selectedExam.questions.length - 1) {
                                 setCurrentQIndex(currentQIndex + 1);
                               } else {
                                 setActiveTab('results');
                               }
                             }}
                             className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-900 transition-all shadow-xl flex items-center gap-3"
                           >
                              {currentQIndex === selectedExam.questions.length - 1 ? 'Finish Module' : 'Confirm & Next'}
                              <ArrowRight size={16} />
                           </button>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Navigation Pane */}
               <div className="lg:col-span-4 space-y-8">
                  <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-xl shadow-slate-200/50">
                     <div className="flex items-center gap-3 mb-8 px-2">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                           <LayoutGrid size={20} />
                        </div>
                        <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">Nav Grid</h3>
                     </div>
                     <div className="grid grid-cols-4 gap-3">
                        {selectedExam.questions.map((q: any, i: number) => (
                          <button
                            key={i}
                            onClick={() => setCurrentQIndex(i)}
                            className={`aspect-square rounded-xl flex items-center justify-center text-[10px] font-black transition-all border-2 ${
                              currentQIndex === i ? 'border-blue-700 bg-blue-50 text-blue-700 shadow-md' : 
                              answers[q.id] ? 'border-emerald-500 bg-emerald-50 text-emerald-600' : 'border-slate-50 bg-slate-50 text-slate-400'
                            }`}
                          >
                            {i + 1}
                          </button>
                        ))}
                     </div>
                  </div>

                  <div className="bg-blue-50 p-8 rounded-[40px] border border-blue-100">
                     <div className="flex items-center gap-3 mb-6">
                        <ShieldAlert className="text-blue-700" size={20} />
                        <h3 className="text-xs font-black text-slate-900 uppercase tracking-tight">Integrity Mode</h3>
                     </div>
                     <p className="text-[10px] font-bold text-slate-500 leading-relaxed uppercase tracking-widest">
                        Your session is being monitored via AI proctoring. Avoid switching tabs or looking away from the screen.
                     </p>
                  </div>
               </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'results' && (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto py-20 text-center space-y-10"
          >
            <div className="w-32 h-32 rounded-[40px] bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/30">
               <CheckCircle2 size={64} />
            </div>
            
            <div className="space-y-4">
               <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase">Evaluation Complete</h2>
               <p className="text-xl font-medium text-slate-500">Your performance has been successfully indexed.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {[
                 { label: 'Score', value: '85%', icon: Target },
                 { label: 'Accuracy', value: '92%', icon: Zap },
                 { label: 'Time Spent', value: '38m', icon: Clock },
                 { label: 'Percentile', value: '96th', icon: Award },
               ].map((item, i) => (
                 <div key={i} className="p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm">
                    <item.icon className="mx-auto mb-4 text-blue-600 opacity-50" size={24} />
                    <div className="text-3xl font-black text-slate-900">{item.value}</div>
                    <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.label}</div>
                 </div>
               ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-10">
               <button 
                 onClick={() => setActiveTab('list')}
                 className="px-12 py-6 bg-slate-900 text-white rounded-3xl font-black text-[12px] uppercase tracking-widest hover:bg-blue-900 transition-all shadow-2xl active:scale-95"
               >
                  Return to Dashboard
               </button>
               <button className="px-12 py-6 bg-white border border-slate-200 text-slate-900 rounded-3xl font-black text-[12px] uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-3">
                  <Download size={18} /> Download Transcript
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
>>>>>>> main
    </DashboardLayout>
  );
}
