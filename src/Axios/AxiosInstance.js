import { BASEURL } from "./BaseUrl";
import axios from "axios"


export const axiosInstance = axios.create({
    baseURL: BASEURL,
    headers: {
        'Content-Type': 'application/json',
    }
});

axiosInstance.interceptors.request.use(
    config => {
        // Retrieve token from local storage
        const token = localStorage.getItem('access');
        console.log('token', token);
        
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