import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const token = cookies.get('token');

const apiAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVICE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

apiAxios.interceptors.request.use(config => {
  const { url, headers } = config;

  console.log('url', url);
  console.log('headers', headers);

  return config;
});

apiAxios.interceptors.response.use(config => {
  const { headers } = config;

  console.log('headers', headers);

  return config;
});

//   response => response,
//   error => {
//     const statusCode = error.response?.status;
//     if (statusCode === 401) {
//       error.response.statusText = 'Unauthorized';
//       error.response.status = 401;
//       window.location.href = '/';
//     }
//     return Promise.reject(error);
//   }
// );

export default apiAxios;
