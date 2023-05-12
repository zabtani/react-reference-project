import React from 'react';

const AppContext = React.createContext({
  count: 0,
  history: [],
  increment: () => {},
  decrement: () => {},
});

export default AppContext;
