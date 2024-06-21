import { useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import { getNoticeDetail } from '../api/notice/get';
import { deleteNotice } from '../api/notice/delete';
import { useQuery } from '@tanstack/react-query';
const NoticeDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  // console.log(location);
  //   const location = useLocation();
  // const { id } = window.location.
  // const { props } = location.state;
  console.log(location);
  const id = Number(searchParams.get('noticeId'));
  const [db] = useState({ data: {} });
  const onDelete = () => {
    if (window.confirm('강의평가를 삭제하시겠습니까?')) {
      deleteNotice(id);
      navigate('/notice');
    } else {
      console.log('dd');
      return;
    }
  };

  const { data: noticeData, isLoading } = useQuery({
    queryKey: ['noticeData'],
    queryFn: () => getNoticeDetail(id),
  });

  if (isLoading) {
    return <div>로딩중</div>;
  }
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}년${month}월${day}일`;
  };

  console.log(noticeData);
  return (
    <Container sx={{ border: 'solid 1px blue' }} maxWidth="sm">
      <Box>
        <Typography sx={{ my: '20px' }} variant="h4">
          공지사항
        </Typography>
        <div>
          <Typography color={'blue'} variant="h6">
            {noticeData?.data?.title}
          </Typography>
          <Typography sx={{ mb: '8px' }} color={'gray'} variant="subtitle1">
            {formatDate(noticeData?.data?.modifiedDate)}
          </Typography>
          <Typography variant="body1">{noticeData?.data?.content}</Typography>
        </div>
        <div>
          <Button
            sx={{ mx: '10px', my: '10px' }}
            variant="contained"
            onClick={() => navigate('/main')}
          >
            목록
          </Button>
          <Button
            sx={{ mx: '10px', my: '10px' }}
            variant="contained"
            onClick={() =>
              navigate(`/update?noticeId=${id}`, { state: { props: db.data } })
            }
          >
            수정
          </Button>

          <Button
            sx={{ mx: '10px', my: '20px' }}
            variant="contained"
            onClick={onDelete}
          >
            삭제
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default NoticeDetail;
