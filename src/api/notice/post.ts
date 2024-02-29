import apiAxios from "../apiAxios";

export const postNotice = async () => {
  await apiAxios
    .post('/notice/')
    .then(r => {
      r.data;
    })
    .catch(e => e.response.data);
};
