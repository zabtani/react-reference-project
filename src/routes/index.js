import React from 'react';
import { useRoutes } from 'react-router-dom';
import Counter from '../components/Counter';
import Table from '../components/Table';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Swapi from '../components/Swapi';

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
        {
          path: 'swapi',
          element: <Swapi />,
        },
      ],
    },
  ];
  return useRoutes(routes);
};

export default Routes;
