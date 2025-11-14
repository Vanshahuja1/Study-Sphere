"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const SplashScreen = () => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3500);

    const redirectTimer = setTimeout(() => {
      router.push('/auth/login');
    }, 4000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div 
      className={`min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 flex items-center justify-center relative transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center px-8">
        <div className="mb-12">
          <div className="inline-flex items-center justify-center">
            <div className="relative">
              <svg width="80" height="80" viewBox="0 0 80 80" className="animate-fadeIn">
                <circle 
                  cx="40" 
                  cy="40" 
                  r="35" 
                  fill="none" 
                  stroke="url(#gradient1)" 
                  strokeWidth="2"
                  strokeDasharray="220"
                  strokeDashoffset="220"
                  className="animate-drawCircle"
                  style={{ animation: 'drawCircle 1.5s ease-out forwards' }}
                />
                
                <path 
                  d="M40 15 L55 30 L55 50 L40 65 L25 50 L25 30 Z" 
                  fill="url(#gradient2)" 
                  className="animate-fadeIn"
                  style={{ animationDelay: '0.5s' }}
                />
                
                <path 
                  d="M40 30 L50 35 L50 45 L40 50 L30 45 L30 35 Z" 
                  fill="white" 
                  className="animate-fadeIn"
                  style={{ animationDelay: '0.8s' }}
                />
                
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#4F46E5" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#6366F1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-8 animate-fadeIn" style={{ animationDelay: '1s' }}>
          <h1 className="text-5xl font-light tracking-tight text-slate-800 mb-3">
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700">
              StudySphere
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm font-medium tracking-wider">
            <span>LEARNING PLATFORM</span>
          </div>
        </div>

        <div className="w-64 mx-auto animate-fadeIn" style={{ animationDelay: '1.2s' }}>
          <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="mt-3 text-xs text-slate-400 font-medium">
            Initializing...
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center animate-fadeIn" style={{ animationDelay: '1.5s' }}>
        <p className="text-xs text-slate-400 font-medium tracking-wide">
          Powered by <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-700">One Aim It Solutions</span>
        </p>
      </div>

      <style jsx>{`
        @keyframes drawCircle {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; opacity: 0; }
        .animate-drawCircle { animation: drawCircle 1.5s ease-out forwards; }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
