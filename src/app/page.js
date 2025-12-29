"use client";

import React, { useState, useEffect } from 'react';
import SplashScreen from '../components/splash/SplashScreen'; 
import { 
  ShieldCheck, 
  Users, 
  Video, 
  BookOpen, 
  BarChart3, 
  CreditCard, 
  Layout, 
  Zap, 
  ArrowRight,
  Globe,
  Settings,
  ChevronRight
} from 'lucide-react';

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 animate-in fade-in duration-1000 selection:bg-indigo-100">
      
      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
              StudySphere
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#roles" className="hover:text-indigo-600 transition-colors">Roles</a>
            <a href="#why" className="hover:text-indigo-600 transition-colors">Why Us</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm shadow-indigo-200">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
            Enterprise Grade LMS
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Scale Your Institution <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              With One Simple Cloud.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            A comprehensive ecosystem empowering students, educators, and administrators to deliver world-class learning experiences through a unified digital interface.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group">
              Launch Digital Classroom
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* 3. ROLE-BASED FEATURES */}
      <section id="roles" className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Tailored for every stakeholder</h2>
            <p className="text-slate-600">Specialized dashboards for seamless operations.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <RoleCard 
              icon={<Settings className="w-6 h-6" />} 
              title="Admin Panel" 
              color="indigo"
              list={["Platform-wide Analytics", "KYC & User Verification", "Fee & Payout Monitoring", "Branded App Deployment"]} 
            />
            <RoleCard 
              icon={<Users className="w-6 h-6" />} 
              title="Educators" 
              color="purple"
              list={["Batch & Course Creator", "Live Streaming Classes", "MCQ & Test Engine", "Automated Attendance"]} 
            />
            <RoleCard 
              icon={<BookOpen className="w-6 h-6" />} 
              title="Students" 
              color="indigo"
              list={["Interactive Learning Flow", "Doubt Resolution Chat", "Progress Analytics", "Digital Certificates"]} 
            />
          </div>
        </div>
      </section>

      {/* 4. KEY PLATFORM FEATURES */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Powerful Core Infrastructure</h2>
            <p className="text-slate-600">Everything you need to run your institution, built with speed and security in mind.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureItem icon={<ShieldCheck />} title="Secure Auth" desc="Enterprise-grade encryption and multi-factor authentication for all users." />
            <FeatureItem icon={<Layout />} title="Batch Management" desc="Organize students into batches with custom timetables and auto-enrollment." />
            <FeatureItem icon={<Video />} title="Smart Content Delivery" desc="Auto-uploading class recordings and seamless live class integration." />
            <FeatureItem icon={<CreditCard />} title="Monetization" desc="Sell courses on your branded marketplace with automated revenue sharing." />
            <FeatureItem icon={<BarChart3 />} title="Performance Reports" desc="Track learning progress with data-driven insights and auto-graded results." />
            <FeatureItem icon={<Globe />} title="Whitelabeling" desc="Your logo, your brand, your domain. Fully customizable experience." />
          </div>
        </div>
      </section>

      {/* 5. WHY STUDYSPHERE SECTION */}
      <section id="why" className="py-24 px-6 bg-slate-900 text-white rounded-[3rem] mx-4 mb-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Why leading institutes <br/>choose StudySphere</h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-indigo-400"><Zap /></div>
                <div>
                  <h4 className="font-bold">Lightning Fast Deployment</h4>
                  <p className="text-slate-400 text-sm">Go live with your branded app in less than 48 hours.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-indigo-400"><ShieldCheck /></div>
                <div>
                  <h4 className="font-bold">100% Content Protection</h4>
                  <p className="text-slate-400 text-sm">Screenshot protection and encrypted video streaming.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm font-semibold uppercase tracking-widest text-slate-500">Live Analytics</div>
              <div className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-lg">Real-time</div>
            </div>
            <div className="space-y-4">
              <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 w-[70%]" />
              </div>
              <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 w-[45%]" />
              </div>
              <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-400 w-[90%]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto p-12 rounded-[2.5rem] bg-indigo-50 border border-indigo-100">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Built for institutions that want to grow.</h2>
          <p className="text-slate-600 mb-10 text-lg">Launch your digital classroom today and give your students a premium experience.</p>
          <button className="px-10 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all">
            Get Started for Free
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-slate-100 text-center text-slate-500 text-sm">
        <div className="flex justify-center gap-8 mb-6">
          <a href="#" className="hover:text-indigo-600 transition-colors">Terms</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-indigo-600 transition-colors">Support</a>
        </div>
        © 2025 StudySphere. All rights reserved.
      </footer>
    </div>
  );
}

// UI SUB-COMPONENTS (Plain JS)
function RoleCard({ icon, title, list, color }) {
  const colorClass = color === "indigo" ? "bg-indigo-50 text-indigo-600" : "bg-purple-50 text-purple-600";
  const dotClass = color === "indigo" ? "bg-indigo-400" : "bg-purple-400";
  
  return (
    <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 ${colorClass} rounded-2xl flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-3 text-slate-600 text-sm">
        {list.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${dotClass}`} /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureItem({ icon, title, desc }) {
  return (
    <div className="group p-6 rounded-2xl border border-slate-100 hover:border-indigo-100 transition-all">
      <div className="w-10 h-10 text-indigo-600 mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}