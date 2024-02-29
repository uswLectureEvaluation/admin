import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { useEffect } from 'react';
import { login } from './api/login';

const App = () => {
  // useEffect(() => {
  //   login('pos1070', '1q2w3e4r!');
  // }, []);
  const BaseUrl = import.meta.env.BASE_URL;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
