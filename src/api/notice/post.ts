import apiAxios from '../apiAxios';

export const postNotice = async (
  id: number,
  data: { title: string; content: string }
) => {
  await apiAxios
    .post(`/notice/?noticeId=${id}`, data)
    .then(r => {
      r.data;
    })
    .catch(e => e.response.data);
};
