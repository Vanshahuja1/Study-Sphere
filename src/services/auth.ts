import http from "./http";

export type Role = "admin" | "student" | "educator";

export async function requestOtp(identifier: string) {
  const { data } = await http.post("/auth/request-otp", { identifier });
  return data as { success: boolean };
}

export async function verifyOtp(identifier: string, otp: string) {
  const { data } = await http.post("/auth/verify-otp", { identifier, otp });
  return data as { token: string; role: Role };
}
