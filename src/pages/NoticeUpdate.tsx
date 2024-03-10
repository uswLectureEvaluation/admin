import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Box, Container, Typography, TextField, Button } from '@mui/material';

import { putNotice } from '../api/notice/put';
import { useQuery } from '@tanstack/react-query';
import { getNoticeDetail } from '../api/notice/get';

const NoticeUpdate = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = Number(searchParams.get('noticeId'));
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  console.log(id);
  const { data: noticeData, isLoading } = useQuery({
    queryKey: ['noticeData'],
    queryFn: () => getNoticeDetail(id),
  });

  useEffect(() => {
    if (!isLoading) {
      setTitle(noticeData?.data?.title);
      setContent(noticeData?.data?.content);
    }
  }, [noticeData, isLoading]);

  const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const contentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    putNotice(id, { title: title, content: content });
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 4,
        }}
      >
        <Typography variant="h4">공지사항 수정하기</Typography>

        <TextField
          type="text"
          name="title"
          value={title}
          onChange={titleChange}
          id="title"
          placeholder="제목"
          sx={{ width: '250px', mt: 2 }}
        />

        <TextField
          type="text"
          name="content"
          id="content"
          value={content}
          onChange={contentChange}
          placeholder="내용"
          multiline
          rows={8}
          sx={{ width: '400px', mt: 2 }}
        />

        <Button variant="contained" onClick={onSubmit} sx={{ mt: 2 }}>
          글쓰기
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate('/main')}
          sx={{ mt: 2 }}
        >
          목록
        </Button>
      </Box>
    </Container>
  );
};

export default NoticeUpdate;
