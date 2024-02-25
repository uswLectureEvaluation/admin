import axios from 'axios';
import apiAxios from './apiAxios';

import { Cookies } from 'react-cookie';
const cookies = new Cookies();


export const setCookie = (name :string, value : string, option?:any) => {
  return cookies.set(name, value, { ...option });
};
export const getCookie = (name : string) => {
  return cookies.get(name);
};



export const login = async (email: string, password: string) => {
  const response = await axios
    .post('v2/admin/login', {
      loginId: 'string',
      password: 'string',
    })
    .then(r => r.data)
    .catch(e => e.response.data);
};
