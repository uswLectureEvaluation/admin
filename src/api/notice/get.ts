import apiAxios from "../apiAxios";

export const getNotice = async () => {
  await apiAxios
    .get('/notice/v2/')
    .then(r => {
      r.data;
    })
    .catch(e => e.response.data);
};



export const getAllNotice = async () => {
    await apiAxios
      .get('/notice/v2/all')
      .then(r => {
        r.data;
      })
      .catch(e => e.response.data);
  };
  