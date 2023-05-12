import React from 'react';
import AppProviderContext from '../../store/AppContext';
import styled from 'styled-components';

const Count = () => {
  const { currentCount } = React.useContext(AppProviderContext);

  return <Container>Count is: {currentCount}! </Container>;
};
export default Count;

const Container = styled.div`
background:skyblue;
margin-top:20px;
padding:20px;
font-size:2rem
`;
