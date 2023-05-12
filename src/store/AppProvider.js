import React from 'react';
import AppContext from './AppContext';

const AppProvider = (props) => {
  const [count, setCount] = React.useState(0);

  const contextValue = {
    setCount,
    count,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
