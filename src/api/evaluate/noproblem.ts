import apiAxios from '../apiAxios';

export const evaluateNoproblem = async () => {
  await apiAxios
    .delete('/v2/admin/evaluate-post/')
    .then(r => {
      r.data;
    })
    .catch(e => e.response.data);
};
