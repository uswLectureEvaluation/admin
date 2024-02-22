import axios from 'axios';
import apiAxios from '../apiAxios';

export const login = async (email: string, password: string) => {
  const response = await apiAxios
    .post('v2/admin/login', {
      loginId: 'string',
      password: 'string',
    })
    .then(r => r.data)
    .catch(e => e.response.data);
};
