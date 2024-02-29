export interface ExamPostReports {
  id: number;
  examIdx: number;
  reportedUserIdx: number;
  reportingUserIdx: number;
  professor: string;
  lectureName: string;
  content: string;
  reportedDate: string;
}
