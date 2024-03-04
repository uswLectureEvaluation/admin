import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
import { getNoticeDetail } from '../api/notice/get';
import { deleteNotice } from '../api/notice/delete';
import { useQuery } from '@tanstack/react-query';
const NoticeDetail = () => {
  const navigate = useNavigate();
  //   const location = useLocation();
  //   const { id } = location.state;
  const id = 1;
  const [db, setData] = useState({ data: {} });

  const onDelete = () => {
    if (window.confirm('강의평가를 삭제하시겠습니까?')) {
      deleteNotice(id);
      navigate('/notice');
    } else {
      console.log('dd');
      return;
    }
  };

  const { data: noticeData } = useQuery({
    queryKey: ['noticeData'],
    queryFn: () => getNoticeDetail(1),
  });

  console.log(noticeData);
  return (
    <Container>
      <Typography variant="h4">공지사항</Typography>
      <div>
        <Typography variant="h6">{noticeData?.data.title}</Typography>
        <Typography variant="subtitle1">
          {noticeData?.data.modifiedDate}
        </Typography>
        <Typography variant="body1">{noticeData?.data.content}</Typography>
      </div>
      <div>
        <Button variant="contained" onClick={() => navigate('/main')}>
          목록
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate('/update', { state: { props: db.data } })}
        >
          수정
        </Button>
        <Button variant="contained" onClick={onDelete}>
          삭제
        </Button>
      </div>
    </Container>
  );
};

export default NoticeDetail;
