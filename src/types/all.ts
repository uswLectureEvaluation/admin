import { EvaluatePostReports } from './evaluate';
import { ExamPostReports } from './exam';

export interface ReportData {
  examPostReports: ExamPostReports[];
  evaluatePostReports: EvaluatePostReports[];
}
