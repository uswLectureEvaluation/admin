import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { useEffect } from 'react';
import { login } from './api/login';
import Login from './pages/Login';
import Main from './pages/Main';

const App = () => {
  useEffect(() => {
    login('pos1070', '1q2w3e4r!');
  }, []);
  const BaseUrl = import.meta.env.BASE_URL;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
