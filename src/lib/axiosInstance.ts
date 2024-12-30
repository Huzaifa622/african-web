
import axios from "axios"
export const api = axios.create({
    baseURL: 'https://aaw.dev-rr.xyz/api',
    timeout: 30000,
  

  });
  api.interceptors.request.use(
    (config) => {
      // Check if we are in a browser environment
      if (typeof window !== 'undefined') {
        const token = window.localStorage.getItem('access_token');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );