'use client';
import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';
import {
   Paintbrush,
   Accessibility,
   LifeBuoy,
   BrickWallShield,
} from 'lucide-react';

export default function SettingsPage() {
   const [fontSize, setFontSize] = useState(16);
   const [contrast, setContrast] = useState('Standard');
   const [language, setLanguage] = useState('English');
   const [theme, setTheme] = useState('Dark');

   return (
      <DashboardLayout title="Account & Accessibility" subtitle="Customize your learning environment to suit your preferences">
         <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <section>
               <h3  className='flex font-semibold mb-1.25 gap-2 items-center ' >
                  <Paintbrush size={18} className='text-orange-500' /> Appearance
               </h3>
               <div className="  " style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', padding: '1.5rem' }}>
                  {[
                     { name: 'Dark', desc: 'Eye comfort (Default)', active: theme === 'Dark' },
                     { name: 'Light', desc: 'Standard clarity', active: theme === 'Light' },
                     { name: 'High Contrast', desc: 'Maximum visibility', active: theme === 'High Contrast' },
                  ].map((t) => (
                     <div
                        key={t.name}
                        onClick={() => setTheme(t.name)}
                        className={`p-5 rounded-xl cursor-pointer transition-all duration-200 ease-in-out border ${
                           t.active
                              ? 'bg-orange-300 border-1 border-slate-300 shadow-md'
                              : 'bg-slate-50 border border-gray-200 hover:bg-slate-100'
                        }`}
                     >
                        <div className="font-semibold text-sm mb-1">{t.name}</div>
                        <div className="text-xs text-muted">{t.desc}</div>
                       {/* < div className="mt-2 h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-orange-600" /> */}
                     </div>
                    
                  ))}
               </div>
               {/* <div className='border-b-1 border-slate-300'></div> */}
           
            </section>

            <section>
               <h3 className="flex items-center gap-2 font-semibold mb-1.25">
                  <Accessibility size={18} className="text-orange-500" /> Accessibility Settings
               </h3>
               <div className="card flex flex-col gap-8 p-8">
                  <div className="flex items-center justify-between">
                     <div>
                        <div className="font-semibold text-sm mb-1 text-slate-900">Text Size</div>
                        <div className="text-xs text-slate-500">Adjust readability for your comfort.</div>
                     </div>
                     <div className="flex  items-center gap-4">
                        <button
                           className="bg-amber-600 text-white rounded-md px-2 py-1 text-sm font-bold hover:bg-amber-700 transition-colors"
                           onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                        >
                           A-
                        </button>
                        <span className="font-bold">{fontSize}px</span>
                        <button
                           className="bg-amber-600 text-white rounded-md px-2 py-1 text-sm font-bold hover:bg-amber-700 transition-colors"
                           onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                        >
                           A+
                        </button>
                     </div>
                  </div>

                  <hr className="border-t border-gray-200 m-0" />

                  <div className="flex items-center justify-between">
                     <div>
                        <div className="font-semibold text-sm mb-1 text-slate-900">Interface Language</div>
                        <div className="text-xs text-slate-500">Choose your preferred Indian language.</div>
                     </div>
                     <select
                        className="form-select border-1 border-amber-500 w-44"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                     >
                        {['English', 'Hindi', 'Marathi', 'Tamil', 'Malayalam', 'Bengali', 'Sanskrit'].map((l) => (
                           <option key={l}>{l}</option>
                        ))}
                     </select>
                  </div>

                  <hr className="border-t border-gray-200 m-0" />

                  <div className="flex items-center justify-between">
                     <div>
                        <div className="font-semibold text-sm mb-1 text-slate-900">
                           Indian Sign Language (ISL) Icons
                        </div>
                        <div className="text-xs text-slate-500">
                           Show sign language interpretations for key visual navigation.
                        </div>
                     </div>
                     <button className="bg-amber-500 text-white rounded-md px-2 py-1 text-sm font-bold hover:bg-amber-600 transition-colors border border-red-100">Enable ISL Aids</button>
                  </div>

                  <hr className="border-t border-gray-200 m-0" />

                  <div className="flex items-center justify-between">
                     <div>
                        <div className="font-semibold text-sm mb-1 text-slate-900">Gesture-based Navigation</div>
                        <div className="text-xs text-slate-500">Use mouse or hand gestures for non-tactile interaction.</div>
                     </div>
                     <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Experimental</span>
                  </div>
               </div>
            </section>

            <section>
               <h3 className="mb-5 font-semibold flex items-center gap-2">
                 <BrickWallShield size={18} className="text-orange-500" /> Security & Privacy
               </h3>
               <div className="bg-white shadow-sm rounded-2xl flex flex-col gap-8 p-8">
                 <div className="flex items-center justify-between">
                   <div>
                     <div className="font-semibold text-sm text-slate-900 mb-1">IP Protection (DRM)</div>
                     <div className="text-xs text-slate-500">Enable Digital Rights Management for course materials.</div>
                   </div>
                   <button className="bg-amber-600 text-white text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-amber-700 transition">
                     Manage IP Keys
                   </button>
                 </div>

                 <div className="border-t border-gray-200" />

                 <div className="flex items-center justify-between">
                   <div>
                     <div className="font-semibold text-sm text-slate-900 mb-1">Data Sovereignty (Personal Info)</div>
                     <div className="text-xs text-slate-500">Download or request deletion of your academic data.</div>
                   </div>
                   <div className="flex gap-2">
                     <button className="bg-transparent border border-slate-300 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-slate-100 transition">
                        Download My Data
                     </button>
                     <button className="bg-transparent border border-red-200 text-red-600 text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-red-50 transition">
                        Request Deletion
                     </button>
                   </div>
                 </div>

                 <div className="border-t border-gray-200" />

                 <div className="flex items-center justify-between">
                   <div>
                     <div className="font-semibold text-sm text-slate-900 mb-1">Privacy Mode</div>
                     <div className="text-xs text-slate-500">Hide your profile from regional peer search.</div>
                   </div>
                   <label className="inline-flex items-center cursor-pointer">
                     <input
                        type="checkbox"
                        id="privacy-peer"
                        defaultChecked
                        className="h-5 w-5 text-amber-600 border-gray-300 rounded"
                     />
                   </label>
                 </div>
               </div>
            </section>

            <section>
               <h3 className="mb-5 flex items-center gap-2 text-slate-900 font-semibold">
                 <LifeBuoy size={18} className="text-orange-500" /> Support
               </h3>
               <div className="bg-white shadow-sm rounded-2xl p-6">
                 <p className="text-sm text-slate-500 mb-4">Facing technical issues? Raise a ticket or chat with support.</p>
                 <div className="flex flex-wrap gap-3">
                   <button className="bg-amber-600 text-white text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-amber-700 transition">
                     Raise Grievance Ticket
                   </button>
                   <button className="bg-transparent border border-slate-300 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-slate-100 transition">
                     Help Docs & Tutorials
                   </button>
                 </div>
               </div>
            </section>
         </div>
      </DashboardLayout>
   );
}
