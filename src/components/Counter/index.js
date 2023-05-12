import React from 'react';
import Count from './Count';
import CountButton from './CountButton';
import AppProviderContext from '../../store/AppContext';

const Counter = () => {
  const { decrement, increment, count } = React.useContext(AppProviderContext);
  return (
    <div>
      <CountButton onClick={increment} text="increment" />
      <CountButton onClick={decrement} text="decrement" />
      <Count value={count} />
    </div>
  );
};
export default Counter;
