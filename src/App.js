import React from 'react';
import './style.css';
import Routes from './routes';
import AppProvider from './store/AppProvider';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </QueryClientProvider>
  );
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000,
      cacheTime: 40000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});
