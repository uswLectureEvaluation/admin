
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { login } from '../api/login';
import { useEffect, useState } from 'react';
// import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../utils/Cookies';
import { useMutation } from '@tanstack/react-query';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Login = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false)
    
    useEffect(()=>{
        const IsToken = getCookie("Accesstoken")
        if(IsToken){
            setLoading(true)
        }
    })
   
    useEffect(()=>{
        if(loading){
            navigate("/main")
        }
    },)
   


  
    


    const onKeypress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const data = new FormData(e.currentTarget.form as HTMLFormElement);
            login(String(data.get('email')), String(data.get('password')));
        }
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });

        return({
            email: data.get('email'),
            password: data.get('password'),
        })
        // login(String(data.get('email')), String(data.get('password')));
    };


    // const LoginMutation = useMutation({
    //     mutationFn: () => login(String(data.get('email')), String(data.get('password'))),
    //     onSuccess: () => { console.log('요청 성공') },
    //     onError: () => { console.error('에러 발생') },
    //     onSettled: () => { console.log('결과에 관계 없이 무언가 실행됨') }
    // });
      
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
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                            onKeyDown={onKeypress}
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
