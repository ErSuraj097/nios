'use client';

<<<<<<< HEAD
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, Lightbulb, MessageSquare, BookOpen, Clock, Award, Zap } from 'lucide-react';
import Image from 'next/image';
import { mockChatHistory, quickSuggestions, courseRecommendations } from '@/lib/mock-chat-data';
import Link from 'next/link';
=======
import { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  Paperclip, 
  MoreVertical, 
  Maximize2,
  Minimize2,
  Trash2,
  MessageSquare,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockChatHistory, quickSuggestions, ChatMessage } from '@/lib/mock-chat-data';
import Image from 'next/image';
>>>>>>> main

interface ChatbotModalProps {
  onClose: () => void;
}

export default function ChatbotModal({ onClose }: ChatbotModalProps) {
<<<<<<< HEAD
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
=======
  const [messages, setMessages] = useState<ChatMessage[]>(mockChatHistory);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
>>>>>>> main
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

<<<<<<< HEAD
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
=======
    // Mock AI Response
    setTimeout(() => {
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: `I've analyzed your request about "${input}". Here are some recommended resources and a quick study plan to help you progress efficiently. Would you like me to generate a practice quiz for this topic?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: '/ai-avatar.png'
      };
      setIsTyping(false);
      setMessages(prev => [...prev, aiMsg]);
    }, 1500);
>>>>>>> main
  };

  return (
    <motion.div
<<<<<<< HEAD
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

=======
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      className="fixed bottom-32 right-8 z-[105] w-[450px] h-[650px] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col sm:w-[calc(100vw-32px)] sm:bottom-24 sm:right-4 sm:h-[550px]"
    >
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-blue-900 to-red-700 text-white flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-inner">
              <Bot size={24} className="text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-blue-800 rounded-full" />
          </div>
          <div>
            <h3 className="font-black text-lg tracking-tight flex items-center gap-2">
              NIOS AI Assistant <Sparkles size={14} className="text-blue-300" />
            </h3>
            <p className="text-blue-200 text-[10px] font-black uppercase tracking-widest">Active • Course Recommender</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-white/10 rounded-xl transition-all"><MoreVertical size={18} /></button>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-xl transition-all"><X size={18} /></button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
        <div className="text-center py-4">
          <span className="px-4 py-1.5 bg-slate-200/50 text-slate-500 text-[9px] font-black uppercase tracking-[0.2em] rounded-full">Today</span>
        </div>

        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
            <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center shadow-sm ${msg.role === 'user' ? 'bg-blue-900 text-white' : 'bg-white border border-slate-200'}`}>
                {msg.role === 'user' ? <User size={14} /> : <Bot size={14} className="text-blue-900" />}
              </div>
              <div className="space-y-1">
                <div className={`p-4 rounded-2xl text-sm font-medium shadow-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-blue-900 text-white rounded-tr-none' 
                  : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none'
                }`}>
                  {msg.content.split('\n').map((line, i) => (
                    <p key={i} className={line.startsWith('•') ? 'ml-2' : ''}>{line}</p>
                  ))}
                  
                  {msg.type === 'quiz' && (
                    <div className="mt-4 p-4 bg-emerald-50 border border-emerald-100 rounded-xl space-y-3">
                      <div className="flex items-center gap-2 text-emerald-700 font-black text-[10px] uppercase tracking-widest">
                        <BookOpen size={14} /> Quiz Suggestion
                      </div>
                      <button className="w-full py-2.5 bg-emerald-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-md">
                        Take Quiz Now
                      </button>
                    </div>
                  )}
                </div>
                <div className={`text-[9px] font-black text-slate-400 uppercase tracking-widest ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                  {msg.timestamp} {msg.role === 'user' && '• Sent'}
                </div>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="flex gap-3 max-w-[85%]">
              <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                <Bot size={14} className="text-blue-900" />
              </div>
              <div className="p-4 bg-white border border-slate-100 rounded-2xl rounded-tl-none shadow-sm">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-blue-900/30 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-blue-900/30 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-blue-900/30 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Footer / Input */}
      <div className="p-6 bg-white border-t border-slate-100 space-y-4">
        {/* Quick Suggestions */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {quickSuggestions.map((text, i) => (
            <button
              key={i}
              onClick={() => { setInput(text); }}
              className="whitespace-nowrap px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-black text-slate-500 uppercase tracking-widest hover:border-blue-900 hover:text-blue-900 transition-all active:scale-95"
            >
              {text}
            </button>
          ))}
        </div>

        <form onSubmit={handleSend} className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about courses, TMA or exams..."
            className="w-full p-4 pr-16 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:ring-4 focus:ring-blue-900/5 focus:border-blue-900 outline-none transition-all placeholder:text-slate-400"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <button type="button" className="p-2 text-slate-400 hover:text-slate-900 transition-colors"><Paperclip size={18} /></button>
            <button 
              type="submit" 
              disabled={!input.trim()}
              className="p-2.5 bg-blue-900 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-all disabled:opacity-50 disabled:grayscale"
            >
              <Send size={18} />
            </button>
          </div>
        </form>
        <p className="text-[9px] text-center text-slate-400 font-medium">
          AI can make mistakes. Verify important information with your regional center.
        </p>
      </div>
    </motion.div>
  );
}
>>>>>>> main
