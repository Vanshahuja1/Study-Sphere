'use client';

import { useState } from 'react';
import { GraduationCap, Mail, Phone, ArrowRight, Shield } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [step, setStep] = useState('input'); // 'input' or 'otp'
  const [contactMethod, setContactMethod] = useState('email');
  const [contactValue, setContactValue] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const router = useRouter();
  const handleContactSubmit = () => {
    if (contactValue.trim()) {
      setStep('otp');
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleOtpSubmit = () => {
    const otpCode = otp.join('');
    if (otpCode.length === 6) {
      // Redirect to admin dashboard
      router.push("/admin")
      console.log('Redirecting to dashboard with OTP:', otpCode);
      toast.success('Login successful! Redirecting to dashboard...');
      // In real app: router.push('/admin/dashboard')
    }
  };

  const handleBack = () => {
    setStep('input');
    setOtp(['', '', '', '', '', '']);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Logo and Title */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Study Sphere</span>
          </div>

          {step === 'input' ? (
            <>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
                <p className="text-gray-600">Admin portal - Please enter your details</p>
              </div>

              {/* Contact Method Toggle */}
              <div className="flex gap-2 mb-6 p-1 bg-gray-100 rounded-lg">
                <button
                  onClick={() => setContactMethod('email')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    contactMethod === 'email'
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email
                </button>
                <button
                  onClick={() => setContactMethod('mobile')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    contactMethod === 'mobile'
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Phone className="w-4 h-4 inline mr-2" />
                  Mobile
                </button>
              </div>

              <div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {contactMethod === 'email' ? 'Email Address' : 'Mobile Number'}
                  </label>
                  <input
                    type={contactMethod === 'email' ? 'email' : 'tel'}
                    value={contactValue}
                    onChange={(e) => setContactValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleContactSubmit()}
                    placeholder={contactMethod === 'email' ? 'admin@example.com' : '+91 98765 43210'}
                    className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <button
                  onClick={handleContactSubmit}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:scale-95 transition-all hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 group"
                >
                  Send OTP
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4" />
                <span>Secure admin authentication</span>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={handleBack}
                className="mb-6 text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center gap-1"
              >
                ← Back
              </button>

              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify OTP</h1>
                <p className="text-gray-600">
                  We've sent a 6-digit code to{' '}
                  <span className="font-medium text-gray-900">{contactValue}</span>
                </p>
              </div>

              <div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Enter OTP Code
                  </label>
                  <div className="flex gap-3 justify-between">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => {
                          handleOtpKeyDown(index, e);
                          if (e.key === 'Enter' && otp.join('').length === 6) {
                            handleOtpSubmit();
                          }
                        }}
                        className="w-14 h-14 text-black text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleOtpSubmit}
                  disabled={otp.join('').length !== 6}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  Verify & Sign In
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <button 
                onClick={() => toast.info('OTP resent!')}
                className="w-full mt-4 text-indigo-600 hover:text-indigo-700 font-medium text-sm"
              >
                Resend OTP
              </button>
            </>
          )}
        </div>
      </div>

      {/* Right Side - Branding */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-indigo-600 to-indigo-800 items-center justify-center p-12 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center max-w-lg">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl mb-6">
              <GraduationCap className="w-12 h-12 text-black" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Study Sphere</h2>
            <p className="text-xl text-indigo-100">Admin Portal</p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20">
            <p className="text-lg text-black leading-relaxed mb-6">
              "Study Sphere has revolutionized our learning management. The intuitive admin
              interface makes course management seamless and efficient."
            </p>

            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-black font-bold">
                AS
              </div>
              <div className="text-left">
                <p className="text-black font-bold">Admin User</p>
                <p className="text-indigo-400 text-sm">Platform Administrator</p>
              </div>
            </div>

            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 text-indigo-200 text-sm">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Secure Access
            </span>
            <span>•</span>
            <span>OTP Verified</span>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </div>
  );
}