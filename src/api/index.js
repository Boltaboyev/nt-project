import axios from "axios";
import cookie from "js-cookie";

export const request = axios.create({
  baseURL: "https://nt-shopping-list.onrender.com/api",
  headers: {
    Authorization: `Bearer ${cookie.get("token")}`,
  },
});
