import apiAxios from '../apiAxios';

export const postNotice = async (
  data: { title: string | undefined ; content: string | undefined}
) => {
  await apiAxios
    .post(`/notice/`, data)
    .then(r => {
      r.data;
    })
    .catch(e => e.response.data);
};
