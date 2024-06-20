import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { useEffect } from 'react';
// import { login } from './api/login';
import LoginAPi from './pages/Login';
import Main from './pages/Main';
import NoticeDetail from './pages/NoticeDetail';
import NoticeUpdate from './pages/NoticeUpdate';
import NoticeWrite from './pages/NoticeWrite';
import { AuthorizationProvider } from './providers/Authentication.tsx';
const App = () => {
  return (
    <BrowserRouter>
    <AuthorizationProvider>
      <Routes>
        <Route path="/" element={<LoginAPi />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/NoticeDetail" element={<NoticeDetail />} />
        <Route path="/Update" element={<NoticeUpdate />} />
        <Route path="/Write" element={<NoticeWrite />} />
      </Routes>
      </AuthorizationProvider>
    </BrowserRouter>
  );
};
export default App;
