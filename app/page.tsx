"use client";
<<<<<<< HEAD
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, Brain, Globe, Shield, Zap, BarChart3, MessageCircle, Award, ExternalLink, Users, PieChart, BookOpen, ShieldCheck, Sparkles, ChevronRight, MapPin, Video, Target } from "lucide-react";
import AboutPage from "./about/page";
import AccessibilityBar from "@/components/AccessibilityBar";
=======

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, ArrowRight, Brain, Globe, Shield, Zap, BarChart3, MessageCircle, Award, ExternalLink, Users, PieChart, BookOpen, ChevronRight, MapPin, Video, Target, ArrowUpRight, FileText, School, PlaySquare, Library, UserCheck, Flag, ClipboardCheck, LayoutGrid, Book, Image as ImageIcon, Info, CheckCircle, Radio, Trophy, Clipboard, FileStack, Briefcase, Star, Calendar, Scale, Download, Gavel, Headphones, Heart, HelpCircle, Mic2, RotateCcw, Search, Accessibility, FileWarning, Bell, MessageSquare, Phone } from "lucide-react";
import { useRef, useState } from "react";

// Official Government Components
import BrandingBanner from "@/components/BrandingBanner";
import OfficialNav from "@/components/OfficialNav";
import NewsTicker from "@/components/NewsTicker";
import KeyPersonnel from "@/components/KeyPersonnel";
import OfficialFooter from "@/components/OfficialFooter";
import Hero from "@/components/Hero";
import LMSPopup from "@/components/LMSPopup";
import Chatbot from "@/components/Chatbot";
>>>>>>> main

const stats = [
  { label: "Active Learners", value: "2.4M+" },
  { label: "Courses Available", value: "850+" },
  { label: "Certified Teachers", value: "12,000+" },
  { label: "States Covered", value: "36" },
];

<<<<<<< HEAD
const features = [
  { icon: Brain, title: "AI-Powered Learning", desc: "Adaptive learning pathways that evolve with your progress using advanced AI and ML algorithms." },
  { icon: Globe, title: "Multilingual Support", desc: "Content available in 22 Indian languages with real-time translation, subtitles, and ISL support." },
  { icon: Shield, title: "Secure Assessment", desc: "AI-proctored examinations with biometric authentication and blockchain-verified certificates." },
  { icon: Zap, title: "Offline Access", desc: "Download lessons and continue learning without internet. Optimized for low-bandwidth environments." },
  { icon: BarChart3, title: "Advanced Analytics", desc: "Predictive analytics with dropout risk detection, engagement tracking, and personalized insights." },
  { icon: MessageCircle, title: "24x7 AI Support", desc: "Instant responses from AI tutors, escalation to human experts, and collaborative discussion forums." },
];

// about section  data
const aboutsStats = [
  { label: 'Cumulative Enrollment', value: '4.1M+', desc: 'World\'s Largest Open School', color: 'text-brand-orange' },
  { label: 'Regional Centres', value: '23', desc: 'Across India', color: 'text-blue-500' },
  { label: 'Accredited Institutions', value: '6,600+', desc: 'Support Network', color: 'text-emerald-500' },
  { label: 'Courses Offered', value: '100+', desc: 'Academic & Vocational', color: 'text-purple-500' },
];

const timeline = [
  { year: '1979', event: 'Open School project started by CBSE' },
  { year: '1989', event: 'Amalgamated into National Open School (NOS)' },
  { year: '2002', event: 'Renamed to National Institute of Open Schooling (NIOS)' },
  { year: '2020', event: 'Migration to NEP 2020 guidelines' },
  { year: '2026', event: 'AI-Native LMS Integration' },
];
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <AccessibilityBar />
      <header className="sticky top-0 z-50 bg-white/50 backdrop-blur border-b border-slate-100 border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className=" rounded-lg bg-primary flex items-center justify-center">
              <Image
                src="/sb_logo.png"
                alt="NIOS LMS"
                width={170}
                height={100}
              />
            </div>

          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Sign In</Link>
            <Link href="/portal" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-400 text-white text-sm font-medium hover:bg-orange-300 transition-colors">
              Portal  <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>
      <section className="relative text-white overflow-hidden">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/20 z-10"></div> {/* Optional overlay for better text readability */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <div className="inline-flex  text-sm font-medium items-center gap-2 px-3 py-1.5 text-white rounded-full bg-orange-500/90 border border-orange-500/30 mb-6">
              <span className="w-4 h-2   rounded-full bg-red-700  text-white animate-pulse" />
              Aligned with NEP 2020
            </div>
            <h1 className="text-5xl drop-shadow-[2px_2px_6px_rgba(0,0,0,0.4)] sm:text-6xl lg:text-7xl font-black leading-tight mb-6 ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600   to-amber-500 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.4)]">
                Samskrita Bharati .
              </span>{" "}
              AI-Driven LMS
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 font-medium mb-8 max-w-2xl leading-relaxed">
              Ministry of Education, Government of India
            </p>
            {/* <p className="text-lg text-black/80 mb-8 leading-relaxed max-w-2xl">
          AI-driven learning management system enabling personalized, inclusive, and adaptive education for learners across India — from admission to certification.
        </p> */}
            {/* <div className="flex flex-wrap gap-4">
          <Link href="/register">
            <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-semibold transition-colors shadow-lg"
            >
          Start Learning Free <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          <Link href="/login">
            <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-amber-50 rounded-xl border border-white/20 hover:border-white/40 text-red-900 font-semibold transition-colors"
            >
          Sign In to Continue
            </motion.button>
          </Link>
        </div> */}
          </motion.div>
        </div>
        <div className="relative max-w-7xl mx-auto bg-white/20 border-b rounded-t-2xl border-black/10 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={item} className="text-center">
                  <p className="text-3xl font-bold text-orange-400">{stat.value}</p>
                  <p className="text-sm text-black font-bold mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-slate-50  ">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 ">
            {/* Vision & Mission Hero */}
          <div className="grid mb-8 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-100 rounded-xl text-[10px] font-black text-brand-orange uppercase tracking-[0.3em]">
                <Target size={14} /> Our Mission
              </div> */}
              <h2 className="text-4xl text-left  font-black text-slate-900 leading-tight tracking-tighter">
                Reaching the <span className="text-brand-orange">Unreached.</span>
              </h2>
              <p className="text-lg text-left font-medium text-slate-500 leading-relaxed max-w-xl">
                NIOS is committed to sustainable inclusive learning through open and distance excellence, ensuring "Education for All" under the National Education Policy 2020.
              </p>
              <div className="flex gap-6 mb-6">
                <div className="p-8 rounded-xl bg-white border border-slate-100 shadow-sm flex-1">
                  <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-4">Vision</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">To be a leader in the global open schooling movement by providing high-quality, flexible education.</p>
                </div>
                <div className="p-8 rounded-xl bg-slate-900 text-white shadow-xl flex-1 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-brand-orange/20 rounded-full blur-2xl group-hover:scale-150 transition-all duration-1000" />
                  <h4 className="text-sm font-black uppercase tracking-widest mb-4">Values</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">Inclusivity, Flexibility, and Excellence in academic outcomes.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-xl bg-slate-100 border border-slate-200 overflow-hidden relative shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-center justify-center">
                  

           
 <iframe
  className="absolute inset-0 w-full h-full"
  src="https://www.youtube.com/embed/CgX8fx0oxOc?autoplay=1&mute=1&loop=1&playlist=CgX8fx0oxOc&start=15"
  title="Background Video"
  allow="autoplay; fullscreen"
  allowFullScreen
></iframe>

                </div>
                <div className="absolute top-8 left-8 text-white">
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Featured Presentation</div>
                  <div className="text-xl font-black tracking-tight">Institutional Overview 2026</div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl" />
            </div>
          </div>
          <div className="text-left mb-14">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Learn and Teach</h2>
            <p className="text-muted-foreground  text-left mx-auto">
              A complete ecosystem for learners, teachers, and administrators — built for India's diverse educational needs.
            </p>
          </div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <motion.div key={feat.title} variants={item}
                  className="p-6 rounded-xl border border-slate-300 bg-card hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{feat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
          {/* Documents & Portal Links */}
          <div className="flex mt-8 flex-wrap gap-4 justify-center">
            {[
              { label: 'Citizen\'s Charter', icon: BookOpen },
              { label: 'Annual Reports', icon: PieChart },
              { label: 'Official Gazette', icon: Award },
              { label: 'Academic Council', icon: Users },
            ].map((link, i) => (
              <button key={i} className="px-8 py-5 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-xl hover:border-brand-orange/20 transition-all flex items-center gap-4 group">
                <link.icon size={18} className="text-brand-orange group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{link.label}</span>
                <ExternalLink size={12} className="text-slate-300" />
              </button>
            ))}
          </div>
      </section>

     

    

      <section className=" bg-slate-50 border-t border-slate-200">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in ">

        

          {/* Impact Stats */}
          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-10 rounded-xl bg-white border border-slate-100 shadow-sm text-center"
              >
                <div className={`text-4xl lg:text-5xl font-black mb-2 tracking-tighter ${s.color}`}>{s.value}</div>
                <div className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-1">{s.label}</div>
                <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{s.desc}</div>
              </motion.div>
            ))}
          </div> */}

          {/* Heritage Timeline */}
          {/* <div className="p-12 lg:p-20 rounded-xl bg-slate-50 border border-slate-100">
            <div className="max-w-4xl mx-auto space-y-16">
              <div className="text-center space-y-4">
                <h3 className="text-[10px] font-black text-brand-orange uppercase tracking-[0.4em]">Our Legacy</h3>
                <h2 className="text-4xl font-black text-slate-900">Decades of Educational Innovation</h2>
              </div>

              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-12 group">
                    <div className="w-24 shrink-0 text-right">
                      <div className="text-2xl font-black text-slate-900 group-hover:text-brand-orange transition-colors">{item.year}</div>
                    </div>
                    <div className="relative flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-brand-orange relative z-10" />
                      {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-slate-200 my-2" />}
                    </div>
                    <div className="pb-12 text-lg font-bold text-slate-600">
                      {item.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          {/* Leadership & Network */}
          {/* <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 p-12 rounded-xl bg-white border border-slate-100 shadow-sm space-y-12">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Regional Outreach</h3>
                  <p className="text-sm font-medium text-slate-500">Global network spanning multiple zones</p>
                </div>
                <Globe className="text-brand-orange opacity-20" size={48} />
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {['North Zone', 'South Zone', 'East Zone', 'West Zone', 'North-East', 'International'].map((zone) => (
                  <div key={zone} className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-brand-orange/20 transition-all cursor-pointer">
                    <MapPin size={16} className="text-brand-orange mb-4" />
                    <div className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{zone}</div>
                  </div>
                ))}
              </div>
              <button className="w-full py-5 bg-slate-900 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-orange transition-all flex items-center justify-center gap-2">
                Locate Your Regional Centre <ChevronRight size={14} />
              </button>
            </div>

            <div className="space-y-8">
              <div className="p-10 rounded-xl bg-gradient-to-br from-brand-orange to-red-500 text-white shadow-xl relative overflow-hidden">
                <Sparkles className="absolute top-8 right-8 opacity-20" size={32} />
                <h4 className="text-[10px] font-black uppercase tracking-widest mb-8 opacity-60 text-white">Innovation Hub</h4>
                <h3 className="text-2xl font-black leading-tight mb-6">Pioneering AI Integrated Learning in India.</h3>
                <p className="text-xs font-medium text-white/80 leading-relaxed mb-8 uppercase tracking-widest font-black">Leading the digital transformation of open schooling.</p>
                <button className="px-8 py-4 bg-white text-brand-orange rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg">Learn More</button>
              </div>

              <div className="p-10 rounded-xl bg-white border border-slate-100 shadow-sm text-center">
                <ShieldCheck className="w-12 h-12 mx-auto mb-6 text-emerald-500 opacity-20" />
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-2">Accreditation</h4>
                <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest leading-relaxed">Fully recognized as an autonomous institution under Ministry of Education, Govt. of India.</p>
              </div>
            </div>
          </div> */}

        

        </div>

      </section>


       <section className="py-16 bg-muted/50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wide">Integrated with National Education Platforms</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["DIKSHA", "SWAYAM", "DigiLocker", "ULLAS", "ABC", "UDISE+"].map((name) => (
              <div key={name} className="px-4 py-2 rounded-lg bg-card border border-slate-300 text-sm font-semibold text-foreground/70">{name}</div>
            ))}
          </div>
        </div>
        
      </section>
        <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className=" text-white">
            <Award className="w-10 h-10 text-orange-400 mx-auto mb-4" />
            <h2 className="text-3xl text-black font-bold mb-4">Begin Your Learning Journey Today</h2>
            <p className="text-red-900/80 mb-8">Join millions of learners across India. Access quality education from anywhere, anytime — free of cost.</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/login">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-semibold transition-colors"
                >
                  Register as Student <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="/login" className="inline-flex items-center px-6 py-3 rounded-xl bg-amber-50 border border-white/20 hover:border-white/40 text-red-900 font-semibold transition-colors">
                Sign In
              </Link>
            </div>
=======
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

const CollaborationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-110vw"]);

  return (
    <div ref={containerRef} className="relative bg-white h-[200vh]">
      <div className="sticky top-20 h-screen w-full flex flex-col justify-center overflow-hidden ">
        <div className="text-center mb-12 w-full max-w-7xl mx-auto z-10 flex-shrink-0 px-8">
          <div className="flex items-center gap-4 mb-4">
             <div className="w-1.5 h-8 bg-blue-700 rounded-full" />
             <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Collaboration & Tech Partners</h2>
          </div>
          <p className="text-left text-slate-500 font-medium max-w-2xl mb-12">
            NIOS AI Platform is integrated with global technology leaders to provide world-class educational infrastructure for millions of learners.
          </p>
        </div>

        <motion.div style={{ x }} className="flex items-center px-[20vw] gap-[5vw] w-max pb-8">
          {/* Card 1 */}
          <div className="w-[80vw] lg:w-[700px] h-[350px] flex-shrink-0 flex flex-col justify-between p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="relative z-10 max-w-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Integrated AI Ecosystem</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Built on sovereign educational infrastructure, ensuring full compliance with data residency norms while providing state-of-the-art AI tutoring.
              </p>
            </div>
            <div className="absolute right-12 bottom-12 w-48 opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
              <img src="/NIOSlogo_with_title.png" alt="NIOS" className="w-full h-auto" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-[80vw] lg:w-[700px] h-[350px] flex-shrink-0 flex flex-col justify-between p-10 rounded-3xl bg-blue-900 text-white shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="relative z-10 max-w-lg">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight text-blue-400">Institutional Governance</h3>
              <p className="text-blue-100 leading-relaxed text-lg">
                An autonomous institution under the Ministry of Education, implementing NEP 2020 via innovative digital-first strategies.
              </p>
            </div>
            <div className="absolute right-12 bottom-12 w-48 opacity-20 group-hover:opacity-100 transition-all duration-700">
              <img src="https://www.education.gov.in/sites/upload_files/mhrd/files/logo_2.png" alt="MoE" className="w-32 h-auto brightness-200" />
            </div>
          </div>
              {/* Card 3 */}
          <div className="w-[80vw] lg:w-[700px] h-[350px] flex-shrink-0 flex flex-col justify-between p-10 rounded-3xl bg-blue-900 text-white shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="relative z-10 max-w-lg">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight text-blue-400">UDIES Portal</h3>
              <p className="text-blue-100 leading-relaxed text-lg">
                UDISE+ is a unified system for collecting, processing, and disseminating data on school education in India. It provides real-time data on school infrastructure, student enrollment, teacher deployment, and learning outcomes.
              </p>
            </div>
            <div className="absolute right-12 bottom-12 w-48 opacity-20 group-hover:opacity-100 transition-all duration-700">
              <img src="https://sochinternational.in/wp-content/uploads/Unified-District-Information-System-for-Education-490x202.png" alt="MoE" className="w-60 h-auto brightness-100" />
            </div>
          </div>
          {/* Card 4 */}
          <div className="w-[80vw] lg:w-[700px] h-[350px] flex-shrink-0 flex flex-col justify-between p-10 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-white/10">
            <div className="relative z-10 max-w-lg">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight text-blue-400">Swayam Portal</h3>
              <p className="text-blue-100 leading-relaxed text-lg">
                Swayam is a program initiated by the Government of India to provide free and open online courses to Indian citizens.
              </p>
            </div>
            <div className="absolute right-12 bottom-12 w-48 opacity-20 group-hover:opacity-100 transition-all duration-700">
              <img src="https://storage.googleapis.com/swayam2_central/assets/img/swayam_logo.png" alt="Swayam" className="w-60 h-auto brightness-100" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const AIFactorySection = () => {
  return (
    <div className="relative bg-slate-50 py-24 px-8 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="w-1.5 h-8 bg-blue-700 rounded-full" />
             <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Learning Factory</h2>
          </div>
          <h3 className="text-xl font-medium text-slate-500 max-w-2xl">
            Sovereign AI infrastructure built for the future of inclusive education in India.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12 items-center">
           <div className="relative z-10 flex justify-center items-center h-[500px]">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80" style={{ transformStyle: "preserve-3d", transform: "rotateX(60deg) rotateZ(-45deg)" }}>
              {[
                { label: "CURRICULUM", color: "bg-white", z: 0, border: "border-gray-200 text-slate-400" },
                { label: "AI ENGINE", color: "bg-blue-600", z: 100, border: "border-blue-400 text-white" },
                { label: "CERTIFICATION", color: "bg-slate-900", z: 200, border: "border-slate-700 text-blue-400" }
              ].map((layer, idx) => (
                <motion.div
                  key={layer.label}
                  initial={{ z: 300, opacity: 0 }}
                  whileInView={{ z: layer.z, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className={`absolute inset-0 ${layer.color} border-2 ${layer.border} shadow-2xl rounded-2xl flex items-center justify-center`}
                >
                  <span className="font-black rotate-45 transform-gpu select-none text-xl tracking-widest hidden sm:block uppercase">
                    {layer.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {[
              { title: "Sovereign Framework", desc: "Digital data hosted on secure Indian infrastructure, fully compliant with national safety guidelines." },
              { title: "High-Performance Scaling", desc: "Automated assessment and proctoring systems that scale for millions of learners nationwide." },
              { title: "Skill Mapping", desc: "Outcome-based learning objectives mapped through intelligent knowledge graphs." }
            ].map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="pl-8 border-l-4 border-blue-700/20 hover:border-blue-700 transition-colors py-2"
              >
                <h4 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-tight">{step.title}</h4>
                <p className="text-slate-600 leading-relaxed font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const QuickLinksSection = () => {
  const links = [
    { label: "Admission", icon: GraduationCap, color: "bg-blue-700" },
    { label: "Course Material", icon: BookOpen, color: "bg-slate-800" },
    { label: "Results", icon: ClipboardCheck, color: "bg-blue-600" },
    { label: "Study Centres", icon: School, color: "bg-slate-700" },
    { label: "Video Gallery", icon: PlaySquare, color: "bg-blue-500" },
    { label: "Latest Notices", icon: Bell, color: "bg-red-600" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">Quick Access Links</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {links.map((link) => (
            <motion.div
              key={link.label}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              <div className={`w-20 h-20 rounded-2xl ${link.color} flex items-center justify-center text-white shadow-xl group-hover:shadow-2xl transition-all duration-300`}>
                <link.icon className="w-10 h-10" />
              </div>
              <span className="text-xs font-black text-slate-700 text-center uppercase tracking-widest">{link.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortalHubSection = () => {
    const portals = [
        { label: "Virtual Open School", icon: Globe },
        { label: "On Demand Examination", icon: Zap },
        { label: "e-Accreditation", icon: CheckCircle },
        { label: "Mukta Vidya Vani", icon: Radio },
        { label: "Awards & Honors", icon: Trophy },
        { label: "Tender Notices", icon: FileStack },
        { label: "Success Stories", icon: Star },
        { label: "Research Projects", icon: Search },
    ];

    return (
        <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-800/10 blur-3xl rounded-full" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
                    <div>
                        <div className="text-blue-500 font-black uppercase tracking-[0.3em] mb-4 text-sm">Services Portal</div>
                        <h2 className="text-4xl font-bold tracking-tight">One-Stop Digital Hub for NIOS</h2>
                    </div>
                    <button className="px-8 py-3 bg-white text-slate-900 font-black uppercase tracking-widest text-xs rounded-full hover:bg-blue-50 transition-colors">
                        View All Digital Services
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {portals.map((portal) => (
                        <motion.div 
                            key={portal.label}
                            whileHover={{ scale: 1.02 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex flex-col gap-6 group"
                        >
                            <div className="p-3 bg-blue-600 rounded-2xl w-fit shadow-lg group-hover:scale-110 transition-transform">
                                <portal.icon size={24} />
                            </div>
                            <h3 className="font-bold text-lg leading-tight uppercase tracking-tight">{portal.label}</h3>
                            <ChevronRight className="mt-auto ml-auto text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const NewsBoardSection = () => {
    const [activeTab, setActiveTab] = useState('News');
    
    const categories = ['News', 'Circulars', 'Events'];
    
    const content = {
        News: [
            { date: '16 APR 2026', title: 'Schedule for October/November 2026 Examination for Secondary and Senior Secondary', isNew: true },
            { date: '12 APR 2026', title: 'Public Notice regarding extension of last date for TMA submission', isNew: false },
            { date: '08 APR 2026', title: 'Notification for D.El.Ed. (Special Education) Examination', isNew: false },
        ],
        Circulars: [
            { date: '15 APR 2026', title: 'Revised guidelines for Accreditation of Study Centres', isNew: true },
            { date: '10 APR 2026', title: 'Circular regarding implementation of NEP 2020 in Vocational courses', isNew: false },
        ],
        Events: [
            { date: '20 APR 2026', title: 'National Workshop on AI in Open Schooling at NIOS HQ', isNew: true },
            { date: '25 APR 2026', title: 'Celebration of World Book Day across Regional Centres', isNew: false },
        ]
    };

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Left Side: Tabs and Title */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24">
                           <div className="flex items-center gap-3 text-blue-700 font-black uppercase tracking-[0.2em] text-xs mb-6">
                              <Bell size={16} className="animate-bounce" />
                              What's New
                           </div>
                           <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-10 leading-tight">
                              Latest Updates <br />& Announcements
                           </h2>
                           
                           <div className="flex flex-col gap-2">
                              {categories.map((cat) => (
                                <button
                                  key={cat}
                                  onClick={() => setActiveTab(cat)}
                                  className={`px-6 py-4 rounded-2xl text-left font-bold transition-all flex items-center justify-between group ${
                                    activeTab === cat 
                                    ? 'bg-blue-700 text-white shadow-xl shadow-blue-900/20' 
                                    : 'bg-white text-slate-600 hover:bg-slate-100'
                                  }`}
                                >
                                  {cat}
                                  <ChevronRight size={16} className={`${activeTab === cat ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'} transition-all`} />
                                </button>
                              ))}
                           </div>
                        </div>
                    </div>

                    {/* Right Side: List content */}
                    <div className="lg:col-span-8">
                        <motion.div
                          key={activeTab}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="space-y-4"
                        >
                            {(content as any)[activeTab].map((item: any, i: number) => (
                                <div key={i} className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-500 transition-all cursor-pointer flex gap-10 items-center">
                                    <div className="flex-shrink-0 text-center border-r border-slate-100 pr-10 hidden sm:block">
                                        <div className="text-2xl font-black text-slate-900">{item.date.split(' ')[0]}</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-blue-600">{item.date.split(' ').slice(1).join(' ')}</div>
                                    </div>
                                    <div className="flex-1 space-y-3">
                                        <div className="flex items-center gap-3">
                                            {item.isNew && (
                                                <span className="px-2 py-0.5 bg-red-500 text-white text-[8px] font-black rounded uppercase">New</span>
                                            )}
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{activeTab}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors leading-snug">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                                       <Download size={18} />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                        
                        <div className="mt-10 p-4 border-t border-slate-200 flex justify-center">
                           <button className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-2">
                             View Complete Archive <ExternalLink size={14} />
                           </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900">
      <LMSPopup/>
      <BrandingBanner />
      <OfficialNav />
      <NewsTicker />
      
      
      {/* Hero Section */}
      {/* <Hero /> */}
      <section className="relative text-white overflow-hidden">
              <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
                <source src="/hero.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-white/20 z-10"></div> {/* Optional overlay for better text readability */}
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-20">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
                  <div className="inline-flex  text-sm font-medium items-center gap-2 px-3 py-1.5 text-white rounded-full bg-blue-500/90 border border-blue-500/30 mb-6">
                    <span className="w-4 h-2   rounded-full bg-blue-700  text-white animate-pulse" />
                    Aligned with NEP 2020
                  </div>
                  <h1 className="text-5xl drop-shadow-[2px_2px_6px_rgba(0,0,0,0.4)] sm:text-6xl lg:text-7xl font-black leading-tight mb-6 ">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700   to-red-500 drop-shadow-[2px_2px_6px_rgba(0,0,0,0.4)]">
                      NIOS AI LMS Platform
                    </span>{" "}
                    <br />
      
                    <p className="text-5xl font-black text-white  mb-8 max-w-2xl leading-relaxed">Learn One More Language</p>
                  </h1>
      
                  <p className="text-lg sm:text-xl text-gray-600 font-medium mb-8 max-w-2xl leading-relaxed">
                    Ministry of Education, Government of India
                  </p>
                </motion.div>
              </div>
              
            </section>

      {/* Stats Overlay Strip */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <p className="text-3xl font-black text-blue-700 tracking-tighter mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </p>
                <div className="h-0.5 w-8 bg-slate-200 mx-auto mb-2" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <KeyPersonnel />
      
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <div className="flex items-center gap-4">
                   <div className="w-1.5 h-8 bg-blue-700 rounded-full" />
                   <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Institutional Vision</h2>
                </div>
                <p className="text-xl font-medium text-slate-600 leading-relaxed italic border-l-4 border-blue-100 pl-6">
                  "Sustainable inclusive learning through open and distance excellence — ensuring Education for All."
                </p>
                <p className="text-slate-500 leading-relaxed">
                  The National Institute of Open Schooling (NIOS) was established in November 1989 as an autonomous organisation by the Ministry of Education, Government of India. It has emerged as the largest open schooling system in the world.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                     <Target className="w-8 h-8 text-blue-700 mb-4" />
                     <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-tight">Our Mission</h4>
                     <p className="text-xs text-slate-500">Provide relevant, continuing and holistic education up to pre-degree level through Open and Distance Learning.</p>
                  </div>
                  <div className="p-4 bg-blue-900 rounded-2xl shadow-xl">
                     <Award className="w-8 h-8 text-blue-400 mb-4" />
                     <h4 className="font-bold text-white mb-2 uppercase tracking-tight">Global Standard</h4>
                     <p className="text-xs text-blue-100/60">Implementing AI-driven adaptive learning pathways aligned with NEP 2020 international standards.</p>
                  </div>
                </div>
             </div>

             <div className="relative group">
               <div className="absolute -inset-4 bg-blue-700/5 rounded-[40px] blur-2xl group-hover:scale-105 transition-all duration-700" />
               <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/PBUP8ghRjrA?autoplay=0&mute=1&loop=1&playlist=PBUP8ghRjrA"
                    title="NIOS Overview"
                    allow="autoplay; fullscreen"
                  />
               </div>
             </div>
          </div>
        </div>
      </section>
  <NewsBoardSection />  
      <QuickLinksSection />
      
      {/* <PortalHubSection /> */}
     
      <div className="bg-slate-50">
        <CollaborationSection />
       
        <AIFactorySection />
      </div>

      {/* Integration Strip */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
             <div>
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-2">Technically Powered By</h4>
                <p className="text-lg font-bold text-slate-800">National Education Digital Ecosystem</p>
             </div>
             <div className="flex flex-wrap gap-4">
                {["DIKSHA", "SWAYAM", "DigiLocker", "ULLAS", "ABC", "UDISE+"].map((name) => (
                  <div key={name} className="px-6 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-black text-slate-600 hover:text-blue-700 hover:border-blue-200 transition-all cursor-pointer">
                    {name}
                  </div>
                ))}
             </div>
>>>>>>> main
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-orange-700" />
            <span>Samskrit Bharti AI-Driven LMS — Ministry of Education, Government of India</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
=======
      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-64 h-64 bg-blue-700/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-black text-slate-900 leading-tight mb-6 uppercase tracking-tight">
               Begin Your Journey with <br /> <span className="text-blue-700">The Largest Open School</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium mb-12 max-w-2xl mx-auto">
               Empowering millions of learners across India with flexible, inclusive, and AI-driven education. Register today to unlock your potential.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
               <Link href="/portal">
                  <button className="px-10 py-4 bg-blue-700 text-white font-black uppercase tracking-widest text-xs rounded-full shadow-2xl shadow-blue-900/40 hover:bg-blue-800 transition-all transform hover:-translate-y-1">
                     Access Student Portal
                  </button>
               </Link>
               <Link href="/admission">
                  <button className="px-10 py-4 bg-white text-blue-900 border-2 border-slate-200 font-black uppercase tracking-widest text-xs rounded-full hover:bg-slate-50 transition-all transform hover:-translate-y-1">
                     Online Admission
                  </button>
               </Link>
            </div>
         </div>
      </section>

      <OfficialFooter />
      <Chatbot/>
>>>>>>> main
    </div>
  );
}
