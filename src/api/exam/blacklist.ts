import apiAxios from '../apiAxios';

export const examBlacklist = async () => {
  await apiAxios
    .post('/v2/admin/exam-post/blacklist')
    .then(r => {
      r.data;
    })
    .catch(e => e.response.data);
};
