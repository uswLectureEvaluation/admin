import { ReportData } from '../types/all';
import apiAxios from './apiAxios';

export const getall = async () => {
  await apiAxios
    .get<ReportData>('v2/admin/reported-posts')
    .then(r => {
      r.data;
    })
    .catch(e => e.response.data);
};
