import apiAxios from './apiAxios';
import { setCookie, getCookie } from '../utils/Cookies';
import { useNavigate } from 'react-router-dom';
import CustomRouter from '../utils/Routers';

export interface LoginDataType {
  loginId: string;
  password: string;
}
const LoginAPi = () => {
  const navigate = useNavigate();

  const login = async (loginData: LoginDataType) => {
    await apiAxios
      .post('/v2/admin/login', loginData)
      .then(r => {
        setCookie('Accesstoken', r.data.AccessToken);
        console.log(r.data);
        setCookie('member', r.data.UserCount);
        navigate('/main');
      })
      .catch(e => {
        e.response.data, alert('아이디 또는 비밀번호를 다시 입력해주세요');
      });
  };

  return { login };
};

export default LoginAPi;

// export const login = async (loginData: LoginDataType) => {
//   const navigation = CustomRouter();

//   await apiAxios
//     .post('/v2/admin/login', loginData)
//     .then(r => {
//       setCookie('Accesstoken', r.data.AccessToken);
//       console.log(r.data);
//       setCookie('member', r.data.UserCount);
//     })

//     .catch(e => {
//       e.response.data, alert('아이디 또는 비밀번호를 다시 입력해주세요');
//     });
// };
