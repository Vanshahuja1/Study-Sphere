"use client";
import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AuthPage() {
  const [tab, setTab] = useState("login");
  const [loginMode, setLoginMode] = useState("phone");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [otpRequested, setOtpRequested] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const canRequestOtp = useMemo(() => countryCode && phone.length >= 8, [countryCode, phone]);
  const canVerifyOtp = useMemo(() => otp.every((d) => d.length === 1), [otp]);
  const canEmailLogin = useMemo(() => email && password.length >= 6, [email, password]);
  const canSignup = useMemo(() => name && email && password.length >= 6 && phone.length >= 8, [name, email, password, phone]);

  function handleOtpChange(index, value) {
    if (!/^\d?$/.test(value)) return;
    const next = [...otp];
    next[index] = value;
    setOtp(next);
    if (value && index < otpRefs.length - 1) {
      otpRefs[index + 1].current?.focus();
    }
  }

  function handleOtpKeyDown(index, e) {
    if (e.key === "Backspace" && !otp[index] && index > 0) otpRefs[index - 1].current?.focus();
    if (e.key === "ArrowLeft" && index > 0) otpRefs[index - 1].current?.focus();
    if (e.key === "ArrowRight" && index < otpRefs.length - 1) otpRefs[index + 1].current?.focus();
  }

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0e1a4b] via-[#0b2a73] to-[#0b1b38] text-white">
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-stretch justify-center px-4 sm:px-8">
        <div className="relative grid w-full grid-cols-1 items-stretch gap-10 lg:grid-cols-2">
          <div className="relative hidden min-h-[620px] select-none overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-0 backdrop-blur lg:block">
            <div className="absolute inset-0">
              <Image src="/auth-bg.jpg" alt="" fill className="object-cover opacity-40" priority />
            </div>
            <div className="relative h-full w-full">
              <div className="absolute inset-8 rounded-2xl border border-white/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="360" height="360" viewBox="0 0 24 24" aria-hidden className="text-white/90 drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)]">
                  <path fill="currentColor" d="M9 21h6v-1H9v1Zm3-19C7.477 2 4 5.477 4 10c0 3.07 1.64 5.765 4.07 7.236c.29.175.47.49.47.83V19h6v-.934c0-.34.18-.655.47-.83C18.36 15.765 20 13.07 20 10c0-4.523-3.477-8-8-8Zm0 2c3.309 0 6 2.691 6 6c0 2.2-1.202 4.125-3 5.174V17H9v-1.826C7.202 13.125 6 11.2 6 9c0-3.309 2.691-6 6-6Z"/>
                </svg>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
          </div>

          <div className="relative min-h-[620px] rounded-3xl border border-white/20 bg-white/10 p-8 sm:p-10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
            <div className="mx-auto w-full max-w-md">
              <div className="mb-8 flex items-center justify-between">
                <h1 className="text-3xl font-semibold tracking-tight">{tab === "login" ? "Login to StudySphere" : "Create your account"}</h1>
                <div className="grid grid-cols-2 rounded-full bg-white/10 p-1 text-sm">
                  <button onClick={() => setTab("login")} className={`rounded-full px-4 py-1.5 transition ${tab === "login" ? "bg-white text-slate-900" : "text-white/80"}`}>Login</button>
                  <button onClick={() => setTab("signup")} className={`rounded-full px-4 py-1.5 transition ${tab === "signup" ? "bg-white text-slate-900" : "text-white/80"}`}>Sign Up</button>
                </div>
              </div>

              {tab === "login" ? (
                <div className="space-y-6">
                  <div className="flex gap-2">
                    <button onClick={() => { setLoginMode("phone"); setOtpRequested(false); }} className={`flex-1 rounded-full border px-4 py-2 text-sm transition ${loginMode === "phone" ? "border-white bg-white text-slate-900" : "border-white/30 bg-transparent text-white/80"}`}>Phone</button>
                    <button onClick={() => { setLoginMode("email"); setOtpRequested(false); }} className={`flex-1 rounded-full border px-4 py-2 text-sm transition ${loginMode === "email" ? "border-white bg-white text-slate-900" : "border-white/30 bg-transparent text-white/80"}`}>Email</button>
                  </div>

                  {loginMode === "phone" && (
                    <>
                      {!otpRequested ? (
                        <>
                          <div className="flex gap-3">
                            <select aria-label="Country code" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} className="w-28 h-11 rounded-full border border-white/30 bg-white/10 px-3 text-white outline-none placeholder-white/50 focus:border-white/60">
                              <option className="text-slate-900" value="+91">+91</option>
                              <option className="text-slate-900" value="+1">+1</option>
                              <option className="text-slate-900" value="+44">+44</option>
                            </select>
                            <input aria-label="Mobile Number" inputMode="tel" maxLength={15} value={phone} onChange={(e) => setPhone(e.target.value.replace(/[^\d]/g, ""))} placeholder="Mobile Number" className="flex-1 h-11 rounded-full border border-white/30 bg-white/10 px-4 text-white outline-none placeholder-white/60 focus:border-white/60" />
                          </div>
                          <button disabled={!canRequestOtp} onClick={() => setOtpRequested(true)} className="w-full rounded-full bg-white px-5 py-2.5 font-medium text-slate-900 shadow-sm transition disabled:cursor-not-allowed disabled:opacity-50">Login Now</button>
                          <button type="button" onClick={() => setLoginMode("email")} className="w-full rounded-full border border-white/40 bg-transparent px-5 py-2.5 text-white/90">Login Via Email</button>
                        </>
                      ) : (
                        <>
                          <p className="text-sm text-white/80">Enter OTP sent to your number and verify</p>
                          <div className="flex items-center gap-4">
                            {otp.map((d, i) => (
                              <input key={i} ref={otpRefs[i]} value={d} onChange={(e) => handleOtpChange(i, e.target.value)} onKeyDown={(e) => handleOtpKeyDown(i, e)} inputMode="numeric" pattern="[0-9]*" maxLength={1} className="h-14 w-14 rounded-md border border-white/60 bg-white/10 text-center text-xl outline-none focus:border-white" />
                            ))}
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <button disabled={!canVerifyOtp} className="rounded-full bg-white px-4 py-2.5 font-medium text-slate-900 disabled:cursor-not-allowed disabled:opacity-50">Verify</button>
                            <button onClick={() => setOtpRequested(false)} className="rounded-full border border-white/40 bg-transparent px-4 py-2.5 text-white/90">Login Now</button>
                          </div>
                          <button type="button" onClick={() => setLoginMode("email")} className="w-full rounded-full border border-white/40 bg-transparent px-4 py-2.5 text-white/90">Login Via Email</button>
                        </>
                      )}
                    </>
                  )}

                  {loginMode === "email" && (
                    <>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full h-11 rounded-full border border-white/30 bg-white/10 px-4 text-white outline-none placeholder-white/60 focus:border-white/60" />
                      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full h-11 rounded-full border border-white/30 bg-white/10 px-4 text-white outline-none placeholder-white/60 focus:border-white/60" />
                      <button disabled={!canEmailLogin} className="w-full rounded-full bg-white px-5 py-2.5 font-medium text-slate-900 disabled:cursor-not-allowed disabled:opacity-50">Login</button>
                      <button type="button" onClick={() => setLoginMode("phone")} className="w-full rounded-full border border-white/40 bg-transparent px-5 py-2.5 text-white/90">Login Via Phone</button>
                    </>
                  )}

                  <p className="text-center text-xs text-white/70">By moving forward, you consent to our <Link href="#" className="underline">Terms and Conditions</Link></p>
                </div>
              ) : (
                <div className="space-y-5">
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className="w-full h-11 rounded-full border border-white/30 bg-white/10 px-4 text-white outline-none placeholder-white/60 focus:border-white/60" />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full h-11 rounded-full border border-white/30 bg-white/10 px-4 text-white outline-none placeholder-white/60 focus:border-white/60" />
                  <div className="flex gap-3">
                    <select aria-label="Country code" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} className="w-28 h-11 rounded-full border border-white/30 bg-white/10 px-3 text-white outline-none placeholder-white/50 focus:border-white/60">
                      <option className="text-slate-900" value="+91">+91</option>
                      <option className="text-slate-900" value="+1">+1</option>
                      <option className="text-slate-900" value="+44">+44</option>
                    </select>
                    <input inputMode="tel" maxLength={15} value={phone} onChange={(e) => setPhone(e.target.value.replace(/[^\d]/g, ""))} placeholder="Mobile Number" className="flex-1 h-11 rounded-full border border-white/30 bg-white/10 px-4 text-white outline-none placeholder-white/60 focus:border-white/60" />
                  </div>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full h-11 rounded-full border border-white/30 bg-white/10 px-4 text-white outline-none placeholder-white/60 focus:border-white/60" />
                  <button disabled={!canSignup} className="w-full rounded-full bg-white px-5 py-2.5 font-medium text-slate-900 disabled:cursor-not-allowed disabled:opacity-50">Create Account</button>
                  <p className="text-center text-sm text-white/80">Already have an account? <button onClick={() => setTab("login")} className="underline">Login</button></p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

