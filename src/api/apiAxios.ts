import axios from 'axios';
import { setCookie, getCookie } from '../utils/Cookies';

const token = getCookie('Accesstoken');

const apiAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_HOST,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

apiAxios.interceptors.request.use(config => {
  const { url, headers } = config;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  } else {
    window.location.href = '/';
  }
  (error: any) => Promise.reject(error);

  return config;
});

apiAxios.interceptors.response.use(config => {
  const { headers } = config;

  return config;
});

export default apiAxios;
