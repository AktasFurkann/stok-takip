import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query'
import { StokProvider } from './context/stokContext';
import { UrunProvider } from './context/urunContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <UrunProvider>
      <StokProvider>
        <App />
      </StokProvider>
    </UrunProvider>
  </QueryClientProvider>
);

reportWebVitals();