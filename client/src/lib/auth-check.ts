import { api } from "./api";

// Simple auth check: looks for a token in localStorage
export async function isAuthenticated(): Promise<boolean> {
  try {
    await api.get("/api/auth/me", { withCredentials: true });
    return true;
  } catch {
    return false;
  }
}
