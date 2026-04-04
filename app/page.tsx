"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, Brain, Globe, Shield, Zap, BarChart3, MessageCircle, Award } from "lucide-react";

const stats = [
  { label: "Active Learners", value: "2.4M+" },
  { label: "Courses Available", value: "850+" },
  { label: "Certified Teachers", value: "12,000+" },
  { label: "States Covered", value: "36" },
];

const features = [
  { icon: Brain, title: "AI-Powered Learning", desc: "Adaptive learning pathways that evolve with your progress using advanced AI and ML algorithms." },
  { icon: Globe, title: "Multilingual Support", desc: "Content available in 22 Indian languages with real-time translation, subtitles, and ISL support." },
  { icon: Shield, title: "Secure Assessment", desc: "AI-proctored examinations with biometric authentication and blockchain-verified certificates." },
  { icon: Zap, title: "Offline Access", desc: "Download lessons and continue learning without internet. Optimized for low-bandwidth environments." },
  { icon: BarChart3, title: "Advanced Analytics", desc: "Predictive analytics with dropout risk detection, engagement tracking, and personalized insights." },
  { icon: MessageCircle, title: "24x7 AI Support", desc: "Instant responses from AI tutors, escalation to human experts, and collaborative discussion forums." },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/50 backdrop-blur border-b border-slate-100 border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className=" rounded-lg bg-primary flex items-center justify-center">
              <Image 
                src="/sb_logo.png" 
                alt="NIOS LMS" 
                width={100} 
                height={36}
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
        <div className="absolute inset-0 bg-white/10 z-10"></div> {/* Optional overlay for better text readability */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 text-white rounded-full bg-orange-500/90 border border-orange-500/30 text-orange-300 text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-600  text-white animate-pulse" />
          Aligned with NEP 2020
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-red-900 font-bold leading-tight mb-6">
          India's Most Advanced{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-300">Open Schooling</span>{" "}
          Platform
        </h1>
        <p className="text-lg text-black/80 mb-8 leading-relaxed max-w-2xl">
          AI-driven learning management system enabling personalized, inclusive, and adaptive education for learners across India — from admission to certification.
        </p>
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
        <div className="relative bg-white border-t border-black/10 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={item} className="text-center">
          <p className="text-3xl font-bold text-orange-400">{stat.value}</p>
          <p className="text-sm text-red-300 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-slate-50  ">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 ">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Learn and Teach</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A complete ecosystem for learners, teachers, and administrators — built for India's diverse educational needs.
            </p>
          </div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <motion.div key={feat.title} variants={item}
                  className="p-6 rounded-2xl border border-slate-300 bg-card hover:border-primary/30 hover:shadow-md transition-all group"
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
            <p className="text-blue-400/80 mb-8">Join millions of learners across India. Access quality education from anywhere, anytime — free of cost.</p>
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
          </div>
        </div>
      </section>

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
    </div>
  );
}
