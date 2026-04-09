'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, Lightbulb, MessageSquare, BookOpen, Clock, Award, Zap } from 'lucide-react';
import Image from 'next/image';
import { mockChatHistory, quickSuggestions, courseRecommendations } from '@/lib/mock-chat-data';
import Link from 'next/link';

interface ChatbotModalProps {
  onClose: () => void;
}

export default function ChatbotModal({ onClose }: ChatbotModalProps) {
  const [messages, setMessages] = useState(mockChatHistory);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleSend = () => {
    if (!input.trim() || isTyping) return;

    const userMsg = {
      id: Date.now().toString(),
      role: 'user' as const,
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "Great choice! Here's a personalized 8-week study plan for Physics Class 12. Would you like it as PDF?",
        "Recommended courses: Mechanics (4.9⭐) and Electrodynamics (4.8⭐). Start with NCERT Chapter 1-5.",
        "📚 **Books:** HC Verma Vol 1, NCERT Physics, NIOS SLM. Practice 50 problems/week for best results.",
        "Generate TMA solutions? Upload your draft or describe the problem."
      ];
      const aiMsg = {
        id: (Date.now() + 1).toString(),
        role: 'ai' as const,
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: '/ai-avatar.png',
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500 + Math.random() * 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-end sm:items-center p-4 sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={e => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[90vh] sm:max-h-[85vh] bg-white/90 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-orange-50 to-amber-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image
                src="/course_recommendation_AI.png"
                alt="Course AI"
                width={40}
                height={40}
                className="rounded-2xl"
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
            </div>
            <div>
              <div className="font-black text-lg text-slate-900 uppercase tracking-tight">Course AI Assistant</div>
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1">
                <Sparkles size={12} /> Live · Class 12 Optimized
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-200 rounded-2xl transition-all text-slate-500 hover:text-slate-900"
            aria-label="Close chatbot"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-slate-300">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'ai' ? 'bg-slate-100 rounded-tr-none' : 'bg-brand-orange text-white rounded-tl-none shadow-lg'}`}>
                <div className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</div>
                <div className={`text-xs mt-2 font-medium ${msg.role === 'ai' ? 'text-slate-500' : 'text-orange-100'}`}>
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-center gap-2 p-4 bg-slate-100 rounded-2xl rounded-tr-none">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0s]" />
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
                <span className="text-xs text-slate-500 font-medium">AI is typing...</span>
              </div>
            </div>
          )}
          <div ref={scrollRef} />
        </div>

        {/* Quick Suggestions */}
        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <div className="flex flex-wrap gap-2 mb-4">
            {quickSuggestions.map((suggestion, i) => (
              <button
                key={i}
                onClick={() => setInput(suggestion)}
                className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:border-brand-orange hover:text-brand-orange transition-all text-center"
              >
                {suggestion}
              </button>
            ))}
          </div>

          {/* Course Recommendations */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            {courseRecommendations.map((course) => (
              <Link
                key={course.id}
                href="/courses"
                className="group p-3 bg-white border border-slate-100 rounded-xl hover:border-brand-orange hover:shadow-lg transition-all flex flex-col items-center text-center text-xs"
              >
                <div className="w-full aspect-video bg-slate-50 rounded-lg overflow-hidden mb-2 group-hover:bg-orange-50">
                  <Image src={course.image} alt={course.title} fill className="object-cover" />
                </div>
                <div className="font-black text-slate-900">{course.title}</div>
                <div className="text-slate-500 uppercase tracking-tight">{course.level}</div>
                <div className="flex items-center gap-1 text-xs text-emerald-600 font-bold mt-1">
                  {course.rating}⭐ <Clock size={12} />
                </div>
              </Link>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-end gap-3 pt-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
              placeholder="Ask about courses, study plans, books..."
              className="flex-1 bg-white border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none"
              disabled={isTyping}
            />
<button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
              className="p-3 bg-brand-orange text-white rounded-2xl hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-orange-500/50 transition-all flex-shrink-0 h-12 w-12"
         > </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

