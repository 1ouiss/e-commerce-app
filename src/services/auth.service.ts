import { User, UserConnect, UserCreate } from "@/types/users/users.types";
import instance from "./api.service";

const login = async (user: UserConnect) => {
  const response = await instance.post("/auth/login", user);
  return response.data;
};

const register = async (user: UserCreate): Promise<User> => {
  const response = await instance.post("/auth/register", user);
  return response.data;
};

const AuthService = {
  login,
  register,
};

export default AuthService;
