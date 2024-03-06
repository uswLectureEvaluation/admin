import apiAxios from '../apiAxios';

export const postNotice = async (data: {
  title: string | undefined;
  content: string | undefined;
}) => {
  try {
    const response = await apiAxios.post(`/notice/`, data);
    alert('글이 등록되었습니다.');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
