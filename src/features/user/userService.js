import axios from "axios";

const USER_API_URL = "/api/user";

const register = async (userData) => {
  const response = await axios.post(`${USER_API_URL}/register`, userData);
  if (response?.data?.token) {
    localStorage.setItem("token", response?.data?.token);
  }
  return response?.data;
};

const AUTH_API_URL = "/api/auth";

const login = async (userData) => {
  const response = await axios.post(`${AUTH_API_URL}/`, userData);
  if (response?.data?.token) {
    localStorage.setItem("token", response?.data?.token);
  }
  return response?.data;
};

export const userService = { register, login };
