import apiAxios from "../apiAxios";

export const deleteNotice = async () => {
  await apiAxios
    .delete('/notice/')
    .then(r => {
      r.data;
    })
    .catch(e => e.response.data);
};
