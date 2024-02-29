import apiAxios from '../apiAxios';

export const examRestrict = async () => {
  await apiAxios
    .post('/v2/admin/exam-post/restrict')
    .then(r => {
      r.data;
    })
    .catch(e => e.response.data);
};
