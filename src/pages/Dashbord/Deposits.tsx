import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { getCookie } from '../../utils/Cookies';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

const currentDate = new Date();
const customDate = `${currentDate.getFullYear()}년 ${
  currentDate.getMonth() + 1
}월 ${currentDate.getDate()}일`;

const memberCount = getCookie('member');
export default function Deposits() {
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
          <div>
            {/* <Link color="primary" href="#" onClick={preventDefault}>
              View balance
            </Link> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
