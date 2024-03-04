import { useQuery } from '@tanstack/react-query';
import { getAllNotice, getNoticeDetail } from '../../api/notice/get';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Title from './Title';
import { useEffect, useState } from 'react';

export default function Notice() {
  const [Array, setArray] = useState();
  const { data: noticeAllData, isLoading } = useQuery({
    queryKey: ['noticeAllData'],
    queryFn: () => getAllNotice(1),
  });
  useEffect(() => {
    if (!isLoading) {
      setArray(noticeAllData?.data);
    }
  }, [noticeAllData, isLoading]);

  const reversedArray = Array ? [...Array].reverse() : [];

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Title>공지사항</Title>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Modified Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reversedArray.map((notice: any) => (
              <TableRow key={notice.id}>
                <TableCell>{notice.id}</TableCell>
                <TableCell>{notice.title}</TableCell>
                <TableCell>
                  {new Date(notice.modifiedDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
