import axios from 'axios';
import apiAxios from './apiAxios';
import { Cookies } from 'react-cookie';

import { setCookie, getCookie } from '../utils/Cookies';
const cookies = new Cookies();

export const login = async (email: string, password: string) => {
  await apiAxios
    .post('/v2/admin/login', {
      loginId: email,
      password: password,
    })
    .then(r => {
      setCookie('Accesstoken', r.data.AccessToken);
    })
    .catch(e => e.response.data);
};
