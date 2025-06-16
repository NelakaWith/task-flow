// Simple auth check: looks for a token in localStorage
export function isAuthenticated() {
  return Boolean(localStorage.getItem("token"));
}
