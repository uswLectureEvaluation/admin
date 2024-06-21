import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, TextField, Button } from '@mui/material';

import { postNotice } from '../api/notice/post';

const NoticeWrite = () => {
  const navigate = useNavigate();
  //   const id = Number(searchParams.get('noticeId'));
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();

  //   const { data: noticeData, isLoading } = useQuery({
  //     queryKey: ['noticeData'],
  //     queryFn: () => getNoticeDetail(id),
  //   });

  //   useEffect(() => {
  //     if (!isLoading) {
  //       setTitle(noticeData?.data.title);
  //       setContent(noticeData?.data.content);
  //     }
  //   }, []);

  const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const contentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    postNotice({ title: title, content: content });
  };

  return (
    <Container fixed>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 4,
        }}
      >
        <Typography variant="h4">공지사항 글쓰기</Typography>

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

export default NoticeWrite;
