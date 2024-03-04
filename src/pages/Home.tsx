import { useEffect, useState } from 'react';
// import { login } from '../api/login';
import { getAllReport } from '../api/getAllReport';

const Home = () => {
  const [A, SetA] = useState();
  // useEffect(() => {
  //   login('pos1070', '1q2w3e4r!');
  // }, []);

  useEffect(() => {
    getAllReport();
    // console.log(getall());
  }, []);
  return (
    <div>
      <h1>Home</h1>
      {A}
    </div>
  );
};

export default Home;
