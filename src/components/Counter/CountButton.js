import React from 'react';
import styled from 'styled-components';

const CountButton = ({ onClick }) => {
  return <Button onClick={onClick}> CountButton test</Button>;
};
export default CountButton;
const Button = styled.button`
background:skyblue;
padding:20px;
border-radius:20px;
`;
