import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useQuery } from '@tanstack/react-query';
import { getAllReport } from '../../api/getAllReport';
import { useState, useEffect } from 'react';
import { getCookie } from '../../utils/Cookies';
// Generate Order Data

// function createData(
//   id: number,
//   date: string,
//   name: string,
//   shipTo: string,
//   paymentMethod: string,
//   amount: number
// ) {
//   return { id, date, name, shipTo, paymentMethod, amount };
// }
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Reoports() {
  const token = getCookie('Accesstoken');
  const { data: reportData, isLoading } = useQuery({
    queryKey: ['reportData'],
    queryFn: getAllReport,
  });

  const [examdata, setExamdata] = useState();
  const [evaluatedata, setEvaluatedata] = useState<Array<string>>();

  useEffect(() => {
    if (!isLoading) {
      setExamdata(reportData?.examPostReports);
      setEvaluatedata(reportData?.evaluatePostReports);
    }
  }, [reportData, isLoading]);

  console.log(examdata, evaluatedata);

  function formatDate(date: string): string {
    const formattedDate = new Date(date).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate;
  }
  if (isLoading) {
    return <div>로딩중</div>;
  }
  // console.log(formatDate(data));
  return (
    <React.Fragment>
      <Title>신고내역</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>날짜</TableCell>
            <TableCell>교수이름</TableCell>
            <TableCell>과목명</TableCell>
            <TableCell>신고내용</TableCell>
            <TableCell>처리여부</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {token &&
            evaluatedata?.map((data: any) => {
              return (
                <TableRow key={data.id}>
                  <TableCell>{formatDate(data.reportedDate)}</TableCell>
                  <TableCell>{data.professor}</TableCell>
                  <TableCell>{data.lectureName}</TableCell>
                  <TableCell>{data.content}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
