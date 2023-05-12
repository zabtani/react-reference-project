import React from 'react';
import './style.css';
import AppProvider from './store/AppProvider';
import Count from './Count';
import CountButton from './CountButton';

export default function App() {
  return (
    <div>
      <AppProvider>
        <CountButton />
        <Count />
        <CountButton />
      </AppProvider>
    </div>
  );
}
