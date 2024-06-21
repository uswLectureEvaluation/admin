import { getCookie } from '../utils/Cookies';
import { useNavigate } from 'react-router-dom';
import { ReactNode, useEffect } from 'react';

interface AuthenticationProviderProps {
  children: ReactNode;
}

export const AuthorizationProvider = ({
  children,
}: AuthenticationProviderProps) => {
  const navigate = useNavigate();
  const token = getCookie('Accesstoken');

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token]);
  return <>{children}</>;
};
