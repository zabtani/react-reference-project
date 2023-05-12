import React from 'react';
import AppContext from './AppContext';

const AppProvider = (props) => {
  const [count, setCount] = React.useState(0);
  const [history, setHistory] = React.useState([]);

  const sign = (value) =>
    setHistory((prev) => [...prev, { ...getCurrentDateTime(), value }]);

  const applyCount = (isUp) => {
    setCount((prev) => {
      const value = isUp ? prev + 1 : prev - 1;
      sign(value);
      return value;
    });
  };

  const increment = () => applyCount(true);

  const decrement = () =>
    count > 0 ? applyCount(false) : alert('you cannot go under 0.');

  const contextValue = {
    increment,
    decrement,
    count,
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
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const formattedDay = `${day}/${month}`;
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const formattedTime = `${hours}:${minutes}`;
  return {
    day: formattedDay,
    time: formattedTime,
  };
}
