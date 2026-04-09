"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, Brain, Globe, Shield, Zap, BarChart3, MessageCircle, Award, ExternalLink, Users, PieChart, BookOpen, ShieldCheck, Sparkles, ChevronRight, MapPin, Video, Target } from "lucide-react";
import AboutPage from "./about/page";
import AccessibilityBar from "@/components/AccessibilityBar";

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
