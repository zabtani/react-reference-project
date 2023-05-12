import React from 'react';
import AppProviderContext from '../../store/AppContext';

const Count = () => {
  const { currentCount } = React.useContext(AppProviderContext);

  return <div>Count is: {currentCount}! </div>;
};
export default Count;
