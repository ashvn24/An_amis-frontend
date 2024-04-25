import axios from "axios";
import { BASEURL } from "./BaseUrl";



export const axiosInstance = axios.create({
    baseURL: BASEURL,
    headers: {
        'Content-Type': 'application/json',
    }
});

axiosInstance.interceptors.request.use(
    config => {
        // Retrieve token from local storage
        const token = localStorage.getItem('token');
        
        // If token exists, add it to the request headers
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);