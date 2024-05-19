import { jwtDecode } from "jwt-decode";
import { BASEURL } from "./BaseUrl";
import axios from "axios";
import dayjs from "dayjs";

export const axiosInstance = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve token from local storage
    const token = localStorage.getItem("access");
    const refreshToken = localStorage.getItem("refresh");

    // If token exists, add it to the request headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      const user = jwtDecode(accessToken);
      const isExp = dayjs.unix(user.exp).diff(dayjs()) < 1;
      if (isExp) {
        const res = axios.post(`${BASEURL}/token/refresh`, {
          refresh: refreshToken,
        });
        if (res.status === 200) {
          config.headers.Authorization = `Bearer ${res.data.access}`;
          localStorage.setItem("access", res.data.access);
        } else {
          console.log(res);
        }
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
