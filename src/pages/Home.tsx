import { useEffect, useState } from 'react';
// import { login } from '../api/login';
import { getAllReport } from '../api/getAllReport';

const Home = () => {
  const [A, SetA] = useState();

  return (
    <div>
      <h1>Home</h1>
      {A}
    </div>
  );
};

export default Home;
