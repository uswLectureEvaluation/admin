import apiAxios from './apiAxios';
import { setCookie } from '../utils/Cookies';
import { useNavigate } from 'react-router-dom';

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
        window.location.reload();
      })
      .catch(e => {
        e.response.data, alert('아이디 또는 비밀번호를 다시 입력해주세요');
      });
  };

  return { login };
};

export default LoginAPi;
