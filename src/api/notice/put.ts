import apiAxios from "../apiAxios";

export const putNotice = async () => {
  await apiAxios
    .put('/notice/')
    .then(r => {
      r.data;
    })
    .catch(e => e.response.data);
};
