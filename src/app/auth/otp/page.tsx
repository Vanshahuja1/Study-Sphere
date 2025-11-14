"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { verifyOtp } from "@/services/auth";
import { setAuthToken } from "@/utils/storage";

export default function OtpPage() {
  const router = useRouter();
  const search = useSearchParams();
  const identifier = useMemo(() => search.get("id") || "", [search]);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!identifier) {
      router.replace("/auth/login");
    }
  }, [identifier, router]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!otp.trim() || !identifier) return;
    try {
      setLoading(true);
      const res = await verifyOtp(identifier, otp.trim());
      setAuthToken(res.token);
      const role = res.role;
      if (role === "admin") router.replace("/admin");
      else if (role === "educator") router.replace("/educator");
      else router.replace("/student");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 420, margin: "48px auto" }}>
      <h1>Enter OTP</h1>
      <p style={{ color: "#555" }}>We sent an OTP to: {identifier}</p>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12, marginTop: 16 }}>
        <input
          type="text"
          inputMode="numeric"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          style={{ padding: 10, border: "1px solid #ddd", borderRadius: 8 }}
        />
        <button disabled={loading} type="submit" style={{ padding: 10, borderRadius: 8 }}>
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
        {error && <p style={{ color: "#b91c1c" }}>{error}</p>}
      </form>
    </div>
  );
}
