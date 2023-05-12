import React from 'react';
import { useRoutes } from 'react-router-dom';
import Counter from '../Counter';
import Table from '../Table';
import Layout from '../Layout';

const Routes = () => {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        // {
        //   path: '*',
        //   element: <Counter />,
        // },
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
