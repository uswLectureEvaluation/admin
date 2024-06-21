import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { getCookie } from '../../utils/Cookies';
import { useEffect, useState } from 'react';

const currentDate = new Date();
const customDate = `${currentDate.getFullYear()}년 ${
  currentDate.getMonth() + 1
}월 ${currentDate.getDate()}일`;

export default function Deposits() {
  const [memberCount, setMemberCount] = useState(0);
  useEffect(() => {
    if (getCookie('member')) {
      setMemberCount(getCookie('member'));
    }
  }, []);

  return (
    <React.Fragment>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ marginTop: '50px' }}>
            <Title>수위키 이용자수</Title>
          </div>
          <Typography component="p" variant="h4" marginTop="15px">
            {memberCount}명
          </Typography>
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            {customDate}
          </Typography>
          <div></div>
        </div>
      </div>
    </React.Fragment>
  );
}
