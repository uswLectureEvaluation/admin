import apiAxios from './apiAxios';
// import AxiosResponse from 'axios';
export const getall = async () => {
  await apiAxios
    .get('v2/admin/reported-posts')
    .then(r => {
      r.data;
    })
    .catch(e => e.response.data);
};
