import apiAxios from '../apiAxios';

export const putNotice = async (data: { title: string; content: string }) => {
  await apiAxios
    .put(`/notice/`, data)
    .then(r => {
      r.data;
    })
    .catch(e => e.response.data);
};
