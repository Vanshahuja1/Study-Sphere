import { useEffect, useState } from "react";
import { getAuthToken } from "@/utils/storage";

export function useAuth() {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    setToken(getAuthToken());
  }, []);
  return { token, isAuthenticated: !!token };
}
