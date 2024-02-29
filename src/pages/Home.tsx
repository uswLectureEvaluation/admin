import { useEffect, useState } from 'react';
import { login } from '../api/login';
import { getall } from '../api/getall';

const Home = () => {
  const [A, SetA] = useState();
  // useEffect(() => {
  //   login('pos1070', '1q2w3e4r!');
  // }, []);

  useEffect(() => {
    getall();
    // console.log(getall());
  }, []);
  return (
    <div>
      <h1>Hme</h1>
      {A}
    </div>
  );
};

export default Home;
