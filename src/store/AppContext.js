import React from 'react';

const AppContext = React.createContext({
  count: [],
  increment: () => {},
  decrement: () => {},
});

export default AppContext;
