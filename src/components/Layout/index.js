import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import styled from 'styled-components';

const Layout = () => {
  return (
    <div>
      <Nav />
      <Page>
        <Outlet />
      </Page>
    </div>
  );
};

export default Layout;

const Page = styled.div`
padding:20px
`;
