import { ReportData } from '../types/all';
import apiAxios from './apiAxios';

export const getall = async () => {
  return await apiAxios
    .get<ReportData>('v2/admin/reported-posts')
    .then(response => response.data)

    .catch(e => e.response.data);
};
