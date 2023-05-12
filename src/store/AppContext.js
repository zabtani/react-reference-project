import React from 'react';

const AppContext = React.createContext({
  count: 0,
  setCount: () => {},
});

export default AppContext;
