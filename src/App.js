import React from 'react';
import './style.css';
import Routes from './routes';
import AppProvider from './store/AppProvider';

export default function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
