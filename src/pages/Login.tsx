import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LoginDataType } from '../api/login';
import LoginApi from '../api/login';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../utils/Cookies';
import { useMutation } from '@tanstack/react-query';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Login = () => {
  const { login } = LoginApi();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //   useEffect(() => {
  //     const IsToken = getCookie('Accesstoken');
  //     if (IsToken) {
  //       // setLoading(true);
  //       navigate('/main');
  //     }
  //   }, [login]);

  //   useEffect(() => {
  //     if (loading) {
  //       navigate('/main');
  //     }
  //   });

  const LoginMutation = useMutation({
    mutationFn: (data: LoginDataType) => login(data) as Promise<void>,
    // onSuccess: () => {
    //   console.log('요청 성공');
    // },
    // onError: () => {
    //   console.error('에러 발생');
    // },
    // onSettled: () => {
    //   console.log('결과에 관계 없이 무언가 실행됨');
    // },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      loginId: data.get('email')?.toString(),
      password: data.get('password'),
    });
    LoginMutation.mutate({
      loginId: data.get('email')?.toString() ?? '',
      password: data.get('password')?.toString() ?? '',
    });
    // login(String(data.get('email')), String(data.get('password')));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            SUWIKI ADMIN
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="ID"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Login;
