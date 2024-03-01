import apiAxios from './apiAxios';
import { setCookie, getCookie } from '../utils/Cookies';

export const login = async (email: string, password: string) => {
  await apiAxios
    .post('/v2/admin/login', {
      loginId: email,
      password: password,
    })
    .then(r => {
      setCookie('Accesstoken', r.data.AccessToken);
      console.log(r.data);
      setCookie('member', r.data.UserCount);
    })
    .catch(e => e.response.data);
};
