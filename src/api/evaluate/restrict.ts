import apiAxios from '../apiAxios';

export const evaluateRestrict = async () => {
  await apiAxios
    .post('/v2/admin/evaluate-post/restrict')
    .then(r => {
      r.data;
    })
    .catch(e => e.response.data);
};
