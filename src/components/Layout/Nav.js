import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Layout = () => {
  return (
    <Container>
      <NavLink to="/"> Home</NavLink>
      <NavLink to="/counter">counter</NavLink>
      <NavLink to="/table">table</NavLink>
      <NavLink to="/swapi">Swapi people</NavLink>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
width:100%;
display:flex;
background:skyblue;

`;

const NavLink = styled(Link)`
margin:20px;
`;
