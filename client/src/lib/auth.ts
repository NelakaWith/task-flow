import { api } from "./api";

export const login = async (data: { email: string; password: string }) => {
  return api.post("/api/auth/login", data);
};

export const register = async (data: {
  name?: string;
  email: string;
  password: string;
}) => {
  return api.post("/api/auth/register", data);
};
