import apiAxios from '../apiAxios';

export const getNoticeDetail = async (page: number) => {
  return await apiAxios
    .get(`/notice/?noticeId=${page}`)
    .then(r => r.data)
    .catch(e => e.response.data);
};

export const getAllNotice = async (page: number) => {
  return await apiAxios
    .get(`/notice/v2/all?page=${page}`)
    .then(r => r.data)
    .catch(e => e.response.data);
};
