import React from 'react';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <Container>
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/counter">counter</NavLink>
      <NavLink to="/table">table</NavLink>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
width:100%;
display:flex;
`;

const NavLink = styled(Link)`
background:red;
`;
