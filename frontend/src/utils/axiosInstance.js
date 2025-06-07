// src/utils/axiosInstance.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '', // fallback to relative path in dev
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
