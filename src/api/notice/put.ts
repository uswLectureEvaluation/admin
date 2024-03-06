import apiAxios from '../apiAxios';

export const putNotice = async (
  id: number,
  data: {
    title: string | undefined;
    content: string | undefined;
  }
) => {
  await apiAxios
    .put(`/notice/?noticeId=${id}`, data)
    .then(r => {
      r.data;
    })
    .catch(e => e.response.data);
};
