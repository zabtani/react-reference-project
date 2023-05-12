import React from 'react';
import styled from 'styled-components';

const CountButton = ({ onClick, text }) => {
  return <Button onClick={onClick}> {text}</Button>;
};
export default CountButton;
const Button = styled.button`
background:skyblue;
padding:20px;
border-radius:20px;
margin-right:20px;
`;
