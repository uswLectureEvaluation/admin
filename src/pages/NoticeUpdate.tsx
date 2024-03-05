import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, TextField, Button } from '@mui/material';

import { putNotice } from '../api/notice/put';

const NoticeUpdate = () => {
  // let location = useLocation();
  // let navigate = useNavigate();
  // console.log(location);
  // const { props } = location.state;
  // const [db, setData] = useState({
  //   data: [],  
  // });

  // const [loading, setLoading] = useState(false);
  // const [id] = useState(props.id);
  // const [title, setTitle] = useState(props.title);
  // const [content, setContent] = useState(props.content);

  // const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(e.target.value);
  // };

  // const contentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setContent(e.target.value);
  // };

  // const onSubmit = () => {
  //   putNotice(id, { title: title, content: content });
  // };

  // useEffect(() => {
  //   console.log(db);
  //   if (loading === true) {
  //     if (db != null) {
  //       navigate('/notice');
  //     }
  //   }
  // });

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
        <Typography variant="h4">공지사항 글쓰기</Typography>

        {/* <TextField
          type="text"
          name="title"
          value={title}
          onChange={titleChange}
          id="title"
          placeholder="제목"
          sx={{ mt: 2 }}
        />

        <TextField
          type="text"
          name="content"
          id="content"
          value={content}
          onChange={contentChange}
          placeholder="내용"
          multiline
          rows={4}
          sx={{ mt: 2 }}
        />

        <Button variant="contained" onClick={onSubmit} sx={{ mt: 2 }}>
          글쓰기
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate('/notice')}
          sx={{ mt: 2 }}
        >
          목록
        </Button> */}
      </Box>
    </Container>
  );
};

export default NoticeUpdate;
