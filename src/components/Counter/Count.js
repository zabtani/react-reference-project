import React from 'react';
import AppProviderContext from '../../store/AppContext';
const Count = () => {
  const { count } = React.useContext(AppProviderContext);

  return <div>Count is: {count}! </div>;
};
export default Count;
