import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient(); //캐시와 훅을 쓸수있게 정의

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <App />
        <ReactQueryDevtools />
      </CookiesProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
