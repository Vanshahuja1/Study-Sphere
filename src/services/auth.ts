import http from "./http";

export type Role = "admin" | "student" | "educator";

export async function requestOtp(identifier: string) {
  const data = await http.post<{ success: boolean }>("/auth/request-otp", { identifier });
  return data;
}

export interface AuthResponse {
  message: string;
  access: string;
  refresh: string;
  role: string;
  user_exists: boolean;
}

export async function verifyOtp(identifier: string, otp: string) {
  const data = await http.post<AuthResponse>("/auth/verify-otp", { identifier, otp });
  return data;
}

export async function adminSendOtp(identifier: string, identifier_type: "email" | "mobile") {
  return await http.post("/auth/send-otp/", { identifier, identifier_type });
}

export async function adminVerifyOtp(identifier: string, identifier_type: "email" | "mobile", otp: string) {
  return await http.post<AuthResponse>("/auth/verify-otp/", { identifier, identifier_type, otp });
}

export async function onboardInstructor(formData: FormData) {
  return await http.post<{
    message: string;
    organisation_code?: string;
    email: string;
    phone: string;
  }>("/auth/onboard-instructor/", formData);
}
