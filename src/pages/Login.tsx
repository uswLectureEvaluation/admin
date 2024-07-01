import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LoginDataType } from '../api/login';
import LoginApi from '../api/login';
import { useMutation } from '@tanstack/react-query';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Login = () => {
  const { login } = LoginApi();

  const LoginMutation = useMutation({
    mutationFn: (data: LoginDataType) => login(data) as Promise<void>,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
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
          <img src="logo.png" width="150px"></img>

          <Typography sx={{ mt: '10px' }} component="h1" variant="h5">
            ADMIN2
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
