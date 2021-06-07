import React from 'react';
import styled from 'styled-components';

const SButton = styled.input`
  border: none;
  margin-top: 12px;
  background-color: ${props => props.theme.accent};
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 500;
  width: 100%;
  border-radius: 3px;
`

const Button = (props) => {
  return (<SButton {...props} />);
}

export default Button;