import React from 'react';
import Count from './Count';
import CountButton from './CountButton';
import AppProviderContext from '../store/AppContext';

const Counter = () => {
  const { count, setCount } = React.useContext(AppProviderContext);
  return (
    <div>
      <CountButton onClick={() => setCount((prev) => prev + 1)} />
      <CountButton onClick={() => setCount((prev) => prev - 1)} />
      <Count value={count} />
    </div>
  );
};
export default Counter;
