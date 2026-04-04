'use client';
import DashboardLayout from '@/components/DashboardLayout';
import { Download, Printer, Search, Filter, CheckCircle, GraduationCap, Award, Calendar, User, Users, Shield, Eye, Share2, QrCode, FileText } from "lucide-react";
import { useState } from "react";

interface Certificate {
  id: string;
  title: string;
  type: "Secondary" | "Senior Secondary" | "TMA" | "Course" | "Diploma";
  issueDate: string;
  expiryDate?: string;
  rollNumber: string;
  certificateNumber: string;
  status: "Verified" | "Pending" | "Expired" | "Active";
  image: string;
  qrCode: string;
}

const mockCertificates: Certificate[] = [
  {
    id: "cert-001",
    title: "Secondary School Certificate - Science Stream",
    type: "Secondary",
    issueDate: "April 15, 2026",
    expiryDate: undefined,
    rollNumber: "NIOS/2026/100001",
    certificateNumber: "NIOS/SSC/2026/0001",
    status: "Verified",
    image: "/xx.jpg",
    qrCode: "/qrcode.png"
  },
  {
    id: "cert-002", 
    title: "Tutor Marked Assignment - Mathematics (Class 10)",
    type: "TMA",
    issueDate: "March 20, 2026",
    expiryDate: undefined,
    rollNumber: "NIOS/2026/100001", 
    certificateNumber: "NIOS/TMA/MATH10/2026/01",
    status: "Verified",
    image: "/xx.jpg",
    qrCode: "/qrcode.png"
  },
  {
    id: "cert-003",
    title: "Course Completion - English Communication Skills", 
    type: "Course",
    issueDate: "February 10, 2026",
    expiryDate: undefined,
    rollNumber: "NIOS/2026/100001",
    certificateNumber: "NIOS/CC/ENG/2026/01",
    status: "Verified",
    image: "/xx.jpg",
    qrCode: "/qrcode.png"
  },
  {
    id: "cert-004",
    title: "NIOS Tutor Certification Diploma",
    type: "Diploma",
    issueDate: "January 30, 2026",
    expiryDate: "January 30, 2028",
    rollNumber: "NIOS/2026/TC001",
    certificateNumber: "NIOS/DIP/TC/2026/001",
    status: "Active",
    image: "/xx.jpg", 
    qrCode: "/qrcode.png"
  }
];

export default function CertificatesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"all" | Certificate["type"]>("all");

  const filteredCertificates = mockCertificates.filter(cert => 
    cert.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterType === "all" || cert.type === filterType)
  );

  return (
    <DashboardLayout title="Digital Certificates" subtitle="Official NIOS credentials & verification">
      <div className="grid grid-cols-[320px_1fr] gap-10 items-start">
        
        <div className="flex flex-col gap-6">
          
          <div className="border border-amber-50 rounded-2xl text-center p-10 bg-gradient-to-b from-orange-50 to-white">
            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center text-4xl font-black bg-gradient-to-br from-orange-400 to-red-400 rounded-full shadow-2xl border-4 border-white">
              A
            </div>
            <h3 className="text-xl font-black mb-2 text-slate-900">Arjun Sharma</h3>
            <p className="text-amber-600  mb-1">Class 10 | Roll: 10023</p>
            <p className="text-sm text-slate-600 mb-6">4 Certificates Issued</p>
            <div className="flex justify-center gap-2 mb-6">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">Identity Verified</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">Aadhaar Linked</span>
            </div>
            <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              Share Profile
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { label: 'Verified', count: 3, icon: CheckCircle, color: 'orange-100' },
              { label: 'Active', count: 1, icon: Award, color: 'blue-100 ' },
              { label: 'Total', count: 4, icon: GraduationCap, color: 'green-900' }
            ].map(({ label, count, icon: Icon, color }, i) => (
              <div key={i} className={`p-6 rounded-2xl border  hover:shadow-xl hover:-translate-y-1 transition-all bg-${color} text-white shadow-lg opacity-90`}>
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl  w-12 h-12 flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-black">{count}</div>
                    <div className="text-sm font-medium text-black">{label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-amber-200 rounded-2xl p-6 bg-gradient-to-b from-amber-50 to-white">
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <QrCode className="w-5 h-5 text-amber-600" />
              Quick Verification
            </h4>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 p-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-sm">
                <Eye className="w-4 h-4" />
                Verify by Certificate No.
              </button>
              <button className="w-full flex items-center justify-center gap-2 p-3 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-sm">
                <Share2 className="w-4 h-4" />
                Generate Share Link
              </button>
              <button className="w-full flex items-center justify-center gap-2 p-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
                <Download className="w-4 h-4" />
                Download All (ZIP)
              </button>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-4">Synced Platforms</h4>
            <div className="space-y-3">
              {[
                { name: 'DigiLocker', icon: '📱', status: 'Synced' },
                { name: 'SWAYAM', icon: '🎓', status: 'Active' },
                { name: 'ABC', icon: '🏦', status: 'Linked' }
              ].map((platform, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{platform.icon}</span>
                    <span className="font-semibold">{platform.name}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${platform.status === 'Synced' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                    {platform.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-8">
          
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <div className="relative flex-1 max-w-2xl">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input 
                placeholder="Search by title, roll number or certificate ID..."
                className="w-full pl-12 pr-4 py-4 bg-white/70  backdrop-blur-sm rounded-3xl border border-slate-200 shadow-lg transition-all placeholder-slate-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select 
              aria-label="Filter by certificate type"
              className="px-6 py-4 bg-white/70 backdrop-blur-sm rounded-3xl border border-slate-200 shadow-lg  "
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as any)}
            >
              <option value="all">All Certificate Types</option>
              <option value="Secondary">Secondary Certificate</option>
              <option value="TMA">Tutor Marked Assignment</option>
              <option value="Course">Course Completion</option>
              <option value="Diploma">Diploma Certificate</option>
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredCertificates.map((cert) => (
              <div key={cert.id} className="group p-8 rounded-3xl border border-slate-100  shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden bg-white  backdrop-blur-sm">
                
                  <div className="mb-6 pb-6 border-b border-slate-200">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                          {cert.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <span className={`px-2 py-2 rounded-2xl text-xs font-bold capitalize ${cert.status === 'Verified' ? 'bg-emerald-100 text-emerald-800' : cert.status === 'Active' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'}`}>
                            {cert.status}
                          </span>
                          <span className="px-2 py-2 rounded-2xl text-xs font-bold bg-slate-100 text-slate-700">
                            {cert.type}
                          </span>
                        </div>
                      </div>
                      <div className={`p-2 rounded-2xl shadow-lg ${cert.status === 'Verified' ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'}`}>
                        <CheckCircle className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        Issued: <span className=" text-xs font-semibold">{cert.issueDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-slate-400" />
                        Roll: <span className="text-xs   font-semibold">{cert.rollNumber}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="relative group">
                      <div className="w-full aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-4 shadow-2xl overflow-hidden group-hover:shadow-3xl transition-all border-4 border-white/50">
                        <img 
                          src={cert.image} 
                          alt={`${cert.title} preview`}
                          className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute -top-3 -right-3 bg-white p-3 rounded-3xl shadow-2xl border-4 border-orange-100">
                          <QrCode className="w-12 h-12 text-orange-600" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                          Certificate Details
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-slate-500 ">Certificate No:</span>
                            <span className="font-mono font-semibold text-slate-900">{cert.certificateNumber}</span>
                          </div>
                          {cert.expiryDate && (
                            <div className="flex justify-between">
                              <span className="text-slate-500">Valid Until:</span>
                              <span className="font-semibold">{cert.expiryDate}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex gap-3 pt-4 border-t border-slate-200">
                        <button className="flex text-xs font-semibold gap-2 flex-1 p-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl shadow-lg  transition-all">
                          <CheckCircle className="w-4 h-4" />
                          Verify Certificate
                        </button>
                        <button className="p-4 bg-slate-100 hover:bg-slate-200 rounded-2xl shadow-md hover:shadow-lg transition-all" title="Download PDF">
                          <Download className="w-5 h-5" />
                        </button>
                        <button className="p-4 bg-slate-100 hover:bg-slate-200 rounded-2xl shadow-md hover:shadow-lg transition-all" title="Print">
                          <Printer className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                      <QrCode className="w-6 h-6 text-slate-600" />
                      <h5 className="font-bold text-md text-slate-900">Verification QR Code</h5>
                    </div>
                    <div className="flex justify-center p-4 bg-white rounded-2xl shadow-xl border-4 border-orange-100">
                      <img src={cert.qrCode} alt="QR Code Verification" className="w-28 h-28" />
                    </div>
                    <p className="text-center text-sm text-slate-600 mt-4">
                      Scan to instantly verify authenticity with NIOS blockchain registry
                    </p>
                  </div>
                
              </div>
            ))}

            {filteredCertificates.length === 0 && (
              <div className="col-span-full text-center py-32">
                <GraduationCap className="w-32 h-32 mx-auto mb-8 text-slate-300 opacity-50 animate-bounce" />
                <h3 className="text-3xl font-black text-slate-900 mb-4">No Certificates Yet</h3>
                <p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto">
                  Your official certificates will appear here once issued by NIOS. Complete courses and assessments to earn your credentials.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-black rounded-3xl shadow-2xl hover:shadow-3xl transition-all w-full sm:w-auto">
                    View My Courses →
                  </button>
                  <button className="px-8 py-4 border-2 border-slate-200 rounded-3xl font-black text-slate-700 hover:bg-slate-50 transition-all shadow-lg">
                    Check Exam Status
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
