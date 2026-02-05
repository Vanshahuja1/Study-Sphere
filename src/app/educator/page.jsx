'use client'

import Image from "next/image";
import loginImg from '@/../public/login.jpeg'
import { ArrowRight, LucideArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginOrg, VerifyOrgOtp } from "@/services/auth";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [step, setStep] = useState('FORM');
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    org_code: '',
    identifier: '',
  });

  const [otp, setOtp] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendOtp = async () => {
    try {
      setLoading(true);
      await LoginOrg(loginData); // sends OTP
      setStep('OTP');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      setLoading(true);
      await VerifyOrgOtp({ ...loginData, otp });
      // redirect to dashboard here
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="container flex">

        {/* LEFT IMAGE */}
        <div className="w-1/2 relative min-h-screen">
          <Image
            src={loginImg}
            alt="background"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-1/2 flex flex-col py-30 px-25 relative">
          <span className="absolute top-3 left-9 flex gap-1 items-center text-slate-400 font-semibold cursor-pointer">
            <LucideArrowLeft className="h-5" />
            Back
          </span>

          <h1 className="text-3xl font-bold mb-1">
            {step === 'FORM' ? 'Welcome Back' : 'Verify OTP'}
          </h1>

          <p className="mb-4 text-slate-600">
            {step === 'FORM'
              ? 'Enter your credentials to continue'
              : `OTP sent to ${loginData.identifier}`}
          </p>

          {/* STEP 1: EMAIL + ORG */}
          {step === 'FORM' && (
            <>
              <div className="flex flex-col gap-2 mb-4">
                <Label>Email</Label>
                <Input
                  name="identifier"
                  value={loginData.identifier}
                  onChange={handleChange}
                  placeholder="instructor@org.com"
                />
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <Label>Organization Code</Label>
                <Input
                  name="org_code"
                  value={loginData.org_code}
                  onChange={handleChange}
                  placeholder="Enter org code"
                />
              </div>

              <button
                onClick={handleSendOtp}
                disabled={loading}
                className="bg-golden text-white rounded-xl py-2 font-bold flex items-center justify-center gap-2"
              >
                {loading ? "Sending OTP..." : "Login"}
                <ArrowRight className="h-5" />
              </button>
            </>
          )}

          {/* STEP 2: OTP */}
          {step === 'OTP' && (
            <>
              <div className="flex flex-col gap-2 mb-6">
                <Label>Enter OTP</Label>
                <Input
                  autoFocus
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="6-digit OTP"
                  maxLength={6}
                />
              </div>

              <button
                onClick={handleVerifyOtp}
                disabled={loading || otp.length !== 6}
                className="bg-golden text-white rounded-xl py-2 font-bold flex items-center justify-center gap-2"
              >
                {loading ? "Verifying..." : "Verify OTP"}
                <ArrowRight className="h-5" />
              </button>

              <p className="text-sm text-center mt-3 text-slate-500">
                Didn’t receive OTP?
                <span
                  onClick={handleSendOtp}
                  className="text-golden font-semibold cursor-pointer ml-1"
                >
                  Resend
                </span>
              </p>
            </>
          )}

          <p className="text-sm text-center mt-4">
            Don’t have an account?
            <Link href="/educator/register" className="text-golden font-semibold ml-1">
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
