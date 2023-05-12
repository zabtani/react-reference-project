import Counter from '../Counter';
import Table from '../Table';
import { useRoutes } from 'react-router-dom';

const Routes = () => {
  const routes = [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '*',
          element: <Counter />,
        },
        {
          path: '/counter',
          element: <Counter />,
        },
        {
          path: '/table',
          element: <Table />,
        },
      ],
    },
  ];
  return useRoutes(routes);
};

export default Routes;
