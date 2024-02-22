import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const apiAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVICE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});
