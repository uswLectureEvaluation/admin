import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

const App = () => {
  const BaseUrl = import.meta.env.BASE_URL;
  console.log(import.meta.env.VITE_APP_SERVICE_KEY);
  console.log(BaseUrl);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
