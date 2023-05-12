import React from 'react';
import { useRoutes } from 'react-router-dom';
import Counter from '../Counter';
import Table from '../Table';
import Layout from '../Layout';
import Home from '../Home';

const Routes = () => {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'counter',
          element: <Counter />,
        },
        {
          path: 'table',
          element: <Table />,
        },
      ],
    },
  ];
  return useRoutes(routes);
};

export default Routes;
