import apiAxios from '../apiAxios';

export const evaluateBlacklist = async () => {
  await apiAxios
    .post('/v2/admin/evaluate-post/blacklist')
    .then(r => {
      r.data;
    })
    .catch(e => e.response.data);
};
