'use client';
import Link from 'next/link';
import Image from 'next/image'; // Recommended for better performance

export default function LandingPage() {
  return (
    <div className="gradient-hero min-h-screen flex flex-col overflow-x-hidden bg-white">
      {/* Navbar */}
      <nav className="px-6 md:px-16 py-4 flex items-center justify-between sticky top-0 z-[100] bg-white/95 backdrop-blur-xl border-b border-gray-200">
        <div className="flex items-center gap-4 flex-1">
          <Image
            src="/sb_logo.png"
            alt="National Institute of Open Schooling (NIOS) Logo"
            width={180}
            height={48}
            className="h-24 w-auto object-contain"
            priority
          />
          <div className="h-8 w-px bg-gray-200 hidden sm:block" />
          <div className="text-xl md:text-2xl text-red-600 font-extrabold tracking-tight">
            Learning Management System
          </div>
        </div>

        <div className="flex gap-6 md:gap-8 items-center">
          {['Courses', 'Resources', 'About NIOS', 'Help'].map((l) => (
            <a
              key={l}
              href="#"
              className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors hidden md:block"
            >
              {l}
            </a>
          ))}

          <Link href="/login">
            <button
              id="landing-login-btn"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 md:px-7 py-2.5 rounded-2xl font-bold text-sm md:text-base transition-all active:scale-95 shadow-md"
            >
              Sign In →
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-16 py-20 md:py-28 min-h-[90vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto animate-fade-in relative z-10">
          <span className="inline-block px-5 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-6 tracking-wide shadow-sm">
            🚀 Powered by AI · Aligned with NEP 2020
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-8xl leading-[1.05] font-extrabold text-slate-900 mb-8 tracking-tighter">
            The Future of Open Schooling is{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-brand-red to-brand-orange animate-gradient-x">
              Intelligent
            </span>
            .
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            An inclusive, adaptive, and AI-driven ecosystem empowering millions of learners across India. 
            Personalized learning, anytime, anywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login">
              <button
                id="get-started-btn"
                className="bg-red-900 hover:bg-orange-700 text-white px-12 py-4.5 rounded-2xl font-bold text-lg w-full sm:w-auto transition-all active:scale-[0.98] shadow-lg shadow-orange-600/20"
              >
                Get Started Free →
              </button>
            </Link>
            <button className="px-10 py-4.5 border-2 border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all w-full sm:w-auto text-slate-600 hover:text-slate-900">
              Watch Platform Tour
            </button>
          </div>
        </div>

        {/* Decorative Background for Hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 bg-radial from-orange-100/30 to-transparent blur-3xl opacity-60" />
      </section>

      {/* Features Grid - Fully Responsive */}
      <section className="px-6 md:px-16 py-24 bg-slate-50">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Core Intelligence</h2>
          <p className="text-slate-500 max-w-2xl text-lg md:text-xl font-medium">
            Advanced modules designed for the next generation of digital education, pushing the boundaries of AI in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            { icon: '🧠', title: 'Adaptive Learning', desc: 'AI-driven pathways that evolve with your unique progress, style, and learning pace.' },
            { icon: '🌐', title: 'Multilingual Support', desc: 'Real-time translation and transcription in 22+ official Indian languages.' },
            { icon: '🤟', title: 'Inclusive Design', desc: 'Embedded Indian Sign Language (ISL) and comprehensive screen reader support.' },
            { icon: '🛡️', title: 'Secure Assessments', desc: 'Secure, bias-free examinations with behavioral analysis and live proctoring.' },
            { icon: '📊', title: 'Predictive Success', desc: 'Early warning systems and personalized intervention modeling for every student.' },
            { icon: '🤝', title: 'National Network', desc: 'Connect with a vast network of study centers and collaborative faculty hubs.' },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:border-brand-orange/20 transition-all duration-500 group animate-slide-up"
            >
              <div className="text-6xl mb-10 group-hover:scale-125 transition-transform duration-500 pointer-events-none">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-5 text-slate-900">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed text-base font-medium opacity-80">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* National Integrations */}
      <section className="px-6 md:px-16 py-28 text-center bg-white">
        <p className="text-xs font-bold text-brand-orange tracking-[4px] uppercase mb-16 opacity-70">
          OFFICIALLY INTEGRATED WITH NATIONAL STACK
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-5xl mx-auto">
          {['DIKSHA', 'SWAYAM', 'DigiLocker', 'ULLAS', 'ABC', 'UDISE+'].map((n) => (
            <div
              key={n}
              className="px-12 py-5 bg-slate-50 text-slate-700 rounded-2xl text-lg font-bold border border-slate-100 shadow-sm hover:shadow-lg hover:bg-white hover:-translate-y-1 transition-all duration-300"
            >
              {n}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section - Fixed with Brand Red */}
      <section className="px-6 md:px-16 py-28 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto rounded-[3.5rem] p-16 md:p-24 text-center relative overflow-hidden bg-slate-950 shadow-3xl">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-from)_0%,_transparent_50%)] from-brand-orange/20" />
          
          <div className="relative z-10">
            <div className="text-7xl mb-10">🏅</div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-white leading-[1.1] tracking-tight">
              Begin Your Learning <br className="hidden md:block" /> Journey Today
            </h2>
            <p className="text-lg md:text-2xl text-slate-400 mb-16 max-w-3xl mx-auto font-medium leading-relaxed opacity-80 font-inter">
              Join millions of learners across India. Access world-class quality education from anywhere, anytime — fully free.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/login">
                <button className="bg-brand-orange hover:bg-orange-700 text-white px-14 py-5 rounded-2xl font-black text-xl w-full sm:w-auto transition-all active:scale-95 shadow-xl shadow-orange-600/40 transform hover:-translate-y-1">
                  Register as Student →
                </button>
              </Link>
              <Link href="/login">
                <button className="px-14 py-5 border-2 border-white/20 text-white rounded-2xl font-bold text-xl hover:bg-white/10 transition-all w-full sm:w-auto backdrop-blur-sm">
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto px-6 md:px-16 py-20 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center text-2xl text-white shadow-lg">
                🎓
              </div>
              <div className="text-2xl font-extrabold text-black tracking-tighter">NIOS LMS</div>
            </div>
            <p className="text-slate-600 max-w-md leading-relaxed">
              Autonomous organization under the Ministry of Education, Government of India. 
              Providing quality education with equity and excellence.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-black mb-8 uppercase tracking-widest">Resources</h4>
            <nav className="flex flex-col gap-4 text-sm text-slate-600">
              {['Academic Materials', 'TMA Guidelines', 'Course Catalog', 'Exam Schedule'].map((l) => (
                <a key={l} href="#" className="hover:text-orange-600 transition-colors">
                  {l}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-bold text-black mb-8 uppercase tracking-widest">Support</h4>
            <nav className="flex flex-col gap-4 text-sm text-slate-600">
              {['Helpdesk', 'Grievance Redressal', 'Accessibility FAQs', 'Security Audit'].map((l) => (
                <a key={l} href="#" className="hover:text-orange-600 transition-colors">
                  {l}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>© 2026 National Institute of Open Schooling. NEP 2020 Compliant.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Security Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}