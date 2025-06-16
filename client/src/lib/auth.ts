import { api } from "./api";

export const login = async (data: { email: string; password: string }) => {
  // The token will be set as a cookie by the server
  return api.post("/api/auth/login", data, { withCredentials: true });
};

export const register = async (data: {
  name?: string;
  email: string;
  password: string;
}) => {
  return api.post("/api/auth/register", data, { withCredentials: true });
};
