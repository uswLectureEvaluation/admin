import { getCookie } from '../utils/Cookies';
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactNode, useEffect } from 'react';

interface AuthenticationProviderProps {
  children: ReactNode;
}

export const AuthorizationProvider = ({
  children,
}: AuthenticationProviderProps) => {
  const navigate = useNavigate();
  const token = getCookie('Accesstoken');
  
 
  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token]);
  return <>{children}</>;
};
