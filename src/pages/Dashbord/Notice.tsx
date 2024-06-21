import { useQuery } from '@tanstack/react-query';
import { getAllNotice } from '../../api/notice/get';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';
import Title from './Title';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Notice() {
  const navigate = useNavigate();
  const [Array, setArray] = useState();
  const { data: noticeAllData, isLoading } = useQuery({
    queryKey: ['noticeAllData'],
    queryFn: () => getAllNotice(1),
  });

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (!isLoading) {
      setArray(noticeAllData?.data);
    }
  }, [isLoading]);

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
              <TableCell>공지</TableCell>
              <TableCell>날짜</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reversedArray.map((notice: any) => (
              <TableRow key={notice.id}>
                <TableCell>{notice.id}</TableCell>
                <TableCell
                  sx={{ cursor: 'pointer' }}
                  onClick={() =>
                    navigate(`/noticeDetail?noticeId=${notice.id}`)
                  }
                >
                  {notice.title}
                </TableCell>
                <TableCell>
                  {new Date(notice.modifiedDate).toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button
          // sx={{ marginRight: '400px' }}
          onClick={() => navigate('/Write')}
        >
          공지사항 작성하기
        </Button>
      </TableContainer>
    </Box>
  );
}
