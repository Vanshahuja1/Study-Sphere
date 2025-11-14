"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { requestOtp, verifyOtp } from "@/services/auth";
import { setAuthToken } from "@/utils/storage";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OTP_LENGTH = 5;

const LoginPage = () => {
  const router = useRouter();
  const [step, setStep] = useState<"phone" | "otp-phone" | "email" | "otp-email">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [loading, setLoading] = useState(false);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleSendPhoneOTP = async () => {
    if (phoneNumber.replace(/\D/g, "").length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    try {
      setLoading(true);
      await requestOtp(phoneNumber);
      toast.success("OTP sent to your phone number!");
      setStep("otp-phone");
    } catch (e: any) {
      toast.error(e?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleSendEmailOTP = async () => {
    if (!email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }
    try {
      setLoading(true);
      await requestOtp(email);
      toast.success("OTP sent to your email!");
      setStep("otp-email");
    } catch (e: any) {
      toast.error(e?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    const code = otp.join("");
    if (code.length !== OTP_LENGTH) {
      toast.error("Please enter complete OTP");
      return;
    }
    const identifier = step.startsWith("otp-phone") ? phoneNumber : email;

    try {
      setLoading(true);
      const res = await verifyOtp(identifier, code);
      setAuthToken(res.token);
      toast.success("OTP Verified! Welcome to StudySphere 🎉");

      if (res.role === "admin") router.push("/admin");
      else if (res.role === "educator") router.push("/educator");
      else router.push("/student");

      setTimeout(() => {
        setStep("phone");
        setOtp(Array(OTP_LENGTH).fill(""));
        setPhoneNumber("");
        setEmail("");
      }, 1000);
    } catch (e: any) {
      toast.error(e?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (idx: number, value: string) => {
    const val = value.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    if (val && idx < OTP_LENGTH - 1) inputsRef.current[idx + 1]?.focus();
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) inputsRef.current[idx - 1]?.focus();
    if (e.key === "ArrowLeft" && idx > 0) inputsRef.current[idx - 1]?.focus();
    if (e.key === "ArrowRight" && idx < OTP_LENGTH - 1) inputsRef.current[idx + 1]?.focus();
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!pasted) return;

    const next = [...otp];
    for (let i = 0; i < pasted.length; i++) next[i] = pasted[i] as string;
    setOtp(next);

    inputsRef.current[Math.min(pasted.length, OTP_LENGTH - 1)]?.focus();
  };

  const handleBackToPhone = () => {
    setStep("phone");
    setOtp(Array(OTP_LENGTH).fill(""));
  };

  const handleBackToEmail = () => {
    setStep("email");
    setOtp(Array(OTP_LENGTH).fill(""));
  };

  const handleSwitchToEmail = () => {
    setStep("email");
    setOtp(Array(OTP_LENGTH).fill(""));
  };

  const handleSwitchToPhone = () => {
    setStep("phone");
    setOtp(Array(OTP_LENGTH).fill(""));
  };

  const isEmailSide = step === "email" || step === "otp-email";

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <ToastContainer position="top-right" autoClose={3000} theme="light" />

      {/* Main Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900" />
      <div
        className="absolute inset-0 -z-10 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,.05), transparent 50%), radial-gradient(circle at 80% 30%, rgba(255,255,255,.02), transparent 50%), radial-gradient(circle at 40% 80%, rgba(255,255,255,.03), transparent 50%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="relative rounded-xl border border-white/30 bg-white/5 backdrop-blur-md shadow-2xl">
          <div className="pointer-events-none absolute inset-3 rounded-lg border border-white/20" />

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* IMAGE SECTION */}
            <div
              className={`
                relative hidden lg:block
                transform transition-all duration-1500 ease-[cubic-bezier(0.4,0.0,0.2,1)]
                ${isEmailSide ? "lg:order-2" : "lg:order-1"}
              `}
              style={{ transitionProperty: "transform, opacity" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  className="w-full h-full object-cover rounded-lg"
                  src="/auth.png"
                  alt="auth"
                  width={500}
                  height={500}
                />
              </div>

              {/* Top-left dots */}
              <div className="absolute left-6 top-6 w-20 h-20 opacity-50">
                <div className="grid grid-cols-5 gap-2">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  ))}
                </div>
              </div>

              {/* Bottom-right dots */}
              <div className="absolute right-10 bottom-10 w-16 h-16 opacity-40">
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  ))}
                </div>
              </div>
            </div>

            {/* CONTENT SECTION */}
            <div
              className={`
                relative px-8 py-10 sm:px-12 sm:py-14
                transform transition-all duration-1500 ease-[cubic-bezier(0.4,0.0,0.2,1)]
                ${isEmailSide ? "lg:order-1" : "lg:order-2"}
              `}
              style={{ transitionProperty: "transform, opacity" }}
            >
              <div className="max-w-sm ml-auto lg:mr-16 text-white">
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                  <span className="text-transparent bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text">
                    StudySphere
                  </span>
                </h1>

                {/* PHONE LOGIN */}
                {step === "phone" && (
                  <>
                    <p className="mt-3 text-sm text-white/70">Enter your phone number to receive OTP</p>
                    <div className="mt-6">
                      <input
                        type="tel"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                        className="w-full px-4 py-3 rounded-lg bg-white text-slate-800 text-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleSendPhoneOTP}
                      disabled={loading}
                      className="mt-6 w-52 rounded-full bg-indigo-500 text-white font-semibold py-2.5 shadow hover:bg-indigo-600 transition disabled:opacity-60"
                    >
                      {loading ? "Sending..." : "Send OTP"}
                    </button>

                    <div className="my-6 h-px w-52 bg-white/20" />

                    <button
                      type="button"
                      onClick={handleSwitchToEmail}
                      className="w-64 rounded-xl border border-white/70 bg-transparent text-white py-3 hover:bg-white/10 transition"
                    >
                      Login Via Email
                    </button>
                  </>
                )}

                {/* OTP PHONE */}
                {step === "otp-phone" && (
                  <>
                    <p className="mt-3 text-sm text-white/70">Enter OTP sent to {phoneNumber}</p>

                    <div className="mt-6 flex items-center gap-3 select-none">
                      {Array.from({ length: OTP_LENGTH }).map((_, idx) => (
                        <input
                          key={idx}
                          ref={(el) => (inputsRef.current[idx] = el)}
                          maxLength={1}
                          value={otp[idx]}
                          onChange={(e) => handleChange(idx, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(idx, e)}
                          onPaste={idx === 0 ? handlePaste : undefined}
                          className="w-14 h-14 rounded-md bg-white text-slate-800 text-2xl font-semibold text-center shadow focus:ring-2 focus:ring-indigo-400"
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={handleVerifyOTP}
                      disabled={loading}
                      className="mt-6 w-52 rounded-full bg-indigo-500 text-white font-semibold py-2.5 shadow hover:bg-indigo-600 transition"
                    >
                      {loading ? "Verifying..." : "Verify & Login"}
                    </button>

                    <button
                      type="button"
                      onClick={handleBackToPhone}
                      className="mt-3 w-52 rounded-full bg-white/20 text-white font-semibold py-2.5 shadow hover:bg-white/30 transition"
                    >
                      Change Number
                    </button>

                    <div className="my-6 h-px w-52 bg-white/20" />

                    <button
                      type="button"
                      onClick={handleSwitchToEmail}
                      className="w-64 rounded-xl border border-white/70 bg-transparent text-white py-3 hover:bg-white/10 transition"
                    >
                      Login Via Email Instead
                    </button>
                  </>
                )}

                {/* EMAIL LOGIN */}
                {step === "email" && (
                  <>
                    <p className="mt-3 text-sm text-white/70">Enter your email to receive OTP</p>

                    <div className="mt-6">
                      <input
                        type="email"
                        placeholder="Enter email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-white text-slate-800 text-lg shadow focus:ring-2 focus:ring-indigo-400"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleSendEmailOTP}
                      disabled={loading}
                      className="mt-6 w-52 rounded-full bg-indigo-500 text-white font-semibold py-2.5 shadow hover:bg-indigo-600 transition"
                    >
                      {loading ? "Sending..." : "Send OTP"}
                    </button>

                    <div className="my-6 h-px w-52 bg-white/20" />

                    <button
                      type="button"
                      onClick={handleSwitchToPhone}
                      className="w-64 rounded-xl border border-white/70 bg-transparent text-white py-3 hover:bg-white/10 transition"
                    >
                      Login Via Phone
                    </button>
                  </>
                )}

                {/* OTP EMAIL */}
                {step === "otp-email" && (
                  <>
                    <p className="mt-3 text-sm text-white/70">Enter OTP sent to {email}</p>

                    <div className="mt-6 flex items-center gap-3 select-none">
                      {Array.from({ length: OTP_LENGTH }).map((_, idx) => (
                        <input
                          key={idx}
                          ref={(el) => (inputsRef.current[idx] = el)}
                          maxLength={1}
                          value={otp[idx]}
                          onChange={(e) => handleChange(idx, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(idx, e)}
                          onPaste={idx === 0 ? handlePaste : undefined}
                          className="w-14 h-14 rounded-md bg-white text-slate-800 text-2xl font-semibold text-center shadow focus:ring-2 focus:ring-indigo-400"
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={handleVerifyOTP}
                      disabled={loading}
                      className="mt-6 w-52 rounded-full bg-indigo-500 text-white font-semibold py-2.5 shadow hover:bg-indigo-600 transition"
                    >
                      {loading ? "Verifying..." : "Verify & Login"}
                    </button>

                    <button
                      type="button"
                      onClick={handleBackToEmail}
                      className="mt-3 w-52 rounded-full bg-white/20 text-white font-semibold py-2.5 shadow hover:bg-white/30 transition"
                    >
                      Change Email
                    </button>

                    <div className="my-6 h-px w-52 bg-white/20" />

                    <button
                      type="button"
                      onClick={handleSwitchToPhone}
                      className="w-64 rounded-xl border border-white/70 bg-transparent text-white py-3 hover:bg-white/10 transition"
                    >
                      Login Via Phone Instead
                    </button>
                  </>
                )}

                <p className="mt-6 text-xs text-white/70 max-w-xs">
                  By moving forward, you consent to our <br />
                  <a className="font-semibold text-white" href="#">
                    Terms and Conditions
                  </a>
                </p>

                <div className="pointer-events-none absolute -z-10 right-6 top-14 w-40 h-40 rounded-full bg-black/30 blur-2xl" />
                <div className="pointer-events-none absolute -z-10 right-24 top-24 w-24 h-24 rounded-full bg-black/30 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
