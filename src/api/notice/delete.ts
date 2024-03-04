import apiAxios from '../apiAxios';

export const deleteNotice = async (id: number) => {
  return await apiAxios
    .delete(`/notice/noticeId=${id}`)
    .then(r => {
      r.data;
    })
    .catch(e => e.response.data);
};
