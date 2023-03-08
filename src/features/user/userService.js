import axios from "axios";

const API_URL = "/api/user";

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  if (response?.data) {
    localStorage.setItem("token", response?.data?.token);
  }
  return response?.data;
};

export const userService = { register };
