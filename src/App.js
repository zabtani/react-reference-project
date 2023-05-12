import React from 'react';
import './style.css';
import Routes from './routes';
import AppProvider from './store/AppProvider';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
}
