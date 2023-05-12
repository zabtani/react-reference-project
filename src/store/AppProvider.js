import React from 'react';
import AppContext from './AppContext';
import { format } from 'date-fns';

const AppProvider = (props) => {
  const [count, setCount] = React.useState([]);
  const currentCount = count[count.length - 1]?.value ?? 0;

  const applyCount = (isUp) => {
    const newCount = {
      ...getCurrentDateTime(),
      value: isUp ? currentCount + 1 : currentCount - 1,
    };
    setCount((prev) => [...prev, newCount]);
  };

  const increment = () => applyCount(true);

  const decrement = () =>
    currentCount > 0 ? applyCount(false) : alert('you cannot go under 0.');

  const contextValue = {
    increment,
    decrement,
    count,
    history,
    currentCount,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;

function getCurrentDateTime() {
  const currentDate = new Date();
  return {
    day: format(currentDate, 'dd/MM'),
    time: format(currentDate, 'HH:mm'),
  };
}
