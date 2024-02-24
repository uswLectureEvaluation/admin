import { useEffect } from 'react';
import { login } from '../api/login';

const Home = () => {
  useEffect(() => {
    login('test', 'test');
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
