'use client';
import DashboardLayout from '@/components/DashboardLayout';
import { GraduationCap, Flame, BookOpen, CheckCircle, Medal, Scroll, Palette, Flag, Verified } from 'lucide-react';

const achievements = [
   { icon: GraduationCap, title: 'Top Performer', date: 'Mar 2026', subject: 'Science' },
   { icon: Flame, title: '12-Day Streak', date: 'Apr 2026', subject: 'Platform' },
   { icon: BookOpen, title: 'Reading Rocket', date: 'Feb 2026', subject: 'English' },
   { icon: CheckCircle, title: 'Quiz Whiz', date: 'Mar 2026', subject: 'Maths' },
   { icon: Medal, label: '100% Attendance', date: 'Jan 2026' }
];

const certificates = [
   { title: 'Mathematics: Algebra Mastery', status: 'Issued', date: 'Mar 15, 2026', id: 'NIOS-MAT-23948' },
   { title: 'Digital Literacy Workshop', status: 'Issued', date: 'Feb 2, 2026', id: 'NIOS-DIG-10294' },
];

const projects = [
   { title: 'Friction in Daily Life', type: 'Exhibition Project', grade: 'A+' },
   { title: 'Modern India Timeline', type: 'Subject Project', grade: 'A' },
   { title: 'Community Awareness Poster', type: 'Creativity', grade: 'A+' },
];

export default function ProfilePage() {
   return (
      <DashboardLayout title="Digital Portfolio" subtitle="Your holistic academic record and achievements">
         <div className="grid grid-cols-[320px_1fr] gap-10 items-start">
            
            {/* Left Column - User Info & Aadhaar */}
            <div className="flex flex-col gap-6">
               
               {/* User Profile Card */}
               <div className="border-1 border-amber-100 rounded-2xl text-center p-10">
                   <div className="avatar-lg w-24 h-24 text-4xl mx-auto mb-6 flex items-center border-1 border-slate-100 rounded-full bg-orange-400 justify-center">A</div>
                   <h3 className="mb-1 font-semibold">Arjun Sharma</h3>
                   <p className="text-sm text-amber-500 mb-4">Enrollment: 10023 · Class 10</p>
                   <div className="flex justify-center gap-2 mb-6">
                        <span className="font-semibold text-black ">Student</span>
                        <span className="text-green-500 flex">Verified<Verified/></span>
                   </div>
                   <button className=" bg-amber-500 p-2 cursor-pointer text-white  rounded-2xl w-full">Edit Profile Settings</button>
               </div>

               {/* Aadhaar Verification Card */}
               <div className="card bg-hover border border-amber-300 rounded-2xl p-6">
                   <div className="flex items-center gap-3 mb-4">
                     🇮🇳
                      <h4 className="text-sm font-semibold mb-0">
                        Aadhaar Identity</h4>
                   </div>
                   <div className="flex flex-col gap-2">
                        <div className="flex justify-between border-b-1 border-slate-100 text-xs mb-1">
                            <span className="text-muted ">Aadhaar No.</span>
                            <span className="font-semibold text-primary">XXXX-XXXX-2394</span>
                        </div>
                        <div className="flex justify-between border-b-1 border-slate-100 text-xs mb-1">
                            <span className="text-muted">DOB</span>
                            <span className="font-semibold">12 May 2010</span>
                        </div>
                        <div className="flex justify-between border-b-1 border-slate-100 text-xs mb-1">
                            <span className="text-muted">Region</span>
                            <span className="font-semibold">Delhi</span>
                        </div>
                        <button className=" p-2 bg-amber-500 rounded-2xl w-full mt-2 text-xs font-bold text-white hover:bg-amber-600 transition-colors">
                           Update Aadhaar Link</button>
                   </div>
               </div>

               {/* Institutional Links */}
               <div className="card p-4">
                   <h4 className="text-sm font-semibold mb-4">Linked Platforms</h4>
                   <div className="flex flex-col gap-3">
                        {[
                           { name: 'DigiLocker', icon: '📁', status: 'Synced' },
                           { name: 'Academic Bank Credits', icon: '🏦', status: 'Active' },
                           { name: 'SWAYAM', icon: '🎓', status: 'Linked' },
                        ].map((p, i) => (
                           <div key={i} className="flex items-center justify-between p-2 rounded hover:bg-hover transition-all">
                              <div className="flex items-center gap-2">
                                  <span className="text-xl">{p.icon}</span>
                                  <span className="text-xs font-semibold">{p.name}</span>
                              </div>
                              <span className="text-xs text-success">{p.status}</span>
                           </div>
                        ))}
                   </div>
               </div>

            </div>

            {/* Right Column - Results, Achievements, Projects */}
            <div className="flex flex-col gap-8">
               
               {/* Certificates Section */}
               <div>
                   <div className="flex items-center justify-between mb-4">
                        <h3 className='font-semibold '>Issued Certificates</h3>
                        <button className="text-orange-500 ">View All</button>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                        {certificates.map((c, i) => (
                           <div key={i} className="card animate-slide-up flex p-4 rounded-2xl gap-4 border-b border-slate-300 bg-orange-100">
                              <Scroll size={32} className=' text-orange-500' />
                              <div className="flex-1">
                                  <div className="text-sm font-semibold mb-1 text-primary">{c.title}</div>
                                  <div className="text-xs text-muted mb-3">{c.date} · {c.id}</div>
                                  <button className="  bg-white/5 text-orange-500 cursor-pointer">Download</button>
                              </div>
                           </div>
                        ))}
                   </div>
               </div>

               {/* Holistic Digital Portfolio - Projects & Creativity */}
               <div>
                   <div className="flex items-center justify-between mb-4">
                        <h3 className='font-semibold'>Holistic Creative Portfolio</h3>
                  <button className="text-red-900 cursor-pointer">+ Add Project</button>
                   </div>
                     <div className="grid grid-cols-3 gap-4">
                        {projects.map((p, i) => (
                           <div key={i} className="p-2 rounded-2xl border-slate-100 animate-slide-up text-center bg-card border border-border">
                              <div className="flex justify-center mb-3">
                                 <Palette size={32} className='text-orange-500' />
                              </div>
                              <div className="text-sm font-semibold mb-1 text-primary">{p.title}</div>
                              <div className="text-xs text-muted mb-3">{p.type}</div>
                              <span className="text-green-500">{p.grade} Grade</span>
                           </div>
                        ))}
                     </div>
               </div>

               {/* Achievements Grid */}
               <div>
                   <div className="flex items-center justify-between mb-4">
                        <h3 className='font-semibold'>Achievements & Badges</h3>
                   </div>
                   <div className="card flex flex-wrap gap-10 p-6 border-slate-300 rounded-2xl">
                        {achievements.map((a, i) => {
                           const IconComponent = a.icon;
                           return (
                              <div key={i} className="flex flex-col items-center gap-1 w-24 cursor-pointer">
                                 <div className="w-15 h-15 rounded-full bg-orange-200 flex items-center justify-center text-2xl border-1 border-slate-100 transition-all hover:border-primary-400">
                                    <IconComponent size={28} className='text-white' />
                                 </div>
                                 <span className="text-xs font-semibold text-primary text-center">{a.title || a.label}</span>
                                 <span className="text-xs text-muted">{a.date}</span>
                              </div>
                           );
                        })}
                   </div>
               </div>

               {/* Address & Certification Record */}
               <div className="card">
                   <div className="flex items-center justify-between mb-4">
                        <h4 className='font-semibold'>Official Record Details</h4>
                        <button className="text-red-900 cursor-pointer">Edit Address</button>
                   </div>
                   <div className="grid grid-cols-2 gap-6">
                        <div className='bg-orange-100 p-4 border-b border-slate-300 rounded-2xl text-white'>
                            <div className="text-xs text-red-900 mb-1">Billing & Delivery Address</div>
                            <div className="text-sm text-black">B-12, Green Park Extension, New Delhi - 110016</div>
                            <div className="text-xs text-green-500 mt-2">Verified via Aadhaar sync</div>
                        </div>
                        <div className='bg-orange-100 p-4  border-b border-slate-300  rounded-2xl text-white'>
                            <div className="text-xs text-red-900 mb-1">Certification Delivery</div>
                            <div className="text-sm text-black font-medium">Digital (DigiLocker) + Hardcopy Requested</div>
                            <div className="text-xs text-green-500 mt-2">Tracking ID: NIOS-TRK-938210</div>
                        </div>
                   </div>
               </div>

               {/* Preferences & Accessibility */}
               <div className="grid grid-cols-2  gap-4">
                   <div className="card">
                        <h4 className="mb-4 font-semibold ">Language Preferences</h4>
                        <div className="flex flex-col gap-2">
                            {['English (US)', 'Hindi (Native)', 'Sanskrit', 'Telugu'].map((lang) => (
                                 <label key={lang} className="flex items-center gap-3 p-2 rounded hover:bg-hover cursor-pointer transition-all">
                                     <input type="radio" name="lang" defaultChecked={lang === 'Hindi (Native)'} />
                                     <span className="text-sm">{lang}</span>
                                 </label>
                            ))}
                        </div>
                   </div>
                   <div className="card">
                        <h4 className="mb-4 font-semibold">Accessibility Settings</h4>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                 <span className="text-sm">High Contrast Mode</span>
                                 <input type="checkbox" id="acc-contrast" />
                            </div>
                            <div className="flex items-center justify-between">
                                 <span className="text-sm">Screen Reader Optimized</span>
                                 <input type="checkbox" id="acc-screenreader" />
                            </div>
                            <div className="flex items-center justify-between">
                                 <span className="text-sm ">Font Size</span>
                                 <select className="form-input w-auto p-0.5 px-2 text-xs border-1 rounded-2xl  border-amber-500">
                                     <option>Standard</option>
                                     <option>Large</option>
                                     <option>Extra Large</option>
                                 </select>
                            </div>
                            <div className="flex items-center justify-between">
                                 <span className="text-sm">Dyslexic Friendly Font</span>
                                 <input type="checkbox" id="acc-dyslexic" />
                            </div>
                        </div>
                   </div>
               </div>

            </div>
         </div>
      </DashboardLayout>
   );
}
