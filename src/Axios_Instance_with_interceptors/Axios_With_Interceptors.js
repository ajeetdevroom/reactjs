// api.js (or any other file where you configure your Axios instance)

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can modify the request config before it is sent
    // For example, add headers or tokens
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // You can modify the response data before it is passed to the component
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default api;
