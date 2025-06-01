import axios from "axios";
import cookie from "js-cookie";

export const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${cookie.get("token")}`,
  },
});