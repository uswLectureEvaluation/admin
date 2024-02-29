import apiAxios from '../apiAxios';

export const examNoproblem = async () => {
  await apiAxios
    .delete('/v2/admin/exam-post/')
    .then(r => {
      r.data;
    })
    .catch(e => e.response.data);
};
